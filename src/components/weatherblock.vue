<template>
  <div class="p-3 mb-2 bg-secondary text-white">
    <router-link class="btn btn-secondary btn-block" :to="{path:'/forcastweather',query:{userId: citynum}}">
      <h3 class="text-white">{{ city.locationName }}</h3>
      <h5><span class="badge bg-dark">觀測時間:</span> {{ city.time.obsTime }}</h5>
      <span class="badge bg-dark">目前觀測氣溫:</span> {{ city.weatherElement[3].elementValue }}
      <span class="badge bg-dark">天氣描述:</span> {{ city.weatherElement[20].elementValue }}
      <span class="badge bg-dark">濕度:</span> {{ city.weatherElement[2].elementValue }}
    </router-link>
  </div>
</template>
  
<script>
export default {
  props:['city','citynum'],
  data(){
    return {
      data:null
    }
  }
};
</script>
  
<style>

</style>