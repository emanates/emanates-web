<template>
  <div class="post--text__container pb-6 mb-12">
    <div ref="textContent" class="post--text" v-html="getPostText"></div>
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
    this.makeLinksExternal()
  },
  methods: {
    makeLinksExternal() {
      /**
       * Go through all the content and find the links in
       * the content.
       *
       * Make all the links open in a new tab instead of
       * the current tab.
       */
      const matches = this.$refs.textContent.getElementsByTagName('a')
      for (const link of matches) {
        link.target = '_blank'
      }
    },
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
      li,
      table {
        @apply my-8 leading-relaxed;

        > code {
          @apply bg-blue-100 dark:bg-indigo-900 text-blue-600 dark:text-blue-200 rounded-md;

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
        @apply border-black bg-gray-100 dark:border-white dark:bg-black dark:text-gray-300 rounded-sm;

        padding: 20px 15px;
        border-left: 6px solid;

        p {
          margin: 0;

          code {
            @apply dark:bg-gray-800;
          }
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