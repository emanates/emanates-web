export const post = {
    methods: {
        buildSlug: (post) => {
            /**
             * Build the slug for the passed post.
             * 
             * The slug will contain the first three words
             * from the title of the issue and the id of
             * the issue.
             */
            const firstThreeWords = post.title.toLowerCase().split(" ").slice(0, 3);
            firstThreeWords.push(post.id);

            return firstThreeWords.join("-")
        }
    }
}