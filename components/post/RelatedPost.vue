<template>
  <div class="related--post__container">
    <div class="related--post--content flex py-4">
      <div class="author text-center w-1/6">
        <img
          :src="relatedPost.author.avatarUrl"
          width="45"
          alt="Author Avatar"
          class="rounded-full"
        />
      </div>
      <div class="post--details w-5/6">
        <h1 class="text-lg font-medium">{{ relatedPost.title }}</h1>
        <p class="text-gray-600 text-sm font-medium mt-2">
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
export default {
  props: {
    relatedPost: {
      type: Object,
      default: null,
      require: true,
    },
  },
}
</script>