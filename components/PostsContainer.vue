<template>
  <div class="posts__container">
    <post-each v-for="(valud, id) in posts" :key="id" :post="value" />
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