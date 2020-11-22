<template>
  <div class="share-page">
    <b-container fluid>
      <!-- image -->
      <b-row class="h-100">
        <b-col cols="12" class="h-100">

          <div
            class="d-flex justify-content-center align-items-center"
            style="height: 80vh"
          >
          
            <div class="text-center share-img image-fade-in">
              <img
                :src="selectedImage"
                class="share-paper"
                height="100%"
              />
            </div>

          </div>

        </b-col>
      </b-row>
      <!-- End image -->

      <!-- Share button -->
      <b-row></b-row>
      <!-- End Share button -->
    </b-container>
  </div>
</template>

<script>
// import router from "@/router";
export default {
  name: "share",
  data() {
    return {
      images: [
        '/img/share-01.bc3c4a08.png',
        '/img/share-02.f3e5227a.png',
        '/img/share-03.5e4b733f.png',
        '/img/share-04.ff43fa8f.png',
        '/img/share-05.e52cb897.png'
      ],
      selectedImage: ''
    };
  },
  methods: {
    // randomImage: function(item) {
    //   return item[Math.floor(Math.random() * item.length)];
    // }
  },
  beforeMount() {
    const idx = Math.floor(Math.random() * this.images.length)
    this.selectedImage = this.images[idx]
  }
};
</script>

<style>
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

.image-fade-in {
	animation: image-fade-in 1s ease-in ;
}

@keyframes image-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


img.share-paper {
  max-width: 200%;
}
</style>
