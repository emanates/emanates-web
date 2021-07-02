import { snarkdown } from "snarkdown";

export const markdownRenderer = {
    name: "StaticContent",
    props: {
        path: {
            type: String,
            require: true,
        },
    },
    data: () => {
        return {
            content: "",
        };
    },
    methods: {
        enhancedSnarkdown(markdown) {
            /**
             * snarkdown doesn't automatically convert newlines
             *  to paragraph. This is an issue since we cannot style
             * the paragraphs without that.
             *
             * Refer to this issue: https://github.com/developit/snarkdown/issues/11
             * and this: https://github.com/developit/snarkdown/issues/75
             */
            return markdown
                .split(/(?:\r?\n){2,}/)
                .map((l) =>
                    [" ", "\t", "#", "-", "*", ">"].some((char) => l.startsWith(char))
                        ? snarkdown(l)
                        : `<p>${snarkdown(l)}</p>`
                )
                .join("\n");
        },
        readContent() {
            /**
             * Read the content of the passed file based on
             * the path and accordingly store it in a local
             * variable.
             */
            fetch(this.getFilePath)
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
        getFilePath() {
            return this.path;
        },
    },
    mounted() {
        this.readContent();
    },
};