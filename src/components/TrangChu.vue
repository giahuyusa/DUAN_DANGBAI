<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav
          class="navbar navbar-expand-sm navbar-light"
          style="background-color: antiquewhite"
        >
          <div class="container">
            <!-- Logo -->
            <a class="navbar-brand" href="#">
              <img
                src="/src/assets/images/logoanh.jpg"
                alt="Logo"
                style="width: 70px"
                class="rounded-circle"
              />
            </a>

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
                  <a class="nav-link" href="/ASM2/TrangChu.html">
                    <i class="fa-solid fa-list"></i> Trang Chủ
                  </a>
                </li>

                <!-- Dropdown -->
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-user"></i> Tài Khoản
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/ASM2/Login.html"
                        >Đăng Nhập</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="/ASM2/Register.html"
                        >Đăng Ký</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="/ASM2/TrangCaNhan.html"
                        >Trang Cá Nhân</a
                      >
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/ASM2/Post.html">
                    <i class="fa-solid fa-pen"></i> Bài Viết
                  </a>
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
  <div class="container">
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
          <img
            src="/src/assets/images/hinhnen7.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/src/assets/images/hinhnen8.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="/src/assets/images/anh2.webp"
            class="d-block w-100"
            alt="..."
          />
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
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-12">
        <section class="mb-5">
          <h2 class="text-dark mb-3">Bài Viết Hay</h2>
          <div class="row">
            <!-- Bài viết đầu tiên -->
            <div
              class="col-md-6 mb-3"
              v-for="(article, index) in articles"
              :key="index"
            >
              <div class="card">
                <div class="card-body" style="height: 550px">
                  <a :href="article.detailLink" style="text-decoration: none">
                    <h5 class="card-title text-dark">
                      {{ article.title }}
                      <span
                        ><i class="fas fa-comments"></i>
                        {{ article.comments }}</span
                      >
                    </h5>
                    <img
                      :src="article.image"
                      alt=""
                      class="card-img-top w-100"
                      style="height: 350px"
                    />
                    <p class="card-text mt-2 text-dark">
                      {{ article.description }}
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <!-- Các bài viết khác -->
            <div class="col-md-6">
              <div
                class="card mb-3"
                v-for="(article, index) in otherArticles"
                :key="index"
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      :src="article.image"
                      class="img-fluid rounded-start"
                      alt="Image"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{{ article.title }}</h5>
                      <span
                        ><i class="fas fa-comments"></i>
                        {{ article.comments }} bình luận</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="text-align: center; margin-top: 20px">
            <button class="btn btn-primary" @click="loadMore">Xem thêm</button>
          </div>

          <!-- Nội dung 2 -->
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <!-- Tạo Tabs cho đăng ký và đăng nhập -->
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <h2>
                      <a
                        href="#register"
                        class="nav-link active text-info"
                        data-bs-toggle="tab"
                        >Đọc Nhiều</a
                      >
                    </h2>
                  </li>
                  <li class="nav-item">
                    <h2>
                      <a
                        href="#login"
                        class="nav-link text-info"
                        data-bs-toggle="tab"
                        >Xem Nhiều</a
                      >
                    </h2>
                  </li>
                </ul>

                <!-- Nội dung trong tabs -->
                <div class="tab-content mt-4">
                  <div id="register" class="tab-pane show fade active">
                    <!-- Nội dung tabs đọc nhiều -->

                    <div class="card mb-3">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src="/src/assets/images/chuyenxecuocdoi.jpg"
                            class="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">
                              Biết ơn đời, đời sẽ thương ta
                            </h5>
                            <span><i class="fas fa-comments"></i> 30</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card mb-3">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src="/src/assets/images/giatrivatchat.jpg"
                            class="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">
                              10 công dụng bất ngờ từ dầu dừa
                            </h5>
                            <span><i class="fas fa-comments"></i> 15</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mb-3">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src="/src/assets/images/haychungminhbohetuuphien.jpg"
                            class="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">
                              Lợi ích khi ăn rau mỗi ngày
                            </h5>
                            <span><i class="fas fa-comments"></i> 12</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="login" class="tab-pane fade">
                    <!-- Nội dung tabs xem nhiều -->
                    <div class="card mb-3">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src="/src/assets/images/dulich.jpg"
                            class="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">
                              Biết ơn đời, đời sẽ thương ta
                            </h5>
                            <span><i class="fas fa-comments"></i> 30</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mb-3">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src="/src/assets/images/chuyenxecuocdoi.jpg"
                            class="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">
                              9 tác dụng tuyệt vời của quả cam
                            </h5>
                            <span><i class="fas fa-comments"></i> 28</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mb-3">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src="/src/assets/images/nghivecuocdoi.jpg"
                            class="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">
                              10 công dụng bất ngờ từ dầu dừa
                            </h5>
                            <span><i class="fas fa-comments"></i> 15</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card mb-3">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src="/src/assets/images/totnghiep.jpg"
                            class="img-fluid rounded-start"
                            alt="..."
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">
                              Lợi ích khi ăn rau mỗi ngày
                            </h5>
                            <span><i class="fas fa-comments"></i> 12</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-8">
                <section>
                  <h2 class="text-info mb-3 text-center">MV-Hay 2024</h2>
                  <div class="row">
                    <!-- Bài viết đầu tiên -->
                    <div class="col-md-6 mb-3">
                      <div class="card mb-3">
                        <div class="card-body" style="height: 500px">
                          <img
                            src="/src/assets/images/haytraochoanh.jpg"
                            alt=""
                            class="card-img-top w-100"
                            style="height: 300px"
                          />
                          <h5 class="card-title mt-2">Hãy Trao Cho Anh</h5>
                          <p class="card-text">
                            Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi mong một
                            ngày được bay nhảy trên những phương trời mới lạ. Để
                            rồi những cô đơn mê mải, tuổi trẻ ấy mới muốn một
                            nơi để trở về
                          </p>
                        </div>
                      </div>
                      <!-- bài dưới -->
                      <div class="card mb-3">
                        <div class="card-body" style="height: 400px">
                          <img
                            src="/src/assets/images/muonroimasaocon.jpg"
                            alt=""
                            class="card-img-top w-100"
                            style="height: 200px"
                          />
                          <h5 class="card-title mt-2">Muộn Rồi Mà Sao Còn</h5>
                          <p class="card-text">
                            Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi mong một
                            ngày được bay nhảy trên những phương trời mới lạ. Để
                            rồi những cô đơn mê mải, tuổi trẻ ấy mới muốn một
                            nơi để trở về
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- Các bài viết khác -->
                    <div class="col-md-6">
                      <div class="card mb-3">
                        <div class="card-body" style="height: 500px">
                          <img
                            src="/src/assets/images/chungtacuahientai.jpg"
                            alt=""
                            class="card-img-top w-100"
                            style="height: 300px"
                          />
                          <h5 class="card-title mt-3">Chúng Ta Của Hiện Tại</h5>
                          <p class="card-text">
                            Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi mong một
                            ngày được bay nhảy trên những phương trời mới lạ. Để
                            rồi những cô đơn mê mải, tuổi trẻ ấy mới muốn một
                            nơi để trở về.
                          </p>
                        </div>
                      </div>
                      <!-- bài dưới -->
                      <div class="card mb-3">
                        <div class="card-body" style="height: 400px">
                          <img
                            src="/src/assets/images/noinaycoanh.jpg"
                            alt=""
                            class="card-img-top w-100"
                            style="height: 200px"
                          />
                          <h5 class="card-title mt-3">Nơi Này Có Anh</h5>
                          <p class="card-text">
                            Ta xem vạn vật là thầy. Tinh thần học hỏi của ta
                            luôn rộng mở hơn tất cả các người. Ta học hỏi từ tất
                            cả mọi vật, từ cành cây ngọn cỏ đến đám mây trên
                            trời kia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="text-align: center">
                    <button class="btn btn-primary mb-5">Xem thêm</button>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <footer class="footer-light">
                  <div class="container py-4">
                    <div class="row">
                      <!-- About Us Section -->
                      <div class="col-lg-4 col-md-6 mb-4">
                        <h5>About Us</h5>
                        <p>
                          We are committed to delivering the best products and
                          services. Stay connected with us for the latest
                          updates.
                        </p>
                      </div>
                      <!-- Navigation Links -->
                      <div class="col-lg-4 col-md-6 mb-4">
                        <h5>Quick Links</h5>
                        <ul class="footer-links">
                          <li><a href="#">Home</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Services</a></li>
                          <li><a href="#">Contact</a></li>
                        </ul>
                      </div>
                      <!-- Contact Info -->
                      <div class="col-lg-4 col-md-12 mb-4">
                        <h5>Contact Us</h5>
                        <p><i class="fa-solid fa-phone"></i> +1 555 123 456</p>
                        <p>
                          <i class="fa-solid fa-envelope"></i> info@company.com
                        </p>
                        <p>
                          <i class="fa-solid fa-map-marker-alt"></i> 123 Main
                          Street, City
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col text-center">
                        <p>&copy; 2024 Your Company. All rights reserved.</p>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        {
          title: "Hay Chúng Mình Bỏ Hết Ưu Phiền",
          comments: 16,
          image: "/src/assets/images/haychungminhbohetuuphien.jpg",
          description:
            "Thế giới của tớ chứa đầy nguyên tắc, vườn đào nguyên nơi lòng từ lâu đã chóng úa tàn thành hoang mạc khô cằn, kể từ khi có một người tớ hằn xem là tất cả rời bước. Cậu đến như cơn mưa đầu mùa tưới mát cõi lòng mình.",
          detailLink: "/ASM2/ChiTiet.html",
        },
        {
          title: "Hay Chúng Mình Bỏ Hết Ưu Phiền",
          comments: 16,
          image: "/src/assets/images/nghivecuocdoi.jpg",
          description:
            "Thế giới của tớ chứa đầy nguyên tắc, vườn đào nguyên nơi lòng từ lâu đã chóng úa tàn thành hoang mạc khô cằn, kể từ khi có một người tớ hằn xem là tất cả rời bước. Cậu đến như cơn mưa đầu mùa tưới mát cõi lòng mình.",
          detailLink: "/ASM2/ChiTiet.html",
        },
      ],
      otherArticles: [
        {
          title: "Nghĩ Về Cuộc Đời, Nghĩ Về Tuổi Trẻ",
          comments: 30,
          image: "/src/assets/images/totnghiep.jpg",
        },
        {
          title: "Giá Trị Vật Chất",
          comments: 28,
          image: "/src/assets/images/giatrivatchat.jpg",
        },
        {
          title: "Tuổi Trẻ và Những Chuyến Đi",
          comments: 28,
          image: "/src/assets/images/dulich.jpg",
        },
        {
          title: "Hãy Sống Hết Mình",
          comments: 28,
          image: "/src/assets/images/songhetminh.jpg",
        },
      ],
    };
  },
  methods: {
    loadMore() {
      // Logic to load more articles when "Xem thêm" button is clicked
      console.log("Loading more articles...");
    },
  },
};
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
</style>
