(()=>{var e={};e.id=195,e.ids=[195],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},83:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>d.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>x,tree:()=>o}),t(5817),t(1163),t(2874);var s=t(7105),r=t(5265),i=t(157),d=t.n(i),n=t(4665),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(a,l);let o=["",{children:["rewards",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,5817)),"D:\\coding\\fiverr bug\\bill-paymint\\paygeon\\app\\rewards\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7418))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1163)),"D:\\coding\\fiverr bug\\bill-paymint\\paygeon\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,2874,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7418))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\coding\\fiverr bug\\bill-paymint\\paygeon\\app\\rewards\\page.tsx"],p="/rewards/page",m={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/rewards/page",pathname:"/rewards",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},1863:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,3817,23)),Promise.resolve().then(t.t.bind(t,9323,23)),Promise.resolve().then(t.t.bind(t,2204,23)),Promise.resolve().then(t.t.bind(t,820,23)),Promise.resolve().then(t.t.bind(t,5915,23)),Promise.resolve().then(t.t.bind(t,1611,23))},1125:(e,a,t)=>{Promise.resolve().then(t.bind(t,2109)),Promise.resolve().then(t.bind(t,98)),Promise.resolve().then(t.bind(t,943))},6686:(e,a,t)=>{Promise.resolve().then(t.bind(t,2109)),Promise.resolve().then(t.bind(t,98)),Promise.resolve().then(t.bind(t,943))},943:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var s=t(9899),r=t(5507),i=t(2314),d=t(4848);let n=({isVisible:e,content:a,onClose:t})=>{let[{y:n},l]=(0,i.q_)(()=>({y:100})),o=()=>{l.start({y:0,immediate:!1})},c=()=>{l.start({y:100,immediate:!1}),t?.()},p=(0,d.useDrag)(({down:e,movement:[,a],memo:t=n.get()})=>(e?l.start({y:t+a,immediate:!0}):n.get()>50?c():o(),t));return(0,r.useEffect)(()=>{e?o():c()},[e]),(0,s.jsxs)(s.Fragment,{children:[e&&s.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:c}),s.jsx(i.q.div,{...p(),style:{transform:n.to(e=>`translateY(${e}%)`)},className:"fixed inset-x-0 bottom-0 bg-white rounded-t-2xl shadow-lg p-6 z-50",children:s.jsx("div",{className:"relative w-full max-w-md mx-auto",children:a})})]})};var l=t(1739);t(1131);let o=({src:e,alt:a,label:t,href:r,onClick:i})=>(0,s.jsxs)("a",{href:r,onClick:i,className:"flex flex-col flex-1 px-4 pt-5 pb-4 bg-stone-950 cursor-pointer",children:[s.jsx("img",{loading:"lazy",src:e,alt:a,className:"self-center aspect-square w-[30px]"}),s.jsx("div",{className:"border border-solid border-zinc-500",children:t})]}),c=()=>{let[e,a]=(0,r.useState)(!1),[t,i]=(0,r.useState)(!1),d=[{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/35bc7862a141b7a9815252b2991ae9872c90f7d3a911591606d7beddc4f6a755?apiKey=aa19eef6d1f1473ba394866de3aadd86&",alt:"Home icon",label:"Home",href:"/"},{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/a72357b1dfe185150e1833ec059e11f844771bfbe3f916197fd898b27da90a78?apiKey=aa19eef6d1f1473ba394866de3aadd86&",alt:"Cards icon",label:"Cards",href:"/cards"},{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/761c3de704fc6fd6e0693caf27b269ab6081ef377a0df09c2c43ec1809367d95?apiKey=aa19eef6d1f1473ba394866de3aadd86&",alt:"Pay icon",label:"Pay",href:"/pay"},{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/03ce8cf002c526da51a31d94c94b4b0fc2747886e2964d315845c9243a0a533e?apiKey=aa19eef6d1f1473ba394866de3aadd86&",alt:"Rewards icon",label:"Rewards",href:"/rewards"},{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/ea74078dc8716dd9573dd4d321082b2686988e19c2e002d5d1f5d8e964e8dced?apiKey=aa19eef6d1f1473ba394866de3aadd86&",alt:"Shop icon",label:"Shop",href:"/shop"},{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/83217c72cabc5ccb6132806cefcd2c18a93479ebb67c9e6e611c9235058f66dd?apiKey=aa19eef6d1f1473ba394866de3aadd86&",alt:"More icon",label:"More",onClick:()=>{a(!e)}}];return(0,r.useEffect)(()=>{},[]),(0,s.jsxs)(s.Fragment,{children:[s.jsx("nav",{className:"flex gap-0 justify-center mx-none text-xs text-white font-medium tracking-wide leading-4 whitespace-nowrap border-solid bg-stone-950 border-[0.5px] border-black z-20 border-opacity-0 fixed bottom-0 w-full",children:d.map((e,a)=>s.jsx(o,{...e},a))}),s.jsx(n,{isVisible:e,onClose:()=>{a(!1),i(!1)},content:(0,s.jsxs)("div",{className:"flex flex-col relative w-full max-w-md mx-auto items-center",children:[s.jsx("h2",{className:"text-xl font-bold text-black",children:"More"}),s.jsx("hr",{className:"header-line"}),(0,s.jsxs)(l.Sz,{apiKey:"pk_test_NWjOGREvFvtTnJGEguH56nuNXcUK8J",debug:!0,children:[s.jsx(l.lK,{variant:"overlay",baseCurrencyCode:"usd",baseCurrencyAmount:"100",defaultCurrencyCode:"eth",visible:t}),s.jsx("button",{className:"text-black",onClick:()=>i(!0),children:"Add Crypto"})]})]})})]})}},1163:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>i});var s=t(5023);t(642);let r=(0,t(3914).default)(()=>t.e(102).then(t.bind(t,3102)),{loadableGenerated:{modules:["app\\layout.tsx -> @/components/BottomMenu"]},ssr:!1});function i({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{children:[s.jsx(r,{}),e]})})}},5817:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l});var s=t(5023),r=t(1163);t(8003);let i=({title:e,subtitle:a})=>(0,s.jsxs)("div",{className:"flex flex-col uppercase tracking-[2px]",children:[s.jsx("div",{className:"text-xs font-semibold leading-3 text-emerald-400",children:e}),s.jsx("div",{className:"mt-1 text-xs font-bold text-white",children:a})]}),d=({labelData:e,imageData:a})=>(0,s.jsxs)("section",{className:"flex flex-col p-5 bg-emerald-500 max-w-[347px]",children:[(0,s.jsxs)("header",{className:"flex gap-3.5 justify-between text-base font-bold tracking-wide leading-5 text-white",children:[s.jsx("h1",{className:"my-auto",children:"Rewards coming soon!"}),s.jsx("img",{loading:"lazy",src:a.src,alt:a.alt,className:"shrink-0 w-14 aspect-square"})]}),s.jsx("div",{className:"flex gap-5 justify-between mt-10",children:e.map((e,a)=>s.jsx(i,{...e},a))})]}),n=()=>s.jsx(d,{labelData:[{title:"start",subtitle:"Current"},{title:"eta",subtitle:"9/24/24"}],imageData:{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/75032cb3b814bdbebe3df5053b005fd965165c4162467a34502cb157de855cdd?apiKey=aa19eef6d1f1473ba394866de3aadd86&",alt:"Rewards coming soon icon"}}),l=()=>s.jsx(r.default,{children:s.jsx("div",{className:"flex justify-center items-center h-screen",children:s.jsx(n,{})})})},7418:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>r});var s=t(1645);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},642:()=>{},1131:()=>{}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),s=a.X(0,[916,980,645],()=>t(83));module.exports=s})();