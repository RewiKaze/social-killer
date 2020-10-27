import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import comment from "../views/Comment.vue";
import live from "../views/LivePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/comment",
    name: "Comment",
    component: comment
    
  },
  {
    path: "/live",
    name: "Live",
    component: live
    
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
