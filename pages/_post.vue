<template>
  <div class="post"></div>
</template>

<script>
export default {
  asyncData({ params }) {
    // Try to extract the issue nodeId
    const slug = params.post
    const nodeId = slug.split('-').slice(-1)[0]

    // The nodeId would be undefined, if slug is invalid
    // raise error on that.
    /* eslint-disable no-console */
    if (!nodeId) return console.log('Error with slug')
  },
}
</script>