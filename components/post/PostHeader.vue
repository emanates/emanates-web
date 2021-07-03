<template>
  <div class="post--header__container py-12">
    <Label :label="post.labels.edges[0].node" />
    <h1 class="text-7xl py-8 font-bold">
      {{ post.title }}
    </h1>
    <div class="date flex text-lg font-medium">
      <p class="created--at">
        {{
          new Date(post.createdAt).toLocaleDateString('en-US', {
            dateStyle: 'medium',
          })
        }}
      </p>
      <div class="separator mx-2">&bull;</div>
      <p>
        <span class="text-gray-500">Updated</span> {{ getRelativeUpdatedAt }}
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
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
  computed: {
    getRelativeUpdatedAt() {
      return moment(this.post.updatedAt).fromNow()
    },
  },
}
</script>