/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2022-11-08 22:01:10
 * @lastModified  2022-11-08 22:02:48
 * Copyright © www.h7ml.cn All rights reserved
 */
const axios = require('axios');

// https://developer.hitokoto.cn/sentence/#%E7%AE%80%E4%BB%8B
// 一言  随机句子
const getHitokotoWords = async () => {
  return new Promise(async (r) => {
    const defaultWords = `每一个不曾起舞的日子,都是对生命的辜负!`;
    const res = await axios.get('https://v1.hitokoto.cn/').catch((error) => {
      return r(defaultWords);
    });
    if (res.status == 200) {
      const data = res.data;
      if (data && data.hitokoto) {
        return r(data.hitokoto);
      }
    }
    return r(defaultWords);
  });
};

module.exports = {
  getHitokotoWords,
};
