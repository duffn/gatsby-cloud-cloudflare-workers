const execa = require("execa")

exports.onPostBuild = async () => {
  const { stdout } = await execa("./node_modules/.bin/wrangler", ["publish"])
  console.log("exports.onPostBuild -> stdout", stdout)
}
