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

  <div class="login-container mb-5" style="margin-top: 100px">
    <h2>Đăng Nhập</h2>
    <form @submit.prevent="loginUser">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          v-model="email"
          required
          placeholder="Nhập email"
          autocomplete="on"
        />
      </div>

      <div class="form-group">
        <label for="password">Mật khẩu:</label>
        <input
          type="password"
          v-model="password"
          required
          placeholder="Nhập mật khẩu"
          autocomplete="on"
        />
      </div>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>

      <button type="submit">Đăng Nhập</button>
    </form>

    <!-- Social Login Section -->
    <div class="social-login">
      <p style="text-align: center; margin: 15px 0; font-weight: bold">
        Hoặc đăng nhập bằng:
      </p>
      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <a href="#" class="btn btn-primary btn-sm">
          <i class="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="#" class="btn btn-info btn-sm">
          <i class="fab fa-twitter"></i> Twitter
        </a>
        <a href="#" class="btn btn-danger btn-sm">
          <i class="fab fa-google"></i> Google
        </a>
        <a href="#" class="btn btn-secondary btn-sm">
          <i class="fab fa-linkedin-in"></i> LinkedIn
        </a>
        <a href="#" class="btn btn-pink btn-sm">
          <i class="fab fa-instagram"></i> Instagram
        </a>
      </div>
    </div>

    <!-- Register Section -->
    <div class="register-link" style="text-align: center; margin-top: 20px">
      <p>
        Bạn chưa có tài khoản?
        <router-link class="register-link-text" to="/register">
          Đăng Ký
        </router-link>
      </p>
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h1 class="logo-text"><span>Gia</span>Huy</h1>
        <p>
        </p>
        <div class="contact">
          <span><i class="fa-solid fa-phone-flip"></i> &nbsp;0812.529.537</span>
          <span><i class="fa-solid fa-envelope"></i> &nbsp;giahuy172005@gmail.com</span>
        </div>
        <div class="socials">
          <router-link to="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></router-link>
          <router-link to="https://google.com" target="_blank"><i class="fa-brands fa-google"></i></router-link>
          <router-link to="https://github.com" target="_blank"><i class="fa-brands fa-github"></i></router-link>
          <router-link to="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></router-link>
        </div>
      </div>
      <div class="footer-section links">
        <h2>Quick Links</h2>
        <br>
        <ul>
          <li><router-link to="/events">Events</router-link></li>
          <li><router-link to="/team">Team</router-link></li>
          <li><router-link to="/mentors">Mentors</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/terms-and-conditions">Terms and Conditions</router-link></li>
        </ul>
      </div>
      <div class="footer-section contact-form">
        <h2>Contact us</h2>
        <br>
        <form action="" method="post">
          <input type="text" name="email" class="text-input contact-input" placeholder="Your email address...">
          <textarea name="message" id="" class="text-input contact-input" placeholder="Your message..."></textarea>
          <button type="submit" class="btn btn-big contact-btn">
            <i class="fa-regular fa-envelope"></i>
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    loginUser() {
      // Lấy danh sách người dùng từ localStorage
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Tìm người dùng khớp với email
      const user = users.find((u) => u.email === this.email);

      if (!user) {
        // Nếu không tìm thấy tài khoản
        this.errorMessage = "Bạn chưa đăng ký tài khoản. Vui lòng đăng ký!";
        this.successMessage = "";
      } else if (user.password !== this.password) {
        // Nếu email đúng nhưng mật khẩu sai
        this.errorMessage = "Sai mật khẩu. Vui lòng thử lại!";
        this.successMessage = "";
      } else {
        // Nếu đăng nhập thành công
        this.successMessage = "Đăng nhập thành công!";
        this.errorMessage = "";

        // Lưu thông tin người dùng hiện tại
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Chuyển hướng sang trang chính
        this.$router.push("/");
      }
    },
  },
};
</script>
<style>
.login-container {
  width: 700px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 530px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

input[type="checkbox"] {
  margin-right: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
.social-login a {
  display: inline-block;
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

.btn-primary {
  background-color: #3b5998; /* Facebook Blue */
}

.btn-info {
  background-color: #00acee; /* Twitter Blue */
}

.btn-danger {
  background-color: #db4437; /* Google Red */
}

.btn-secondary {
  background-color: #0077b5; /* LinkedIn Blue */
}

.btn-pink {
  background-color: #e4405f; /* Instagram Pink */
}

.social-login {
  margin-top: 20px;
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

.footer-light p {
  font-size: 14px;
  line-height: 1.6;
  color: #555;
}

.footer-light .footer-links {
  list-style: none;
  padding: 0;
}

.footer-light .footer-links li {
  margin-bottom: 10px;
}

.footer-light .footer-links a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-light .footer-links a:hover {
  color: #0056b3;
}

.footer-light i {
  margin-right: 10px;
  color: #007bff;
}

.footer-light hr {
  border-color: #ddd;
  margin: 20px 0;
}

.footer-light .text-center {
  font-size: 12px;
  color: #777;
}
.register-link-text {
  font-weight: bold;
  font-size: 16px;
  color: #007bff;
  text-decoration: none; /* Loại bỏ underline mặc định */
  transition: all 0.3s ease;
}

.register-link-text:hover {
  color: #0056b3;
  text-decoration: underline; /* Thêm underline khi hover */
  cursor: pointer;
}

.register-link-text:focus {
  outline: none;
}
/* CSS cho thông báo lỗi */
.error {
  color: #fff; /* Màu chữ trắng */
  background-color: #e74c3c; /* Màu nền đỏ */
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ */
  transform: scale(1); /* Mặc định */
  animation: slideInFromTop 0.5s ease-in-out; /* Hiệu ứng trượt vào từ trên */
}

/* CSS cho thông báo thành công */
.success {
  color: #fff; /* Màu chữ trắng */
  background-color: #2ecc71; /* Màu nền xanh lá */
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ */
  transform: scale(1); /* Mặc định */
  animation: slideInFromTop 0.5s ease-in-out; /* Hiệu ứng trượt vào từ trên */
}

/* Hiệu ứng trượt vào từ trên */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-20px); /* Vị trí ban đầu từ trên */
    opacity: 0; /* Ẩn đi */
  }
  100% {
    transform: translateY(0); /* Đến vị trí ban đầu */
    opacity: 1; /* Hiển thị */
  }
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
  transition: all .3s;
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
  transition: all .3s;
}

.footer .footer-content .contact-form .contact-input {
  background: #272727;
  color: #bebdbd;
  margin-bottom: 10px;
  line-height: 1.5rem;
  padding: .9rem 1.4rem;
  border: none;
}

.footer .footer-content .contact-form .contact-input:focus {
  background: #1a1a1a;
}

.footer .footer-content .contact-form .contact-btn {
  float: right;
}

.btn-big {
  padding: .7rem 1.3rem;
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
