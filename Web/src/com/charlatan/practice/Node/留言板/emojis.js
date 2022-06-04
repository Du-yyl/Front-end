// B站的表情
let emojis =
    [
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/a062f5fa2bafe677e49b6963a2bbb11dd4fe1e11.png@112w_112h.webp',
            title: '虎年',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/a783df2ce72952c44004007462324bde4b092a0c.png@112w_112h.webp',
            title: '2022',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/ba0937ef6f3ccca85e2e0047e6263f3b4da37201.png@112w_112h.webp',
            title: '藏狐',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/50cb2606c285614f5786bd387c4f00dff923c82b.png@112w_112h.webp',
            title: '脸红',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png@112w_112h.webp',
            title: 'doge',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/685612eadc33f6bc233776c6241813385844f182.png@112w_112h.webp',
            title: '微笑',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/4683fd9ffc925fa6423110979d7dcac5eda297f4.png@112w_112h.webp',
            title: 'OK',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/63c9d1a31c0da745b61cdb35e0ecb28635675db2.png@112w_112h.webp',
            title: '星星眼',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/b4cb77159d58614a9b787b91b1cd22a81f383535.png@112w_112h.webp',
            title: '妙啊',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/35d62c496d1e4ea9e091243fa812866f5fecc101.png@112w_112h.webp',
            title: '辣眼睛',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/4191ce3c44c2b3df8fd97c33f85d3ab15f4f3c84.png@112w_112h.webp',
            title: '吃瓜',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/d15121545a99ac46774f1f4465b895fe2d1411c3.png@112w_112h.webp',
            title: '滑稽',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/b5a5898491944a4268360f2e7a84623149672eb6.png@112w_112h.webp',
            title: '呲牙',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/431432c43da3ee5aab5b0e4f8931953e649e9975.png@112w_112h.webp',
            title: '打call',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/4384050fbab0586259acdd170b510fe262f08a17.png@112w_112h.webp',
            title: '歪嘴',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/8290b7308325e3179d2154327c85640af1528617.png@112w_112h.webp',
            title: '调皮',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/28a91da1685d90124cfeead74622e1ebb417c0eb.png@112w_112h.webp',
            title: '嗑瓜子',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/c3043ba94babf824dea03ce500d0e73763bf4f40.png@112w_112h.webp',
            title: '笑哭',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/bf7e00ecab02171f8461ee8cf439c73db9797748.png@112w_112h.webp',
            title: '脱单doge',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/1597302b98827463f5b75c7cac1f29ea6ce572c4.png@112w_112h.webp',
            title: '给心心',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/abd7404537d8162720ccbba9e0a8cdf75547e07a.png@112w_112h.webp',
            title: '嘟嘟',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/362bded07ea5434886271d23fa25f5d85d8af06c.png@112w_112h.webp',
            title: '哦呼',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/8a10a4d73a89f665feff3d46ca56e83dc68f9eb8.png@112w_112h.webp',
            title: '喜欢',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/92b1c8cbceea3ae0e8e32253ea414783e8ba7806.png@112w_112h.webp',
            title: '酸了',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/de4c0783aaa60ec03de0a2b90858927bfad7154b.png@112w_112h.webp',
            title: '嫌弃',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/2caafee2e5db4db72104650d87810cc2c123fc86.png@112w_112h.webp',
            title: '大哭',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/9d2ec4e1fbd6cb1b4d12d2bbbdd124ccb83ddfda.png@112w_112h.webp',
            title: '害羞',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/b7840db4b1f9f4726b7cb23c0972720c1698d661.png@112w_112h.webp',
            title: '疑惑',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/485a7e0c01c2d70707daae53bee4a9e2e31ef1ed.png@112w_112h.webp',
            title: '喜极而泣',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/bb84906573472f0a84cebad1e9000eb6164a6f5a.png@112w_112h.webp',
            title: '奸笑',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/81edf17314cea3b48674312b4364df44d5c01f17.png@112w_112h.webp',
            title: '笑',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/6c49d226e76c42cd8002abc47b3112bc5a92f66a.png@112w_112h.webp',
            title: '偷笑',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/f8e9a59cad52ae1a19622805696a35f0a0d853f3.png@112w_112h.webp',
            title: '惊讶',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/6921bb43f0c634870b92f4a8ad41dada94a5296d.png@112w_112h.webp',
            title: '捂脸',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/ba8d5f8e7d136d59aab52c40fd3b8a43419eb03c.png@112w_112h.webp',
            title: '阴险',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/12e41d357a9807cc80ef1e1ed258127fcc791424.png@112w_112h.webp',
            title: '囧',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/33ad6000d9f9f168a0976bc60937786f239e5d8c.png@112w_112h.webp',
            title: '呆',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/cb89184c97e3f6d50acfd7961c313ce50360d70f.png@112w_112h.webp',
            title: '抠鼻',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/ca94ad1c7e6dac895eb5b33b7836b634c614d1c0.png@112w_112h.webp',
            title: '大笑',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/0afecaf3a3499479af946f29749e1a6c285b6f65.png@112w_112h.webp',
            title: '惊喜',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/44667b7d9349957e903b1b62cb91fb9b13720f04.png@112w_112h.webp',
            title: '无语',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/1a67265993913f4c35d15a6028a30724e83e7d35.png@112w_112h.webp',
            title: '点赞',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/895d1fc616b4b6c830cf96012880818c0e1de00d.png@112w_112h.webp',
            title: '鼓掌',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/cb321684ed5ce6eacdc2699092ab8fe7679e4fda.png@112w_112h.webp',
            title: '尴尬',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/43d3db7d97343c01b47e22cfabeca84b4251f35a.png@112w_112h.webp',
            title: '灵魂出窍',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/d2f26cbdd6c96960320af03f5514c5b524990840.png@112w_112h.webp',
            title: '委屈',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/010540d0f61220a0db4922e4a679a1d8eca94f4e.png@112w_112h.webp',
            title: '傲娇',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/905fd9a99ec316e353b9bd4ecd49a5f0a301eabf.png@112w_112h.webp',
            title: '疼',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/cb0ebbd0668640f07ebfc0e03f7a18a8cd00b4ed.png@112w_112h.webp',
            title: '冷',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/0f25ce04ae1d7baf98650986454c634f6612cb76.png@112w_112h.webp',
            title: '生病',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/9c10c5ebc7bef27ec641b8a1877674e0c65fea5d.png@112w_112h.webp',
            title: '吓',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/06946bfe71ac48a6078a0b662181bb5cad09decc.png@112w_112h.webp',
            title: '吐',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/c5c6d6982e1e53e478daae554b239f2b227b172b.png@112w_112h.webp',
            title: '捂眼',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/e64af664d20716e090f10411496998095f62f844.png@112w_112h.webp',
            title: '嘘声',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/cfa9b7e89e4bfe04bbcd34ccb1b0df37f4fa905c.png@112w_112h.webp',
            title: '思考',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/fc510306bae26c9aec7e287cdf201ded27b065b9.png@112w_112h.webp',
            title: '再见',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/eba54707c7168925b18f6f8b1f48d532fe08c2b1.png@112w_112h.webp',
            title: '翻白眼',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/888d877729cbec444ddbd1cf4c9af155a7a06086.png@112w_112h.webp',
            title: '哈欠',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/bb2060c15dba7d3fd731c35079d1617f1afe3376.png@112w_112h.webp',
            title: '奋斗',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/3a03aebfc06339d86a68c2d893303b46f4b85771.png@112w_112h.webp',
            title: '墨镜',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/a651db36701610aa70a781fa98c07c9789b11543.png@112w_112h.webp',
            title: '难过',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/531863568e5668c5ac181d395508a0eeb1f0cda4.png@112w_112h.webp',
            title: '撇嘴',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/4c87afff88c22439c45b79e9d2035d21d5622eba.png@112w_112h.webp',
            title: '抓狂',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/3195714219c4b582a4fb02033dd1519913d0246d.png@112w_112h.webp',
            title: '生气',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/3ad2f66b151496d2a5fb0a8ea75f32265d778dd3.png@112w_112h.webp',
            title: '口罩',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/9275275ff1f2659310648221107d20bc4970f106.png@112w_112h.webp',
            title: '牛年',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/d530fcaa5100ba12a17a79b55bad342d530c54e3.png@112w_112h.webp',
            title: '水稻',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/80891223ba023dff3141e377f4ea3b89918eb6a4.png@112w_112h.webp',
            title: '弹幕破百亿',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/8a80589462a38e04716ebcbc6c4764d9d25b1dd0.png@112w_112h.webp',
            title: '12周年',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/5de5373d354c373cf1617b6b836f3a8d53c5a655.png@112w_112h.webp',
            title: '福到了',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/c7860392815d345fa69c4f00ef18d67dccfbd574.png@112w_112h.webp',
            title: '鸡腿',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/a41813c4edf8782047e172c884ebd4507ce5e449.png@112w_112h.webp',
            title: '雪花',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/dce6fc7d6dfeafff01241924db60f8251cca5307.png@112w_112h.webp',
            title: '视频卫星',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/8da12d5f55a2c7e9778dcc05b40571979fe208e6.png@112w_112h.webp',
            title: '干杯',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/ed04066ea7124106d17ffcaf75600700e5442f5c.png@112w_112h.webp',
            title: '爱心',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/643d6c19c8164ffd89e3e9cdf093cf5d773d979c.png@112w_112h.webp',
            title: '锦鲤',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/b49fa9f4b1e7c3477918153b82c60b114d87347c.png@112w_112h.webp',
            title: '胜利',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/c7aaeacb21e107292d3bb053e5abde4a4459ed30.png@112w_112h.webp',
            title: '加油',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/89516218158dbea18ab78e8873060bf95d33bbbe.png@112w_112h.webp',
            title: '抱拳',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/1b5c53cf14336903e1d2ae3527ca380a1256a077.png@112w_112h.webp',
            title: '响指',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/fafe8d3de0dc139ebe995491d2dac458a865fb30.png@112w_112h.webp',
            title: '保佑',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/3c210366a5585706c09d4c686a9d942b39feeb50.png@112w_112h.webp',
            title: '支持',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/41780a4254750cdaaccb20735730a36044e98ef3.png@112w_112h.webp',
            title: '拥抱',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/f2b3aee7e521de7799d4e3aa379b01be032698ac.png@112w_112h.webp',
            title: '跪了',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/07cc6077f7f7d75b8d2c722dd9d9828a9fb9e46d.png@112w_112h.webp',
            title: '怪我咯',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/e90ec4c799010f25391179118ccd9f66b3b279ba.png@112w_112h.webp',
            title: '黑洞',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/8e6fb491eb1bb0d5862e7ec8ccf9a3da12b6c155.png@112w_112h.webp',
            title: '老鼠',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/c4248a7b6ab326d66c83fd1fb58f1a50f99df332.png@112w_112h.webp',
            title: '坎公骑冠剑_吃鸡',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/0b97c7e50e0cc963370e62fbb9b55f51bbe7f8ab.png@112w_112h.webp',
            title: '坎公骑冠剑_钻石',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/80eba0ce64c3fc1279b4daede2f1979cb2380e78.png@112w_112h.webp',
            title: '坎公骑冠剑_无语',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/4ee07ff03266d62b246be0b950bebb2abf3d997c.png@112w_112h.webp',
            title: '来古-沉思',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/9a70b365e523f2379f395031ceefcebb75a45903.png@112w_112h.webp',
            title: '来古-呆滞',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/032fdc0d9d9fe6334776f6c39518a959b73b98f4.png@112w_112h.webp',
            title: '来古-疑问',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/8b40f228675602a317d32007de6b795c101135ec.png@112w_112h.webp',
            title: '来古-震撼',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/4b671ba32a2581cf40e5cd41c67b111eb8010de0.png@112w_112h.webp',
            title: '来古-注意',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/a61abafb8c39defc323b045f30072198007b1c89.png@112w_112h.webp',
            title: '哭泣',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/e6449b0bae13b8c97cc65976ff8cdc2c16be0015.png@112w_112h.webp',
            title: '哈哈',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/6a997106af5bf490f22c80a7acf3be813ee755fc.png@112w_112h.webp',
            title: '狗子',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/f4f9171e4d8c3f30827a8b96ea1ce1beb825ad50.png@112w_112h.webp',
            title: '羞羞',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/2f72bae7b834d499f259c833f7011d5ed8748fd1.png@112w_112h.webp',
            title: '亲亲',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/8188ddf95bace929d382c7a83214afde79d83bfc.png@112w_112h.webp',
            title: '原神_哇',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/91ed33b74bc36873c3ac8b2648f70d7ab6d8ab78.png@112w_112h.webp',
            title: '原神_哼',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/8b0a87e414f453a29730b6e0f45ca61f2f898688.png@112w_112h.webp',
            title: '原神_嗯',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/8fba438fcbe0550877b04efd768d857082307c5e.png@112w_112h.webp',
            title: '原神_欸嘿',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/1de5789fbb3526ef7823c54db7081790a38e7044.png@112w_112h.webp',
            title: '原神_喝茶',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/90a38c34742899f8e84138ed55f56cad3ba611fb.png@112w_112h.webp',
            title: '原神_生气',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/9fce63f38288700bf7be84f3be336cf895ba0902.png@112w_112h.webp',
            title: '保卫萝卜_白眼',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/5ff2ed5cb71b02010018cc5910ac7052a03769af.png@112w_112h.webp',
            title: '保卫萝卜_笔芯',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/7d249f7c990111d3e2982f7477af15b7eb29cbd9.png@112w_112h.webp',
            title: '保卫萝卜_哭哭',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/5f2370e561c32d841245f7b1aab2eef43aeb9544.png@112w_112h.webp',
            title: '保卫萝卜_哇',
        },
        {
            emojiUrl: '//i0.hdslb.com/bfs/emote/41eb93f09fc4a4d0692a310e8a1f85ba60e96060.png@112w_112h.webp',
            title: '保卫萝卜_问号',
        },
    ]

