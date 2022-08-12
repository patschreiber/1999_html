#!/bin/sh

yarn version --minor --no-git-tag-version
yarn licenses generate-disclaimer > LICENSES.txt
npx webpack --mode=production --config webpack.prod.js
yarn build-docs
