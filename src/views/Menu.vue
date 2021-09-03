<template>
  <div class="menu">
    <div class="info">
      <span class="title">{{ name }}</span>
      <div class="infos">
        <div class="about">
          <span class="subtitle">About</span>
          <div class="about-items">
            <div class="about-item">
              <img src="@/assets/time.svg" />
              <span> {{ date }}일 전 시작 </span>
            </div>
            <div class="about-item">
              <img src="@/assets/images.svg" />
              <span>{{ this.all }}컷</span>
            </div>
          </div>
        </div>
        <div class="contributors-container">
          <span class="subtitle">
            Contributors
            <span class="contributors-count">{{ contributors.length }}</span>
          </span>
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
    </div>
    <hr />
    <div class="tags">
      <Tag
        :to="`/channels/${this.$route.params.id}/all`"
        image=""
        title="전체 보기"
        :images="this.all"
      />
    </div>
  </div>
</template>

<script>
import Tag from "@/components/Tag.vue";

export default {
  components: { Tag },
  data() {
    return {
      name: "",
      all: 0,
      thumbnail: null,
      date: null,
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
    this.all = data.all;
    this.thumbnail = data.thumbnail;
    this.date = Math.round(
      (new Date() - new Date(data.startAt)) / (1000 * 3600 * 24)
    );
    this.contributors = data.contributors;
  },
};
</script>

<style scoped>
.menu {
  padding: 2rem;
}

.info {
  display: flex;
}

.title {
  font-size: 3rem;
  font-weight: 900;
}

.infos {
  margin-left: auto;
}

.subtitle {
  font-size: 1.2rem;
}

.about-items {
  margin-top: 0.5rem;
}

.about-item {
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
  gap: 0.2rem;
}

.contributors-container {
  margin-top: 1rem;
}

.contributors-count {
  font-size: 0.8rem;
  background: #eff1f3;
  padding: 0.2rem;
  min-width: 20px;
  border-radius: 2em;
}

.contributors {
  margin-top: 0.5rem;
  width: 240px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.user-icon {
  width: 40px;
  border-radius: 50%;
}

.user-tooltip-container {
  position: relative;
  top: 10px;
  left: -240px;
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
  font-size: 1.4rem;
}

.user-count {
  color: #4f5660;
}

hr {
  border: 1px solid #c9c9c9;
  margin: 1.5rem 0;
}

.tags-hr {
  border: 1px solid #ededed;
  margin: 0.5rem 1rem;
}
</style>