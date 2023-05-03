/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2022-11-08 22:01:10
 * @lastModified  2022-11-08 22:03:25
 * Copyright © www.h7ml.cn All rights reserved
 */
const axios = require('axios');

const getRandomSentence = async () => {
  return new Promise(async (r) => {
    const defaultWords = `每一个不曾起舞的日子,都是对生命的辜负!`;
    const res = await axios.get('https://v1.jinrishici.com/all.json').catch((error) => {
      return r(defaultWords);
    });
    if (res.status == 200) {
      const data = res.data;
      if (data && data.content) {
        return r(data.content);
      }
    }
    return r(defaultWords);
  });
};

module.exports = {
  getRandomSentence,
};
