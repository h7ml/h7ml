---
icon: vue
order: 3
date: 2021-05-30
author: h7ml
title: vite 别名配置注意事项
category: vite
tag: vite
star: true
---

## vite 别名配置注意事项

1. Vite config

![image-20220411165325332](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/vite/e6c9d24ely1h15vt7vddmj20hc0er0tj.jpg)

```ts
import * as path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://xuanyuan.jinuo.fun:8080/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
```

2. Tsconfig.json

​ ![image-20220411165514379](https://nakoruru.h7ml.cn/httpproxy/static.5ibug.net/vitepress/assets/images/vite/e6c9d24ely1h15vv3ksz3j20fj0i4q3r.jpg)

告诉 TS 解析如何解析某些路径

注意`./src/* 后边这个*`一定要加
