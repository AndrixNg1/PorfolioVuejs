<template>
  <div :class="isOpen ? 'bg-opacity-50' : ''" class="relative">
    <nav class="fixed top-0 left-0 right-0 z-50 mx-4 lg:mx-auto lg:max-w-7xl">
      <div
        class="flex items-center justify-between p-4 bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-full mt-4 shadow-md lg:mt-6">

        <!-- Logo -->
        <RouterLink to="/" class="text-2xl font-extrabold text-gradient lg:text-3xl">
          Andrix
        </RouterLink>

        <!-- Menu Desktop -->
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
            <RouterLink to="/contact"
              class="px-6 py-2 bg-gradient-to-r from-[#00ffcc] to-blue-500 rounded-full text-white font-semibold shadow-lg hover:shadow-blue-500/20 transition transform hover:-translate-y-0.5">
              Prendre contact
            </RouterLink>
          </li>
        </ul>

        <!-- Hamburger Mobile -->
        <div class="lg:hidden">
          <button @click="toggleMenu" class="focus:outline-none">
            <i class="pi text-gray-200 text-2xl transition-transform duration-300"
              :class="isOpen ? 'pi-times rotate-90' : 'pi-bars'"></i>
          </button>
        </div>

        <!-- Menu Mobile -->
        <transition name="slide">
          <div v-if="isOpen"
            class="absolute top-20 right-0 bg-gray-700 bg-opacity-80 text-white rounded-lg shadow-lg p-6 w-64 lg:hidden backdrop-blur-lg">
            <ul class="flex flex-col space-y-6">
              <li v-for="(item, index) in menuItems" :key="index">
                <RouterLink :to="item.route" @click="toggleMenu">{{ item.label }}</RouterLink>
              </li>
            </ul>

            <!-- Mobile contact button -->
            <RouterLink to="/contact" @click="toggleMenu"
              class="mt-6 block text-center px-6 py-2 bg-gradient-to-r from-[#00ffcc] to-blue-500 rounded-full text-white font-semibold shadow-lg hover:shadow-blue-500/20 transition transform hover:-translate-y-0.5">
              Prendre contact
            </RouterLink>
          </div>
        </transition>
      </div>
    </nav>

    <!-- Overlay pour mobile -->
    <div v-if="isOpen" class="fixed inset-0 bg-black opacity-50 z-40 pointer-events-none"></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const isOpen = ref(false);
const route = useRoute();

const menuItems = [
  //{ label: 'A propos', route: '/about' },
  { label: 'Projets', route: '/projets' },
];

const toggleMenu = () => { isOpen.value = !isOpen.value; };

const isActive = (currentRoute) => route.path === currentRoute;

watch(isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : 'auto';
});
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #00ffcc, #0078ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s, opacity 0.5s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.backdrop-blur-lg {
  backdrop-filter: blur(15px);
}

.shadow-md {
  box-shadow: 0 4px 10px rgba(0,0,0,0.25);
}
</style>
