const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1507,
      height: 378
    });
  }
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await targetPage.goto('https://www.baidu.com/');
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 131.39999389648438,
        y: 25.599990844726562,
      },
    });
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('Shift');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('Shift');
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, { timeout, visible: true });
    const inputType = await element.evaluate(el => el.type);
    if (inputType === 'select-one') {
      await changeSelectElement(element, 'h7ml');
    } else if ([
      'textarea',
      'text',
      'url',
      'tel',
      'search',
      'password',
      'number',
      'email'
    ].includes(inputType)) {
      await typeIntoElement(element, 'h7ml');
    } else {
      await changeElementValue(element, 'h7ml');
    }
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('Enter');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('Enter');
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        'aria/2',
        'aria/[role="generic"]'
      ],
      [
        '#wrapper_wrapper > div:nth-of-type(2) a:nth-of-type(1) > span'
      ],
      [
        'xpath///*[@id="page"]/div/a[1]/span'
      ],
      [
        'pierce/#wrapper_wrapper > div:nth-of-type(2) a:nth-of-type(1) > span'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        'aria/2',
        'aria/[role="generic"]'
      ],
      [
        '#wrapper_wrapper > div:nth-of-type(2) a:nth-of-type(1) > span'
      ],
      [
        'xpath///*[@id="page"]/div/a[1]/span'
      ],
      [
        'pierce/#wrapper_wrapper > div:nth-of-type(2) a:nth-of-type(1) > span'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 20,
        y: 16.399993896484375,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        'aria/3',
        'aria/[role="generic"]'
      ],
      [
        'a:nth-of-type(3) > span'
      ],
      [
        'xpath///*[@id="page"]/div/a[3]/span'
      ],
      [
        'pierce/a:nth-of-type(3) > span'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        'aria/3',
        'aria/[role="generic"]'
      ],
      [
        'a:nth-of-type(3) > span'
      ],
      [
        'xpath///*[@id="page"]/div/a[3]/span'
      ],
      [
        'pierce/a:nth-of-type(3) > span'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 29,
        y: 21.399993896484375,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        'aria/4',
        'aria/[role="generic"]'
      ],
      [
        'a:nth-of-type(4) > span'
      ],
      [
        'xpath///*[@id="page"]/div/a[4]/span'
      ],
      [
        'pierce/a:nth-of-type(4) > span'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        'aria/4',
        'aria/[role="generic"]'
      ],
      [
        'a:nth-of-type(4) > span'
      ],
      [
        'xpath///*[@id="page"]/div/a[4]/span'
      ],
      [
        'pierce/a:nth-of-type(4) > span'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 30,
        y: 27.25,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 179,
        y: 23,
      },
    });
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('Shift');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('Shift');
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, { timeout, visible: true });
    const inputType = await element.evaluate(el => el.type);
    if (inputType === 'select-one') {
      await changeSelectElement(element, 'h7ml。');
    } else if ([
      'textarea',
      'text',
      'url',
      'tel',
      'search',
      'password',
      'number',
      'email'
    ].includes(inputType)) {
      await typeIntoElement(element, 'h7ml。');
    } else {
      await changeElementValue(element, 'h7ml。');
    }
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('.');
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, { timeout, visible: true });
    const inputType = await element.evaluate(el => el.type);
    if (inputType === 'select-one') {
      await changeSelectElement(element, 'h7ml。c');
    } else if ([
      'textarea',
      'text',
      'url',
      'tel',
      'search',
      'password',
      'number',
      'email'
    ].includes(inputType)) {
      await typeIntoElement(element, 'h7ml。c');
    } else {
      await changeElementValue(element, 'h7ml。c');
    }
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('c');
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, { timeout, visible: true });
    const inputType = await element.evaluate(el => el.type);
    if (inputType === 'select-one') {
      await changeSelectElement(element, 'h7ml。cn');
    } else if ([
      'textarea',
      'text',
      'url',
      'tel',
      'search',
      'password',
      'number',
      'email'
    ].includes(inputType)) {
      await typeIntoElement(element, 'h7ml。cn');
    } else {
      await changeElementValue(element, 'h7ml。cn');
    }
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('n');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('Process');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('Process');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up(']');
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, { timeout, visible: true });
    const inputType = await element.evaluate(el => el.type);
    if (inputType === 'select-one') {
      await changeSelectElement(element, 'h7ml。c');
    } else if ([
      'textarea',
      'text',
      'url',
      'tel',
      'search',
      'password',
      'number',
      'email'
    ].includes(inputType)) {
      await typeIntoElement(element, 'h7ml。c');
    } else {
      await changeElementValue(element, 'h7ml。c');
    }
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('Backspace');
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, { timeout, visible: true });
    const inputType = await element.evaluate(el => el.type);
    if (inputType === 'select-one') {
      await changeSelectElement(element, 'h7ml。');
    } else if ([
      'textarea',
      'text',
      'url',
      'tel',
      'search',
      'password',
      'number',
      'email'
    ].includes(inputType)) {
      await typeIntoElement(element, 'h7ml。');
    } else {
      await changeElementValue(element, 'h7ml。');
    }
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('Backspace');
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, { timeout, visible: true });
    const inputType = await element.evaluate(el => el.type);
    if (inputType === 'select-one') {
      await changeSelectElement(element, '');
    } else if ([
      'textarea',
      'text',
      'url',
      'tel',
      'search',
      'password',
      'number',
      'email'
    ].includes(inputType)) {
      await typeIntoElement(element, '');
    } else {
      await changeElementValue(element, '');
    }
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('Shift');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('Shift');
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, { timeout, visible: true });
    const inputType = await element.evaluate(el => el.type);
    if (inputType === 'select-one') {
      await changeSelectElement(element, 'www.h7ml.cn');
    } else if ([
      'textarea',
      'text',
      'url',
      'tel',
      'search',
      'password',
      'number',
      'email'
    ].includes(inputType)) {
      await typeIntoElement(element, 'www.h7ml.cn');
    } else {
      await changeElementValue(element, 'www.h7ml.cn');
    }
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('Enter');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('Enter');
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 21,
        y: 20,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, { timeout, visible: true });
    await element.click({
      offset: {
        x: 13,
        y: 21,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, timeout);
    const element = await waitForSelectors([
      [
        '#kw'
      ],
      [
        'xpath///*[@id="kw"]'
      ],
      [
        'pierce/#kw'
      ]
    ], targetPage, { timeout, visible: true });
    const inputType = await element.evaluate(el => el.type);
    if (inputType === 'select-one') {
      await changeSelectElement(element, 'site:www.h7ml.cn');
    } else if ([
      'textarea',
      'text',
      'url',
      'tel',
      'search',
      'password',
      'number',
      'email'
    ].includes(inputType)) {
      await typeIntoElement(element, 'site:www.h7ml.cn');
    } else {
      await changeElementValue(element, 'site:www.h7ml.cn');
    }
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down('Enter');
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up('Enter');
  }

  await browser.close();

  async function waitForSelectors(selectors, frame, options) {
    for (const selector of selectors) {
      try {
        return await waitForSelector(selector, frame, options);
      } catch (err) {
        console.error(err);
      }
    }
    throw new Error(`Could not find element for selectors: ${JSON.stringify(selectors)}`);
  }

  async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
    const element = await waitForSelectors(selectors, frame, { visible: false, timeout });
    if (!element) {
      throw new Error(
        'The element could not be found.'
      );
    }
    await waitForConnected(element, timeout);
    const isInViewport = await element.isIntersectingViewport({ threshold: 0 });
    if (isInViewport) {
      return;
    }
    await element.evaluate(element => {
      element.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'auto',
      });
    });
    await waitForInViewport(element, timeout);
  }

  async function waitForConnected(element, timeout) {
    await waitForFunction(async () => await element.getProperty('isConnected'), timeout);
  }

  async function waitForInViewport(element, timeout) {
    await waitForFunction(async () => await element.isIntersectingViewport({ threshold: 0 }), timeout);
  }

  async function waitForSelector(selector, frame, options) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error('Empty selector provided to waitForSelector');
    }
    let element = null;
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (element) {
        element = await element.waitForSelector(part, options);
      } else {
        element = await frame.waitForSelector(part, options);
      }
      if (!element) {
        throw new Error(`Could not find element: ${selector.join('>>')}`);
      }
      if (i < selector.length - 1) {
        element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
      }
    }
    if (!element) {
      throw new Error(`Could not find element: ${selector.join('|')}`);
    }
    return element;
  }

  async function waitForElement(step, frame, timeout) {
    const {
      count = 1,
      operator = '>=',
      visible = true,
      properties,
      attributes,
    } = step;
    const compFn = {
      '==': (a, b) => a === b,
      '>=': (a, b) => a >= b,
      '<=': (a, b) => a <= b,
    }[operator];
    await waitForFunction(async () => {
      const elements = await querySelectorsAll(step.selectors, frame);
      let result = compFn(elements.length, count);
      const elementsHandle = await frame.evaluateHandle((...elements) => elements, ...elements);
      await Promise.all(elements.map((element) => element.dispose()));
      if (result && (properties || attributes)) {
        result = await elementsHandle.evaluate(
          (elements, properties, attributes) => {
            for (const element of elements) {
              if (attributes) {
                for (const [name, value] of Object.entries(attributes)) {
                  if (element.getAttribute(name) !== value) {
                    return false;
                  }
                }
              }
              if (properties) {
                if (!isDeepMatch(properties, element)) {
                  return false;
                }
              }
            }
            return true;

            function isDeepMatch(a, b) {
              if (a === b) {
                return true;
              }
              if ((a && !b) || (!a && b)) {
                return false;
              }
              if (!(a instanceof Object) || !(b instanceof Object)) {
                return false;
              }
              for (const [key, value] of Object.entries(a)) {
                if (!isDeepMatch(value, b[key])) {
                  return false;
                }
              }
              return true;
            }
          },
          properties,
          attributes
        );
      }
      await elementsHandle.dispose();
      return result === visible;
    }, timeout);
  }

  async function querySelectorsAll(selectors, frame) {
    for (const selector of selectors) {
      const result = await querySelectorAll(selector, frame);
      if (result.length) {
        return result;
      }
    }
    return [];
  }

  async function querySelectorAll(selector, frame) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error('Empty selector provided to querySelectorAll');
    }
    let elements = [];
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (i === 0) {
        elements = await frame.$$(part);
      } else {
        const tmpElements = elements;
        elements = [];
        for (const el of tmpElements) {
          elements.push(...(await el.$$(part)));
        }
      }
      if (elements.length === 0) {
        return [];
      }
      if (i < selector.length - 1) {
        const tmpElements = [];
        for (const el of elements) {
          const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
          if (newEl) {
            tmpElements.push(newEl);
          }
        }
        elements = tmpElements;
      }
    }
    return elements;
  }

  async function waitForFunction(fn, timeout) {
    let isActive = true;
    const timeoutId = setTimeout(() => {
      isActive = false;
    }, timeout);
    while (isActive) {
      const result = await fn();
      if (result) {
        clearTimeout(timeoutId);
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw new Error('Timed out');
  }

  async function changeSelectElement(element, value) {
    await element.select(value);
    await element.evaluateHandle((e) => {
      e.blur();
      e.focus();
    });
  }

  async function changeElementValue(element, value) {
    await element.focus();
    await element.evaluate((input, value) => {
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }, value);
  }

  async function typeIntoElement(element, value) {
    const textToType = await element.evaluate((input, newValue) => {
      if (
        newValue.length <= input.value.length ||
        !newValue.startsWith(input.value)
      ) {
        input.value = '';
        return newValue;
      }
      const originalValue = input.value;
      input.value = '';
      input.value = originalValue;
      return newValue.substring(originalValue.length);
    }, value);
    await element.type(textToType);
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
});
