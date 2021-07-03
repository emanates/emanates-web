<template>
  <div class="post--each__container">
    <div
      class="
        post--each--content
        py-8
        border-b
        dark:border-gray-700
        flex flex-wrap
      "
    >
      <div class="left--content 2xl:w-1/5 xl:w-1/6 md:w-1/4">
        <span
          class="
            date--content
            text-lg text-gray-600
            dark:text-gray-400
            font-medium
          "
          >{{ getReadableDate(post.created_at) }}</span
        >
      </div>
      <div class="right--content 2xl:w-4/5 xl:w-5/6 md:w-3/4 md:mt-0 mt-3">
        <h1 class="md:text-3xl text-2xl font-semibold dark:text-gray-200">
          {{ post.title }}
        </h1>
        <p class="author--name md:mt-3 mt-1">
          <span class="text-gray-400 dark:text-gray-600">by</span>
          <a
            rel="noreferrer noopener"
            :href="post.user.html_url"
            target="_blank"
            class="text-gray-600 dark:text-gray-400 font-medium hover:underline"
            >{{ post.user.login }}</a
          >
        </p>
        <p class="description mt-6 text-gray-600 font-medium">
          {{ findPostDescription(post.body) }}
        </p>
        <Label
          v-if="post.labels.length"
          :label="post.labels[0]"
          class="mt-6 hidden"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Label from './Label.vue'

export default {
  name: 'PostEach',
  components: { Label },
  mixins: [],
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
  },
  methods: {
    getReadableDate(date) {
      /**
       * Parse the date into something more readable by the user.
       */
      return new Date(date).toLocaleDateString('en-US', {
        dateStyle: 'medium',
      })
    },
    extractPostDescription(comment) {
      /**
       * Extract the post description from the comment syntax
       * of markdown. This method is to be called if the comment
       * is found.
       */
      const re = /\(.*?\)/

      // Find just the text first
      const match = comment.match(re)

      // Now remove the braces
      return match[0].replace(/\(|\)/g, '')
    },
    findPostDescription(markdownContent) {
      /**
       * Extract the description of the post from the content.
       *
       * The description will be the first line in the markdown content that starts
       * with [//].
       */
      const re = /\[\/\/\].*?#.*?\(.*?\)/
      const matches = markdownContent.match(re)

      return matches ? this.extractPostDescription(matches[0]) : null
    },
  },
}
</script>