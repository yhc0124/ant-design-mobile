webpackJsonp([28,94],{463:function(n,s,a){n.exports={content:[["p","\u591a\u7528\u4e8e\u9875\u9762\u7684\u5185\u5bb9\u533a\u5757\uff0c\u8d77\u7740\u63a7\u5236\u5c0f\u8303\u56f4\u5185\u7684\u5927\u5757\u5185\u5bb9\u7684\u5206\u7ec4\u548c\u9690\u85cf\uff0c\u8d77\u7740\u4fdd\u6301\u754c\u9762\u6574\u6d01\u7684\u4f5c\u7528\u3002"]],meta:{order:0,title:"APP\u578b\u9009\u9879\u5361",filename:"components/tab-bar/demo/basic.md",id:"components-tab-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TabBar<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">/* eslint global-require: 0 */</span>\n\n<span class="token keyword">class</span> <span class="token class-name">TabBarExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      selectedTab<span class="token punctuation">:</span> <span class="token string">\'redTab\'</span><span class="token punctuation">,</span>\n      hidden<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">renderContent</span><span class="token punctuation">(</span>pageText<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'white\'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> textAlign<span class="token punctuation">:</span> <span class="token string">\'center\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> paddingTop<span class="token punctuation">:</span> <span class="token number">60</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u4f60\u5df2\u70b9\u51fb\u201c<span class="token punctuation">{</span>pageText<span class="token punctuation">}</span>\u201d tab\uff0c \u5f53\u524d\u5c55\u793a\u201c<span class="token punctuation">{</span>pageText<span class="token punctuation">}</span>\u201d\u4fe1\u606f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> display<span class="token punctuation">:</span> <span class="token string">\'block\'</span><span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">40</span><span class="token punctuation">,</span> marginBottom<span class="token punctuation">:</span> <span class="token number">600</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'#108ee9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n          e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            hidden<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hidden<span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n        <span class="token punctuation">></span></span>\n          \u70b9\u51fb\u5207\u6362 tab<span class="token operator">-</span>bar \u663e\u793a<span class="token operator">/</span>\u9690\u85cf\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabBar</span>\n        <span class="token attr-name">unselectedTintColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#949494<span class="token punctuation">"</span></span>\n        <span class="token attr-name">tintColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#33A3F4<span class="token punctuation">"</span></span>\n        <span class="token attr-name">barTintColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span>\n        <span class="token attr-name">hidden</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hidden<span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabBar.Item</span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u751f\u6d3b<span class="token punctuation">"</span></span>\n          <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u751f\u6d3b<span class="token punctuation">"</span></span>\n          <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n            width<span class="token punctuation">:</span> <span class="token string">\'0.44rem\'</span><span class="token punctuation">,</span>\n            height<span class="token punctuation">:</span> <span class="token string">\'0.44rem\'</span><span class="token punctuation">,</span>\n            background<span class="token punctuation">:</span> <span class="token string">\'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n          <span class="token punctuation">}</span>\n          selectedIcon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n            width<span class="token punctuation">:</span> <span class="token string">\'0.44rem\'</span><span class="token punctuation">,</span>\n            height<span class="token punctuation">:</span> <span class="token string">\'0.44rem\'</span><span class="token punctuation">,</span>\n            background<span class="token punctuation">:</span> <span class="token string">\'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n          <span class="token punctuation">}</span>\n          selected<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>selectedTab <span class="token operator">===</span> <span class="token string">\'blueTab\'</span><span class="token punctuation">}</span>\n          badge<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>\n          onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n              selectedTab<span class="token punctuation">:</span> <span class="token string">\'blueTab\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          data<span class="token operator">-</span>seed<span class="token operator">=</span><span class="token string">"logId"</span>\n        <span class="token operator">></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderContent</span><span class="token punctuation">(</span><span class="token string">\'\u751f\u6d3b\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabBar.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabBar.Item</span>\n          <span class="token attr-name">icon={&lt;Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>koubei-o<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>md<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n          selectedIcon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>koubei<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>md<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n          title<span class="token operator">=</span><span class="token string">"\u53e3\u7891"</span>\n          key<span class="token operator">=</span><span class="token string">"\u53e3\u7891"</span>\n          badge<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">\'new\'</span><span class="token punctuation">}</span>\n          selected<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>selectedTab <span class="token operator">===</span> <span class="token string">\'redTab\'</span><span class="token punctuation">}</span>\n          onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n              selectedTab<span class="token punctuation">:</span> <span class="token string">\'redTab\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          data<span class="token operator">-</span>seed<span class="token operator">=</span><span class="token string">"logId1"</span>\n        <span class="token operator">></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderContent</span><span class="token punctuation">(</span><span class="token string">\'\u53e3\u7891\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabBar.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabBar.Item</span>\n          <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token operator">&lt;</span>div style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              width<span class="token punctuation">:</span> <span class="token string">\'0.44rem\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'0.44rem\'</span><span class="token punctuation">,</span>\n              background<span class="token punctuation">:</span> <span class="token string">\'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span>\n          <span class="token punctuation">}</span>\n          selectedIcon<span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              width<span class="token punctuation">:</span> <span class="token string">\'0.44rem\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'0.44rem\'</span><span class="token punctuation">,</span>\n              background<span class="token punctuation">:</span> <span class="token string">\'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span>\n          <span class="token punctuation">}</span>\n          title<span class="token operator">=</span><span class="token string">"\u670b\u53cb"</span>\n          key<span class="token operator">=</span><span class="token string">"\u670b\u53cb"</span>\n          dot\n          selected<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>selectedTab <span class="token operator">===</span> <span class="token string">\'greenTab\'</span><span class="token punctuation">}</span>\n          onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n              selectedTab<span class="token punctuation">:</span> <span class="token string">\'greenTab\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderContent</span><span class="token punctuation">(</span><span class="token string">\'\u670b\u53cb\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabBar.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabBar.Item</span>\n          <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> uri<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">selectedIcon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> uri<span class="token punctuation">:</span> <span class="token string">\'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6211\u7684<span class="token punctuation">"</span></span>\n          <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6211\u7684<span class="token punctuation">"</span></span>\n          <span class="token attr-name">selected</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>selectedTab <span class="token operator">===</span> <span class="token string">\'yellowTab\'</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onPress</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n              selectedTab<span class="token punctuation">:</span> <span class="token string">\'yellowTab\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n        <span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderContent</span><span class="token punctuation">(</span><span class="token string">\'\u6211\u7684\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabBar.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TabBar</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TabBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function s(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var p=a[t],e=Object.getOwnPropertyDescriptor(s,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function t(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function p(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function e(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):s(n,a))}var o=a(1),c=(a(3),a(20),a(19)),l=n(c),u=(a(269),a(268)),i=n(u),k=function(n){function s(a){t(this,s);var e=p(this,n.call(this,a));return e.state={selectedTab:"redTab",hidden:!1},e}return e(s,n),s.prototype.renderContent=function(n){var s=this;return o.createElement("div",{style:{backgroundColor:"white",height:"100%",textAlign:"center"}},o.createElement("div",{style:{paddingTop:60}},"\u4f60\u5df2\u70b9\u51fb\u201c",n,"\u201d tab\uff0c \u5f53\u524d\u5c55\u793a\u201c",n,"\u201d\u4fe1\u606f"),o.createElement("a",{style:{display:"block",marginTop:40,marginBottom:600,color:"#108ee9"},onClick:function(n){n.preventDefault(),s.setState({hidden:!s.state.hidden})}},"\u70b9\u51fb\u5207\u6362 tab-bar \u663e\u793a/\u9690\u85cf"))},s.prototype.render=function(){var n=this;return o.createElement(i["default"],{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white",hidden:this.state.hidden},o.createElement(i["default"].Item,{title:"\u751f\u6d3b",key:"\u751f\u6d3b",icon:o.createElement("div",{style:{width:"0.44rem",height:"0.44rem",background:"url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat"}}),selectedIcon:o.createElement("div",{style:{width:"0.44rem",height:"0.44rem",background:"url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat"}}),selected:"blueTab"===this.state.selectedTab,badge:1,onPress:function(){n.setState({selectedTab:"blueTab"})},"data-seed":"logId"},this.renderContent("\u751f\u6d3b")),o.createElement(i["default"].Item,{icon:o.createElement(l["default"],{type:"koubei-o",size:"md"}),selectedIcon:o.createElement(l["default"],{type:"koubei",size:"md"}),title:"\u53e3\u7891",key:"\u53e3\u7891",badge:"new",selected:"redTab"===this.state.selectedTab,onPress:function(){n.setState({selectedTab:"redTab"})},"data-seed":"logId1"},this.renderContent("\u53e3\u7891")),o.createElement(i["default"].Item,{icon:o.createElement("div",{style:{width:"0.44rem",height:"0.44rem",background:"url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat"}}),selectedIcon:o.createElement("div",{style:{width:"0.44rem",height:"0.44rem",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat"}}),title:"\u670b\u53cb",key:"\u670b\u53cb",dot:!0,selected:"greenTab"===this.state.selectedTab,onPress:function(){n.setState({selectedTab:"greenTab"})}},this.renderContent("\u670b\u53cb")),o.createElement(i["default"].Item,{icon:{uri:"https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"},selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"},title:"\u6211\u7684",key:"\u6211\u7684",selected:"yellowTab"===this.state.selectedTab,onPress:function(){n.setState({selectedTab:"yellowTab"})}},this.renderContent("\u6211\u7684")))},s}(o.Component);return o.createElement(k,null)},style:"#tab-bar.demo {\n  display: flex;\n  flex-direction: column;\n}\n#tab-bar .demoName {\n  height: 0.8rem;\n}\n#tab-bar .demo-preview-item,\n#tab-bar .demo-preview-item .am-tab-bar {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n#tab-bar .demo-preview-item .am-tab-bar {\n  background-color: white;\n}",highlightedStyle:'<span class="token selector"><span class="token id">#tab-bar</span><span class="token class">.demo</span> </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token id">#tab-bar</span> <span class="token class">.demoName</span> </span><span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">0.8</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token id">#tab-bar</span> <span class="token class">.demo-preview-item</span>,\n<span class="token id">#tab-bar</span> <span class="token class">.demo-preview-item</span> <span class="token class">.am-tab-bar</span> </span><span class="token punctuation">{</span>\n  <span class="token property">flex</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token id">#tab-bar</span> <span class="token class">.demo-preview-item</span> <span class="token class">.am-tab-bar</span> </span><span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},522:function(n,s,a){n.exports={basic:a(463)}}});