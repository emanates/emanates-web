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
      required: true,
      default: null,
      validator: (item) => typeof item === 'string' || item == null,
    },
  },
}
</script>
