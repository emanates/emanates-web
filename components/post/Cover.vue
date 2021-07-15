<template>
  <div class="post--cover__container"></div>
</template>

<script>
import { meta } from '@/mixins/meta'

export default {
  name: 'Cover',
  mixins: [meta],
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      cover: '',
    }
  },
  mounted() {
    this.extractCover()
  },
  methods: {
    extractCover() {
      /**
       * Extract the post cover from the posts body.
       */
      this.cover = this.findMetaFromComments(this.post.body)
    },
  },
}
</script>
