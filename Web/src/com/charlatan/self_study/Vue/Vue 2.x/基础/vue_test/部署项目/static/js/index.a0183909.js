(function(){"use strict";var t={7604:function(t,e,n){var a=n(8935),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{attrs:{id:"h2"}},[t._v(" 使用路由进行不同组件之间的切换 ")]),n("btns",{staticClass:"btn"}),n("hr"),n("tab",{attrs:{id:"tab"}}),n("div",{staticClass:"container"},[n("router-view")],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"div"},[n("ul",{staticClass:"ul"},t._l(t.tabs,(function(e){return n("li",{key:e.id,staticClass:"li"},[n("router-link",{staticClass:"list-group-item",attrs:{to:"/"+e.value,"active-class":"active"}},[t._v(t._s(e.value)+" ")])],1)})),0)])},o=[],l={name:"tab",data(){return{tabs:[{id:"001",value:"about"},{id:"002",value:"home"},{id:"003",value:"user"}]}},components:{},methods:{change(t){console.log(window.location.href="http://localhost:8080/#/"+this.tabs[t].value)}}},u=l,c=n(1001),v=(0,c.Z)(u,r,o,!1,null,"22710088",null),m=v.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v(" 我是about中的内容 ")])},h=[],d={name:"about",data(){return{}},components:{}},f=d,_=(0,c.Z)(f,p,h,!1,null,"27c68e0c",null),b=_.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" 我是user中的内容 ")])])}],y={name:"user",data(){return{}},components:{}},k=y,C=(0,c.Z)(k,w,g,!1,null,"423075e1",null),$=C.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" 我是home中的内容 ")]),n("ul",t._l(t.homes,(function(e){return n("li",{key:e.id,staticClass:"list-group-item li"},[n("router-link",{attrs:{to:"/home/"+e.value,"active-class":"action"}},[t._v(" "+t._s(e.value)+" ")])],1)})),0),n("keep-alive",{attrs:{include:"mag"}},[n("router-view")],1)],1)},Z=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticStyle:{display:"flex",width:"300px","flex-wrap":"wrap"}},t._l(t.msgs,(function(e){return n("li",{key:e.id,staticClass:"li"},[t._v(" "+t._s(e.value)+" --\x3e "),n("input",{attrs:{type:"text",name:"",id:"",placeholder:"输入"}})])})),0),n("div",{staticClass:"div",style:{opacity:t.opacity}},[t._v(" 我是文字内容 ")])])},O=[],S={name:"mag",data(){return{msgs:[{id:"001",value:"第一个msg信息"},{id:"002",value:"第二个msg信息"},{id:"003",value:"第三个msg信息"}],opacity:1}},components:{},beforeDestroy(){console.log("销毁开始"),clearInterval(this.timer)},mounted(){this.timer=setInterval((()=>{this.opacity-=.01,this.opacity=this.opacity<=0?1:this.opacity}),10),console.log(this.$route.meta)},activated(){this.timer=setInterval((()=>{this.opacity-=.01,this.opacity=this.opacity<=0?1:this.opacity}),10)},deactivated(){clearInterval(this.timer)}},j=S,I=(0,c.Z)(j,E,O,!1,null,"9c460480",null),A=I.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"ul"},t._l(t.news,(function(e){return n("li",{key:e.id,staticClass:"li"},[n("router-link",{attrs:{to:{name:"now",params:{id:e.id,title:e.value}},"active-class":"action"}},[t._v(" "+t._s(e.value)+" ")]),n("br"),n("button",{staticClass:"btn btn-success btns",on:{click:function(n){return t.pushShow(e)}}},[t._v("push查看")]),n("button",{staticClass:"btn btn-success btns",on:{click:function(n){return t.replaceShow(e)}}},[t._v("replace查看")])],1)})),0),n("router-view",{staticClass:"show"})],1)},D=[],P={name:"news",data(){return{news:[{id:"001",value:"第一个news信息",link:"now"},{id:"002",value:"第二个news信息",link:"now"},{id:"003",value:"第三个news信息",link:"now"}]}},components:{},methods:{pushShow(t){this.$router.push({name:"now",params:{id:t.id,title:t.value}})},replaceShow(t){this.$router.replace({name:"now",params:{id:t.id,title:t.value}})}},mounted(){console.log(this.$route.meta)}},q=P,F=(0,c.Z)(q,T,D,!1,null,"4f000840",null),M=F.exports,z={name:"home",data(){return{homes:[{id:"001",value:"mag"},{id:"002",value:"news"}]}},components:{mag:A,news:M}},B=z,G=(0,c.Z)(B,x,Z,!1,null,"74c58084",null),H=G.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn btn-warning",on:{click:t.back}},[t._v("后退")]),n("button",{staticClass:"btn btn-success",on:{click:t.go}},[t._v("前进")])])},K=[],L={name:"btns",data(){return{}},components:{},methods:{back(){this.$router.back()},go(){this.$router.forward()}}},N=L,Q=(0,c.Z)(N,J,K,!1,null,"43641b3b",null),R=Q.exports,U={name:"App",data(){return{}},components:{tab:m,about:b,home:H,user:$,btns:R}},V=U,W=(0,c.Z)(V,i,s,!1,null,"38c28cb3",null),X=W.exports,Y=n(2809),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",[n("li",{staticClass:"li1"},[t._v("消息ID："+t._s(t.$route.params.id))]),n("li",{staticClass:"li1"},[t._v("消息内容："+t._s(t.$route.params.title))]),n("li",{staticClass:"li2"},[t._v(" "+t._s(t.$route.params.id))]),n("li",{staticClass:"li2"},[t._v(" "+t._s(t.$route.params.title))])])])},et=[],nt={name:"now",props:{id:String,title:String},mounted(){console.log(this.$route)}},at=nt,it=(0,c.Z)(at,tt,et,!1,null,"5ede1e12",null),st=it.exports;n(8975);const rt=new Y.Z({mode:"history",routes:[{path:"/about",component:b,name:"about",meta:{title:"关于"}},{path:"/home",component:H,name:"home",meta:{title:"主页"},children:[{path:"mag",component:A,name:"mag",meta:{isAuth:!0,title:"信息"}},{path:"news",component:M,meta:{isAuth:!0,title:"新闻"},children:[{path:"/home/news/now/:id/:title",component:st,name:"now",props({query:{id:t,title:e}}){return{id:t,title:e}}}]}]},{path:"/user",component:$,name:"user",meta:{title:"用户"}}]});var ot=rt;a.Z.use(Y.Z),a.Z.config.productionTip=!1;new a.Z({el:"#app",render:t=>t(X),router:ot})}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,s){if(!a){var r=1/0;for(c=0;c<t.length;c++){a=t[c][0],i=t[c][1],s=t[c][2];for(var o=!0,l=0;l<a.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(o=!1,s<r&&(r=s));if(o){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[a,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={826:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,s,r=a[0],o=a[1],l=a[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var c=l(n)}for(e&&e(a);u<r.length;u++)s=r[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},a=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7604)}));a=n.O(a)})();
//# sourceMappingURL=index.a0183909.js.map