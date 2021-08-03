const fs = require("fs")

try {
    const configData = fs.readFileSync("../.emanates.yml", "utf8")

    // Parse the yml now.
    return configData
}
catch (err) {
    // Either the file is not present
    // Or the content inside is not valid.

    // Return a default config.
    /* eslint-disable no-console */
    console.warn("No config passed. SEO will suffer!")

    return {

    }
}