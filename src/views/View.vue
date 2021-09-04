<template>
  <div class="view">
    <img class="icon" src="@/assets/back.svg" @click="goBack" />
    <p class="title">{{ name }}</p>
    <div class="content">
      <img
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
  },
};
</script>

<style scoped>
.icon {
  width: 30px;
  margin: 1rem;
}

.title {
  text-align: center;
  font-weight: 900;
  font-size: 3rem;
  margin-top: 0;
}

img {
  width: 690px;
  display: block;
  margin: 1rem auto;
}

@media (max-width: 990px) {
  img {
    width: 100%;
    max-width: 690px;
    margin-top: 1rem;
  }
}
</style>
