# E宠商城接口

## 主页

> **以下内容中，使用感叹号的地方请着重确认**



> 链接地址 - 1 <span style="color:red">【**本链接中为主页所有数据，可以根据 `title` 或 `module_name_for_google_utm`确认是否为需要内容**】！！！</span>

主要：

```http
https://mall.api.epet.com/v3/index/home.html?pet_type=cat&version=596&is_single=0&isWeb=1&system=wap
```

备用：

```http
https://mall.api.epet.com/v3/index/home.html?pet_type=cat&version=596&is_single=0&isWeb=1&system=wap&distinct_id=18109df4a501095-0395e0ad0df9f5c-5437971-370944-18109df4a51e23&debug_param=
```

tips:

```R
主要链接和备用链接：
	主要链接中剩去了"distinct_id"的发送，这个是电脑的"uuid"，但是结果相同，可以更加简短
参数：
	"pet_type" 宠物类型（进入主页面时，进行选择的宠物，这里请统一使用 小猫 ！！！ ）
	"version" 网页版本（不能改变！！！）
	"is_single" 
	"isWeb" 是否是网页端
	"system" 
```

```链接 - 1```包含内容：

1. **搜索框提示词**：`返回内容`.datas.navs.search.placeholder

2. **搜索框提示**：

   <img src="D:\ts_vue\vite_vue_ts\APIIterface\interface\img_6.png" style="zoom:50%;" />

   > `返回数据`.datas.navs.searchList

3. **轮播图**：`返回内容`.datas.list[1].data.images

4. **背景图**：`返回内容`.data.list[1].data.background_img

5. **单品推荐【冰点商品推荐】**：`返回内容`.datas.navs.pet_img

6. **轮播图下商品列表(红框标注位置）【根据ID进行判断为哪一行的商品】**：5/30 商品列表`index`为：7576 ~ 7678 (这个数组中为商品的数据下标不确定！！！)

   <img src="D:\ts_vue\vite_vue_ts\APIIterface\interface\img.png" alt="./" style="zoom:50%;" />

   > // 单品推荐【轮播图下商品】
   > // 第一行商品内容
   > index:7675
   > 返回内容.datas.list[12].data.goods_list
   > // 第二行商品内容
   > index:7676
   > 返回内容.datas.list[14].data.goods_list
   > // 第三行商品内容
   > index:7677
   > 返回内容.datas.list[16].data.goods_list
   > // 第四行商品内容
   > index:7678
   > 返回内容.datas.list[18].data.goods_list
   > // 第五行商品内容
   > index:7680
   > 返回内容.datas.list[20].data.goods_list
   > // 第六行商品内容
   > index:7682
   > 返回内容.datas.list[22].data.goods_list

7. **单单有礼和签到抽奖**数据：

   <img src="D:\ts_vue\vite_vue_ts\APIIterface\interface\img_1.png" style="zoom:50%;" />

   > // index : 7447
   > `返回数据`.datas.list[24].data

8. **每日疯抢**数据：

   <img src="D:\ts_vue\vite_vue_ts\APIIterface\interface\img_2.png" style="zoom:50%;" />

   > // index 7448
   > `返回数据`.datas.list[25].data.goods

9. **养宠风尚 拒绝平庸**数据：

   <img src="D:\ts_vue\vite_vue_ts\APIIterface\interface\img_3.png" style="zoom:50%;" />

   > // index : 7168
   > data.datas.list[26].data

10. **心选特惠**数据：

    ​    <img src="D:\ts_vue\vite_vue_ts\APIIterface\interface\img_4.png" style="zoom:50%;" />

    > // index = 7165
    > data.datas.list[27].data

11. **猜你喜欢**数据：<span style="color:red"><b>这个内容需要实现懒加载！！！</b></span>

    <img src="D:\ts_vue\vite_vue_ts\APIIterface\interface\img_5.png" style="zoom:50%;" />

    > // index = 5735
    > data.datas.list[28].data

12. **猜你喜欢触底加载**

    > 链接：
    >
    > ​ 主要：https://mall.api.epet.com/v3/index/home.html?version=554&leaf=3&system=wap&isWeb=1
    >
    > ​ 备用：https://mall.api.epet.com/v3/index/home.html?version=554&leaf=3&system=wap&isWeb=1&distinct_id=18109df4a501095-0395e0ad0df9f5c-5437971-370944-18109df4a51e23&debug_param=
    >
    > ​ 两个链接区别：备用链接中携带有电脑的数据ID，不携带同样可以请求数据，第一种更简
    >
    > **链接参数**：
    >
    > ​    <span style="color:red;font-size:30px;">leaf : 每一次要发送请求的页数，因为第一次的主要请求中已经有一次了，所以直接从 2 开始，并且每一次重新发送数据，都要进行 leaf 的更新，不然数据一样，leaf 最大值为 6 ，请不要发送超过 6 之后的数据，发送正确响应</span>
    >
    > 返回的数据：
    >
    > > // index = 5735
    > >
    > > `返回的数据`.datas.list[0].data

## 分类

1. **主分类**数据

   <img src="D:\ts_vue\vite_vue_ts\APIIterface\interface\img_7.png" style="zoom:50%;" />

   **链接：**

   ​ 主要：

   ```http
   https://mallcdn.api.epet.com/v3/goods/category/main.html?pet_type=cat&version=358&system=wap&isWeb=1&distinct_id=18109df4a501095-0395e0ad0df9f5c-5437971-370944-18109df4a51e23&_=1653894438911
   ```

   ​ 备用：

   ```http
   https://mallcdn.api.epet.com/v3/goods/category/main.html?pet_type=cat&version=358&system=wap&isWeb=1
   ```

   **返回数据**：

   ​    <img src="D:\ts_vue\vite_vue_ts\APIIterface\interface\img_9.png" style="zoom:50%;" />

   <span style="color:red">返回的数据中**cateid**字段中的内容再发送对象的详细链接时需要使用</span>

2. **详细分类**：

   ​    <img src="D:\ts_vue\vite_vue_ts\APIIterface\interface\img_8.png" style="zoom:50%;" />

   **链接：**

   ```http
   https://mallcdn.api.epet.com/v3/goods/category/main.html?do=getChildren&owner=将文字部分删除，替换为具体数据内容&pet_type=cat&issite=true&version=358&system=wap&isWeb=1
   ```

   **参数：**

   <span style="color:red">**owner** : 这个参数进行穿值时，需要将对应cateid字段传入，这个字段在发送总分类时获取</span>
