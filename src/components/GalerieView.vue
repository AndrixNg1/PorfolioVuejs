<template>
  <section class="bg-gray-900 min-h-screen text-white flex flex-col items-center py-16">
    <!-- Profil -->
    <div class="text-center mt-10">
      <img src="/images/and1.jpg" alt="Profile" class="w-24 h-24 rounded-full mx-auto border-4 border-gray-700" />
      <h2 class="text-2xl font-bold mt-4">Andrix Ngoyi</h2>
      <p class="text-gray-400">Développeur web</p>
      <p class="text-gray-500 text-sm mt-2">
        "En tant que développeur web, chaque ligne de code est une étape vers la création d'une expérience unique. Continue à apprendre et à innover, car chaque projet te rend plus fort !"
      </p>

      <!-- Icônes sociales -->
      <div class="flex justify-center space-x-4 mt-4 text-gray-400">
        <a href="#" class="hover:text-white"><i class="fab fa-instagram"></i></a>
        <a href="#" class="hover:text-white"><i class="fab fa-github"></i></a>
        <a href="#" class="hover:text-white"><i class="fab fa-tiktok"></i></a>
        <a href="#" class="hover:text-white"><i class="fas fa-globe"></i></a>
      </div>
    </div>

    <!-- Galerie d'images -->
    <div class="grid grid-cols-3 gap-2 mt-10 w-10/12 max-w-4xl">
      <div v-for="(image, index) in images" :key="index" class="overflow-hidden rounded-lg">
        <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const images = reactive([
  { src: "/images/img1.jpg", alt: "Image 1" },
  { src: "/images/img2.jpg", alt: "Image 2" },
  { src: "/images/img3.jpg", alt: "Image 3" },
  { src: "/images/img4.jpg", alt: "Image 4" },
  { src: "/images/and1.jpg", alt: "Image 5" },
  { src: "/images/img6.jpg", alt: "Image 6" },
  { src: "/images/img7.jpg", alt: "Image 7" },
  { src: "/images/img8.jpg", alt: "Image 8" },
  { src: "/images/img9.jpg", alt: "Image 9" },
]);
</script>
