<template>
  <div class="post--text__container pb-6 mb-12">
    <div class="post--text" v-html="getPostText"></div>
  </div>
</template>

<script>
import Prism from 'prismjs'
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
  mounted() {
    // Run highlight again so the pre tags get the class
    Prism.highlightAll()
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
      ul,
      table {
        @apply my-8 leading-relaxed;

        > code {
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

      table {
        @apply table-auto text-left;

        thead {
          tr {
            th {
              @apply px-2 text-center text-green-500;
            }
          }
        }

        tbody {
          tr {
            @apply border-green-300;

            td {
              @apply px-2 py-2 border border-green-300;
            }

            &:nth-child(even) {
              @apply bg-green-50;
            }

            &:last-child {
              @apply border-b;
            }
            &:first-child {
              @apply border-t;
            }
          }
        }
      }
    }
  }
}
</style>