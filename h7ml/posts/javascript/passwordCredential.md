---
icon: javascript
order: 1
date: 2024-09-15
author: h7ml
title: 深入了解 Chrome 的 PasswordCredential
description: 本文深入介绍了 Chrome 提供的 PasswordCredential 对象，该对象是 Web Credential Management API 的一部分，为用户密码管理和自动填充提供了便利。文章涵盖了创建、保存、获取和删除密码凭据的方法，并强调了提高用户体验和安全性的最佳实践。
footer: <a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>Chrome 的 PasswordCredential 为处理用户密码凭据提供了方便而安全的方式。开发者可以通过有效使用这一功能提供更流畅和安全的用户体验，同时避免了潜在的安全风险。
star: 1
image: https://www.h7ml.cn/logo.png
banner: https://www.h7ml.cn/logo.png
shortTitle: Chrome 的 PasswordCredential
category:
  - Web 开发
  - 安全性
  - 密码管理
  - Chrome API
tag:
  - PasswordCredential
  - Web Credential Management API
  - 用户密码
  - 自动填充
  - 用户体验
head:
  - - meta
    - name: keywords
      content: Chrome，PasswordCredential，Web Credential Management API，用户密码管理，自动填充，安全性，用户体验
---

# 深入了解 Chrome 的 PasswordCredential
在现代网络生态系统中，用户帐户和密码是用户身份验证的关键元素。为了提供更好的用户体验和安全性，浏览器提供了许多 API 以便开发者更好地管理用户凭据。其中，Chrome 提供了 PasswordCredential 对象，为用户的密码管理和自动填充提供了便利。

::: vue-demo PasswordCredential

```vue
<template>
  <div class="box">
    <!-- Integrated Form -->
    <form @submit.prevent="storeCredential">
      <input type="text" name="username" v-model="username" placeholder="Username" />
      <input type="password" name="password" v-model="password" placeholder="Password" />
      <button type="submit" :disabled="!isWebCredentialSupported">Submit</button>
    </form>

    <p class="message">PasswordCredential is {{ message }}</p>
    <button @click="storeCredential">Store default Credential</button> <br>
    <button @click="retrieveCredential">Retrieve Credential</button> <br>
    <button @click="updateCredential">Update Credential</button> <br>
    <button @click="deleteCredential">Delete Credential</button> <br>
    <code>{{ message }}</code>

  </div>
</template>

<script>
  export default {
    data: () => ({ message: "", isWebCredentialSupported: false, username: "", password: "" }),
    methods: {
      storeCredential() {
        const passwordCredential = new PasswordCredential({
          id: this.username || 'h7ml',
          password: this.password || 'zfy666',
          name: this.username || '子非鱼',
          iconURL: 'https://www.h7ml.cn/logo.png'
        });

        navigator.credentials.store(passwordCredential)
            .then(() => {
              this.message = 'Password credential stored successfully';
            })
            .catch((error) => {
              console.error('Error storing password credential:', error);
              this.message = 'Error storing password credential';
            });
      },

      retrieveCredential() {
        navigator.credentials.get({ password: true })
            .then((credential) => {
              if (credential) {
                this.message = 'Retrieved username credential: ' + credential.id;
                // 使用凭据进行登录等操作
                this.username = credential.id;
                this.password = credential.password;
              } else {
                this.message = 'No saved password credential found';
                // 提示用户进行登录
              }
            })
            .catch((error) => {
              console.error('Error retrieving password credential:', error);
              this.message = 'Error retrieving password credential';
            });
      },

      updateCredential() {
        // 更新密码凭据的操作
        this.message = 'Update credential functionality is not implemented in this example';
      },

      deleteCredential() {
        navigator.credentials.preventSilentAccess()
            .then(() => {
              this.message = 'Prevented silent access to password credentials';
            })
            .catch((error) => {
              console.error('Error preventing silent access:', error);
            });
      },
    },
    mounted() {
      this.isWebCredentialSupported = 'credentials' in navigator;
      this.message = this.isWebCredentialSupported
          ? "Web Credential Management API is supported"
          : "Web Credential Management API is not supported";
    },
  };
</script>

<style scoped>
  .box {
    text-align: center;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
  }
  .message {
    color: #f00;
  }
</style>


```

:::

## 1. PasswordCredential 是什么？

``PasswordCredential`` 是一个 ``Web Credential Management API`` 的一部分，它允许开发者在不牺牲安全性的前提下管理用户的密码。这个 ``API`` 可以通过以下方式创建：

```javascript
const passwordCredential = new PasswordCredential({
    id: 'h7ml@qq.com',
    password: 'zfy666',
    name: 'h7ml',
    iconURL: 'https://www.h7ml.cn/logo.png'
});
```

在这个例子中，我们创建了一个包含用户名、密码、姓名和头像 URL 的 `PasswordCredential` 对象。

## 2. 保存密码凭据

通过使用 ``navigator.credentials.store()`` 方法，我们可以将用户的密码凭据保存到浏览器中。这使得用户在下一次访问网站时能够自动填充他们的凭据信息。

```javascript
navigator.credentials.store(passwordCredential)
  .then(() => {
    console.log('Password credential stored successfully');
  })
  .catch((error) => {
    console.error('Error storing password credential:', error);
  });
```

## 3. 获取已保存的密码凭据


通过 `navigator.credentials.get()` 方法，我们可以检索已保存在浏览器中的密码凭据。这允许我们自动填充登录表单，提供更好的用户体验。

```javascript
navigator.credentials.get({ password: true })
  .then((credential) => {
    if (credential) {
      console.log('Retrieved password credential:', credential);
      // 使用凭据进行登录等操作
    } else {
      console.log('No saved password credential found');
      // 提示用户进行登录
    }
  })
  .catch((error) => {
    console.error('Error retrieving password credential:', error);
  });
```

## 4. 删除密码凭据

如果用户选择登出或希望删除已保存的密码凭据，可以使用 `navigator.credentials.preventSilentAccess()` 方法。

```javascript
navigator.credentials.preventSilentAccess()
  .then(() => {
    console.log('Prevented silent access to password credentials');
  })
  .catch((error) => {
    console.error('Error preventing silent access:', error);
  });

```

## 5.  new PasswordCredential() 的参数

`PasswordCredential` 构造函数接受一个包含以下属性的对象：

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| id | String | 用户的唯一标识符，通常是用户的电子邮件地址。 |
| password | String | 用户的密码。 |
| name | String | 用户的姓名。 |
| iconURL | String | 用户的头像 URL。 |


`Chrome` 的 `PasswordCredential` 提供了一种方便且安全的方式来处理用户的密码凭据。通过有效使用这一功能，开发者可以提供更加流畅和安全的用户体验，同时避免了明文存储和传输密码的潜在风险。在开发中，务必结合最佳实践来使用这一功能，以确保用户数据的隐私和安全性。
