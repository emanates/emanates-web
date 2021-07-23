<template>
  <div class="post">
    <post-content :post="post" />
  </div>
</template>

<script>
import PostContent from '~/components/PostContent.vue'
export default {
  components: { PostContent },
  async asyncData({ params }) {
    // Try to extract the issue nodeId
    const slug = params.post
    const nodeId = slug.split('-').slice(-1)[0]

    // The nodeId would be undefined, if slug is invalid
    // raise error on that.
    /* eslint-disable no-console */
    if (!nodeId) return console.log('Error with slug')

    const qlQuery = `query { node(id: "${nodeId}") {
      ... on Issue {
        title
        author {login, url, avatarUrl}
        body
        createdAt
        updatedAt
        labels (first: 5) {
          edges {
            node {
              name
              color
            }
          }
        }
      }
    } }`
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${process.env.EMANATES_TOKEN}`,
        'Content-Type': 'appliction/json',
      },
      body: JSON.stringify({
        query: qlQuery,
      }),
    }).then((response) => response.json())

    // Check if error was thrown
    // The node value will be null if the nodeId is invalid
    if (response.data.node == null) return console.log('404 error')

    // Inject the nodeId into the response
    response.data.node.id = nodeId
    return { post: response.data.node }
  },
}
</script>