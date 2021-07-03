<template>
  <div class="post"></div>
</template>

<script>
export default {
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
    })

    // Check if error was thrown
    console.log(response.status)

    const json = await response.json()
    return { post: json.data.node }
  },
}
</script>