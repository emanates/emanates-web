<template>
  <div class="posts__container md:mb-20 my-12">
    <post-each v-for="(value, id) in posts" :key="id" :post="value" />
  </div>
</template>

<script>
import PostEach from './PostEach.vue'
export default {
  name: 'PostsContainer',
  components: { PostEach },
  props: {
    posts: {
      type: Array,
      require: true,
      default: () => {
        return []
      },
    },
  },
}
</script>