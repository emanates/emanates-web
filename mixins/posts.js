export const posts = {
    data() {
        return {
            token: process.env.EMANATES_TOKEN,
            repo: process.env.REPO
        }
    },
    methods: {
        getRepoSplitted() {
            /**
             * Get the repository owner and name splitted
             * into different parts so they can be used
             * accordingly.
             */
            const splittedRepo = this.repo.split("/")
            return {
                owner: splittedRepo[0],
                name: splittedRepo[1]
            }
        },
        async getPosts() {
            /**
             * Extract issues from the repo passed in the env.
             * 
             * We need to find all the issues from the repo.
             */
            const URL = `https://api.github.com/repos/${this.repo}/issues`
            const response = await fetch(URL, {
                headers: {
                    Accept: "application/vnd.github.v3+json",
                    Authorization: `token ${this.token}`
                }
            })
            return await response.json()
        },
        async getRelatedPosts(labels) {
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
            const repo = this.getRepoSplitted();

            const qlQuery = `
             query {
                 repository(owner: "${repo.owner}", name: "${repo.name}") {
                     issues(filterBy: {labels: ${labels}}, first:4, orderBy: {field: UPDATED_AT, direction: DESC}) {
                         nodes {
                             ... on Issue {
                                 id
                                 title
                                 createdAt
                                 updatedAt
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

            return response.data.node
        }
    }
}