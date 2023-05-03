const fs = require('fs');
const path = require('path');

const blogPaths = [
  'posts/csdn/log',
  'posts/segmentfault/log',
  'posts/jianshu/log',
  'posts/juejin/log',
  'posts/segmentfault/png',
];

const clean = async () => {
  for (const blog of blogPaths) {
    const joinedPath = path.join(__dirname, `../../h7ml/${blog}`);
    try {
      const files = await fs.promises.readFile(joinedPath);
      const filesString = files.toString();
      const filePaths = filesString.split('\n');
      for (const filePath of filePaths) {
        if (filePath.length) {
          try {
            await fs.promises.access(filePath, fs.constants.F_OK);
            await fs.promises.unlink(filePath);
            console.log(`delete ${filePath} success`);
          } catch (err) {
            console.error(err);
          }
        }
      }
      await fs.promises.unlink(joinedPath);
      console.log(`delete ${joinedPath} success`);
    } catch (err) {
      console.error(err);
    }
  }
};

clean();
