<template>
  <div v-if="cover" class="post--cover__container md:py-8 py-2">
    <img :src="cover" alt="post.title" />
  </div>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    cover: {
      type: String,
      required: true,
      default: null,
    },
  },
}
</script>
