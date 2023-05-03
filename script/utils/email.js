/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2022-11-08 22:01:10
 * @lastModified  2022-11-08 22:02:53
 * Copyright © www.h7ml.cn All rights reserved
 */
const nodemailer = require('nodemailer');
const config = require('../config');
const sendEmail = async (params) => {
  if (!params || typeof params !== 'object' || !params.to || !params.subject) {
    console.log(new Error(`邮件发送失败：参数错误`));
    return;
  }

  let transporter = nodemailer.createTransport(config.email.provider);
  const messageParams = Object.assign({}, params, {
    from: config.email.provider.auth.user,
  });
  await transporter.sendMail(messageParams).catch((err) => {
    console.log(`邮件发送失败:`);
    console.log(err);
  });
};
module.exports = {
  sendEmail,
};
