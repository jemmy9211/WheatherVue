<template>
  <nav class="navbar p-3 text-primary-emphasis bg-light bg-opacity-75 sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><h5><i class="bi bi-umbrella-fill"></i> Weather App using Vue</h5></router-link>
      <div class="btn-group btn-group-sm border border-dark border-3">
        <router-link type="button" class="btn btn-outline-dark" to="/rader">及時雷達回波圖</router-link>
        <router-link type="button" class="btn btn-outline-dark" to="/wmap">全台氣象站位置圖</router-link>
        <button type="button" class="btn btn-outline-dark" onclick="javascript:location.href='https://jemmy9211.github.io/'">Jemmy website</button>
      </div>
    </div>
  </nav>
  <div class="container">
      <h5><span class="badge bg-success">雷達整合回波圖-臺灣</span></h5>
      <img src="https://cwbopendata.s3.ap-northeast-1.amazonaws.com/MSC/O-A0058-003.png" class="img-thumbnail" alt="Cinque Terre">
  </div>
</template>
<script>
</script>
<style>
</style>