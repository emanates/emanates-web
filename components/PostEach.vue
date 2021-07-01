<template>
  <div class="post--each__container">
    <div class="post--each--content py-6 border-b-2 flex">
      <div class="left--content">
        {{ getReadableDate(post.updated_at) }}
      </div>
      <h1 class="text-4xl font-semibold">{{ post.title }}</h1>
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