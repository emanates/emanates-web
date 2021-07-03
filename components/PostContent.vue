<template>
  <div class="post--content__container">
    <post-header :post="post" />
    <post-text :post="post" />
  </div>
</template>

<script>
import PostText from './post/PostText.vue'
const { default: PostHeader } = require('./post/PostHeader.vue')

export default {
  components: { PostHeader, PostText },
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
  },
}
</script>