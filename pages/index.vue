<template>
  <div>
    <posts-container :posts="posts" />
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ app, $getPosts }) {
    const posts = await $getPosts()

    return { posts }
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>