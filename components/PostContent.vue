<template>
  <div class="post--content__container">
    <post-header :post="post" class="responsive--post" />
    <cover :post="post" />
    <post-text :post="post" class="responsive--post" />
    <related-posts
      :related="related"
      class="md:w-full w-11/12 mr-auto ml-auto"
    />
  </div>
</template>

<script>
import Cover from './post/Cover.vue'
import PostText from './post/PostText.vue'
import RelatedPosts from './post/RelatedPosts.vue'
const { default: PostHeader } = require('./post/PostHeader.vue')

export default {
  components: { PostHeader, PostText, Cover, RelatedPosts },
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
    related: {
      type: Array,
      default: null,
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.responsive--post {
  @apply 2xl:w-5/6 xl:w-4/5 w-11/12 mr-auto ml-auto;
}
</style>