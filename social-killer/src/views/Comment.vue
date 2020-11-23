<template>
  <div class="comment-page">
    <div class="comment-outside-border">
      <div class="header-comment">
        <label class="title">Social Killer</label>
        <input type="text" class="search-field" disabled />
        <!-- <img src="@/assets/icon/icon1-01.png" width="10%" /> -->
        <hr />
      </div>
      <div class="first-comment" id="first-comment">
        <div class="comment-content">
          <b-row>
            <b-col>
              <div class="user">
                <img
                  class="img-profile"
                  src="@/assets/profile/profile5-01.png"
                  width="15%"
                />
                <div class="user-name">
                  <div class="name">แอดมินซ่า คอนเทนต์แซ่บ</div>
                  <div class="timestamp">20 ตุลาคม เวลา 15.30 น.</div>
                </div>
                <div class="option">...</div>
              </div>
              <div class="comment">
                <div class="comment-text" style="margin-left:10%">
                  หนุ่ม ๆ ดูมันดิ “ขอบีบนมสาว” กลางสยาม ฮาลั่น!!
                </div>
                <div class="d-flex justify-content-center">
                  <img
                    src="@/assets/comment/first-comment/web-3.png"
                    width="80%"
                    height="50%"
                  />
                </div>
              </div>
              <div class="emote">
                <img
                  @click="changeCommentOneToTwo(5)"
                  src="@/assets/emoji/emoji-01.png"
                  width="70vw"
                />
                <img
                  @click="changeCommentOneToTwo(0)"
                  src="@/assets/emoji/emoji-02.png"
                  width="70vw"
                />
                <img
                  @click="changeCommentOneToTwo(3)"
                  src="@/assets/emoji/emoji-03.png"
                  width="70vw"
                />
                <br />
                <label class="text-emote">โปรดแสดงความรู้สึกต่อโพสต์นี้</label>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="d-flex flex-column justify-content-around align-items-center side-comment">
          <img
            class="side-img"
            src="@/assets/comment/first-comment/01.png"
            width="60%"
          />
          <img
            class="side-img"
            src="@/assets/comment/first-comment/02.png"
            width="60%"
          />
          <img
            class="side-img"
            src="@/assets/comment/first-comment/03.png"
            width="60%"
          />
        </div>
      </div>
      <div class="second-comment" id="second-comment" style="display: none">
        <div class="comment-content">
          <div class="user">
            <img
              class="img-profile"
              src="@/assets/profile/profile2-01.png"
               width="150vw"
            />
            <div class="user-name">
              <div class="name">Teerapong Mindee</div>
              <div class="timestamp">23 ตุลาคม เวลา 20.56 น.</div>
            </div>
            <div class="option">...</div>
          </div>
          <div class="comment">
            <div class="second-comment-text">
              ชอบชุดน้องส้มวันนี้จังเลย<br />
              แต่ชอบแบบไม่ใส่อะไรเลยมากกว่า
            </div>
          </div>
          <div class="like-section">
            <div class="like" style="height: auto">
              <div class="like-status">
                <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up> {{ numLike }}
              </div>
              <div class="comment-share">ความคิดเห็น 5 รายการ แชร์ 1 ครั้ง</div>
            </div>
            <br />
            <hr />
          </div>
          <div class="emote">
            <img
              @click="changeCommentTwoToThree(5)"
              src="@/assets/emoji/emoji-01.png"
              width="70vw"
            />
            <img
              @click="changeCommentTwoToThree(0)"
              src="@/assets/emoji/emoji-02.png"
              width="70vw"
            />
            <img
              @click="changeCommentTwoToThree(3)"
              src="@/assets/emoji/emoji-03.png"
              width="70vw"
            />
            <br />
            <label class="text-emote">โปรดแสดงความรู้สึกต่อโพสต์นี้</label>
          </div>
        </div>
        <div class="d-flex flex-column justify-content-around align-items-center side-comment">
          <img
            class="side-img"
            src="@/assets/comment/second-comment/01.png"
            width="60%"
          />
          <img
            class="side-img"
            src="@/assets/comment/second-comment/02.png"
            width="60%"
          />
          <img
            class="side-img"
            src="@/assets/comment/second-comment/03.png"
            width="60%"
          />
        </div>
      </div>
      <div class="third-comment" id="third-comment" style="display: none">
        <div class="comment-content">
          <div class="user">
            <img
              class="img-profile"
              src="@/assets/profile/profile6-01.png"
              width="150vw"
            />
            <div class="user-name">
              <div class="name">Kitty</div>
              <div class="timestamp">เมื่อวานนี้ เวลา 09.42 น.</div>
            </div>
            <div class="option">...</div>
          </div>
          <div class="comment">
            <!-- <div class="second-comment-text"> -->
            <div style="font-size: 1.3em; text-align: center; margin: 4.5em">
              ทำไมประเทศนี้ผ้าอนามัยแพงจังวะ...เมื่อไหร่รัฐบาลจะรู้ว่ามันจำเป็น
              ผู้หญิงทุกคนต้องใช้
            </div>
          </div>
          <div class="like-section">
            <div class="like" style="height: auto">
              <div class="like-status">
                <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up> 109
                <!-- like number -->
              </div>
              <div class="comment-share">
                ความคิดเห็น 1100 รายการ แชร์ 73 ครั้ง
              </div>
            </div>
            <br />
            <hr />
          </div>
          <div class="other-comment" style="display: inline-block">
            <img
              src="@/assets/profile/profile5-01.png"
              width="15%"
              style="margin-top: 1em"
            />
            <div
              class="other-comment-box"
              style="
                display: inline-flex;
                height: 90%;
                border: white solid 0.5px;
                padding: 10px;
                border-radius: 10px;
              "
            >
              <div style="font-family:'ChulaCharas'; font-size:1vw">
                <div style="font-weight: bold;">Somsak Kumkom</div>อยากเมนส์ไม่มาสัก 9 เดือนป่าวน้อง
                เดี๋ยวพี่ช่วย
              </div>
            </div>
          </div>
          <div class="emote">
            <img
              @click="changeCommentThreeToFour(5)"
              src="@/assets/emoji/emoji-01.png"
              width="70vw"
            />
            <img
              @click="changeCommentThreeToFour(0)"
              src="@/assets/emoji/emoji-02.png"
              width="70vw"
            />
            <img
              @click="changeCommentThreeToFour(3)"
              src="@/assets/emoji/emoji-03.png"
              width="70vw"
            />
            <br />
            <label class="text-emote">โปรดแสดงความรู้สึกต่อโพสต์นี้</label>
          </div>
        </div>
        <div class="d-flex flex-column justify-content-around align-items-center side-comment">
          <img
            class="side-img"
            src="@/assets/comment/second-comment/01.png"
            width="60%"
          />
          <img
            class="side-img"
            src="@/assets/comment/second-comment/02.png"
            width="60%"
          />
          <img
            class="side-img"
            src="@/assets/comment/second-comment/03.png"
            width="60%"
          />
        </div>
      </div>
      <div class="forth-comment" id="forth-comment" style="display: none">
        <div class="comment-content">
          <div class="user">
            <img
              class="img-profile"
              src="@/assets/profile/profile5-01.png"
               width="150vw"
            />
            <div class="user-name">
              <div class="name">แอดมินซ่า คอนเทนต์แซ่บ</div>
              <div class="timestamp">20 ตุลาคม เวลา 15.30 น.</div>
            </div>
            <div class="option">...</div>
          </div>
          <div class="comment">
            <div class="forth-comment-text" style="position:relative; cursor:pointer" @click="changeToLivePage()" >
              <img clas="playvideo" src="@/assets/emoji/play1-01.png" width="300vw" style="position:absolute; top:50%; left:50%; transform: translate(-50%, -50%);">
            </div>
          </div>
          <div class="like-section">
            <div class="like" style="height: auto">
              <div class="like-status">
                <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up> 331
              </div>
              <div class="comment-share">ความคิดเห็น 1,100 รายการ แชร์ 73 ครั้ง</div>
            </div>
            <br />
            <hr />
          </div>
          <!-- <div class="emote">
            <img
              @click="changeCommentTwoToThree()"
              src="@/assets/emoji/emoji-01.png"
              width="7.5%"
            />
            <img
              @click="changeCommentTwoToThree()"
              src="@/assets/emoji/emoji-02.png"
              width="7.5%"
            />
            <img
              @click="changeCommentTwoToThree()"
              src="@/assets/emoji/emoji-03.png"
              width="7.5%"
            />
            <br />
            <label class="text-emote">โปรดแสดงความรู้สึกต่อโพสต์นี้</label>
          </div> -->
        </div>
        <div class="d-flex flex-column justify-content-around align-items-center side-comment">
          <img
            class="side-img"
            src="@/assets/comment/second-comment/01.png"
            width="60%"
          />
          <img
            class="side-img"
            src="@/assets/comment/second-comment/02.png"
            width="60%"
          />
          <img
            class="side-img"
            src="@/assets/comment/second-comment/03.png"
            width="60%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "comment",
  data() {
    return {
      numLike: 16,
      scoreComment:0
    };
  },
  methods: {
    changeCommentOneToTwo(score) {
      this.scoreComment += score;
      document.getElementById("second-comment").classList.add("fade-in-bottom");
      document.getElementById("first-comment").classList.add("fade-out-top");
      setTimeout(() => {
        document.getElementById("first-comment").style.display = "none";
        document.getElementById("second-comment").style.display = "block";
      }, 600);
    },
    changeCommentTwoToThree(score) {
      this.scoreComment += score;
      document
        .getElementById("second-comment")
        .classList.remove("fade-in-bottom");
      document.getElementById("second-comment").classList.add("fade-out-top");
      document.getElementById("third-comment").classList.add("fade-in-bottom");
      setTimeout(() => {
        document.getElementById("second-comment").style.display = "none";
        document.getElementById("third-comment").style.display = "block";
      }, 600);
    },
    changeCommentThreeToFour(score) {
      this.scoreComment += score;
      document
        .getElementById("third-comment")
        .classList.remove("fade-in-bottom");
      document.getElementById("third-comment").classList.add("fade-out-top");
      document.getElementById("forth-comment").classList.add("fade-in-bottom");
      setTimeout(() => {
        document.getElementById("third-comment").style.display = "none";
        document.getElementById("forth-comment").style.display = "block";
      }, 600);
    },
    changeToLivePage() {
      sessionStorage.setItem("scoreComment", this.scoreComment)
      router.push("/live");
    },
  },
  mounted(){
    sessionStorage.setItem("scoreComment",0);
  }
};
</script>

