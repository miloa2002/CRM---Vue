import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/nuevo-cliente',
      name: 'nuevo-cliente',
      component: () => import("../views/NewClient.vue")
    },
    {
      path: '/editar-cliente/:id',
      name: 'edita-cliente',
      component: () => import("../views/UpdateClient.vue")
    }
  ]
})

export default router
