const fs = require('fs').promises;
const path = require('path');

const blogPaths = [
  'posts/csdn',
  'posts/segmentfault',
  'posts/jianshu',
  'posts/juejin',
  '.vuepress/public/assets/img',
  '.vuepress/public/assets/img/remote',
  '.vuepress/public/assets/images/csdn',
  '.vuepress/public/assets/images/segmentfault',
  '.vuepress/public/assets/images/jianshu',
  '.vuepress/public/assets/images/juejin',
];

async function clean() {
  for (const blog of blogPaths) {
    const joinedPath = path.join(__dirname, `../../h7ml/${blog}`);
    try {
      const files = await fs.readdir(joinedPath, { withFileTypes: true });
      for (const file of files) {
        const filePath = path.join(joinedPath, file.name);
        if (file.isFile() && !file.name.endsWith('.txt')) {
          await fs.unlink(filePath);
          console.log(`delete ${filePath} success`);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
}

clean();
