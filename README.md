## Noticias Mexico
[Noticias Mexico](http://www.noticiasmexico.org/)

## News Portal

[![Build Status](https://travis-ci.org/garciadiazjaime/website-news-v2.svg)](https://travis-ci.org/garciadiazjaime/website-news-v2)

## Run project:
a) Install Dependencies

`npm i`

b) Start Server

`npm run dev`

By default server will run on http://localhost:3000

## upload to google cloud bucket

```
gsutil mb gs://news.mintitmedia.com/
gsutil -m rm -r gs://news.mintitmedia.com/*
gsutil -m cp -r ./out/. gs://news.mintitmedia.com/
gsutil iam ch allUsers:objectViewer gs://news.mintitmedia.com/
gsutil web get gs://news.mintitmedia.com
```
