import YAWN from 'yawn-yaml';
const fs = require("fs")

let internalConfig = {
    seo: {
        site_name: "Blog | Built with Emanates",
        site_description: "Blog built with the mighty Emanates",
        base_url: "",
        logo: ""
    }
}

try {
    const configData = fs.readFileSync("../.emanates.yml", "utf8")

    // Parse the yml now.
    const yawn = new YAWN(configData)
    internalConfig = yawn
}
catch (err) {
    // Either the file is not present
    // Or the content inside is not valid.

    // Return a default config.
    /* eslint-disable no-console */
    console.warn("No config passed. SEO will suffer!")
}

// Finally ready the config to export
const config = internalConfig;

export default ({ app }, inject) => {
    inject('config', () => config)
}