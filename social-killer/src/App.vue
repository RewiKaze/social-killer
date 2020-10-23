<template>
  <div id="app">
    <router-view />
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
body {
  margin: 0;
  background-image: url("assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
