export const theme = {
    data() {
        return {
            themeKey: "preferred-theme",
            validValues: ["light", "dark", "auto"]
        }
    },
    methods: {
        getDeviceTheme() {
            /**
             * Get the users device theme. We need to check if the device
             * theme is dark or light by using CSS.
             * 
             * NOTE: Don't try to do anything if the code is being run on
             * the server side.
             */
            if (!process.client) return "";
            const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
            return darkThemeMq.matches ? "dark" : "light";
        },
        isDeviceDarkTheme() {
            /**
             * Check if the device has currently set the theme to dark
             * or light.
             */
            return this.getDeviceTheme().toLowerCase() === "dark";
        },
        setTheme(value) {
            /**
             * Set the theme and store it to the localStorage so that it
             * can be read whenever the page is laod.
             */
            if (!this.validValues.includes(value)) throw new Error(`Invalid value passed. Should be one of ${this.validValues.join(',')}`);

            // Finally save the theme
            localStorage.setItem(this.themeKey, value)
        },
        getTheme() {
            /**
             * Read the value of the preferred theme from the storage
             * and return it accordingly.
             * 
             * If the value is not present, we will return "auto"
             */
            const value = localStorage.getItem(this.themeKey);

            // Check if value is valid
            if (!value) return "auto"

            // If the value is not valid, remove it from localStorage alltogether
            if (!this.validValues.include(value)) localStorage.removeItem(this.themeKey);

            // Finally, if everything is okay, return the value
            return value;
        },
        changeDeviceTheme() {
            /**
             * Change the theme of the device based on what the users preferrence was.
             * 
             * If no preferrance was give, we need to set it to auto.
             */
            const preferrance = this.getTheme();

            if (preferrance === "auto") {
                // Determine the theme
                this.getDeviceTheme();
            }

        },
    }
}