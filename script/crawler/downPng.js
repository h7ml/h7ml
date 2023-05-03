const https = require('https');
const fs = require('fs');
const path = require('path');
const filePath = './info.txt';

// 将下载函数单独提出来，方便维护和重用
function downloadImage(url) {
  const fileName = url.split('/').pop();
  const filePath = path.join(__dirname, '/cache/image/', fileName);
  const file = fs.createWriteStream(filePath);
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        res.pipe(file);
        file.on('finish', () => {
          console.log(`${fileName} downloaded successfully.`);
          file.close();
          resolve();
        });
      })
      .on('error', (err) => {
        console.error(`Error while downloading ${url}: ${err}`);
        // 文件下载失败。写入log文件
        fs.appendFile('./log.txt', `${url}\n`, (err) => {
          if (err) {
            console.error(err);
          }
        });
        reject(err);
      });
    file.on('error', (err) => {
      console.error(`Error while writing ${fileName}: ${err}`);
      reject(err);
    });
  });
}

async function downloadImages(imageLinks) {
  try {
    await Promise.all(imageLinks.map(downloadImage));
    console.log('All images downloaded successfully.');
  } catch (err) {
    console.error('Error while downloading images:', err);
  }
}

function getLinks(filePath) {
  fs.promises
    .readFile(filePath, 'utf8')
    .then((data) => {
      const lines = data.split('\n');
      console.log(lines);
      const regex = /![]((.+?))/;
      const imageLinks = lines.map((line) => regex.exec(line)?.[1]).filter(Boolean);
      downloadImages(imageLinks);
    })
    .catch((err) => {
      console.error(err);
    });
}

getLinks(filePath);
