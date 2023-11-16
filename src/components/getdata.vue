<script>
import axios from 'axios'
import Weatherblock from './weatherblock.vue';
const url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWA-FAC637E3-79B2-4800-B15D-9E19F7BB350B';

export default {
    data() {
        return {
            data: [],
            search: '',
            searchkey: '',
            showdiv: false,
            showcurrent: false,
            currentlocationx: '',
            currentlocationy: '',
            currentlocation: null
        };
    },
    created() {
        axios.get(url)
            .then((res) => {
            this.data = res.data.records.Station;
            //console.log(res)
            this.showdiv = true;
        }).catch((error) => {
            console.error("An error occurred:", error);
            this.showdiv = false;
        });
    },
    computed: {
        filteredList() {
            this.searchkey = this.search;
            this.searchkey = this.searchkey.replace('台', '臺');
            //console.log(this.searchkey)
            var aset = this.data.filter(item => item.GeoInfo.CountyName.includes(this.searchkey));
            var bset = this.data.filter(item => item.StationName.includes(this.searchkey));
            var abset = aset.concat(bset.filter((e) => { return aset.indexOf(e) === -1; }));
            return abset;
        }
    },
    methods: {
        
    },
    components: { Weatherblock }
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
        <weather-block v-for="(x,index) in filteredList" 
      v-bind:city="x" :citynum="index" :currentblock="false"/>
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
