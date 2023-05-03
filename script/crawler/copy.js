const fs = require('fs');
const path = require('path');
const random = require('lodash/random');
const { writeFile, getNowDate } = require('../utils');

const date = getNowDate();

function writeReadme(_path, tag) {
  const content = `---
icon: creative
order: 1
author: h7ml
category: ${tag}
tag: ${tag}
title: 前端物语|${tag}
index: false
dir:
  order: 1
date: ${date}
---
`;

  fs.readdir(_path, { encoding: 'utf8' }, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    const filteredFiles = files.filter(
      (file) => path.extname(file) === '.md' && file !== '.gitkeep' && file !== 'README.md'
    );

    const formattedFiles = filteredFiles.map((file) => {
      const fileName = file.replace('.md', '');
      const readme = fs.readFileSync(`${_path}/${file}`, 'utf8');
      const title = readme.trim().split('\n')[25];
      if (fileName && title) return `- [${title.replaceAll('#', '')}](./${fileName})\n`;
    });

    const contentText = `${content}\n${formattedFiles.join('')}`;
    const mdPath = `${_path}/README.md`;

    writeFile(mdPath, contentText.replaceAll(',-', '-'));
  });
}

const copyPath = (src) => {
  try {
    const dist = path.join(__dirname, `../../h7ml/posts/${src.split('cache')[1]}`);
    const tag = path.basename(path.dirname(src));
    fs.rename(src, dist, (err) => {
      if (err) {
        console.log(err.message);
        return;
      }
      writeReadme(path.dirname(dist), tag);
      console.log(`copy ${src} to ${dist} success`);
    });
  } catch (e) {
    console.log(e?.message);
  }
};

const randomPage = (src) => {
  src.forEach((item) => {
    fs.readdir(path.join(__dirname, `cache/${item}`), { encoding: 'utf8' }, (err, files) => {
      if (err) {
        console.error(err);
        return;
      }
      const file = files.filter((f) => f !== 'README.txt' && f !== 'log' && f !== 'png');
      copyPath(path.join(__dirname, `cache/${item}/${file[random(file.length)]}`));
    });
  });
};

const filePath = ['csdn', 'juejin', 'jianshu', 'segmentfault'];
const rdmTag = [filePath[random(0, filePath.length)]];
randomPage(rdmTag);
