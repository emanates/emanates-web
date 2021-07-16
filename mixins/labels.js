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
        isColorPresent(colorCode) {
            /**
             * Check if the color is present in the mapping.
             */
            return Object.keys(this.colorMap).includes(colorCode)
        },
        getColor(colorCode) {
            /**
             * Get the tailwind class for the color
             * returned by GitHub.
             */
            return this.isColorPresent(colorCode) ? this.colorMap[colorCode] : colorCode;
        },
        determineFgColor(colorCode) {
            /**
             * Determine the foreground color based on the passed
             * color code. This is important since some colors
             * might be too dark for a dark foregoround text.
             * 
             * The function is from:
             * https://stackoverflow.com/a/11868398/8091283
             */
            // If the color is in the dictionary, just return black
            if (this.isColorPresent(colorCode)) return "black"

            colorCode = colorCode.replace("#", "");
            const r = parseInt(colorCode.substr(0, 2), 16);
            const g = parseInt(colorCode.substr(2, 2), 16);
            const b = parseInt(colorCode.substr(4, 2), 16);
            const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
            return (yiq >= 128) ? 'black' : 'white';
        }
    }
}