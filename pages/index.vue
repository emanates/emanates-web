<template>
  <div>
    <posts-container :posts="posts" class="md:w-full w-11/12 mr-auto ml-auto" />
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