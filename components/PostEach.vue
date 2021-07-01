<template>
  <div class="post--each__container">
    <div class="post--each--content py-6 border-b flex">
      <div class="left--content w-1/6">
        <span class="date--content text-lg text-gray-600 font-medium">{{
          getReadableDate(post.updated_at)
        }}</span>
      </div>
      <div class="right--content w-5/6">
        <h1 class="text-4xl font-semibold">{{ post.title }}</h1>
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