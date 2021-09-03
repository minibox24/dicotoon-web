<template>
  <div class="menu">
    <div class="info">
      <span class="title">{{ name }}</span>
      <div class="contributors">
        <div
          class="user-container"
          v-for="(contributor, index) in contributors"
          :key="index"
          :src="contributor.avatar"
        >
          <img class="user-icon" :src="contributor.avatar" />
          <div class="user-tooltip-container">
            <div class="user-tooltip">
              <img class="user-avatar" :src="contributor.avatar" />
              <div class="user-info">
                <span class="user-name">{{ contributor.name }}</span>
                <span class="user-count">{{ contributor.count }}컷</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      contributors: [],
    };
  },
  async mounted() {
    const res = await fetch(
      `http://localhost:8000/channels/${this.$route.params.id}`,
      { method: "GET" }
    ).catch();

    if (res.status !== 200) {
      return this.$router.push("/");
    }

    const data = await res.json();

    this.name = data.name;
    this.contributors = data.contributors;
  },
};
</script>

<style scoped>
.menu {
  padding: 2rem;
}

.title {
  font-size: 3rem;
  font-weight: 900;
}

.contributors {
  display: flex;
  gap: 0.5rem;
}

.user-icon {
  width: 40px;
  border-radius: 50%;
}

.user-tooltip-container {
  position: relative;
  top: 10px;
  left: -80px;
}

.user-tooltip {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  transition: opacity 0.3s;
  z-index: 100;

  width: 250px;
  background: #f2f3f5;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  padding: 1rem;

  display: flex;
}

.user-container:hover .user-tooltip {
  opacity: 1;
  visibility: visible;
}

.user-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.user-info {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.user-name {
  font-weight: 900;
  font-size: 1.2rem;
}

.user-count {
  color: #4f5660;
}
</style>