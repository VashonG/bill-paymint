(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6788:function(){},2754:function(){},6391:function(){},5001:function(){},1566:function(){},7868:function(e,t,n){Promise.resolve().then(n.bind(n,5638))},5638:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var a=n(7821),o=n(8078),s=n(9823),l=n(8858),i=n.n(l);n(341);let c={btc:{address:"bc1qmhg6z5dgnpsswwht0x53g7yucjqfahyc60fctn",ticker:"btc"},ltc:{address:"ltc1q4efmghs2zupatst89tstmjvahn89hnvkuan8qa",ticker:"ltc"},eth:{address:"0xa44E9D6E5C9b638D9CEE82fa02c3A21a985772a8",ticker:"eth"},doge:{address:"D59DKnQrMYswmfFik1dbqqVBksF9j4yZ1j",ticker:"doge"},trx:{address:"TK2vRkUtTKhZroAny7uqLkzTwBoXUbj4Um",ticker:"trx"}};function r(e){let t=c[e];if(!t)throw Error("Unsupported crypto currency");return t}async function d(e,t,n){let{address:a,ticker:o}=r(e);try{let e=new URLSearchParams({callback:n,address:"1.0@".concat(a),pending:"0",confirmations:"1",email:"paygeoncard@gmail.com",post:"1",json:"1",priority:"default",multi_token:"0",multi_chain:"0",convert:"1"}).toString(),t=await fetch("https://api.cryptapi.io/".concat(o,"/create/?").concat(e),{method:"GET"}),s=await t.text(),l=JSON.parse(s);if("success"==l.status)return l.address_in}catch(e){throw Error("Error generating address")}}async function u(e,t){let{ticker:n}=r(t);try{let t=new URLSearchParams({callback:e}).toString(),a=await fetch("https://api.cryptapi.io/".concat(n,"/logs/?").concat(t),{method:"GET"}),o=await a.text(),s=JSON.parse(o);if(console.log(s),"success"==s.status)return s.callbacks[s.callbacks.length-1]}catch(e){throw Error("Error generating address")}}n(1141);var h=e=>{let{textToCopy:t,onCopy:n}=e,[s,l]=(0,o.useState)(!1);return(0,a.jsx)("button",{className:"w-[40px] rounded-[0.4em] h-9 bg-white flex items-center justify-center",onClick:()=>{navigator.clipboard.writeText(t),l(!0),null==n||n(),setTimeout(()=>l(!1),2e3)},children:s?(0,a.jsx)("svg",{viewBox:"0 0 24 24",height:"18",width:"18",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("g",{children:(0,a.jsx)("path",{fill:"green",d:"M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"})})}):(0,a.jsx)("svg",{viewBox:"0 0 6.35 6.35",height:"20",width:"20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("g",{children:(0,a.jsx)("path",{fill:"currentColor",d:"M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"})})})})},m=n(9197),p=n(1484),x=n.n(p),g=e=>{let{children:t,onClick:n,disabled:o=!1,className:s=""}=e;return(0,a.jsx)("div",{className:"".concat(x().cardContainer," ").concat(s),children:(0,a.jsxs)("div",{className:x().btnContainer,children:[(0,a.jsx)("div",{className:x().btnMain,children:(0,a.jsx)("button",{className:x().btn3d,onMouseDown:e=>{e.target.classList.add(x().down)},onMouseUp:e=>{e.target.classList.remove(x().down)},onTouchStart:e=>{e.target.classList.add(x().down)},onTouchEnd:e=>{e.target.classList.remove(x().down)},onClick:n,disabled:o,children:t})}),(0,a.jsx)("div",{className:x().shadow})]})})},w=n(9043),f=n.n(w);let v=(0,s.default)(()=>Promise.all([n.e(857),n.e(466),n.e(822)]).then(n.bind(n,5822)),{loadableGenerated:{webpack:()=>[5822]},ssr:!1});function b(){let[e,t]=(0,o.useState)(null),[n,s]=(0,o.useState)(null),[l,c]=(0,o.useState)(null),[r,p]=(0,o.useState)(null),[x,w]=(0,o.useState)("btc"),[b,j]=(0,o.useState)("btc"),[y,N]=(0,o.useState)(null),[_,E]=(0,o.useState)(null),[T,k]=(0,o.useState)(null),[C,P]=(0,o.useState)(null),[S,O]=(0,o.useState)(0),[D,B]=(0,o.useState)(null),U=(0,o.useRef)(null),L=()=>{s(null),c(null),p(null),N(null),E(null)},R=async t=>{let n=t||e;if(n)try{var a;a="application/pdf"===n.type?await f()(n):(await i().recognize(n,"eng")).data.text,s(a);let e=A(a);if(!e){console.error("Failed to extract data from OCR");return}c(e);let t=F(e.amountDue);p(t.toFixed(2));let o=await M(e.amountDue,t-e.amountDue,x),l=new URLSearchParams({amount:"".concat(o)}).toString(),r="https://paygeon.com/api/payment?".concat(l);B(r);let u=await d(x,t,r);E(u),console.log(u)}catch(e){console.error("Error processing the image with Tesseract:",e)}},A=e=>{let t=e.match(RegExp("(?<=Bill\\s?To:?\\n|Customer:?\\n|To:?\\n).*(?:\\n.*){2}","i")),n=e.match(RegExp("(?<=From:?\\n|Merchant:?\\n).*(?:\\n.*){2}","i")),a=e.match(/(?:Notes|Memo)\s*:\s*(.*)/i);var o=[],s=[];t&&(o=t[0].split("\n").map(e=>e.trim())),n&&(s=n[0].split("\n").map(e=>e.trim()));let[l,i,c]=[o.length>0?o[0].split(" ").slice(0,2).join(" "):"",o.length>1?o[1].split(" ")[0]:"",o.length>2?o[2]:""],[r,d,u,h]=[s.length>0?s[0]:"",s.length>1?s[1].split(" ")[0]:"",s.length>2?s[2]:"",a?a[1]:""];k({name:l,email:i,address:c}),P({name:r||e.split(" ")[0],email:d,address:u,account:h});let m=e.match(RegExp("(?<!\\S)(?:Amount|Amount Due|New Balance|Balance Due|Total|Total Due)\\s*:?\\s*\\$?([\\d,]+(?:\\.\\d{2})?)","i"));if(!m)return console.error("Failed to extract amount due from OCR"),null;var p=parseFloat(m[1].replace(/,/g,""));return isNaN(p)?(console.error("Failed to parse amount due as number"),null):{amountDue:p}},F=e=>e+1.35/100*e+2.55,M=async(e,t,n)=>{let a=new URLSearchParams({value:"".concat(e+t),from:"usd"}).toString(),o=await fetch("https://api.cryptapi.io/".concat(n,"/convert/?").concat(a),{method:"GET"}),s=JSON.parse(await o.text());return"success"==s.status?(N(s.value_coin),w(n),s.value_coin):null},z=async e=>{let t=e.target.value;if(j(t),r&&l){let e=await M(l.amountDue,r-l.amountDue,t),n=new URLSearchParams({amount:"".concat(e)}).toString(),a="https://paygeon.com/api/payment?".concat(n);B(a);try{let e=await d(t,r,a);E(e)}catch(e){console.error("Error generating crypto address:",e)}}},H=async()=>{let e=await u(D,x);try{O(1);let t={coinAmount:y,coin:x.toUpperCase(),amount:r,customerName:null==T?void 0:T.name,merchantName:null==C?void 0:C.name,merchantAddress:null==C?void 0:C.address,merchantAccount:null==C?void 0:C.account,toEmail:"paygeoncard@gmail.com"},n={coinAmount:y,coin:x.toUpperCase(),amount:r,customerName:null==T?void 0:T.name,merchantName:null==C?void 0:C.name,toEmail:null==T?void 0:T.email},a=(e,t)=>{let n=document.createElement("form");Object.entries(e).forEach(e=>{let[t,a]=e,o=document.createElement("input");o.name=t,o.value="".concat(a),n.appendChild(o)}),m.ZP.sendForm("service_5kfcv7i",t,n,"N0ixEpRDE4bdrAfPS")};setTimeout(()=>{e.value_coin==y?(a(t,"template_ui2a7ls"),a(n,"template_hocme3k"),O(2)):O(3)},2e3),setTimeout(()=>{O(0)},4e3)}catch(e){console.log(e),O(0)}};return(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen py-2",children:[(0,a.jsx)("div",{className:"bg-transparent w-full h-[600px] flex justify-center items-center",children:(0,a.jsx)(v,{})}),(0,a.jsxs)("div",{className:"mt-[-100px] mb-10",children:[(0,a.jsx)("button",{onClick:()=>{{let e=window.screen.width,n=window.screen.height,a=window.open("","CameraWindow","width=".concat(e,",height=").concat(n,",left=0,top=0"));if(a){a.document.write('\n          <html>\n            <head>\n              <style>\n                body {\n                  display: flex;\n                  flex-direction: column;\n                  align-items: center;\n                  justify-content: center;\n                  margin: 0;\n                  height: 100%;\n                  background-color: #f0f0f0;\n                }\n                #camera-root {\n                  display: flex; \n                  flex-direction: column; \n                  align-items: center; \n                  justify-content: center;\n                  height: 97%;\n                }\n                #video {\n                  height: 100%;\n                }\n                #capture-button {\n                  margin-top: 10px;\n                  padding: 10px 20px;\n                  font-size: 16px;\n                  background-color: #4CAF50;\n                  color: white;\n                  border: none;\n                  cursor: pointer;\n                  border-radius: 5px;\n                  align-self: center;\n                }\n                #capture-button:hover {\n                  background-color: #45a049;\n                }\n              </style>\n            </head>\n            <body>\n              <div id="camera-root">\n                <video id="video" autoplay></video>\n                <button id="capture-button">Capture Photo</button>\n                <canvas id="canvas" style="display:none;"></canvas>\n              </div>\n            </body>\n          </html>\n        '),a.document.close();let e=n=>{if(n.origin===window.location.origin&&"CAPTURED_PHOTO"===n.data.type){let o=n.data.photo;t(o),L(),R(o),window.removeEventListener("message",e),a.close()}};window.addEventListener("message",e);let n=a.document.createElement("script");n.innerHTML="\n          (function() {\n            const video = document.getElementById('video');\n            const canvas = document.getElementById('canvas');\n            const captureButton = document.getElementById('capture-button');\n  \n            navigator.mediaDevices.getUserMedia({ video: true })\n              .then((stream) => {\n                video.srcObject = stream;\n              })\n              .catch((error) => {\n                console.error('Error accessing the camera: ', error);\n              });\n  \n            captureButton.onclick = () => {\n              const context = canvas.getContext('2d');\n              canvas.width = video.videoWidth;\n              canvas.height = video.videoHeight;\n              context.drawImage(video, 0, 0, canvas.width, canvas.height);\n              const dataUrl = canvas.toDataURL('image/png');\n              window.opener.postMessage({ type: 'CAPTURED_PHOTO', photo: dataUrl }, window.location.origin);\n            };\n          })();\n        ",a.document.body.appendChild(n)}}},className:"custom-button custom-white-button",children:"Take a Photo"}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{type:"file",accept:"image/*, application/pdf",ref:U,style:{display:"none"},onChange:e=>{e.target.files&&e.target.files[0]&&(t(e.target.files[0]),L(),R(e.target.files[0]))}}),(0,a.jsx)("button",{onClick:()=>{U.current&&U.current.click()},className:"custom-button custom-white-button",children:"Choose File"}),e?(0,a.jsxs)("p",{className:"display-text italic whitespace-nowrap overflow-hidden text-ellipsis pl-4",children:["Selected file: ",e.name?e.name:"captured_photo"]}):(0,a.jsx)("p",{className:"text-box",children:"No file chosen"})]}),C&&(0,a.jsx)("hr",{className:"separating-line"}),C&&r&&l&&l.amountDue&&(0,a.jsxs)("div",{className:"display-text",children:[(0,a.jsx)("h2",{className:"text-xl font-bold",children:"Paying To:"}),(0,a.jsx)("pre",{className:"whitespace-pre-wrap",children:C.name}),(0,a.jsx)("h2",{className:"text-xl font-bold",children:"Invoice Amount:"}),(0,a.jsxs)("pre",{className:"whitespace-pre-wrap",children:["$ ",l.amountDue.toFixed(2)]}),(0,a.jsx)("h2",{className:"text-xl font-bold",children:"Total Amount:"}),(0,a.jsxs)("pre",{className:"whitespace-pre-wrap",children:["$ ",r]})]}),C&&!r&&(0,a.jsx)("div",{className:"display-text",children:(0,a.jsx)("pre",{className:"whitespace-pre-wrap",children:"Unable to recognize text. Please try again."})}),null!==r&&(0,a.jsx)("hr",{className:"separating-line"}),null!==r&&(0,a.jsxs)("div",{className:"display-text",children:[(0,a.jsx)("h2",{className:"text-xl font-bold",children:"Choose crypto to pay with: "}),(0,a.jsxs)("select",{className:"dropdown-options",id:"cryptoOptions",value:b,onChange:z,children:[(0,a.jsx)("option",{value:"btc",children:"Bitcoin (BTC)"}),(0,a.jsx)("option",{value:"ltc",children:"Litecoin (LTC)"}),(0,a.jsx)("option",{value:"eth",children:"Ethereum (ETH)"}),(0,a.jsx)("option",{value:"doge",children:"Dogecoin (DOGE)"}),(0,a.jsx)("option",{value:"trx",children:"TRX"})]})]}),null!==y&&(0,a.jsxs)("div",{className:"display-text",children:[(0,a.jsx)("h2",{className:"text-xl font-bold",children:"Total Amount:"}),(0,a.jsxs)("pre",{className:"whitespace-pre-wrap",children:[y," ",x.toUpperCase()]})]}),null!==_&&(0,a.jsx)("hr",{className:"separating-line"}),_&&(0,a.jsxs)("div",{className:"display-text",children:[(0,a.jsx)("h2",{className:"text-xl font-bold",children:"Pay to the Following Address:"}),(0,a.jsxs)("div",{className:"border border-white rounded-[0.5em] mt-4 text-black flex items-center overflow-hidden",children:[(0,a.jsx)("p",{title:_,className:"whitespace-nowrap overflow-hidden text-ellipsis text-white flex-1 pl-3 pr-1",children:_}),(0,a.jsx)(h,{textToCopy:_})]})]}),null!==y&&(0,a.jsx)("hr",{className:"separating-line"}),null!==y&&(0,a.jsx)(g,{onClick:H,disabled:0!=S,className:"w-23",children:0==S?"Confirm Payment":1==S?(0,a.jsx)("svg",{}):2==S?"Success":"Failed. Please Try Again."})]})}n(3812);let j=(0,s.default)(()=>Promise.all([n.e(677),n.e(338),n.e(253)]).then(n.bind(n,3253)),{loadableGenerated:{webpack:()=>[3253]},ssr:!1});function y(e){let{children:t}=e;return(0,a.jsx)("html",{lang:"en",children:(0,a.jsxs)("body",{children:[(0,a.jsx)(j,{}),t]})})}var N=()=>{let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t=()=>{console.log("Widget loaded")},n=e.current;if(n)return n.addEventListener("load",t),()=>{n.removeEventListener("load",t)}},[]),(0,a.jsx)(y,{children:(0,a.jsxs)("div",{className:"flex flex-col bg-black items-center justify-center min-h-screen py-2",children:[(0,a.jsx)("div",{ref:e,"data-storeez-id":"widget-6e5b310d1e199524"}),(0,a.jsx)("h1",{className:"text-3xl text-white font-bold mb-4",children:"Upload Invoice"}),(0,a.jsx)(b,{})]})})}},3812:function(){},1141:function(){},1484:function(e){e.exports={cardContainer:"NeoPOPTiltedButton_cardContainer__qHnzb",btnContainer:"NeoPOPTiltedButton_btnContainer__0Okxx",btnMain:"NeoPOPTiltedButton_btnMain__iY_4O",btn3d:"NeoPOPTiltedButton_btn3d__Ph8FR",shine:"NeoPOPTiltedButton_shine___cnem",shadow:"NeoPOPTiltedButton_shadow__tJvD1",down:"NeoPOPTiltedButton_down__9lykA",float:"NeoPOPTiltedButton_float__pbemL"}}},function(e){e.O(0,[677,976,297,642,115,205,744],function(){return e(e.s=7868)}),_N_E=e.O()}]);