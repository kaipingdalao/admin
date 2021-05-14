const inquirer = require("inquirer");
const chalk = require("chalk");
const copy = require('../api/copy')
module.exports = async (basePath = "../../../admin") => {
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
  console.log(answer)
  if (answer.name) {
    copy(`${basePath}/template`,`${basePath}/${answer.name}`)
    console.log("🔥创建项目:", answer.name);
  }


};
