<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import gsap from "gsap"

let ctx
onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from(".about-title", { y: 40, opacity: 0, duration: 1, ease: "power3.out" })
    gsap.from(".about-paragraph", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay: 0.3,
      ease: "power3.out"
    })
  })
})
onBeforeUnmount(() => ctx && ctx.revert())
</script>

<template>
   <section class="mt-12 p-10 lg:px-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl">
      <h2 class="text-5xl font-extrabold text-white text-center mb-8 lg:text-6xl">⚡ About Me</h2>
      <p class="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
        I’m a <span class="text-primary font-semibold">passionate developer</span> and a modern tech explorer who thrives on challenges.
        With hands-on experience from <span class="text-primary font-semibold">web</span> to <span class="text-primary font-semibold">mobile</span>,
        my goal is simple: push the limits of technical creativity.
      </p>
      <p class="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
        Innovation is at the heart of everything I do.
        My ambition is to master <span class="text-primary font-semibold">UX/UI design</span> and
        <span class="text-primary font-semibold">mobile development</span>.
        I don’t just follow trends — I strive to set them.
      </p>
      <p class="text-lg text-gray-300 max-w-3xl mx-auto">
        I love building intuitive, high-performance applications that transform the way people interact with technology.
        If you’d like to see how I can turn your ideas into code, let’s connect!
      </p>
    </section>
</template>

<style scoped>
:root {
  --primary-color: #3ccf91;
}
.text-primary { color: var(--primary-color); }
</style>
