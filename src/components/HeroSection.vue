<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import gsap from "gsap"
import Typewriter from "typewriter-effect/dist/core"

const typewriter = ref(null)
let ctx
let tl

onMounted(() => {
  ctx = gsap.context(() => {
    // Timeline d'entrée uniquement
    tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    tl.from(".hero-text", { x: -50, opacity: 0, duration: 1 })
      .from(".hero-name", { x: -50, opacity: 0, duration: 1 }, "-=0.5")
      .from(".hero-paragraph", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(".hero-buttons a", {}, "-=0.5")
      .from(".hero-image img", {}) // ← image reste visible

  })

  // Typewriter effect
  const typewriterInstance = new Typewriter(typewriter.value, {
    loop: true,
    deleteSpeed: 50,
  })
  typewriterInstance
    .typeString("Fullstack Developer")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Creative Technologist")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Digital Architect")
    .pauseFor(1500)
    .start()
})

onBeforeUnmount(() => ctx && ctx.revert())
</script>

<template>
  <section
    class="hero-section flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)] pt-28 relative">
    <!-- Texte -->
    <div class="lg:w-1/2">
      <h1 class="hero-text text-5xl font-semibold mb-4 text-green-400">
        Hello <span class="inline-block animate-wave">👋</span>, I’m
      </h1>
      <h2 class="hero-name text-6xl font-extrabold text-white mb-2">Andrix Ngoyi</h2>
       <p class="hero-paragraph mt-8 text-xl text-gray-300 max-w-2xl">
        <span ref="typewriter" class="text-white"></span><br />
        I am a passionate and disciplined <span class="font-bold text-green-400">Fullstack Developer</span> and <span class="font-bold text-green-400">Creative Technologist</span>, dedicated to building high-performance, scalable, and user-centric solutions that drive digital innovation.
      </p>

      <!-- Icônes sociales -->
      <div class="hero-buttons mt-8 flex flex-wrap gap-4">
        <!-- GitHub -->
        <a href="https://github.com/AndrixNg1" target="_blank"
          class="flex items-center justify-center w-12 h-12 border-2 border-green-500 rounded-full hover:scale-110 hover:shadow-lg transition transform duration-300">
          <img src="/images/sv3.svg" alt="GitHub" class="w-6 h-6" />
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/andrix-ngoyi-469662321" target="_blank"
          class="flex items-center justify-center w-12 h-12 border-2 border-green-500 rounded-full hover:scale-110 hover:shadow-lg transition transform duration-300">
          <img src="/images/sv2.svg" alt="LinkedIn" class="w-6 h-6" />
        </a>

        <!-- Email -->
        <a href="mailto:andrixngoyi243@gmail.com"
          class="flex items-center justify-center w-12 h-12 border-2 border-green-500 rounded-full hover:scale-110 hover:shadow-lg transition transform duration-300">
          <img src="/images/sv1.svg" alt="Email" class="w-6 h-6" />
        </a>

        <!-- Instagram -->
        <a href="https://www.instagram.com/andrix_ngoyi" target="_blank"
          class="flex items-center justify-center w-12 h-12 border-2 border-green-500 rounded-full hover:scale-110 hover:shadow-lg transition transform duration-300">
          <i class="pi pi-instagram text-green-500 text-lg"></i>
        </a>
      </div>

      <!-- CTA Buttons -->
      <div class="hero-cta mt-6 flex flex-wrap gap-4">
        <!-- Hire Me -->
        <a href="/contact"
          class="px-6 py-3 bg-green-500 text-white font-semibold rounded-2xl shadow-md hover:bg-green-600 hover:scale-105 transition transform duration-300">
          Hire Me
        </a>

        <!-- My Work -->
        <a href="/projets"
          class="px-6 py-3 border-2 border-green-500 text-green-500 font-semibold rounded-2xl hover:bg-green-500 hover:text-white hover:scale-105 transition transform duration-300">
          My Work
        </a>
      </div>
    </div>

    <!-- Image -->
    <div class="hero-image flex justify-center lg:w-1/2 mt-12 lg:mt-0 relative z-20">
      <img src="/images/home/home.jpeg" alt="Andrix Ngoyi"
        class="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl transform hover:scale-110 transition duration-300" />
    </div>
  </section>
</template>

<style scoped>
@keyframes wave {

  0%,
  100% {
    transform: rotate(0);
  }

  25% {
    transform: rotate(15deg);
  }

  75% {
    transform: rotate(-15deg);
  }
}

.animate-wave {
  animation: wave 0.6s infinite;
}
</style>
