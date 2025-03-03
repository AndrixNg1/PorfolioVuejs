<template>
  <div :class="isOpen ? 'bg-opacity-50' : ''" class="relative">
    <nav class="lg:bg-transparent lg:mt-0 lg:rounded-none lg:backdrop-filter-none fixed top-0 left-0 right-0 mx-4 z-50">
      <!-- Conteneur de navigation -->
      <div
        class="flex items-center justify-between p-4 bg-gray-800 rounded-full mt-4 bg-opacity-90 backdrop-blur-lg text-gray-100 lg:max-w-7xl lg:mx-auto lg:mt-6 shadow-md">
        <!-- Logo -->
        <RouterLink to="/" class="text-2xl font-extrabold text-gradient lg:text-3xl">
          Andrix
        </RouterLink>

        <!-- Menu desktop -->
        <ul class="hidden lg:flex items-center space-x-10">
          <li v-for="(item, index) in menuItems" :key="index">
            <RouterLink :to="item.route" :class="[
              'relative group text-gray-300 hover:text-[#00ffcc] transition-all duration-300',
              isActive(item.route) ? 'text-[#00ffcc]' : ''
            ]">
              {{ item.label }}
              <span class="absolute -bottom-2 left-0 h-0.5 bg-[#00ffcc] transition-all duration-300"
                :class="isActive(item.route) ? 'w-full' : 'w-0 group-hover:w-full'"></span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="px-6 py-2 bg-gradient-to-r from-[#00ffcc] to-blue-500 rounded-full
           text-white font-semibold shadow-lg hover:shadow-blue-500/20
           transition-all duration-300 transform hover:-translate-y-0.5">
              Prendre contact
            </RouterLink>
          </li>

        </ul>

        <!-- Menu hamburger -->
        <div class="lg:hidden">
          <button @click="toggleMenu" class="focus:outline-none">
            <i class="pi text-gray-200 text-2xl transition-transform duration-300"
              :class="isOpen ? 'pi-times rotate-90' : 'pi-bars'"></i>
          </button>
        </div>

        <!-- Menu mobile -->
        <transition name="slide">
          <div v-if="isOpen"
            class="absolute top-20 right-0 bg-gray-700 bg-opacity-80 text-white rounded-lg shadow-lg p-6 w-64 lg:hidden backdrop-blur-lg">
            <ul class="flex flex-col space-y-6">
              <li v-for="(item, index) in menuItems" :key="index">
                <RouterLink :to="item.route" @click="toggleMenu">{{ item.label }}</RouterLink>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </nav>

    <!-- Overlay -->
    <div v-if="isOpen" class="fixed inset-0 bg-black opacity-50 z-40 pointer-events-none"></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const isOpen = ref(false);
const route = useRoute();

const menuItems = [
  { label: 'Accueil', route: '/' },
  { label: 'A propos', route: '/about' },
  { label: 'Projets', route: '/projets' },
  { label: 'Services', route: '/services' },

];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const scrollToContact = () => {
  const contactSection = document.querySelector('#contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const isActive = (currentRoute) => route.path === currentRoute;

watch(isOpen, (newVal) => {
  document.body.style.overflow = newVal ? 'hidden' : 'auto';
});
</script>

<style>
/* Texte en gradient */
.text-gradient {
  background: linear-gradient(90deg, #00ffcc, #0078ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Transition pour le menu mobile */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s, opacity 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Effet de flou pour l'arrière-plan */
.backdrop-blur-lg {
  backdrop-filter: blur(15px);
}

/* Ombre douce */
.shadow-md {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}
</style>
