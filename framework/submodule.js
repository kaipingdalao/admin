const { resolve } = require('path')
// const path = require('path')
const fs = require('fs')

const submoduleJson = fs.readFileSync('./submodule.json')
const submodule = JSON.parse(submoduleJson)
console.log(submodule)
console.log(__dirname)
module.exports = {
  path: resolve('../template')
}
