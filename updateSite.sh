#!/bin/bash

ng build --output-path docs --base-href https://vanillatank.github.io/sentence-builder/
cp ./docs/index.html ./docs/404.html

#rm -R ./docs
#echo 'docs folder deleted'
#mkdir ./docs
#echo 'docs folder created'
#
#cp ./dist/some-project/* ./docs
#echo 'files are copied'

git add .
git commit -m 'update site'
git push
echo 'site is pushed'
