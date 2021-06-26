# fanestelaru

[![Netlify Status](https://api.netlify.com/api/v1/badges/66ae402e-05fb-489b-8269-8e022a253f44/deploy-status)](https://app.netlify.com/sites/fanestelaru/deploys)

> Fane Stelaru homepage

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`FAUNADB_SERVER_SECRET`

## Build

To build this project on CI, you will need to have the following environment variables

`FUNCTIONS_SERVER_PORT`

Then run

```bash
  npm run generate
```

