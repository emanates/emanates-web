export const posts = {
    data() {
        return {
            token: process.env.EMANATES_TOKEN,
            repo: process.env.REPO
        }
    },
    methods: {
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
        }
    }
}