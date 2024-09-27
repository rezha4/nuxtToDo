<template>
  <div class="grid place-content-center p-12 gap-5">
    <h1 class="text-4xl text-center font-semibold">Todo List App</h1>
    <form class="bg-sky-100 p-8 w-[304px] md:w-[420px] rounded-lg flex flex-col gap-4" @submit.prevent="createTodo">
      <input class="p-1 rounded-lg text-center" required v-model="newTodo" placeholder="Todo">
      <button class="bg-blue-600 text-white p-1 rounded-lg active:bg-blue-800 hover:scale-105 transition-all ease" type="submit">Create Todo</button>
    </form>
    <ul>
      <li class="flex gap-3 items-center justify-center space-y-2" v-for="todo in todos" :key="todo.id">
        <input class="size-6"type="checkbox" :checked="todo.done" @change="checkTodo(todo)">
        <p class="w-[140px] md:w-64 break-words">{{ todo.title }}</p>
        <button class="active:bg-emerald-800 hover:scale-105 transition-all ease bg-emerald-600 text-white p-2 rounded-lg" @click="updateTodo(todo)">Edit</button>
        <button class="active:bg-red-800 hover:scale-105 transition-all ease bg-red-600 text-white p-2 rounded-lg" @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const todos = ref([])
const newTodo = ref("")

onMounted(async () => {
  await fetchTodos()
})

async function fetchTodos() {
  const response = await fetch('/api/todos')
  todos.value = await response.json()
}

async function createTodo() {
  await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo.value),
    headers: { 'Content-Type': 'application/json' },
  })
  newTodo.value = ""
  await fetchTodos()
}

async function checkTodo(todo) {
  const updatedTodo = { ...todo, done: !todo.done }
  await fetch(`/api/todos?id=${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedTodo),
    headers: { 'Content-Type': 'application/json' },
  })
  await fetchTodos()
}

async function updateTodo(todo) {
  const updatedTitle = prompt('Enter new title:', todo.title)
  const updatedTodo = {...todo, title: updatedTitle}
  if (updatedTitle) {
    await fetch(`/api/todos?id=${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTodo),
      headers: { 'Content-Type': 'application/json' },
    })
    await fetchTodos()
  }
}

async function deleteTodo(id) {
  await $fetch(`/api/todos?id=${id}`, { method: 'DELETE' })
  await fetchTodos()
}
</script>