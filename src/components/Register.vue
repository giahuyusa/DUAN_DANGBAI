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

  <div class="register-container mb-5" style="margin-top: 100px">
    <h2>Đăng Ký</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group icon-group">
        <i class="fas fa-user"></i>
        <input
          type="text"
          v-model="fullname"
          required
          placeholder="Nhập họ và tên"
        />
      </div>

      <div class="form-group icon-group">
        <i class="fas fa-envelope"></i>
        <input type="email" v-model="email" required placeholder="Nhập email" />
      </div>

      <div class="form-group icon-group">
        <i class="fas fa-lock"></i>
        <input
          type="password"
          v-model="password"
          required
          placeholder="Nhập mật khẩu"
        />
      </div>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
      
      <button type="submit">Đăng Ký</button>
     
    </form>

    <div class="divider">
      <span>Hoặc đăng ký bằng</span>
    </div>

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

    <div class="register-link" style="text-align: center; margin-top: 20px">
      <p>
        Bạn đã có tài khoản?
        <router-link class="register-link-text" to="/login">
          Đăng Nhập
        </router-link>
      </p>
    </div>
  </div>

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
  name: "Register",
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    registerUser() {
      // Lấy danh sách người dùng từ localStorage (nếu có)
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // Kiểm tra email đã tồn tại chưa
      const existingUser = users.find((user) => user.email === this.email);

      if (existingUser) {
        // Email đã tồn tại
        this.errorMessage = "Email đã tồn tại. Vui lòng sử dụng email khác.";
        this.successMessage = "";
      } else {
        // Thêm người dùng mới
        const newUser = {
          fullname: this.fullname,
          email: this.email,
          password: this.password,
        };
        users.push(newUser);

        // Lưu danh sách người dùng vào localStorage
        localStorage.setItem("users", JSON.stringify(users));

        // Hiển thị thông báo thành công
        this.successMessage = "Đăng ký thành công!";
        this.errorMessage = "";

        // Reset form
        this.fullname = "";
        this.email = "";
        this.password = "";
      }
    },
  },
};
</script>

<style>
.register-container {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #28a745;
}

.form-group {
  margin-bottom: 15px;
}

.icon-group {
  display: flex;
  align-items: center;
}

.icon-group i {
  margin-right: 10px;
  color: #28a745;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #28a745;
  box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
}

button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #218838;
}

.form-footer {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
}

.form-footer a {
  color: #28a745;
  text-decoration: none;
  font-weight: bold;
}

.form-footer a:hover {
  text-decoration: underline;
}

.divider {
  text-align: center;
  margin: 15px 0;
  position: relative;
}

.divider span {
  background: #f9f9f9;
  padding: 0 10px;
  position: relative;
  z-index: 1;
  font-size: 14px;
  color: #666;
}

.divider::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background: #ccc;
  top: 50%;
  left: 0;
  z-index: 0;
}

.social-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}

.social-buttons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
}

.social-buttons .facebook {
  background-color: #4267b2;
}

.social-buttons .instagram {
  background-color: #e4405f;
}

.social-buttons .google {
  background-color: #db4437;
}

.social-buttons a:hover {
  opacity: 0.8;
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
