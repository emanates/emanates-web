<template>
  <posts-container />
</template>

<script>
import { posts } from '../mixins/posts'

export default {
  mixins: [posts],
}
</script>