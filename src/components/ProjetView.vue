<template>
  <section class="projets container mx-auto px-6 mt-24">
    <div class="text-center mb-12">
      <h2 class="text-5xl font-extrabold text-emerald-400 tracking-tight">Projets Réalisés</h2>
      <p class="text-lg text-gray-300 mt-4">
        Une vitrine de quelques-uns des meilleurs projets sur lesquels j'ai eu le plaisir de travailler.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div v-for="(projet, index) in projets" :key="index" class="card hover:shadow-lg">
        <div v-if="projet.apercu" class="h-56 w-full">
          <img :src="projet.apercu" alt="Aperçu du projet" class="w-full h-full object-cover rounded-t-lg"/>
        </div>
        <div class="p-6 bg-gray-900 rounded-b-lg">
          <h3 class="text-2xl font-semibold text-white mb-2">{{ projet.titre }}</h3>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="(tech, techIndex) in projet.technologies" :key="techIndex" class="badge">
              {{ tech }}
            </span>
          </div>
          <p class="text-gray-300 mb-4">{{ projet.description }}</p>
          <div class="flex items-center justify-between">
            <a
              :href="projet.details"
              target="_blank"
              rel="noopener"
              class="text-emerald-400 font-semibold hover:underline">
              Voir le code sur Github
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
    <div class="mt-10 flex justify-center">
      <a
        href="https://github.com/AndrixNg1"
        target="_blank"
        class="px-6 py-3 bg-emerald-400 text-black font-semibold rounded-md shadow-md hover:bg-emerald-300 transition duration-300">
        Voir tous les projets
      </a>
    </div>
  </section>
  <FooterView/>
</template>

<script setup>
import FooterView from './FooterView.vue';
import Footer from './FooterView.vue';

defineProps({
  showFooter: {
    type: Boolean,
    default: true,
  },
});

const projets = [
  {
    titre: "Portfolio écrit en PHP. C'était un projet d'exercice.",
    description: "Développée après 2 mois de formation en développement web avec Mr Gloire Kafwalubi.",
    technologies: ["PHP", "TailwindCSS", "HTML5 & CSS3"],
    details: "https://github.com/AndrixNg1/portfolio.git",
    liveUrl: "https://andrix-ngoyi.42web.io",
    apercu: "images/Project.webp",
  },
  {
    titre: "Mini projet une calculatrice",
    description: "Pas grand chose à dire, c'est une calculatrice 😅🥹.",
    technologies: ["HTML & CSS", "JavaScript"],
    details: "https://github.com/AndrixNg1/Calculatrice-js.git",
    liveUrl: "",
    apercu: "images/calc.png",
  },
];
</script>

<style scoped>
/* Carte des projets */
.card {
  background: #1a1a1a;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.card:hover {
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0 12px 30px rgba(60, 207, 145, 0.3);
}

/* Badge des technologies */
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
