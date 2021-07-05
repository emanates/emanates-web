export const theme = {
    data() {
        return {
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

            // Finally set the theme
            localStorage.setItem("preferred-theme", value)
        }
    }
}