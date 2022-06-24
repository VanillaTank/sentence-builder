#!/bin/bash

ng build --output-path docs --base-href https://vanillatank.github.io/sentence-builder/
cp ./docs/index.html ./docs/404.html #Скопируй и переименуй файл. Хз зачем, так в доке.

git add .
git commit -m 'update site'
git push
echo 'site is updated'
