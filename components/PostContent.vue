<template>
  <div class="post--content__container">
    <post-header :post="post" class="responsive--post" />
    <cover :cover="cover" />
    <post-text :post="post" class="responsive--post" />
    <comments />
  </div>
</template>

<script>
import Comments from './post/Comments.vue'
import Cover from './post/Cover.vue'
import PostText from './post/PostText.vue'
const { default: PostHeader } = require('./post/PostHeader.vue')

export default {
  components: { PostHeader, PostText, Cover, Comments },
  props: {
    post: {
      type: Object,
      required: true,
      default: null,
    },
    cover: {
      default: null,
      required: true,
      validator: (item) => typeof item === 'string' || item == null,
    },
  },
}
</script>

<style lang="scss" scoped>
.responsive--post {
  @apply 2xl:w-5/6 xl:w-4/5 w-11/12 mr-auto ml-auto;
}
</style>