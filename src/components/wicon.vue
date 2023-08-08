<script>
export default {
  props:['wvalue'],
  data(){
    return {
      data:null
    }
  }
};
</script>
<template>
<h2 v-if="wvalue.includes('雷')"><i class="bi bi-cloud-lightning-rain-fill"></i></h2>
<h2 v-else-if="wvalue.includes('雨')" ><i class="bi bi-cloud-drizzle-fill"></i></h2>
<h2 v-else-if="wvalue.includes('多雲時晴')"><i class="bi bi-cloud-sun-fill"></i></h2>
<h2 v-else-if="wvalue.includes('晴時多雲')"><i class="bi bi-cloud-sun-fill"></i></h2>
<h2 v-else-if="wvalue.includes('雲')"><i class="bi bi-clouds-fill"></i></h2>
<h2 v-else-if="wvalue.includes('晴')"><i class="bi bi-brightness-high-fill"></i></h2>
<h2 v-else-if="wvalue.includes('陰')"><i class="bi bi-cloud-fill"></i></h2>
</template>
<style>
</style>