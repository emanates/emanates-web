export const labels = {
    data() {
        return {
            colorMap: {
                "0075ca": "bg-green-200",
                "1089DD": "bg-blue-200",
                "FE7584": "bg-red-200"
            }
        }
    },
    methods: {
        getColor(colorCode) {
            /**
             * Get the tailwind class for the color
             * returned by GitHub.
             */
            return Object.keys(this.colorMap).includes(colorCode) ? this.colorMap[colorCode] : "bg-yellow-200";
        }
    }
}