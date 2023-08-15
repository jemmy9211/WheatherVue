<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer,LMarker,LControlZoom,LIcon } from "@vue-leaflet/vue-leaflet";
import axios from 'axios'
const url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-373C6328-6BF2-41B3-BB3B-147802B82875';
export default {
   components: {
    LMap,
    LTileLayer,
    LMarker,
    LControlZoom,
    LIcon
  },
  props:[],
  data(){
    return {
      data:null,
      zoom: 9,
    }
  },
  created(){
    axios.get(url).then((res)=>{
      this.data=res.data.records.location
      //console.log(this.data)

    })
  },
};
</script>
<template>
  <nav class="navbar p-3 text-primary-emphasis bg-light bg-opacity-75 sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><h5><i class="bi bi-umbrella-fill"></i> Weather App using Vue</h5></router-link>
      <div class="btn-group btn-group-sm border border-dark border-3">
        <router-link type="button" class="btn btn-outline-dark" to="/rader">及時雷達回波圖</router-link>
        <router-link type="button" class="btn btn-outline-dark" to="/wmap">氣象站座標</router-link>
        <button type="button" class="btn btn-outline-dark" onclick="javascript:location.href='https://jemmy9211.github.io/'">Jemmy website</button>
      </div>
    </div>
  </nav>
  <div class="text-white shadow-lg p-3 mb-5 bg-dark rounded bg-opacity-50"><h3 class="text-white">全台觀測站位置圖</h3></div>
  <div class="container p-2 shadow-lg">
        <div style="height:600px; width:100%" ref="myDiv">
            <l-map ref="map" v-model:zoom="zoom" :center="[24.23321, 120.9417]" :useGlobalLeaflet="false">
            <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
            ></l-tile-layer>
            <l-marker  v-for="x in data" :lat-lng="[x.lat, x.lon]"><l-icon class-name="someExtraClass">{{x.locationName}}</l-icon></l-marker>
            </l-map>
        </div>
      </div>
</template>
<style>
.someExtraClass {
  background-color: black;
  color: white;
  padding: 4px;
  border: 1px solid white;
  border-radius: 2px 2px 30px 30px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.8);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
  opacity: 50;
}
</style>