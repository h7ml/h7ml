<template>
  <PageFooter />
</template>
<script>
  import PageFooter from 'vuepress-theme-hope/components/PageFooter.js';
  import { defineComponent } from 'vue';
  import { usePageData } from '@vuepress/client';
  export default defineComponent({
    components: {
      PageFooter,
    },
  });
</script>
