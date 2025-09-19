<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br bg-gray-900  text-white">
    <SpeedInsights />
    <Analytics />
    <NavBar />
    <div class="flex-grow">
      <RouterView />
    </div>
    <FooterView />
  </div>
</template>

<script setup>
import FooterView from '@/components/FooterView.vue';
import NavBar from '@/components/NavBar.vue';
import { RouterView } from 'vue-router';
import { Analytics } from '@vercel/analytics/vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<style>
/* Appliquer un background global cohérent */
body, html {
  background: black;
  color: white;
}
</style>
