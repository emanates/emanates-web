module.exports = {
    theme: {
        extend: {
            colors: {},
        },
    },
    darkMode: 'media',
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
