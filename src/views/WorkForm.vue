<script setup>
import { ref } from 'vue'

let name = ref('');
let name2 = ref('');
let checked = ref(false)
let radio = ref("")
let checkedname = ref("")
let spisok = ref("");
let list = ref([])
let select = ref("первый");
let options = ref([
  {text: 'первый', value: '1'},
  {text: 'второй', value: '2'},
  {text: 'третий', value: '3'},
])
</script>

<template>
  <div>
    <h2>директива v-model</h2>
  <input type="text" name="name" placeholder="Name">
  <p>вас зовут: {{name}}</p>
  </div>
  <div>
    <textarea v-model="name2"></textarea>
    <p>вас зовут: {{ name2 }}</p>
  </div>
  <div>
    <input type="checkbox">
    <input id="checkbox" type="checkbox" v-model="checked">
    <label for="checkbox">{{checked}}</label>
  </div>
  <div>
    <p>автомат</p>
    <input id="dimka" type="checkbox" v-model="checkedname">
    <label for="v2">я</label>
    <br>
    <input id="egor" type="checkbox" v-model="checkedname">
    <label for="v3">не я</label>
    <br>
    <input id="alik" type="checkbox" v-model="checkedname">
    <label for="v4">я</label>
    <p>отмеченные имена: {{checked}}</p>
  </div>
  <div>
    <p>выбрано</p>
    <input type="radio" v-model="radio" value="адин">
    <input type="radio" v-model="radio" value="два">
  </div>
  <div>
    <p>выбрано: {{ spisok }}</p>
    <select v-model="spisok">
      <option disabled value="1">а</option>
      <option value="2">и</option>
      <option value="3">ф</option>
      <option value="4">в</option>
    </select>
  </div>
  <div>
    <p>выбрано: {{ list }}</p>
    <select v-model="list" multiple>
      <option disabled value="1">а</option>
      <option value="2">и</option>
      <option value="3">ф</option>
      <option value="4">в</option>
    </select>
  </div>
</template>

<style scoped>

</style>