<template>
  <div class="loading">
    <div class="container-fluid">
      <div class="row">
        <div class="col title-load text-chivo">
          <h1 class="name-load">SOCIAL</h1>
          <h1 class="name-load">KILLER</h1>
        </div>
      </div>
      <div class="row detail">
        <div class="col-4 title-load text-incon-bold">
          <p class="small-text">Chatting</p>
          <p class="small-text">Selling</p>
          <p class="small-text">News</p>
        </div>
        <div class="col-4"></div>
        <div class="col-4 title-load text-right text-incon-bold">
          <p class="small-text">Communication</p>
          <p class="small-text">for everyone.</p>
        </div>
      </div>
    </div>
    <h3 class="text-center wait-load text-incon-boldest blink-1">Please Waiting...</h3>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: "loading",
  mounted(){
    setTimeout(()=>{
      router.push('/home')
    },5000)
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap');
.blink-1 {
	animation: blink-1 5s both;
}
@keyframes blink-1 {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
.text-chivo{
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;
  font-family: 'Chivo';
  
}
h1{
  line-height: 0.8 !important;
}
.text-incon-bold{
  font-family: 'Inconsolata';

}
.text-incon-boldest{
  font-family: 'Inconsolata-Expanded-Bold'
}
.loading {
  padding:5vw;
  margin: 0;
  width: 100vw;
  height: 100vh;
}
.title-load {
  margin-top: 50px;
}
.name-load {
  font-size: 8vw;
  color: white;
}
.detail {
  margin-top: -30px;
}
.small-text {
  color: white;
  font-size: 1.25vw;
  line-height: 15px;
}
.wait-load {
  color: white;
  /* margin-top: 12%; */
  position:absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%,0);
}
</style>