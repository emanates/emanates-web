<template>
  <div class="post--content__container">
    <post-header :post="post" />
  </div>
</template>

<script>
const { default: PostHeader } = require('./post/PostHeader.vue')

export default {
  components: { PostHeader },
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
  },
}
</script>