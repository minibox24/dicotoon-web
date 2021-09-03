<template>
  <div class="home">
    <div class="items">
      <span class="title">DicoToon</span>
      <div class="input-wrapper">
        <input
          class="input"
          placeholder="여기에 채널 아이디를 입력하세요"
          v-model="id"
        />
        <img src="@/assets/arrow.svg" class="icon" @click="go" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async go() {
      const res = await fetch(
        `http://localhost:8000/channels/${this.id}/exist`,
        { method: "GET" }
      );

      const data = await res.json();

      if (!data.exist) {
        this.$toast.error(
          `채널 ${this.id}을 찾을 수 없습니다. <vue-router to="/usage">사용법 보기</vue-router>`,
          { duration: 10000 }
        );
      }
    },
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.items {
  width: 90%;
}

.title {
  font-size: 2rem;
  font-weight: 900;
  margin-left: 0.8rem;
  user-select: none;
}

.input-wrapper {
  max-width: 500px;
  width: 100%;
  height: 64px;
  background: white;
  border-radius: 35px;
  box-shadow: #00000012 3px 5px 15px;
  display: flex;
  align-items: center;
}

.input {
  margin-left: 20px;
  width: 90%;
  height: 50px;
  font-size: 25px;
  border: none;
  font-family: "Noto Sans KR", sans-serif;
}

.input:focus {
  outline: none;
}

.icon {
  margin-left: auto;
  margin-right: 20px;
  width: 35px;
  -webkit-user-drag: none;
  cursor: pointer;
}
</style>
