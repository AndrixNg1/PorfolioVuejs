<template>
  <footer class="bg-gray-900 bg-opacity-90 backdrop-blur-lg text-white py-6 px-6 rounded-t-2xl shadow-lg">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

      <!-- Left: Copyright -->
      <div class="text-gray-400 text-xl">
        © 2024 - 2025 Andrix-Ngoyi. All Rights Reserved | Design by Andrix Ngoyi

      </div>

      <!-- Right: Social Icons -->
      <div class="flex space-x-4">
            <a href="https://github.com/AndrixNg1" target="_blank"
          class="flex items-center justify-center w-12 h-12 border-2 border-green-500 rounded-full hover:scale-110 hover:shadow-lg transition transform duration-300">
          <img src="/images/sv3.svg" alt="GitHub" class="w-6 h-6" />
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/andrix-ngoyi-469662321" target="_blank"
          class="flex items-center justify-center w-12 h-12 border-2 border-green-500 rounded-full hover:scale-110 hover:shadow-lg transition transform duration-300">
          <img src="/images/sv2.svg" alt="LinkedIn" class="w-6 h-6" />
        </a>

        <!-- Email -->
        <a href="mailto:andrixngoyi243@gmail.com"
          class="flex items-center justify-center w-12 h-12 border-2 border-green-500 rounded-full hover:scale-110 hover:shadow-lg transition transform duration-300">
          <img src="/images/sv1.svg" alt="Email" class="w-6 h-6" />
        </a>

        <!-- Instagram -->
        <a href="https://www.instagram.com/andrix_ngoyi" target="_blank"
          class="flex items-center justify-center w-12 h-12 border-2 border-green-500 rounded-full hover:scale-110 hover:shadow-lg transition transform duration-300">
          <i class="pi pi-instagram text-green-500 text-lg"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: transform 0.3s ease, background 0.3s ease;
}

.social-icon i {
  font-size: 1.2rem;
  color: white;
  transition: color 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.15);
  background: linear-gradient(135deg, #00ffcc, #0078ff);
}

.social-icon:hover i {
  color: #000;
}
</style>
