(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{227:function(t,o){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNi44ODkiIGhlaWdodD0iMzIuNTU2IiB2aWV3Qm94PSIwIDAgMTYuODg5IDMyLjU1NiI+DQogIDxwYXRoIGlkPSJmIiBkPSJNNDI0Ljk3MiwxODcuMjA2di0xNC44M2g1bC43NDktNS44aC01Ljc0OHYtMy43YzAtMS42NzcuNDY1LTIuODE5LDIuODctMi44MTloMy4wNDd2LTUuMTc4YTQxLjAwOSw0MS4wMDksMCwwLDAtNC40NjUtLjIyOGMtNC40MTksMC03LjQ0MywyLjctNy40NDMsNy42NXY0LjI3Mkg0MTR2NS44aDQuOTgxdjE0LjgzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQxNCAtMTU0LjY1KSIgZmlsbD0iI2ZmZiIvPg0KPC9zdmc+DQo="},228:function(t,o){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC42MTgiIGhlaWdodD0iMjQuODc5IiB2aWV3Qm94PSIwIDAgMzAuNjE4IDI0Ljg3OSI+DQogIDxnIGlkPSJUd2l0dGVyX0xvZ29fQmx1ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuMTg1IC0xMi4wNTcpIj4NCiAgICA8cGF0aCBpZD0i44OR44K5XzkiIGRhdGEtbmFtZT0i44OR44K5IDkiIGQ9Ik04NC42MjksMTIzLjMyOWMxMS41NTQsMCwxNy44NzMtOS41NzIsMTcuODczLTE3Ljg3MywwLS4yNzIsMC0uNTQzLS4wMTgtLjgxMmExMi43ODEsMTIuNzgxLDAsMCwwLDMuMTM0LTMuMjUyLDEyLjUzOCwxMi41MzgsMCwwLDEtMy42MDguOTg4LDYuMyw2LjMsMCwwLDAsMi43NjItMy40NzQsMTIuNTg5LDEyLjU4OSwwLDAsMS0zLjk4OSwxLjUyNSw2LjI4OCw2LjI4OCwwLDAsMC0xMC43MDUsNS43MjlBMTcuODM0LDE3LjgzNCwwLDAsMSw3Ny4xMzEsOTkuNmE2LjI4Niw2LjI4NiwwLDAsMCwxLjk0NSw4LjM4Niw2LjIzNSw2LjIzNSwwLDAsMS0yLjg1MS0uNzg2di4wOGE2LjI4NCw2LjI4NCwwLDAsMCw1LjA0LDYuMTU4LDYuMjcyLDYuMjcyLDAsMCwxLTIuODM2LjEwOEE2LjI4OSw2LjI4OSwwLDAsMCw4NC4zLDExNy45YTEyLjYsMTIuNiwwLDAsMS03LjgsMi42OTQsMTIuNzg5LDEyLjc4OSwwLDAsMS0xLjUtLjA5MSwxNy43ODQsMTcuNzg0LDAsMCwwLDkuNjI5LDIuODE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjUuODE1IC04Ni4zOTMpIiBmaWxsPSIjZmZmIi8+DQogIDwvZz4NCjwvc3ZnPg0K"},255:function(t,o,i){"use strict";i.r(o);var n,c=[function(){var t=this.$createElement,o=this._self._c||t;return o("li",[o("a",{staticClass:"facebookLogin",attrs:{href:""}},[o("img",{attrs:{src:i(227),alt:"fb"}}),this._v("facebook")])])},function(){var t=this.$createElement,o=this._self._c||t;return o("li",[o("a",{staticClass:"twitterLogin",attrs:{href:""}},[o("img",{attrs:{src:i(228),alt:"twitter"}}),this._v("twitter")])])}],e=i(48),s=i(229),M=(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)o.hasOwnProperty(i)&&(t[i]=o[i])})(t,o)},function(t,o){function i(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}),u=function(t,o,i,n){var c,e=arguments.length,s=e<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,i,n);else for(var M=t.length-1;M>=0;M--)(c=t[M])&&(s=(e<3?c(s):e>3?c(o,i,s):c(o,i))||s);return e>3&&s&&Object.defineProperty(o,i,s),s},r="a59705a8-0ef5-451d-8390-983b318cf9d7",L="https://login.microsoftonline.com/tfp/wishhubdev.onmicrosoft.com/B2C_1_wishhub_dev",a=["openid"],w=new s.UserAgentApplication(r,L,function(t,o,i,n){o||console.log(i+":"+t)});var l=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return M(o,t),o.prototype.login=function(){console.log(a),w.loginPopup(a).then(function(t){console.log("JWT token "+t)},function(t){console.log("Login error "+t)})},o.prototype.getUser=function(){return w.getUser()},o=u([Object(e.Component)({})],o)}(e.Vue),D=i(12),I=Object(D.a)(l,function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"container"},[i("b",[t._v("M002 サインイン・M001 サインアップ(/pages/account/signup/index.vue)")]),i("br"),t._v(" "),i("nuxt-link",{attrs:{to:"/account/my/profile"}},[t._v("[M005 プロフィール設定]→")]),i("br"),t._v(" "),i("nuxt-link",{attrs:{to:"/account/my"}},[t._v("[M003 マイページ]→")]),t._v(" "),i("div",{staticClass:"loginArea"},[i("h2",[t._v("SNSで新規会員登録・ログイン")]),t._v(" "),i("ul",{staticClass:"login_buttons"},[i("li",[i("button",{staticClass:"facebookLogin",attrs:{id:"auth"},on:{click:function(o){t.login()}}},[t._v("Login")])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),i("p",{staticClass:"caution"},[t._v("※承諾なくSNSに投稿されることはありません")])]),t._v(" "),i("pre",{staticClass:"response"})],1)},c,!1,null,null,null);o.default=I.exports}}]);