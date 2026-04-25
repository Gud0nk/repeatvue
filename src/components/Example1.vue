<script setup>
import {onMounted, ref} from 'vue'
let data = ref(null)
let props = defineProps(['surname','name']);

onMounted(async () => {
  const response = await fetch('/data.json').then(res => res.json())
  data.value = response.users
})

</script>

<template>

  <p>даватель: {{props.surname}} {{props.name}}</p>
  <p>пользователи:</p>
  <li v-for="user in data">
      {{user.surname}} {{user.name}}
  </li>

</template>

<style scoped>

</style>