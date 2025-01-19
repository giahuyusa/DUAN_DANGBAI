<script setup>
import TrangChu2 from "./components/TrangChu2.vue";
</script>

<template>
  <div>
    <!-- Chỉ cần một thanh nav từ TrangChu2, không cần phải thêm thêm nav ở đây -->

    <!-- Chỉ có router-view sẽ hiển thị nội dung của các route khác -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
