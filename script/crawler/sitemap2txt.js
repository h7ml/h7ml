import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

// 获取当前模块的文件路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前模块的目录路径
const __dirname = path.dirname(__filename);

const sitemapFile = path.join(__dirname, '../../h7ml/.vuepress/dist/');

async function main() {
    try {
        const data = await readFile(path.join(sitemapFile, 'sitemap.xml'), 'utf8');
        const reg = /<loc>(.*?)<\/loc>/g;
        let result;
        const urls = [];
        while ((result = reg.exec(data)) !== null) {
            urls.push(result[1]);
        }
        const links = urls.join('\n');
        await writeFile(path.join(sitemapFile, 'sitemap.txt'), links);
        console.log('sitemap.txt saved');
    } catch (error) {
        console.error(error);
    }
}

main();