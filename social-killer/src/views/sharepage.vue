<template>
  <div class="share-page">
    <b-container fluid>
      <!-- image -->
      <b-row>
        <b-col
          cols="12"
          class="d-flex justify-content-center align-items-center"
          style="height: 80vh"
        >
          <div class="text-center share-img image-fade-in">
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
          class="d-flex justify-content-center align-items-center dl-img-field"
          style="height: 20vh"
        >
          <div class="dl-btn-field text-center">
            
            <!-- <img 
              @click="downloadImg()"
              src="@/assets/icon/download.png"
              class="dl-btn"
              id="download-btn"
            /> -->
            <svg height="100%" viewBox="0 0 16 16"
              class="bi bi-download" fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              @click="downloadImg()"
            >
              <path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>

          </div>
        </b-col>
      </b-row>
      <!-- End Share button -->
    </b-container>
  </div>
</template>

<script>
// import router from "@/router";
import * as FileSaver from '../../public/FileSaver';
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
      selectedImage: ""
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
      return str.substring(str.lastIndexOf('/') + 1);
    }
  },
  beforeMount() {
    const idx = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[idx];
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "../../public/FileSaver.js");
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style>
/* Animation */
.image-fade-in {
  animation: image-fade-in 1s ease-in;
}

@keyframes image-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* End Animation */

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
  width: 30vw;
  height: 40%;
}
</style>
