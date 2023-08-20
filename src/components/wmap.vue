<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer,LMarker,LControlZoom,LIcon,LPopup} from "@vue-leaflet/vue-leaflet";
import ico from "../assets/location-pin.png"
import axios from 'axios'
const url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-373C6328-6BF2-41B3-BB3B-147802B82875';
export default {
   components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlZoom,
    LIcon,
    LPopup
  },
  props:[],
  data(){
    return {
      data:null,
      zoom: 9,
      iconUrl: ico
    }
  },
  created(){
    axios.get(url)
    .then((res) => {
      this.data = res.data.records.location
      //console.log(this.data)
    })
    .catch((error) => {
      console.error("An error occurred:", error)
    })
  },
};
</script>
<template>
  <div class="container-fluid sticky-top">
  <div class="row">
    <nav class="navbar p-3 text-primary-emphasis bg-light bg-opacity-75 sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"><h5><i class="bi bi-umbrella-fill"></i> Weather App using Vue</h5></router-link>
        <div class="btn-group btn-group-sm border border-dark border-3">
          <router-link type="button" class="btn btn-outline-dark" to="/">回首頁</router-link>
          <router-link type="button" class="btn btn-outline-dark" to="/rader">及時雷達回波圖</router-link>
          <router-link type="button" class="btn btn-outline-dark" to="/wmap">全台氣象站位置圖</router-link>
          <button type="button" class="btn btn-outline-dark" onclick="javascript:location.href='https://jemmy9211.github.io/'">Jemmy website</button>
        </div>
      </div>
    </nav>
  </div>
  <div class="row">
    <div class="alert alert-success">
      <strong>全台觀測站位置圖!</strong> 點按marker取得觀測站資料!
    </div>
  </div>
  </div>
    <div class="p-4" style="height:600px; width:100%" ref="myDiv">
        <l-map ref="map" v-model:zoom="zoom" :center="[24.23321, 120.9417]" :useGlobalLeaflet="false">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
        ></l-tile-layer>
        <l-marker  v-for="(x,index) in data" :lat-lng="[x.lat, x.lon]"><l-popup><weather-block style="height: auto;width: auto;"
          v-bind:city="x" :citynum="index"/></l-popup></l-marker>
        </l-map>
    </div>
</template>
<style>
</style>