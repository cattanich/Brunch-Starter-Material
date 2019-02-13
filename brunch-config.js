// See http://brunch.io for documentation.

module.exports = {
    // paths: {
    //     watched: ['src']
    // },

    npm: {
        globals: {
            $: 'jquery',
            Popper: 'popper.js',
        }
    },
    files: {
        javascripts: {
            joinTo: {
                'scripts/sitio.js': /^app/,
                'scripts/vendor.js': /^node_modules/

            }
        },
        stylesheets: {
            joinTo: {
                // "styles/sitio.css": /^app/,
                // "styles/vendor.css": /^(?!app)/
                "styles/sitio.css": /sitio.scss/,
                "styles/vendor.css": /vendor.scss/
            }
        },
    },
    modules: {
        autoRequire: {
            // outputFileName : [ entryModule ]
            'scripts/sitio.js': ['initialize']
        }
    },
    plugins: {
        postcss: {
            options: {
                parser: require('postcss-scss'),
            },
            processors: require('autoprefixer')(['last 8 versions'])
        },
        browserSync: {
            // proxy: "http://localhost/wpnewparcel/",
            // proxy: "http://localhost/digicatt/",
            // logLevel: "debug",
            // open: true,
            // watch: false
        },
        cleancss: {
            specialComments: 0,
            removeEmpty: true
        },
        // css: {
        //     modules: true
        // },
        assetsmanager: {
            copyTo: {
                'styles/fonts': ['node_modules/@fortawesome/fontawesome-free/webfonts/*'],
                'styles/fonts/material': ['node_modules/material-design-icons/iconfont/*'],
                'images': ['node_modules/preloader-js/assets/images/*']
            }
        }
    }
};
