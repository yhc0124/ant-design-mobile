webpackJsonp([19,94],{389:function(n,a,s){n.exports={content:[["p","\u906e\u7f69\u5c42\u6a21\u5f0f"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/drawer/demo/basic.md",id:"components-drawer-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Drawer<span class="token punctuation">,</span> List<span class="token punctuation">,</span> NavBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App1</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    open<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    position<span class="token punctuation">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  onOpenChange <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> open<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>open <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> sidebar <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span>\n            <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png<span class="token punctuation">"</span></span>\n            <span class="token attr-name">multipleLine</span>\n          <span class="token punctuation">></span></span>\u5206\u7c7b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span>\n          <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span>\u5206\u7c7b<span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> drawerProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n      open<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>open<span class="token punctuation">,</span>\n      position<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>position<span class="token punctuation">,</span>\n      onOpenChange<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onOpenChange<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token attr-name">iconName</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ellipsis<span class="token punctuation">"</span></span> <span class="token attr-name">onLeftClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onOpenChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u57fa\u672c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavBar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Drawer</span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-drawer<span class="token punctuation">"</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> minHeight<span class="token punctuation">:</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">-</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">sidebar</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>sidebar<span class="token punctuation">}</span></span>\n        <span class="token attr-name">dragHandleStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> display<span class="token punctuation">:</span> <span class="token string">\'none\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">contentStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#A6A6A6\'</span><span class="token punctuation">,</span> textAlign<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span> paddingTop<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">{...drawerProps}</span>\n      <span class="token punctuation">></span></span>\n        \u8bf7\u70b9\u51fb\u5de6\u4e0a\u89d2\u56fe\u6807\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Drawer</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App1</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],o=Object.getOwnPropertyDescriptor(a,p);o&&o.configurable&&void 0===n[p]&&Object.defineProperty(n,p,o)}return n}function t(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return Array.from(n)}function p(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function o(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function e(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):a(n,s))}var c=s(1),u=(s(3),s(163),s(162)),l=n(u),i=(s(84),s(83)),k=n(i),r=(s(14),s(17)),d=n(r),m=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},g=function(n){function a(){var s,t,e;p(this,a);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return s=t=o(this,n.call.apply(n,[this].concat(u))),y.call(t),e=s,o(t,e)}return e(a,n),a.prototype.render=function(){var n=c.createElement(d["default"],null,[].concat(t(Array(20).keys())).map(function(n,a){return 0===a?c.createElement(d["default"].Item,{key:a,thumb:"https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png",multipleLine:!0},"\u5206\u7c7b"):c.createElement(d["default"].Item,{key:a,thumb:"https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"},"\u5206\u7c7b",a)})),a={open:this.state.open,position:this.state.position,onOpenChange:this.onOpenChange};return c.createElement("div",null,c.createElement(k["default"],{iconName:"ellipsis",onLeftClick:this.onOpenChange},"\u57fa\u672c"),c.createElement(l["default"],m({className:"my-drawer",style:{minHeight:document.documentElement.clientHeight-200},sidebar:n,dragHandleStyle:{display:"none"},contentStyle:{color:"#A6A6A6",textAlign:"center",paddingTop:42}},a),"\u8bf7\u70b9\u51fb\u5de6\u4e0a\u89d2\u56fe\u6807"))},a}(c.Component),y=function(){var n=this;this.state={open:!1,position:"left"},this.onOpenChange=function(){for(var a=arguments.length,s=Array(a),t=0;t<a;t++)s[t]=arguments[t];console.log(s),n.setState({open:!n.state.open})}};return c.createElement(g,null)},style:".my-drawer {\n  position: relative;\n  overflow: auto;\n}\n.my-drawer .am-drawer-sidebar {\n  background-color: #fff;\n  overflow: auto;\n}\n.my-drawer .am-drawer-sidebar .am-list {\n  width: 6rem;\n  padding: 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.my-drawer</span> </span><span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.my-drawer</span> <span class="token class">.am-drawer-sidebar</span> </span><span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.my-drawer</span> <span class="token class">.am-drawer-sidebar</span> <span class="token class">.am-list</span> </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">6</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},390:function(n,a,s){n.exports={content:[["p","\u5d4c\u5165\u5230\u6587\u6863\u6d41\u4e2d"]],meta:{order:1,title:"\u5d4c\u5165\u6587\u6863\u6a21\u5f0f",filename:"components/drawer/demo/dock.md",id:"components-drawer-demo-dock"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Drawer<span class="token punctuation">,</span> List<span class="token punctuation">,</span> NavBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    docked<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  onDock <span class="token operator">=</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> sidebar <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span>\n            <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png<span class="token punctuation">"</span></span>\n            <span class="token attr-name">multipleLine</span>\n          <span class="token punctuation">></span></span>\u5206\u7c7b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span>\n          <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span>\u5206\u7c7b<span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> drawerProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n      docked<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>docked<span class="token punctuation">,</span>\n      open<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      position<span class="token punctuation">:</span> <span class="token string">\'left\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token string">\'100%\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token attr-name">iconName</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ellipsis<span class="token punctuation">"</span></span> <span class="token attr-name">onLeftClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onDock</span><span class="token punctuation">(</span><span class="token string">\'docked\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5d4c\u5165\u6587\u6863<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NavBar</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Drawer</span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-drawer<span class="token punctuation">"</span></span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> minHeight<span class="token punctuation">:</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">-</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">sidebar</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>sidebar<span class="token punctuation">}</span></span>\n        <span class="token attr-name">dragHandleStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> display<span class="token punctuation">:</span> <span class="token string">\'none\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">sidebarStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> border<span class="token punctuation">:</span> <span class="token string">\'1px solid #ddd\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">contentStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#A6A6A6\'</span><span class="token punctuation">,</span> textAlign<span class="token punctuation">:</span> <span class="token string">\'center\'</span><span class="token punctuation">,</span> paddingTop<span class="token punctuation">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">{...drawerProps}</span>\n      <span class="token punctuation">></span></span>\n        \u8bf7\u70b9\u51fb\u5de6\u4e0a\u89d2\u56fe\u6807\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Drawer</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],o=Object.getOwnPropertyDescriptor(a,p);o&&o.configurable&&void 0===n[p]&&Object.defineProperty(n,p,o)}return n}function t(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return Array.from(n)}function p(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function o(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function e(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function c(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):a(n,s))}var u=s(1),l=(s(3),s(163),s(162)),i=n(l),k=(s(84),s(83)),r=n(k),d=(s(14),s(17)),m=n(d),g=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},y=function(n){function a(){var s,t,c;o(this,a);for(var u=arguments.length,l=Array(u),i=0;i<u;i++)l[i]=arguments[i];return s=t=e(this,n.call.apply(n,[this].concat(l))),t.state={docked:!1},t.onDock=function(n){t.setState(p({},n,!t.state[n]))},c=s,e(t,c)}return c(a,n),a.prototype.render=function(){var n=this,a=u.createElement(m["default"],null,[].concat(t(Array(20).keys())).map(function(n,a){return 0===a?u.createElement(m["default"].Item,{key:a,thumb:"https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png",multipleLine:!0},"\u5206\u7c7b"):u.createElement(m["default"].Item,{key:a,thumb:"https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"},"\u5206\u7c7b",a)})),s={docked:this.state.docked,open:!1,position:"left"};return u.createElement("div",{style:{height:"100%"}},u.createElement(r["default"],{iconName:"ellipsis",onLeftClick:function(){return n.onDock("docked")}},"\u5d4c\u5165\u6587\u6863"),u.createElement(i["default"],g({className:"my-drawer",style:{minHeight:document.documentElement.clientHeight-200},sidebar:a,dragHandleStyle:{display:"none"},sidebarStyle:{border:"1px solid #ddd"},contentStyle:{color:"#A6A6A6",textAlign:"center",paddingTop:42}},s),"\u8bf7\u70b9\u51fb\u5de6\u4e0a\u89d2\u56fe\u6807"))},a}(u.Component);return u.createElement(y,null)},style:".my-drawer {\n  position: relative;\n  overflow: auto;\n}\n.my-drawer .am-drawer-sidebar {\n  background-color: #fff;\n  overflow: auto;\n}\n.my-drawer .am-drawer-sidebar .am-list {\n  width: 6rem;\n  padding: 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.my-drawer</span> </span><span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.my-drawer</span> <span class="token class">.am-drawer-sidebar</span> </span><span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.my-drawer</span> <span class="token class">.am-drawer-sidebar</span> <span class="token class">.am-list</span> </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">6</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'
}},492:function(n,a,s){n.exports={basic:s(389),dock:s(390)}}});