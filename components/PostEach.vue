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
      <div class="left--content 2xl:w-1/5 xl:w-1/6 md:w-1/4 w-full">
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
        <router-link
          :to="getSlug"
          class="
            md:text-3xl
            text-2xl
            font-semibold
            dark:text-gray-200
            hover:underline
          "
        >
          {{ post.title }}
        </router-link>
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
        <p
          class="description mt-6 text-gray-600 dark:text-gray-400 font-medium"
        >
          {{ findPostDescription(post.body) }}
        </p>
        <Label v-if="post.labels.length" :label="post.labels[0]" class="mt-6" />
      </div>
    </div>
  </div>
</template>

<script>
import { post } from '@/mixins/post'
import Label from './Label.vue'

export default {
  name: 'PostEach',
  components: { Label },
  mixins: [post],
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
  },
  computed: {
    getSlug() {
      return this.buildSlug(this.post)
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
    findPostDescription(markdownContent) {
      /**
       * Extract the description of the post from the content.
       *
       * The description will be the first line in the markdown content that starts
       * with [//].
       */
      const matches = this.$findMetaFromComments(markdownContent)

      return matches ? matches[0] : null
    },
  },
}
</script>

<style lang="scss" scoped>
.post--each__container {
  .post--each--content {
    .right--content {
      .description {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;

        @media only screen and (max-width: 768px) {
          -webkit-line-clamp: 4;
        }
      }
    }
  }
}
</style>