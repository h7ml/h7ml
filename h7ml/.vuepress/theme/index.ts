// .vuepress/theme/index.ts
import { getDirname, path } from '@vuepress/utils';
import { hopeTheme } from 'vuepress-theme-hope';
import type { ThemeOptions } from 'vuepress-theme-hope';

const __dirname = getDirname(import.meta.url);

export default (options) => ({
  name: 'vuepress-theme-hope',

  extends: hopeTheme(options),

  alias: {
    '@theme-hope/components/NotFound': path.resolve(__dirname, '../components/theme/NotFound/index.vue'),
  },
});
