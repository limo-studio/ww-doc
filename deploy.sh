#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:limo-studio/ww-doc.git main:gh-pages

cd -
