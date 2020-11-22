<template>
  <div class="chatlog">
    <div class="line-page">
      <div class="line-outside-border">
        <div class="header-line">
          <label class="line-title">Linne</label>
          <hr />
        </div>
        <div class="chat-message p-4">
          <ul class="list-unstyled chat ml-3 mr-3">
            <li
              class="d-flex justify-content-left mb-4 text-left align-items-left"
              id="friend-chat"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
                alt="avatar"
                class="avatar rounded-circle ml-0 z-depth-1 pic-pro"
                v-if="userQuestion == 1"
              />
              <div class="chat-body white p-3 z-depth-1" v-if="userQuestion == 1">
                <div class="header">
                  <strong class="primary-font">Kitty</strong>
                </div>
                <p class="mb-0 chat-text">
                  มึง ลูกค้าไม่สนใจเสื้อผ้าเลยอะ มีแต่คอมเม้นต์อะไรก็ไม่รู้
                </p>
              </div>
            </li>
            <li
              class="d-flex justify-content-right mb-4 text-right"
              style="float: right;"
              id='list-answer1'
            >
              <div class="chat-body white p-3 z-depth-1" v-if="userQuestion == 1 || userQuestion == 2">
                <div class="header">
                  <strong class="primary-font">Me</strong>
                </div>
                <div class="mb-0" id="user-answer">
                  <div class="typing">
                    <span class="circle scaling"></span>
                    <span class="circle bouncing"></span>
                    <span class="circle scaling"></span>
                  </div>    
                </div>
              </div>
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                alt="avatar"
                class="avatar rounded-circle z-depth-1 pic-pro"
                v-if="userQuestion == 1 || userQuestion == 2"
              />
            </li>
            <!-- Add Comment 3 -->
            <div v-if="userQuestion == 2">
              <br><br><br>
            </div>
            <li
              class="d-flex justify-content-left mb-4 text-left align-items-left"
              id="friend-chat2"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
                alt="avatar"
                class="avatar rounded-circle ml-0 z-depth-1 pic-pro fade-in-bottom"
                v-if="(userQuestion == 2 ||userQuestion == 3) && show == true"
              />
              <div class="chat-body white p-3 z-depth-1 fade-in-bottom" v-if="(userQuestion == 2 ||userQuestion == 3) && show == true">
                <div class="header">
                  <strong class="primary-font">Kitty</strong>
                </div>
                <p class="mb-0 chat-text" id="friend-chat2">
                  มึงคิดดูนะ กูเจอแบบนี้ทุกครั้งที่ไลฟ์เลย แล้วกูไลฟ์ทุกวันอ่ะมึง
                </p>
              </div>
            </li>
            <!-- End Comment 3-->
            <!-- Comment 4 -->
            <li
              class="d-flex justify-content-right mb-4 text-right"
              style="float: right;"
              id="list-answer2"
            >
              <div class="chat-body white p-3 z-depth-1 fade-in-bottom" v-if="(userQuestion == 2 || userQuestion == 3) && wait == true"> 
                <div class="header">
                  <strong class="primary-font">Me</strong>
                </div>
                <div class="mb-0" id="user-answer2">
                  <div class="typing" v-if="wait1 != true">
                    <span class="circle scaling"></span>
                    <span class="circle bouncing"></span>
                    <span class="circle scaling"></span>
                  </div>  
                  <div class='chat-text' v-else>
                    {{text}}
                  </div>
                </div>
              </div>
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                alt="avatar"
                class="avatar rounded-circle z-depth-1 pic-pro fade-in-bottom"
                v-if="(userQuestion == 2 || userQuestion == 3) && wait == true"
              />
            </li>
              <!-- End Comment 4-->
              <!-- Start Comment 5 -->
            <div v-if="userQuestion == 3">
                <br><br><br>
            </div>
            <li
              class="d-flex justify-content-left mb-4 text-left align-items-left"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
                alt="avatar"
                class="avatar rounded-circle ml-0 z-depth-1 pic-pro fade-in-bottom"
                v-if="userQuestion == 3 || userQuestion == 4"
              />
              <div class="chat-body white p-3 z-depth-1 fade-in-bottom" v-if="userQuestion == 3 ||userQuestion == 4">
                <div class="header">
                  <strong class="primary-font">Kitty</strong>
                </div>
                <p class="mb-0 chat-text" id="friend-chat2">
                  มึงพูดแบบนี้หมายความว่าไง
                </p>
              </div>
            </li>
              <!-- End Comment 5 -->
              <!-- Start Comment 6 -->
              <li
              class="d-flex justify-content-right mb-4 text-right"
              style="float: right;"
            >
              <div class="chat-body white p-3 z-depth-1 fade-in-bottom" v-if="(userQuestion == 3 || userQuestion == 4) && wait2 == true"> 
                <div class="header">
                  <strong class="primary-font">Me</strong>
                </div>
                <div class="mb-0" id="user-answer3">
                  <div class="typing" v-if="wait3 != true">
                    <span class="circle scaling"></span>
                    <span class="circle bouncing"></span>
                    <span class="circle scaling"></span>
                  </div>  
                  <div class='chat-text' v-else>
                    {{text2}}
                  </div>  
                  <!-- <div class='chat-text' v-else>
                    {{text}}
                  </div> -->
                </div>
              </div>
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                alt="avatar"
                class="avatar rounded-circle z-depth-1 pic-pro fade-in-bottom"
                v-if="(userQuestion == 3 || userQuestion == 4) && wait2 == true"
              />
            </li>
              <!-- End Comment 6 -->
              <!-- Final Comment -->
              <div v-if="userQuestion == 4">
                <br><br><br>
             </div>
              <li
              class="d-flex justify-content-left mb-4 text-left align-items-left"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
                alt="avatar"
                class="avatar rounded-circle ml-0 z-depth-1 pic-pro fade-in-bottom"
                v-if="userQuestion == 4"
              />
              <div class="chat-body white p-3 z-depth-1 fade-in-bottom" v-if="userQuestion == 4">
                <div class="header">
                  <strong class="primary-font">Kitty</strong>
                </div>
                <p class="mb-0 chat-text" id="friend-chat2">
                  มึงลองโดนเองดูบ้างไหมล่ะ
                </p>
              </div>
            </li>
              <!-- End Final Comment -->
            <li class="white" id="block-answer">
              <div v-if="userQuestion == 1"
                class="answer-border d-flex justify-content-around align-items-center answer-text"
              >
                <div class="answer-button d-table p-2" id="answer1" @click="showAnswer($event)">
                  <span class="answer1 d-table-cell align-middle">
                     ใจเย็นๆ เขาอาจจะแค่แซวเล่น
                  </span>
                </div>
                <div class="answer-button d-table p-2" id="answer2" @click="showAnswer($event)">
                  <span class="answer2 d-table-cell align-middle">
                    แค่คอมเมนต์เอง ไม่เป็นไรนะมึง เขาทำอะไรมึงไม่ได้หรอก
                  </span>
                </div>
                <div class="answer-button d-table p-2" id="answer3" @click="showAnswer($event)">
                  <span class="answer3 d-table-cell align-middle">
                    คิดว่าเป็นสีสันชีวิต5555555
                  </span>
                </div>
                <div class="answer-button d-table p-2" id="answer4" @click="showAnswer($event)">
                  <span class="answer4 d-table-cell align-middle">
                    เพื่อนกูสวยไง ใครๆ ก็อยากชม
                  </span>
                </div>
              </div>
              <div v-if="userQuestion == 2"
                class="answer-border d-flex justify-content-around align-items-center answer-text"
              >
                <div class="answer-button d-table p-2" id="answer1" @click="showAnswer2($event)">
                  <span class="answer1 d-table-cell align-middle">
                    เห้ยย พรุ่งนี้อาจจะไม่มีก็ได้ไง55555555
                  </span>
                </div>
                <div class="answer-button d-table p-2" id="answer2" @click="showAnswer2($event)">
                  <span class="answer2 d-table-cell align-middle">
                    เรื่องปกติแหล่ะ อย่าคิดมากๆ
                  </span>
                </div>
                <div class="answer-button d-table p-2" id="answer3" @click="showAnswer2($event)">
                  <span class="answer3 d-table-cell align-middle">
                    พูดยากอ่ะ สู้ๆ นะ
                  </span>
                </div>
                <div class="answer-button d-table p-2" id="answer4" @click="showAnswer2($event)">
                  <span class="answer4 d-table-cell align-middle">
                    ทำใจว่ะ ส่วนใหญ่กูก็เห็นคนที่ไลฟ์โดนกันหมด
                  </span>
                </div>
              </div>
              <div v-if="userQuestion == 3"
                class="answer-border d-flex justify-content-around align-items-center answer-text"
              >
                <div class="answer-button d-table p-2" id="answer1" @click="showAnswer3($event)">
                  <span class="answer1 d-table-cell align-middle">
                    กูไม่ได้หมายความแบบนั้น แค่อยากให้มึงเข้าใจ
                  </span>
                </div>
                <div class="answer-button d-table p-2" id="answer2" @click="showAnswer3($event)">
                  <span class="answer2 d-table-cell align-middle">
                    มึงต้องลองปล่อยวางบ้าง
                  </span>
                </div>
                <div class="answer-button d-table p-2" id="answer3" @click="showAnswer3($event)">
                  <span class="answer3 d-table-cell align-middle">
                    ใจเย็นๆ มึงพาลแล้วเนี่ย
                  </span>
                </div>
                <div class="answer-button d-table p-2" id="answer4" @click="showAnswer3($event)">
                  <span class="answer4 d-table-cell align-middle">
                    มันไม่มีอะไรหรอก ไม่ต้องคิดมากหรอก
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <p
          style="
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            margin: 0;
            font-size:1vw
          "
        >
          โปรดเลือกคำตอบ
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.mb-4, .my-4{
  margin-bottom: 0 !important;
}
.primary-font{
  font-size: 1.5vw;
}
.answer-button:hover{
  filter: brightness(2);
  transition: 0.5s;
  cursor:pointer;
}
.answer-text{
  font-size:1vw
}

