import { createRouter, createWebHistory } from 'vue-router'

import Blog from '@/views/blog.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import BlogPost from '@/views/blog/[slug].vue'
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
      path : '/blog',
      name : 'blog',
      component : Blog
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost,
      props: true
    },
    {
      path : '/contact',
      name : 'contact',
      component : Contact
    }
  ]
})

export default router
