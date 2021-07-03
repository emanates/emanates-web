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
      return this.renderWithHighlight(this.post.body)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/fonts';

.post--text__container {
  .post--text {
    ::v-deep {
      @apply text-lg;

      p,
      ol,
      ul {
        @apply my-8 leading-relaxed;

        code {
          @apply bg-blue-100 text-blue-600 rounded-md;

          @extend .font-inter;

          padding: 2px 5px;
        }
      }

      ol,
      ul {
        list-style-position: outside;
        list-style-type: decimal;
        margin-left: 20px;
        li {
          @apply my-3;
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
        @apply text-blue-500 font-semibold;

        &:hover {
          @apply underline;
        }
      }

      blockquote {
        @apply border-l-8 border-yellow-300 bg-yellow-100;

        padding: 20px 15px;

        p {
          margin: 0;
        }
      }

      pre {
        @apply my-12 rounded-md;
      }
    }
  }
}
</style>