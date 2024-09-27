import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const id = query.id ? Number(query.id) : null;

  if (event.method === "GET") {
    return await prisma.todo.findMany();
  }

  if (event.method === "POST") {
    const title = await readBody(event);
    return await prisma.todo.create({
      data: {
        title: title,
        done: false,
      },
    });
  }

  if (event.method === "DELETE" && id) {
    return await prisma.todo.delete({ where: { id } });
  }

  if (event.method === "PUT" && id) {
    const body = await readBody(event);
    return await prisma.todo.update({
      where: { id },
      data: body,
    });
  }
});
