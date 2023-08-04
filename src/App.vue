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
      console.log(res.data)
      this.wdatas[0]=res.data.records.location[31]
      this.wdatas[1]=res.data.records.location[111]
      this.wdatas[2]=res.data.records.location[45]
      this.wdatas[3]=res.data.records.location[24]
      this.wdatas[4]=res.data.records.location[3]
      console.log(this.wdatas)
    })
  }
};
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand"><i class="bi bi-emoji-sunglasses-fill"></i> Wheather App using Vue</a>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <weather-block v-for="x in wdatas" 
    v-bind:city="x" 
/>
</template>

<style>

</style>
