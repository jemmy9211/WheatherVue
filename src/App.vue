<script>

</script>

<template>
<body >
  <nav class="navbar p-3 text-primary-emphasis bg-light bg-opacity-75 sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand"><i class="bi bi-emoji-sunglasses-fill"></i> Wheather App using Vue</a>
      <div class="btn-group btn-group-sm border border-dark border-3">
        <router-link type="button" class="btn btn-outline-dark" to="/">回首頁</router-link>
        <router-link type="button" class="btn btn-outline-dark" to="/rader">及時雷達迴波圖</router-link>
        <button type="button" class="btn btn-outline-dark" onclick="javascript:location.href='https://jemmy9211.github.io/'">Jemmy website</button>
      </div>
    </div>
  </nav>
  <br>
  <div class="container">
    <div class="row">
        <router-view></router-view>
    </div>
  </div>
</body>
</template>

<style>
body {
 background-image: url("./assets/back.jpg");
 background-color: #cccccc;
}
</style>
