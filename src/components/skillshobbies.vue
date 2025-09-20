<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Icônes Skills
import { Code, Palette, Smartphone, Server } from "lucide-vue-next"

// Icônes Hobbies
import { Music, Book, Trophy, Globe, Film, Mic } from "lucide-vue-next"

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Anim Skills
  gsap.from(".skills-col", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: { trigger: ".skills-col", start: "top 80%" }
  })

  // Progress bars
  gsap.utils.toArray(".progress-bar").forEach((bar) => {
    const value = bar.getAttribute("data-value")
    gsap.fromTo(bar, { width: "0%" }, {
      width: value + "%",
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: { trigger: bar, start: "top 85%" }
    })
  })

  // Anim Hobbies
  gsap.from(".hobbies-col", {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: { trigger: ".hobbies-col", start: "top 80%" }
  })
})
</script>

<template>
  <section class="w-full py-16 px-4 sm:px-6 lg:px-12 bg-gray-900 text-gray-100">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

      <!-- Skills -->
      <div class="skills-col">
        <h2 class="text-2xl sm:text-3xl font-bold text-green-400 mb-6">Skills</h2>
        <ul class="space-y-6 text-base sm:text-lg">
          <!-- Vue.js -->
          <li>
            <div class="flex items-center space-x-3 mb-2">
              <Code class="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              <span>Vue.js</span>
              <span class="ml-auto text-xs sm:text-sm text-gray-400">85%</span>
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div class="progress-bar h-2 bg-green-400 rounded-full" data-value="85"></div>
            </div>
          </li>

          <!-- React Native -->
          <li>
            <div class="flex items-center space-x-3 mb-2">
              <Smartphone class="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              <span>React Native / Expo</span>
              <span class="ml-auto text-xs sm:text-sm text-gray-400">60%</span>
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div class="progress-bar h-2 bg-green-400 rounded-full" data-value="60"></div>
            </div>
          </li>

          <!-- Laravel -->
          <li>
            <div class="flex items-center space-x-3 mb-2">
              <Server class="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              <span>Laravel & APIs</span>
              <span class="ml-auto text-xs sm:text-sm text-gray-400">75%</span>
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div class="progress-bar h-2 bg-green-400 rounded-full" data-value="75"></div>
            </div>
          </li>

          <!-- TailwindCSS -->
          <li>
            <div class="flex items-center space-x-3 mb-2">
              <Palette class="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              <span>TailwindCSS</span>
              <span class="ml-auto text-xs sm:text-sm text-gray-400">85%</span>
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div class="progress-bar h-2 bg-green-400 rounded-full" data-value="85"></div>
            </div>
          </li>

          <!-- Cloud -->
          <li>
            <div class="flex items-center space-x-3 mb-2">
              <Server class="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              <span>Cloud Computing AWS</span>
              <span class="ml-auto text-xs sm:text-sm text-gray-400">45%</span>
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div class="progress-bar h-2 bg-green-400 rounded-full" data-value="45"></div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Hobbies -->
      <div class="hobbies-col">
        <h2 class="text-2xl sm:text-3xl font-bold text-blue-400 mb-6">Hobbies</h2>
        <div class="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6">
          <div v-for="(hobby, i) in [
            { icon: Music, label: 'Music' },
            { icon: Book, label: 'Reading' },
            { icon: Trophy, label: 'Football' },
            { icon: Globe, label: 'Traveling' },
            { icon: Mic, label: 'Sharing Experience' },
            { icon: Film, label: 'Anime & Movies' }
          ]" :key="i"
            class="p-4 sm:p-6 text-center hover:scale-105 transition rounded-xl backdrop-blur-md">

            <div class="w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-gray-950 shadow-lg">
              <component :is="hobby.icon" class="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
            <p class="mt-2 sm:mt-3 text-sm sm:text-lg">{{ hobby.label }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
