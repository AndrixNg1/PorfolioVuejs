import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ✅ FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDatabase, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// ✅ Styles globaux
import 'primeicons/primeicons.css'
import './assets/main.css'

// ✅ Motion (animations)
import { MotionPlugin } from '@vueuse/motion'

// --- Configuration ---
library.add(faLaptopCode, faMobileAlt, faDatabase)

// --- Création de l’app ---
const app = createApp(App)

// --- Plugins ---
app.use(router)
app.use(MotionPlugin)

// --- Composants globaux ---
app.component('font-awesome-icon', FontAwesomeIcon)

// --- Montage final ---
app.mount('#app')
