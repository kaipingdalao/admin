const fs = require("fs");
const { constants } = require("os");
function copy(src, dst) {
  const paths = fs.readdirSync(src); //同步读取当前目录
  paths.forEach(function (path) {
    const _src = src + "/" + path;
    const _dst = dst + "/" + path;
    fs.stat(_src, function (err, stats) {
      //stats 该对象 包含文件属性
      if (err) throw err;
      if (stats.isFile()) {
        //如果是个文件则拷贝
        const readable = fs.createReadStream(_src); //创建读取流
        const writable = fs.createWriteStream(_dst); //创建写入流
        readable.pipe(writable);
      } else if (stats.isDirectory()) {
        //是目录则 递归
        checkDirectory(_src, _dst, copy);
      }
    });
  });
}
function checkDirectory(src, dst, callback) {
  // 文件
  fs.stat(src, function (err, stats) {
    if (stats.isFile()) {
      //如果是个文件则拷贝
      const readable = fs.createReadStream(src); //创建读取流
      const writable = fs.createWriteStream(dst); //创建写入流
      readable.pipe(writable);
    } else {
      // 目录递归
      fs.access(dst, fs.constants.F_OK, (err) => {
        if (err) {
          fs.mkdirSync(dst);
          callback(src, dst);
        } else {
          callback(src, dst);
        }
      });
    }
  });
}
// const SOURCES_DIRECTORY = "../operation"; //源目录
// checkDirectory(SOURCES_DIRECTORY, "./abc", copy);

module.exports = (src, desc) => checkDirectory(src, desc, copy);
