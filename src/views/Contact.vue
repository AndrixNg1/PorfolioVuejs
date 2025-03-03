<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
    <div class="max-w-6xl w-full text-center">
      <h1 class="text-6xl font-bold mb-6">
        Contactez-moi pour discuter de votre <span class="text-[#00ffcc]">projet</span>
      </h1>
      <p class="text-xl text-gray-400 mb-10">Vous pouvez me contacter via les informations ci-dessous.</p>

      <div class="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
        <img
          src="/images/contact.jpg"
          alt="Profile"
          class="w-80 h-56 object-cover rounded-lg shadow-lg"
        />

        <div class="text-left space-y-6 text-lg">
          <div class="flex items-center space-x-4">
            <span class="text-2xl">📍</span>
            <p class="text-gray-300">Lubumbashi, RDC</p>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-2xl">📧</span>
            <a href="mailto:andrixngoyi243@gmail.com" class="text-[#00ffcc] hover:underline text-xl">
              andrixngoyi243@gmail.com
            </a>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-2xl">📞</span>
            <a href="tel:+243855356517" class="text-[#00ffcc] hover:underline text-xl">
              +243 855 356 517
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>



export default {
  name: "ContactPage",
};
</script>

<style scoped>
  div {
    animation: fadeIn 1s ease-in-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
