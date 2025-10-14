<template>
  <section
    class="relative bg-gray-900 text-white px-6 md:px-20 py-28 overflow-hidden"
  >
    <!-- 🔹 Effet lumineux doux -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/10 via-transparent to-[#00e6b3]/5 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- 🔹 Titre principal -->
      <div class="text-center mb-20">
        <h2
          class="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-[#00ffcc]"
        >
          Entrons en contact
        </h2>
        <p
          class="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
        >
          Vous avez un projet ambitieux ? Une idée à concrétiser ?
          Ensemble, faisons passer votre vision du concept à la réalité.
        </p>
      </div>

      <!-- 🔹 Bloc infos -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 text-left"
      >
        <!-- Adresse -->
        <div
          class="border-l-4 border-[#00ffcc] pl-6 space-y-4 transform transition duration-300 hover:translate-y-[-4px]"
        >
          <div class="text-3xl">📍</div>
          <h3 class="font-semibold text-xl text-[#00ffcc]">Adresse</h3>
          <p class="text-gray-300 text-lg leading-relaxed">
            Lubumbashi, République Démocratique du Congo
          </p>
          <p class="text-gray-500 italic text-sm">
            “Toujours prêt à rencontrer de nouveaux talents et projets.”
          </p>
        </div>

        <!-- Email -->
        <div
          class="border-l-4 border-[#00ffcc] pl-6 space-y-4 transform transition duration-300 hover:translate-y-[-4px]"
        >
          <div class="text-3xl">💬</div>
          <h3 class="font-semibold text-xl text-[#00ffcc]">Email</h3>
          <a
            href="mailto:andrixngoyi243@gmail.com"
            class="text-white hover:text-[#00ffcc] transition-colors duration-300 font-medium text-lg"
          >
            andrixngoyi243@gmail.com
          </a>
          <p class="text-gray-500 italic text-sm">
            “Écrivez-moi, je réponds rapidement à chaque message.”
          </p>
        </div>

        <!-- Téléphone -->
        <div
          class="border-l-4 border-[#00ffcc] pl-6 space-y-4 transform transition duration-300 hover:translate-y-[-4px]"
        >
          <div class="text-3xl">📞</div>
          <h3 class="font-semibold text-xl text-[#00ffcc]">Téléphone</h3>
          <a
            href="tel:+243836066402"
            class="text-white hover:text-[#00ffcc] transition-colors duration-300 font-medium text-lg"
          >
            +243 836 066 402
          </a>
          <p class="text-gray-500 italic text-sm">
            “Disponible pour échanger, conseiller et accompagner vos idées.”
          </p>
        </div>
      </div>

      <!-- 🔹 CTA -->
      <div class="text-center mt-24">
        <a
          href="mailto:andrixngoyi243@gmail.com"
          class="inline-block bg-[#00ffcc] text-gray-900 font-bold px-10 py-4 rounded-full text-lg hover:bg-[#00e6b3] transition-all duration-300 shadow-lg hover:shadow-[#00ffcc]/40"
        >
          Discutons de votre projet 🚀
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  border-radius: 16px;
}

/* 🔹 Animation subtile des blocs */
.border-l-4 {
  transition: all 0.3s ease;
}
.border-l-4:hover {
  border-color: #00e6b3;
}
</style>
