<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Icônes pour Skills
import { Code, Palette, Smartphone, Server, Layers } from "lucide-vue-next"

// Icônes pour Hobbies
import { Music, Book, Trophy, Globe, Film, Mic } from "lucide-vue-next"

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Anim Skills
  gsap.from(".skills-col", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".skills-col",
      start: "top 80%",
    }
  })

  // Animation barres de progression
  gsap.utils.toArray(".progress-bar").forEach((bar) => {
    const value = bar.getAttribute("data-value")
    gsap.fromTo(bar,
      { width: "0%" },
      {
        width: value + "%",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 85%",
        }
      }
    )
  })

  // Anim Hobbies
  gsap.from(".hobbies-col", {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hobbies-col",
      start: "top 80%",
    }
  })
})
</script>

<template>
  <section class="w-full py-20 px-6 bg-gray-900 text-gray-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

      <!-- Skills -->
      <div class="skills-col">
        <h2 class="text-3xl font-bold text-green-400 mb-6">Skills</h2>
        <ul class="space-y-6 text-lg">

          <!-- Vue.js  -->
          <li>
            <div class="flex items-center space-x-3 mb-2">
              <Code class="w-6 h-6 text-green-400" />
              <span>Vue.js </span>
              <span class="ml-auto text-sm text-gray-400">85%</span>
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div class="progress-bar h-2 bg-green-400 rounded-full" data-value="85"></div>
            </div>
          </li>

          <!-- React Native / Expo -->
          <li>
            <div class="flex items-center space-x-3 mb-2">
              <Smartphone class="w-6 h-6 text-green-400" />
              <span>React Native / Expo</span>
              <span class="ml-auto text-sm text-gray-400">60%</span>
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div class="progress-bar h-2 bg-green-400 rounded-full" data-value="60"></div>
            </div>
          </li>

          <!-- Laravel & APIs -->
          <li>
            <div class="flex items-center space-x-3 mb-2">
              <Server class="w-6 h-6 text-green-400" />
              <span>Laravel & APIs</span>
              <span class="ml-auto text-sm text-gray-400">75%</span>
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div class="progress-bar h-2 bg-green-400 rounded-full" data-value="75"></div>
            </div>
          </li>

          <!-- TailwindCSS -->
          <li>
            <div class="flex items-center space-x-3 mb-2">
              <Palette class="w-6 h-6 text-green-400" />
              <span>TailwindCSS</span>
              <span class="ml-auto text-sm text-gray-400">85%</span>
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div class="progress-bar h-2 bg-green-400 rounded-full" data-value="85"></div>
            </div>
          </li>

          <!-- Fullstack Development -->
          <li>
            <div class="flex items-center space-x-3 mb-2">
              <Server class="w-6 h-6 text-green-400" />
              <span>Cloud Computing AWS</span>
              <span class="ml-auto text-sm text-gray-400">45%</span>
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div class="progress-bar h-2 bg-green-400 rounded-full" data-value="45"></div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Hobbies -->
      <div class="hobbies-col">
        <h2 class="text-3xl font-bold text-blue-400 mb-6">Hobbies</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <!-- Items générés -->
          <div v-for="(hobby, i) in [
            { icon: Music, label: 'Music' },
            { icon: Book, label: 'Reading' },
            { icon: Trophy, label: 'Football' },
            { icon: Globe, label: 'Traveling' },
            { icon: Mic, label: 'Sharing Experience' },
            { icon: Film, label: 'Anime & Movies' }
          ]" :key="i" class="p-6 text-center hover:scale-105 transition">

            <div class="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gray-950 shadow-lg">
              <component :is="hobby.icon" class="w-8 h-8 text-blue-400" />
            </div>

            <p class="mt-3 text-lg">{{ hobby.label }}</p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
