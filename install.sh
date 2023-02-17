#!/bin/sh

set -e -x

npm install
mkdir -p assets/paige/bootstrap assets/paige/bootstrap-icons assets/paige/katex static/paige/bootstrap static/paige/bootstrap-icons/fonts static/paige/katex

# Bootstrap
/bin/cp node_modules/bootstrap/dist/css/bootstrap.css assets/paige/bootstrap
/bin/cp node_modules/bootstrap/dist/js/bootstrap.bundle.js assets/paige/bootstrap
/bin/cp -R node_modules/bootstrap/js/dist/* static/paige/bootstrap
/bin/cp -R node_modules/bootstrap/scss/* assets/paige/bootstrap

# Bootstrap Icons
/bin/cp node_modules/bootstrap-icons/font/bootstrap-icons.css assets/paige/bootstrap-icons
/bin/cp node_modules/bootstrap-icons/font/bootstrap-icons.scss assets/paige/bootstrap-icons
/bin/cp node_modules/bootstrap-icons/font/fonts/* static/paige/bootstrap-icons/fonts

# Katex
/bin/cp node_modules/katex/contrib/auto-render/auto-render.js assets/paige/katex
/bin/cp node_modules/katex/dist/fonts/* static/paige/katex
/bin/cp node_modules/katex/dist/katex.css assets/paige/katex
/bin/cp node_modules/katex/dist/katex.js assets/paige/katex

rm -rf node_modules
