# 第一阶段：构建阶段
FROM gplane/pnpm:latest as builder

# 设置工作目录
WORKDIR /app

# 将所有文件复制到工作目录
COPY . .

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY .npmrc ./

# 安装依赖
RUN pnpm install

# 打包项目
RUN pnpm run build

# # 将 README.md 下载到 dist 目录下
# RUN wget https://raw.githubusercontent.com/h7ml/h7ml/main/README.md -P /app/h7ml/.vuepress/dist/

# 第二阶段：部署阶段
FROM nginx:alpine as nginx

# 清空默认的 Nginx 静态文件目录
RUN rm -rf /usr/share/nginx/html/*

# 复制打包后的 dist 文件夹到默认的 Nginx 静态文件目录
COPY --from=builder /app/h7ml/.vuepress/dist/ /usr/share/nginx/html/

# 将 Nginx 配置文件复制到默认的 Nginx 配置文件目录
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 将容器的端口映射到宿主机的 80 端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
