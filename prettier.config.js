// eslint-disable-next-line @typescript-eslint/no-var-requires
const dext7rPrettierConfig = require('@dext7r/prettier');

module.exports = {
  ...dext7rPrettierConfig,
  printWidth: 120,
  proseWrap: 'never',
  semi: true,
};
