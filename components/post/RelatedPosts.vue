<template>
  <div class="related--posts__container">
    <div class="related--posts__content flex justify-around flex-wrap">
      <related-post
        v-for="(value, id) in related"
        :key="id"
        :related-post="value"
        class="border w-1/3"
      />
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