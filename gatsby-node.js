const { spawn } = require("child_process")

exports.onPostBuild = async () => {
  // Your production branch.
  const PRODUCTION_BRANCH = `master`
  // The branch you are currently building in Gatsby Cloud. I'll assume below
  // that you only want to deploy to Cloudflare if it's your production branch
  // that is being built.
  const currentBranch = process.env.BRANCH

  if (currentBranch === PRODUCTION_BRANCH) {
    const child = spawn(`./node_modules/.bin/wrangler`, [`publish`])
    for await (const data of child.stdout) {
      console.log(data.toString())
    }
  } else {
    console.log(
      `Skipping deploy to Cloudflare. ${currentBranch} does not match ${PRODUCTION_BRANCH} production branch.`
    )
  }
}
