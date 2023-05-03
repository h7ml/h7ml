// 引入文件系统(fs)和路径(path)模块
const fs = require('fs');
const path = require('path');
// 引入lodash库的random方法
const random = require('lodash/random');
// 引入自定义的工具方法
const { getNowDate, existsSync, writeFile, replacePunctuation, writeLog } = require('../utils/index.js');
// 获取当前日期
const date = getNowDate();

// 获取指定路径下的所有文件，并返回一个Promise对象
const getFileOrder = (dist) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dist, { encoding: 'utf8' }, (err, files) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(files);
    });
  });
};

// 根据传入的路径和标签生成README.md文件
function writeReadme(_path, tag) {
  // README.md文件的内容
  const content = `---
icon: algorithm
order: 1
author: h7ml
category: ${tag}
tag: ${tag}
title: 前端物语|面试物语-${tag}
index: false
dir:
  order: 1
date: 2023-02-24
---
`;
  // 获取指定路径下的所有文件
  fs.readdir(_path, { encoding: 'utf8' }, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    // 将文件更新日期替换为当前日期
    const updatedData = content.replace(/date:.*\n/, `date: ${date} \n`);
    // 过滤文件，只保留扩展名为.md且不是README.md和.gitkeep的文件
    const filteredFiles = files.filter(
      (file) => path.extname(file) === '.md' && file !== '.gitkeep' && file !== 'README.md'
    );
    // 格式化文件名，生成README.md文件中的目录链接
    const formattedFiles = filteredFiles.map((file) => {
      const fileName = file.replace('.md', '');
      const readme = fs.readFileSync(`${_path}/${file}`, 'utf8');
      const title = readme.trim().split('\n')[24];
      // 返回格式化后的目录链接
      if (fileName && title)
        return `- [${title.replaceAll('#', '')}](https://www.h7ml.cn/posts/interview/${tag}/${fileName})\n`;
    });
    // 生成README.md文件的内容
    const contentText = `${updatedData}\n${formattedFiles}`;
    // 指定README.md文件的路径
    const mdPath = `${_path}/README.md`;
    console.log(mdPath);
    // 将生成的README.md文件写入到指定路径
    writeFile(mdPath, contentText.replaceAll(',-', '-'));
    writeRootReadme(_path);
  });
}

async function writeRootReadme() {
  const content = `---
icon: diagram
order: 1
author: h7ml
category: design
tag: design
title: 面试物语
index: false
dir:
  order: 1
date: 2023-02-24
---
`;
  const dist = path.join(__dirname, '../../h7ml/posts/interview');
  const files = await fs.promises.readdir(dist);
  let txt = '';
  for (const file of files) {
    const readmePath = path.join(dist, file, 'README.md');
    try {
      const readmeContent = await fs.promises.readFile(readmePath, 'utf8');
      // 截取第二个---之后的内容
      const readme = readmeContent.trim().split('---')[2];
      txt += '\n' + `- [${file}](https://www.h7ml.cn/posts/interview/${file})` + readme;
    } catch (err) {
      // 如果 README.md 文件不存在或读取出错，忽略该文件，继续处理下一个文件
      txt += '\n' + `- [${file}](https://www.h7ml.cn/posts/interview/${file})` + '\n';
      continue;
    }
  }
  writeFile(path.join(dist, 'README.md'), content + txt);
}

// 复制文件到指定目录下
const copyPath = (src) => {
  try {
    const pathObj = path.parse(src);
    const fileName = pathObj.base;
    const dirName = pathObj.dir;
    // 生成目标路径
    const dist = path.join(__dirname, '../../h7ml/posts/interview', dirName.split('interview')[1], fileName);
    const readme = fs.readFileSync(src, 'utf8');
    const firstLine = readme.trim().split('\n')[0].replace(/#\s+/g, '');
    console.log(`firstLine ${firstLine} `);
    // 获取标签
    const tag = path.basename(dirName);
    const infoPath = path.parse(dist).dir;
    console.log(`tag ${tag} `);
    // 获取文件夹中的所有文件，按照顺序生成front matter，将文件复制到指定路径下，并生成 README 文件
    getFileOrder(infoPath)
      .then((files) => {
        const writeInfo = `---\nicon: question\ndescription: 前端物语|面试物语-${firstLine}\nfooter: ${firstLine}\norder: ${files.length} \nstar: ${files.length} \ndate: ${date} \nauthor: h7ml \nimage: https://www.h7ml.cn/logo.png \nbanner: https://www.h7ml.cn/logo.png \ncategory: \n  - interview \n  - ${tag}  \ntag: \n  - interview \n  - ${tag}  \nshortTitle: 前端物语|面试物语-${firstLine} \nisOriginal: false \nhead: \n  - - meta\n    - name: keywords\n      content: ${firstLine}\n---\n\n${readme}`;
        writeFile(dist, writeInfo);
        console.log(`writeFile ${dist} success`);
        fs.unlinkSync(src);
        console.log(`src ${src} copy to dist ${dist} success`);
        writeReadme(infoPath, tag);
        console.log(`writeReadme ${infoPath} success`);
      })
      .catch((err) => {
        console.error(`getFileOrder error ${err} `);
      });
  } catch (e) {
    console.error(`copyPath error ${e} `);
  }
};
// 随机选择一个文件并将其复制到指定目录下
const randomPage = (src) => {
  console.log(`randomPage ${src} `);
  src.forEach((item) => {
    const dir = path.join(__dirname, `cache/interview/`, `${item}`);
    fs.readdir(dir, { encoding: 'utf8' }, (err, files) => {
      if (err) {
        console.error(err);
        return;
      }
      const file = files.filter((f) => f !== 'README.txt' && f !== 'log' && f !== 'png');
      copyPath(path.join(__dirname, `cache/interview/`, `${item}/${file[random(file.length)]}`));
    });
  });
};

// 读取指定目录下的所有文件夹名字，并返回一个promise
const getInterviewDir = (_path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(_path, { encoding: 'utf8' }, (err, files) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(files);
    });
  });
};
// 设置路径
const _path = path.join(__dirname, 'cache/interview');
// const _path = path.join(__dirname, '../../h7ml/designPattern');
// 读取指定路径下的所有文件夹，并随机选取一个文件夹下的文件
getInterviewDir(_path)
  .then((filePath) => {
    // const str = [];
    // filePath.forEach((item) => {
    //     str.push(item.replace('.md', ''))
    // })
    // console.log(str);
    // console.log(filePath);
    const tag = [filePath[random(0, filePath.length)]];
    if (tag.length) {
      randomPage(tag);
      console.log(`start copy ${tag} file`);
    } else {
      console.log('no file');
    }
  })
  .catch((err) => {
    console.error(`copy file error: ${err}`);
  });
