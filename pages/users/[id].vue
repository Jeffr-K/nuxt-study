<template>
  <div>
    <h1>User Detail</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="userData">
      <p>ID: {{ userData.id }}</p>
      <p>Name: {{ userData.name }}</p>
      <p>Email: {{ userData.email }}</p>
    </div>
    <div>
      <NuxtLink to="/users">Back to Users</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const {data: userData, error, pending} = await useFetch(`/api/users/${route.params.id}`)
</script>
