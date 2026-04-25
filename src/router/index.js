import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WorkForm from '../views/WorkForm.vue'
import Params from "@/views/Params.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/workform', component: WorkForm, name: 'WorkForm' },
    { path: '/params', component: Params, name: 'Params' },
  ],
})

export default router
