# Axios 发送 Ajax 的完整过程

1. 先对axios的基本函数进行配置，通过 createInstance 完成【可以传入一个Object类型的参数】

   ```js
   // 通过配置创建 axios 函数
   var axios = createInstance(defaults);
   ```

2. 进入 createInstance 方法，这里能创建一个 Axios 的实例对象，传入形参的默认配置

     

     

