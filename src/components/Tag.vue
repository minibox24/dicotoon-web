<template>
  <div class="tag">
    <img class="cover" :src="image" @click="go" />
    <router-link class="title" :to="to">{{ title }}</router-link>
    <span class="images">{{ images }}컷</span>
  </div>
</template>

<script>
export default {
  props: ["to", "image", "title", "images"],
  methods: {
    go() {
      this.$router.push(this.to);
    },
  },
};
</script>

<style scoped>
.tag {
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

.cover {
  width: 70px;
  height: 40px;
  cursor: pointer;
}

.title {
  margin-left: 1rem;
  text-decoration: none;
  color: black;
}

.title:hover {
  text-decoration: underline;
}

.images {
  margin-left: auto;
}
</style>
