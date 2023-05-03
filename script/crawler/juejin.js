const { getBrowser, closeBrowser } = require('../puppeteer/browser.js');
const fs = require('fs').promises;
const path = require('path');
const { base64 } = require('../utils/base64');
const { getNowDate, existsSync, replacePunctuation, writeLog } = require('../utils/index.js');
const { markdownGenerator } = require('../utils/turndown');

const freePath = path.join(__dirname, './cache/juejin/');
const staticPath = path.join(__dirname, '../../h7ml/posts/juejin/');
const juejinTag = ['recommended', 'backend', 'frontend', 'ios', 'android', 'freebie', 'career', 'ai', 'article'];

async function scrapeArticle(page, host, link, skip) {
  const reg = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;
  if (!reg.test(link)) {
    link = host + link;
  }
  console.log(`Start to scrape juejin article: ${link} count: ${skip}  time: ${getNowDate('YYYY-MM-DD HH:mm:ss')}`);
  await page.goto(link, { timeout: 0 });
  await page.waitForTimeout(1000);
  await page.waitForSelector('h1.article-title');
  const title = replacePunctuation(await page.$$eval('h1.article-title', (els) => els[0].innerText));
  const contentHTML = (await page.$$eval('div.markdown-body', (els) => els[0].innerHTML))
    .replace(/<style>[\s\S]*?<\/style>/g, '')
    .replace(/<style data-highlight="" data-highlight-key="juejin">[\s\S]*?<\/style>/g, '')
    .replace(/<img[^>]*>/g, '');
  const contentText = await page.$$eval('div.markdown-body', (els) => els[0].innerText);

  try {
    await fs.access(freePath);
  } catch (error) {
    await fs.mkdir(freePath);
  }

  const mdPath = `${freePath}${base64.encode(title)}.md`;
  const content = markdownGenerator(`${freePath + base64.encode(title)}.html`);
  const description = `${contentText.replaceAll(' ', '').replaceAll(/\n/g, '').substr(0, 50)}...`;
  const footer = `<div>crawler by <a class="repo-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" href="https://github.com/h7ml/h7ml/blob/vitepress/script/crawler/juejin.js">h7ml</a> Original address <a class="repo-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" href="${link}">juejin</a><p>${getNowDate(
    'YYYY-MM-DD HH:mm:ss'
  )}</p></div>`;
  const writeInfo = `---\nicon: workingDirectory\ndescription: ${description}\nfooter: ${footer}\norder: ${await getFileOrder()} \nstar: ${await getFileOrder()} \ndate: ${date} \nauthor: h7ml  \nimage: https://www.h7ml.cn/logo.png \nbanner: https://www.h7ml.cn/logo.png \ncategory: \n  - juejin \n  - ${tag}  \ntag: \n  - juejin \n  - ${tag}  \nshortTitle: ${title} \ntitle: ${title} \nisOriginal: false \nhead: \n  - - meta\n    - name: keywords\n      content: ${description}\n---\n\n${content}`;

  await Promise.all([
    fs.writeFile(`${freePath}${base64.encode(title)}.html`, contentHTML),
    fs.writeFile(mdPath, writeInfo),
    writeLog(`${freePath}log`, '\\' + `${base64.encode(title)}.md\n`),
  ]);

  const readme = await fs.readFile(`${freePath}README.txt`, 'utf8');
  const updatedData = readme.replace(/date:.*\n/, `date: ${date} \n`);
  const files = await fs.readdir(freePath);
  const filteredFiles = files.filter(
    (file) => path.extname(file) === '.md' && file !== 'README.md' && file !== 'log' && file !== 'png'
  );
  const formattedFiles =
    updatedData + filteredFiles.map((file) => `- [${file.replace('.md', '')}](${file})`).join('\n');
  await fs.writeFile(`${freePath}README.md`, formattedFiles);

  await page.close();
}

async function getFileOrder() {
  try {
    const files = await fs.readdir(staticPath, { encoding: 'utf8' });
    return files.length;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

async function scrapeArticles(browser, tag, links) {
  const pages = await Promise.all(
    links.map((link) => {
      const page = browser.newPage();
      return scrapeArticle(page, 'https://juejin.cn', link);
    })
  );
  await Promise.all(pages);
}

async function main() {
  const browser = await getBrowser();
  const page = await browser.newPage();
  let links = [];

  try {
    // 爬取文章
    await page.goto(`https://juejin.cn/${tag}/?sort=newest`, { timeout: 0 });
    await page.waitForTimeout(5000);
    await page.evaluate(function async() {
      return new Promise((resolve, reject) => {
        let totalHeight = 0;
        let distance = 1200;
        let timer = setInterval(() => {
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            window.scrollTo(0, 0);
            clearInterval(timer);
            resolve();
          }
        }, 1000);
      });
    });
    await page.waitForSelector('.entry-list-container');
    links = await page.$$eval('.entry-list-container .item .entry .content-wrapper .content-main .title-row', (els) =>
      els.map((el) => el.querySelector('.title')?.getAttribute('href')).filter((v) => !!v)
    );
    await scrapeArticles(browser, tag, links);
    console.log('Crawl juejin success');
  } catch (err) {
    console.log(`Crawl juejin failed ${err}`);
    console.error(err.message);
  } finally {
    await browser.close();
    await closeBrowser();
  }
}

main();
