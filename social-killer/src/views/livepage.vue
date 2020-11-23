<template>
  <div class="live-page">
    <!-- notification pop-up -->
    <div class="noti slide-bottom" style="display:none;" id="noti-down">
      <b-row class="head-noti p-2">
        <b-col cols="3" class="head-noti-line">Linne</b-col>
        <b-col cols="9" class="mb-0 chat-text text-right" style="color:black !important;float:right">Now</b-col>
      </b-row>
      <b-row class="info-noti p-0" style="color:black !important">
        <b-col cols="3">
          <img
              class="img-profile"
              src="@/assets/profile/profile6-01.png"
              width="150vw"
            />
        </b-col>
        <b-col cols="9" class="d-flex align-items-stretch" style="color:black !important">
          <div class="chat-body">
                <div class="header">
                  <strong class="primary-font">Kitty</strong>
                </div>
                <p class="mb-0 chat-text" id="friend-chat2">
                  มึง
                </p>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="arrowCM">
          <label class="text-E">โปรดแสดงความรู้สึกต่อคอมเมนต์นี้</label>
          <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-arrow-right"
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z"/>
          </svg>
    </div>
    <b-container fluid class="comment-outside-border">
      <b-row class="h-100">
        <b-col cols="6" class="py-3 live-side">
          <!-- video -->
          <div class="p-3" style="width: auto; height: 90%">
            <video autoplay>
            <source id="video-live" :src="require('@/assets/video/liveVDO.mp4')" type="video/mp4">
          </video>
          </div>
        </b-col>
        <b-col cols="6" class="comment-live border-left border-light py-3">
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-1" class="p-1">
            <!-- proflie -->
            <b-col cols="3">
              <div class="rounded-circle">
                <img
                  src="@/assets/profile/profile1-01.png"
                  alt=""
                  width="100%"
                />
              </div>
            </b-col>
            <!-- comment -->
            <b-col cols="5">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Warawit Rich
                </div>
                <div class="px-2 comment-txt">กูรู้นะ...</div>
                <div class="px-2 comment-txt">พวกมึงโฟกัสอะไร</div>
              </div>
            </b-col>
            <!-- Emoji -->
            <b-col id="emoji-1" cols="4" class="live-emoji">
              <img
                @click="addNextComment('emo-1',5)"
                id="emo-1"
                class="emo-hide-1"
                src="@/assets/emoji/emoji-01.png"
              />
              <img
                @click="addNextComment('emo-2',0)"
                id="emo-2"
                class="emo-hide-1"
                src="@/assets/emoji/emoji-02.png"
              />
              <img
                @click="addNextComment('emo-3',3)"
                id="emo-3"
                class="emo-hide-1"
                src="@/assets/emoji/emoji-03.png"
              />
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-2" class="p-1" style="display: none">
            <!-- proflie -->
            <b-col cols="3">
              <div class="rounded-circle">
                <img
                  src="@/assets/profile/profile4-01.png"
                  alt=""
                  width="100%"
                />
              </div>
            </b-col>
            <!-- comment -->
            <b-col cols="5">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Somsak Kumkom
                </div>
                <div class="px-2 comment-txt">เข้ามาใกล้หน่อย</div>
                <div class="px-2 comment-txt">อยากเห็นชัดๆ</div>
              </div>
            </b-col>
            <!-- Emoji -->
            <b-col id="emoji-2" cols="4" class="live-emoji">
              <img
                @click="addNextComment('emo-4',5)"
                id="emo-4"
                class="emo-hide-2"
                src="@/assets/emoji/emoji-01.png"
              />
              <img
                @click="addNextComment('emo-5',0)"
                id="emo-5"
                class="emo-hide-2"
                src="@/assets/emoji/emoji-02.png"
              />
              <img
                @click="addNextComment('emo-6',3)"
                id="emo-6"
                class="emo-hide-2"
                src="@/assets/emoji/emoji-03.png"
              />
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-3" class="p-1" style="display: none">
            <!-- proflie -->
            <b-col cols="3">
              <div class="rounded-circle">
                <img
                  src="@/assets/profile/profile2-01.png"
                  alt=""
                  width="100%"
                />
              </div>
            </b-col>
            <!-- comment -->
            <b-col cols="5">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Teerapong Mindee
                </div>
                <div class="px-2 comment-txt">แม่ค้าคือดืออออออ</div>
              </div>
            </b-col>
            <!-- Emoji -->
            <b-col id="emoji-3" cols="4" class="live-emoji">
              <img
                @click="addNextComment('emo-7',5)"
                id="emo-7"
                class="emo-hide-3"
                src="@/assets/emoji/emoji-01.png"
              />
              <img
                @click="addNextComment('emo-8',0)"
                id="emo-8"
                class="emo-hide-3"
                src="@/assets/emoji/emoji-02.png"
              />
              <img
                @click="addNextComment('emo-9',3)"
                id="emo-9"
                class="emo-hide-3"
                src="@/assets/emoji/emoji-03.png"
              />
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-4" class="p-1" style="display: none">
            <!-- proflie -->
            <b-col cols="3">
              <div class="rounded-circle">
                <img
                  src="@/assets/profile/profile3-01.png"
                  alt=""
                  width="100%"
                />
              </div>
            </b-col>
            <!-- comment -->
            <b-col cols="5">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Saksit Kobkhun
                </div>
                <div class="px-2 comment-txt">โอ้ววววว ว้าวววๆๆๆ</div>
              </div>
            </b-col>
            <!-- Emoji -->
            <b-col id="emoji-4" cols="4" class="live-emoji">
              <img
                @click="addNextComment('emo-10',5)"
                id="emo-10"
                class="emo-hide-4"
                src="@/assets/emoji/emoji-01.png"
              />
              <img
                @click="addNextComment('emo-11',0)"
                id="emo-11"
                class="emo-hide-4"
                src="@/assets/emoji/emoji-02.png"
              />
              <img
                @click="addNextComment('emo-12',3)"
                id="emo-12"
                class="emo-hide-4"
                src="@/assets/emoji/emoji-03.png"
              />
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-5" class="p-1" style="display: none">
            <!-- proflie -->
            <b-col cols="3">
              <div class="rounded-circle">
                <img
                  src="@/assets/profile/profile3-01.png"
                  alt=""
                  width="100%"
                />
              </div>
            </b-col>
            <!-- comment -->
            <b-col cols="5">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Saksit Kobkhun
                </div>
                <div class="px-2 comment-txt">แม่ค้าน่ารักจัง</div>
                <div class="px-2 comment-txt">ดูแต่แม่ค้าค้าบ</div>
              </div>
            </b-col>
            <!-- Emoji -->
            <b-col id="emoji-5" cols="4" class="live-emoji">
              <img
                @click="addNextComment('emo-13',5)"
                id="emo-13"
                class="emo-hide-5"
                src="@/assets/emoji/emoji-01.png"
              />
              <img
                @click="addNextComment('emo-14',0)"
                id="emo-14"
                class="emo-hide-5"
                src="@/assets/emoji/emoji-02.png"
              />
              <img
                @click="addNextComment('emo-15',3)"
                id="emo-15"
                class="emo-hide-5"
                src="@/assets/emoji/emoji-03.png"
              />
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-6" class="p-1" style="display: none">
            <!-- proflie -->
            <b-col cols="3">
              <div class="rounded-circle">
                <img
                  src="@/assets/profile/profile2-01.png"
                  alt=""
                  width="100%"
                />
              </div>
            </b-col>
            <!-- comment -->
            <b-col cols="5">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Teerapong Mindee
                </div>
                <div class="px-2 comment-txt">ชุดนี้คือดือมากเลยครับ</div>
              </div>
            </b-col>
            <!-- Emoji -->
            <b-col id="emoji-6" cols="4" class="live-emoji">
              <img
                @click="NotiPopup('emo-16',5)"
                id="emo-16"
                class="emo-hide-6"
                src="@/assets/emoji/emoji-01.png"
              />
              <img
                @click="NotiPopup('emo-17',0)"
                id="emo-17"
                class="emo-hide-6"
                src="@/assets/emoji/emoji-02.png"
              />
              <img
                @click="NotiPopup('emo-18',3)"
                id="emo-18"
                class="emo-hide-6"
                src="@/assets/emoji/emoji-03.png"
              />
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import router from "@/router";
// import router from "@/router";
export default {
  name: "live",
  data() {
    return {
      num: 2,
      scoreLivePage:0
    };
  },
  methods: {
    addNextComment(id, score) {
      if (document.getElementById(id).classList.contains("clicked")) {
        console.log("Clicked");
      } else {
        this.scoreLivePage += score;
        document
          .getElementById("comment-" + this.num)
          .classList.add("comment-fade-in");
        document.getElementById(id).classList.add("clicked");
        setTimeout(() => {
          document.getElementById("comment-" + this.num).style.display =
            "inline-flex";
          this.num += 1;
        }, 300);

        // Show only clicked emoji
        if (document.getElementById) {
          var divid = document.getElementById(id);
          var divs = document.getElementsByClassName(
            "emo-hide-" + (this.num - 1)
          );

          for (var i = 0; i < divs.length; i++) {
            divs[i].style.display = "none";
          }
          divid.classList.add("bounce-in-right");
          setTimeout(() => {
            divid.style.display = "flex";
          }, 300);
        }
        return false;
      }
    },
    changeToChatPage(id,score) {
      if (document.getElementById(id).classList.contains("clicked")) {
        console.log("Clicked");
      } else {
        this.scoreLivePage += score;
        document.getElementById(id).classList.add("clicked");
        // ยังไม่เปลี่ยนหน้า
        // Show only clicked emoji
        if (document.getElementById) {
          var divid = document.getElementById(id);
          var divs = document.getElementsByClassName(
            "emo-hide-" + (this.num - 1)
          );

          for (var i = 0; i < divs.length; i++) {
            divs[i].style.display = "none";
          }
          divid.classList.add("bounce-in-right");
          setTimeout(() => {
            divid.style.display = "flex";
          }, 300);
          // change to chat
          setTimeout(() => {
            sessionStorage.setItem('livePageScore',this.scoreLivePage);
            router.push("/chat");
          }, 2000);
        }
        return false;
      }
    },
    NotiPopup(id,score){
      document.getElementById("noti-down").style.display = "flex";
      document.getElementById("video-live").src = "@/assets/video/endlive.mp4";

      if (document.getElementById) {
          var divid = document.getElementById(id);
          var divs = document.getElementsByClassName(
            "emo-hide-" + (this.num - 1)
          );

          for (var i = 0; i < divs.length; i++) {
            divs[i].style.display = "none";
          }
          divid.classList.add("bounce-in-right");
          setTimeout(() => {
            divid.style.display = "flex";
          }, 300);
      }
    },
  },
  mounted() {
    sessionStorage.setItem('livePageScore',0)
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "https://tenor.com/embed.js");
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style>
.noti{
  width: 70%;
  height: 22%;
  position: absolute;
  left: 25%;
  top: 12%;
  z-index: 10;
  transform: translate(-12%, -50%);
  background-color: #bbbbb9;
  border-radius: 1.5em;
}
.head-noti-line{
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;
  color: transparent;
  font-size: 2.5em;
}
.slide-bottom{
  -webkit-animation:slide-bottom .5s cubic-bezier(.25,.46,.45,.94) both;
  animation:slide-bottom .5s cubic-bezier(.25,.46,.45,.94) both
}
/* ----------------------------------------------
 * Generated by Animista on 2020-11-23 19:58:12
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

@-webkit-keyframes slide-bottom{
  0% {
    -webkit-transform:translateY(-10px);
    transform:translateY(-10px)
    }
  100% {
    -webkit-transform:translateY(0);
    transform:translateY(0)
  }
}
@keyframes slide-bottom{
  0% {
    -webkit-transform:translateY(-10px);
    transform:translateY(-10px)
    }
  100% {
    -webkit-transform:translateY(0);
    transform:translateY(0)
  }
}

/* Animation */
.comment-fade-in {
  animation: comment-fade-in 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
@keyframes comment-fade-in {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.bounce-in-right {
  animation: bounce-in-right 1.5s ease-in;
}
@keyframes bounce-in-right {
  0% {
    transform: translateX(100px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateX(30px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateX(21px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateX(5px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
}

/* End Animation */
.live-page {
  width: 100vw;
  height: 100vh;
  color: white;
  overflow: hidden;
}
.comment-outside-border {
  min-width: 500px;
  border: white solid 0.5px;
  width: 75%;
  height: 85%;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.live-side {
  height: 100%;
}
.icon {
  height: 10%;
}
.icon-1 {
  width: 10%;
}
.icon-2 {
  width: 20%;
}
.comment-live {
  height: 100%;
}
.comment-name {
  font-family: "ChulaCharasBold";
  font-size: 2.5vmin;
}
.comment-txt {
  font-family: "ChulaCharas";
  font-size: 2.5vmin;
}
.live-emoji > img {
  transition: 0.1s;
  cursor: pointer;
  width: 25%;
}
.live-emoji > img:hover {
  transform: scale(1.5);
}
.live-emoji {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.arrowCM {
        /* width: 100vh; */
        -webkit-animation: 3s soft-blink infinite alternate;
        animation: 3s soft-blink infinite alternate;
        position: absolute;
        opacity: 0;
        padding-left: 88%;
        margin-top: -2%;
    }

    @-webkit-keyframes soft-blink {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 0.8;
        }
    }

    @keyframes soft-blink {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 0.8;
        }
    }

    .arrowCM:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20px;
        height: 20px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .text-E {
  margin-top: 40px;
  font-family: "ChulaCharas";
  font-size: 0.8vw;
}
</style>
