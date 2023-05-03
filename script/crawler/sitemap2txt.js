const fs = require('fs').promises;
const path = require('path');
const sitemapFile = path.join(__dirname, '../../h7ml/.vuepress/dist/');

async function main() {
  try {
    const data = await fs.readFile(sitemapFile + 'sitemap.xml', 'utf8');
    const reg = /<loc>(.*?)<\/loc>/g;
    let result;
    const urls = [];
    while ((result = reg.exec(data)) !== null) {
      urls.push(result[1]);
    }
    const links = urls.join('\n');
    await fs.writeFile(sitemapFile + 'sitemap.txt', links);
    console.log('sitemap.txt saved');
  } catch (error) {
    console.error(error);
  }
}

main();