<style>
/* Animation */
.fade-out-top {
  animation: fade-out-top 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.fade-in-bottom {
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
@keyframes fade-in-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-out-top {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
}
/*End Animation*/
.like-status {
  position: absolute;
  left: 10;
}
.comment-share {
  position: absolute;
  right: 0;
}
.like-section {
  font-family: "ChulaCharas";
  margin-top: 10px;
  padding-left: 30px;
}
.second-comment-text {
  height: 10em;
  font-size: 2vw;
  background-color: white;
  color: black;
  text-align: center;
  font-family: "ChulaCharasBold";
  justify-content: center;
  align-items: center;
  display: flex;
}
.second-comment {
  flex: 1 1 auto;
  width: 100%;
  height: 75%;
  position: relative;
}
.forth-comment {
  flex: 1 1 auto;
  width: 100%;
  height: 75%;
  position: relative;
}
.emote > img {
  margin-left: 20px;
  transition: 0.1s;
  cursor: pointer;
}
.emote > img:hover {
  transform: scale(1.2);
}
.text-emote {
  margin-top: 10px;
  font-family: "ChulaCharas";
  font-size: 1vw;
}
.emote {
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.side-img {
  border: solid white 0.5px;
}
.first-comment {
  flex: 1 1 auto;
  width: 100%;
  height: 75%;
  position: relative;
}
.comment-text {
  font-size: 1vw;
}
.comment-content,
.side-comment {
  position: absolute;
  display: inline-block;
  top: 0;
}
.side-comment {
  width: 30%;
  height: 100%;
  right: 0;
}
.comment {
  height: fit-content;
  width: 100%;
  font-family: "ChulaCharas";
  padding-left: 30px;
  /* padding-right: 30px; */
}
.img-profile {
  position: relative;
  top: 50%;
  transform: translate(0, -55%);
}

.option {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  float: right;
  font-size: 20px;
}
.name {
  font-family: "ChulaCharasBold";
  font-size: 20px;
}
.timestamp {
  font-family: "ChulaCharas";
  font-size: 15px;
}
.user-name {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  width: fit-content;
  display: inline-block;
  height: auto;
  /* vertical-align: middle; */
}
.user-img {
  height: 80%;
}
.user {
  height: 15%;
  padding-left: 10px;
}
.comment-content {
  width: 70%;
  height: 100%;
}
.title {
  font-family: "Chivo-Light";
  width: 30%;
  font-size: 40px;
  margin-left: 3%;
  margin-top: 1%;
  text-align: center;
}
.comment-page {
  width: 100vw;
  height: 100vh;
  color: white;
  overflow: hidden;
}
.comment-outside-border {
  display: flex;
  flex-flow: column;
  border: white solid 0.5px;
  width: 75%;
  height: 85%;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header-comment {
  height: auto;
  width: 100%;
}
.search-field {
  display: inline-block;
  background-color: transparent;
  border: white solid 0.5px;
  width: 35%;
  margin: auto;
  transform: translate(0, -22.5%);
}
hr {
  background-color: white;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 0;
  margin-bottom: 0;
}

/* Third Comment */
.third-comment {
  flex: 1 1 auto;
  width: 100%;
  height: 75%;
  position: relative;
}
.forth-comment-text{
  background-color: white;
  width: 85%;
  height: 20vw;
  margin:auto;
  display:block;
}
.playvideo{
  -webkit-animation: 1s soft-blink infinite alternate;
  animation: 1s soft-blink infinite alternate;
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
</style>
