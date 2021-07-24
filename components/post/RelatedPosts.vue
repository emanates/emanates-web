<template>
  <div class="related--posts__container md:pb-12 pb-8">
    <h1 class="text-2xl md:font-semibold font-medium mt-3 mb-3">
      Posts you might like
    </h1>
    <div class="related--posts__content flex justify-around flex-wrap border-t">
      <related-post
        v-for="(value, id) in related"
        :key="id"
        :related-post="value"
        class="md:w-1/3 w-full"
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