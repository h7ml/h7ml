/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2022-11-08 09:09:42
 * @lastModified  2022-11-12 15:10:52
 * Copyright © www.h7ml.cn All rights reserved
 */
// usage: node server.js
const { start } = require('pushstate-server');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const open_url_by_browser = require('open-url-by-browser');

const directory = path.join(__dirname, '../h7ml/.vuepress/dist/index.html');
const checkDir = fs.existsSync(directory);
const serverConfig = {
  port: 3030,
  directory: path.join(__dirname, '../h7ml/.vuepress/dist'),
};
const openUrl = `http://localhost:${serverConfig.port}`;

const serverDist = async () => {
  console.log('🚀 服务启动中...');
  await start(serverConfig);
  console.log(`your server is running at ${openUrl}`);
  await open_url_by_browser(openUrl);
};
const startServer = async () => {
  if (checkDir) {
    await serverDist();
  } else {
    console.log('🔥 构建中...');
    exec('npm run build', async (error, stdout, stderr) => {
      if (error) {
        console.error(`执行出错: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      await serverDist();
    });
  }
};

startServer();
