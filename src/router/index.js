import { createRouter, createWebHistory } from "vue-router";
import TrangChu2 from "@/components/TrangChu2.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import TrangCaNhan from "@/components/TrangCaNhan.vue";
import Post from "@/components/Post.vue";
import ChiTiet from "@/components/ChiTiet.vue";

const routes = [
  { path: "/", name: "TrangChu2", component: TrangChu2 },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/trang-ca-nhan",
    name: "TrangCaNhan",
    component: TrangCaNhan,
    beforeEnter: (to, from, next) => {
      const userData = JSON.parse(localStorage.getItem("currentUser"));
      if (userData) {
        next();
      } else {
        alert("Bạn cần phải đăng nhập để truy cập vào trang cá nhân!");
        next("/login");
      }
    },
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
    beforeEnter: (to, from, next) => {
      const userData = JSON.parse(localStorage.getItem("currentUser"));
      if (userData) {
        next();
      } else {
        alert("Bạn cần phải đăng nhập để truy cập vào trang đăng bài!");
        next("/login");
      }
    },
  },
  {
    path: "/chitiet/:articleId",
    name: "ChiTiet",
    component: ChiTiet,
    props: true, // Truyền params vào component như props
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
