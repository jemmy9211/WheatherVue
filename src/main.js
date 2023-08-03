import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import weatherblock from './components/weatherblock.vue'

const app = createApp(App)
app.component('weather-block', weatherblock)
app.mount('#app')