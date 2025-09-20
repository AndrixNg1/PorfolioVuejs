<template>
  <section class="bg-gray-900 min-h-screen text-white py-16 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

      <!-- Profil -->
      <div class="space-y-6 about-profile">
        <div class="text-center md:text-left">
          <img src="/images/and1.jpg" alt="Profile"
            class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-700 shadow-xl object-cover mx-auto md:mx-0" />
          <h2 class="text-2xl md:text-3xl font-bold mt-4">Andrix Ngoyi</h2>
          <p class="text-green-400 font-medium">Software engineer</p>
          <p class="text-gray-400 text-sm md:text-base mt-2 leading-relaxed">
            "As a software engineer, every line of code is a step toward creating a unique experience.
            Keep learning and innovating, because every project makes you stronger!"
          </p>
        </div>

        <!-- Icônes sociales -->
        <div class="flex justify-center md:justify-start space-x-5 mt-6 text-gray-400 text-2xl">
          <a href="https://github.com/AndrixNg1" target="_blank"
            class="flex items-center justify-center w-12 h-12 border-2 border-green-500 rounded-full hover:scale-110 hover:shadow-lg transition transform duration-300">
            <img src="/images/sv3.svg" alt="GitHub" class="w-6 h-6" />
          </a>

          <a href="https://www.linkedin.com/in/andrix-ngoyi-469662321" target="_blank"
            class="flex items-center justify-center w-12 h-12 border-2 border-green-500 rounded-full hover:scale-110 hover:shadow-lg transition transform duration-300">
            <img src="/images/sv2.svg" alt="LinkedIn" class="w-6 h-6" />
          </a>

          <a href="mailto:andrixngoyi243@gmail.com"
            class="flex items-center justify-center w-12 h-12 border-2 border-green-500 rounded-full hover:scale-110 hover:shadow-lg transition transform duration-300">
            <img src="/images/sv1.svg" alt="Email" class="w-6 h-6" />
          </a>

          <a href="https://www.instagram.com/andrix_ngoyi" target="_blank"
            class="flex items-center justify-center w-12 h-12 border-2 border-green-500 rounded-full hover:scale-110 hover:shadow-lg transition transform duration-300">
            <i class="pi pi-instagram text-green-500 text-lg"></i>
          </a>
        </div>
      </div>

      <!-- Galerie d'images responsive -->
      <div
        class="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4 about-gallery auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] grid-flow-dense">
        <div v-for="(image, index) in images" :key="index" class="overflow-hidden rounded-lg shadow-lg group relative"
          :class="{
            'row-span-2': index % 7 === 0,   // certaines images prennent 2 rows
            'col-span-2': index % 11 === 0   // certaines prennent 2 colonnes
          }">
          <img :src="image.src" :alt="image.alt"
            class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-sm text-white font-medium">
            {{ image.alt }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = reactive([
  { src: "/images/img1.jpg", alt: "Design UI" },
  { src: "/images/img2.jpg", alt: "Développement Frontend" },
  { src: "/images/img3.jpg", alt: "Backend APIs" },
  { src: "/images/home/1.jpeg", alt: "Team Collaboration" },
  { src: "/images/and1.jpg", alt: "Profile Shot" },
  { src: "/images/kaba.jpg", alt: "Workspace" },
]);

onMounted(() => {
  // Anim profil
  gsap.from(".about-profile", {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-profile",
      start: "top 80%",
    },
  });

  // Anim galerie
  gsap.from(".about-gallery div", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".about-gallery",
      start: "top 85%",
    },
  });
});
</script>
