# Vue源码

> 在虚拟DOM的比较中，较常使用的是一个DOM比较的鼻祖：`snabbdom`Vue中也基本模拟这个算法来进行的实现

## diff算法

1. diff算法如何定义两个节点是同一个节点的？

   > 在 snabbdom 中一般采用的是，先判断两个key是否相同，并且判断新节点的选择器要和旧节点的选择器相同

2. diff中如何进行内容的比较？

   > diff中一般采用同级比较，如果一个元素通过操作被添加了一个父级，那么diif会认为这两个是完全不同的元素。
   >
   >   - 比较只会在同层级进行, 不会跨层级比较
   >   - 在diff比较的过程中，循环从两边向中间比较
   >   - 深度优先，同层比较

3. diff算法第一次上树流程？

> 1. 当传入两个节点进行diff时，第一件事就是判断两个节点是否都是虚拟节点，如第一次上树时，第一个是
     >        真实DOM，而第二个是虚拟DOM，如果第一个是真实DOM，会通过转换，将这个DOM转换为虚拟DOM
     >

2. 得到两个虚拟DOM后，进行比较，如果是同一个节点，那么进行精细比较，如果不是那么直接暴力删除旧的，插入新的

4. 经典的diff算法优化策略

   > 四种命中模式：
   >
   >   1. 新前与旧前
   >   2. 新后与旧后
   >   3. 新后与旧前
   >   4. 新前与旧后
   >
   >   这四种策略从前到后，如果其中一个命中，那么就不会进行比较，这基本能完成常规的开发思路和策略
   >
   >   进行对比时生成4个指针，分别指向了新的虚拟节点的开始和结尾，旧节点的开始和结尾，通过这4个指针进行对比
   >
   >   1. 新前和旧前
          >
          >        ```html
          >        <!--    旧元素【新增元素情况】-->
          >        <ul>
          >            <li>A</li>
          >            <li>B</li>
          >            <li>C</li>
          >            <li>D</li>
          >        </ul>
          >        <!--    新元素-->
          >        <ul>
          >            <li>A</li>
          >            <li>B</li>
          >            <li>C</li>
          >            <li>D</li>
          >            <li>E</li>
          >            <li>F</li>
          >        </ul>
          >        ```
   >
   >
   >
   >        1.   如果两个节点相同那么开始对比下一个，循环对比依次进行【先进行对比：A和A比，B和B比，因为满足第一个条件所以一直命中在第一种情况就完成了对比】
   >        2.   如果旧节点先循环完毕，说明新节点中有新增内容，那么旧不进行对比，直接将这些新增元素添加到虚拟DOM中【如果对比到新节点的E元素就不再进行对比，直接将将最后两个元素添加到页面中】
   >
   >   2. 新后和旧后
          >
          >        ```html
          >        <!--    新元素-->
          >        <ul>
          >            <li>A</li>
          >            <li>B</li>
          >            <li>C</li>
          >            <li>D</li>
          >        </ul>
          >        <!--    旧元素-->
          >        <ul>
          >            <li>A</li>
          >            <li>B</li>
          >            <li>D</li>
          >        </ul>
          >        ```
          >
          >
    1. 首先进行对比，新的A元素和旧的A元素进行对比，命中，继续对比，新的B和旧的B命中，继续命中，继续进行对比
   >        1. 这时对比新的第三个元素，也就是D和就的第三个元素进行对比，也就是C，发现不相同，第一种情况没有命中，那么开始第二种情况的命中：`新后和旧后`，这种情况命中，D和D命中，那么会向反方向前进，也就是统一向前，但是新节点循环完毕，并且老节点还有一个剩余的C节点没有进行操作，那么说明这个元素是要被删除的，这时完成操作
          >
          >        > 多删除情况
          >
          >        ```html
   >        <!--    旧元素-->
   >        <ul>
   >        	<li>A</li>
   >        	<li>B</li>
   >        	<li>C</li>
   >        	<li>D</li>
   >        	<li>E</li>
   >        </ul>
   >        <!--    新元素-->
   >        <ul>
   >        	<li>A</li>
   >        	<li>B</li>
   >        	<li>D</li>
   >        </ul>
   >        ```
          >
          >
    1. 多删除情况同样从第一种情况开始进行，新前和旧前进行对比，命中，继续进行，继续命中，继续进行
   >        2. 到第三个元素，新前和旧前的方式发现没有命中，这时会使用新后和旧后进行对比，新后的指针指向了D元素，旧后的指针指向的是D元素；仍然没有命中，这时进行的是下一个规则的命中：`新后与旧前`，新后的指针指向的是D元素，旧前的指针指向的是C元素（因为到那里停止的，所以一暂时会一直在那里），这种情况仍然不命中；这时进行的是第四种情况的对比：`新前和旧后`的对比，这时的新前元素是C元素，旧后是E元素，发现仍不命中。
   >        3. 这时发现四种情况都不命中，那么开始使用循环来寻找，在Vue中这里会标记成undefined，通过循环找到的元素会插入新元素中
   >        4. 这时新元素第三个寻找完毕，新元素完成循环，将老节点中的元素剩余元素进行删除
   >
   >   3. 新前和旧后
          >
          >        ```html
          >        <!--    旧元素-->
          >        <ul>
          >            <li>A</li>
          >            <li>B</li>
          >            <li>C</li>
          >            <li>D</li>
          >            <li>E</li>
          >        </ul>
          >        <!--    新元素-->
          >        <ul>
          >            <li>E</li>
          >            <li>C</li>
          >            <li>M</li>
          >        </ul>
          >        ```
          >
          >
    1.
   同样进行的是前3中情况的对比，发现全都不命中，到第四种情况发现命中，进行这个节点的处理，并赋值为undefined然后两个节点分别会向自己指定的方向移动，新前会向下移动，旧后会向上移动，找到这个元素（E元素）会被移动到旧前节点之前
   >        2. 进行第二个新节点元素的对比，四种情况都不命中，这时进行循环查找，查到后同样的方式，将这个元素位置赋值为undefined，然后将这个元素移动旧前节点元素之前
   >        3. 第三个元素没找到直接插入，新节点循环完毕，将剩余节点进行删除
   >
   >   4. 新后和旧前
          >
          >        ```html
          >        <!--    旧元素-->
          >        <ul>
          >            <li>A</li>
          >            <li>B</li>
          >            <li>C</li>
          >            <li>D</li>
          >            <li>E</li>
          >        </ul>
          >        <!--    新元素-->
          >        <ul>
          >            <li>E</li>
          >            <li>D</li>
          >            <li>C</li>
          >            <li>B</li>
          >            <li>A</li>
          >        </ul>
          >        ```
          >
          >
    1. 这种情况一直是新后和旧前进行命中
   >        2. 先赋值undefined，然后将这个元素移动到旧后元素的最后，循环完毕，将undefined进行处理即可
   >
   >   5. 注意点：
          >
          >        > 1. 只有第三和四情况下才会涉及到运动节点
          >        >   2. ③情况发生时，老节点原来位置会被赋值undefined，移动节点到旧后节点后面
          >        >   3. ④情况发生时，老节点原来位置会被赋值undefined，移动节点到旧前节点前面
