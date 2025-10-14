<template>
  <div class="relative">
    <nav
      class="fixed top-0 left-0 right-0 z-50 mx-4 lg:mx-auto lg:max-w-7xl transition-all duration-500"
      :class="isOpen ? 'scale-100' : ''"
    >
      <div
        class="flex items-center justify-between p-4 bg-gray-900/80 backdrop-blur-xl rounded-full mt-4 shadow-lg border border-white/10 transition-all duration-500"
      >
        <!-- 🔹 Logo -->
        <RouterLink to="/" class="flex items-center space-x-2">
          <span
            class="text-2xl font-extrabold text-gradient lg:text-3xl tracking-tight"
            >A.Ng001</span
          >
        </RouterLink>

        <!-- 🔹 Menu Desktop -->
        <ul class="hidden lg:flex items-center space-x-10">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="flex items-center space-x-2 group"
          >
            <component
              :is="item.icon"
              class="w-5 h-5 text-gray-400 group-hover:text-[#00ffcc] transition-all duration-300"
            />
            <RouterLink
              :to="item.route"
              :class="[
                'relative group text-gray-300 hover:text-[#00ffcc] transition-all duration-300',
                isActive(item.route) ? 'text-[#00ffcc]' : ''
              ]"
            >
              {{ item.label }}
              <span
                class="absolute -bottom-2 left-0 h-0.5 bg-[#00ffcc] transition-all duration-300"
                :class="isActive(item.route) ? 'w-full' : 'w-0 group-hover:w-full'"
              ></span>
            </RouterLink>
          </li>

          <!-- CTA Desktop -->
          <li>
            <RouterLink
              to="/contact"
              class="px-6 py-2 bg-gradient-to-r from-[#00ffcc] to-blue-500 rounded-full text-white font-semibold shadow-lg hover:shadow-[#00ffcc]/30 transition transform hover:-translate-y-0.5"
            >
              Let’s Talk
            </RouterLink>
          </li>
        </ul>

        <!-- 🔹 Hamburger Mobile -->
        <div class="lg:hidden">
          <button
            @click="toggleMenu"
            class="focus:outline-none transition-transform duration-300"
            :class="isOpen ? 'rotate-90' : ''"
          >
            <svg
              v-if="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-[#00ffcc]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-[#00ffcc]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- 🔹 Menu Mobile -->
        <transition name="slide">
          <div
            v-if="isOpen"
            class="absolute top-20 right-0 bg-gray-800/90 text-white rounded-2xl shadow-2xl p-6 w-64 lg:hidden backdrop-blur-xl border border-white/10 transform origin-top-right animate-fade-in"
          >
            <ul class="flex flex-col space-y-6">
              <li
                v-for="(item, index) in menuItems"
                :key="index"
                class="flex items-center space-x-3"
              >
                <component
                  :is="item.icon"
                  class="w-5 h-5 text-[#00ffcc]"
                />
                <RouterLink
                  :to="item.route"
                  @click="toggleMenu"
                  class="text-gray-200 hover:text-[#00ffcc] transition-all"
                >
                  {{ item.label }}
                </RouterLink>
              </li>
            </ul>

            <!-- CTA Mobile -->
            <RouterLink
              to="/contact"
              @click="toggleMenu"
              class="mt-8 block text-center px-6 py-2 bg-gradient-to-r from-[#00ffcc] to-blue-500 rounded-full text-white font-semibold shadow-lg hover:shadow-[#00ffcc]/30 transition transform hover:-translate-y-0.5"
            >
              Let’s Talk 🚀
            </RouterLink>
          </div>
        </transition>
      </div>
    </nav>

    <!-- Overlay Mobile -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 z-40"
        @click="toggleMenu"
      ></div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

// SVG icons
const IconUser = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A4 4 0 018 16h8a4 4 0 012.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`
}

const IconFolder = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h4l3 3h11v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" /></svg>`
}

const isOpen = ref(false)
const route = useRoute()

const menuItems = [
  { label: 'About', route: '/about', icon: IconUser },
  { label: 'Projects', route: '/projects', icon: IconFolder },
]

const toggleMenu = () => (isOpen.value = !isOpen.value)
const isActive = (currentRoute) => route.path === currentRoute

watch(isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : 'auto'
})
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #00ffcc, #0078ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animation douce */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.4s ease forwards;
}
</style>
