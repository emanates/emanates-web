<template>
  <div>
    <posts-container :posts="posts" />
  </div>
</template>

<script>
export default {
  components: {},
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