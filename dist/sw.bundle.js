if(!self.define){let e,n={};const i=(i,f)=>(i=new URL(i+".js",f).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(f,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let s={};const o=e=>i(e,c),r={module:{uri:c},exports:s,require:o};n[c]=Promise.all(f.map((e=>r[e]||o(e)))).then((e=>(d(...e),s)))}}define(["./workbox-e89e3f76"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"39.bundle.js",revision:"c63cdec1edb749941b081f5e783e1fc7"},{url:"608.bundle.js",revision:"c8ee22ce862687222c8aaa121fa1bff3"},{url:"app.webmanifest",revision:"df486839827c0ada4d686504b5e64fc7"},{url:"app~7bd12dde.bundle.js",revision:"80ee58ba2c23d478effa15f74952d619"},{url:"app~7bd12dde.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"73c2b15c4fe795a574583f3e7e007268"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"2fc8448422dd5726f8b17f409b989c86"},{url:"app~e4317507.bundle.js",revision:"43869d36c8cab86d22521e4f158422de"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"data/menus.json",revision:"cfb5749de10c5b39c855ca28a86ddd2f"},{url:"icons/icon-128x128.png",revision:"0cd6fe2366bd4a3bc1f33b479f25feed"},{url:"icons/icon-144x144.png",revision:"843e21dc72efab199d5be52d8f00fe83"},{url:"icons/icon-152x152.png",revision:"42ad511cf053b1d818b504d8e4272837"},{url:"icons/icon-192x192.png",revision:"d1c02afacf8a3d366fedf6d218b65f36"},{url:"icons/icon-384x384.png",revision:"c3fe474e8c03ce72838c5f488f53fcbf"},{url:"icons/icon-512x512.png",revision:"4a3fe0f589fb947dbcbfafc831f2d679"},{url:"icons/icon-72x72.png",revision:"f08139d223806b27dd00b034d85df150"},{url:"icons/icon-96x96.png",revision:"1f955d2007ff766bdeb02fa08e38c766"},{url:"index.html",revision:"baaf2381d1fd869f60734063d4c92181"},{url:"logos/favicon.png",revision:"138c562663292bf681a634c7b285a39a"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.NetworkFirst({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://use.fontawesome.com/")),new e.StaleWhileRevalidate({cacheName:"fontawesome-cache",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
