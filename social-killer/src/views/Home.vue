<template>
  <div class="home">
    <div class="website-title">SocialKiller.com</div>
    <div class="outside-border">
      <div class="inner-border">
        <div class="form-validate">
          <div class="username-field">
            <label class="text-md-right">Username</label>&nbsp;
            <input
              type="text"
              class="field"
              disabled
              :value="userTyping"
              id="username-field"
            />
          </div>
          <div class="password-field">
            <label class="text-md-right">Password</label>&nbsp;
            <input
              type="password"
              :value="passTyping"
              class="field"
              disabled
              id="password-field"
            />
          </div>
          <div class="enter-button" @click="goToComment" id="startMusic">Enter</div>
        </div>
      </div>
    </div>
    <div class="text-center chatlog text-focus-in" id="next-text" style="margin-top:75vh;font-size:0.8vw;position:absolute;margin-left:37vw;display:none;">เว็บนี้จัดทำเพื่อให้สังคมตระหนัก และเกิดการเรียนรู้เกี่ยวกับ Sexual Harrasment เท่านั้น<br>
    อาจมีการจำลองสถานการณ์ และคำพูดที่มีความรุนแรง ผู้ที่มีอาการทางจิต หรือมีอาการ <br>
    เกี่ยวกับโรคซึมเศร้าควรหลีกเลี่ยง หรือสามารถกด Skip เพื่อข้ามสถานการณ์ที่ทำให้ไม่สบายใจได้</div>
    <div class="side-text">
      <div>SOCIAL</div>
      <div style="text-align:center">KILLER</div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import router from "@/router";
export default {
  name: "Home",
  data() {
    return {
      userField: "Anonymous",
      passField: "surprise",
      textUser: 0,
      passUser: 0,
      userTyping: "",
      passTyping: ""
    };
  },
  methods: {
    goToComment() {
      router.push("/comment");
    },
    typeWrite() {
      if (this.textUser < this.userField.length) {
        this.userTyping += this.userField.charAt(this.textUser);
        this.textUser++;
        setTimeout(() => {
          this.typeWrite();
        }, 50);
      }
    },
    passWrite() {
      if (this.passUser < this.passField.length) {
        this.passTyping += this.passField.charAt(this.passUser);
        this.passUser++;
        setTimeout(() => {
          this.passWrite();
        }, 50);
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.typeWrite();
    }, 1000);
    setTimeout(() => {
      this.passWrite();
    }, 1450);
    setTimeout(() => {
      document.getElementById("next-text").style.display = "flex";
    }, 2000);
  },
  watch:{
   

  }
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
  cursor: pointer;
  transition: 1s;
}
.enter-button:hover {
  filter: brightness(5);
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

.text-focus-in {
	-webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
</style>
