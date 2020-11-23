import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import comment from "../views/Comment.vue";
import live from "../views/livepage.vue";
import chat from "@/views/Chat.vue";
import livecam from "@/views/LiveAndCam.vue"
import loading from "@/views/Loading.vue";
import share from "@/views/sharepage.vue";
import conclude from "@/views/Conclude.vue"
import warning from "@/views/Warning.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Loading",
    component: loading
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
  },
  {
    name: "Chat",
    path: "/chat",
    component : chat
  },
  {
    name: "Home",
    path: "/home",
    component : Home
  },
  {
    name: "Share",
    path: "/share",
    component : share
  },
  {
    name: "LiveCam",
    path: "/livecam",
    component : livecam
  },
  {
    name: "Conclude",
    path: "/conclude",
    component : conclude
  },
  {
    name: "Warning",
    path: "/warning",
    component: warning
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.replace('/')
  
export default router;
