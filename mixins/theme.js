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

            // Now change the theme
            this.changeDeviceTheme(value);
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
            if (!this.validValues.includes(value)) {
                localStorage.removeItem(this.themeKey);
                return "auto"
            }

            // Finally, if everything is okay, return the value
            return value;
        },
        changeDeviceTheme(preferrance) {
            /**
             * Change the theme of the device based on what the users preferrence was.
             * 
             * If no preferrance was give, we need to set it to auto.
             */
            if (!this.validValues.includes(preferrance)) preferrance = "auto";

            if (preferrance === "auto") preferrance = this.getDeviceTheme();

            // Finally set the theme
            // At this point the value of preferrance should be one of `dark` or `light`
            const bodyClassList = document.querySelector("body").classList;
            const isDark = bodyClassList.includes("dark");

            switch (true) {
                case preferrance === "dark" && !isDark:
                    bodyClassList.add("dark");
                    break
                case preferrance === "light" && isDark:
                    bodyClassList.remove("dark");
                    break
            }
        },
    }
}