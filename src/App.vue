<script>

</script>

<template>
  <nav class="navbar bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand"><i class="bi bi-emoji-sunglasses-fill"></i> Wheather App using Vue</a>
      <div class="btn-group btn-group-sm">
        <router-link type="button" class="btn btn-dark " to="/WheatherVue">回首頁</router-link>
        <router-link type="button" class="btn btn-dark " to="/rader">及時雷達迴波圖</router-link>
        <button type="button" class="btn btn-dark " onclick="javascript:location.href='https://jemmy9211.github.io/'">Jemmy website</button>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<style>

</style>
