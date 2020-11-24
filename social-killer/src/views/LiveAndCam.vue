<template>
  <div class="live-camera-page">
    <b-container fluid class="comment-outside-border">
      <b-row class="h-100">
        <b-col cols="8" class="py-3 caemera-side">
          <div
            class="d-flex flex-row align-items-center justify-content-start icon" style="color:white;"
          >
            <div class="p-2 icon-1" style="z-index:10;">
              <svg
                width="70%"
                height="70%"
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
            <div class="p-2 icon-2" style="z-index:10;">
              <img src="@/assets/icon/icon4-01.png" width="70%" />
            </div>
            <div class="p-2 icon-1" style="z-index:10;">
              <img src="@/assets/icon/icon5-01.png" width="70%" />
            </div>
            <div class="p-1 icon-1" style="font-size: 2.5vmin;z-index:10;">1013</div>
          </div>
          <video autoplay="true" id="videoElement"></video>
        </b-col>
        <b-col cols="4" class="comment-live border-left border-light py-3" style="color:white;">
          <!-- Skip -->
          <div
            class="skip-comment skip-blink"
            id="skip-comment"
            @click="skipComment()"
            style="display: none;"
          >
            Skip
          </div>
          <!-- End Skip -->
        <!-- !!! One person comemnt !!! -->
          <b-row id="comment-1" class="p-2 slide-top">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">Warawit Rich</div>
                <div class="px-2 comment-txt">มาใกล้ๆหน่อยสิจ้ะ</div>
                <div class="px-2 comment-txt">ห อ ม มากกกกก</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-2" class="p-2 slide-top" style="display:none;">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Somsak Kumkom
                </div>
                <div class="px-2 comment-txt">เข้ามาใกล้กว่านี้อีก</div>
                <div class="px-2 comment-txt">อยากเห็นชัดๆ</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-3" class="p-2 slide-top" style="display:none;">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Teerapong Mindee
                </div>
                <div class="px-2 comment-txt">คือดืออออออ เป็นลูกๆ</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-4" class="p-2 slide-top" style="display:none;">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Saksit Kobkhun
                </div>
                <div class="px-2 comment-txt">โอ้ววววว ว้าวววๆๆๆ วี๊วววว</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-5" class="p-2 slide-top" style="display:none;">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Saksit Kobkhun
                </div>
                <div class="px-2 comment-txt">ก้มหน่อยค้าบบบ</div>
                <div class="px-2 comment-txt">อยากเห็นนม เอ้ย สินค้าค้าบ</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-6" class="p-2 slide-top" style="display:none;">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Teerapong Mindee
                </div>
                <div class="px-2 comment-txt">ชุดนี้คือดือมากเลยครับ</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-7" class="p-2 slide-top" style="display:none;">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Somsak Kumkom
                </div>
                <div class="px-2 comment-txt">มีเงินจ่ายค่าเทอมยังจ้ะ</div>
                <div class="px-2 comment-txt">การเงินมีปัญหา ใส่ชุดนี้มาหาพี่ได้</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-8" class="p-2 slide-top" style="display:none;">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Teerapong Mindee
                </div>
                <div class="px-2 comment-txt">คืนนี้เท่าไหร่อะค้าบบบ</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-9" class="p-2 slide-top" style="display:none;">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Teerapong Mindee
                </div>
                <div class="px-2 comment-txt">ห อ ม ครับอยากดมอีก</div>
                <div class="px-2 comment-txt">ได้ซักทีจะตั้งใจเรียน</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-10" class="p-2 slide-top" style="display:none;">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">Warawit Rich</div>
                <div class="px-2 comment-txt">เห็นงานเป็นลม</div>
                <div class="px-2 comment-txt"> อยากเห็นนมจังเลยค้าบ!!!!</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-11" class="p-2 slide-top" style="display:none;">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Saksit Kobkhun
                </div>
                <div class="px-2 comment-txt">ห อ ม จริงๆด้วย</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-12" class="p-2 slide-top" style="display:none;">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Teerapong Mindee
                </div>
                <div class="px-2 comment-txt">แอ่นหน่อยสิ อยากขายของไหมแม่ค้า</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-13" class="p-2 slide-top" style="display:none;">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Somsak Kumkom
                </div>
                <div class="px-2 comment-txt">มองไม่เห็น แอ่นอีกโว้ยยย</div>
                <div class="px-2 comment-txt">กูบอกให้แอ่น มึงจะขายไหม</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
          <!-- !!! One person comemnt !!! -->
          <b-row id="comment-14" class="p-2 slide-top" style="display:none;">
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
            <b-col cols="9">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-name">
                  Somsak Kumkom
                </div>
                <div class="px-2 comment-txt">กลัวอะไรค้าบบบ</div>
                <div class="px-2 comment-txt">ทำหน้าที่แม่ค้าหน่อย</div>
              </div>
            </b-col>
          </b-row>
          <!-- !!! End Comment !!! -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.icon {
  height: 10%;
}
.icon-1 {
  width: 10%;
}
.icon-2 {
  width: 20%;
}
.comment-outside-border {
  border: white solid 0.5px;
  width: 90%;
  height: 90%;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.camera-side {
  height: 100%;
}

.comment-live {
  height: 100%;
  
}

video {
  border-radius: 3em;
  height: 100vw;
  width: 96%;
  position: absolute;
  top: 50%;
  transform : translate(0,-50%);
  
}

.skip-comment {
  z-index: 10;
  position: absolute;
  width: auto;
  top: 0;
  right: 2%;
  color: white;
  font-family: 'Inconsolata';
  font-size: 2vw;
  cursor:pointer;
}

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

.slide-top {
	-webkit-animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2020-11-22 13:3:0
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-top
 * ----------------------------------------
 */
@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }
}

