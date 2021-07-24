<template>
  <div class="post">
    <post-content :post="post" />
  </div>
</template>

<script>
import PostContent from '~/components/PostContent.vue'
export default {
  components: { PostContent },
  async asyncData({ app, $getPost, params }) {
    // Try to extract the issue nodeId
    const slug = params.post
    const nodeId = slug.split('-').slice(-1)[0]

    // The nodeId would be undefined, if slug is invalid
    // raise error on that.
    /* eslint-disable no-console */
    if (!nodeId) return console.log('Error with slug')

    const post = await $getPost(nodeId)

    return { post }
  },
}
</script>