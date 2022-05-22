# Axios 发送 Ajax 的完整过程

## axios方法【基本入口方法】

1. 先对axios的基本函数进行配置，通过 createInstance 完成【可以传入一个Object类型的参数】

   ```js
   // 通过配置创建 axios 函数
   var axios = createInstance(defaults);						【进入createInstance】
   ```

   ### axios中的createInstance 方法【创建一个 Axios 的实例对象】

    1. 进入方法第一步会先实例化一个 Axios 对象，并传入一个Object类型的参数

       ```js
       //创建一个实例对象 context 可以调用 get post put delete request
       var context = new Axios(defaultConfig);// context 不能当函数使用  	【进入Axios方法】
       ```

    2. 将创建的request方法的this指向进行更改

       ```js
       // 将 request 方法的 this 指向 context 并返回新函数  instance 可以用作函数使用, 且返回的是一个 promise 对象
       var instance = bind(Axios.prototype.request, context);// instance 与 Axios.prototype.request 代码一致
       ```

    3. 将prototype中的函数保存在instance中

       ```js
       // 将 Axios.prototype 和实例对象的方法都添加到 instance 函数身上
       utils.extend(instance, Axios.prototype, context);
       // 将实例对象的方法和属性扩展到 instance 函数身上
       utils.extend(instance, context);
       ```

       > **在这里完成了在 axios 既能直接调用方法（因为通过prototype进行保存了，也能通过新建实例化对象进行访问**

## Axios方法【创建 Axios 构造函数】

1. 进入方法第一步，会先将传入的默认属性进行保存

   ```js
   //实例对象上的 defaults 属性为配置对象
   this.defaults = instanceConfig;
   ```

2. 第二步，配置了实例对象上的interceptors，设置拦截属性

   ```js
   //实例对象上有 interceptors 属性用来设置请求和响应拦截器
   this.interceptors = {
       request: new InterceptorManager(),
       response: new InterceptorManager()
   };
   ```

   ### Axios 中的request方法【 发送请求的方法. 原型上配置, 则实例对象就可以调用 request 方法发送请求】

    1. 先进行传入参数的处理，并将默认的属性和拆入的属性进行混合

       ```js
           if (typeof config === 'string') {
               config = arguments[1] || {};
               config.url = arguments[0];
           } else {
               config = config || {};
           }
           //将默认配置与用户调用时传入的配置进行合并
           config = mergeConfig(this.defaults, config);
       
       ```

    2. 对请求的类型进行判断，如果没有指定，那么就是get类型（转小写）

       ```js
           // 设定请求方法
           if (config.method) {
               config.method = config.method.toLowerCase();
           } else if (this.defaults.method) {
               config.method = this.defaults.method.toLowerCase();
           } else {
               config.method = 'get';
           }
       ```

    3. 创建拦截器中间件 第一个参数用来发送请求, 第二个为 undefined 用来补位

       ```js
       var chain = [dispatchRequest, undefined];
       ```

    4. 创建一个成功的 promise 且成功的值为合并后的请求配置

       ```js
       var promise = Promise.resolve(config);//  promise 成功的Promise
       ```

    5. 遍历实例对象的请求拦截器,

       ```js
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
       ```

    6. 定义promise中的成功和失败的回调

       ```js
       promise = promise.then(chain.shift(), chain.shift());
       ```

## dispatchRequest函数【使用配置好的适配器发送一个请求】

1. 这个函数完成对发送请求的的正确和失败的处理，先进行了请求数据的转化

