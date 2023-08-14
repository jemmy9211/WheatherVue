import "leaflet/dist/leaflet.css";
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import weatherblock from './components/weatherblock.vue'
import getdata from './components/getdata.vue'
import forcastweather from './components/forcastweather.vue'
import rader from './components/rader.vue'
import forcastcom from './components/forcastcom.vue'
import wicon from './components/wicon.vue'
import wmap from './components/wmap.vue'
import { createRouter, createWebHashHistory  } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: getdata , props: true},
        { path: '/weatherblock', component: weatherblock , props: true},
        { path: '/forcastweather',name:'forcastweather', component: forcastweather},
        { path: '/rader', component: rader , props: true},
        { path: '/wmap', component: wmap , props: true},
    ]
});

const app = createApp(App)
app.component('weather-block', weatherblock)
app.component('get-data', getdata)
app.component('forcast-weather',forcastweather)
app.component('rader',rader)
app.component('forcastcom',forcastcom)
app.component('wicon',wicon)
app.component('wmap',wmap)
app.use(router);
app.mount('#app')