<template>
  <section
    class="relative bg-gray-900 text-white px-6 md:px-20 py-28 overflow-hidden"
  >
    <!-- 🔹 Soft glow background -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/10 via-transparent to-[#00e6b3]/5 pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- 🔹 Main title -->
      <div class="text-center mb-20">
        <h2
          class="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-[#00ffcc]"
        >
          Let's Get in Touch
        </h2>
        <p
          class="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
        >
          Do you have an ambitious project or an idea you’d like to bring to
          life?
          Together, we can turn your vision into a real, impactful solution.
        </p>
      </div>

      <!-- 🔹 Contact info blocks -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 text-left"
      >
        <!-- Address -->
        <div
          class="border-l-4 border-[#00ffcc] pl-6 space-y-4 transform transition duration-300 hover:translate-y-[-4px]"
        >
          <div class="text-3xl">📍</div>
          <h3 class="font-semibold text-xl text-[#00ffcc]">Address</h3>
          <p class="text-gray-300 text-lg leading-relaxed">
            Lubumbashi, Democratic Republic of Congo
          </p>
          <p class="text-gray-500 italic text-sm">
            “Always open to new ideas, people, and inspiring projects.”
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
            “Drop me a message — I usually reply quickly.”
          </p>
        </div>

        <!-- Phone -->
        <div
          class="border-l-4 border-[#00ffcc] pl-6 space-y-4 transform transition duration-300 hover:translate-y-[-4px]"
        >
          <div class="text-3xl">📞</div>
          <h3 class="font-semibold text-xl text-[#00ffcc]">Phone</h3>
          <a
            href="tel:+243836066402"
            class="text-white hover:text-[#00ffcc] transition-colors duration-300 font-medium text-lg"
          >
            +243 836 066 402
          </a>
          <p class="text-gray-500 italic text-sm">
            “Available for calls, discussions, or quick advice anytime.”
          </p>
        </div>
      </div>

      <!-- 🔹 CTA -->
      <div class="text-center mt-24">
        <a
          href="mailto:andrixngoyi243@gmail.com"
          class="inline-block bg-[#00ffcc] text-gray-900 font-bold px-10 py-4 rounded-full text-lg hover:bg-[#00e6b3] transition-all duration-300 shadow-lg hover:shadow-[#00ffcc]/40"
        >
          Let's Talk About Your Project 🚀
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  border-radius: 16px;
}

/* 🔹 Subtle hover animation on info blocks */
.border-l-4 {
  transition: all 0.3s ease;
}
.border-l-4:hover {
  border-color: #00e6b3;
}
</style>
