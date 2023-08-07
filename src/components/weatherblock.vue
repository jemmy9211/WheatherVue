<template>
  <div class="col-lg-4 d-grid gap-1">
    <router-link class="btn btn-lg bg-opacity-25 border border-primary-subtle rounded-3 border-5 shadow-lg p-3 mb-5 bg-body rounded" :to="{path:'/forcastweather',query:{userId: citynum}}">
      <h3 class="text-black"><strong>{{ city.locationName }}  {{ city.weatherElement[3].elementValue }}</strong></h3>
      <h4 class="text-black">{{ city.weatherElement[20].elementValue }}</h4>
      <h2 v-if="city.weatherElement[20].elementValue.includes('陰')" ><i class="bi bi-cloud-fill"></i></h2>
      <h2 v-else-if="city.weatherElement[20].elementValue.includes('雲')"><i class="bi bi-clouds-fill"></i></h2>
      <h2 v-else-if="city.weatherElement[20].elementValue.includes('晴')"><i class="bi bi-brightness-high-fill"></i></h2>
      <h2 v-else-if="city.weatherElement[20].elementValue.includes('雨')"><i class="bi bi-cloud-drizzle-fill"></i></h2>
      <h5 class="text-black">{{ city.time.obsTime }}</h5>
      <span class="text-black">風速:</span> {{ city.weatherElement[2].elementValue }}
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