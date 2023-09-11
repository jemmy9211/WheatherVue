<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer,LMarker,LControlZoom,LIcon,LPopup,LControl} from "@vue-leaflet/vue-leaflet";
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
    LPopup,
    LControl
  },
  props:[],
  data(){
    return {
      data:null,
      zoom: 12,
      iconUrl: ico,
      showdiv: false,
      showmap:false,
      currentlocationx: '',
      currentlocationy: '',
      iconSize: 64
    }
  },
  created(){
    const success = (position) => {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.currentlocationx=latitude;
        this.currentlocationy=longitude;
    };
    const error = (err) => {
        console.log(error)
    };
    navigator.geolocation.getCurrentPosition(success, error);
    
    axios.get(url)
    .then((res) => {
      this.data = res.data.records.location
      this.showdiv=true
      //console.log(this.data)
    })
    .catch((error) => {
      console.error("An error occurred:", error)
      this.showdiv=false
    })
  },
  computed: {
    dynamicSize () {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor () {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  }
};
</script>
<template>
  <div class="container-fluid">
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
    <div class="row">
      <div v-if="showdiv" id="map" ref="myDiv">
          <l-map ref="map" v-model:zoom="zoom" :center="[currentlocationx, currentlocationy]" :useGlobalLeaflet="false">
          <l-tile-layer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              layer-type="base"
              name="OpenStreetMap"
          ></l-tile-layer>
          <l-marker  v-for="(x,index) in data" :lat-lng="[x.lat, x.lon]"><l-popup><weather-block style="height: auto;width: auto;"
            v-bind:city="x" :citynum="index"/></l-popup></l-marker>
          <l-marker :lat-lng="[currentlocationx, currentlocationy]"></l-marker>
          </l-map>
      </div>
      <div v-else class="text-white text-center">
        <br><br><br><div class="spinner-border text-light"></div><br>
        <h5>中央氣象局API正在更新資料<br>
        請稍後再重新整理頁面<br>
        謝謝!</h5>
      </div>
    </div>
  </div>
</template>
<style>
#map{
  bottom: 0;
  height: 700px;
  width: 100%;
}
</style>