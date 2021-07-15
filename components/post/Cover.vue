<template>
  <div v-if="cover" class="post--cover__container">
    <img :src="cover" alt="post.title" />
  </div>
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
      const meta = this.findMetaFromComments(this.post.body)

      // Check if cover is present
      if (meta != null && meta.length >= 2) this.cover = meta[1]
      else this.cover = null
    },
  },
}
</script>
