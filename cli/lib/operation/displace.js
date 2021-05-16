const fs = require('fs');
const path = require('path');
const inquirer = require("inquirer");

const submoduleJsonPath = path.join(__dirname, '../../../framework/submodule.json');
const submoduleJson = fs.readFileSync(submoduleJsonPath);
const submodule = JSON.parse(submoduleJson);

const setModule = moduleName => {
  submodule.currentModule = moduleName;
  let data = JSON.stringify(submodule);
  fs.writeFileSync(submoduleJsonPath, data);
}

module.exports = async () => {
  const modules = {};
  submodule.modules.forEach((item, index) => {
    modules[item] = index;
  })
  if (submodule.modules.length === 0) return console.log(
    `
    ================================================
    =                请先创建子项目                  =
    ================================================
    `
  );
  const opt = modules;
  const question = [
    {
      type: "rawlist" /* 选择框 */,
      message: "请选择项目？",
      name: "selectProject",
      choices: Object.keys(opt),
    },
  ];
  const answer = await inquirer.prompt(question);
  setModule(answer.selectProject);
  console.log(
    `
    ================================================
    =                请重新启动项目                  =
    ================================================
    `
  )
}
