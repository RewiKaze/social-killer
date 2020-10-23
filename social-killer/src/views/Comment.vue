<template>
  <div class="comment-page">
    <div class="comment-outside-border">
      <div class="header-comment">
        <label class="title">Social Killer</label>
        <input type="text" class="search-field" disabled />
        <hr />
      </div>
      <div class="comment-content">
        <div class="user">
          <div class="user-img"></div>
          <div class="user-name">แอดมินซ่า คอนเทนต์แซ่บ</div>
          <div class="user-timestamp"></div>
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
.comment-content {
  width: 80%;
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
