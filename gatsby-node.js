const { spawn } = require("child_process")

exports.onPostBuild = async () => {
  const PRODUCTION_BRANCH = `master`
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
