<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <RouterLink :to="{ path: '/' }">Главная</RouterLink>
    <RouterLink to="/workform"> работа с формами</RouterLink>
    <RouterLink to="/params"> входные параметры</RouterLink>
    <ul>

    </ul>
  </header>
  <main id="main">
    <RouterView />
  </main>
  <footer></footer>
</template>

<style scoped></style>
