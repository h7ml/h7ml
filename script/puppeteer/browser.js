const puppeteer = require('puppeteer');
const fs = require('fs');
require('events').EventEmitter.defaultMaxListeners = 0; // 解除限制
// 将元素保存为png
const saveElementAsPng = async (page, element, path) => {
  await page.waitForXPath(element).then(async (res) => {
    try {
      // const rect = await res.boundingBox();
      await page.screenshot({
        path: path,
        clip: {
          // x: rect.x,
          // y: rect.y,
          // width: rect.width,
          // height: rect.height,
          x: 0,
          y: 0,
          width: 128,
          height: 85,
        },
      });
      console.log('保存图片成功', path);
    } catch (error) {
      console.log(error?.message || '保存图片失败');
    }
  });
};

const getBrowser = async (options) => {
  if (!global._browser) {
    try {
      const browser = await puppeteer.launch(
        Object.assign({}, options, {
          headless: false,
          defaultViewport: {
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1,
            isMobile: false,
            hasTouch: false,
            isLandscape: false,
          },
          ignoreDefaultArgs: ['--disable-extensions'],
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--use-gl=egl',
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process',
          ],
        })
      );
      global._browser = browser;
    } catch (error) {
      console.log(error.message || 'puppeteer启动失败');
    }
  }

  return global._browser || null;
};

const closeBrowser = async () => {
  if (global._browser) {
    await global._browser.close();
    global._browser = null;
  }
};
module.exports = {
  getBrowser,
  closeBrowser,
  saveElementAsPng,
};
