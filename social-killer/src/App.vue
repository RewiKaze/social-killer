<template>
  <div id="app">
    <vue-page-transition style="height:100vh;" name="fade">
      <router-view/>
    </vue-page-transition>
  </div>
</template>

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
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
