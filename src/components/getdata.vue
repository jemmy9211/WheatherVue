<script>
import axios from 'axios'
const url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-373C6328-6BF2-41B3-BB3B-147802B82875';

export default {
  data() {
    return {
      data:[],
      search: '',
      searchkey: ''
    };
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
      <input class="form-control mr-sm-2 p-2" v-model="search" placeholder="輸入臺北/臺南/東引/澎湖等關鍵字...">
    </div>
  </nav>
  <div class="row p-5">
      <div class="row g-2">
        <weather-block v-for="(x,index) in filteredList" 
      v-bind:city="x" :citynum="index"/>
      </div>
  </div>
</template>

<style>

</style>
