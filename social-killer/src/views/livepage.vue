<template>
  <div class="live-page">
    <b-container fluid class="comment-outside-border">
      <!-- <div class="first-comment" id="first-comment" style="display:none;">
        <div class="comment-content">
          <div class="user">
            <img
              class="img-profile"
              src="@/assets/profile/profile5-01.png"
              height="50%"
            />
            <div class="user-name">
              <div class="name">แอดมินซ่า คอนเทนต์แซ่บ</div>
              <div class="timestamp">20 ตุลาคม เวลา 15.30 น.</div>
            </div>
            <div class="option">...</div>
          </div>
          <div class="comment">
            <div class="comment-text">
              หนุ่ม ๆ ดูมันดิ “ขอบีบนมสาว” กลางสยาม ฮาลั่น!!
            </div>
            <img src="@/assets/comment/first-comment/web-3.png" width="100%" />
          </div>
          <div class="emote">
            <img
              @click="changeCommentOneToTwo()"
              src="@/assets/emoji/emoji-01.png"
              width="10%"
            />
            <img
              @click="changeCommentOneToTwo()"
              src="@/assets/emoji/emoji-02.png"
              width="10%"
            />
            <img
              @click="changeCommentOneToTwo()"
              src="@/assets/emoji/emoji-03.png"
              width="10%"
            />
            <br />
            <label class="text-emote">โปรดแสดงความรู้สึกต่อโพสต์นี้</label>
          </div>
        </div>
        <div class="side-comment">
          <br /><br />
          <img
            class="side-img"
            src="@/assets/comment/first-comment/01.png"
            width="60%"
          />
          <br /><br />
          <img
            class="side-img"
            src="@/assets/comment/first-comment/02.png"
            width="60%"
          />
          <br /><br />
          <img
            class="side-img"
            src="@/assets/comment/first-comment/03.png"
            width="60%"
          />
        </div>
      </div>
      <div class="second-comment" id="second-comment">
        <div class="comment-content">
          <div class="user">
            <img
              class="img-profile"
              src="@/assets/profile/profile2-01.png"
              height="50%"
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
            <b-icon-hand-thumbs-up></b-icon-hand-thumbs-up>
          </div>
          <div class="emote">
            <img src="@/assets/emoji/emoji-01.png" width="10%" />
            <img src="@/assets/emoji/emoji-02.png" width="10%" />
            <img src="@/assets/emoji/emoji-03.png" width="10%" />
            <br />
            <label class="text-emote">โปรดแสดงความรู้สึกต่อโพสต์นี้</label>
          </div>
        </div>
        <div class="side-comment">
          <br /><br />
          <img
            class="side-img"
            src="@/assets/comment/second-comment/01.png"
            width="60%"
          />
          <br /><br />
          <img
            class="side-img"
            src="@/assets/comment/second-comment/02.png"
            width="60%"
          />
          <br /><br />
          <img
            class="side-img"
            src="@/assets/comment/second-comment/03.png"
            width="60%"
          />
        </div>
      </div> -->
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
            <div class="p-2 icon-1" style="font-size: 30px;">
              854
            </div>
          </div>
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
            <script
              type="text/javascript"
              async
              src="https://tenor.com/embed.js"
            ></script>
          </div>
        </b-col>
        <b-col cols="6" class="comment border-left border-light py-3">
          <!-- !!! One person comemnt !!! -->
          <div class="row p-1">
            <!-- proflie -->
            <div class="col-3">
              <div class="rounded-circle">
                <img
                  src="@/assets/profile/profile1-01.png"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
            <!-- comment -->
            <div class="col-5">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-txt">Warawit Rich</div>
                <div class="px-2 comment-txt">กูรู้นะ...</div>
                <div class="px-2 comment-txt">พวกมึงโฟกัสอะไร</div>
              </div>
            </div>
            <!-- Emoji -->
            <div class="col-4"></div>
          </div>
          <!-- !!! End !!! -->
          <!-- !!! One person comemnt !!! -->
          <div class="row p-1">
            <!-- proflie -->
            <div class="col-3">
              <div class="rounded-circle">
                <img
                  src="@/assets/profile/profile4-01.png"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
            <!-- comment -->
            <div class="col-5">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-txt">
                  Somsak Kumkom
                </div>
                <div class="px-2 comment-txt">เข้ามาใกล้หน่อย</div>
                <div class="px-2 comment-txt">อยากเห็นชัดๆ</div>
              </div>
            </div>
            <!-- Emoji -->
            <div class="col-4"></div>
          </div>
          <!-- !!! End !!! -->
          <!-- !!! One person comemnt !!! -->
          <div class="row p-1">
            <!-- proflie -->
            <div class="col-3">
              <div class="rounded-circle">
                <img
                  src="@/assets/profile/profile2-01.png"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
            <!-- comment -->
            <div class="col-5">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-txt">
                  Teerapong Mindee
                </div>
                <div class="px-2 comment-txt">แม่ค้าคือดืออออออ</div>
              </div>
            </div>
            <!-- Emoji -->
            <div class="col-4"></div>
          </div>
          <!-- !!! End !!! -->
          <!-- !!! One person comemnt !!! -->
          <div class="row p-1">
            <!-- proflie -->
            <div class="col-3">
              <div class="rounded-circle">
                <img
                  src="@/assets/profile/profile3-01.png"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
            <!-- comment -->
            <div class="col-5">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-txt">
                  Saksit Kobkhun
                </div>
                <div class="px-2 comment-txt">โอ้ววววว ว้าวววๆๆๆ</div>
              </div>
            </div>
            <!-- Emoji -->
            <div class="col-4"></div>
          </div>
          <!-- !!! End !!! -->
          <!-- !!! One person comemnt !!! -->
          <div class="row p-1">
            <!-- proflie -->
            <div class="col-3">
              <div class="rounded-circle">
                <img
                  src="@/assets/profile/profile3-01.png"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
            <!-- comment -->
            <div class="col-5">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-txt">
                  Saksit Kobkhun
                </div>
                <div class="px-2 comment-txt">แม่ค้าน่ารักจัง</div>
                <div class="px-2 comment-txt">ดูแต่แม่ค้าค้าบ</div>
              </div>
            </div>
            <!-- Emoji -->
            <div class="col-4"></div>
          </div>
          <!-- !!! End !!! -->
          <!-- !!! One person comemnt !!! -->
          <div class="row p-1">
            <!-- proflie -->
            <div class="col-3">
              <div class="rounded-circle">
                <img
                  src="@/assets/profile/profile2-01.png"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
            <!-- comment -->
            <div class="col-5">
              <div class="d-flex flex-column">
                <div class="p-2 font-weight-bold comment-txt">
                  Teerapong Mindee
                </div>
                <div class="px-2 comment-txt">ชุดนี้คือดือมากเลยครับ</div>
              </div>
            </div>
            <!-- Emoji -->
            <div class="col-4"></div>
          </div>
          <!-- !!! End !!! -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import router from "@/router";
export default {
  name: "live",
  methods: {
    goToComment() {
      router.push("/comment");
    }
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
.second-comment-text {
  height: 5em;
  font-size: 35px;
  background-color: white;
  color: black;
  text-align: center;
  font-family: "ChulaCharasBold";
  justify-content: center;
  align-items: center;
  display: flex;
}
.second-comment {
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
  font-size: 15px;
}
.emote {
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.side-img {
  margin: auto;
  display: block;
  border: solid white 0.5px;
}
.first-comment {
  width: 100%;
  height: 75%;
  position: relative;
}
.comment-text {
  font-size: 20px;
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
  height: 25%;
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
.live-page {
  width: 100vw;
  height: 100vh;
  color: white;
  overflow: hidden;
}
.comment-outside-border {
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
  width: 15%;
}
.comment {
  height: 100%;
  overflow: scroll;
}
.comment-txt {
  font-size: 2.5vmin;
}
</style>
