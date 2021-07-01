<template>
  <div class="post--each__container">
    <div class="post--each--content py-6 border-b dark:border-gray-700 flex">
      <div class="left--content w-1/6 pt-1">
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
      <div class="right--content w-5/6">
        <h1 class="text-4xl font-semibold dark:text-white">{{ post.title }}</h1>
        <p class="author--name mt-2">
          <span class="text-gray-400 dark:text-gray-600">by</span>
          <span class="text-gray-600 dark:text-gray-400 font-medium">{{
            post.user.login
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostEach',
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
        dateStyle: 'short',
      })
    },
  },
}
</script>