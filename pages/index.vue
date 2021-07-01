<template>
  <div>
    <Header />
    <posts-container :posts="posts" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { posts } from '../mixins/posts'

export default {
  components: { Header },
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