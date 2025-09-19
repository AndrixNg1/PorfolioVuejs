<template>
  <section class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
    <div class="max-w-6xl w-full text-center">
      <!-- Titre principal -->
      <h1 class="text-5xl md:text-6xl font-bold mb-6">
        Contact me to discuss your <span class="text-[#00ffcc]">project</span>
      </h1>
      <p class="text-xl text-gray-400 mb-10">
        You can reach me through the following contact details.
      </p>

      <div class="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
        <!-- Image -->
        <img
          src="/images/contact.jpg"
          alt="Profile"
          class="about-image w-80 h-56 object-cover rounded-lg shadow-lg"
        />

        <!-- Contact info -->
        <div class="text-left space-y-6 text-lg about-text">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 shadow">
              📍
            </div>
            <p class="text-gray-300">Lubumbashi, RDC</p>
          </div>

          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 shadow">
              📧
            </div>
            <a href="mailto:andrixngoyi243@gmail.com" class="text-[#00ffcc] hover:underline text-xl">
              andrixngoyi243@gmail.com
            </a>
          </div>

          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 shadow">
              📞
            </div>
            <a href="tel:+243836066402" class="text-[#00ffcc] hover:underline text-xl">
              +243 836 066 402
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  // Fade in image
  gsap.from(".about-image", {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Fade in text
  gsap.from(".about-text", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.3,
  });
});
</script>

<style scoped>
.about-image, .about-text {
  transition: all 0.5s ease;
}
</style>
