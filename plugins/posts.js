// Declare the variables
const token = process.env.EMANATES_TOKEN
const repo = process.env.REPO


function getRepoSplitted() {
    /**
     * Get the repository owner and name splitted
     * into different parts so they can be used
     * accordingly.
     */
    const splittedRepo = repo.split("/")
    return {
        owner: splittedRepo[0],
        name: splittedRepo[1]
    }
}

async function getPosts() {
    /**
     * Extract issues from the repo passed in the env.
     * 
     * We need to find all the issues from the repo.
     */
    const URL = `https://api.github.com/repos/${repo}/issues`
    const response = await fetch(URL, {
        headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${token}`
        }
    })
    return await response.json()
}

function getReturnableRelated(posts, postToRemove) {
    /**
     * Filter the passed list to remove the post whose relateds
     * are being fetched.
     * 
     * postToRemove should be a string and it will be the ID of
     * the post.
     * 
     * Once the post is removed (if it is present), return 3 of
     * the first posts.
     */
    return posts.filter(post => post.id !== postToRemove).slice(0, 3)
}


async function getRelatedPosts(labels, postToRemove) {
    /**
     * Get related posts to the passed post.
     * 
     * We will find related based on the labels present on
     * the current post.
     * 
     * We will show 3 related posts so we need to get 4 from
     * GraphQL and then remove the self (if present), else
     * slice to 3 and return.
     */
    const repo = getRepoSplitted();

    // Map every element to be in between quotes
    labels = labels.map(el => `"${el}"`)

    const qlQuery = `
     query {
         repository(owner: "${repo.owner}", name: "${repo.name}") {
             issues(filterBy: {labels: [${labels.join(",")}]}, first:4, orderBy: {field: UPDATED_AT, direction: DESC}) {
                 nodes {
                     ... on Issue {
                         id
                         title
                         createdAt
                         author {
                             login
                             url
                             avatarUrl
                         }
                     }
                 }
             }
         }
     }`
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: `bearer ${token}`,
            'Content-Type': 'appliction/json',
        },
        body: JSON.stringify({
            query: qlQuery,
        }),
    }).then((response) => response.json())

    // Check if error was thrown
    // The node value will be null if the nodeId is invalid
    if (response.data.repository.issues.nodes == null) return null

    return getReturnableRelated(response.data.repository.issues.nodes, postToRemove)
}

async function getPost(nodeId) {
    /**
     * Get the post by using the nodeId passed.
     * 
     * We will use GitHub's GraphQL API to fetch the posts.
     */
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
            Authorization: `bearer ${token}`,
            'Content-Type': 'appliction/json',
        },
        body: JSON.stringify({
            query: qlQuery,
        }),
    }).then((response) => response.json())

    // Check if error was thrown
    // The node value will be null if the nodeId is invalid
    if (response.data.node == null) {
        return null
    }

    // Inject the nodeId into the response
    response.data.node.id = nodeId

    return response.data.node
}

export default ({ app }, inject) => {
    inject('getPosts', async () => await getPosts())
    inject('getRelatedPosts', async (labels, postToRemove) => await getRelatedPosts(labels, postToRemove))
    inject('getPost', async nodeId => await getPost(nodeId))
}

