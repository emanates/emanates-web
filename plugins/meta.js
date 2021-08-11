function cleanMetaTags(meta) {
    /**
     * We also need to clean them up so that they can
     * be directly used.
     */
    const re = /\(.*?\)/

    // Find just the text first
    const match = meta.match(re)

    // Now remove the braces
    return match[0].replace(/\(|\)/g, '')
}


function findMetaFromComments(markdownContent) {
    /**
     * The posts can have metadata added in the comments
     * in the body of the markdown.
     * 
     * We will extract them and return them accordingly.
     */
    const re = /\[\/\/\].*?#.*?\(.*?\)/g
    const matches = markdownContent.match(re)

    if (!matches) return null;

    return matches.map(element => {
        return cleanMetaTags(element)
    })
}


export default ({ app }, inject) => {
    inject('findMetaFromComments', findMetaFromComments)
}