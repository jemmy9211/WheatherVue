<template>
  <div v-if="currentblock" class="col-lg-12 d-grid">
    <router-link class="btn btn-lg bg-opacity-25 border border-primary-subtle rounded-3 border-5 shadow-lg p-3 mb-5 bg-body rounded" :to="{path:'/forcastweather',query:{userId: city.parameter[0].parameterValue,lat: city.lat,lon:city.lon,sname:city.locationName}}">
      <h3 class="text-black"><strong>{{ city.locationName }}</strong></h3>
      <h5 class="text-black"><strong>{{ city.parameter[0].parameterValue }} </strong></h5>
      <h2 class="text-black"><strong>{{ city.weatherElement[3].elementValue }} °C</strong></h2>
      <h4 class="text-black">{{ city.weatherElement[20].elementValue }}</h4>
      <wicon v-bind:wvalue="city.weatherElement[20].elementValue"></wicon>
      <h5 class="text-black">{{ city.time.obsTime }}</h5>
      <span class="text-black">風速:</span> {{ city.weatherElement[2].elementValue }}
      
    </router-link>
  </div>
  <div v-else class="col-lg-4 d-grid">
    <router-link class="btn btn-lg bg-opacity-25 border border-primary-subtle rounded-3 border-5 shadow-lg p-3 mb-5 bg-body rounded" :to="{path:'/forcastweather',query:{userId: city.parameter[0].parameterValue,lat: city.lat,lon:city.lon,sname:city.locationName}}">
      <h3 class="text-black"><strong>{{ city.locationName }}</strong></h3>
      <h5 class="text-black"><strong>{{ city.parameter[0].parameterValue }} </strong></h5>
      <h2 class="text-black"><strong>{{ city.weatherElement[3].elementValue }} °C</strong></h2>
      <h4 class="text-black">{{ city.weatherElement[20].elementValue }}</h4>
      <wicon v-bind:wvalue="city.weatherElement[20].elementValue"></wicon>
      <h5 class="text-black">{{ city.time.obsTime }}</h5>
      <span class="text-black">風速:</span> {{ city.weatherElement[2].elementValue }}
      
    </router-link>
  </div>
</template>
  
<script>
export default {
  props:['city','citynum','currentblock'],
  data(){
    return {
      data:null
    }
  }
};
</script>
  
<style>

</style>