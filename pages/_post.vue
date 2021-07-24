<template>
  <div class="post">
    <div
      class="
        post--wrapper
        2xl:w-2/3
        xl:w-3/4
        lg:w-3/4
        md:w-4/5
        w-full
        mr-auto
        ml-auto
      "
    >
      <post-content :post="post" :related="related" />
    </div>
  </div>
</template>

<script>
import PostContent from '~/components/PostContent.vue'
export default {
  components: { PostContent },
  async asyncData({ app, $getPost, params, $getRelatedPosts }) {
    // Try to extract the issue nodeId
    const slug = params.post
    const nodeId = slug.split('-').slice(-1)[0]

    // The nodeId would be undefined, if slug is invalid
    // raise error on that.
    /* eslint-disable no-console */
    if (!nodeId) return console.log('Error with slug')

    const post = await $getPost(nodeId)

    // Once the post is fetched, fetch it's related posts
    // using the nodeId and the labels
    const labelNames = post.labels.edges.map((label) => label.node.name)
    const relatedPosts = await $getRelatedPosts(labelNames, nodeId)

    return { post, related: relatedPosts }
  },
}
</script>