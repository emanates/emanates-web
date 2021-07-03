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
  async asyncData() {
    const token = process.env.EMANATES_TOKEN
    const repo = process.env.REPO

    const URL = `https://api.github.com/repos/${repo}/issues`
    const response = await fetch(URL, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${token}`,
      },
    })
    const posts = await response.json()

    return { posts }
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>