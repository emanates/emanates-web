import marked from "marked";
import Prism from "prismjs";

export const markdownRenderer = {
    data: () => {
        return {
            content: "",
        };
    },
    methods: {
        render(markdown) {
            /**
             * Render method to render the markdown content to HTML.
             */
            return marked(markdown);
        },
        renderWithHighlight(markdown) {
            /**
             * Render the markdown with highglight support.
             */
            return marked(markdown, {
                highlight: (code, language) => {
                    const lang = Object.keys(Prism.languages).includes(language) ? language : "markup";
                    return Prism.highlight(code, Prism.languages[lang])
                }
            })
        },
        readContent(filePath) {
            /**
             * Read the content of the passed file based on
             * the path and accordingly store it in a local
             * variable.
             */
            fetch(filePath)
                .then((response) => {
                    return response.text();
                })
                .then((text) => {
                    this.content = this.enhancedSnarkdown(text);
                });
        },
    },
    computed: {
        getContent() {
            return this.content;
        },
    },
};