<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <nav
          class="navbar navbar-expand-sm navbar-light"
          style="background-color: antiquewhite"
        >
          <div class="container">
            <!-- Logo -->
            <router-link to="/" class="navbar-brand">
              <img
                src="/images/logoanh.jpg"
                alt="Logo"
                style="width: 70px"
                class="rounded-circle"
              />
            </router-link>

            <!-- Toggler -->
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              aria-controls="collapsibleNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar links -->
            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">
                    <i class="fa-solid fa-list"></i> Trang Chủ
                  </router-link>
                </li>

                <li class="nav-item">
                  <router-link class="nav-link" to="/login">
                    <i class="fa-solid fa-sign-in-alt"></i> Đăng Nhập
                  </router-link>
                </li>

                <li class="nav-item">
                  <router-link class="nav-link" to="/register">
                    <i class="fa-solid fa-user-plus"></i> Đăng Ký
                  </router-link>
                </li>

                <li class="nav-item">
                  <router-link class="nav-link" to="/trang-ca-nhan">
                    <i class="fa-solid fa-user"></i> Trang Cá Nhân
                  </router-link>
                </li>

                <li class="nav-item">
                  <router-link class="nav-link" to="/post">
                    <i class="fa-solid fa-pen"></i> Bài Viết
                  </router-link>
                </li>
              </ul>

              <!-- Language switch -->
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">Tiếng Việt</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Tiếng Anh</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <div class="container mt-5 mb-5">
    <!-- Form Đăng Bài Viết -->
    <form
      @submit.prevent="submitForm"
      class="mx-auto"
      style="max-width: 700px"
      id="form-article"
    >
      <h3 class="text-center mb-4">
        {{ isEditing ? "Chỉnh Sửa Bài Viết" : "Đăng Bài Viết" }}
      </h3>
      <div class="mb-3">
        <label for="articleTitle" class="form-label">Tiêu Đề</label>
        <input
          type="text"
          class="form-control"
          v-model="article.title"
          id="articleTitle"
          placeholder="Nhập tiêu đề bài viết"
          required
        />
      </div>
      <div class="mb-3">
        <label for="articleContent" class="form-label">Nội Dung</label>
        <textarea
          class="form-control"
          v-model="article.content"
          id="articleContent"
          rows="5"
          placeholder="Nhập nội dung bài viết"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="articleImage" class="form-label">Hình Ảnh</label>
        <input
          type="file"
          class="form-control"
          id="articleImage"
          @change="handleFileUpload"
          accept="image/*"
        />
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-success">
          {{ isEditing ? "Cập Nhật" : "Đăng Bài" }}
        </button>
      </div>
    </form>

    <!-- Danh Sách Bài Viết -->
    <div class="article-list mt-5">
      <h3 class="text-center">Danh Sách Bài Viết</h3>
      <table class="table table-hover mt-3">
        <thead>
          <tr>
            <th>Tiêu Đề</th>
            <th>Nội Dung</th>
            <th>Hình Ảnh</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in articles" :key="index">
            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
            <td>
              <img
                v-if="item.image"
                :src="item.image"
                alt="Hình Ảnh"
                style="max-width: 100px"
              />
            </td>
            <td>
              <button class="btn btn-warning" @click="editArticle(index)">
                Sửa
              </button>
            </td>
            <td>
              <button class="btn btn-danger" @click="deleteArticle(index)">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h1 class="logo-text"><span>Gia</span>Huy</h1>
        <p></p>
        <div class="contact">
          <span><i class="fa-solid fa-phone-flip"></i> &nbsp;0812.529.537</span>
          <span
            ><i class="fa-solid fa-envelope"></i>
            &nbsp;giahuy172005@gmail.com</span
          >
        </div>
        <div class="socials">
          <router-link to="https://facebook.com" target="_blank"
            ><i class="fa-brands fa-facebook"></i
          ></router-link>
          <router-link to="https://google.com" target="_blank"
            ><i class="fa-brands fa-google"></i
          ></router-link>
          <router-link to="https://github.com" target="_blank"
            ><i class="fa-brands fa-github"></i
          ></router-link>
          <router-link to="https://linkedin.com" target="_blank"
            ><i class="fa-brands fa-linkedin"></i
          ></router-link>
        </div>
      </div>
      <div class="footer-section links">
        <h2>Quick Links</h2>
        <br />
        <ul>
          <li><router-link to="/events">Events</router-link></li>
          <li><router-link to="/team">Team</router-link></li>
          <li><router-link to="/mentors">Mentors</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li>
            <router-link to="/terms-and-conditions"
              >Terms and Conditions</router-link
            >
          </li>
        </ul>
      </div>
      <div class="footer-section contact-form">
        <h2>Contact us</h2>
        <br />
        <form action="" method="post">
          <input
            type="text"
            name="email"
            class="text-input contact-input"
            placeholder="Your email address..."
          />
          <textarea
            name="message"
            id=""
            class="text-input contact-input"
            placeholder="Your message..."
          ></textarea>
          <button type="submit" class="btn btn-big contact-btn">
            <i class="fa-regular fa-envelope"></i>
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

