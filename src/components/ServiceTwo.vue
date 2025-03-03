<script setup>
import { ref } from "vue";

const show = ref(false);

const toggleShow = () => {
  show.value = !show.value;
};
</script>

<template>
  <div class="bg-gray-900 text-white min-h-screen flex flex-col items-center p-10">
    <h1 class="text-4xl font-bold text-center">
      Je vous accompagne dans la réalisation de vos projets
      <span class="text-purple-400">digitaux</span>
    </h1>

    <div class="mt-10 w-full max-w-4xl grid md:grid-cols-2 gap-10">
      <!-- Développement Web -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <img src="/images/service4.jpg" class="rounded-md" alt="Web Dev" />
        <h2 class="text-2xl font-bold mt-4">Développement Web</h2>
        <p class="mt-2 text-gray-300">
          Je vous aide à transformer vos idées en un site Web rapide, fonctionnel et flexible.
        </p>
        <button
          @click="toggleShow"
          class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 transition duration-300 rounded"
        >
          Commander ce service
        </button>
      </div>

      <!-- Marketing Digital -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <img src="/images/service3.jpg" class="rounded-md" alt="Marketing Digital" />
        <h2 class="text-2xl font-bold mt-4">Marketing Digital</h2>
        <p class="mt-2 text-gray-300">
          Je vous aide à développer votre activité en ligne avec les meilleures stratégies.
        </p>
        <button
          @click="toggleShow"
          class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 transition duration-300 rounded"
        >
          Commander ce service
        </button>
      </div>
    </div>

    <!-- Message de confirmation -->
    <transition name="fade">
      <div v-if="show" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white text-black p-6 rounded-lg shadow-lg">
          <p class="text-lg font-semibold">Service commandé avec succès !</p>
          <button
            @click="toggleShow"
            class="mt-4 px-4 py-2 bg-red-500 hover:bg-red-700 transition duration-300 rounded"
          >
            Fermer
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Transition fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
