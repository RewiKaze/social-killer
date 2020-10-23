<template>
  <div class="home">
    <div class="website-title">SocialKiller.com</div>
    <div class="outside-border">
      <div class="inner-border">
        <div class="form-validate">
          <div class="username-field">
            <label class="text-md-right">Username</label>&nbsp;
            <input type="text" class="field" disabled value="Anonymous" />
          </div>
          <div class="password-field">
            <label class="text-md-right">Password</label>&nbsp;
            <input type="password" class="field" disabled value="surprise" />
          </div>
          <div class="enter-button">Enter</div>
        </div>
      </div>
    </div>
    <div class="side-text">
      <div>SOCIAL</div>
      <div style="text-align:center">KILLER</div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
<style>
.website-title {
  font-family: "Inconsolata-Expanded-Bold", "Inconsolata", monospace;
  /* font-weight: bold; */
}
.home {
  width: 100vw;
  height: 100vh;
  color: white;
}
.website-title {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
}
.outside-border {
  border: white solid 0.5px;
  width: 60%;
  height: 45%;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.inner-border {
  font-family: "Inconsolata", monospace;
  font-size: 26px;
  border: white solid 0.5px;
  width: 95%;
  height: 90%;
  position: relative;
  left: 2.5%;
  top: 5%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.field {
  border: white 1px solid;
  background-color: transparent !important;
  display: inline-block;
  width: 50%;
  height: 100%;
  color: white;
}
.form-validate {
  width: 75%;
  height: 75%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.enter-button {
  background-color: #73000c;
  text-align: center;
  width: 35%;
  margin: auto;
  margin-top: 0.5em;
}
.username-field {
  height: 15%;
  margin-bottom: 1em;
  line-height: 100%;
  text-align: center;
  vertical-align: middle;
}
.password-field {
  height: 15%;
  margin-bottom: 2em;
  line-height: 100%;
  text-align: center;
  vertical-align: middle;
}
.side-text {
  padding-top: 10%;
  font-family: "Chivo", sans-serif;
  font-size: 6em;
  height: 100%;
  position: absolute;
  right: 1%;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  line-height: 1em;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;
}
</style>
