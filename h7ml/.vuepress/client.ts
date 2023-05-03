// .vuepress/client.ts
import { defineClientConfig } from '@vuepress/client';
import Sakura from './components/Sakura/index.vue';
import SiKong from './components/SiKong/index.vue';
import ChatGpt from './components/ChatGpt/index.vue';
import SpeechRecognition from './components/SpeechRecognition/index.vue';
export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component('Sakura', Sakura);
    app.component('SiKong', SiKong);
    app.component('ChatGpt', ChatGpt);
    app.component('SpeechRecognition', SpeechRecognition);
  },
});
