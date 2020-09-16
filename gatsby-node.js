// const execa = require("execa")
const { spawn } = require("child_process")

exports.onPostBuild = async () => {
  const PRODUCTION_BRANCH = `master`
  const currentBranch = process.env.BRANCH
  console.log("exports.onPostBuild -> currentBranch", currentBranch)

  // if (currentBranch === PRODUCTION_BRANCH) {
  const child = spawn(`./node_modules/.bin/wrangler`, [`publish`])
  for await (const data of child.stdout) {
    console.log(data.toString())
  }
  // const { stdout } = await execa("./node_modules/.bin/wrangler", ["publish"])

  // console.log(stdout)
  // } else {
  //   console.log(
  //     `Skipping deploy to Cloudflare. On ${currentBranch}. Not on the ${PRODUCTION_BRANCH} production branch.`
  //   )
  // }
}
