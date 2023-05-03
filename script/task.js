/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-02-01 19:44:16
 * @lastModified  2023-02-01 21:01:20
 * Copyright © www.h7ml.cn All rights reserved
 */

const { getBrowser } = require('./puppeteer/browser.js');
const path = require('path');
const { downloadAndUnzip } = require('./utils/index.js');

async function login(page) {
  try {
    await page.goto('http://account.keydatas.com/login?source=http://dash.keydatas.com/data/exportSetting/628356', {
      timeout: 0,
    });
    // 等待三秒
    await page.waitForTimeout(3000);
    // 在input id 为 username 的输入框输入 h7ml@qq.com
    await page.type('#username', 'h7ml@qq.com', {
      delay: 100,
    });
    // 等待一秒
    await page.waitForTimeout(1000);
    // 在input id 为 password 的输入框输入 123456
    await page.type('#loginPassword', '894360738', {
      delay: 100,
    });
    // 等待一秒
    await page.waitForTimeout(1000);
    // 在input id 为 submit 的按钮提交
    await page.click('#loginBtnId');
  } catch (e) {
    console.error('login error ');
  }
}

async function exportDate(page, link) {
  try {
    await page.goto(link, { timeout: 0 });
    // 等待6秒
    await page.waitForTimeout(6000);
    // 删除input id为 fileName的内容，并输入keydatas
    const input = await page.$('#fileName');

    await input.focus();
    await page.type('#fileName', 'keydatas', {
      delay: 100,
    });

    const select = await page.$('#format');

    await select.select('html');

    await page.click('#exportBtn');
    console.log('exportBtn click');

    // 等待6秒
    await page.waitForTimeout(6000);
    const hreflink = await page.$('#downloadLink');
    const href = await page.evaluate((link) => link.href, hreflink);
    await downloadAndUnzip(page, href, path.join(__dirname, 'keydatas'), 'keydatas.zip');
  } catch (e) {
    console.error('exportDate error ', e);
  }
}

async function main() {
  const browser = await getBrowser();
  const page = await browser.newPage();

  try {
    await login(page);
    await page.waitForTimeout(6000);
    console.log('login success');
    await exportDate(page, 'http://dash.keydatas.com/data/exportSetting/628356');
    // 等待一秒
    await page.waitForTimeout(1000);
  } catch (err) {
    console.log('Crawl segmentfault failed');
    await browser.close();
    console.log(err.message);
  }
}

main();
