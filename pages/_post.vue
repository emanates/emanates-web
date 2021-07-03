<template>
  <div class="post"></div>
</template>

<script>
export default {
  asyncData({ params }) {
    // Try to extract the issue ID
    const slug = params.post
    const id = slug.split('-').slice(-1)[0]

    // The id would be undefined, if slug is invalid
    // raise error on that.
    /* eslint-disable no-console */
    if (!id) return console.log('Error with slug')

    // Now fetch the post with the id
  },
}
</script>