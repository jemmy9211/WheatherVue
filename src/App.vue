<script>
export default {
  data() {
    return {
      message: 'Wheather App using Vue'
    };
  }
};
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand"><i class="bi bi-emoji-sunglasses-fill"></i>{{ message }}</a>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <weather-block/>
  <weather-block/>
</template>

<style>

</style>
