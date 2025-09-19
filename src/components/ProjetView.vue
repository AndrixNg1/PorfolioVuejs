<template>
  <section class="projets text-white flex flex-col items-center justify-center px-6 py-20">
    <!-- Titre Section -->
    <div class="text-center max-w-3xl">
      <h2 class="text-5xl font-extrabold text-emerald-400 tracking-tight">Projects & Work</h2>
      <p class="text-lg text-gray-300 mt-8 leading-relaxed">
        A showcase of selected projects I have developed, including client work, my Vue portfolio, and a mini calculator project.
      </p>
    </div>

    <!-- Grille de Projets -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl w-full">
      <div v-for="(projet, index) in projets" :key="index" class="card hover:shadow-lg flex flex-col overflow-hidden h-full">
        <!-- Image Aperçu -->
        <div v-if="projet.apercu" class="h-56 w-full">
          <img :src="projet.apercu" alt="Aperçu du projet" class="w-full h-full object-cover rounded-t-lg"/>
        </div>

        <!-- Contenu -->
        <div class="p-6 bg-gray-800/90 backdrop-blur-lg rounded-b-lg flex flex-col justify-between flex-1">
          <h3 class="text-2xl font-semibold text-white mb-3">{{ projet.titre }}</h3>

          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="(tech, techIndex) in projet.technologies" :key="techIndex" class="badge">
              {{ tech }}
            </span>
          </div>

          <p class="text-gray-300 mb-4">{{ projet.description }}</p>

          <div class="flex items-center justify-between mt-auto">
            <a
            v-if="projet.details"
              :href="projet.details"
              target="_blank"
              rel="noopener"
              class="text-emerald-400 font-semibold hover:underline">
              View Code
            </a>
            <a
              v-if="projet.liveUrl"
              :href="projet.liveUrl"
              target="_blank"
              rel="noopener"
              class="bg-emerald-400 text-black font-semibold px-3 py-1 rounded hover:bg-emerald-300 transition duration-300">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projets = [
  {
    titre: "Portfolio Website (Vue)",
    description: "My personal Vue portfolio showcasing skills, projects, and contact form.",
    technologies: ["Vue", "TailwindCSS", "JavaScript"],
    details: "https://github.com/AndrixNg1/PorfolioVuejs.git",
    liveUrl: "https://andrixngoyi.vercel.app/",
    apercu: "/images/portfolio.png",
  },
  {
    titre: "ServicesNor: Furniture Rental Showcase",
    description: "A static showcase website for a client to promote furniture rentals for events. Built with Next.js and TailwindCSS.",
    technologies: ["Next.js", "TailwindCSS"],
    liveUrl: "https://www.servicesnor.com/",
    apercu: "/images/nor.png",
  },
  {
    titre: "Mini Calculator",
    description: "A simple calculator project built to practice JavaScript and DOM manipulation.",
    technologies: ["HTML & CSS", "JavaScript"],
    details: "https://github.com/AndrixNg1/Calculatrice-js.git",
    liveUrl: "",
    apercu: "/images/calc.jpg",
  },
];
</script>

<style scoped>
/* Glassmorphism Card */
.card {
  background: rgba(26, 26, 26, 0.8);
  border-radius: 0.75rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}
.card:hover {
  transform: scale(1.03) translateY(-3px);
  box-shadow: 0 12px 30px rgba(60, 207, 145, 0.3);
}

/* Badges technologies */
.badge {
  background-color: #3ccf91;
  color: #000;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  transition: background-color 0.3s ease;
}
.badge:hover {
  background-color: #34b57f;
}
</style>
