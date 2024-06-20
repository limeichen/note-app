import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import NoteView from '../views/NoteView.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NoteView
    }
  ]
})

export default router
