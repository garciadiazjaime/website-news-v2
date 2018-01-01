# News Portal

[![Build Status](https://travis-ci.org/garciadiazjaime/website-news-v2.svg)](https://travis-ci.org/garciadiazjaime/website-news-v2)

## Run project:
a) Install Dependencies

`yarn`

b) Start Server

`yarn dev`

By default server will run on http://localhost:3000


## Docker commands
docker build -t garciadiazjaime/website-news-v2 .
docker run -d -p 49193:3000 -e 'API_URL=http://api.noticiasmxn.com/' --name news-v2 garciadiazjaime/website-news-v2
docker push garciadiazjaime/website-news-v2

NODE_ENV=production API_URL=http://api.playami.com/ npm start
