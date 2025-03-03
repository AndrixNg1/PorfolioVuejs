<template>
  <footer class="bg-gray-800 bg-opacity-90 backdrop-blur-lg text-white py-10 px-6 rounded-t-2xl shadow-lg">
    <div class="max-w-7xl mx-auto">
      <!-- Logo et icônes sociales -->
      <div class="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center">
        <div class="text-center lg:text-left">
          <h2 class="text-3xl font-extrabold tracking-wide text-gradient">Andrix</h2>
          <p class="text-gray-400 text-sm mt-1">Andrix Ngoyi</p>
        </div>

        <div class="flex space-x-4 mt-6 lg:mt-0">
          <a href="https://x.com/andr6102?t=APlqxhSOwpWnfRkOXHqzAw&s=09" target="_blank" class="social-icon">
            <i class="pi pi-twitter"></i>
          </a>
          <a href="https://github.com/AndrixNg1" target="_blank" class="social-icon">
            <i class="pi pi-github"></i>
          </a>
          <a href="https://www.instagram.com/andrix_ngoyi" target="_blank" class="social-icon">
            <i class="pi pi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/andrix-ngoyi-469662321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="social-icon">
            <i class="pi pi-linkedin"></i>
          </a>
        </div>
      </div>

      <!-- Lignes de séparation -->
      <div class="border-t border-gray-700 my-8"></div>

      <!-- Sections de navigation -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 class="footer-title">Navigation</h3>
          <ul class="footer-list">
            <li><RouterLink to="/">Accueil</RouterLink></li>
            <li><RouterLink to="/about">À propos de moi</RouterLink></li>
            <li><RouterLink to="/services">Services</RouterLink></li>
            <li><RouterLink to="/projets">Projets</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="footer-title">Services</h3>
          <ul class="footer-list">
            <li><RouterLink to="#">Développement Web</RouterLink></li>
            <li><RouterLink to="#">Marketing Digital</RouterLink></li>
            <li><RouterLink to="#">Design Graphique</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="footer-title">Ressources</h3>
          <ul class="footer-list">
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center text-gray-400 text-sm mt-10">
        © Andrix-Ngoyi 2024 - 2025 | Tous droits réservés
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Style des titres de sections */
.footer-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

/* Liste des liens */
.footer-list li {
  margin-bottom: 0.5rem;
}

.footer-list li a {
  color: #A1A1AA;
  transition: color 0.3s;
}

.footer-list li a:hover {
  color: #00ffcc;
}

/* Icônes sociales */
.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s;
}

.social-icon:hover {
  background-color: #00ffcc;
}

.social-icon i {
  font-size: 1.2rem;
  color: white;
}

/* Effet de flou et opacité pour l'intégration avec le Navbar */
.bg-opacity-90 {
  backdrop-filter: blur(15px);
}

/* Texte en gradient pour Andrix */
.text-gradient {
  background: linear-gradient(90deg, #00ffcc, #0078ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
