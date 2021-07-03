<template>
  <div class="post--text__container">
    <div class="post--text" v-html="getPostText"></div>
  </div>
</template>

<script>
import { markdownRenderer } from '~/mixins/markdown'

export default {
  mixins: [markdownRenderer],
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
  },
  computed: {
    getPostText() {
      return this.render(this.post.body)
    },
  },
}
</script>