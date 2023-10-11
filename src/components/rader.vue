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
    </div>
  </nav>
  <div v-if="showdiv" class="container">
      <br>
      <h5><span class="badge bg-success">雷達整合回波圖-臺灣</span></h5>
      <img v-bind:src="this.raderlink" class="img-thumbnail" alt="Cinque Terre">
  </div>
  <div v-else class="text-white text-center">
        <br><br><br><div class="spinner-border text-light"></div><br>
        <h5>中央氣象局API正在更新資料<br>
        請稍後再重新整理頁面<br>
        謝謝!</h5>
      </div>
</template>
<script>
import axios from 'axios'
const url ='https://opendata.cwa.gov.tw/fileapi/v1/opendataapi/O-A0058-003?Authorization=CWA-FAC637E3-79B2-4800-B15D-9E19F7BB350B&downloadType=WEB&format=JSON'
export default{
  data(){
    return{
      raderlink:'',
      showdiv:false
    }
  },
  created(){
    axios.get(url,{
      mode: 'no-cors'
    })
    .then((res) => {
      this.raderlink = res.data.cwaopendata.dataset.resource.ProductURL
      this.showdiv=true
      //console.log(this.raderlink)
    })
    .catch((error) => {
      console.error("An error occurred:", error)
    })
  }
}
</script>
<style>
</style>