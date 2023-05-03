const { getBrowser, closeBrowser } = require('../puppeteer/browser.js');
const fs = require('fs').promises;
const path = require('path');
const { base64 } = require('../utils/base64');
const { getNowDate, existsSync, replacePunctuation, writeLog } = require('../utils/index.js');
const { markdownGenerator } = require('../utils/turndown.js');

// 日期格式化
const date = getNowDate();

// 博客文件夹路径
const freePath = path.join(__dirname, './cache/csdn/');
const staticPath = path.join(__dirname, '../../h7ml/posts/csdn/');

// 如果文件夹不存在，创建文件夹
existsSync(freePath);

// 获取文件夹中文件数量
const getFileCount = async (dirPath) => {
  const files = await fs.readdir(dirPath, { encoding: 'utf8' });
  return files.filter((file) => path.extname(file) === '.md').length;
};

// 标签
const csdnTag = [
  '',
  'back-end',
  'web',
  'mobile',
  'lang',
  'java',
  'python',
  'ai',
  'big-data',
  'algo',
  'avi',
  'cloud-native',
  'cloud',
  'advanced-technology',
  'open-source',
  'server',
  'os',
  'hardware',
  'embedded',
  'microsoft',
  'software-engineering',
  'test',
  'sec',
  'telecommunication',
  'design',
  'job',
  'search',
  'devtools',
  'game',
  'harmonyos',
  'blockchain',
  'math',
];

// 获取随机标签
const getRandomTag = () => csdnTag[Math.floor(Math.random() * csdnTag.length)];
const tag = getRandomTag();

// 爬取文章
const scrapeArticle = async (page, host, link, skip) => {
  const reg = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;
  if (!reg.test(link)) {
    link = host + link;
  }
  console.log(`Start to scrape csdn article: ${link} count: ${skip} time: ${getNowDate('YYYY-MM-DD HH:mm:ss')}`);
  await page.goto(link, { timeout: 0 });
  await page.waitForTimeout(1000);
  await page.waitForSelector('h1.title-article');
  const title = replacePunctuation(await page.$$eval('h1.title-article', (els) => els[0].innerText));
  const contentHTML = (await page.$$eval('article.baidu_pl', (els) => els[0].innerHTML)).replace(/<img.*?>/, '');
  const contentText = await page.$$eval('article.baidu_pl', (els) => els[0].innerText);
  await fs.writeFile(`${freePath + base64.encode(title)}.html`, contentHTML, { encoding: 'utf8', flag: 'w' });
  const content = markdownGenerator(`${freePath + base64.encode(title)}.html`);
  const description = `${contentText.replaceAll(' ', '').replaceAll(/\n/g, '').substr(0, 50)}...`;
  const footer = `<div>crawler by <a class="repo-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" href="https://github.com/h7ml/h7ml/blob/vitepress/script/crawler/csdn.js">h7ml</a> Original address <a class="repo-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub" href="${link}">csdn</a><p>${getNowDate(
    'YYYY-MM-DD HH:mm:ss'
  )}</p></div>`;
  const fileOrder = (await getFileCount(staticPath)) + (await getFileCount(freePath));
  const writeInfo = `---\nicon: creative\ndescription: ${description}\nfooter: ${footer}\norder: ${fileOrder} \nstar: ${fileOrder} \ndate: ${date} \nauthor: h7ml \nimage: https://www.h7ml.cn/logo.png \nbanner: https://www.h7ml.cn/logo.png \ncategory: \n  - csdn \n  - ${tag}  \ntag: \n  - csdn \n  - ${tag}  \nshortTitle: ${title} \ntitle: ${title} \nisOriginal: false \nhead: \n  - - meta\n    - name: keywords\n      content: ${description}\n---\n\n${content}`;
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
};

// 主函数
async function main() {
  const browser = await getBrowser();
  const page = await browser.newPage();
  let links = [];

  try {
    // 爬取文章
    const host = 'https://blog.csdn.net';
    const tagPlus = tag === '' ? '' : `nav/${tag}`;
    await page.goto(`${host}/${tagPlus}`, { timeout: 0 });
    await page.waitForTimeout(1000);
    await page.waitForSelector('.Community');
    links = await page.$$eval('.Community .active-blog', (els) =>
      els.map((el) => {
        const $a = el.querySelector('.Community-item-active a');
        if ($a) {
          return $a.getAttribute('href');
        }
      })
    );
    links = links.filter((v) => !!v);
    for (let i = 0; i < links.length; i++) {
      await scrapeArticle(await browser.newPage(), host, links[i], ` ${i + 1}/${links.length} `);
      if (i === links.length - 1) {
        console.log('Crawl csdn success');
        await browser.close();
        await closeBrowser();
      }
    }
  } catch (err) {
    console.log(`Crawl csdn failed ${err}`);
    console.log(err.message);
  }
}

main();
