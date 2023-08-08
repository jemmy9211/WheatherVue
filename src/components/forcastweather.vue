<script>
import axios from 'axios'
const url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-373C6328-6BF2-41B3-BB3B-147802B82875';
export default {
  data() {
    return {
      wdata:[],
      MaxT:[],
      MinT:[],
      PoPL:[],
      Wx:[],
      totaldata:[]
    };
  },
  beforeCreate(){
    axios.get(url).then((res)=>{
      //console.log(res.data)
      var tep=this.$route.query.userId;
      tep=2
      console.log(res.data.records.location.length)
      for(var i=0;i<res.data.records.location.length;i++){
        if(this.$route.query.userId==res.data.records.location[i].locationName){
          tep=i;
          console.log(i)
        }
      }
      this.wdata=res.data.records.location[tep]
      this.MaxT=res.data.records.location[tep].weatherElement[4].time
      this.MinT=res.data.records.location[tep].weatherElement[2].time
      this.PoPL=res.data.records.location[tep].weatherElement[1].time
      this.Wx=res.data.records.location[tep].weatherElement[0].time
      for(var i=0;i<3;i++){
        this.totaldata[i]=this.Wx[i].startTime+","+this.Wx[i].endTime+","+this.PoPL[i].parameter.parameterName+","+this.MinT[i].parameter.parameterName+","+this.MaxT[i].parameter.parameterName+","+this.Wx[i].parameter.parameterName
      }
    })
  }
};
</script>

<template>
  <div class="text-white shadow-lg p-3 mb-5 bg-dark rounded bg-opacity-50">
    <h3>{{ wdata.locationName }} 未來36小時預報</h3>
    <div class="btn-group btn-group-sm border border-dark border-3 text-white">
      <router-link type="button" class="btn btn-outline-light" to="/">回首頁</router-link>
      <router-link type="button" class="btn btn-outline-light" to="/rader">及時雷達迴波圖</router-link>
      <button type="button" class="btn btn-outline-light" onclick="javascript:location.href='https://jemmy9211.github.io/'">Jemmy website</button>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <forcastcom v-for="x in totaldata" v-bind:forcastdata="x"></forcastcom>
    </div>
  </div>
</template>

<style>

</style>
