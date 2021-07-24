<template>
  <div class="related--posts__container"></div>
</template>

<script>
export default {
  name: 'RelatedPosts',
  props: {
    post: {
      type: Object,
      default: null,
      require: true,
    },
  },
}
</script>