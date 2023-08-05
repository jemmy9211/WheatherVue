import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import weatherblock from './components/weatherblock.vue'
import getdata from './components/getdata.vue'
import forcastweather from './components/forcastweather.vue'
import rader from './components/rader.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/WheatherVue', component: getdata , props: true},
        { path: '/weatherblock', component: weatherblock , props: true},
        { path: '/forcastweather',name:'forcastweather', component: forcastweather},
        { path: '/rader', component: rader , props: true},
    ]
});

const app = createApp(App)
app.component('weather-block', weatherblock)
app.component('get-data', getdata)
app.component('forcast-weather',forcastweather)
app.component('rader',rader)
app.use(router);
app.mount('#app')