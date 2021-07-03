<template>
  <div class="post--content__container"></div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
  },
}
</script>