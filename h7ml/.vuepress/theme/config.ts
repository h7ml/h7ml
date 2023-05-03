// .vuepress/theme/config.js
import { defineClientConfig } from '@vuepress/client';
import NotFound from '../components/theme/NotFound/index.vue';

export default defineClientConfig({
  // 你可以在这里覆盖或新增布局
  layouts: {
    NotFound,
  },
});
