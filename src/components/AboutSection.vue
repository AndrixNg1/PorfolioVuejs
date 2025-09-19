<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import gsap from "gsap"

let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Animation image avec scale et légère rotation
    tl.from(".about-image", {
      x: -100,
      opacity: 0,
      scale: 0.8,
      rotation: -5,
      duration: 1.2
    })

    // Animation titre
    tl.from(".about-title", { y: 40, opacity: 0, duration: 1 }, "-=0.8")

    // Animation paragraphes avec stagger
    tl.from(".about-paragraph", { y: 30, opacity: 0, stagger: 0.3, duration: 1 }, "-=0.7")

    // Animation bouton avec scale pulse
    tl.from(".about-button", { y: 20, opacity: 0, scale: 0.9, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5")
  })
})

onBeforeUnmount(() => ctx && ctx.revert())
</script>

<template>
  <section class="mt-16 px-6 lg:px-24 py-12">
    <div class="flex flex-col lg:flex-row items-center gap-12">

      <!-- Image gauche avec forme moderne -->
      <div class="about-image flex-shrink-0 relative">
        <img src="/images/and1.jpg" alt="Andrix Ngoyi"
             class="w-72 h-72 lg:w-80 lg:h-90 object-cover shadow-2xl transform hover:scale-105 transition duration-300"
             style="clip-path: polygon(20% 0%, 80% 0%, 100% 30%, 100% 70%, 80% 100%, 20% 100%, 0% 70%, 0% 30%);" />
        <div class="absolute inset-0 rounded-lg border-2 border-green-500 pointer-events-none"></div>
      </div>

      <!-- Texte droite -->
      <div class="flex-1">
        <h3 class="about-title text-2xl text-green-400 font-semibold mb-2">
          ⚡ Fullstack Developer · Creative Technologist
        </h3>
        <h2 class="about-title text-4xl lg:text-5xl font-extrabold text-white mb-6">
          💡 About Me
        </h2>

        <p class="about-paragraph text-lg text-gray-300 mb-4 leading-relaxed">
          I am a passionate and disciplined <span class="text-primary font-semibold">Fullstack Developer</span>, skilled in delivering comprehensive digital solutions combining <span class="text-primary font-semibold">performance, scalability</span> and <span class="text-primary font-semibold">user experience</span>.
        </p>
        <p class="about-paragraph text-lg text-gray-300 mb-4 leading-relaxed">
          I master the full software architecture lifecycle, from precise <span class="text-primary font-semibold">requirement analysis</span> to delivering reliable, maintainable products.
        </p>
        <p class="about-paragraph text-lg text-gray-300 mb-6 leading-relaxed">
          Collaborative and attentive, I value constructive communication and collective innovation, always committed to <span class="text-primary font-semibold">code quality</span> and <span class="text-primary font-semibold">best practices</span>.
        </p>

        <!-- Bouton -->
        <a href="/contact" class="about-button inline-block mt-4 px-8 py-3 bg-green-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-green-600 hover:scale-105 transition transform duration-300">
          Hire Me / My Work
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
:root {
  --primary-color: #3ccf91;
}
.text-primary { color: var(--primary-color); }
</style>
