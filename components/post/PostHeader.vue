<template>
  <div class="post--header__container py-12">
    <Label :label="post.labels.edges[0].node" />
  </div>
</template>

<script>
import Label from '../Label.vue'
export default {
  components: { Label },
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
  },
}
</script>