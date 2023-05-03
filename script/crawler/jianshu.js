const fs = require('fs/promises');
const path = require('path');
const { getBrowser, closeBrowser } = require('../puppeteer/browser.js');
const { base64 } = require('../utils/base64');
const { getNowDate, existsSync, writeFile, replacePunctuation, writeLog } = require('../utils/index.js');
const { markdownGenerator } = require('../utils/turndown');

/**
 * 爬取文章
 * @param {Object} page
 * @param {string} host
 * @param {string} link
 * @param {string} skip
 */
const scrapeArticle = async (page, host, link, skip) => {
  try {
    console.log(
      `Start to scrape jianshu article: ${host + link} count: ${skip}  time: ${getNowDate('YYYY-MM-DD HH:mm:ss')}`
    );
    await page.goto(host + link, { timeout: 0 });
    await page.waitForTimeout(1000);
    await page.waitForSelector('h1._1RuRku');
    const title = replacePunctuation(await page.$$eval('h1._1RuRku', (els) => els[0].innerText));
    const contentHTML = (await page.$$eval('article._2rhmJa', (els) => els[0].innerHTML)).replace(/<img.*?>/, '');
    const contentText = await page.$$eval('article._2rhmJa', (els) => els[0].innerText);
    await fs.writeFile(`${freePath + base64.encode(title)}.html`, contentHTML, { encoding: 'utf8', flag: 'w' });
    const content = markdownGenerator(`${freePath + base64.encode(title)}.html`);
    const description = `${contentText.replaceAll(' ', '').replaceAll(/\n/g, '').substr(0, 50)}...`;
    const footer = `<div>crawler by <a class="repo-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" href="https://github.com/h7ml/h7ml/blob/vitepress/script/crawler/jianshu.js">h7ml</a> Original address <a class="repo-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" href="${
      host + link
    }">jianshu</a><p>${getNowDate('YYYY-MM-DD HH:mm:ss')}</p></div>`;
    const writeInfo = `---\nicon: study\ndescription: ${description}\nfooter: ${footer}\norder: ${fileOrder()} \nstar: ${fileOrder()} \ndate: ${date} \nauthor: h7ml  \nimage: https://www.h7ml.cn/logo.png \nbanner: https://www.h7ml.cn/logo.png \ncategory: \n  - jianshu \n  - ${tag}  \ntag: \n  - jianshu \n  - ${tag}  \nshortTitle: ${title} \ntitle: ${title} \nisOriginal: false \nhead: \n  - - meta\n    - name: keywords\n      content: ${description}\n---\n\n${content}`;
    await fs.writeFile(`${freePath + base64.encode(title)}.md`, writeInfo, { encoding: 'utf8', flag: 'w' });
    const readme = await fs.readFile(`${freePath}README.txt`, 'utf8');
    const updatedData = readme.replace(/date:.*\n/, `date: ${date} \n`);
    const files = await fs.readdir(freePath, { encoding: 'utf8' });
    const filteredFiles = files.filter(
      (file) => path.extname(file) === '.md' && file !== 'README.md' && file !== 'log' && file !== 'png'
    );
    const formattedFiles =
      updatedData + filteredFiles.map((file) => `- [${file.replace('.md', '')}](${file})`).join('\n');
    await fs.writeFile(`${freePath}README.md`, formattedFiles);
    await writeLog(`${freePath}log`, `\\${base64.encode(title)}.md\n`);
    await page.close();
  } catch (err) {
    console.error(
      `Error happened while scraping jianshu article: ${host + link} count: ${skip}  time: ${getNowDate(
        'YYYY-MM-DD HH:mm:ss'
      )} \n`,
      err.message
    );
  }
};

/**
 * 主函数
 */
async function main() {
  try {
    const date = getNowDate();
    const freePath = path.join(__dirname, './cache/jianshu/');
    const staticPath = path.join(__dirname, '../../h7ml/posts/jianshu/');
    const jianshuTag = ['backend', 'frontend', 'ios', 'android', 'intelligence', 'database', 'programdevelopment'];
    const getRandomTag = () => jianshuTag[Math.floor(Math.random() * jianshuTag.length)];
    const browser = await getBrowser();
    const page = await browser.newPage();
    existsSync(freePath);
    let fileOrder = 0;
    let staticOrder = 0;
    const files = await fs.readdir(staticPath, { encoding: 'utf8' });
    staticOrder = files.length;
    const fileNumber = await fs.readdir(freePath, { encoding: 'utf8' });
    fileOrder = staticOrder + fileNumber.length;
    await page.goto(`https://jianshu.com/techareas/${getRandomTag()}`, { timeout: 0 });
    await page.waitForTimeout(1000);
    await page.waitForSelector('.note-list');
    const links = await page.$$eval('.note-list .itemlist-box', (els) =>
      els.map((el) => {
        const $a = el.querySelector('.title');
        if ($a) {
          return $a.getAttribute('href');
        }
      })
    );
    const host = 'https://jianshu.com';
    for (let i = 0; i < links.length; i++) {
      await scrapeArticle(await browser.newPage(), host, links[i], `${i + 1}/${links.length}`);
      if (i === links.length - 1) {
        console.log('Crawl jianshu success');
        await page.close();
        await closeBrowser();
      }
    }
    await browser.close();
  } catch (err) {
    console.error(`Crawl jianshu failed ${err}`);
  }
}

main();
