<template>
  <div class="header">
    <router-link class="url title" to="/">DicoToon</router-link>
    <a
      class="url"
      href="https://discord.com/api/oauth2/authorize?client_id=883295202075344916&scope=bot"
      target="_blank"
    >
      봇 초대
    </a>
    <a class="url" href="https://discord.gg/pbd2xXJ" target="_blank">
      서포트 서버
    </a>
  </div>
</template>

<style scoped>
.header {
  padding: 0.5rem;
  padding-left: 0.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
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