.chat-text{
  font-size: 1.3vw;
}
.chatlog{
  font-family: "ChulaCharas";

}
.pic-pro {
  width: 4em;
  height: 100%;
}

.line-page {
  width: 100vw;
  height: 100vh;
  color: white;
  overflow: hidden;
}

.line-outside-border {
  border: white solid 0.5px;
  width: 75%;
  height: 80%;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.chat-message {
  width: 100%;
}

.header-line {
  height: auto;
  width: 100%;
}

hr {
  background-color: white;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 0;
  margin-bottom: 0;
}

.answer-border {
  border: white solid 0.5px;
  width: 95%;
  height: 20%;
  border-radius: 30px;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line-title {
  font-family: "Chivo-Light";
  width: 30%;
  font-size: 40px;
  margin-left: 3%;
  margin-top: 1%;
  text-align: center;
}

.typing {
  display: block;
  width: 60px;
  height: 40px;
  background-color: #BDBDBD;
  margin-left: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  display: block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #757575;
  margin: 3px;
}

.circle.scaling {
  animation: typing 1000ms ease-in-out infinite;
  animation-delay: 3600ms;
}

.circle.bouncing {
  animation: bounce 1000ms ease-in-out infinite;
  animation-delay: 3600ms;
}

.circle:nth-child(1) {
  animation-delay: 0ms;
}

.circle:nth-child(2) {
  animation-delay: 333ms;
}

.circle:nth-child(3) {
  animation-delay: 666ms;
}

@keyframes typing {
  0% {
    transform: scale(1);
  }

  33% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.4);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  33% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

.answer-button {
  background-color: #73000C;
  width: 14em;
  height: 4em;
  text-align: center;
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
.fade-in-bottom {
	animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.fade-out {
	animation: fade-out 1s ease-out both;
}
.fade-in {
	animation: fade-out 1s ease-out both reverse;
}
.fade-out-top {
	animation: fade-out-top 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
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


</style>
<script>
import router from "@/router"
// Fade-out and fade in 1s
export default {
  name:"chat",
  data() {
    return {
      userQuestion: 1,
      wait: false,
      wait1: false,
      wait2: false,
      wait3: false,
      show: true,
      text: "",
      text2: ""
    };
  },
  methods:{
    showAnswer(data){
      document.getElementById('user-answer').innerHTML= "<div class='chat-text fade-in-bottom'>"+data.currentTarget.innerText+"</div>";
      document.getElementById('block-answer').classList.add('fade-out');
      setTimeout(()=>{
        document.getElementById('block-answer').style.display = 'none';
      },1000)
      setTimeout(()=>{
        document.getElementById('friend-chat').classList.add('fade-out-top')
      },4500)
      setTimeout(()=>{
        this.userQuestion++;
      },5000)
      setTimeout(()=>{
        this.wait = true
        document.getElementById('block-answer').style.display = 'list-item';
        document.getElementById('block-answer').classList.remove('fade-out');
        document.getElementById('block-answer').classList.add('fade-in');
      },7000)
    },
    showAnswer2(data){
      this.wait1 = true
      this.text = data.currentTarget.innerText
      document.getElementById('block-answer').classList.remove('fade-in');
      document.getElementById('user-answer2').innerHTML= "<div class='chat-text fade-in-bottom'>"+data.currentTarget.innerText+"</div>";
      document.getElementById('block-answer').classList.add('fade-out');
      setTimeout(()=>{
        document.getElementById('block-answer').style.display = 'none';
      },1000)
      setTimeout(()=>{
        document.getElementById('list-answer1').classList.add('fade-out-top')
      },3500)
      // setTimeout(()=>{
      //   document.getElementById('friend-chat2').classList.add('fade-out-top')
      // },4500)
      setTimeout(()=>{
        this.userQuestion++;
        // document.getElementById('user-answer2').innerHTML= "<div class='chat-text fade-in-bottom'>"+data.currentTarget.innerText+"</div>";
      },4000)
      setTimeout(()=>{
        document.getElementById('friend-chat2').classList.add('fade-out-top')
      },7000)
      setTimeout(()=>{
        this.wait2 = true
        this.show = false
        document.getElementById('block-answer').style.display = 'list-item';
        document.getElementById('block-answer').classList.remove('fade-out');
        document.getElementById('block-answer').classList.add('fade-in');
        console.log(this.userQuestion)
      },7500)
    },
    showAnswer3(data){
      this.text2 = data.currentTarget.innerText
      document.getElementById('block-answer').classList.remove('fade-in');
      document.getElementById('user-answer3').innerHTML= "<div class='chat-text fade-in-bottom'>"+data.currentTarget.innerText+"</div>"
      document.getElementById('block-answer').classList.add('fade-out');
      setTimeout(()=>{
        document.getElementById('block-answer').style.display = 'none';
      },1000)
      // this.userQuestion++
      setTimeout(()=>{
        document.getElementById('list-answer2').classList.add('fade-out-top')
      },4500)
      setTimeout(()=>{
        this.wait3 = true
        this.userQuestion++
      },5000)
      setTimeout(()=>{
        router.push("/livecam")
      },9000)
    }
  }
}
</script>