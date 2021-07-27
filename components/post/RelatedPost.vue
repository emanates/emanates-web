<template>
  <div class="related--post__container">
    <div class="related--post--content flex py-4">
      <div class="author text-center 2xl:w-1/12 2xl:mr-3 mr-0 w-1/6">
        <img
          :src="relatedPost.author.avatarUrl"
          width="45"
          alt="Author Avatar"
          :title="relatedPost.author.login"
          class="rounded-full"
        />
      </div>
      <div class="post--details w-5/6">
        <router-link
          :to="getSlug"
          class="md:text-lg text-md font-medium hover:underline dark:text-white"
          >{{ relatedPost.title }}</router-link
        >
        <p class="text-gray-600 dark:text-gray-400 text-sm font-medium mt-2">
          {{
            new Date(relatedPost.createdAt).toLocaleDateString('en-US', {
              dateStyle: 'medium',
            })
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { post } from '@/mixins/post.js'

export default {
  mixins: [post],
  props: {
    relatedPost: {
      type: Object,
      default: null,
      require: true,
    },
  },
  computed: {
    getSlug() {
      /**
       * Get the slug for the current post.
       *
       * We need to pass an object that has title
       * and node_id in it.
       */
      const post = this.relatedPost
      post.node_id = post.id

      return this.buildSlug(post)
    },
  },
}
</script>