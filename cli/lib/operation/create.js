const inquirer = require("inquirer");
const chalk = require("chalk");
const copy = require('../api/copy');
const path = require('path');
const fs = require('fs');

// module.exports = async (basePath = "./admin") => {
module.exports = async () => {
  const basePath = path.join(__dirname, '../../../')
  console.log(basePath)
  const question = [
    {
      name: "name",
      message: "请输入子项目名称？",
    },
  ];

  // inquirer.prompt(question).then(answer => {
  //   console.log(answer)
  // })

  // 人机交互，详情见 question 文件
  const answer = await inquirer.prompt(question);
  if (answer.name) {
    copy(`${basePath}/template`,`${basePath}/${answer.name}`)
    console.log("🔥创建项目:", answer.name);
    addModule(answer.name)
  }
};

const addModule = moduleName => {
  const submoduleJsonPath = path.join(__dirname, '../../../framework/submodule.json');
  const submoduleJson = fs.readFileSync(submoduleJsonPath);
  const submodule = JSON.parse(submoduleJson);
  submodule.modules.push(moduleName);
  let data = JSON.stringify(submodule);
  fs.writeFileSync(submoduleJsonPath, data);
}
