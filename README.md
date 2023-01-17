# News Fest App

This landing page works with [**Bing News Search API**](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/) to get the latest news about
1. Digital economy
2. Entertaiment
3. Business

and stores the information of the users who visit it as long as they register.

## Development stack
<p align="center">
  <a href="https://www.typescriptlang.org" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="180" alt="Nest Logo" /></a>
  <a href="https://es.reactjs.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png" width="200" alt="Nest Logo" /></a>
  <a href="https://es.reactjs.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" width="200" alt="Nest Logo" /></a>
  <a href="https://firebase.google.com/?hl=es" target="blank"><img src="https://avatars.githubusercontent.com/u/1335026?s=280&v=4" width="200" alt="Nest Logo" /></a>
</p>

The main reason this project uses firebase is because it needs to store information about users who leave information.

## Github repo

```
https://github.com/ymoyamac/news-fest.git
```

## Installation

```bash
$ npm install
```

## Enviroment variable

1. Clone __.env.template__ file and rename with __.env__

2. Change the value and add your __firebase__ configuration values and define it in the __.env__ file

3. Take a look at how Vitejs works with [env](https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes) variables

## Running the app

```bash
# build
$ npm run build
```

```bash
# development
$ npm run dev
```
## Local

```
http://localhost:5173/news-fest/
```

## **Docker**

You can find the image in Docker hub as
```
https://hub.docker.com/r/ymoy/newsfest
```

## Pull image

```
docker pull ymoy/newsfest:1.0.0
```

## Run docker image

```bash
docker run --rm -d -p 3000:80/tcp ymoy/newsfest:1.0.0
```