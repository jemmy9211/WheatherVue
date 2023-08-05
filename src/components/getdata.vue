<script>
import axios from 'axios'
const url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-373C6328-6BF2-41B3-BB3B-147802B82875';

export default {
  data() {
    return {
      wdatas: [],
      data:null
    };
  },
  beforeCreate(){
    axios.get(url).then((res)=>{
      this.wdatas[0]=res.data.records.location[31]
      this.wdatas[1]=res.data.records.location[111]
      this.wdatas[2]=res.data.records.location[45]
      this.wdatas[3]=res.data.records.location[24]
      this.wdatas[4]=res.data.records.location[3]
      this.wdatas[5]=res.data.records.location[35]
      this.wdatas[6]=res.data.records.location[38]
      this.wdatas[7]=res.data.records.location[105]
      this.wdatas[8]=res.data.records.location[14]
      this.wdatas[9]=res.data.records.location[74]
      this.wdatas[10]=res.data.records.location[92]
      this.wdatas[11]=res.data.records.location[129]
      this.data=res.data.records.location
      console.log(this.wdatas)
    })
  }
};
</script>

<template>
  <div class="container">
    <div class="row g-2">
      <weather-block v-for="(x,index) in wdatas" 
    v-bind:city="x" :citynum="index"/>
    </div>
  </div>
</template>

<style>

</style>
