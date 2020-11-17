<template>
  <div class="live-camera-page">
    <b-container fluid class="comment-outside-border">
      <b-row class="h-100">
        <b-col cols="6" class="py-3 caemera-side">
          <video autoplay="true" id="videoElement"></video>
        </b-col>
        <b-col cols="6" class="comment-live border-left border-light py-3">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
/* .live-camera-page {
  width: 100vw;
  height: 100vh;
} */

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

/* .camera-side {
  height: 100%;
} */

/* .comment-live {
  height: 100%;
  overflow: scroll;
} */

/* video {
  height: 100%;
} */
</style>

<script>
const video = document.querySelector("#videoElement");

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
export default {
  name: "livecam",
};
</script>