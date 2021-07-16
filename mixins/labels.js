export const labels = {
    data() {
        return {
            colorMap: {
                "0075ca": "a7f3d0",
                "1089DD": "bfdbfe",
                "FE7584": "fecaca",
                "650646": "ddd6fe"
            }
        }
    },
    methods: {
        getColor(colorCode) {
            /**
             * Get the tailwind class for the color
             * returned by GitHub.
             */
            return Object.keys(this.colorMap).includes(colorCode) ? this.colorMap[colorCode] : colorCode;
        },
    }
}