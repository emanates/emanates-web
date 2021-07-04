export const theme = {
    methods: {
        getDeviceTheme() {
            /**
             * Get the users device theme. We need to check if the device
             * theme is dark or light by using CSS.
             */
            const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
            return darkThemeMq.matches ? "dark" : "light";
        },
        isDeviceDarkTheme() {
            /**
             * Check if the device has currently set the theme to dark
             * or light.
             */
            return this.getDeviceTheme().toLowerCase() === "dark";
        }
    }
}