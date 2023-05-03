/**
 * @description url参数转换为object
 * @param str
 * @returns {{}}
 */
function urlToObj(str) {
  const obj = {};
  const strQuery = str.split('?');
  const strArray = strQuery[1] ? strQuery[1].split('&') : [];
  for (let i = 0; i < strArray.length; i++) {
    const info = strArray[i].split('=');
    obj[info[0]] = info[1];
  }
  return obj;
}

const url = 'http://www.baidu.com?a=1&b=2&c=3';
urlToObj(url);
urlToObj('http://www.baidu.com');
