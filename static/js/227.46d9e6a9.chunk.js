"use strict";(self.webpackChunksolana_skeleton=self.webpackChunksolana_skeleton||[]).push([[227],{4227:(e,t,n)=>{n.r(t),n.d(t,{StandardSolflareMetaMaskWalletAccount:()=>H,default:()=>W});var i=n(2320);const s=n(5036);var r=n(462),o=n.n(r);const a={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let c;const l=new Uint8Array(16);function d(){if(!c&&(c="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(l)}const h=[];for(let R=0;R<256;++R)h.push((R+256).toString(16).slice(1));function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return h[e[t+0]]+h[e[t+1]]+h[e[t+2]]+h[e[t+3]]+"-"+h[e[t+4]]+h[e[t+5]]+"-"+h[e[t+6]]+h[e[t+7]]+"-"+h[e[t+8]]+h[e[t+9]]+"-"+h[e[t+10]]+h[e[t+11]]+h[e[t+12]]+h[e[t+13]]+h[e[t+14]]+h[e[t+15]]}const f=function(e,t,n){if(a.randomUUID&&!t&&!e)return a.randomUUID();const i=(e=e||{}).random||(e.rng||d)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=i[e];return t}return u(i)};var m=n(6382).Buffer;function p(e){return void 0===e.version}function v(e){return p(e)?e.serializeMessage():e.message.serialize()}function g(e,t,n){if(p(e))e.addSignature(t,m.from(n));else{const i=e.message.staticAccountKeys.slice(0,e.message.header.numRequiredSignatures).findIndex((e=>e.equals(t)));i>=0&&(e.signatures[i]=n)}}var _=function(e,t,n,i){return new(n||(n=Promise))((function(s,r){function o(e){try{c(i.next(e))}catch(t){r(t)}}function a(e){try{c(i.throw(e))}catch(t){r(t)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};function y(e){return _(this,void 0,void 0,(function*(){try{return yield e.request({method:"wallet_getSnaps"}),!0}catch(t){return!1}}))}var w=n(5007),b=n(8780),E=n(991);const x=["solana:mainnet","solana:devnet","solana:testnet","solana:localnet"];function M(e){return x.includes(e)}var A,S,C,K,k,j,I=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)},T=function(e,t,n,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"===typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?s.call(e,n):s?s.value=n:t.set(e,n),n};const P=x,z=[w.R,b.q,E.F];class H{get address(){return I(this,A,"f")}get publicKey(){return I(this,S,"f").slice()}get chains(){return I(this,C,"f").slice()}get features(){return I(this,K,"f").slice()}get label(){return I(this,k,"f")}get icon(){return I(this,j,"f")}constructor(e){let{address:t,publicKey:n,label:i,icon:s}=e;A.set(this,void 0),S.set(this,void 0),C.set(this,void 0),K.set(this,void 0),k.set(this,void 0),j.set(this,void 0),new.target===H&&Object.freeze(this),T(this,A,t,"f"),T(this,S,n,"f"),T(this,C,P,"f"),T(this,K,z,"f"),T(this,k,i,"f"),T(this,j,s,"f")}}A=new WeakMap,S=new WeakMap,C=new WeakMap,K=new WeakMap,k=new WeakMap,j=new WeakMap;var O=function(e,t,n,i){return new(n||(n=Promise))((function(s,r){function o(e){try{c(i.next(e))}catch(t){r(t)}}function a(e){try{c(i.throw(e))}catch(t){r(t)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};class U extends s{constructor(e){super(),this._network="mainnet-beta",this._iframeParams={},this._element=null,this._iframe=null,this._publicKey=null,this._account=null,this._isConnected=!1,this._connectHandler=null,this._messageHandlers={},this._handleEvent=e=>{var t,n;switch(e.type){case"connect":return this._collapseIframe(),void((null===(t=e.data)||void 0===t?void 0:t.publicKey)?(this._publicKey=e.data.publicKey,this._isConnected=!0,this._connectHandler&&(this._connectHandler.resolve(),this._connectHandler=null),this._connected()):(this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected()));case"disconnect":return this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),void this._disconnected();case"accountChanged":return void((null===(n=e.data)||void 0===n?void 0:n.publicKey)?(this._publicKey=e.data.publicKey,this.emit("accountChanged",this.publicKey),this._standardConnected()):(this.emit("accountChanged",void 0),this._standardDisconnected()));default:return}},this._handleResize=e=>{"full"===e.resizeMode?"fullscreen"===e.params.mode?this._expandIframe():"hide"===e.params.mode&&this._collapseIframe():"coordinates"===e.resizeMode&&this._resizeIframe(e.params)},this._handleMessage=e=>{var t;if("solflareIframeToWalletAdapter"!==(null===(t=e.data)||void 0===t?void 0:t.channel))return;const n=e.data.data||{};if("event"===n.type)this._handleEvent(n.event);else if("resize"===n.type)this._handleResize(n);else if("response"===n.type&&this._messageHandlers[n.id]){const{resolve:e,reject:t}=this._messageHandlers[n.id];delete this._messageHandlers[n.id],n.error?t(n.error):e(n.result)}},this._removeElement=()=>{this._element&&(this._element.remove(),this._element=null)},this._removeDanglingElements=()=>{const e=document.getElementsByClassName("solflare-metamask-wallet-adapter-iframe");for(const t of e)t.parentElement&&t.remove()},this._injectElement=()=>{this._removeElement(),this._removeDanglingElements();const e=Object.assign(Object.assign({},this._iframeParams),{mm:!0,v:1,cluster:this._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||""}),t=Object.keys(e).map((t=>`${t}=${encodeURIComponent(e[t])}`)).join("&"),n=`${U.IFRAME_URL}?${t}`;this._element=document.createElement("div"),this._element.className="solflare-metamask-wallet-adapter-iframe",this._element.innerHTML=`\n      <iframe src='${n}' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    `,document.body.appendChild(this._element),this._iframe=this._element.querySelector("iframe"),window.addEventListener("message",this._handleMessage,!1)},this._collapseIframe=()=>{this._iframe&&(this._iframe.style.top="",this._iframe.style.right="",this._iframe.style.height="2px",this._iframe.style.width="2px")},this._expandIframe=()=>{this._iframe&&(this._iframe.style.top="0px",this._iframe.style.bottom="0px",this._iframe.style.left="0px",this._iframe.style.right="0px",this._iframe.style.width="100%",this._iframe.style.height="100%")},this._resizeIframe=e=>{this._iframe&&(this._iframe.style.top=isFinite(e.top)?`${e.top}px`:"",this._iframe.style.bottom=isFinite(e.bottom)?`${e.bottom}px`:"",this._iframe.style.left=isFinite(e.left)?`${e.left}px`:"",this._iframe.style.right=isFinite(e.right)?`${e.right}px`:"",this._iframe.style.width=isFinite(e.width)?`${e.width}px`:e.width,this._iframe.style.height=isFinite(e.height)?`${e.height}px`:e.height)},this._sendIframeMessage=e=>{if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");return new Promise(((t,n)=>{var i,s;const r=f();this._messageHandlers[r]={resolve:t,reject:n},null===(s=null===(i=this._iframe)||void 0===i?void 0:i.contentWindow)||void 0===s||s.postMessage({channel:"solflareWalletAdapterToIframe",data:Object.assign({id:r},e)},"*")}))},this._connected=()=>{this._isConnected=!0,this.emit("connect",this.publicKey),this._standardConnected()},this._disconnected=()=>{this._publicKey=null,this._isConnected=!1,window.removeEventListener("message",this._handleMessage,!1),this._removeElement(),this.emit("disconnect"),this._standardDisconnected()},this._standardConnected=()=>{if(!this.publicKey)return;const e=this.publicKey.toString();this._account&&this._account.address===e||(this._account=new H({address:e,publicKey:this.publicKey.toBytes()}),this.emit("standard_change",{accounts:this.standardAccounts}))},this._standardDisconnected=()=>{this._account&&(this._account=null,this.emit("standard_change",{accounts:this.standardAccounts}))},(null===e||void 0===e?void 0:e.network)&&(this._network=null===e||void 0===e?void 0:e.network),window.SolflareMetaMaskParams&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),window.SolflareMetaMaskParams)),(null===e||void 0===e?void 0:e.params)&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),null===e||void 0===e?void 0:e.params))}get publicKey(){return this._publicKey?new i.J3(this._publicKey):null}get standardAccount(){return this._account}get standardAccounts(){return this._account?[this._account]:[]}get isConnected(){return this._isConnected}get connected(){return this.isConnected}get autoApprove(){return!1}connect(){return O(this,void 0,void 0,(function*(){this.connected||(this._injectElement(),yield new Promise(((e,t)=>{this._connectHandler={resolve:e,reject:t}})))}))}disconnect(){return O(this,void 0,void 0,(function*(){yield this._sendIframeMessage({method:"disconnect"}),this._disconnected()}))}signTransaction(e){var t;return O(this,void 0,void 0,(function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const t=v(e),{signature:n}=yield this._sendIframeMessage({method:"signTransaction",params:{message:o().encode(t)}});return g(e,this.publicKey,o().decode(n)),e}catch(n){throw new Error((null===(t=null===n||void 0===n?void 0:n.toString)||void 0===t?void 0:t.call(n))||"Failed to sign transaction")}}))}signAllTransactions(e){var t;return O(this,void 0,void 0,(function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const t=e.map((e=>v(e))),{signatures:n}=yield this._sendIframeMessage({method:"signAllTransactions",params:{messages:t.map((e=>o().encode(e)))}});for(let i=0;i<e.length;i++)g(e[i],this.publicKey,o().decode(n[i]));return e}catch(n){throw new Error((null===(t=null===n||void 0===n?void 0:n.toString)||void 0===t?void 0:t.call(n))||"Failed to sign transactions")}}))}signAndSendTransaction(e,t){var n;return O(this,void 0,void 0,(function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const n=function(e){return p(e)?e.serialize({verifySignatures:!1,requireAllSignatures:!1}):e.serialize()}(e),{signature:i}=yield this._sendIframeMessage({method:"signAndSendTransaction",params:{transaction:o().encode(n),options:t}});return i}catch(i){throw new Error((null===(n=null===i||void 0===i?void 0:i.toString)||void 0===n?void 0:n.call(i))||"Failed to sign and send transaction")}}))}signMessage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf8";var n;return O(this,void 0,void 0,(function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const{signature:n}=yield this._sendIframeMessage({method:"signMessage",params:{data:o().encode(e),display:t}});return Uint8Array.from(o().decode(n))}catch(i){throw new Error((null===(n=null===i||void 0===i?void 0:i.toString)||void 0===n?void 0:n.call(i))||"Failed to sign message")}}))}sign(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf8";return O(this,void 0,void 0,(function*(){return yield this.signMessage(e,t)}))}static isSupported(){return O(this,void 0,void 0,(function*(){return!!(yield function(){return _(this,void 0,void 0,(function*(){try{const e=window.ethereum;if(!e)return null;if(e.providers&&Array.isArray(e.providers)){const t=e.providers;for(const e of t)if(yield y(e))return e}if(e.detected&&Array.isArray(e.detected)){const t=e.detected;for(const e of t)if(yield y(e))return e}return(yield y(e))?e:null}catch(e){return console.error(e),null}}))}())}))}standardSignAndSendTransaction(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return O(this,void 0,void 0,(function*(){if(!this.connected)throw new Error("not connected");const e=[];if(1===t.length){const{transaction:n,account:s,chain:r,options:a}=t[0],{minContextSlot:c,preflightCommitment:l,skipPreflight:d,maxRetries:h}=a||{};if(s!==this._account)throw new Error("invalid account");if(!M(r))throw new Error("invalid chain");const u=yield this.signAndSendTransaction(i.Kt.deserialize(n),{preflightCommitment:l,minContextSlot:c,maxRetries:h,skipPreflight:d});e.push({signature:o().decode(u)})}else if(t.length>1)for(const n of t)e.push(...yield this.standardSignAndSendTransaction(n));return e}))}standardSignTransaction(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return O(this,void 0,void 0,(function*(){if(!this.connected)throw new Error("not connected");const e=[];if(1===t.length){const{transaction:n,account:s,chain:r}=t[0];if(s!==this._account)throw new Error("invalid account");if(r&&!M(r))throw new Error("invalid chain");const o=yield this.signTransaction(i.Kt.deserialize(n));e.push({signedTransaction:o.serialize()})}else if(t.length>1){let n;for(const e of t){if(e.account!==this._account)throw new Error("invalid account");if(e.chain){if(!M(e.chain))throw new Error("invalid chain");if(n){if(e.chain!==n)throw new Error("conflicting chain")}else n=e.chain}}const s=t.map((e=>{let{transaction:t}=e;return i.Kt.deserialize(t)})),r=yield this.signAllTransactions(s);e.push(...r.map((e=>({signedTransaction:e.serialize()}))))}return e}))}standardSignMessage(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return O(this,void 0,void 0,(function*(){if(!this.connected)throw new Error("not connected");const e=[];if(1===t.length){const{message:n,account:i}=t[0];if(i!==this._account)throw new Error("invalid account");const s=yield this.signMessage(n);e.push({signedMessage:n,signature:s})}else if(t.length>1)for(const n of t)e.push(...yield this.standardSignMessage(n));return e}))}}U.IFRAME_URL="https://widget.solflare.com/";const W=U},5036:e=>{var t=Object.prototype.hasOwnProperty,n="~";function i(){}function s(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function r(e,t,i,r,o){if("function"!==typeof i)throw new TypeError("The listener must be a function");var a=new s(i,r||e,o),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function o(e,t){0===--e._eventsCount?e._events=new i:delete e._events[t]}function a(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(n=!1)),a.prototype.eventNames=function(){var e,i,s=[];if(0===this._eventsCount)return s;for(i in e=this._events)t.call(e,i)&&s.push(n?i.slice(1):i);return Object.getOwnPropertySymbols?s.concat(Object.getOwnPropertySymbols(e)):s},a.prototype.listeners=function(e){var t=n?n+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var s=0,r=i.length,o=new Array(r);s<r;s++)o[s]=i[s].fn;return o},a.prototype.listenerCount=function(e){var t=n?n+e:e,i=this._events[t];return i?i.fn?1:i.length:0},a.prototype.emit=function(e,t,i,s,r,o){var a=n?n+e:e;if(!this._events[a])return!1;var c,l,d=this._events[a],h=arguments.length;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),h){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,i),!0;case 4:return d.fn.call(d.context,t,i,s),!0;case 5:return d.fn.call(d.context,t,i,s,r),!0;case 6:return d.fn.call(d.context,t,i,s,r,o),!0}for(l=1,c=new Array(h-1);l<h;l++)c[l-1]=arguments[l];d.fn.apply(d.context,c)}else{var u,f=d.length;for(l=0;l<f;l++)switch(d[l].once&&this.removeListener(e,d[l].fn,void 0,!0),h){case 1:d[l].fn.call(d[l].context);break;case 2:d[l].fn.call(d[l].context,t);break;case 3:d[l].fn.call(d[l].context,t,i);break;case 4:d[l].fn.call(d[l].context,t,i,s);break;default:if(!c)for(u=1,c=new Array(h-1);u<h;u++)c[u-1]=arguments[u];d[l].fn.apply(d[l].context,c)}}return!0},a.prototype.on=function(e,t,n){return r(this,e,t,n,!1)},a.prototype.once=function(e,t,n){return r(this,e,t,n,!0)},a.prototype.removeListener=function(e,t,i,s){var r=n?n+e:e;if(!this._events[r])return this;if(!t)return o(this,r),this;var a=this._events[r];if(a.fn)a.fn!==t||s&&!a.once||i&&a.context!==i||o(this,r);else{for(var c=0,l=[],d=a.length;c<d;c++)(a[c].fn!==t||s&&!a[c].once||i&&a[c].context!==i)&&l.push(a[c]);l.length?this._events[r]=1===l.length?l[0]:l:o(this,r)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&o(this,t)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a}}]);
//# sourceMappingURL=227.46d9e6a9.chunk.js.map