<template>
  <section class="mt-11 px-6 lg:px-24 py-12 text-white">
    <h2 class="text-4xl lg:text-5xl font-extrabold text-center mb-12 text-gradient">
      My Skills & Strengths
    </h2>

    <div class="grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-2">
      <div
        v-for="(skill, i) in skillsInfo"
        :key="i"
        class="skill-card p-10 bg-gray-900 rounded-3xl shadow-2xl relative overflow-hidden"
      >
        <!-- Icon next to title -->
        <div class="flex items-center mb-4">
          <component :is="skill.icon" class="w-6 h-6 text-green-400 mr-3" />
          <h3 class="text-2xl font-bold text-green-400">{{ skill.title }}</h3>
        </div>

        <!-- Description -->
        <p class="text-gray-300 text-xl leading-relaxed">{{ skill.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Layout, Lightbulb, Users } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const skillsInfo = [
  {
    title: "Fullstack Development",
    description: "I master the complete development cycle, from front-end to back-end, delivering robust and high-performance solutions.",
    icon: Code
  },
  {
    title: "Software Architecture",
    description: "Able to design scalable, maintainable architectures tailored to business needs.",
    icon: Layout
  },
  {
    title: "Innovation & Creativity",
    description: "Always seeking new ideas and solutions to improve user experience and code efficiency.",
    icon: Lightbulb
  },
  {
    title: "Collaboration & Communication",
    description: "I value teamwork, constructive exchanges, and knowledge sharing.",
    icon: Users
  },
]

onMounted(() => {
  gsap.from(".skill-card", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".skill-card",
      start: "top 85%",
    }
  })
})
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #3ccf91, #00b4d8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Skill card subtle border on hover */
.skill-card {
  transition: transform 0.3s ease;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border: 2px solid #3ccf91;
  border-radius: 1.5rem;
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.4s ease;
  pointer-events: none;
}

.skill-card:hover::before {
  opacity: 1;
  transform: scale(1);
}
</style>
