<template>
  <div class="posts__container">
    <post-each />
  </div>
</template>

<script>
import PostEach from './PostEach.vue'
export default {
  name: 'PostsContainer',
  components: { PostEach },
}
</script>