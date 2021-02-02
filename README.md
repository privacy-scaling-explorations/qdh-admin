![QDH Logo](https://quadratic.page/ballot-box-emoji.png)

# Admin dashboard for [QDH](https://github.com/ksaitor/qdh)

We've based it off an open source headless CMS, called [Strapi](https://strapi.io/)

## How to run Admin panel locally

Clone this repo. Install dependencies by running `yarn` or `npm install`.

```bash
yarn
yarn develop
# or
npm install
npm run develop
```

In the root of the project, copy `.env.example` file and name it `.env`.

Set values for all the missing variables, such as `MONGO_URL`, `ASURE_STORAGE_ACCOUNT_NAME`, `ASURE_CONTAINER_NAME`, `ASURE_KEY`, `ASURE_CONNECTION_STRING` and `ADMIN_JWT_SECRET`, which is just a random secret salt string.


# Deploying

Simplest way to deploy this would be on Heroku or on something like [Dokku](https://github.com/dokku/dokku), just by adding the remote server to the git origin and pushing code to it.

If you'd like to containerize this for Docker, please do so and make a pull request.

Once Strapi is deployed, please don't forget to update `NEXT_PUBLIC_STRAPI_URL` in your [QDH](https://github.com/ksaitor/qdh) frontend deployment.
