export const meta = {
    methods: {
        findMetaFromComments(markdownContent) {
            /**
             * The posts can have metadata added in the comments
             * in the body of the markdown.
             * 
             * We will extract them and return them accordingly.
             */
            const re = /\[\/\/\].*?#.*?\(.*?\)/g
            const matches = markdownContent.match(re)

            return matches
        }
    }
}