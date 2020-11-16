<template>
  <div class="live-page">
    <b-container fluid class="comment-outside-border">
      <b-row class="h-100">
        <b-col cols="6" class="py-3 live-side">
          <div
            class="d-flex flex-row align-items-center justify-content-start icon"
          >
            <div class="p-2 icon-1">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 16 16"
                class="bi bi-x-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
            <div class="p-2 icon-2">
              <img src="@/assets/icon/icon4-01.png" width="100%" />
            </div>
            <div class="p-2 icon-1">
              <img src="@/assets/icon/icon5-01.png" width="100%" />
            </div>
            <div class="p-1 icon-1" style="font-size: 2.5vmin;">
              854
            </div>
          </div>
          <!-- video -->
          <div class="p-3" style="width: auto;height: 90%;">
            <div
              class="tenor-gif-embed"
              data-postid="17955335"
              data-share-method="host"
              data-width="85%"
              data-aspect-ratio="1.0"
            >
              <a
                href="https://tenor.com/view/cat-jam-dance-cute-head-shaking-gif-17955335"
                >Cat Jam GIF</a
              >
              from <a href="https://tenor.com/search/cat-gifs">Cat GIFs</a>
            </div>
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
                <div class="p-2 font-weight-bold comment-name">Warawit Rich</div>
                <div class="px-2 comment-txt">กูรู้นะ...</div>
                <div class="px-2 comment-txt">พวกมึงโฟกัสอะไร</div>
              </div>
            </b-col>
            <!-- Emoji -->
            <b-col id="emoji-1" cols="4" class="live-emoji">
              <img
                @click="addNextComment('emo-1')"
                id="emo-1"
                class="emo-hide-1"
                src="@/assets/emoji/emoji-01.png"
              />
              <img
                @click="addNextComment('emo-2')"
                id="emo-2"
                class="emo-hide-1"
                src="@/assets/emoji/emoji-02.png"
              />
              <img
                @click="addNextComment('emo-3')"
                id="emo-3"
                class="emo-hide-1"
                src="@/assets/emoji/emoji-03.png"
              />
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-2" class="p-1" style="display:none;">
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
                @click="addNextComment('emo-4')"
                id="emo-4"
                class="emo-hide-2"
                src="@/assets/emoji/emoji-01.png"
              />
              <img
                @click="addNextComment('emo-5')"
                id="emo-5"
                class="emo-hide-2"
                src="@/assets/emoji/emoji-02.png"
              />
              <img
                @click="addNextComment('emo-6')"
                id="emo-6"
                class="emo-hide-2"
                src="@/assets/emoji/emoji-03.png"
              />
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-3" class="p-1" style="display:none;">
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
                @click="addNextComment('emo-7')"
                id="emo-7"
                class="emo-hide-3"
                src="@/assets/emoji/emoji-01.png"
              />
              <img
                @click="addNextComment('emo-8')"
                id="emo-8"
                class="emo-hide-3"
                src="@/assets/emoji/emoji-02.png"
              />
              <img
                @click="addNextComment('emo-9')"
                id="emo-9"
                class="emo-hide-3"
                src="@/assets/emoji/emoji-03.png"
              />
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-4" class="p-1" style="display:none;">
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
                @click="addNextComment('emo-10')"
                id="emo-10"
                class="emo-hide-4"
                src="@/assets/emoji/emoji-01.png"
              />
              <img
                @click="addNextComment('emo-11')"
                id="emo-11"
                class="emo-hide-4"
                src="@/assets/emoji/emoji-02.png"
              />
              <img
                @click="addNextComment('emo-12')"
                id="emo-12"
                class="emo-hide-4"
                src="@/assets/emoji/emoji-03.png"
              />
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-5" class="p-1" style="display:none;">
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
                @click="addNextComment('emo-13')"
                id="emo-13"
                class="emo-hide-5"
                src="@/assets/emoji/emoji-01.png"
              />
              <img
                @click="addNextComment('emo-14')"
                id="emo-14"
                class="emo-hide-5"
                src="@/assets/emoji/emoji-02.png"
              />
              <img
                @click="addNextComment('emo-15')"
                id="emo-15"
                class="emo-hide-5"
                src="@/assets/emoji/emoji-03.png"
              />
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-6" class="p-1" style="display:none;">
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
                @click="changeToChatPage('emo-16')"
                id="emo-16"
                class="emo-hide-6"
                src="@/assets/emoji/emoji-01.png"
              />
              <img
                @click="changeToChatPage('emo-17')"
                id="emo-17"
                class="emo-hide-6"
                src="@/assets/emoji/emoji-02.png"
              />
              <img
                @click="changeToChatPage('emo-18')"
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
// import router from "@/router";
export default {
  name: "live",
  data() {
    return {
      num: 2
    }
  },
  methods: {
    addNextComment(id) {
      if (document.getElementById(id).classList.contains("clicked")){
        console.log("Clicked")
      } else {
      document.getElementById("comment-" + this.num).classList.add("comment-fade-in");
      document.getElementById(id).classList.add("clicked")
      setTimeout(() => {
        document.getElementById("comment-" + this.num).style.display = "inline-flex";
        this.num += 1;
      }, 300);

      // Show only clicked emoji
      if (document.getElementById) {
        var divid = document.getElementById(id);
        var divs = document.getElementsByClassName("emo-hide-" + (this.num - 1));

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
    changeToChatPage(id) {
      if (document.getElementById(id).classList.contains("clicked")){
        console.log("Clicked")
      } else {
      document.getElementById(id).classList.add("clicked")
      // ยังไม่เปลี่ยนหน้า

      // Show only clicked emoji
      if (document.getElementById) {
        var divid = document.getElementById(id);
        var divs = document.getElementsByClassName("emo-hide-" + (this.num - 1));

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
    }
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "https://tenor.com/embed.js");
    document.head.appendChild(recaptchaScript);
  }
};
</script>

<style>
/* Animation */
.comment-fade-in {
	animation: comment-fade-in 0.6s cubic-bezier(0.455, 0.030, 0.515, 0.955) ;
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
	animation: bounce-in-right 1.5s ease-in ;
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
</style>
