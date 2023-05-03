<template>
  <NotFound />
</template>
<script>
  import NotFound from 'vuepress-theme-hope/layouts/NotFound.js';
  import { defineComponent } from 'vue';
  import { usePageData } from '@vuepress/client';
  export default defineComponent({
    components: {
      NotFound,
    },
  });
</script>
