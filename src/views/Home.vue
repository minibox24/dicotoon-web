<template>
  <div class="home">
    <div class="items">
      <span class="title">DicoToon</span>
      <div class="input-wrapper">
        <input class="input" placeholder="여기에 채널 아이디를 입력하세요" />
        <img src="@/assets/arrow.svg" class="icon" />
      </div>
    </div>
  </div>
</template>

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