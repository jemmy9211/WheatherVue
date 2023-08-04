<template>
  <div class="p-3 mb-2 bg-secondary text-white">
      <h3 class="text-white">{{ city.locationName }}</h3>
      <span class="badge bg-dark">目前觀測氣溫:</span> {{ city.weatherElement[3].elementValue }}
      <span class="badge bg-dark">天氣描述:</span> {{ city.weatherElement[20].elementValue }}
  </div>
</template>
  
  <script>
  var a;
  export default {
    props:['city'],
    data(){
      return {
        data:null
      }
    }
    
  };
  </script>
  
<style>

</style>