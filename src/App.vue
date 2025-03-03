<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
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
  background: linear-gradient(to bottom right, #1f2937, #111827, #000000);
  color: white;
}
</style>
