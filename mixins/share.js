export const share = {
    data() {
        return {
            selfBase: 'https://blog.deepjyoti30.dev/',
        }
    },
    methods: {
        copyOldSchool(el) {
            /**
             * Copy by creating a text box and selecting and copying
             */
            // Select the element first
            el.select()

            try {
                const status = document.execCommand('copy')
                return status
            } catch (err) {
                /* eslint-disable-next-line no-console */
                console.log('Fallback failed as well :/', err)
            }
        },
        copyUrl(url, el) {
            /**
             * Copy the url of the post to clipboard
             *
             * We have to ways to copy, one would be by using the
             * new API which might now work all the time, thus we
             * need a fallback.
             */
            if (!navigator.clipboard) {
                // Call the fallback
                return this.copyOldSchool(el)
            }

            return navigator.clipboard.writeText(url).then(() => {
                return true
            }, () => {
                return false
            })
        },
        async showNativeShare(title, description, slug) {
            /**
             * Handle the share menu
             *
             * Based on the share menu support we will work
             * distinctly. If share menu is not support, we will
             * just copy the url to the clipboard.
             *
             * Else we will invoke the share menu.
             */
            await navigator.share({
                title,
                url: window.location,
                text: description,
            })
        },
        isNativePresent() {
            /**
             * Check if the native share menu is present or not.
             */
            return Boolean(navigator.share);
        },
        buildTwitterLink(post) {
            /**
             * Build Twitter Link based on the passed post details.
             */
            return `https://twitter.com/intent/tweet?url=${window.location}&text=${post.title}`
        },
        buildLinkedInLink(post) {
            /**
             * Build LinkedIn share link based on the passed post details.
             */
            return `https://www.linkedin.com/sharing/share-offsite/?mini=true&url=${window.location}&title=${post.title}`
        },
        buildFacebookLink(post) {
            /**
             * Build Facebook share link based on the passed post details.
             */
            return `https://www.facebook.com/sharer.php?u=${window.location}`
        },
    },
}