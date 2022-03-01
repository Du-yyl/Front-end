# axios

[![npm 版本](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.org/package/axios)
[![构建状态](https://img.shields.io/travis/axios/axios/master.svg?style=flat-square)](https://travis-ci.org/axios/axios)
[![代码覆盖率](https://img.shields.io/coveralls/mzabriskie/axios.svg?style=flat-square)](https://coveralls.io/r/mzabriskie/axios)
[![安装大小](https://packagephobia.now.sh/badge?p=axios)](https://packagephobia.now.sh/result?p=axios)
[![npm 下载](https://img.shields.io/npm/dm/axios.svg?style=flat-square)](http://npm-stat.com/charts.html?package=axios )
[![gitter 聊天](https://img.shields.io/gitter/room/mzabriskie/axios.svg?style=flat-square)](https://gitter.im/mzabriskie/axios)
[![代码助手](https://www.codetriage.com/axios/axios/badges/users.svg)](https://www.codetriage.com/axios/axios)

用于浏览器和 node.js 的基于 Promise 的 HTTP 客户端

＃＃ 特征

- 从浏览器制作 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- 从 node.js 发出 [http](http://nodejs.org/api/http.html) 请求
- 支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- JSON数据的自动转换
- 客户端支持防止 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

## 浏览器支持

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![火狐](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![歌剧](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![边缘](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
最新✔ |最新✔ |最新✔ |最新✔ |最新✔ | 11 ✔ |

[![浏览器矩阵](https://saucelabs.com/open_sauce/build_matrix/axios.svg)](https://saucelabs.com/u/axios)

## 安装

使用 npm：

```重击
$ npm 安装 axios
```

使用凉亭：

```重击
$凉亭安装axios
```

使用纱线：

```重击
$纱线添加axios
```

使用 CDN：

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

＃＃ 例子

### 注意：CommonJS 用法

为了在使用带有 `require()` 的 CommonJS 导入时获得 TypeScript 类型（用于智能感知/自动完成），请使用以下方法：

```js
常量 axios = 要求（'axios'）.default;

// axios.<method> 现在将提供自动完成和参数类型
```

执行 `GET` 请求

```js
常量 axios = 要求（'axios'）;

// 向具有给定 ID 的用户发出请求
axios.get('/user?ID=12345')
  .then（函数（响应）{
    // 处理成功
    控制台日志（响应）；
  })
  .catch（函数（错误）{
    // 处理错误
    控制台日志（错误）；
  })
  .finally（函数（）{
    // 总是执行
  });

// 可选地，上面的请求也可以作为
axios.get('/user', {
    参数：{
      编号：12345
    }
  })
  .then（函数（响应）{
    控制台日志（响应）；
  })
  .catch（函数（错误）{
    控制台日志（错误）；
  })
  .finally（函数（）{
    // 总是执行
  });

// 想要使用异步/等待？将 `async` 关键字添加到您的外部函数/方法。
异步函数 getUser() {
  尝试 {
    常量响应 = 等待 axios.get('/user?ID=12345');
    控制台日志（响应）；
  } 捕捉（错误）{
    控制台.错误（错误）；
  }
}
```

> **注意：** `async/await` 是 ECMAScript 2017 的一部分，在 Internet 中不受支持
> Explorer 和旧版浏览器，因此请谨慎使用。

执行“POST”请求

```js
axios.post('/user', {
    名字：'弗雷德'，
    姓氏：'燧石'
  })
  .then（函数（响应）{
    控制台日志（响应）；
  })
  .catch（函数（错误）{
    控制台日志（错误）；
  });
```

执行多个并发请求

```js
函数 getUserAccount() {
  返回 axios.get('/user/12345');
}

函数 getUserPermissions() {
  返回 axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 现在两个请求都完成了
  }));
```

## axios API

可以通过将相关配置传递给 `axios` 来发出请求。

##### axios(配置)

```js
// 发送 POST 请求
轴（{
  方法：'发布'，
  网址：'/user/12345',
  数据： {
    名字：'弗雷德'，
    姓氏：'燧石'
  }
});
```

```js
// 获取远程图像的请求
轴（{
  方法：'得到'，
  网址：'http://bit.ly/2mTM3nY',
  响应类型：“流”
})
  .then（函数（响应）{
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });
```

##### axios(url[, config])

```js
// 发送 GET 请求（默认方法）
axios('/user/12345');
```

### 请求方法别名

为方便起见，已为所有受支持的请求方法提供了别名。

##### axios.request(config)

##### axios.get(url[, config])

##### axios.delete(url[, config])

##### axios.head(url[, config])

##### axios.options(url[, config])

##### axios.post(url[, data[, config]])

##### axios.put(url[, data[, config]])

##### axios.patch(url[, data[, config]])

＃＃＃＃＃＃ 笔记 使用别名方法时，`url`、`method` 和 `data` 属性不需要在配置中指定。

### 并发

处理并发请求的辅助函数。

##### axios.all（可迭代）

##### axios.spread(回调)

### 创建实例

您可以使用自定义配置创建一个新的 axios 实例。

##### axios.create([config])

```js
常量实例 = axios.create({
  baseURL: 'https://some-domain.com/api/',
  超时：1000，
  标题：{'X-Custom-Header'：'foobar'}
});
```

### 实例方法

下面列出了可用的实例方法。指定的配置将与实例配置合并。

##### axios#request(config)

##### axios#get(url[, config])

##### axios#delete(url[, config])

##### axios#head(url[, config])

##### axios#options(url[, config])

##### axios#post(url[, data[, config]])

##### axios#put(url[, data[, config]])

##### axios#patch(url[, data[, config]])

##### axios#getUri([配置])

## 请求配置

这些是用于发出请求的可用配置选项。只有 `url` 是必需的。如果未指定 `method`，请求将默认为 `GET`。

```js
{
  // `url` 是将用于请求的服务器 URL
  网址：'/用户'，

  // `method` 是发出请求时要使用的请求方法
  方法: 'get', // 默认

  // `baseURL` 将被添加到 `url` 之前，除非 `url` 是绝对的。
  // 可以为axios的实例设置`baseURL`来传递相对URL，这样可以很方便
  // 到该实例的方法。
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在将请求数据发送到服务器之前对其进行更改
  // 这仅适用于请求方法 'PUT'、'POST'、'PATCH' 和 'DELETE'
  // 数组中最后一个函数必须返回一个字符串或Buffer的实例，ArrayBuffer,
  // FormData 或 Stream
  // 你可以修改 headers 对象。
  transformRequest：[函数（数据，标头）{
    // 做任何你想做的数据转换

    返回数据；
  }],

  // `transformResponse` 允许在之前对响应数据进行更改
  // 它被传递给 then/catch
  转换响应：[函数（数据）{
    // 做任何你想做的数据转换

    返回数据；
  }],

  // `headers` 是要发送的自定义标头
  标头：{'X-Requested-With'：'XMLHttpRequest'}，

  // `params` 是与请求一起发送的 URL 参数
  // 必须是普通对象或 URLSearchParams 对象
  参数：{
    编号：12345
  },

  // `paramsSerializer` 是一个可选函数，负责序列化 `params`
  // (例如 https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  参数序列化器：函数（参数）{
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求体发送的数据
  // 仅适用于请求方法 'PUT'、'POST' 和 'PATCH'
  // 当没有设置 `transformRequest` 时，必须是以下类型之一：
  // - 字符串、普通对象、ArrayBuffer、ArrayBufferView、URLSearchParams
  // - 仅限浏览器：FormData、File、Blob
  // - 仅节点：流、缓冲区
  数据： {
    名字：'弗雷德'
  },
  
  // 将数据发送到正文的替代语法
  // 方法发布
  // 只发送值，不发送键
  数据：“国家=巴西&城市=贝洛奥里藏特”，

  // `timeout` 指定请求超时前的毫秒数。
  // 如果请求时间超过 `timeout`，请求将被中止。
  timeout: 1000, // 默认为 `0`（无超时）

  // `withCredentials` 指示是否跨站点访问控制请求
  // 应该使用凭据进行
  withCredentials: false, // 默认

  // `adapter` 允许自定义处理请求，这使得测试更容易。
  // 返回一个承诺并提供一个有效的响应（参见 lib/adapters/README.md）。
  适配器：功能（配置）{
    /* ... */
  },

  // `auth` 表示应该使用 HTTP 基本身份验证，并提供凭据。
  // 这将设置一个 `Authorization` 标头，覆盖任何现有的
  // 您使用 `headers` 设置的 `Authorization` 自定义标头。
  // 请注意，通过此参数只能配置 HTTP Basic auth。
  // 对于 Bearer 令牌等，请改用 `Authorization` 自定义标头。
  授权：{
    用户名：'janedoe',
    密码：'s00pers3cret'
  },

  // `responseType` 表示服务器将响应的数据类型
  // 选项有：'arraybuffer'、'document'、'json'、'text'、'stream'
  // 仅浏览器：'blob'
  responseType: 'json', // 默认

  // `responseEncoding` 表示用于解码响应的编码
  // 注意：忽略 'stream' 的 `responseType` 或客户端请求
  responseEncoding: 'utf8', // 默认

  // `xsrfCookieName` 是用作 xsrf 令牌值的 cookie 的名称
  xsrfCookieName: 'XSRF-TOKEN', // 默认

  // `xsrfHeaderName` 是携带 xsrf 令牌值的 http 头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认

  // `onUploadProgress` 允许处理上传的进度事件
  onUploadProgress: 函数 (progressEvent) {
    // 用原生进度事件做任何你想做的事
  },

  // `onDownloadProgress` 允许处理下载进度事件
  onDownloadProgress: 函数 (progressEvent) {
    // 用原生进度事件做任何你想做的事
  },

  // `maxContentLength` 定义允许的 http 响应内容的最大大小（以字节为单位）
  最大内容长度：2000，

  // `validateStatus` 定义是否解决或拒绝给定的承诺
  // HTTP 响应状态码。如果 `validateStatus` 返回 `true`（或设置为 `null`
  // 或 `undefined`)，promise 将被解析；否则，承诺将是
  // 被拒绝。
  验证状态：功能（状态）{
    返回状态 >= 200 && 状态 < 300; // 默认
  },

  // `maxRedirects` 定义了在 node.js 中重定向的最大数量。
  // 如果设置为 0，则不会进行重定向。
  maxRedirects: 5, // 默认

  // `socketPath` 定义了一个在 node.js 中使用的 UNIX Socket。
  // 例如'/var/run/docker.sock' 向 docker 守护进程发送请求。
  // 只能指定 `socketPath` 或 `proxy`。
  // 如果两者都指定，则使用 `socketPath`。
  socketPath: null, // 默认

  // `httpAgent` 和 `httpsAgent` 定义了执行 http 时要使用的自定义代理
  // 和 https 请求，分别在 node.js 中。这允许添加选项，例如
  // 默认情况下未启用的 `keepAlive`。
  httpAgent: 新的 http.Agent({ keepAlive: true }),
  httpsAgent: 新的 https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名和端口。
  // 你也可以使用传统的 `http_proxy` 和
  // `https_proxy` 环境变量。如果您使用环境变量
  // 对于您的代理配置，您还可以定义一个 `no_proxy` 环境
  // 变量作为不应被代理的域的逗号分隔列表。
  // 使用 `false` 禁用代理，忽略环境变量。
  // `auth` 表示应该使用 HTTP Basic auth 来连接代理，并且
  // 提供凭据。
  // 这将设置一个 `Proxy-Authorization` 标头，覆盖任何现有的
  // 您使用 `headers` 设置的 `Proxy-Authorization` 自定义标头。
  代理： {
    主机：'127.0.0.1'，
    端口：9000，
    授权：{
      用户名：'mikeymike'，
      密码：'rapunz3l'
    }
  },

  // `cancelToken` 指定一个可用于取消请求的取消令牌
  //（详情请参阅下面的取消部分）
  cancelToken: new CancelToken(function (cancel) {
  })
}
```

## 响应模式

请求的响应包含以下信息。

```js
{
  // `data` 是服务器提供的响应
  数据： {}，

  // `status` 是来自服务器响应的 HTTP 状态码
  状态：200，

  // `statusText` 是来自服务器响应的 HTTP 状态消息
  状态文本：'好的'，

  // `headers` 服务器响应的标头
  // 所有标题名称都是小写的
  标题：{}，

  // `config` 是为请求提供给 `axios` 的配置
  配置：{}，

  // `request` 是生成此响应的请求
  // 它是 node.js 中的最后一个 ClientRequest 实例（在重定向中）
  // 和浏览器中的 XMLHttpRequest 实例
  要求： {}
}
```

使用 `then` 时，您将收到如下响应：

```js
axios.get('/user/12345')
  .then（函数（响应）{
    控制台.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    控制台.log(response.config);
  });
```

当使用 `catch`
或传递 [rejection callback](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
作为 `then` 的第二个参数时，如 [Handling Errors](#handling-errors) 部分所述，响应将通过 `error` 对象获得。

## 配置默认值

您可以指定将应用于每个请求的配置默认值。

### 全局 axios 默认值

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### 自定义实例默认值

```js
// 创建实例时设置配置默认值
常量实例 = axios.create({
  baseURL: 'https://api.example.com'
});

// 创建实例后更改默认值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### 配置优先顺序

配置将按优先顺序合并。顺序是在 [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28)
中找到的库默认值，然后是实例的 `defaults` 属性，以及最后是请求的`config`参数。后者将优先于前者。这是一个例子。

```js
// 使用库提供的配置默认值创建一个实例
// 此时超时配置值为 `0`，这是库的默认值
常量实例 = axios.create();

// 覆盖库的默认超时
// 现在所有使用此实例的请求都将等待 2.5 秒后超时
instance.defaults.timeout = 2500；

// 覆盖此请求的超时，因为已知它需要很长时间
instance.get('/longRequest', {
  超时：5000
});
```

## 拦截器

您可以在请求或响应被 `then` 或 `catch` 处理之前拦截它们。

```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做一些事情
    返回配置；
  }，函数（错误）{
    // 处理请求错误
    返回 Promise.reject(错误);
  });

// 添加响应拦截器
axios.interceptors.response.use（函数（响应）{
    // 任何在 2xx 范围内的状态码都会触发这个函数
    // 对响应数据做一些事情
    返回响应；
  }，函数（错误）{
    // 任何超出 2xx 范围的状态码都会触发该函数
    // 做一些响应错误的事情
    返回 Promise.reject(错误);
  });
```

如果您以后需要删除拦截器，您可以。

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

您可以将拦截器添加到 axios 的自定义实例中。

```js
常量实例 = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```

## 处理错误

```js
axios.get('/user/12345')
  .catch（函数（错误）{
    如果（错误。响应）{
      // 请求已发出，服务器以状态码响应
      // 超出 2xx 的范围
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 请求已发出但未收到响应
      // `error.request` 是浏览器中 XMLHttpRequest 的一个实例，也是
      // node.js 中的 http.ClientRequest
      console.log(error.request);
    } 别的 {
      // 在设置触发错误的请求时发生了一些事情
      console.log('错误', error.message);
    }
    控制台.log(error.config);
  });
```

使用 `validateStatus` 配置选项，您可以定义应该引发错误的 HTTP 代码。

```js
axios.get('/user/12345', {
  验证状态：功能（状态）{
    返回状态 < 500； // 仅当状态码大于等于 500 时才拒绝
  }
})
```

使用 `toJSON` 你会得到一个包含更多关于 HTTP 错误信息的对象。

```js
axios.get('/user/12345')
  .catch（函数（错误）{
    console.log(error.toJSON());
  });
```

## 取消

您可以使用 *cancel token* 取消请求。

> axios 取消令牌 API 是基于撤销的 [cancelable promises 提案](https://github.com/tc39/proposal-cancelable-promises)。

您可以使用 `CancelToken.source` 工厂创建取消令牌，如下所示：

```js
常量 CancelToken = axios.CancelToken;
常量源 = CancelToken.source();

axios.get('/user/12345', {
  取消令牌：source.token
}).catch(函数（抛出）{
  如果（axios.isCancel（抛出））{
    console.log('请求取消', throwed.message);
  } 别的 {
    // 处理错误
  }
});

axios.post('/user/12345', {
  名称：'新名称'
}, {
  取消令牌：source.token
})

// 取消请求（message参数可选）
source.cancel('操作被用户取消。');
```

您还可以通过将执行器函数传递给 `CancelToken` 构造函数来创建取消令牌：

```js
常量 CancelToken = axios.CancelToken;
让取消；

axios.get('/user/12345', {
  取消令牌：新的取消令牌（函数执行器（c）{
    // 一个执行器函数接收一个取消函数作为参数
    取消 = c;
  })
});

// 取消请求
取消（）;
```

> 注意：您可以使用相同的取消令牌取消多个请求。

## 使用 application/x-www-form-urlencoded 格式

默认情况下，axios 将 JavaScript 对象序列化为 `JSON`。要改为以 `application/x-www-form-urlencoded` 格式发送数据，您可以使用以下选项之一。

### 浏览器

在浏览器中，您可以使用 [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API，如下所示：

```js
常量参数 = 新的 URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', 参数);
```

> 请注意，并非所有浏览器都支持 `URLSearchParams`（参见 [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)），但有一个 [polyfill](https://github .com/WebReflection/url-search-params）可用（确保 polyfill 全局环境）。

或者，您可以使用 [`qs`](https://github.com/ljharb/qs) 库对数据进行编码：

```js
常量 qs = 要求（'qs'）；
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

或者以另一种方式（ES6），

```js
从'qs'导入qs；
常量数据 = { 'bar': 123 };
常量选项 = {
  方法：'POST'，
  标头：{“内容类型”：“应用程序/x-www-form-urlencoded”}，
  数据：qs.stringify（数据），
  网址，
};
axios（选项）；
```

### 节点.js

在 node.js 中，您可以使用 [`querystring`](https://nodejs.org/api/querystring.html) 模块，如下所示：

```js
常量查询字符串 = 要求（'查询字符串'）；
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

您还可以使用 [`qs`](https://github.com/ljharb/qs) 库。

＃＃＃＃＃＃ 笔记 如果您需要对嵌套对象进行字符串化，最好使用 `qs` 库，因为 `querystring`
方法在该用例中存在已知问题（https://github.com/nodejs/node-v0.x-archive/issues/1665 ）。

## 软件

在 axios 达到 `1.0` 版本之前，将使用新的次要版本发布重大更改。例如 `0.5.1` 和 `0.5.4` 将具有相同的 API，但 `0.6.0` 会有重大更改。

## 承诺

axios 依赖于 [支持](http://caniuse.com/promises) 的原生 ES6 Promise 实现。 如果你的环境不支持 ES6
Promises，你可以 [polyfill](https://github.com/jakearchibald/es6-promise)。

## 打字稿

axios 包括 [TypeScript](http://typescriptlang.org) 定义。

```打字稿
从'axios'导入axios；
axios.get('/user?ID=12345');
```

＃＃ 资源

* [更新日志](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [升级指南](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [生态系统](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [贡献指南](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [行为准则](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## 学分

axios 深受 [Angular](https://angularjs.org/) 中提供的 [$http 服务](https://docs.angularjs.org/api/ng/service/$http)
的启发。归根结底，axios 致力于提供一个独立的类似“$http”的服务，以便在 Angular 之外使用。

＃＃ 执照

[麻省理工学院]（许可证）
