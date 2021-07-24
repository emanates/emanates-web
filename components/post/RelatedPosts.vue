<template>
  <div class="related--posts__container border">
    <div class="related--posts__content">
      <related-post />
    </div>
  </div>
</template>

<script>
const { default: RelatedPost } = require('./RelatedPost.vue')

export default {
  name: 'RelatedPosts',
  components: { RelatedPost },
  props: {
    related: {
      type: Array,
      default: null,
      require: true,
    },
  },
}
</script>