// Danh sách bài viết
const articles = ref([]);

// Trạng thái bài viết hiện tại
const article = ref({
  title: "",
  content: "",
  image: null,
});

// Trạng thái chỉnh sửa
const isEditing = ref(false);
const editingIndex = ref(null);

// Hàm tải danh sách bài viết từ localStorage
function loadArticles() {
  const storedArticles = localStorage.getItem("articles");
  if (storedArticles) {
    articles.value = JSON.parse(storedArticles);
  }
}

// Xử lý nộp form
function submitForm() {
  if (isEditing.value) {
    // Cập nhật bài viết
    articles.value[editingIndex.value] = { ...article.value };
  } else {
    // Thêm bài viết mới
    articles.value.push({ ...article.value });
  }

  // Lưu bài viết vào localStorage
  localStorage.setItem("articles", JSON.stringify(articles.value));

  // Reset form
  resetForm();
}

// Xử lý tải lên hình ảnh
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      article.value.image = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

// Sửa bài viết
function editArticle(index) {
  article.value = { ...articles.value[index] };
  isEditing.value = true;
  editingIndex.value = index;
}

// Xóa bài viết
function deleteArticle(index) {
  // Xóa bài viết khỏi danh sách
  articles.value.splice(index, 1);

  // Cập nhật lại localStorage
  localStorage.setItem("articles", JSON.stringify(articles.value));
}

// Reset form
function resetForm() {
  article.value = {
    title: "",
    content: "",
    image: null,
  };
  isEditing.value = false;
  editingIndex.value = null;
}

// Tải lại danh sách bài viết khi trang được tải
onMounted(() => {
  loadArticles();
});
</script>

<style>
.form-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  font-size: 16px;
}

input[type="text"],
textarea,
input[type="file"] {
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

input[type="file"] {
  border: none;
  background-color: #f1f1f1;
}

textarea {
  resize: vertical;
  min-height: 150px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.action-buttons button {
  width: 48%;
}

.social-login a {
  padding: 8px 15px;
  font-size: 14px;
  text-decoration: none;
  color: white;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.social-login a:hover {
  opacity: 0.9;
}

.footer-light {
  background-color: #f9f9f9;
  color: #333;
  padding: 40px 20px;
  border-top: 1px solid #ddd;
}

.footer-light h5 {
  font-size: 18px;
  color: #007bff;
  margin-bottom: 15px;
}

.footer-light .footer-links a {
  color: #007bff;
  text-decoration: none;
}
/* CSS Footer */
.footer {
  position: relative;
  background: #303036;
  color: #d3d3d3;
  height: 400px;
  padding: 20px;
}

.footer .footer-content {
  height: 350px;
  display: flex;
}

.footer .footer-content .footer-section {
  flex: 1;
  padding: 25px;
}

.footer .footer-content h1,
.footer .footer-content h2 {
  color: white;
}

.footer .footer-content .about h1 span {
  color: #05f7ff;
}

.footer .footer-content .about .contact span {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.footer .footer-content .about .socials a {
  border: 1px solid gray;
  width: 45px;
  height: 41px;
  padding-top: 5px;
  margin-right: 5px;
  text-align: center;
  display: inline-block;
  font-size: 1.3rem;
  border-radius: 5px;
}

.footer .footer-content .about .socials a i {
  color: white;
}

.footer .footer-content .about .socials a:hover {
  border: 1px solid white;
  color: white;
  transition: all 0.3s;
}

.footer .footer-content .links ul a {
  display: block;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.footer .footer-content .links ul li a {
  color: white;
  text-decoration: none;
}

.footer .footer-content .links ul a:hover {
  color: white;
  margin-left: 15px;
  transition: all 0.3s;
}

.footer .footer-content .contact-form .contact-input {
  background: #272727;
  color: #bebdbd;
  margin-bottom: 10px;
  line-height: 1.5rem;
  padding: 0.9rem 1.4rem;
  border: none;
}

.footer .footer-content .contact-form .contact-input:focus {
  background: #1a1a1a;
}

.footer .footer-content .contact-form .contact-btn {
  float: right;
}

.btn-big {
  padding: 0.7rem 1.3rem;
  line-height: 1.3rem;
}

.footer .footer-bottom {
  background: #343a40;
  color: #686868;
  width: 100%;
  height: 50px;
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-top: 20px;
}
</style>
