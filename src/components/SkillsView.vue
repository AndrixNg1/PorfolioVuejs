<template>
  <div class="p-4 mt-8">
    <!-- Section Compétences Techniques -->
    <h2 class="text-3xl font-bold text-center text-gradient mb-10">
      Compétences Techniques
    </h2>
    <div class="skills-container">
      <div
        v-for="(skill, index) in infiniteSkills"
        :key="index"
        class="card text-center p-6 bg-gradient-to-b from-[#1e1e1e] to-[#292929] rounded-xl shadow-lg"
      >
        <img
          :src="skill.image"
          alt="skills"
          class="w-20 h-20 mx-auto mb-4 hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>

    <!-- Section Outils -->
    <div class="mt-16">
      <h2 class="text-3xl font-bold text-center text-gradient mb-8">
        Outils
      </h2>
      <div class="tools-container">
        <div
          v-for="(tool, index) in infiniteTools"
          :key="index"
          class="card text-center p-6 bg-gradient-to-b from-[#1e1e1e] to-[#292929] rounded-xl shadow-lg"
        >
          <img
            :src="tool.icon"
            alt="tool"
            class="w-20 h-20 mx-auto mb-4 hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const skills = [
  { image: '/images/4.svg' },
  { image: '/images/8.svg' },
  { image: '/images/11.svg' },
  { image: '/images/1_KTAstxDm8yEG17u94avrXw-removebg-preview.png' },
  { image: '/images/18.svg' },
  { image: '/images/21 (1).svg' },
  { image: '/images/laravel-logo.png' },
  { image: '/images/30.svg' },
  { image: '/images/33.svg' },
  { image: '/images/elephant.png' },
  { image: '/images/jetpack_compose_icon_RGB-removebg-preview.png' },
]

const tools = [
  { icon: '/images/images-removebg-preview.png' },
  { icon: '/images/imagesAndroid-removebg-preview.png' },
  { icon: '/images/Visual-Studio-Code-est-un-editeur-de-code-solide-pour-removebg-preview.png' },
  { icon: '/images/85f69649-5387-44c2-ba45-81ae13812e36-cover-removebg-preview.png' },
  { icon: '/images/avnac-removebg-preview.png' },
  { icon: '/images/npm-logo-red.svg' },
]

// Duplicating arrays for infinite loop
const infiniteSkills = [...skills, ...skills]
const infiniteTools = [...tools, ...tools]

// Automatic scroll
const autoScroll = (selector, duration) => {
  const container = document.querySelector(selector)
  let scrollAmount = 0

  const scrollStep = () => {
    scrollAmount += 1
    container.scrollLeft = scrollAmount
    if (scrollAmount >= container.scrollWidth / 2) {
      container.scrollLeft = 0
      scrollAmount = 0
    }
  }

  setInterval(scrollStep, duration)
}

onMounted(() => {
  autoScroll('.skills-container', 30) // Adjust duration for speed
  autoScroll('.tools-container', 30)
})
</script>

<style scoped>
/* Styles pour les sections de défilement */
.skills-container,
.tools-container {
  display: flex;
  gap: 1rem;
  overflow: hidden;
  position: relative;
  background: #121212;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  white-space: nowrap;
}

/* Cartes */
.card {
  flex: 0 0 auto;
  width: 150px;
  height: 150px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: scale(1.1);
  box-shadow: 0px 15px 30px rgba(60, 207, 145, 0.3);
}

/* Gradient de titre */
.text-gradient {
  background: linear-gradient(to right, #3ccf91, #00b4d8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
