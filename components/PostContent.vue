<template>
  <div class="post--content__container">
    <post-header
      :post="post"
      class="2xl:w-5/6 xl:w-4/5 w-full mr-auto ml-auto"
    />
    <cover :post="post" />
    <post-text :post="post" class="2xl:w-5/6 xl:w-4/5 w-full mr-auto ml-auto" />
  </div>
</template>

<script>
import { posts } from '@/mixins/posts'
import Cover from './post/Cover.vue'
import PostText from './post/PostText.vue'
const { default: PostHeader } = require('./post/PostHeader.vue')

export default {
  components: { PostHeader, PostText, Cover },
  mixins: [posts],
  props: {
    post: {
      type: Object,
      require: true,
      default: null,
    },
  },
  async mounted() {
    console.log(
      await this.getRelatedPosts(['devops', 'guide', 'webdev'], this.post.id)
    )
  },
}
</script>