.skip-blink {
	animation: skip-blink 4s ease-in infinite ;
}

@keyframes skip-blink {
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

</style>

<script>

var popChat = new Audio(require('@/assets/music/pop-chat.mp3'))
var commentTime;
var one
var two
var three
var four
var five
var six
var seven
var eight
var nine
var ten
var eleven
var twelve
var thirteen
var fourteen
import router from "@/router";
export default {
  name: "livecam",
  methods: {
    skipComment() {
      router.push('/conclude')
      clearTimeout(commentTime)
      clearTimeout(one)
      clearTimeout(two)
      clearTimeout(three)
      clearTimeout(four)
      clearTimeout(five)
      clearTimeout(six)
      clearTimeout(seven)
      clearTimeout(eight)
      clearTimeout(nine)
      clearTimeout(ten)
      clearTimeout(eleven)
      clearTimeout(twelve)
      clearTimeout(thirteen)
      clearTimeout(fourteen)

			console.log("cleared timeout")
    },
    autoToConclude() {
      commentTime = setTimeout(() => {
        router.push("/conclude")
      }, 55000);
    },
    runthispage(){
          const video = document.getElementById("videoElement");


    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
        })
        .catch((err0r) => {
          console.log(err0r + "Something went wrong!");
        });
    }
    one = setTimeout(() => {
      popChat.play()
      document.getElementById("comment-2").style.display = "flex";
    }, 4000);
    two = setTimeout(() => {
      popChat.play()
      document.getElementById("comment-3").style.display = "flex";
    }, 8000);
    three = setTimeout(() => {
      popChat.play()
      document.getElementById("skip-comment").style.display = "block";
    }, 9000);
    four = setTimeout(() => {
      popChat.play()
      document.getElementById("comment-4").style.display = "flex";
    }, 12000);
    five = setTimeout(() => {
      popChat.play()
      document.getElementById("comment-5").style.display = "flex";
    }, 16000);
    six = setTimeout(() => {
      popChat.play()
      document.getElementById("comment-6").style.display = "flex";
    }, 20000);
    seven = setTimeout(() => {
      popChat.play()
      document.getElementById("comment-7").style.display = "flex";
      document.getElementById("comment-1").style.display = "none";
    }, 24000);
    eight = setTimeout(() => {
      popChat.play()
      document.getElementById("comment-8").style.display = "flex";
      document.getElementById("comment-2").style.display = "none";
    }, 28000);
    nine = setTimeout(() => {
      popChat.play()
      document.getElementById("comment-9").style.display = "flex";
      document.getElementById("comment-3").style.display = "none";
    }, 32000);
    ten = setTimeout(() => {
      popChat.play()
      document.getElementById("comment-10").style.display = "flex";
      document.getElementById("comment-4").style.display = "none";
    }, 36000);
    eleven = setTimeout(() => {
      popChat.play()
      document.getElementById("comment-11").style.display = "flex";
      document.getElementById("comment-5").style.display = "none";
    }, 40000);
    twelve = setTimeout(() => {
      popChat.play()
      document.getElementById("comment-12").style.display = "flex";
      document.getElementById("comment-6").style.display = "none";
    }, 44000);
    thirteen = setTimeout(() => {
      popChat.play()
      document.getElementById("comment-13").style.display = "flex";
      document.getElementById("comment-7").style.display = "none";
    }, 48000);
    fourteen = setTimeout(() => {
      popChat.play()
      document.getElementById("comment-14").style.display = "flex";
      document.getElementById("comment-8").style.display = "none";
    }, 52000);
    this.autoToConclude();
    }
  },
  mounted(){
    this.runthispage()
  }
};



</script>