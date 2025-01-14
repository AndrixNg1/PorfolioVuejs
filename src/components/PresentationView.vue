<template>
  <!-- Main container with padding for fixed navigation -->
  <div class="max-w-7xl mx-auto px-4 lg:px-8">
    <!-- Hero Section -->
    <section class="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-6rem)] pt-28">
      <!-- Introduction Text -->
      <div class="lg:w-1/2">
        <h1 class="text-primary text-5xl font-semibold mb-4 animate-slideInLeft">
          Salut <span class="animate-wave">👋</span>, moi c'est
        </h1>
        <h2 class="text-6xl font-extrabold text-white mb-2 animate-slideInLeft-delay">Andrix</h2>
        <h2 class="text-6xl font-extrabold text-white animate-slideInLeft-delay">Ngoyi</h2>
        <p class="mt-8 text-xl text-gray-300 max-w-2xl">
          <span ref="typewriter" class="text-white"></span>
          <br />Je suis un <span class="text-primary font-bold">développeur autodidacte</span>, toujours prêt à explorer de nouvelles frontières technologiques. Du <span class="text-primary font-semibold">Web</span> au <span class="text-primary font-semibold">Mobile</span>, je suis obsédé par la création de solutions innovantes.
        </p>
        <div class="mt-8 flex gap-6">
          <a
            href="https://github.com/AndrixNg1"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center bg-primary p-4 rounded-xl hover:bg-opacity-80 transition-all duration-300 shadow-xl"
          >
            <img src="/images/sv3.svg" alt="GitHub" class="w-8 h-8 mr-3" />
            <span class="text-white text-md">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/andrix-ngoyi-469662321"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center bg-primary p-4 rounded-xl hover:bg-opacity-80 transition-all duration-300 shadow-xl"
          >
            <img src="/images/sv2.svg" alt="LinkedIn" class="w-8 h-8 mr-3" />
            <span class="text-white text-md">LinkedIn</span>
          </a>
          <a
            href="mailto:andrixngoyi243@gmail.com"
            class="flex items-center bg-primary p-4 rounded-xl hover:bg-opacity-80 transition-all duration-300 shadow-xl"
          >
            <img src="/images/sv1.svg" alt="Email" class="w-8 h-8 mr-3" />
            <span class="text-white text-md">Email</span>
          </a>
        </div>
      </div>

      <!-- Profile Image -->
      <div class="flex justify-center lg:w-1/2 mt-12 lg:mt-0">
        <img
          src="/images/and1.jpg"
          alt="Andrix Ngoyi"
          class="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl hover:scale-110 transition-transform duration-300"
        />
      </div>
    </section>

    <!-- About Section -->
    <section class="mt-12 p-10 lg:px-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl">
      <h2 class="text-5xl font-extrabold text-white text-center mb-8 lg:text-6xl">⚡ Qui suis-je ?</h2>
      <p class="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
        Je suis un <span class="text-primary font-semibold">développeur passionné</span>, un explorateur des technologies modernes qui se nourrit de défis. Avec une expérience qui va du <span class="text-primary font-semibold">web</span> au <span class="text-primary font-semibold">mobile</span>, mon objectif est simple : repousser les limites de la créativité technique.
      </p>
      <p class="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
        Mon cœur bat pour l'innovation, et mon ambition est de devenir un expert en <span class="text-primary font-semibold">UX/UI design</span> et en <span class="text-primary font-semibold">développement mobile</span>. Je ne me contente pas de suivre les tendances, je veux les définir.
      </p>
      <p class="text-lg text-gray-300 max-w-3xl mx-auto">
        J'aime créer des applications intuitives et performantes, qui changent la manière dont les gens interagissent avec la technologie. Si tu veux voir comment je pourrais transformer tes idées en code, parlons-en !
      </p>
    </section>

    <!-- Skills Component -->
    <Skills />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Typewriter from 'typewriter-effect/dist/core';
import Skills from './SkillsView.vue';

const typewriter = ref(null);

onMounted(() => {
  const typewriterInstance = new Typewriter(typewriter.value, {
    loop: true,
    deleteSpeed: 50,
  });

  typewriterInstance
    .typeString("Développeur Web </>")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Développeur Mobile")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Innovateur Autodidacte")
    .pauseFor(1500)
    .start();
});
</script>

<style scoped>
/* Animations */
@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-15deg); }
}
.animate-wave {
  display: inline-block;
  animation: wave 0.6s infinite;
}

@keyframes slideInLeft {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.animate-slideInLeft {
  animation: slideInLeft 1s ease-in-out;
}

@keyframes slideInLeftDelay {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.animate-slideInLeft-delay {
  animation: slideInLeftDelay 1.2s ease-in-out;
}

/* Colors */
:root {
  --primary-color: #3ccf91;
}

.text-primary {
  color: var(--primary-color);
}

/* Social Buttons Customization */
a:hover {
  background-color: rgba(60, 207, 145, 0.1);
  box-shadow: 0 4px 20px rgba(60, 207, 145, 0.3);
}
</style>
