require('dotenv').config();

module.exports = {
  // 这里的邮箱配置以QQ邮箱为例，其他邮箱端口和host等均会有差异 具体可以留言提问或百度
  email: {
    provider: {
      auth: {
        user: process.env.EMAIL_USER, // 你的QQ邮箱账号
        pass: process.env.EMAIL_PASS, // 你的QQ邮箱 smpt 授权码
      },
      host: 'smtp.qq.com',
      secure: true,
      port: 465,
      secureConnection: true,
    },
  },
  user: {
    email: process.env.USER_EMAIL, // 你的接收通知的邮箱
  },
};
