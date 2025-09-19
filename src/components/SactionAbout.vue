<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  // Animation de l'image
  gsap.from(".about-image", {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Animation du texte
  gsap.from(".about-text", {
    x: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.3,
  });
});
</script>

<template>
  <section class="about-section w-full mt-32 text-gray-100 py-16 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <!-- Left : Image -->
      <div class="flex justify-center md:justify-start">
        <img src="/images/kaba.jpg" alt="Andrix Ngoyi"
          class="about-image rounded-2xl shadow-lg w-full max-w-lg h-auto object-cover border-2 border-green-500 hover:scale-105 transform transition duration-500" />
      </div>

      <!-- Right : Text -->
      <div class="about-text space-y-6">
        <!-- Titre principal -->
        <h2 class="text-4xl md:text-5xl font-extrabold text-green-400 leading-tight">
          I'm Andrix Ngoyi
        </h2>

        <!-- Paragraphe 1 -->
        <p class="text-lg md:text-xl leading-relaxed text-gray-300">
          A passionate <span class="text-green-400 font-semibold">Software Engineer</span>
          dedicated to building innovative digital solutions. Skilled in developing
          modern web applications using
          <span class="text-green-400 font-semibold">Vue.js</span>,
          <span class="text-green-400 font-semibold">Next.js</span>, and
          <span class="text-green-400 font-semibold">TailwindCSS</span>.
        </p>

        <!-- Paragraphe 2 -->
        <p class="text-lg md:text-xl leading-relaxed text-gray-300">
          I love turning ideas into reality with a
          <span class="text-green-400 font-semibold">user-centered approach</span> and
          strong attention to detail. My mission is to deliver clean,
          scalable, and impactful software experiences.
        </p>

        <!-- Paragraphe 3 (ajouté) -->
        <p class="text-lg md:text-xl leading-relaxed text-gray-300">
          Beyond coding, I am constantly exploring new technologies, improving my craft,
          and collaborating with creative minds. I believe in continuous learning and
          building solutions that not only solve problems but also
          <span class="text-green-400 font-semibold">empower people</span> and create a
          meaningful impact.
        </p>

        <!-- Signature -->
        <h3 class="text-2xl font-bold text-gradient mt-8">
          — Andrix Ngoyi
        </h3>

        <!-- Buttons -->
        <div class="mt-6 flex flex-wrap gap-4">
          <!-- Download CV -->
          <a href="/files/Andrix_Ngoyi_CV.pdf" download
            class="px-6 py-3 bg-green-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Download CV
          </a>

          <!-- Hire Me -->
          <a href="/contact"
            class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
