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
      @apply md:text-lg text-base dark:text-gray-200;

      p,
      ol,
      ul,
      table {
        @apply my-8 leading-relaxed md:font-normal font-medium;

        > code {
          @apply bg-blue-100 dark:bg-blue-300 text-blue-600 dark:text-blue-700 rounded-md;

          @extend .font-inter;

          padding: 2px 5px;
        }
      }

      ol,
      ul {
        list-style-position: outside;
        list-style-type: decimal;
        margin-left: 40px;
        li {
          @apply my-1;
        }
      }

      h1,
      h2,
      h3,
      h4 {
        @apply font-bold my-10;
      }

      h1 {
        @apply md:text-5xl text-4xl;
      }

      h2 {
        @apply md:text-4xl text-2xl;
      }

      h3 {
        @apply md:text-3xl text-xl;
      }

      h4 {
        @apply md:text-2xl text-lg;
      }

      a {
        @apply text-blue-500 dark:text-blue-400 font-semibold;

        &:hover {
          @apply underline;
        }
      }

      blockquote {
        @apply border-l-8 border-yellow-300 bg-yellow-100 dark:border-yellow-400 dark:bg-yellow-200 dark:text-gray-800;

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

      img {
        @apply rounded-md;
      }
    }
  }
}
</style>