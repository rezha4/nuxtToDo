# Take Home Test - To Do App with Nuxt.js, Vue.js & Postgresql Database
This is my project submission for a take home test on a company I applied to. I am recommended to use the above stack.

# How To Run This Locally
1. git clone this repo
2. cd into this repo
3. run npm install
4. done, run npm run dev for the development server

# Documentation
## Getting Started
This is my first time coding with Vue.js & Nuxt.js, but since it is a simple to do app & still falls beneath the javascript ecosystem, I am confident that I can do well.

## Installing Nuxt.js
I started this by browsing nuxtjs on google, and immediately brought to Nuxt's home page, where I run npx nuxi@latest init <my-app>.
So I run it in my Ubuntu WSL2 terminal, entered a bunch of (y)'s, and voila the project is scaffolded, just like Next.js.

## Setting Up Postgres
Finding a hosted postgresql is a bit tricky because they're often not very generous with the limit, usually only 1 db per account.
I used neon for this project.

## Hosting on Vercel

## Coding the To Do App
### Learning Vue.js
I had no experience with Vue, so I headed on to their official docs & passed their 15 steps tutorial. Learned the syntax, and how convenient: the tutorial #7 is about building a TODO app!
I learned:
- Vue's Single-File Component (SFC)
- Variable declaration with ref & reactive (vue's API)
- Directives and its short-hands:
  - variable binding with v-bind or ":"
  - event listener with v-on or "@"
  - form bindings with v-model (syntax sugar for compounding : & @)
  - conditinal renderring with v-if & v-else
  - iteration/list rendering with v-for
- Computed Property, this is a new one - we don't have it in React! This API will receive a function that runs a reactive property through it

### Learning Nuxt.js

### Installing Prisma
Luckily, Nuxt.js is batteries included framework - there is a lot of module that should integrate nicely with this, and there is a prisma one for easily doing CRUD with a postgresql database: ```npm install @prisma/nuxt``` from https://nuxt.com/modules/prisma.
Theoritically, I just need to hook my database and use server components for doing CRUD operations.