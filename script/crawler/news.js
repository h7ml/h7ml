const Parser = require('rss-parser');
const path = require('path');
const fs = require('fs').promises;
const { base64 } = require('../utils/base64');
const { getNowDate } = require('../utils');

const parser = new Parser();
const date = getNowDate('YYYY-MM-DD');
const freePath = path.join(__dirname, './cache/go/');
const staticPath = path.join(__dirname, '../../h7ml/posts/go/');

async function getFolderLength(path) {
  try {
    const files = await fs.readdir(path);
    return files.length;
  } catch (err) {
    console.error(err);
    return 0;
  }
}

async function main() {
  const CORS_PROXY = 'https://rss.h7ml.cn/gocn';
  const readmeInfo = await fs.readFile(`${freePath}README.txt`, 'utf8');
  const order = await getFolderLength(staticPath);
  try {
    const feed = await parser.parseURL(CORS_PROXY);
    const articles = feed.items.map((entry) => {
      const { title, link, pubDate, content, contentSnippet, guid, isoDate } = entry;
      const footer = `<div>crawler by <a class="repo-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" href="https://github.com/h7ml/h7ml/blob/vitepress/script/crawler/news.js">h7ml</a> Original address <a class="repo-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" href="${link}">Go</a><p>${getNowDate(
        'YYYY-MM-DD HH:mm:ss'
      )}</p></div>`;
      const writeInfo = `---\nicon: study\ndescription: '${title}'\nfooter: ${footer}\norder: ${order} \nstar: ${order} \ndate: ${date} \nauthor: h7ml  \nimage: https://www.h7ml.cn/logo.png \nbanner: https://www.h7ml.cn/logo.png \ncategory: \n  - news \n  - go  \ntag: \n  - news \n  - go  \nshortTitle: '${title}' \ntitle: '${title}' \nisOriginal: false \nhead: \n  - - meta\n    - name: keywords\n      content: '${title}'\n---\n\n${content}`;
      return { title, writeInfo };
    });

    const promises = articles.map(({ title, writeInfo }) => {
      return fs.writeFile(`${freePath + base64.encode(title)}.md`, writeInfo);
    });

    await Promise.all(promises);

    const filteredFiles = articles.map(({ title }) => `- [${title}](${base64.encode(title)}.md)`).join('\n');
    const formattedFiles = `${readmeInfo.replace(/date:.*\n/, `date: ${date} \n`)}${filteredFiles}`;

    await fs.writeFile(`${freePath}README.md`, formattedFiles);
    console.log('Crawl go success');
  } catch (err) {
    console.error(err);
  }
}

main();
