<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const redirectToContact = () => {
  router.push("/contact"); // Redirection vers la page contact
};
</script>

<template>
  <div class="bg-gray-900 text-white min-h-screen py-16">
    <div class="max-w-7xl mx-auto px-10 mt-10">
      <h1 class="text-4xl font-bold text-center">
        Je vous accompagne dans la réalisation de vos projets
        <span class="text-[#00ffcc]">digitaux</span>
      </h1>

      <!-- Développement Web -->
      <div class="mt-16 flex flex-col md:flex-row items-center gap-10">
        <img src="#" class="w-full md:w-1/2 rounded-lg shadow-lg" alt="Développement Web" />
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold">Développement Web</h2>
          <p class="mt-2 text-gray-300">
            Création de sites modernes et responsifs avec des designs élégants en utilisant HTML, CSS, JavaScript et des frameworks comme Vue.js, Nuxt.js, React et Next.js.
          </p>
          <button
            @click="redirectToContact"
            class="mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-lg"
          >
            Commander ce service
          </button>
        </div>
      </div>

      <!-- Marketing Digital -->
      <div class="mt-16 flex flex-col md:flex-row-reverse items-center gap-10">
        <img src="#" class="w-full md:w-1/2 rounded-lg shadow-lg" alt="Marketing Digital" />
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold">Marketing Digital</h2>
          <p class="mt-2 text-gray-300">
            Je vous aide à développer votre activité en ligne avec les meilleures stratégies.
          </p>
          <button
            @click="redirectToContact"
            class="mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-lg"
          >
            Commander ce service
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
