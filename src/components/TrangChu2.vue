<script setup>
import { ref, onMounted } from "vue";

// Khai báo biến bài viết
const articles = ref([]);

// Khai báo biến kiểm tra trạng thái đăng nhập
const isLoggedIn = ref(false);

// Hàm đăng xuất
const logout = () => {
  // Xóa thông tin người dùng trong localStorage
  // localStorage.removeItem("users");
  // localStorage.removeItem("currentUser");

  // Cập nhật lại trạng thái đăng nhập
  isLoggedIn.value = false;

 
  //  để chuyển về trang chủ
  window.location.href = "/login"; // Điều hướng về trang chủ
};

// Hàm để thêm bài viết vào localStorage
const addArticle = (newArticle) => {
  const storedArticles = localStorage.getItem("articles");
  let currentArticles = [];

  if (storedArticles) {
    currentArticles = JSON.parse(storedArticles);
  }

  // Đảm bảo mỗi bài viết mới có một thuộc tính link
  newArticle.link = "/chitiet"; // Hoặc thiết lập link động theo bài viết
  currentArticles.push(newArticle);

  // Lưu lại danh sách bài viết vào localStorage
  localStorage.setItem("articles", JSON.stringify(currentArticles));

  // Cập nhật danh sách bài viết trong ứng dụng
  articles.value = currentArticles;
};

// Hàm để xóa bài viết từ localStorage
const deleteArticle = (index) => {
  // Lấy danh sách bài viết từ localStorage
  const storedArticles = localStorage.getItem("articles");
  if (storedArticles) {
    let currentArticles = JSON.parse(storedArticles);

    // Xóa bài viết tại vị trí chỉ định
    currentArticles.splice(index, 1);

    // Cập nhật lại dữ liệu trong localStorage
    localStorage.setItem("articles", JSON.stringify(currentArticles));

    // Cập nhật lại danh sách bài viết
    articles.value = currentArticles;
  }
};

// Lấy danh sách bài viết từ localStorage khi trang chủ tải
onMounted(() => {
  const storedArticles = localStorage.getItem("articles");

  // Bài viết mặc định
  const defaultArticles = [
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
    {
      title: "Hãy Sống Hết Mình.",
      comments: 28,
      link: "/chitiet",
      image: "/images/songhetminh.jpg",
      content:
        "Cuộc sống không dài, hãy trân trọng và tận hưởng từng khoảnh khắc để không hối tiếc...",
    },
    {
      title: "Tuổi Trẻ Rực Rỡ.",
      comments: 28,
      link: "/chitiet",
      image: "/images/tinhyeu.jpg",
      content:
        "Cuộc sống không dài, hãy trân trọng và tận hưởng từng khoảnh khắc để không hối tiếc...",
    },
  ];

  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  const user = localStorage.getItem("user");
  if (user) {
    isLoggedIn.value = true;
  }

  // Hiển thị bài viết
  if (storedArticles) {
    const storedData = JSON.parse(storedArticles);

    // Đảm bảo tất cả bài viết đều có thuộc tính link
    articles.value = [
      ...defaultArticles,
      ...storedData.map((article) => ({
        ...article,
        link: article.link || "/chitiet", // Nếu thiếu, gán link mặc định
      })),
    ];
  } else {
    articles.value = defaultArticles;
  }
});
</script>

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

                <li class="nav-item">
                  <a class="nav-link" href="#" @click.prevent="logout">
                    <i class="fa-solid fa-right-from-bracket"></i> Đăng Xuất
                  </a>
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
  <!-- slide show -->
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
  <!-- bài viết hay -->
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <section class="mb-5">
          <h2 class="text-dark mb-4 text-center">Bài Viết Hay</h2>
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

  <!-- Nội dung 2 -->

  <!-- footer -->
  <!-- Footer -->
  <div class="footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h1 class="logo-text"><span>Gia</span>Huy</h1>
        <p></p>
        <div class="contact">
          <span><i class="fa-solid fa-phone-flip"></i> &nbsp;032.957.1615</span>
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

<style scoped>
/* CSS giữ nguyên */
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
  background: white;
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
