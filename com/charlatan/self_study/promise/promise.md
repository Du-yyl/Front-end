# Promise

1. 什么是Promise

    1. 对Promise的理解
        1. 从语法上来说: Promise 是一个构造函数 ；
        2. 从功能上来说: promise 对象用来封装一个异步操作并可以获取其成功/ 失败的结果值

2. Promise的状态

    1. resolve(value): 如果当前是 pending 就会变为 resolved

    2. reject(reason): 如果当前是 pending 就会变为 rejected

    3. 抛出异常: 如果当前是 pending 就会变为 rejected

       > 实例对象中的一个属性 『PromiseState』
       >
       >   - pending 未决定的
       >   - resolved / fullfilled 成功
       >   - rejected 失败

    4. Promise 对象的值

       实例对象中的另一个属性 『PromiseResult』 保存着异步任务『成功/失败』的结果

        - resolve
        - reject

