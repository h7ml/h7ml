const { exec } = require('child_process');

// const { clean } = require('./clean.js');

/**

 异步执行 shell 命令的函数
 @param {string} cmd - 要执行的 shell 命令
 @return {Promise} - 返回一个 Promise，成功则以命令输出为结果，失败则以错误信息为结果 */ function runShellAsync(cmd) {
  console.log(`开始执行命令：${cmd}`);
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      }
      resolve(stdout);
    });
  });
}

runShellAsync('npm run build')
  .then((stdout) => {
    console.log(`命令执行成功：${stdout}`);
  })
  .catch((stderr) => {
    console.log(`命令执行失败stderr：${stderr}`);
    // 如果上面的命令失败了，则执行命令 npm run clean:crawler && npm run crawler
    // clean().then(() => runShellAsync('npm run crawler'))
    runShellAsync('npm run clean:crawler && npm run crawler')
      .then((stdout) => {
        console.log(`命令执行成功：${stdout}`);
      })
      .catch((stderr) => {
        console.log(`命令执行失败：${stderr}`);
      });
  });
