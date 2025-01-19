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
              <ul class="navbar-nav d-flex">
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
  <!-- slideshow -->
  <div class="container-fluid">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/hinhnen7.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/images/hinhnen8.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="/images/anh2.webp" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div class="container-fluid mt-5">
    <div class="row">
      <!-- Cột "Về tôi" -->
      <div class="col-sm-4 mb-5">
        <h2 class="text-info mb-3">Giới Thiệu Bản Thân</h2>
        <div class="card blog bg-light">
          <!-- Ảnh đại diện -->
          <img
            id="profileImg"
            src="/images/anh.jpg"
            class="card-img-top rounded-circle"
            alt="Ảnh đại diện"
          />
          <div class="card-body">
            <h3 class="card-title">Giới thiệu bản thân</h3>
            <p>
              <strong>Họ và Tên:</strong>
              <input
                type="text"
                id="fullname"
                class="form-control"
                value="Loading..."
              />
            </p>
            <p>
              <strong>Email:</strong>
              <input
                type="email"
                id="email"
                class="form-control"
                value="Loading..."
              />
            </p>
            <p>
              <strong>Mật Khẩu:</strong>
              <input
                type="password"
                id="password"
                class="form-control"
                value="Loading..."
              />
            </p>
            <!-- Nút tải ảnh -->
            <p>
              <strong>Ảnh đại diện:</strong>
              <input type="file" id="fileInput" class="form-control" />
            </p>
            <button class="btn btn-primary" id="saveBtn">Lưu Thay Đổi</button>
          </div>
        </div>
      </div>

      <!-- Cột "Blog của tôi" -->
      <div class="col-sm-8">
        <div class="row">
          <!-- Bài viết đầu tiên -->
          <div class="container-fluid mt-5">
            <div class="row">
              <div class="col-12">
                <section class="mb-5">
                  <h2 class="text-dark mb-4 text-center">Bài Viết Của Tôi</h2>
                  <div class="row">
                    <div
                      class="col-md-6 mb-4"
                      v-for="(article, index) in articles"
                      :key="index"
                    >
                      <div class="card h-100">
                        <div class="card-body d-flex flex-column">
                          <router-link
                            :to="{
                              name: 'ChiTiet',
                              params: { articleId: article.title },
                            }"
                            style="text-decoration: none"
                          >
                            <h5 class="card-title text-dark">
                              {{ article.title }}
                              <span>
                                <i class="fas fa-comments"></i>
                                {{ article.comments }}
                              </span>
                            </h5>
                            <img
                              :src="article.image"
                              :alt="article.title"
                              class="card-img-top w-100 mb-3"
                              style="height: 350px; object-fit: cover"
                            />
                            <p class="card-text mt-2 text-dark">
                              {{ article.content }}
                            </p>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-4 container">
          <button
            class="btn btn-primary btn-lg mb-5"
            style="width: auto; padding: 10px 30px"
          >
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  </div>
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
document.addEventListener("DOMContentLoaded", function () {
  // Lấy thông tin người dùng hiện tại từ localStorage
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    // Hiển thị thông tin người dùng hiện tại vào các trường input
    document.getElementById("fullname").value =
      currentUser.fullname || "Chưa có thông tin";
    document.getElementById("email").value =
      currentUser.email || "Chưa có thông tin";
    document.getElementById("password").value =
      currentUser.password || "Chưa có thông tin";

    // Hiển thị ảnh đại diện (nếu có)
    document.getElementById("profileImg").src =
      currentUser.profileImg || "/images/anh.jpg";
  } else {
    // Nếu không có người dùng hiện tại, hiển thị thông báo
    alert("Không tìm thấy thông tin người dùng. Vui lòng đăng nhập!");
    // Chuyển hướng về trang đăng nhập (nếu cần)
    window.location.href = "/login";
  }

  // Cập nhật ảnh đại diện khi người dùng chọn ảnh mới
  document
    .getElementById("fileInput")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        // Đọc file ảnh và thay đổi src của img
        reader.onload = function (e) {
          document.getElementById("profileImg").src = e.target.result;
        };

        reader.readAsDataURL(file);
      }
    });

  // Cập nhật thông tin khi nhấn nút "Lưu Thay Đổi"
  document.getElementById("saveBtn").addEventListener("click", function () {
    const updatedUserData = {
      fullname: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      profileImg: document.getElementById("profileImg").src,
    };

    // Lưu thông tin người dùng cập nhật vào localStorage (cập nhật currentUser)
    localStorage.setItem("currentUser", JSON.stringify(updatedUserData));

    // Hiển thị thông báo
    alert("Thông tin đã được lưu!");
  });
});

const articles = [
  {
    title: "Hay Chúng Mình Bỏ Hết Ưu Phiền",
    comments: 16,
    link: "/chitiet",
    image: "/images/haychungminhbohetuuphien.jpg",
    content:
      "Thế giới của tớ chứa đầy nguyên tắc, vườn đào nguyên nơi lòng từ lâu đã chóng úa tàn thành hoang mạc khô cằn...",
  },
  {
    title: "Nghĩ Về Cuộc Đời, Nghĩ Về Tuổi Trẻ",
    comments: 30,
    link: "/chitiet",
    image: "/images/totnghiep.jpg",
    content:
      "Đôi khi cần suy nghĩ thật sâu sắc về giá trị của tuổi trẻ, những gì chúng ta đã trải qua để thấu hiểu bản thân hơn...",
  },
  {
    title: "Giá Trị Vật Chất",
    comments: 28,
    link: "/chitiet",
    image: "/images/giatrivatchat.jpg",
    content:
      "Những giá trị vật chất không chỉ là thứ mà chúng ta sở hữu, mà còn là cách chúng ta tạo dựng cuộc sống...",
  },
  {
    title: "Tuổi Trẻ và Những Chuyến Đi",
    comments: 28,
    link: "/chitiet",
    image: "/images/dulich.jpg",
    content:
      "Những chuyến đi tuổi trẻ mang lại rất nhiều bài học quý giá, những trải nghiệm không thể nào quên...",
  },
];
// Hiển thị thông tin cá nhân
</script>
<style>
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
