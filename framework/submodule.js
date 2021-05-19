const { resolve } = require('path')
// const path = require('path')
const fs = require('fs')

const submoduleJson = fs.readFileSync('./submodule.json')
const submodule = JSON.parse(submoduleJson)
module.exports = {
  path: resolve(`../${submodule.currentModule}`)
}
