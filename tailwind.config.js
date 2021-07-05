module.exports = {
    theme: {
        extend: {
            colors: {
                darklow: {
                    DEFAULT: "#181818"
                }
            },
        },
    },
    darkMode: 'class',
    variants: {
        extend: {
            opacity: ['disabled']
        }
    },
    plugins: [],
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
            'mixins/labels.js'
        ],
    },
}
