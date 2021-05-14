const { spawn } = require("../api/process");
module.exports = async (basePath = './admin/framework') => {
  console.log("编译组件....");
  // 安装Framework依赖
  await spawn("npm", ["install"], { cwd: `${basePath}/packages` });

  // Rollup打包
  await spawn("rollup", ["-c"], { cwd: `${basePath}/packages` });

  // 安装模块
  await spawn("sudo", ["npm", "link", "./packages"], {
    cwd: `./admin/framework`,
  });
};