2. 返回一个xhrAdapter类型的实例，并配置成功和失败的回调，如果成功，那么一定有接收的数据，那么直接对这些数据进行处理，如果失败，将失败的回调进行返回

   ```js
   return adapter(config).then(function onAdapterResolution (response) {
       throwIfCancellationRequested(config)
       
       // Transform response data
       response.data = transformData(
         response.data,
         response.headers,
         config.transformResponse,
       )
       //设置 promise 成功的值为 响应结果
       return response
     }, function onAdapterRejection (reason) {
       if (!isCancel(reason)) {
         throwIfCancellationRequested(config)
         
         // Transform response data
         if (reason && reason.response) {
           reason.response.data = transformData(
             reason.response.data,
             reason.response.headers,
             config.transformResponse,
           )
         }
       }
       //设置 promise 为失败, 失败的值为错误信息
       return Promise.reject(reason)
     })
   ```

## xhrAdapter方法【adapter 适配器，发送Ajax的代码】

1. 这个函数直接返回一个Promise类型的对象，并在Promise中进行数据Ajax的发送

2. 发送前，配置所有的基础信息，如请求体，请求头，超时时间等，以及baseUrl和Url的拼接，完成后发送，如果成功，那么指定成功的promise回调，如果失败执行失败的promise的回调

   ```js
   return new Promise(function dispatchXhrRequest (resolve, reject) {
       var requestData = config.data
       var requestHeaders = config.headers
       
       if (utils.isFormData(requestData)) {
         delete requestHeaders['Content-Type'] // Let the browser set it
       }
       //创建请求对象
       var request = new XMLHttpRequest()
       
       // HTTP basic authentication
       // HTTP 基础验证处理
       if (config.auth) {
         var username = config.auth.username || ''
         var password = config.auth.password || ''
         requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password)
       }
       
       //构建完整URL地址, 初始化请求
       var fullPath = buildFullPath(config.baseURL, config.url)
       request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true)
       
       // Set the request timeout in MS
       // 设置超时时间
       request.timeout = config.timeout
       
       // Listen for ready state
       //绑定事件
       request.onreadystatechange = function handleLoad () {
         if (!request || request.readyState !== 4) {
           return
         }
         
         // The request errored out and we didn't get a response, this will be
         // handled by onerror instead
         // With one exception: request that using file: protocol, most browsers
         // will return status as 0 even though it's a successful request
         if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
           return
         }
         
         // Prepare the response
         //获取所有的响应头
         var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null
         var responseData = !config.responseType || config.responseType === 'text'
           ? request.responseText
           : request.response
         // 拼接响应的结果
         var response = {
           data: responseData,
           status: request.status,
           statusText: request.statusText,
           headers: responseHeaders,
           config: config,
           request: request,
         }
         //根据响应修改 promise 的状态
         settle(resolve, reject, response)
         
         // Clean up request
         request = null
       }
       
       // Handle browser request cancellation (as opposed to a manual cancellation)
       request.onabort = function handleAbort () {
         if (!request) {
           return
         }
         
         reject(createError('Request aborted', config, 'ECONNABORTED', request))
         
         // Clean up request
         request = null
       }
       
       // Handle low level network errors
       request.onerror = function handleError () {
         // Real errors are hidden from us by the browser
         // onerror should only fire if it's a network error
         reject(createError('Network Error', config, null, request))
         
         // Clean up request
         request = null
       }
       
       // Handle timeout
       request.ontimeout = function handleTimeout () {
         var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded'
         if (config.timeoutErrorMessage) {
           timeoutErrorMessage = config.timeoutErrorMessage
         }
         reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request))
         
         // Clean up request
         request = null
       }
       
       // Add xsrf header
       // This is only done if running in a standard browser environment.
       // Specifically not if we're in a web worker, or react-native.
       if (utils.isStandardBrowserEnv()) {
         var cookies = require('./../helpers/cookies')
         
         // Add xsrf header
         var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(
           config.xsrfCookieName) : undefined
         
         if (xsrfValue) {
           requestHeaders[config.xsrfHeaderName] = xsrfValue
         }
       }
       
       // Add headers to the request
       if ('setRequestHeader' in request) {
         utils.forEach(requestHeaders, function setRequestHeader (val, key) {
           if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
             // Remove Content-Type if data is undefined
             delete requestHeaders[key]
           } else {
             // Otherwise add header to the request
             request.setRequestHeader(key, val)
           }
         })
       }
       
       // Add withCredentials to request if needed
       if (!utils.isUndefined(config.withCredentials)) {
         request.withCredentials = !!config.withCredentials
       }
       
       // Add responseType to request if needed
       if (config.responseType) {
         try {
           request.responseType = config.responseType
         } catch (e) {
           // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
           // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
           if (config.responseType !== 'json') {
             throw e
           }
         }
       }
       
       // Handle progress if needed
       if (typeof config.onDownloadProgress === 'function') {
         request.addEventListener('progress', config.onDownloadProgress)
       }
       
       // Not all browsers support upload events
       if (typeof config.onUploadProgress === 'function' && request.upload) {
         request.upload.addEventListener('progress', config.onUploadProgress)
       }
       
       //如果配置了 cancelToken 则调用 then 方法设置成功的回调
       if (config.cancelToken) {
         // Handle cancellation
         config.cancelToken.promise.then(function onCanceled (cancel) {
           if (!request) {
             return
           }
           //取消请求
           request.abort()
           reject(cancel)
           // Clean up request
           request = null
         })
       }
       
       if (requestData === undefined) {
         requestData = null
       }
       
       // Send the request
       request.send(requestData)
     })
   ```

