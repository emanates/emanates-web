/**
 * Handle the utterances related settings etc.
 */

export const utterances = {
    data() {
        return {
            themeMap: {
                auto: 'preferred-color-scheme',
                dark: 'github-dark',
                light: 'github-light',
            },
        }
    },
    methods: {
        changeUtteranceTheme() {
            const message = {
                type: 'set-theme',
                theme: this.getUtteranceTheme,
            }
            const utterances = document.querySelector('iframe')
            // If utterance has not loaded yet
            if (utterances == null) {
                this.waitForUtteranceToLoad()
                return
            }
            // Else change theme
            utterances.contentWindow.postMessage(message, 'https://utteranc.es')
        },
        waitForUtteranceToLoad() {
            // wait for utterances to load and send it's first message.
            addEventListener('message', (event) => {
                if (event.origin !== 'https://utteranc.es') {
                    return
                }
                // Finally update the theme
                this.changeUtteranceTheme()
            })
        },
    },
    computed: {
        getUtteranceTheme() {
            const appTheme = this.$store.state.theme.currentExactTheme
            return Object.keys(this.themeMap).includes(appTheme)
                ? this.themeMap[appTheme]
                : 'github-light'
        },

    },
}