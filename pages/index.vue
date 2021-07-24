<template>
  <div class="2xl:w-2/3 xl:w-3/4 lg:w-3/4 md:w-4/5 w-full mr-auto ml-auto">
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