// 颜文字
let emoticons =
    [
        '(゜- ゜)つロ',
        '_(:з」∠)_',
        '（⌒▽⌒）',
        '（￣▽￣）',
        '(=・ω・=)',
        '(*°▽°*)八(*°▽°*)♪',
        '✿ヽ(°▽°)ノ✿',
        '(¦3【▓▓】',
        '눈_눈',
        '(ಡωಡ)',
        '_(≧∇≦」∠)_',
        '━━━∑(ﾟ□ﾟ*川━',
        '(｀・ω・´)',
        '(￣3￣)',
        '✧(≖ ◡ ≖✿)',
        '(･∀･)',
        '(〜￣△￣)〜',
        '→_→',
        '(°∀°)ﾉ',
        '╮(￣▽￣)╭',
        '( ´_ゝ｀)',
        '←_←',
        '(;¬_¬)',
        '(ﾟДﾟ≡ﾟдﾟ)!?',
        '( ´･･)ﾉ(._.`)',
        '(ﾟдﾟ;)',
        '( ￣□￣||)',
        '(´；ω；`)',
        '（/TДT)',
        '(^・ω・^ )',
        '(｡･ω･｡)',
        '(●￣(ｴ)￣●)',
        'ε=ε=(ノ≧∇≦)ノ',
        '(´･_･`)',
        '(-_-#)',
        '（￣へ￣）',
        '(￣ε(#￣)',
        '(╯°口°)╯',
        'ヽ(`Д´)ﾉ',
        'ヽ(`Д´)ﾉ',
        '(▔□▔)/',
        '(º﹃º)',
        '(๑>؂<๑）',
        '｡ﾟ(ﾟ´Д｀)ﾟ｡',
        '(∂ω∂)',
        '(┯_┯)',
        '(・ω・)★',
        '( ๑ˊ•̥▵•)੭₎₎',
        '¥ㄟ(´･ᴗ･`)ノ¥',
        'Σ_(꒪ཀ꒪」∠)_',
        '٩(๛ ˘ ³˘)۶❤',
        '(๑‾᷅^‾᷅๑)',
    ]

