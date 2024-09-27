<template>
  <div>
    <h2>Todo List</h2>
    <form @submit.prevent="createTodo">
      <input required v-model="newTodo" placeholder="Name">
      <button type="submit">Create Todo</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" @click="checkTodo(todo)">
        {{ todo.title }}
        <button @click="updateTodo(todo)">Edit</button>
        <button @click="deleteTodo(todo.id)">Delete</button>
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

async function updateTodo(todo) {
  const updatedTitle = prompt('Enter new title:', todo.title)
  if (updatedTitle) {
    await fetch(`/api/todos?id=${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTitle),
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