<template>
  <div class="view" :class="isDark ? 'dark' : ''">
    <div class="icons">
      <img class="icon" src="@/assets/back.svg" @click="goBack" />
      <img
        v-if="!isDark"
        class="icon"
        src="@/assets/dark.svg"
        @click="changeMode"
      />
      <img v-else class="icon" src="@/assets/light.svg" @click="changeMode" />
    </div>
    <p class="title">{{ name }}</p>
    <div class="content">
      <img
        class="toon-img"
        :title="index + 1"
        loading="lazy"
        v-for="(image, index) in images"
        :src="image"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      tag: "",
      images: [],
      isDark: false,
    };
  },
  async mounted() {
    const id = this.$route.params.id;

    const infoRes = await fetch(
      `https://pi.minibox.xyz/dicotoon/channels/${id}`,
      {
        method: "GET",
      }
    ).catch();

    if (infoRes.status !== 200) {
      return this.$router.push("/");
    }

    const infoData = await infoRes.json();
    this.name = infoData.name;

    const imagesRes = await fetch(
      `https://pi.minibox.xyz/dicotoon/channels/${id}/images`,
      { method: "GET" }
    ).catch();

    const imagesData = await imagesRes.json();
    this.images = imagesData;
  },
  methods: {
    goBack() {
      this.$router.push(`/channels/${this.$route.params.id}`);
    },
    changeMode() {
      this.isDark = !this.isDark;
    },
  },
};
</script>

<style scoped>
.view {
  transition: 0.25s;
}

.dark {
  background-color: black;
  color: white;
}

.dark .icon {
  filter: invert(1);
}

.icons {
  display: flex;
  margin: 1rem;
  justify-content: space-between;
}

.icon {
  width: 30px;
}

.title {
  text-align: center;
  font-weight: 900;
  font-size: 3rem;
  margin-top: 0;
}

.toon-img {
  width: 690px;
  display: block;
  margin: 1rem auto;
}

@media (max-width: 990px) {
  .toon-img {
    width: 100%;
    max-width: 690px;
    margin-top: 1rem;
  }
}
</style>
