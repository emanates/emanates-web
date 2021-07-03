import marked from "marked";

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