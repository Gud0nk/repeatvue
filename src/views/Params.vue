<script setup>
import { ref } from 'vue';
let surname = ref('')
let name = ref('')

</script>

<template>
  <h2>Входные параметры</h2>
  <Example1 :surname=surname :name=name></Example1>
</template>

<style scoped>

</style>