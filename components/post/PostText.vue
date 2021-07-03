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

<style lang="scss" scoped>
.post--text__container {
  .post--text {
    ::v-deep {
      @apply text-lg;

      p {
        @apply my-8;

        code {
          @apply bg-blue-100 text-blue-600 rounded-md;

          padding: 2px 5px;
        }
      }

      h1,
      h2,
      h3,
      h4 {
        @apply font-bold my-10;
      }

      h1 {
        @apply text-5xl;
      }

      h2 {
        @apply text-4xl;
      }

      h3 {
        @apply text-3xl;
      }

      h4 {
        @apply text-2xl;
      }

      a {
        @apply text-blue-500 underline;
      }
    }
  }
}
</style>