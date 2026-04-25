<script setup>
import { ref, computed } from 'vue'
let surname = ref('нет')
let name = ref('данная переменная реактивная');
let count = ref(0);
let userdata = ref(["Just the way are", "Mockingbird","i got love","dont worry","spit in my face"]);
function countIncrement () {
  count.value++;
}
function changeShow() {
  isShow.value = !isShow.value;
}
let isShow = ref(false);
let fullname = computed( {
  get(){
    if (!name.value) return surname.value;
    if (!surname.value) return name.value;

    return surname.value + " " + name.value;
  },
  set(newValue){
    [surname.value, name.value] = newValue.split(' ');
    if (typeof surname.value === "undefined") {
      surname.value = " ";
    }
    if (typeof name.value === "undefined") {
      name.value = " ";
    }
  }
})

function changeClass() {
  isClass.value = !isClass.value;

}
let buttonText = ('Убрать класс')
let typeInput = ref('password')
let buttonText2 = ref('показать пароль')
function changeInput() {
  if ( typeInput.value == "password" ) {
    typeInput.value = "text";
    buttonText2.value = "скрыть пароль";
  } else {
    typeInput.value = "password";
    buttonText2.value = "показать пароль";
  }
}
function Hello(message) {

}
let textarea = ref("")
</script>

<template>
  <h2>изучаем vue 3</h2>
  <p>Вывод переменной наме:{{name}}</p>
  <button @click="countIncrement">fferer {{count}}</button>
  <h3>список песенок</h3>
  <ul>
    <li v-for="user in userdata">{{user}}</li>
  </ul>
  <h3>условное отображение</h3>
  <button v-if="isShow">кнопка от егора которую видно</button>
  <button v-else>кнопка от егора которую невидно</button>
  <button @click="changeShow">переключение</button>
  <h3>вычисляемое свойство</h3>
  <p>{{fullname}}</p>
  <input v-model="surname" type="text" name="surname" placeholder="фамилия">
  <input v-model="name" type="text" name="name" placeholder="имя">
  <p>{{surname}} {{name}}</p>
  <input v-model="fullname" type="text" name="fullname">

  <p :class="{'color-red': isClass,'text-bold': isClass}">classi</p>
  <button>добавить класси \ убрать класси</button>


  <textarea v-model="textarea" ></textarea>
  <p> {{textarea}}</p>


</template>

<style scoped>
  .color-red {
    color: red;
  }
  .text-bold {
    font-weight: bold;
  }
</style>