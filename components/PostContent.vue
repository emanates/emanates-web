<template>
  <div class="post--content__container">
    <post-header :post="post" />
    <cover :post="post" />
    <post-text :post="post" />
  </div>
</template>

<script>
import Cover from './post/Cover.vue'
import PostText from './post/PostText.vue'
const { default: PostHeader } = require('./post/PostHeader.vue')

export default {
  components: { PostHeader, PostText, Cover },
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
  },
}
</script>