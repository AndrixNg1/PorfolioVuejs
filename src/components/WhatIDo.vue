<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const whatIDo = [
  {
    title: "Web Development",
    description: "Building responsive and high-performance web applications using Vue, Laravel, and TailwindCSS.",
    image: "/images/web-dev.gif"
  },
  {
    title: "Mobile Apps",
    description: "Creating cross-platform mobile apps with Expo, React Native, and Jetpack Compose.",
    image: "/images/mob-dev.jpg"
  },
  {
    title: "Fullstack & APIs",
    description: "Designing scalable backends, REST APIs, and integrating seamlessly with frontends.",
    image: "/images/api1.jpg"
  }
]

onMounted(() => {
  gsap.from(".do-card", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".do-card",
      start: "top 85%",
    }
  })

  // Hover: subtle border effect
  const cards = document.querySelectorAll(".do-card")
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { borderColor: "#3ccf91", duration: 0.3, ease: "power1.out" })
    })
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { borderColor: "transparent", duration: 0.3, ease: "power1.out" })
    })
  })
})
</script>
<template>
  <section class="px-6 lg:px-24 py-12 text-white">
    <h2 class="text-4xl lg:text-5xl font-extrabold text-center mb-12 text-gradient">
      What I Do
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(item, i) in whatIDo"
        :key="i"
        class="do-card bg-gray-900 rounded-3xl shadow-2xl border-2 border-transparent transform transition-transform duration-300 flex flex-col overflow-hidden"
      >
        <!-- Text Top -->
        <div class="p-6 flex-1">
          <h3 class="text-2xl font-bold mb-2 text-green-400">{{ item.title }}</h3>
          <p class="text-gray-300 text-base lg:text-xl leading-relaxed">{{ item.description }}</p>
        </div>

        <!-- Image Bottom -->
        <div class="w-full">
          <img :src="item.image" alt="" class="w-full h-48 lg:h-56 object-cover rounded-b-2xl" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #3ccf91, #00b4d8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.do-card {
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.do-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 25px rgba(60, 207, 145, 0.25);
  border-color: #3ccf91;
}
</style>
