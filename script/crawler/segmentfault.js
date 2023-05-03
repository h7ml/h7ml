const { getBrowser, closeBrowser } = require('../puppeteer/browser.js');
const fs = require('fs').promises;
const path = require('path');
const { getNowDate, existsSync, replacePunctuation } = require('../utils/index.js');
const { markdownGenerator } = require('../utils/turndown');
const { base64 } = require('../utils/base64');

// 日期格式化
const date = getNowDate();

// 博客文件夹路径
const freePath = path.join(__dirname, './cache/segmentfault/');

// 如果文件夹不存在，创建文件夹
existsSync(freePath);

// 获取文件夹中文件数量
const getFileCount = async (dirPath) => {
  const files = await fs.readdir(dirPath, { encoding: 'utf8' });
  return files.filter((file) => path.extname(file) === '.md').length;
};

// 标签
const segmentfaultTag = [
  'frontend',
  'backend',
  'miniprogram',
  'ios',
  'android',
  'toolkit',
  'programmer',
  'ai',
  'cloud',
];

// 获取随机标签
const getRandomTag = () => segmentfaultTag[Math.floor(Math.random() * segmentfaultTag.length)];
const tag = getRandomTag();

// 爬取文章
const saveElementPng = async (url, page, host) => {
  await page.goto(url, { timeout: 0 });
  const images = await page.$$eval('img[loading="lazy"]', (imgElements) =>
    imgElements.map((img) => {
      const src = img.getAttribute('src');
      return /^http(s)?:\/\//.test(src) ? src : `${host}${src}`;
    })
  );

  for (let i = 0; i < images.length; i++) {
    const response = await page.goto(images[i], { timeout: 0 });
    try {
      const filePath = path.join(
        __dirname,
        `../../h7ml/.vuepress/public/assets/${images[i]
          .replace('https://www.segmentfault.com', '')
          .replace('https://segmentfault.com', '')}`
      );
      if (!(await existsSync(filePath))) {
        await fs.mkdir(filePath, { recursive: true });
        await fs.writeFile(`${filePath}.png`, await response.buffer());
      }
      await fs.writeFile(`${filePath}.png`, await response.buffer());
      const logPath = path.join(freePath, 'png');
      await fs.writeFile(`${logPath}/${base64.encode(filePath)}.png\n`, { flag: 'a' });
    } catch (error) {
      console.error(`Error saving image: ${error}`);
    }
  }
};

const scrapeArticle = async (page, host, link, skip) => {
  console.log(
    `Start to scrape segmentfault article: ${host + link} count: ${skip} time: ${getNowDate('YYYY-MM-DD HH:mm:ss')}`
  );
  await page.goto(host + link, { timeout: 0 });
  await page.waitForTimeout(1000);
  await page.waitForSelector('h1.h2');
  const originalTitle = await page.$eval('h1.h2', (el) => el.innerText);
  const title = replacePunctuation(originalTitle);
  let contentHTML = (await page.$eval('article.article-content', (el) => el.innerHTML)).replace(/<img.*?>/, '');
  contentHTML = contentHTML.replace(/(\/img\/[^"]+)/g, '/assets$1.png');
  const contentText = await page.$eval('article.article-content', (el) => el.innerText);
  await fs.writeFile(`${freePath}${base64.encode(title)}.html`, contentHTML, { encoding: 'utf8', flag: 'w' });
  const content = markdownGenerator(`${freePath}${base64.encode(title)}.html`);
  const description = `${contentText.replaceAll(' ', '').replaceAll(/\n/g, '').substr(0, 50)}...`;
  const pageInfo = {
    title,
    base64Title: base64.encode(title),
    description,
    content,
  };
  await saveElementPng(host + link, page, host);
  const footer = `<div>crawler by <a class="repo-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" href="https://github.com/h7ml/h7ml/blob/vitepress/script/crawler/segmentfault.js">h7ml</a> Original address <a class="repo-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" href="${
    host + link
  }">segmentfault</a><p>${getNowDate('YYYY-MM-DD HH:mm:ss')}</p></div>`;
  const fileOrder = await getFileCount(path.join(__dirname, '../../h7ml/posts/segmentfault/'));
  const writeInfo = `---\nicon: hot\ndescription: ${description}\nfooter: ${footer}\norder: ${fileOrder}\nstar: ${fileOrder}\ndate: ${date}\nauthor: h7ml\nimage: https://www.h7ml.cn/logo.png\nbanner: https://www.h7ml.cn/logo.png\ncategory:\n  - segmentfault\n  - ${tag}\ntag:\n  - segmentfault\n  - ${tag}\nshortTitle: ${title}\ntitle: ${title}\nisOriginal: false\nhead:\n  - - meta\n    - name: keywords\n      content: ${description}\n---\n\n${content}`;
  await fs.writeFile(`${freePath}${pageInfo.base64Title}.md`, writeInfo, { encoding: 'utf8', flag: 'w' });
  const readme = await fs.readFile(`${freePath}README.txt`, 'utf8');
  const updatedData = readme.replace(/date:.*\n/, `date: ${date}\n`);
  const files = await fs.readdir(freePath, { encoding: 'utf8' });
  const filteredFiles = files.filter(
    (file) => path.extname(file) === '.md' && file !== 'README.md' && file !== 'log' && file !== 'png'
  );
  const formattedFiles =
    updatedData + filteredFiles.map((file) => `- [${file.replace('.md', '')}](${file})`).join('\n');
  await fs.writeFile(`${freePath}README.md`, formattedFiles, { encoding: 'utf8' });
  const logPath = path.join(freePath, 'log');
  await fs.writeFile(`${logPath}/${base64.encode(title)}.md\n`, { flag: 'a' });
  await page.close();
};

// 主函数
async function main() {
  const browser = await getBrowser();
  const page = await browser.newPage();
  // 获取的链接
  let links = [];
  // articleCount
  const articleCount = 3;
  try {
    await page.goto(`https://segmentfault.com/channel/${tag}`, { timeout: 0 });
    await page.waitForTimeout(1000);
    await page.waitForSelector('.content-list-wrap');
    const host = 'https://segmentfault.com';
    links = await page.$$eval('.content-list-wrap .list-group-item .title', (titles) =>
      titles.slice(0, 3).map((el) => el.getAttribute('href'))
    );
    // 爬取每一项
    for (let i = 0; i < links.length; i++) {
      await scrapeArticle(await browser.newPage(), host, links[i], `${i + 1}/${links.length}`);
    }
    console.log('Crawl segmentfault success');
  } catch (err) {
    console.log(`Crawl segmentfault failed ${err}`);
  } finally {
    await browser.close();
    await closeBrowser();
  }
}

main();
