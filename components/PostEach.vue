<template>
  <div class="post--each__container">
    <div class="post--each--content py-6">
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
}
</script>