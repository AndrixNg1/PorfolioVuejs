import { library } from '@fortawesome/fontawesome-svg-core';
import { faDatabase, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'primeicons/primeicons.css';
import './assets/main.css';

library.add(faLaptopCode, faMobileAlt, faDatabase);


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


// Création de l'application Vue
const app = createApp(App);

// Enregistrement du composant FontAwesome
app.component('font-awesome-icon', FontAwesomeIcon);

// Utilisation du routeur si nécessaire
app.use(router);

// Montage de l'application
app.mount('#app');