> 整体思路：
>
>   1. 当通过axios传入一个配置对象时，会先通过Axios中的request创建一个promise成功的对象，并将第一个赋值是成功的回调，因为新建的就是一个成功的，所以，一定会走成功的回调，
>   2. 成功的回调是一个dispatchRequest函数，这个函数会对返回结果【promise】成功与否的处理，并调用xhrAdapter方法
>   3. 调用xhrAdapter方法后，会返回一个promise对象，并在promise中的对发送的参数进行整体配置并发送请求，并设置成功和失败的回调
>   4. 如果成功，那么2中的方法就成功，那么就会就参数的结果进行处理，2中就是成功的，调用成功的方法，那么1中的获取的返回值就是成功的，整体的就是成功的
>   5. 如果3失败，那么就会调用失败的回调，那么3的返回值就是失败的返回值，2中获取到的就是失败的返回值，进行失败的回调，并将失败传递给1，1中继续对失败的结果进行处理，这时整体的结果就是失败的

# 取消发送

在Axios中，当配置了取消的方法【cancelToken】，就能想办法调用这个方法，进行取消的发送流程

1. 如果要配置取消的方法，要new一个cancelToken，并在其中传入方法，这个方法有一个形参，在方法中通过这个形参想cancel进行赋值

   ```js
   //	配置取消配置属性
           cancelToken: new CancelToken(function (c) {
               // 将c的值进行赋值
               cancel = c
           }),
   ```

2. 当上一步的属性配置完后，会进入 dispatchRequest 中进行了简单处理，并返回一个 xhrAdapter 的实例，进入 xhrAdapter 方法，在 xhrAdapter 方法中完成了请求的发送和请求的请求的拦截

   ```js
   function xhrAdapter (config) {
       return new Promise((res, rej) => {
           // 配置发送请求的基本内容
           let xhr = new XMLHttpRequest()
           xhr.open(config.method, config.url)
           xhr.send()
           xhr.onreadystatechange = function () {
               if (xhr.readyState === 4 && xhr.status === 200) {
                   console.log(xhr.response)
                   res({
                       status: xhr.status,
                       statusText: xhr.statusText,
                   })
               } else {
                   new Error('错误')
               }
           }
           // 如果配置了 cancelToken，那么就会走这个进行处理【如果没有配置默认是undefined，不会走这个判断
           if (config.cancelToken) {
               //	对 cancelToken 对象身上的promise进行成功的回调
               config.cancelToken.promise.then((value) => {
                   // 执行成功的回调的时候，只要是成功，就将发送取消
                   xhr.abort()
                   //	整体结果设置为失败
                   rej('请求取消')
               })
           }
       })
   }
   
   ```

