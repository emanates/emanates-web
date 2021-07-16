<template>
  <div class="post--header__container py-12 text-lg">
    <Label :label="post.labels.edges[0].node" />
    <h1
      class="
        2xl:text-7xl
        md:text-5xl
        text-4xl
        py-8
        font-bold
        2xl:leading-normal
        lg:leading-normal
        md:leading-normal
        leading-snug
        dark:text-gray-100
      "
    >
      {{ post.title }}
    </h1>
    <div class="date flex font-medium dark:text-gray-300">
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
      <div class="separator mx-2">&bull;</div>
      <div class="share--content">
        <share :post="post" />
      </div>
    </div>
    <div class="author flex items-center mt-8 dark:text-gray-300">
      <div class="avatar">
        <img
          :src="post.author.avatarUrl"
          :alt="`${post.author.login} image`"
          class="rounded-full"
          width="55"
        />
      </div>
      <div class="name block ml-4 font-medium">
        <p class="text-xs font-bold text-gray-500 uppercase">Author</p>
        <a
          :href="post.author.url"
          target="_blank"
          rel="noopener noreferrer"
          class="
            text-lg text-gray-800
            dark:text-gray-300
            hover:underline
            font-semibold
          "
        >
          {{ post.author.login }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Label from '../Label.vue'
import Share from './Share.vue'

export default {
  components: { Label, Share },
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