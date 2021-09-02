<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: { Header },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;900&display=swap");

#app {
  font-family: "Noto Sans KR", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
