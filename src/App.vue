<template>
  <div class="bg-black min-h-screen">
    <!-- Application entière avec fond noir -->
    <SpeedInsights />
    <Analytics />
    <NavBar />
    <RouterView />
  </div>
  </template>
  
  <script setup>
  import NavBar from '@/components/NavBar.vue';
  import { RouterView } from 'vue-router';
  import { Analytics } from '@vercel/analytics/vue';
  import { SpeedInsights } from '@vercel/speed-insights/vue';
  </script>
  
  <style>
  /* Ajout du style pour appliquer le fond noir global */
  body {
    background-color: black;
    color: white; /* Facultatif pour garantir une bonne lisibilité */
    margin: 0;
    font-family: Arial, sans-serif;
  }
  </style>
  