let wcEmoji =
    [
        {
            src: 'Emojis/aoman.gif',
            alt: '傲慢',
        },
        {
            src: 'Emojis/baiyan.gif',
            alt: '白眼',
        },
        {
            src: 'Emojis/bishi.gif',
            alt: '鄙视',
        },
        {
            src: 'Emojis/bizui.gif',
            alt: '闭嘴',
        },
        {
            src: 'Emojis/cahan.gif',
            alt: '擦汗',
        },
        {
            src: 'Emojis/ciya.gif',
            alt: '呲牙',
        },
        {
            src: 'Emojis/dabing.gif',
            alt: '大兵',
        },
        {
            src: 'Emojis/daku.gif',
            alt: '大哭',
        },
        {
            src: 'Emojis/deyi.gif',
            alt: '得意',
        },
        {
            src: 'Emojis/doge.gif',
            alt: 'doge',
        },
        {
            src: 'Emojis/fadai.gif',
            alt: '发呆',
        },
        {
            src: 'Emojis/fanu.gif',
            alt: '发怒',
        },
        {
            src: 'Emojis/fendou.gif',
            alt: '奋斗',
        },
        {
            src: 'Emojis/ganga.gif',
            alt: '尴尬',
        },
        {
            src: 'Emojis/guzhang.gif',
            alt: '鼓掌',
        },
        {
            src: 'Emojis/haixiu.gif',
            alt: '害羞',
        },
        {
            src: 'Emojis/hanxiao.gif',
            alt: '憨笑',
        },
        {
            src: 'Emojis/zuohengheng.gif',
            alt: '左哼哼',
        },
        {
            src: 'Emojis/zhuakuang.gif',
            alt: '抓狂',
        },
        {
            src: 'Emojis/zhouma.gif',
            alt: '咒骂',
        },
        {
            src: 'Emojis/zhemo.gif',
            alt: '折磨',
        },
        {
            src: 'Emojis/zaijian.gif',
            alt: '再见',
        },
        {
            src: 'Emojis/youhengheng.gif',
            alt: '右哼哼',
        },
        {
            src: 'Emojis/yiwen.gif',
            alt: '疑问',
        },
        {
            src: 'Emojis/yinxian.gif',
            alt: '阴险',
        },
        {
            src: 'Emojis/xu.gif',
            alt: '嘘',
        },
        {
            src: 'Emojis/xieyanxiao.gif',
            alt: '滑稽',
        },
        {
            src: 'Emojis/xiaoku.gif',
            alt: '笑哭',
        },
        {
            src: 'Emojis/xiaojiujie.gif',
            alt: '小纠结',
        },
        {
            src: 'Emojis/xia.gif',
            alt: '吓',
        },
        {
            src: 'Emojis/wunai.gif',
            alt: '无奈',
        },
        {
            src: 'Emojis/wozuimei.gif',
            alt: '我最美',
        },
        {
            src: 'Emojis/weixiao.gif',
            alt: '微笑',
        },
        {
            src: 'Emojis/weiqu.gif',
            alt: '委屈',
        },
        {
            src: 'Emojis/tuosai.gif',
            alt: '托腮',
        },
        {
            src: 'Emojis/tu.gif',
            alt: '吐',
        },
        {
            src: 'Emojis/touxiao.gif',
            alt: '偷笑',
        },
        {
            src: 'Emojis/tiaopi.gif',
            alt: '调皮',
        },
        {
            src: 'Emojis/shui.gif',
            alt: '睡',
        },
        {
            src: 'Emojis/se.gif',
            alt: '色迷迷',
        },
        {
            src: 'Emojis/saorao.gif',
            alt: '骚扰',
        },
        {
            src: 'Emojis/qiudale.gif',
            alt: '糗大了',
        },
        {
            src: 'Emojis/qinqin.gif',
            alt: '亲亲',
        },
        {
            src: 'Emojis/qiaoda.gif',
            alt: '敲打',
        },
        {
            src: 'Emojis/piezui.gif',
            alt: '撇嘴',
        },
        {
            src: 'Emojis/penxue.gif',
            alt: '喷血',
        },
        {
            src: 'Emojis/nanguo.gif',
            alt: '难过',
        },
        {
            src: 'Emojis/liulei.gif',
            alt: '流泪',
        },
        {
            src: 'Emojis/liuhan.gif',
            alt: '流汗',
        },
        {
            src: 'Emojis/lenghan.gif',
            alt: '冷汗',
        },
        {
            src: 'Emojis/leiben.gif',
            alt: '泪奔',
        },
        {
            src: 'Emojis/kun.gif',
            alt: '困',
        },
        {
            src: 'Emojis/kuaikule.gif',
            alt: '快哭了',
        },
        {
            src: 'Emojis/ku.gif',
            alt: '酷',
        },
        {
            src: 'Emojis/koubi.gif',
            alt: '抠鼻',
        },
        {
            src: 'Emojis/kelian.gif',
            alt: '可怜',
        },
        {
            src: 'Emojis/keai.gif',
            alt: '可爱',
        },
        {
            src: 'Emojis/jingya.gif',
            alt: '惊讶',
        },
        {
            src: 'Emojis/jingxi.gif',
            alt: '惊喜',
        },
        {
            src: 'Emojis/jingkong.gif',
            alt: '惊恐',
        },
        {
            src: 'Emojis/jie.gif',
            alt: '馋',
        },
        {
            src: 'Emojis/huaixiao.gif',
            alt: '坏笑',
        },
        {
            src: 'Emojis/haqian.gif',
            alt: '哈欠',
        },
        {
            src: 'Emojis/aini.gif',
            alt: '爱你',
        },
        {
            src: 'Emojis/OK.gif',
            alt: 'OK',
        },
        {
            src: 'Emojis/qiang.gif',
            alt: '强',
        },
        {
            src: 'Emojis/quantou.gif',
            alt: '拳头',
        },
        {
            src: 'Emojis/shengli.gif',
            alt: '耶',
        },
        {
            src: 'Emojis/woshou.gif',
            alt: '握手',
        },
        {
            src: 'Emojis/gouyin.gif',
            alt: '勾引',
        },
        {
            src: 'Emojis/baoquan.gif',
            alt: '抱拳',
        },
        {
            src: 'Emojis/aixin.gif',
            alt: '爱心',
        },
        {
            src: 'Emojis/bangbangtang.gif',
            alt: '棒棒糖',
        },
        {
            src: 'Emojis/xiaoyanger.gif',
            alt: '小鸟儿',
        },
        {
            src: 'Emojis/xigua.gif',
            alt: '西瓜',
        },
        {
            src: 'Emojis/hexie.gif',
            alt: '河蟹',
        },
        {
            src: 'Emojis/pijiu.gif',
            alt: '啤酒',
        },
        {
            src: 'Emojis/lanqiu.gif',
            alt: '篮球',
        },
        {
            src: 'Emojis/juhua.gif',
            alt: '菊花',
        },
        {
            src: 'Emojis/hecai.gif',
            alt: '喝彩',
        },
        {
            src: 'Emojis/haobang.gif',
            alt: '好棒',
        },
        {
            src: 'Emojis/caidao.gif',
            alt: '菜刀',
        },
        {
            src: 'Emojis/baojin.gif',
            alt: '生气',
        },
        {
            src: 'Emojis/chi.gif',
            alt: '吃',
        },
        {
            src: 'Emojis/dan.gif',
            alt: '蛋',
        },
        {
            src: 'Emojis/kulou.gif',
            alt: '骷髅',
        },
        {
            src: 'Emojis/shuai.gif',
            alt: '帅',
        },
        {
            src: 'Emojis/shouqiang.gif',
            alt: '手枪',
        },
        {
            src: 'Emojis/yangtuo.gif',
            alt: '羊驼',
        },
        {
            src: 'Emojis/youling.gif',
            alt: '幽灵',
        },
    ]
