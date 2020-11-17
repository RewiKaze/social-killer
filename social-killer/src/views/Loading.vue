<template>
  <div class="loading">
    <div class="container-fluid">
      <div class="row">
        <div class="col title-load">
          <h1 class="name-load">SOCIAL</h1>
          <h1 class="name-load">KILLER</h1>
        </div>
      </div>
      <div class="row detail">
        <div class="col-4 title-load">
          <p class="small-text">Chatting</p>
          <p class="small-text">Selling</p>
          <p class="small-text">News</p>
        </div>
        <div class="col-4"></div>
        <div class="col-4 title-load text-right">
          <p class="small-text">Communication</p>
          <p class="small-text">for everyone.</p>
        </div>
      </div>
    </div>
    <h3 class="text-center wait-load">Please Waiting...</h3>
  </div>
</template>

<script>
export default {
  name: "loading",
};
</script>

<style>
.loading {
  margin: 0;
  width: 100vw;
  height: 100vh;
}
.title-load {
  margin-top: 50px;
}
.name-load {
  font-size: 110px;
  color: white;
}
.detail {
  margin-top: -30px;
}
.small-text {
  color: white;
  font-size: 24px;
  line-height: 15px;
}
.wait-load {
  color: white;
  margin-top: 12%;
}
</style>