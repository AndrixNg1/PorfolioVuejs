import { createRouter, createWebHistory } from 'vue-router'

import Projet from '@/components/ProjetView.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'home',
      component : Home
    },
    {
      path : '/about',
      name : 'about',
      component : About
    },
    {
      path : '/projets',
      name : 'projet',
      component : Projet
    },

    {
      path : '/contact',
      name : 'contact',
      component : Contact
    }
  ]
})

export default router
