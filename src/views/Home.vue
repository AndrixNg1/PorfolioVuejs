<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import Skills from "@/components/SkillsView.vue";
import ProjetView from "@/components/ProjetView.vue";
import WhatIDo from "@/components/WhatIDo.vue";

// ✅ Enregistrement du plugin GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Animation d'apparition fluide de chaque section
  const sections = gsap.utils.toArray("section, .section-block, .animate-section");

  sections.forEach((section, index) => {
    gsap.from(section, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",
      delay: index * 0.15,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 lg:px-8 space-y-24">
    <section class="animate-section">
      <HeroSection />
    </section>

    <section class="animate-section">
      <AboutSection />
    </section>

    <section class="animate-section">
      <Skills />
    </section>

    <section class="animate-section">
      <WhatIDo />
    </section>

    <section class="animate-section">
      <ProjetView />
    </section>
  </div>
</template>

<style scoped>
/* --- Effet global des sections --- */
.animate-section {
  will-change: transform, opacity;
  transition: all 0.4s ease;
}
</style>
