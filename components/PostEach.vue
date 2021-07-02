<template>
  <div class="post--each__container">
    <div class="post--each--content py-8 border-b dark:border-gray-700 flex">
      <div class="left--content 2xl:w-1/5 xl:w-1/6 md:w-1/4 pt-1">
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
      <div class="right--content 2xl:w-4/5 xl:w-5/6 md:w-3/4">
        <h1 class="text-3xl font-semibold dark:text-gray-200">
          {{ post.title }}
        </h1>
        <p class="author--name mt-2">
          <span class="text-gray-400 dark:text-gray-600">by</span>
          <a
            rel="noreferrer noopener"
            :href="post.user.html_url"
            target="_blank"
            class="text-gray-600 dark:text-gray-400 font-medium hover:underline"
            >{{ post.user.login }}</a
          >
        </p>
        <div
          v-if="post.labels.length"
          class="label mt-3 py-1 px-2 inline-flex rounded-lg"
          :class="getColorClassForLabel(post.labels[0].color)"
        >
          # {{ post.labels[0].name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { markdownRenderer } from '@/mixins/markdown'
import { labels } from '@/mixins/labels'

export default {
  name: 'PostEach',
  mixins: [markdownRenderer, labels],
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
    getColorClassForLabel(githubColorCode) {
      /**
       * Get the color code mapping for the label as
       * returned by GitHub.
       */
      return this.getColor(githubColorCode)
    },
  },
}
</script>