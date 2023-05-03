<template>
  <div class="g-card-link">
    <div v-for="(item, k) in value" class="g-card-item" :key="k">
      <a :href="item.link" rel="external nofollow" target="_blank" :title="item.title">{{ item.title }}</a>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    defaultValue: String,
  });
  const value = ref(props.defaultValue);
</script>
<style lang="scss">
  button {
    background-color: #4e6ef2;
  }

  .g-card-link {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    text-align: center;
    line-height: 38px;

    .g-card-item {
      background: blue;
      width: 113px;
      max-width: 138px;
      height: 38px;
      cursor: pointer;
      overflow: hidden;
    }

    .g-card-item:nth-of-type(2n) {
      background: rgba(44, 104, 255, 0.1);
    }

    .g-card-item:nth-of-type(2n + 1) {
      background: rgba(56, 203, 137, 0.1);
    }
  }
</style>

<!--&lt;!&ndash;use&ndash;&gt;-->

<!--# Docs-->
<!--收集精编常用的文档...-->
<!--<div v-for="(item,k) in linkList">-->
<!--<h3>{{item.title}}</h3>-->
<!--<div>-->
<!--  <card :defaultValue="item.children"/>-->
<!--</div>-->
<!--</div>-->
<!--<script setup>-->
<!--import { ref } from 'vue';-->
<!--const linkList = ref([]);-->
<!--linkList.value = [-->
<!--  {-->
<!--    title: 'React UI 组件库',-->
<!--    children: [-->
<!--      {-->
<!--        title: 'Ant Design',-->
<!--        link: 'https://ant.design/docs/react/introduce-cn'-->
<!--      },{-->
<!--        title: 'Bootstrap',-->
<!--        link: 'https://react-bootstrap.github.io/getting-started/introduction'-->
<!--      },{-->
<!--        title: 'Material UI',-->
<!--        link: 'https://mui.com/material-ui/getting-started/overview/'-->
<!--      }-->
<!--    ]-->
<!--  },{-->
<!--    title: 'Vue UI 组件库',-->
<!--    children: [-->
<!--      {-->
<!--        title: 'Element',-->
<!--        link: 'https://element.eleme.io/#/zh-CN/component/installation'-->
<!--      },{-->
<!--        title: 'Element Plus',-->
<!--        link: 'https://element-plus.org/zh-CN/component/button.html'-->
<!--      },{-->
<!--        title: 'Vant',-->
<!--        link: 'https://youzan.github.io/vant/#/zh-CN'-->
<!--      },{-->
<!--        title: 'View Design',-->
<!--        link: 'https://www.iviewui.com/view-ui-plus/guide/introduce'-->
<!--      }-->
<!--    ]-->
<!--  },-->
<!--  {-->
<!--    title: '动画库',-->
<!--    children: [-->
<!--      {-->
<!--        title: 'Animate.css',-->
<!--        link: 'https://animate.style/'-->
<!--      }-->
<!--    ]-->
<!--  }-->
<!--]-->
<!--</script>-->
