<template>
  <div class="share-page">
    <b-container fluid>
      <!-- Header -->
      <b-row>
        <b-col
          cols="12"
          class="d-flex justify-content-center py-3"
          style="height: 20vh"
        >

          <div class="text-center share-header">
            <div
              id="share-header-1"
              style="font-size: 7vmin; color: #da0000;"
            >
              คุณอาจะเป็นฆาตรกรโดยไม่รู้ตัว
            </div>
            <div
              id="share-header-2"
              style="font-size: 3vmin; color: #ffffff; opacity: 0%"
            >
              ร่วมกันส่งต่อภาพ เพื่อหยุดการฆาตรกรรมในโลกโซเชียล
            </div>
          </div>

        </b-col>
      </b-row>
      <!-- End Header -->

      <!-- image -->
      <b-row>
        <b-col
          cols="12"
          class="d-flex justify-content-center align-items-center"
          style="height: 65vh"
        >

          <div
            class="text-center share-img"
            id="share-img"
            style="opacity: 0%"
          >
            <img
              :src="require('@/assets' + selectedImage)"
              class="share-paper"
              id="share-paper"
              height="100%"
            />
          </div>

        </b-col>
      </b-row>
      <!-- End image -->

      <!-- Share button -->
      <b-row>
        <b-col
          cols="12"
          id="dl-img"
          class="d-flex justify-content-center align-items-center dl-img-field"
          style="height: 15vh; opacity: 0%"
        >
          <div class="dl-btn-field text-center">
            <svg
              height="100%"
              viewBox="0 0 16 16"
              class="bi bi-download"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              style="cursor: pointer"
              @click="downloadImg()"
            >
              <path
                fill-rule="evenodd"
                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
              />
            </svg>
          </div>

          <div
            @click="backToHome()"
            id="back-home-btn"
            class="back-home-btn"
            style="opacity: 0%"
          >
            Back To Home
          </div>

        </b-col>
      </b-row>
      <!-- End Share button -->
    </b-container>
  </div>
</template>

<script>
import router from "@/router";
import * as FileSaver from "../../public/FileSaver";
export default {
  name: "share",
  data() {
    return {
      images: [
        "/share/share-01.png",
        "/share/share-02.png",
        "/share/share-03.png",
        "/share/share-04.png",
        "/share/share-05.png",
      ],
      selectedImage: "",
    };
  },
  methods: {
    downloadImg() {
      let img = document.getElementById("share-paper");
      let imgPath = img.getAttribute("src");
      let fileName = this.getFileName(imgPath);
      FileSaver.saveAs(imgPath, fileName);
    },
    getFileName(str) {
      return str.substring(str.lastIndexOf("/") + 1);
    },
    backToHome() {
      setTimeout(() => {
        router.push("/home");
      }, 1000);
    },
  },
  beforeMount() {
    const idx = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[idx];
  },
  mounted() {
    // import FileSaver.js
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "../../public/FileSaver.js");
    document.head.appendChild(recaptchaScript);

    // Animation share-fade-in
    document.getElementById("share-header-1").classList.add("share-fade-in");
    setTimeout(function () {
      document.getElementById("share-header-2").style.opacity = "100%";
      document.getElementById("share-header-2").classList.add("share-fade-in");
    }, 2000);
    setTimeout(function () {
      document.getElementById("share-img").style.opacity = "100%";
      document.getElementById("share-img").classList.add("share-fade-in");
    }, 4000);
    setTimeout(function () {
      document.getElementById("dl-img").style.opacity = "100%";
      document.getElementById("dl-img").classList.add("share-fade-in");
    }, 5000);
    setTimeout(function () {
      document.getElementById("back-home-btn").style.opacity = "100%";
      document.getElementById("back-home-btn").classList.add("share-fade-in");
    }, 10000);
  },
};
</script>

<style>
/* Animation */

.share-fade-in {
  animation: share-fade-in 1s ease-in;
}

@keyframes share-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* End Animation */

.share-header {
  width: 80vw;
  height: 100%;
  font-family: "ChulaCharas";
}

.share-page {
  width: 100vw;
  height: 100vh;
  color: white;
  overflow: hidden;
}

.share-img {
  width: 80vw;
  height: 80%;
}

img.share-paper {
  max-width: 200%;
}

.dl-btn-field {
  width: 20vw;
  height: 6vh;
}

.back-home-btn {
  position: absolute;
  bottom: 30%;
  right: 2%;
  font-size: 4vmin;
  color: #aaaaaa;
  font-family: "Inconsolata";
  cursor: pointer;
}
</style>
