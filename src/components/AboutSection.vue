<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import gsap from "gsap"

let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Image: entrée avec scale + rotation + fade
    tl.from(".about-image", {
      x: -100,
      opacity: 0,
      scale: 0.85,
      rotation: -4,
      duration: 1.2
    })

    // Titre: entrée depuis le bas
    tl.from(".about-title", { y: 40, opacity: 0, duration: 1 }, "-=0.8")

    // Paragraphes: entrée avec stagger
    tl.from(".about-paragraph", { y: 30, opacity: 0, stagger: 0.25, duration: 1 }, "-=0.7")

    // Bouton: entrée avec effet “pop” uniquement
    tl.from(".about-button", {

    }, "-=0.5")

    // Pulse léger continu sur image
    gsap.to(".about-image", {
      scale: 1.02,
      rotation: 0,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1
    })

    // Fade subtil continu sur texte seulement (bouton exclu)
    gsap.to([".about-title", ".about-paragraph"], {
      opacity: 0.9,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1.5
    })
  })
})

onBeforeUnmount(() => ctx && ctx.revert())
</script>

<template>
  <section class="mt-9 px-6 lg:px-24 py-12">
    <div class="flex flex-col-reverse lg:flex-row items-center gap-12">

      <!-- Image gauche (en bas sur mobile) -->
      <div class="about-image flex-shrink-0 relative">
        <img src="/images/and1.jpg" alt="Andrix Ngoyi"
          class="w-72 h-90 lg:w-72 lg:h-100 object-cover shadow-2xl transform hover:scale-105 transition duration-300 rounded-2xl" />
        <div class="absolute inset-0 rounded-2xl border-2 border-green-500 pointer-events-none"></div>
      </div>

      <!-- Texte droite -->
      <div class="flex-1">
        <h3 class="about-title text-2xl text-green-400 font-semibold mb-2">
          ⚡ Fullstack Developer · Creative Technologist
        </h3>
        <h2 class="about-title text-4xl lg:text-5xl font-extrabold text-white mb-6">
          💡 About Me
        </h2>

        <p class="about-paragraph text-xl text-gray-300 mb-4 leading-relaxed">
          I am a passionate and disciplined <span class="text-primary font-semibold">Fullstack Developer</span>, skilled
          in delivering comprehensive digital solutions combining <span class="text-primary font-semibold">performance,
            scalability</span> and <span class="text-primary font-semibold">user experience</span>.
        </p>
        <p class="about-paragraph text-xl text-gray-300 mb-4 leading-relaxed">
          I master the full software architecture lifecycle, from precise <span
            class="text-primary font-semibold">requirement analysis</span> to delivering reliable, maintainable
          products.
        </p>
        <p class="about-paragraph text-xl text-gray-300 leading-relaxed">
          Collaborative and attentive, I value constructive communication and collective innovation, always committed to
          <span class="text-primary font-semibold">code quality</span> and <span class="text-primary font-semibold">best
            practices</span>.
        </p>

        <!-- Bouton -->
        <a href="/contact"
          class="about-button inline-block mt-4 px-8 py-3 bg-green-500 text-white font-semibold rounded-2xl shadow-lg hover:bg-green-600 hover:scale-105 transition transform duration-300">
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

.text-primary {
  color: var(--primary-color);
}
</style>
