<template>
  <section class="gallery py-16 bg-gradient-to-br from-gray-800 to-gray-900">
    <div class="container mx-auto px-6">
      <!-- Titre de la section -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold text-emerald-400 tracking-tight">
          Galerie
        </h2>
        <p class="text-lg text-gray-300 mt-4">
          Découvrez quelques moments marquants qui définissent mon parcours et mes inspirations.
        </p>
      </div>

      <!-- Grille des images -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="relative group overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
        >
          <!-- Image -->
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-64 object-cover"
          />
          <!-- Overlay avec description -->
          <div
            class="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-white text-lg font-semibold text-center px-4">
              {{ image.caption }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

// Données des images de la galerie
const images = reactive([
  {
    src: "images/WhatsApp Image 2025-01-13 à 22.29.30_fa240823.jpg",
    alt: "Travail en équipe",
    caption: "Travail en équipe sur un projet passionnant.",
  },
  {
    src: "images/sudopico.jpg",
    alt: "Moment marquant",
    caption: "Moment marquant de mon parcours.",
  },
  {
    src: "images/and1.jpg",
    alt: "Détente",
    caption: "Un moment de détente après une longue journée de travail.",
  },
  {
    src: "images/Castel.jpg",
    alt: "Réflexion",
    caption: "Un temps de réflexion sur un projet.",
  },
  {
    src: "images/sudo.jpg",
    alt: "Histoire",
    caption: "Un jour une histoire.",
  },
  {
    src: "images/kaba.jpg",
    alt: "Passion",
    caption: "Illustration de ma passion pour le développement.",
  },
]);
</script>

<style scoped>
/* Styles de la galerie */
.gallery {
  margin-top: 76px;
  background: radial-gradient(circle, #1f2937, #0f172a);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

img {
  border-radius: 8px;
}

h2 {
  font-size: 2.5rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
