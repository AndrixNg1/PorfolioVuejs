<template>
  <footer class="bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-6" id="footer">
    <section class="max-w-7xl mx-auto text-white">
      <!-- Contenu principal -->
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Contact -->
        <div>
          <h2 class="text-2xl font-bold text-[#3ccf91] mb-4">Me contacter</h2>
          <ul class="space-y-4">
            <li>
              <a href="tel:+243855356517" class="flex items-center hover:text-[#3ccf91] transition duration-300">
                <i class="fas fa-phone-alt mr-3"></i>
                +243 855356517
              </a>
            </li>
            <li>
              <a href="mailto:andrixngoyi243@gmail.com"
                class="flex items-center hover:text-[#3ccf91] transition duration-300">
                <i class="fas fa-envelope mr-3"></i>
                andrixngoyi243@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <!-- Navigation -->
        <div>
          <h2 class="text-2xl font-bold text-[#3ccf91] mb-4">Navigation</h2>
          <ul class="space-y-2">
            <li>
              <a href="/" class="hover:text-[#3ccf91] transition duration-300">Accueil</a>
            </li>
            <li>
              <a href="/about" class="hover:text-[#3ccf91] transition duration-300">À propos</a>
            </li>
            <li>
              <a href="/services" class="hover:text-[#3ccf91] transition duration-300">Services</a>
            </li>
            <li>
              <a href="/projet" class="hover:text-[#3ccf91] transition duration-300">Projet</a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h2 class="text-2xl font-bold text-[#3ccf91] mb-4">Mes services</h2>
          <ul class="space-y-2">
            <li class="hover:text-[#3ccf91] transition duration-300">Développement Web</li>
            <li class="hover:text-[#3ccf91] transition duration-300">Applications Vue.js</li>
            <li class="hover:text-[#3ccf91] transition duration-300">Design réactif</li>
            <li class="hover:text-[#3ccf91] transition duration-300">Optimisation des performances</li>
          </ul>
        </div>

        <!-- Suivez-moi -->
        <!-- Suivez-moi -->
        <div>
          <h2 class="text-2xl font-bold text-[#3ccf91] mb-4">Suivez-moi</h2>
          <div class="flex space-x-4">
            <!-- GitHub -->
            <a href="https://github.com/AndrixNg1" target="_blank"
              class="w-10 h-10 flex items-center justify-center text-white/90 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
              aria-label="GitHub">
              <svg class="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/andrix-ngoyi-469662321" target="_blank"
              class="w-10 h-10 flex items-center justify-center text-white/90 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
              aria-label="LinkedIn">
              <svg class="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/andrix_ngoyi" target="_blank"
              class="w-10 h-10 flex items-center justify-center text-white/90 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
              aria-label="Instagram">
              <svg class="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.3.975.975 1.238 2.243 1.3 3.608.058 1.267.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.3 3.608-.975.975-2.243 1.238-3.608 1.3-1.267.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.3-.975-.975-1.238-2.243-1.3-3.608-.058-1.267-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.3-3.608.975-.975 2.243-1.238 3.608-1.3 1.267-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.072-1.44.067-2.72.35-3.737 1.367s-1.3 2.296-1.367 3.737c-.06 1.281-.072 1.689-.072 4.947s.012 3.667.072 4.947c.067 1.44.35 2.72 1.367 3.737s2.296 1.3 3.737 1.367c1.281.06 1.689.072 4.947.072s3.667-.012 4.947-.072c1.44-.067 2.72-.35 3.737-1.367s1.3-2.296 1.367-3.737c.06-1.281.072-1.689.072-4.947s-.012-3.667-.072-4.947c-.067-1.44-.35-2.72-1.367-3.737s-2.296-1.3-3.737-1.367c-1.281-.06-1.689-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.205a4.043 4.043 0 110-8.086 4.043 4.043 0 010 8.086zm6.406-11.845a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      <!-- Divider -->
      <div class="border-t border-gray-700 my-8"></div>

      <!-- Copyright -->
      <div class="text-center">
        <p class="text-sm text-white/80">
          &copy; {{ new Date().getFullYear() }}
          <span class="text-[#3ccf91]">Andrix Ngoyi</span> || Tous droits réservés.
        </p>
      </div>
    </section>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
<style scoped>
footer a {
  transition: color 0.3s ease, transform 0.3s ease;
}

footer a:hover {
  color: #3ccf91;
}
</style>
