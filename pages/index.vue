<template>
  <posts-container :posts="posts" />
</template>

<script>
import { posts } from '../mixins/posts'

export default {
  mixins: [posts],
  data() {
    return {
      posts: [],
    }
  },
  async mounted() {
    this.posts = await this.getPosts()
  },
}
</script>