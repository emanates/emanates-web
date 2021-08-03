<template>
  <div class="post">
    <div
      class="
        post--wrapper
        2xl:w-2/3
        xl:w-3/4
        lg:w-3/4
        md:w-4/5
        w-full
        mr-auto
        ml-auto
      "
    >
      <post-content :post="post" />
    </div>
    <div class="related--wrapper">
      <related-posts
        :related="related"
        class="xl:w-5/6 w-11/12 mr-auto ml-auto"
      />
    </div>
  </div>
</template>

<script>
import RelatedPosts from '~/components/post/RelatedPosts.vue'
import PostContent from '~/components/PostContent.vue'
export default {
  components: { PostContent, RelatedPosts },
  async asyncData({ app, $getPost, params, $getRelatedPosts, error }) {
    // Try to extract the issue nodeId
    const slug = params.post
    const nodeId = slug.split('-').slice(-1)[0]

    // The nodeId would be undefined, if slug is invalid
    // raise error on that.
    /* eslint-disable no-console */
    if (!nodeId) return console.log('Error with slug')

    const post = await $getPost(nodeId)

    if (!post) return error({ statusCode: 404, message: 'Post Not Found' })

    // Once the post is fetched, fetch it's related posts
    // using the nodeId and the labels
    const labelNames = post.labels.edges.map((label) => label.node.name)
    const relatedPosts = await $getRelatedPosts(labelNames, nodeId)

    return { post, related: relatedPosts, slug, labelNames }
  },
  head() {
    return {
      title: `${this.post.title} | `,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        { name: 'robots', content: 'index,follow' },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.labelNames.join(','),
        },
        // Itemprop
        {
          hid: 'itemprop-name',
          itemprop: 'name',
          content: this.post.title,
        },
        {
          hid: 'itemprop-description',
          itemprop: 'description',
          content: '',
        },
        // Twitter stuff
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'twitter-title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter-desc',
          name: 'twitter:description',
          content: '',
        },
        {
          hid: 'twitter-url',
          name: 'twitter:url',
          content: `https://blog.deepjyoti30.dev/${this.slug}`,
        },
        {
          hid: 'twitter-img',
          name: 'twitter:image',
          content: 'https://blog.deepjyoti30.dev/icon.png',
        },
        // Facebook
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title,
        },
        {
          hid: 'fb-url',
          property: 'og:url',
          content: `https://blog.deepjyoti30.dev/${this.slug}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Blog | Deepjyoti Barman',
        },
        {
          hid: 'fb-img',
          property: 'og:image',
          content: 'https://blog.deepjyoti30.dev/icon.png',
        },
        { hid: 'fb-img-type', property: 'og:image:type', content: 'image/png' },
        { hid: 'fb-img-width', property: 'og:image:width', content: '512' },
        { hid: 'fb-img-height', property: 'og:image:height', content: '512' },
      ],
    }
  },
}
</script>