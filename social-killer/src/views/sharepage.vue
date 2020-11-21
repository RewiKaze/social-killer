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
            <div class="text-center share-img">
              <img
                src="@/assets/share/share-01.png"
                class="share-paper"
                height="100%"
              />
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- End image -->
      <b-row></b-row>
    </b-container>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "share",
  data() {
    return {
      numLike: 16,
    };
  },
  methods: {
    changeCommentOneToTwo() {
      document.getElementById("second-comment").classList.add("fade-in-bottom");
      document.getElementById("first-comment").classList.add("fade-out-top");
      setTimeout(() => {
        document.getElementById("first-comment").style.display = "none";
        document.getElementById("second-comment").style.display = "block";
      }, 600);
    },
    changeToLivePage() {
      router.push("/live");
    },
  },
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
img.share-paper {
  max-width: 200%;
}
</style>
