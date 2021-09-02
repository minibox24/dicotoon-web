<template>
  <div class="header">
    <router-link class="url title" to="/">DicoToon</router-link>
    <a class="url" href="#" target="_blank">봇 초대</a>
    <a class="url" href="https://discord.gg/pbd2xXJ" target="_blank">
      서포트 서버
    </a>
  </div>
</template>

<style scoped>
.header {
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.title {
  font-weight: 900;
  font-size: 1.5rem !important;
}

.url {
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
}
</style>
