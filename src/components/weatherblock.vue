<template>
  <div class="col-lg-4 d-grid gap-1">
    <router-link class="btn btn-lg bg-primary-subtle border border-primary-subtle rounded-3 border-5 shadow-lg p-3 mb-5 bg-body rounded" :to="{path:'/forcastweather',query:{userId: citynum}}">
      <h3 class=""><strong>{{ city.locationName }}  {{ city.weatherElement[3].elementValue }}</strong></h3>
      {{ city.weatherElement[20].elementValue }}
      <h5>{{ city.time.obsTime }}</h5>
      <span class="">濕度:</span> {{ city.weatherElement[2].elementValue }}
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