/**
 * @description 统计字符串中字符出现的次数
 * @param str
 * @returns {{}}
 */
function computeString(str) {
  const obj = {}
  for (let i = 0; i < str.length; i++) {
    const key = str[i]
    if (obj[key])
      obj[key]++
    else
      obj[key] = 1
  }
  return obj
}