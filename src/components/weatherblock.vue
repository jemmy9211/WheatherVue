<template>
  <div class="col-lg-4 d-grid">
    <router-link class="btn btn-lg bg-opacity-25 border border-primary-subtle rounded-3 border-5 shadow-lg p-3 mb-5 bg-body rounded" :to="{path:'/forcastweather',query:{userId: city.StationName,lat: city.GeoInfo.Coordinates[0].StationLatitude,lon:city.GeoInfo.Coordinates[0].StationLongitude,sname:city.StationName}}">
      <h3 class="text-black"><strong>{{ city.StationName }}</strong></h3>
      <h5 class="text-black"><strong>{{ city.GeoInfo.CountyName }} </strong></h5>
      <h2 class="text-black"><strong>{{ city.WeatherElement.AirTemperature }} °C</strong></h2>
      <h4 class="text-black">{{ city.WeatherElement.Weather }}</h4>
      <wicon v-bind:wvalue="city.WeatherElement.Weather"></wicon>
      <h5 class="text-black">{{ city.ObsTime.DateTime }}</h5>
      <span class="text-black">風速:</span> {{ city.WeatherElement.WindSpeed }}
      
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