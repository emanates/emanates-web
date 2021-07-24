<template>
  <div class="related--posts__container border">
    <div class="related--posts__content"></div>
  </div>
</template>

<script>
export default {
  name: 'RelatedPosts',
  props: {
    related: {
      type: Array,
      default: null,
      require: true,
    },
  },
}
</script>