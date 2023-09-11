<script>
import axios from 'axios'
const url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-373C6328-6BF2-41B3-BB3B-147802B82875';

export default {
  data() {
    return {
      data:[],
      search: '',
      searchkey: '',
      showdiv: false,
      showcurrent:false,
      currentlocationx:'',
      currentlocationy:'',
      currentlocation:null
    };
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
      //console.log(this.data.length)
      var tep=0;
      var mtep=1000000;
      for(var i=0;i<this.data.length;i++){
        tep=0;
        tep=this.haversineDistance(this.currentlocationx,this.currentlocationy,this.data[i].lat,this.data[i].lon)
        //console.log(tep)
        if(tep<=mtep){
          mtep=tep;
          this.currentlocation=this.data[i];
        }
      }
      this.showcurrent=true
      //console.log(this.currentlocation)
    })
    .catch((error) => {
      console.error("An error occurred:", error)
      this.showdiv=false
    });
  },
  computed: {
    filteredList(){
      this.searchkey=this.search
      this.searchkey=this.searchkey.replace('台','臺')
      //console.log(this.searchkey)
      var aset=this.data.filter(item => item.parameter[0].parameterValue.includes(this.searchkey));
      var bset=this.data.filter(item => item.locationName.includes(this.searchkey));
      var abset=aset.concat(bset.filter((e)=>{return aset.indexOf(e)===-1}));
      return abset;
    }
  },
  methods:{
    haversineDistance(lat1, lon1, lat2, lon2) {
      const earthRadiusKm = 6371;
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
          Math.cos(lat2 * (Math.PI / 180)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = earthRadiusKm * c;

      return distance;
    }
  }
};
</script>

<template>
  <nav class="navbar p-3 text-primary-emphasis bg-light bg-opacity-75 sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><h5><i class="bi bi-umbrella-fill"></i> Weather App using Vue</h5></router-link>
      <div class="btn-group btn-group-sm border border-dark border-3">
        <router-link type="button" class="btn btn-outline-dark" to="/">回首頁</router-link>
        <router-link type="button" class="btn btn-outline-dark" to="/rader">及時雷達回波圖</router-link>
        <router-link type="button" class="btn btn-outline-dark" to="/wmap">全台氣象站位置圖</router-link>
        <button type="button" class="btn btn-outline-dark" onclick="javascript:location.href='https://jemmy9211.github.io/'">Jemmy website</button>
      </div>
      <div class="input-group">
        <input class="form-control mr-sm-2 p-2" v-model="search" placeholder="輸入臺北/臺南/東引/澎湖等關鍵字...">
        <button type="button" class="btn btn-primary p-2">
          <i class="bi bi-search"></i>
        </button>
      </div>
    </div>
  </nav>
  <div v-if="showdiv" class="row p-5">
      <div class="row g-2">
        <!-- <div class="container bg-dark bg-opacity-50 p-3 rounded"> -->
          <h5 class="text-light">距離目前位置最近觀測站<i class="bi bi-arrow-down"></i></h5>
          <weather-block v-if="showcurrent" v-bind:city="this.currentlocation"></weather-block>
        <!-- </div> -->
        <h5 class="text-light">以下為搜尋結果<i class="bi bi-arrow-down"></i></h5>
        <weather-block v-for="(x,index) in filteredList" 
      v-bind:city="x" :citynum="index"/>
      </div>
  </div>
  <div v-else class="text-white text-center">
    <br><br><br><div class="spinner-border text-light"></div><br>
    <h5>中央氣象局API正在更新資料<br>
    請稍後再重新整理頁面<br>
    謝謝!</h5>
  </div>
</template>

<style>

</style>
