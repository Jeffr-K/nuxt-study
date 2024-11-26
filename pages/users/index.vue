<template>
  <div>
    <h1>Users List</h1>
    <ul>
      <li v-for="id in [1, 2, 3, 4, 5]" :key="id">
        <NuxtLink :to="`/users/${id}`">
          User {{ id }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>