3.

如果配置了cancelToken，就要实例化一个CancelToken对象，这个对象在实例化的时候，先声明一个变量，并为新建的那个cancelToken添加一个promise对象，在这个对象中将这个promise正确的回调赋值给新声明的变量，这时这个变量就是一个方法，如果这个方法执行，那么就等于直接调用了这个promise的正确的回调；然后为cancelToken进行赋值，参数是一个函数，并在这个函数这个函数就是执行了
正确的回调

```js
/**
 * 当形参的函数被传递后，会先执行构造函数，如果调用 executor ，那么就会将executor中的方法为原来的实参进行赋值，
 * 在赋值的函数中，将 promise 的成功回调进行了赋值转移，并调用，然后将成功的回调中，完成了发送的取消
 * @param executor 传入的是一个函数，这个函数可以接收一个实参
 * @constructor
 */
function CancelToken (executor) {
    //定义一个变量
    let resolvePromise
    this.promise = new Promise((res, rej) => {
        //  将 res 赋值给 resolvePromise
        resolvePromise = res
    })
    //	调用 executor
    executor(function () {
        // 执行res函数
        resolvePromise()
    })
}
```

4. 第一步和第三步集合:

   ```js
   //	配置取消配置属性【第一步先声明一个CancelToken类型的实例】
   cancelToken: new CancelToken(function (c) {
       // 将c的值进行赋值
       cancel = c
   }),
   ```

   > 当配置属性时，会先创建一个CancelToken的实例，然后进入CancelToken方法中进行执行

   ```js
   /**
    * 当形参的函数被传递后，会先执行构造函数，如果调用 executor ，那么就会将executor中的方法为原来的实参进行赋值，
    * 在赋值的函数中，将 promise 的成功回调进行了赋值转移，并调用，然后将成功的回调中，完成了发送的取消
    * @param executor 传入的是一个函数，这个函数可以接收一个实参
    * @constructor
    */
   function CancelToken (executor) {
       //定义一个变量
       let resolvePromise
       this.promise = new Promise((res, rej) => {
           //  将 res 赋值给 resolvePromise
           resolvePromise = res
       })
       //	调用 executor
       executor(function () {
           // 执行res函数
           resolvePromise()
       })
   }
   ```

   > 进入CalcelToken方法后，会先创建一个变量，先创建一个变量 ，并通过变量保存新建的promise的成功回调，**这时如果这个参数执行，那么就会影响整个promise的成功与否，不需要通过promise的内部决定，只需要将方法向外暴漏即可**；
   >
   >   然后执行传入的那个参数（一个函数，有一个形参），执行executor中的内容，传入了一个方法，这个就是实例化对象时的那个形参，这时通过形参，将这个方法赋值给 cancel ，如果cancel这个方法执行，那么就会执行 resolvePromise 这个方法，如果这个执行，那么就相当于执行了成功的回调，如果成功的回调执行了，那么就会进入会执行这个promise中的then的第一个方法，而xhrAdapter中配置了这个成功的回调
   >
   >   ```js
     >   // 如果配置了 cancelToken，那么就会走这个进行处理【在xhrAdapter中会执行这段代码】
     >   if (config.cancelToken) {
     >   	//	对 cancelToken 对象身上的promise进行成功的回调
     >   	config.cancelToken.promise.then((value) => {
     >   		xhr.abort()
     >   		//	整体结果设置为失败
     >   		rej('请求取消')
     >   	})
     >   }
     >   ```
   >
   >   如果cancel是有值的，那么就会进入这个if语句，并绑定了then中的成功的回调，在这个异步的回调中完成发送的取消，并且完成了状态的修改【设置为失败】
   >
   >
   >
   >   这样就能通过外部来操作promise中的回调的执行与否，并通过回调中的代码来操作自身的内容
