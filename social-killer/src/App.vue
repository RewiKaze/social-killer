<template>
  <div id="app" style="overflow: hidden">
    <vue-page-transition style="height: 100vh" name="fade">
      <router-view />
    </vue-page-transition>
    <div style="position:absolute; left:50%;bottom:0; transform: translate(-50%,0); color:white;font-family:'Chivo-Light'; font-size:0.7vw">
    	Copyright © Social-Killer 2020 <a style="color:#73000C;" href="https://github.com/RewiKaze/social-killer">Github</a>
          
    </div>  
  </div>
</template>
<script>
var audio1 = new Audio(require("@/assets/music/Amnesia page1-7(1).mp3"));
var audio2 = new Audio(require("@/assets/music/Necromorph.mp3"));
var audio3 = new Audio(require("@/assets/music/ending.mp3"));
export default {
  name: "AppMain",
  watch: {
    $route(to, from) {
      console.log(from, to, from.name == "Home", to.name == "Comment");
      if (from.name == "Home" && to.name == "Comment") {
        audio1.play();
      } else if (from.name == "Chat" && to.name == "Warning") {
        audio1.pause();
        audio2.play();
      } else if (to.name == "Conclude") {
        audio2.pause();
        audio3.play();
      } else if (to.name == "Home") {
        audio3.pause();
      }
    },
  },
};
</script>
<style>
@font-face {
  font-family: "Chivo-Light";
  src: url("assets/fonts/Chivo-Light.ttf") format("truetype");
}
@font-face {
  font-family: "Inconsolata-Expanded-Bold";
  src: url("assets/fonts/InconsolataExpanded-Bold.ttf") format("truetype");
}
@font-face {
  font-family: "ChulaCharas";
  src: url("assets/fonts/ChulaCharasNewReg.ttf") format("truetype");
}
@font-face {
  font-family: "ChulaCharasBold";
  src: url("assets/fonts/ChulaCharasNewBold.ttf") format("truetype");
}
body {
  margin: 0;
  background-image: url("assets/background.png");
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden; /* Hide scrollbars */
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
