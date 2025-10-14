<template>
  <section
    ref="projetsSection"
    class="projets text-white flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 overflow-hidden"
  >
    <!-- Section Header -->
    <div class="text-center max-w-3xl mb-20">
      <motion-div
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }"
        transition="ease-in-out 0.8s"
      >
        <h2 class="text-5xl font-extrabold text-emerald-400 tracking-tight drop-shadow-md">
          Mes Projets & Réalisations
        </h2>
        <p class="text-lg text-gray-300 mt-6 leading-relaxed">
          Une sélection de projets conçus avec passion — du portfolio personnel aux solutions client,
          en passant par des expérimentations JavaScript pratiques.
        </p>
      </motion-div>
    </div>

    <!-- Project Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full"
    >
      <motion-div
        v-for="(projet, index) in projets"
        :key="index"
        :initial="{ opacity: 0, y: 60 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ delay: index * 0.2, duration: 0.8, ease: 'easeOut' }"
        class="card group relative overflow-hidden flex flex-col"
      >
        <!-- Image -->
        <div
          v-if="projet.apercu"
          class="h-56 w-full overflow-hidden relative"
          @mouseenter="onHoverEnter($event)"
          @mouseleave="onHoverLeave($event)"
        >
          <img
            :src="projet.apercu"
            :alt="`Aperçu de ${projet.titre}`"
            class="w-full h-full object-cover rounded-t-lg"
          />
        </div>

        <!-- Content -->
        <div
          class="flex flex-col flex-1 justify-between p-6 bg-gray-800/90 backdrop-blur-lg rounded-b-lg"
        >
          <div>
            <h3
              class="text-2xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300"
            >
              {{ projet.titre }}
            </h3>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tech, techIndex) in projet.technologies"
                :key="techIndex"
                class="badge"
              >
                {{ tech }}
              </span>
            </div>

            <p class="text-gray-300 text-sm leading-relaxed mb-6">
              {{ projet.description }}
            </p>
          </div>

          <div class="flex items-center justify-between mt-auto">
            <a
              v-if="projet.details"
              :href="projet.details"
              target="_blank"
              rel="noopener"
              class="text-emerald-400 font-semibold hover:underline flex items-center gap-1"
            >
              <span>Voir le code</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 3h7m0 0v7m0-7L10 14"
                />
              </svg>
            </a>

            <a
              v-if="projet.liveUrl"
              :href="projet.liveUrl"
              target="_blank"
              rel="noopener"
              class="bg-emerald-400 text-black font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-emerald-300 transition-all duration-300"
            >
              Live Demo
            </a>
          </div>
        </div>
      </motion-div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import gsap from "gsap";

const projetsSection = ref(null);

const projets = [
  {
    titre: "Portfolio Website (Vue)",
    description:
      "Mon portfolio personnel construit avec Vue.js, présentant mes compétences, projets et formulaire de contact.",
    technologies: ["Vue", "TailwindCSS", "JavaScript"],
    details: "https://github.com/AndrixNg1/PorfolioVuejs.git",
    liveUrl: "https://andrixngoyi.vercel.app/",
    apercu: "/images/portfolio.png",
  },
  {
    titre: "ServicesNor — Location de Mobilier",
    description:
      "Un site vitrine pour la promotion de services de location de mobilier événementiel, développé avec Next.js et TailwindCSS.",
    technologies: ["Next.js", "TailwindCSS"],
    liveUrl: "https://www.servicesnor.com/",
    apercu: "/images/nor.png",
  },
  {
    titre: "Mini Calculatrice",
    description:
      "Un mini-projet JavaScript conçu pour pratiquer la manipulation du DOM et les logiques arithmétiques de base.",
    technologies: ["HTML & CSS", "JavaScript"],
    details: "https://github.com/AndrixNg1/Calculatrice-js.git",
    apercu: "/images/calc.jpg",
  },
];

// Animation GSAP pour effet de reveal au scroll
onMounted(() => {
  const cards = projetsSection.value.querySelectorAll(".card");
  gsap.from(cards, {
    opacity: 0,
    y: 80,
    duration: 0.9,
    stagger: 0.25,
    ease: "power3.out",
    scrollTrigger: {
      trigger: projetsSection.value,
      start: "top 80%",
    },
  });
});

// Animation d’image au survol
const onHoverEnter = (event) => {
  gsap.to(event.currentTarget.querySelector("img"), {
    scale: 1.1,
    duration: 0.6,
    ease: "power3.out",
  });
};

const onHoverLeave = (event) => {
  gsap.to(event.currentTarget.querySelector("img"), {
    scale: 1,
    duration: 0.6,
    ease: "power3.out",
  });
};
</script>

<style scoped>
section{
  margin-top: 45%;
}
.card {
  background: rgba(24, 24, 27, 0.85);
  border-radius: 0.75rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 35px rgba(60, 207, 145, 0.25);
}

.badge {
  background-color: #3ccf91;
  color: #000;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
}
.badge:hover {
  background-color: #2fb37c;
  transform: translateY(-1px);
}
</style>
