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

  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-8">
        <div v-if="article" class="card m-5 border-0 mb-0" style="width: 50rem">
          <h3 class="text-dark text-center">{{ article.title }}</h3>
          <img :src="article.image" class="card-img-top" alt="Bài viết" />
          <div class="card-body">
            <p class="card-text ms-0" style="text-align: justify">
              {{ article.content }}
            </p>
          </div>
        </div>
        <div v-else>
          <p>Bài viết không tồn tại.</p>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="m-5">
          <h4>Bình luận bài viết tại đây</h4>

          <!-- Thông báo nếu chưa đăng nhập -->
          <p v-if="!isLoggedIn" class="text-danger">
            Bạn cần đăng nhập để có thể bình luận.
          </p>

          <!-- Form nhập bình luận -->
          <form v-if="isLoggedIn" @submit.prevent="submitComment">
            <div class="form-group">
              <label for="username">Tên người dùng:</label>
              <input
                type="text"
                v-model="username"
                class="form-control"
                placeholder="Nhập tên của bạn"
                required
                disabled
              />
            </div>

            <div class="form-group">
              <label for="comment">Bình luận:</label>
              <textarea
                v-model="comment"
                rows="5"
                class="form-control"
                placeholder="Nhập bình luận của bạn"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-success text-light mt-2">
              Gửi bình luận
            </button>
          </form>

          <!-- Danh sách bình luận -->
          <h4 class="mt-3">Danh sách các bình luận:</h4>
          <ul>
            <li v-for="(comment, index) in comments" :key="index">
              <b>{{ comment.username }}:</b> {{ comment.content }}
              <span class="text-muted">- {{ comment.time }}</span>
            </li>
          </ul>
        </div>
      </div>
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
<script>
export default {
  name: "ChiTiet",
  data() {
    return {
      fullname: "",
      comment: "",
      comments: [], // Danh sách bình luận
      isLoggedIn: false,
      article: null, // Bài viết chi tiết
      articles: [
        // Mảng chứa các bài viết mặc định
        {
          title: "Hay Chúng Mình Bỏ Hết Ưu Phiền",
          image: "/images/haychungminhbohetuuphien.jpg",
          content:
            "Cuộc sống không phải lúc nào cũng trải đầy hoa hồng. Có những lúc chúng ta phải đối mặt với khó khăn, thất bại, và những thử thách tưởng chừng như không thể vượt qua. Tuy nhiên, chính sự kiên trì và bền bỉ mới là yếu tố giúp chúng ta vượt qua mọi khó khăn. Khi ta kiên trì theo đuổi mục tiêu, dù có phải đối mặt với thất bại nhiều lần, ta học được nhiều bài học quý giá, và mỗi thất bại là một bước tiến gần hơn đến thành công. Kiên trì không chỉ giúp ta đạt được những ước mơ, mà còn rèn luyện ý chí và sự mạnh mẽ trong cuộc sống. Bài viết này sẽ bàn về những câu chuyện truyền cảm hứng về sự kiên trì và tại sao chúng ta cần phải luôn giữ vững niềm tin vào chính mình, dù cuộc sống có khó khăn đến đâu.",
        },
        {
          title: "Nghĩ Về Cuộc Đời, Nghĩ Về Tuổi Trẻ",
          image: "/images/totnghiep.jpg",
          content:
            "Nỗi sợ hãi là một phần không thể thiếu trong cuộc sống của mỗi người. Chúng ta có thể sợ thất bại, sợ không đủ giỏi, sợ mất đi những gì mình yêu quý, hoặc thậm chí là sợ không đạt được những gì mình kỳ vọng. Tuy nhiên, nếu chúng ta để nỗi sợ chi phối, chúng ta sẽ không bao giờ có thể đạt được những điều tốt đẹp trong cuộc sống. Vượt qua nỗi sợ hãi không có nghĩa là loại bỏ nó hoàn toàn, mà là học cách đối diện và chấp nhận nó như một phần của hành trình. Khi chúng ta có thể đối mặt với sợ hãi, chúng ta sẽ thấy cuộc sống trở nên tự do và rộng mở hơn. Bài viết này sẽ chia sẻ về cách nhận diện những nỗi sợ và các bước để vượt qua chúng, giúp bạn sống tự do, mạnh mẽ và tự tin hơn trong mỗi quyết định.",
        },
        {
          title: "Giá Trị Vật Chất",
          image: "/images/giatrivatchat.jpg",
          content:
            "òng biết ơn là một phẩm chất quan trọng giúp mỗi người nhìn nhận cuộc sống theo cách tích cực hơn. Thay vì chỉ tập trung vào những điều mình chưa có, khi ta biết ơn những gì mình đang có, chúng ta sẽ cảm thấy hạnh phúc và hài lòng hơn với hiện tại. Sự biết ơn không chỉ giúp cải thiện tâm trạng mà còn làm phong phú thêm mối quan hệ với những người xung quanh. Khi ta biết ơn những người thân yêu, bạn bè và đồng nghiệp, tình cảm và sự kết nối giữa chúng ta sẽ trở nên gắn bó và bền vững hơn. Bài viết này sẽ chia sẻ về những lợi ích của lòng biết ơn và cách thực hành nó trong cuộc sống hàng ngày. Bạn sẽ học được cách thay đổi thói quen và suy nghĩ để trở thành một người biết ơn, từ đó tạo dựng một cuộc sống hạnh phúc và trọn vẹn hơn.",
        },
        {
          title: "Tuổi Trẻ và Những Chuyến Đi",
          image: "/images/dulich.jpg",
          content:
            "Khi chúng ta có một mục đích rõ ràng trong cuộc sống, mọi việc sẽ trở nên có ý nghĩa hơn. Mục đích không chỉ là một lý do để chúng ta thức dậy mỗi ngày mà còn là động lực giúp chúng ta vượt qua những khó khăn, thử thách. Nếu không có mục đích, chúng ta sẽ dễ dàng cảm thấy mệt mỏi và mất phương hướng. Tuy nhiên, việc xác định được mục đích sống không phải lúc nào cũng dễ dàng, vì nó đòi hỏi sự tự nhận thức và suy nghĩ sâu sắc về những gì mình thực sự muốn và cần trong cuộc đời. Bài viết này sẽ hướng dẫn bạn cách tìm kiếm và xác định mục đích sống, cũng như những bước đi cần thiết để đạt được mục tiêu đó. Khi bạn sống với mục đích và ý nghĩa, bạn sẽ cảm nhận được niềm vui và sự hài lòng trong từng khoảnh khắc của cuộc sống.",
        },
        {
          title: "Hãy Sống Hết Mình.",
          image: "/images/songhetminh.jpg",
          content:
            "Cuộc sống không phải lúc nào cũng trải đầy hoa hồng. Có những lúc chúng ta phải đối mặt với khó khăn, thất bại, và những thử thách tưởng chừng như không thể vượt qua. Tuy nhiên, chính sự kiên trì và bền bỉ mới là yếu tố giúp chúng ta vượt qua mọi khó khăn. Khi ta kiên trì theo đuổi mục tiêu, dù có phải đối mặt với thất bại nhiều lần, ta học được nhiều bài học quý giá, và mỗi thất bại là một bước tiến gần hơn đến thành công. Kiên trì không chỉ giúp ta đạt được những ước mơ, mà còn rèn luyện ý chí và sự mạnh mẽ trong cuộc sống. Bài viết này sẽ bàn về những câu chuyện truyền cảm hứng về sự kiên trì và tại sao chúng ta cần phải luôn giữ vững niềm tin vào chính mình, dù cuộc sống có khó khăn đến đâu.",
        },
        {
          title: "Tuổi Trẻ Rực Rỡ.",
          image: "/images/tinhyeu.jpg",
          content:
            "Trong xã hội hiện đại, chúng ta luôn bị cuốn vào guồng quay công việc, học tập và các trách nhiệm khác, khiến cho cuộc sống trở nên căng thẳng và mệt mỏi. Tuy nhiên, nhiều người lại bỏ qua những điều tuyệt vời trong cuộc sống vì họ quá vội vã. Sống chậm không có nghĩa là lười biếng, mà là cách ta lựa chọn để sống chậm rãi hơn, để dành thời gian tận hưởng những khoảnh khắc bình dị như một buổi sáng đẹp trời, một cuộc trò chuyện thân mật với bạn bè hay một bữa cơm ấm cúng bên gia đình. Bài viết này sẽ khám phá ý nghĩa của việc sống chậm và những lợi ích mà nó mang lại cho sức khỏe tinh thần và thể chất của chúng ta. Chúng ta sẽ tìm hiểu cách thức tạo ra những thói quen sống chậm và cách tận hưởng những điều giản dị trong cuộc sống.",
        },
      ], // Mảng bài viết mặc định
    };
  },
  created() {
    // Kiểm tra trạng thái đăng nhập
    const userData = JSON.parse(localStorage.getItem("currentUser"));
    if (userData && userData.email) {
      this.isLoggedIn = true;
      this.username = userData.fullname;
    }

    // Lấy bình luận từ localStorage
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments) {
      this.comments = storedComments;
    }
// Tìm và hiển thị bài viết được chọn từ trang chủ
    // Lấy articleId từ params
    const articleId = this.$route.params.articleId;

    // Lấy danh sách bài viết từ localStorage
    const storedArticles = JSON.parse(localStorage.getItem("articles"));
    let articleFromLocalStorage = null;

    if (storedArticles) {
      // Tìm bài viết trong mảng articles từ localStorage
      articleFromLocalStorage = storedArticles.find(
        (article) => article.title === articleId
      );
    }

    // Kiểm tra nếu không có bài viết trong localStorage, lấy bài viết từ mảng mặc định
    if (articleFromLocalStorage) {
      this.article = articleFromLocalStorage;
    } else {
      this.article = this.articles.find(
        (article) => article.title === articleId
      );
    }
  },
  methods: {
    submitComment() {
      if (this.comment.trim()) {
        const currentTime = new Date().toLocaleString();
        this.comments.push({
          username: this.username,
          content: this.comment.trim(),
          time: currentTime,
        });
        this.comment = ""; // Reset nội dung bình luận

        // Lưu bình luận vào localStorage
        localStorage.setItem("comments", JSON.stringify(this.comments));
      }
    },
  },
};
</script>

<style>
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
