/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2022-11-08 22:01:10
 * @lastModified  2022-11-08 22:03:08
 * Copyright © www.h7ml.cn All rights reserved
 */

const dayjs = require('dayjs');
const fs = require('fs');
const unzip = require('node-unzip-2');
const shell = require('shelljs');
// 对象深度合并
const deepMerge = (ops1, ops2) => {
  let ops = Object.assign({}, ops1, ops2);
  let keys = Object.keys(ops1);
  keys.forEach((item) => {
    if (typeof ops1[item] === 'object' && !Array.isArray(ops1[item])) {
      ops[item] = Object.assign({}, ops1[item], ops2[item] || {});
    }
  });
  return ops;
};
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 获取当前日期
 * @param format
 * @returns {*}
 */
const getNowDate = (format = 'YYYY-MM-DD') => dayjs().format(format);

/**
 * 判断文件夹是否存在，不存在则创建
 * @param path
 */
const existsSync = (path) => {
  if (!fs.existsSync(path)) {
    console.log(`Directory ${path} doesn't exist, creating directory.`);
    fs.mkdirSync(path, { recursive: true });
  }
};

/**
 * 写入文件
 * @param filePath
 * @param content
 */
const writeFile = (filePath, content) => {
  fs.writeFile(filePath, content, { encoding: 'utf8' }, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(`${filePath} was saved!`);
  });
};

const replacePunctuation = (str) => {
  // 将str中的所有标点符号替换为空格
  const text = str
    .replaceAll(' ', '')
    .replace(/\s+/g, '_')
    .replaceAll(/[`~!@#$%^&*()_\-+<>?:"{},.\/;'[\]]/g, '')
    .replaceAll('- ', '')
    .replaceAll(' ', '')
    .replaceAll('：', '_')
    .replaceAll(' ', '_')
    .replaceAll('、', '_')
    .replaceAll('，', '')
    .replaceAll('（', '')
    .replaceAll('）', '')
    .replaceAll('：', '')
    .replaceAll('：', '')
    .replaceAll('？', '')
    .replaceAll('【', '')
    .replaceAll('】', '')
    .replaceAll('，', '')
    .replaceAll('。', '')
    .replaceAll('、', '')
    .replaceAll('！', '')
    .replaceAll('《', '')
    .replaceAll('》', '')
    .replaceAll('；', '')
    .replaceAll('……', '')
    .replaceAll('‘', '')
    .replaceAll('&', '')
    .replaceAll('—', '')
    .replaceAll('！', '');
  return text;
};

const downloadAndUnzip = async (page, downloadLink, path, dest) => {
  const shellDown = `wget -P ${path} ${downloadLink} ${dest}`;
  console.log('shellDown', shellDown);
  if (shell.exec(shellDown).code !== 0) {
    shell.echo('Error: wget failed');
    shell.exit(1);
  }
  unzip.Extract({ path: path + dest }).on('close', () => {
    console.log('unzip done');
    page.close();
  });
};
// 写入日志文件
const writeLog = async (path, log, filePath = '') => {
  const writePath = filePath.length ? filePath + log : `${path}${log}`;
  const replacePath = writePath.replaceAll('\\log\\', '\\').replaceAll('\\png\\', '\\');
  await fs.access(path, (error) => {
    if (error) writeFile(path, replacePath);
    else {
      fs.appendFile(path, replacePath, (err) => {
        if (err) console.log(err);
        // console.log(`${path} was saved! log: ${replacePath}`);
      });
    }
  });
};
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

/**
 * 导出
 * @type {{existsSync: existsSync, writeFile: writeFile, deepMerge: (function(*, *): any), getRandomInt: (function(*, *): *), getNowDate: (function(string=): *)}}
 */
module.exports = {
  deepMerge,
  getRandomInt,
  getNowDate,
  existsSync,
  writeFile,
  replacePunctuation,
  downloadAndUnzip,
  writeLog,
  autoScroll,
};
