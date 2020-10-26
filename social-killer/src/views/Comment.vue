<template>
  <div class="comment-page">
    <div class="comment-outside-border">
      <div class="header-comment">
        <label class="title">Social Killer</label>
        <input type="text" class="search-field" disabled />
        <!-- <img src="@/assets/icon/icon1-01.png" width="10%" /> -->
        <hr />
      </div>
      <div class="comment-content">
        <div class="user">
          <img
            class="img-profile"
            src="@/assets/profile/profile5-01.png"
            height="50%"
          />
          <div class="user-name">
            <div class="name">แอดมินซ่า คอนเทนต์แซ่บ</div>
            <div class="timestamp">20 ตุลาคม เวลา 15.30</div>
          </div>
          <div class="option">...</div>
        </div>
        <div class="comment">
          <div class="test"></div>
          <!-- <div class="comment-text">
            หนุ่ม ๆดูมันดิ “ขอบีบนมสาว” กลางสยาม ฮาลั่น!!
          </div>
          <div class="img-comment">
            <img src="@/assets/testImg.jpg" width="100%" height="300px" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment"
};
</script>

<style>
.test {
}
.comment {
  height: 60%;
  width: 100%;
  font-family: "ChulaCharas";
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
  height: 80%;
  margin: 0;
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
</style>
