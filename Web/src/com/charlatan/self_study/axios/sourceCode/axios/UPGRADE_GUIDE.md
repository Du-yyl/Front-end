# 升级指南

### 0.15.x -> 0.16.0

#### `Promise` 类型声明

`Promise` 类型声明已从 axios 类型中删除，以支持内置类型声明。如果您在以 `ES5` 为目标的 TypeScript 项目中使用 axios，请确保包含 `es2015.promise`
库。有关详细信息，请参阅 [这篇文章](https://blog.mariusschulz.com/2016/11/25/typescript-2-0-built-in-type-declarations)。

### 0.13.x -> 0.14.0

#### TypeScript 定义

axios TypeScript 定义已更新以匹配 axios API 并使用 ES2015 模块语法。

请使用以下 `import` 语句在 TypeScript 中导入 axios：

```打字稿
从'axios'导入axios；

axios.get('/foo')
  .then(response => console.log(response))
  .catch(error => console.log(error));
```

#### `agent` 配置选项

`agent` 配置选项已替换为两个新选项：`httpAgent` 和 `httpsAgent`。请改用它们。

```js
{
  // 为 HTTP 定义一个自定义代理
  httpAgent: 新的 http.Agent({ keepAlive: true }),
  // 为 HTTPS 定义一个自定义代理
  httpsAgent: 新的 https.Agent({ keepAlive: true })
}
```

#### `progress` 配置选项

`progress` 配置选项已替换为 `onUploadProgress` 和 `onDownloadProgress` 选项。

```js
{
  // 为上传进度事件定义一个处理程序
  onUploadProgress: 函数 (progressEvent) {
    // ...
  },

  // 定义下载进度事件的处理程序
  onDownloadProgress: 函数 (progressEvent) {
    // ...
  }
}
```

### 0.12.x -> 0.13.0

`0.13.0` 版本包含对自定义适配器和错误处理的一些更改。

#### 错误处理

在此版本之前，错误可能是带有错误状态代码的服务器响应或实际的“错误”。在此版本中，Promise 将始终以 `Error` 拒绝。在收到响应的情况下，“错误”也将包括响应。

```js
axios.get('/user/12345')
  .catch((错误) => {
    console.log(error.message);
    控制台日志（错误代码）； // 并不总是指定
    控制台.log(error.config); // 用于发出请求的配置
    console.log(error.response); // 仅当收到来自服务器的响应时才可用
  });
```

#### 请求适配器

此版本更改了有关请求适配器如何工作的一些内容。如果您使用自己的自定义适配器，请注意。

1. 响应转换器现在在适配器外部调用。
2. 请求适配器返回一个 `Promise`。

这意味着您不再需要对响应数据调用“transformData”。您也将不再收到 `resolve` 和 `reject` 作为适配器中的参数。

以前的代码：

```js
功能 myAdapter（解决，拒绝，配置）{
  变量响应 = {
    数据：转换数据（
      响应数据，
      响应头，
      config.transformResponse
    ),
    状态：请求状态，
    statusText：request.statusText，
    标头：响应标头
  };
  解决（解决，拒绝，响应）；
}
```

新代码：

```js
功能我的适配器（配置）{
  return new Promise(function (resolve, reject) {
    变量响应 = {
      数据：响应数据，
      状态：请求状态，
      statusText：request.statusText，
      标头：响应标头
    };
    解决（解决，拒绝，响应）；
  });
}
```

有关更多详细信息，请参阅相关提交：

- [响应转换器](https://github.com/axios/axios/commit/10eb23865101f9347570552c04e9d6211376e25e)
- [请求适配器承诺](https://github.com/axios/axios/commit/157efd5615890301824e3121cc6c9d2f9b21f94a)

### 0.5.x -> 0.6.0

`0.6.0` 版本主要包含错误修复，但升级时需要注意一些事项。

#### ES6 Promise Polyfill

直到 `0.6.0` 版本 ES6 `Promise` 是使用 [es6-promise](https://github.com/jakearchibald/es6-promise) 填充的。在此版本中，polyfill
已被删除，如果您的环境需要，您需要自己提供它。

```js
require('es6-promise').polyfill();
var axios = 要求（'axios'）;
```

这将填充全局环境，并且只需要完成一次。

#### `axios.success`/`axios.error`

`success` 和 `error` 别名在 [0.4.0]
（https://github.com/axios/axios/blob/master/CHANGELOG.md#040-oct-03-2014）中被弃用。在此版本中，它们已被完全删除。请分别使用 `axios.then`
和 `axios.catch`。

```js
axios.get('一些/url')
  .then（函数（res）{
    /* ... */
  })
  .catch（函数（错误）{
    /* ... */
  });
```

#### UMD

以前版本的 axios 附带 AMD、CommonJS 和 Global 构建。这一切都被整合到一个单一的 UMD 构建中。

```js
// AMD
要求（['bower_components/axios/dist/axios']，函数（axios）{
  /* ... */
});

// CommonJS
var axios = require('axios/dist/axios');
```
