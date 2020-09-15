# Gatsby Cloud & Cloudflare Workers

A barebones example of using [Gatsby Cloud](https://www.gatsbyjs.com/cloud/) to deploy to [Cloudflare Workers](https://workers.cloudflare.com/).

## Setup

- Fork this repository.
- [Add your site to Gatsby Cloud](https://www.gatsbyjs.com/docs/deploying-to-gatsby-cloud/#set-up-an-existing-gatsby-site).
- Set the `CF_ACCOUNT_ID` and `CF_API_TOKEN` [environment variables in Gatsby Cloud](https://www.gatsbyjs.com/cloud/docs/managing-environment-variables/#managing-environment-variables-in-an-existing-site).
  - You can generate a new Cloudflare API token by running `wrangler login` on your local machine.
  - You can retrieve your Cloudflare Account ID on your Cloudflare Workers overview page.
- Watch your Gatsby Cloud site build and deploy to your Cloudflare Workers dev domain.
