<template>
  <div class="services">
    <div class="services-content">
      <h1 class="title">Mes Services</h1>
      <h2 class="subtitle">Ce que je fais</h2>
      <p class="description">
        En tant que développeur front-end, je crée des interfaces utilisateur uniques, accessibles et optimisées. Mon objectif est de livrer un code propre et maintenable, tout en proposant des solutions web adaptées aux besoins réels des clients.
      </p>
      <div class="services-list">
        <div
          v-for="service in services"
          :key="service.title"
          class="service-item group"
        >
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
  <FooterView class="mt-auto" />
</template>

<script setup>
import { ref } from "vue";
import FooterView from "./FooterView.vue";

const services = ref([
  {
    title: "Conception Web",
    description:
      "Création de sites modernes et responsifs avec des designs élégants en utilisant HTML, CSS, JavaScript et des frameworks comme Vue.js.",
  },
  {
    title: "Marketing Web",
    description:
      "Promotion de produits et services grâce à des stratégies de marketing digital, y compris le SEO et l'optimisation de contenu.",
  },
  {
    title: "Développement",
    description:
      "Conception et maintenance d'applications web évolutives en utilisant des bibliothèques et frameworks modernes.",
  },
]);
</script>

<style scoped>
/* Section principale */
.services {
  max-width: 1200px;
  margin: auto;
  margin-top: 75px ; /* Décalage vertical supplémentaire */
  margin-bottom: 10px;
  padding: 60px 20px;
  background: linear-gradient(to bottom right, #1f2937, #0f172a); /* Dégradé moderne */
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
  color: #f3f4f6;
}

/* Contenu de la section */
.services-content {
  text-align: center;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  color: #38bdf8; /* Bleu clair moderne */
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.75rem;
  color: #ffffff;
  margin-bottom: 20px;
}

.description {
  font-size: 1.1rem;
  color: #d1d5db;
  line-height: 1.8;
  margin-bottom: 50px;
}

/* Liste des services */
.services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

.service-item {
  flex: 1 1 calc(33.333% - 30px);
  max-width: calc(33.333% - 30px);
  background: linear-gradient(to bottom right, #1e293b, #334155);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}

.service-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
}

.service-content {
  position: relative;
  z-index: 1;
}

.service-title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #22d3ee; /* Couleur cyan moderne */
  margin-bottom: 15px;
}

.service-description {
  font-size: 1rem;
  color: #e2e8f0;
  line-height: 1.6;
}

/* Animation d'arrière-plan au survol */
.service-item::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(56, 189, 248, 0.25), transparent);
  transform: rotate(45deg);
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 0;
  z-index: 0;
}

.service-item:hover::before {
  opacity: 1;
  transform: rotate(0deg);
}

/* Responsive */
@media (max-width: 1024px) {
  .service-item {
    flex: 1 1 calc(50% - 30px);
    max-width: calc(50% - 30px);
  }
}

@media (max-width: 768px) {
  .service-item {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
