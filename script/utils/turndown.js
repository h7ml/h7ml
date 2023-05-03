const fs = require('fs');
const TurndownService = require('turndown');
const turndownService = new TurndownService();
const markdownGenerator = (path) => {
  const html = fs.readFileSync(path, 'utf8');
  const markdown = turndownService.turndown(html);
  fs.unlink(path, (err) => {
    if (err) console.log(err);
  });
  return markdown;
};
module.exports = {
  markdownGenerator,
};
