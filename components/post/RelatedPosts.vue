<template>
  <div class="related--posts__container border">
    <div class="related--posts__content"></div>
  </div>
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