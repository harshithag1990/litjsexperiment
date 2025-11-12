(function(C,U){typeof exports=="object"&&typeof module<"u"?U(exports):typeof define=="function"&&define.amd?define(["exports"],U):(C=typeof globalThis<"u"?globalThis:C||self,U(C.WhosOut={}))})(this,(function(C){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,gt=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ot=Symbol(),Tt=new WeakMap;let ie=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(gt&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Tt.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Tt.set(n,t))}return t}toString(){return this.cssText}};const ne=l=>new ie(typeof l=="string"?l:l+"",void 0,Ot),re=(l,t)=>{if(gt)l.adoptedStyleSheets=t.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of t){const r=document.createElement("style"),a=U.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=n.cssText,l.appendChild(r)}},Ut=gt?l=>l:l=>l instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return ne(n)})(l):l;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:oe,defineProperty:ae,getOwnPropertyDescriptor:he,getOwnPropertyNames:le,getOwnPropertySymbols:ce,getPrototypeOf:de}=Object,lt=globalThis,Mt=lt.trustedTypes,pe=Mt?Mt.emptyScript:"",ue=lt.reactiveElementPolyfillSupport,G=(l,t)=>l,yt={toAttribute(l,t){switch(t){case Boolean:l=l?pe:null;break;case Object:case Array:l=l==null?l:JSON.stringify(l)}return l},fromAttribute(l,t){let n=l;switch(t){case Boolean:n=l!==null;break;case Number:n=l===null?null:Number(l);break;case Object:case Array:try{n=JSON.parse(l)}catch{n=null}}return n}},Ht=(l,t)=>!oe(l,t),Nt={attribute:!0,type:String,converter:yt,reflect:!1,useDefault:!1,hasChanged:Ht};Symbol.metadata??=Symbol("metadata"),lt.litPropertyMetadata??=new WeakMap;let B=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Nt){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),a=this.getPropertyDescriptor(t,r,n);a!==void 0&&ae(this.prototype,t,a)}}static getPropertyDescriptor(t,n,r){const{get:a,set:c}=he(this.prototype,t)??{get(){return this[n]},set(u){this[n]=u}};return{get:a,set(u){const g=a?.call(this);c?.call(this,u),this.requestUpdate(t,g,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Nt}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;const t=de(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){const n=this.properties,r=[...le(n),...ce(n)];for(const a of r)this.createProperty(a,n[a])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,a]of n)this.elementProperties.set(r,a)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const a=this._$Eu(n,r);a!==void 0&&this._$Eh.set(a,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const a of r)n.unshift(Ut(a))}else t!==void 0&&n.push(Ut(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return re(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,r);if(a!==void 0&&r.reflect===!0){const c=(r.converter?.toAttribute!==void 0?r.converter:yt).toAttribute(n,r.type);this._$Em=t,c==null?this.removeAttribute(a):this.setAttribute(a,c),this._$Em=null}}_$AK(t,n){const r=this.constructor,a=r._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const c=r.getPropertyOptions(a),u=typeof c.converter=="function"?{fromAttribute:c.converter}:c.converter?.fromAttribute!==void 0?c.converter:yt;this._$Em=a;const g=u.fromAttribute(n,c.type);this[a]=g??this._$Ej?.get(a)??g,this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){const a=this.constructor,c=this[t];if(r??=a.getPropertyOptions(t),!((r.hasChanged??Ht)(c,n)||r.useDefault&&r.reflect&&c===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:a,wrapped:c},u){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,u??n??this[t]),c!==!0||u!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,c]of this._$Ep)this[a]=c;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[a,c]of r){const{wrapped:u}=c,g=this[a];u!==!0||this._$AL.has(a)||g===void 0||this.C(a,void 0,c,g)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach((r=>r.hostUpdate?.())),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}};B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[G("elementProperties")]=new Map,B[G("finalized")]=new Map,ue?.({ReactiveElement:B}),(lt.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=globalThis,ct=At.trustedTypes,Rt=ct?ct.createPolicy("lit-html",{createHTML:l=>l}):void 0,Lt="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,kt="?"+M,$e=`<${kt}>`,R=document,Q=()=>R.createComment(""),X=l=>l===null||typeof l!="object"&&typeof l!="function",vt=Array.isArray,fe=l=>vt(l)||typeof l?.[Symbol.iterator]=="function",Et=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jt=/-->/g,Wt=/>/g,L=RegExp(`>|${Et}(?:([^\\s"'>=/]+)(${Et}*=${Et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,It=/"/g,zt=/^(?:script|style|textarea|title)$/i,_e=l=>(t,...n)=>({_$litType$:l,strings:t,values:n}),me=_e(1),q=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Bt=new WeakMap,k=R.createTreeWalker(R,129);function qt(l,t){if(!vt(l)||!l.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rt!==void 0?Rt.createHTML(t):t}const ge=(l,t)=>{const n=l.length-1,r=[];let a,c=t===2?"<svg>":t===3?"<math>":"",u=Y;for(let g=0;g<n;g++){const f=l[g];let y,E,_=-1,P=0;for(;P<f.length&&(u.lastIndex=P,E=u.exec(f),E!==null);)P=u.lastIndex,u===Y?E[1]==="!--"?u=jt:E[1]!==void 0?u=Wt:E[2]!==void 0?(zt.test(E[2])&&(a=RegExp("</"+E[2],"g")),u=L):E[3]!==void 0&&(u=L):u===L?E[0]===">"?(u=a??Y,_=-1):E[1]===void 0?_=-2:(_=u.lastIndex-E[2].length,y=E[1],u=E[3]===void 0?L:E[3]==='"'?It:Dt):u===It||u===Dt?u=L:u===jt||u===Wt?u=Y:(u=L,a=void 0);const x=u===L&&l[g+1].startsWith("/>")?" ":"";c+=u===Y?f+$e:_>=0?(r.push(y),f.slice(0,_)+Lt+f.slice(_)+M+x):f+M+(_===-2?g:x)}return[qt(l,c+(l[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class tt{constructor({strings:t,_$litType$:n},r){let a;this.parts=[];let c=0,u=0;const g=t.length-1,f=this.parts,[y,E]=ge(t,n);if(this.el=tt.createElement(y,r),k.currentNode=this.el.content,n===2||n===3){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(a=k.nextNode())!==null&&f.length<g;){if(a.nodeType===1){if(a.hasAttributes())for(const _ of a.getAttributeNames())if(_.endsWith(Lt)){const P=E[u++],x=a.getAttribute(_).split(M),J=/([.?@])?(.*)/.exec(P);f.push({type:1,index:c,name:J[2],strings:x,ctor:J[1]==="."?Ae:J[1]==="?"?ve:J[1]==="@"?Ee:dt}),a.removeAttribute(_)}else _.startsWith(M)&&(f.push({type:6,index:c}),a.removeAttribute(_));if(zt.test(a.tagName)){const _=a.textContent.split(M),P=_.length-1;if(P>0){a.textContent=ct?ct.emptyScript:"";for(let x=0;x<P;x++)a.append(_[x],Q()),k.nextNode(),f.push({type:2,index:++c});a.append(_[P],Q())}}}else if(a.nodeType===8)if(a.data===kt)f.push({type:2,index:c});else{let _=-1;for(;(_=a.data.indexOf(M,_+1))!==-1;)f.push({type:7,index:c}),_+=M.length-1}c++}}static createElement(t,n){const r=R.createElement("template");return r.innerHTML=t,r}}function V(l,t,n=l,r){if(t===q)return t;let a=r!==void 0?n._$Co?.[r]:n._$Cl;const c=X(t)?void 0:t._$litDirective$;return a?.constructor!==c&&(a?._$AO?.(!1),c===void 0?a=void 0:(a=new c(l),a._$AT(l,n,r)),r!==void 0?(n._$Co??=[])[r]=a:n._$Cl=a),a!==void 0&&(t=V(l,a._$AS(l,t.values),a,r)),t}class ye{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,a=(t?.creationScope??R).importNode(n,!0);k.currentNode=a;let c=k.nextNode(),u=0,g=0,f=r[0];for(;f!==void 0;){if(u===f.index){let y;f.type===2?y=new et(c,c.nextSibling,this,t):f.type===1?y=new f.ctor(c,f.name,f.strings,this,t):f.type===6&&(y=new be(c,this,t)),this._$AV.push(y),f=r[++g]}u!==f?.index&&(c=k.nextNode(),u++)}return k.currentNode=R,a}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,a){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=V(this,t,n),X(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==q&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):fe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&X(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,a=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=tt.createElement(qt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===a)this._$AH.p(n);else{const c=new ye(a,this),u=c.u(this.options);c.p(n),this.T(u),this._$AH=c}}_$AC(t){let n=Bt.get(t.strings);return n===void 0&&Bt.set(t.strings,n=new tt(t)),n}k(t){vt(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,a=0;for(const c of t)a===n.length?n.push(r=new et(this.O(Q()),this.O(Q()),this,this.options)):r=n[a],r._$AI(c),a++;a<n.length&&(this._$AR(r&&r._$AB.nextSibling,a),n.length=a)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class dt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,a,c){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=n,this._$AM=a,this.options=c,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=v}_$AI(t,n=this,r,a){const c=this.strings;let u=!1;if(c===void 0)t=V(this,t,n,0),u=!X(t)||t!==this._$AH&&t!==q,u&&(this._$AH=t);else{const g=t;let f,y;for(t=c[0],f=0;f<c.length-1;f++)y=V(this,g[r+f],n,f),y===q&&(y=this._$AH[f]),u||=!X(y)||y!==this._$AH[f],y===v?t=v:t!==v&&(t+=(y??"")+c[f+1]),this._$AH[f]=y}u&&!a&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ae extends dt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}class ve extends dt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}}class Ee extends dt{constructor(t,n,r,a,c){super(t,n,r,a,c),this.type=5}_$AI(t,n=this){if((t=V(this,t,n,0)??v)===q)return;const r=this._$AH,a=t===v&&r!==v||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,c=t!==v&&(r===v||a);a&&this.element.removeEventListener(this.name,this,r),c&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class be{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const Se=At.litHtmlPolyfillSupport;Se?.(tt,et),(At.litHtmlVersions??=[]).push("3.3.1");const we=(l,t,n)=>{const r=n?.renderBefore??t;let a=r._$litPart$;if(a===void 0){const c=n?.renderBefore??null;r._$litPart$=a=new et(t.insertBefore(Q(),c),c,void 0,n??{})}return a._$AI(l),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=globalThis;class j extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=we(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}j._$litElement$=!0,j.finalized=!0,bt.litElementHydrateSupport?.({LitElement:j});const Ce=bt.litElementPolyfillSupport;Ce?.({LitElement:j}),(bt.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=l=>(t,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(l,t)})):customElements.define(l,t)};(function(l,t){typeof C=="object"&&typeof module<"u"?t(C):typeof define=="function"&&define.amd?define(["exports"],t):(l=typeof globalThis<"u"?globalThis:l||self,t(l.ListWidget={}))})(void 0,(function(l){/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const t=globalThis,n=t.ShadowRoot&&(t.ShadyCSS===void 0||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),a=new WeakMap;let c=class{constructor(s,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=s,this.t=e}get styleSheet(){let s=this.o;const e=this.t;if(n&&s===void 0){const i=e!==void 0&&e.length===1;i&&(s=a.get(e)),s===void 0&&((this.o=s=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,s))}return s}toString(){return this.cssText}};const u=s=>new c(typeof s=="string"?s:s+"",void 0,r),g=(s,...e)=>{const i=s.length===1?s[0]:e.reduce(((o,h,d)=>o+(p=>{if(p._$cssResult$===!0)return p.cssText;if(typeof p=="number")return p;throw Error("Value passed to 'css' function must be a 'css' function result: "+p+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(h)+s[d+1]),s[0]);return new c(i,s,r)},f=(s,e)=>{if(n)s.adoptedStyleSheets=e.map((i=>i instanceof CSSStyleSheet?i:i.styleSheet));else for(const i of e){const o=document.createElement("style"),h=t.litNonce;h!==void 0&&o.setAttribute("nonce",h),o.textContent=i.cssText,s.appendChild(o)}},y=n?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let i="";for(const o of e.cssRules)i+=o.cssText;return u(i)})(s):s;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{is:E,defineProperty:_,getOwnPropertyDescriptor:P,getOwnPropertyNames:x,getOwnPropertySymbols:J,getPrototypeOf:Te}=Object,pt=globalThis,Vt=pt.trustedTypes,Ue=Vt?Vt.emptyScript:"",Me=pt.reactiveElementPolyfillSupport,st=(s,e)=>s,ut={toAttribute(s,e){switch(e){case Boolean:s=s?Ue:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let i=s;switch(e){case Boolean:i=s!==null;break;case Number:i=s===null?null:Number(s);break;case Object:case Array:try{i=JSON.parse(s)}catch{i=null}}return i}},St=(s,e)=>!E(s,e),Jt={attribute:!0,type:String,converter:ut,reflect:!1,useDefault:!1,hasChanged:St};Symbol.metadata??=Symbol("metadata"),pt.litPropertyMetadata??=new WeakMap;let F=class extends HTMLElement{static addInitializer(s){this._$Ei(),(this.l??=[]).push(s)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(s,e=Jt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(s)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(s,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(s,i,e);o!==void 0&&_(this.prototype,s,o)}}static getPropertyDescriptor(s,e,i){const{get:o,set:h}=P(this.prototype,s)??{get(){return this[e]},set(d){this[e]=d}};return{get:o,set(d){const p=o?.call(this);h?.call(this,d),this.requestUpdate(s,p,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(s){return this.elementProperties.get(s)??Jt}static _$Ei(){if(this.hasOwnProperty(st("elementProperties")))return;const s=Te(this);s.finalize(),s.l!==void 0&&(this.l=[...s.l]),this.elementProperties=new Map(s.elementProperties)}static finalize(){if(this.hasOwnProperty(st("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(st("properties"))){const e=this.properties,i=[...x(e),...J(e)];for(const o of i)this.createProperty(o,e[o])}const s=this[Symbol.metadata];if(s!==null){const e=litPropertyMetadata.get(s);if(e!==void 0)for(const[i,o]of e)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const o=this._$Eu(e,i);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s){const e=[];if(Array.isArray(s)){const i=new Set(s.flat(1/0).reverse());for(const o of i)e.unshift(y(o))}else s!==void 0&&e.push(y(s));return e}static _$Eu(s,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof s=="string"?s.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((s=>this.enableUpdating=s)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((s=>s(this)))}addController(s){(this._$EO??=new Set).add(s),this.renderRoot!==void 0&&this.isConnected&&s.hostConnected?.()}removeController(s){this._$EO?.delete(s)}_$E_(){const s=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(s.set(i,this[i]),delete this[i]);s.size>0&&(this._$Ep=s)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return f(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((s=>s.hostConnected?.()))}enableUpdating(s){}disconnectedCallback(){this._$EO?.forEach((s=>s.hostDisconnected?.()))}attributeChangedCallback(s,e,i){this._$AK(s,i)}_$ET(s,e){const i=this.constructor.elementProperties.get(s),o=this.constructor._$Eu(s,i);if(o!==void 0&&i.reflect===!0){const h=(i.converter?.toAttribute!==void 0?i.converter:ut).toAttribute(e,i.type);this._$Em=s,h==null?this.removeAttribute(o):this.setAttribute(o,h),this._$Em=null}}_$AK(s,e){const i=this.constructor,o=i._$Eh.get(s);if(o!==void 0&&this._$Em!==o){const h=i.getPropertyOptions(o),d=typeof h.converter=="function"?{fromAttribute:h.converter}:h.converter?.fromAttribute!==void 0?h.converter:ut;this._$Em=o;const p=d.fromAttribute(e,h.type);this[o]=p??this._$Ej?.get(o)??p,this._$Em=null}}requestUpdate(s,e,i){if(s!==void 0){const o=this.constructor,h=this[s];if(i??=o.getPropertyOptions(s),!((i.hasChanged??St)(h,e)||i.useDefault&&i.reflect&&h===this._$Ej?.get(s)&&!this.hasAttribute(o._$Eu(s,i))))return;this.C(s,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(s,e,{useDefault:i,reflect:o,wrapped:h},d){i&&!(this._$Ej??=new Map).has(s)&&(this._$Ej.set(s,d??e??this[s]),h!==!0||d!==void 0)||(this._$AL.has(s)||(this.hasUpdated||i||(e=void 0),this._$AL.set(s,e)),o===!0&&this._$Em!==s&&(this._$Eq??=new Set).add(s))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const s=this.scheduleUpdate();return s!=null&&await s,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,h]of this._$Ep)this[o]=h;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,h]of i){const{wrapped:d}=h,p=this[o];d!==!0||this._$AL.has(o)||p===void 0||this.C(o,void 0,h,p)}}let s=!1;const e=this._$AL;try{s=this.shouldUpdate(e),s?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw s=!1,this._$EM(),i}s&&this._$AE(e)}willUpdate(s){}_$AE(s){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(s)),this.updated(s)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(s){return!0}update(s){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(s){}firstUpdated(s){}};F.elementStyles=[],F.shadowRootOptions={mode:"open"},F[st("elementProperties")]=new Map,F[st("finalized")]=new Map,Me?.({ReactiveElement:F}),(pt.reactiveElementVersions??=[]).push("2.1.1");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const wt=globalThis,$t=wt.trustedTypes,Ft=$t?$t.createPolicy("lit-html",{createHTML:s=>s}):void 0,Kt="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,Zt="?"+H,He=`<${Zt}>`,W=document,it=()=>W.createComment(""),nt=s=>s===null||typeof s!="object"&&typeof s!="function",Ct=Array.isArray,Ne=s=>Ct(s)||typeof s?.[Symbol.iterator]=="function",Pt=`[ 	
\f\r]`,rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gt=/-->/g,Qt=/>/g,D=RegExp(`>|${Pt}(?:([^\\s"'>=/]+)(${Pt}*=${Pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xt=/'/g,Yt=/"/g,te=/^(?:script|style|textarea|title)$/i,Re=s=>(e,...i)=>({_$litType$:s,strings:e,values:i}),O=Re(1),K=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),ee=new WeakMap,I=W.createTreeWalker(W,129);function se(s,e){if(!Ct(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ft!==void 0?Ft.createHTML(e):e}const Le=(s,e)=>{const i=s.length-1,o=[];let h,d=e===2?"<svg>":e===3?"<math>":"",p=rt;for(let A=0;A<i;A++){const $=s[A];let S,w,m=-1,T=0;for(;T<$.length&&(p.lastIndex=T,w=p.exec($),w!==null);)T=p.lastIndex,p===rt?w[1]==="!--"?p=Gt:w[1]!==void 0?p=Qt:w[2]!==void 0?(te.test(w[2])&&(h=RegExp("</"+w[2],"g")),p=D):w[3]!==void 0&&(p=D):p===D?w[0]===">"?(p=h??rt,m=-1):w[1]===void 0?m=-2:(m=p.lastIndex-w[2].length,S=w[1],p=w[3]===void 0?D:w[3]==='"'?Yt:Xt):p===Yt||p===Xt?p=D:p===Gt||p===Qt?p=rt:(p=D,h=void 0);const N=p===D&&s[A+1].startsWith("/>")?" ":"";d+=p===rt?$+He:m>=0?(o.push(S),$.slice(0,m)+Kt+$.slice(m)+H+N):$+H+(m===-2?A:N)}return[se(s,d+(s[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class ot{constructor({strings:e,_$litType$:i},o){let h;this.parts=[];let d=0,p=0;const A=e.length-1,$=this.parts,[S,w]=Le(e,i);if(this.el=ot.createElement(S,o),I.currentNode=this.el.content,i===2||i===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(h=I.nextNode())!==null&&$.length<A;){if(h.nodeType===1){if(h.hasAttributes())for(const m of h.getAttributeNames())if(m.endsWith(Kt)){const T=w[p++],N=h.getAttribute(m).split(H),mt=/([.?@])?(.*)/.exec(T);$.push({type:1,index:d,name:mt[2],strings:N,ctor:mt[1]==="."?je:mt[1]==="?"?We:mt[1]==="@"?De:ft}),h.removeAttribute(m)}else m.startsWith(H)&&($.push({type:6,index:d}),h.removeAttribute(m));if(te.test(h.tagName)){const m=h.textContent.split(H),T=m.length-1;if(T>0){h.textContent=$t?$t.emptyScript:"";for(let N=0;N<T;N++)h.append(m[N],it()),I.nextNode(),$.push({type:2,index:++d});h.append(m[T],it())}}}else if(h.nodeType===8)if(h.data===Zt)$.push({type:2,index:d});else{let m=-1;for(;(m=h.data.indexOf(H,m+1))!==-1;)$.push({type:7,index:d}),m+=H.length-1}d++}}static createElement(e,i){const o=W.createElement("template");return o.innerHTML=e,o}}function Z(s,e,i=s,o){if(e===K)return e;let h=o!==void 0?i._$Co?.[o]:i._$Cl;const d=nt(e)?void 0:e._$litDirective$;return h?.constructor!==d&&(h?._$AO?.(!1),d===void 0?h=void 0:(h=new d(s),h._$AT(s,i,o)),o!==void 0?(i._$Co??=[])[o]=h:i._$Cl=h),h!==void 0&&(e=Z(s,h._$AS(s,e.values),h,o)),e}class ke{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:o}=this._$AD,h=(e?.creationScope??W).importNode(i,!0);I.currentNode=h;let d=I.nextNode(),p=0,A=0,$=o[0];for(;$!==void 0;){if(p===$.index){let S;$.type===2?S=new at(d,d.nextSibling,this,e):$.type===1?S=new $.ctor(d,$.name,$.strings,this,e):$.type===6&&(S=new Ie(d,this,e)),this._$AV.push(S),$=o[++A]}p!==$?.index&&(d=I.nextNode(),p++)}return I.currentNode=W,h}p(e){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}}class at{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,o,h){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=o,this.options=h,this._$Cv=h?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Z(this,e,i),nt(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ne(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&nt(this._$AH)?this._$AA.nextSibling.data=e:this.T(W.createTextNode(e)),this._$AH=e}$(e){const{values:i,_$litType$:o}=e,h=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ot.createElement(se(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===h)this._$AH.p(i);else{const d=new ke(h,this),p=d.u(this.options);d.p(i),this.T(p),this._$AH=d}}_$AC(e){let i=ee.get(e.strings);return i===void 0&&ee.set(e.strings,i=new ot(e)),i}k(e){Ct(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,h=0;for(const d of e)h===i.length?i.push(o=new at(this.O(it()),this.O(it()),this,this.options)):o=i[h],o._$AI(d),h++;h<i.length&&(this._$AR(o&&o._$AB.nextSibling,h),i.length=h)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class ft{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,o,h,d){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=i,this._$AM=h,this.options=d,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=b}_$AI(e,i=this,o,h){const d=this.strings;let p=!1;if(d===void 0)e=Z(this,e,i,0),p=!nt(e)||e!==this._$AH&&e!==K,p&&(this._$AH=e);else{const A=e;let $,S;for(e=d[0],$=0;$<d.length-1;$++)S=Z(this,A[o+$],i,$),S===K&&(S=this._$AH[$]),p||=!nt(S)||S!==this._$AH[$],S===b?e=b:e!==b&&(e+=(S??"")+d[$+1]),this._$AH[$]=S}p&&!h&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class je extends ft{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}class We extends ft{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}}class De extends ft{constructor(e,i,o,h,d){super(e,i,o,h,d),this.type=5}_$AI(e,i=this){if((e=Z(this,e,i,0)??b)===K)return;const o=this._$AH,h=e===b&&o!==b||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,d=e!==b&&(o===b||h);h&&this.element.removeEventListener(this.name,this,o),d&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ie{constructor(e,i,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ze=wt.litHtmlPolyfillSupport;ze?.(ot,at),(wt.litHtmlVersions??=[]).push("3.3.1");const Be=(s,e,i)=>{const o=i?.renderBefore??e;let h=o._$litPart$;if(h===void 0){const d=i?.renderBefore??null;o._$litPart$=h=new at(e.insertBefore(it(),d),d,void 0,i??{})}return h._$AI(s),h};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const xt=globalThis;class z extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Be(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}z._$litElement$=!0,z.finalized=!0,xt.litElementHydrateSupport?.({LitElement:z});const qe=xt.litElementPolyfillSupport;qe?.({LitElement:z}),(xt.litElementVersions??=[]).push("4.2.1");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ve=s=>(e,i)=>{i!==void 0?i.addInitializer((()=>{customElements.define(s,e)})):customElements.define(s,e)};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Je={attribute:!0,type:String,converter:ut,reflect:!1,hasChanged:St},Fe=(s=Je,e,i)=>{const{kind:o,metadata:h}=i;let d=globalThis.litPropertyMetadata.get(h);if(d===void 0&&globalThis.litPropertyMetadata.set(h,d=new Map),o==="setter"&&((s=Object.create(s)).wrapped=!0),d.set(i.name,s),o==="accessor"){const{name:p}=i;return{set(A){const $=e.get.call(this);e.set.call(this,A),this.requestUpdate(p,$,s)},init(A){return A!==void 0&&this.C(p,void 0,s,A),A}}}if(o==="setter"){const{name:p}=i;return function(A){const $=this[p];e.call(this,A),this.requestUpdate(p,$,s)}}throw Error("Unsupported decorator location: "+o)};function _t(s){return(e,i)=>typeof i=="object"?Fe(s,e,i):((o,h,d)=>{const p=h.hasOwnProperty(d);return h.constructor.createProperty(d,o),p?Object.getOwnPropertyDescriptor(h,d):void 0})(s,e,i)}var Ke=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,ht=(s,e,i,o)=>{for(var h=o>1?void 0:o?Ze(e,i):e,d=s.length-1,p;d>=0;d--)(p=s[d])&&(h=(o?p(e,i,h):p(h))||h);return o&&h&&Ke(e,i,h),h};l.ListWidget=class extends z{constructor(){super(...arguments),this.headerIcon="",this.headerTitle="",this.sections=[],this.metadataLabel=""}render(){return O`
      <div class="widget-container">
        ${this.renderHeader()}
        ${this.renderSections()}
      </div>
    `}renderHeader(){return this.headerTitle?O`
      <div class="widget-header">
        ${this.headerIcon?O`<span class="header-icon">${this.headerIcon}</span>`:""}
        <h2 class="header-title">${this.headerTitle}</h2>
      </div>
    `:O``}renderSections(){return!this.sections||this.sections.length===0?O``:O`
      <div class="widget-content">
        ${this.sections.map(s=>this.renderSection(s))}
      </div>
    `}renderSection(s){return O`
      <div class="section">
        ${s.title?O`<h3 class="section-title">${s.title}</h3>`:""}
        <div class="items-list">
          ${s.items.map(e=>this.renderItem(e))}
        </div>
      </div>
    `}renderItem(s){return O`
      <div class="item">
        <img 
          src=${s.avatar} 
          alt=${s.name}
          class="avatar"
          @error=${this.handleImageError}
        />
        <div class="item-content">
          <div class="item-name">${s.name}</div>
          <div class="item-metadata">
            ${this.metadataLabel?O`<span class="metadata-label">${this.metadataLabel}</span>`:""}
            ${s.metadata}
          </div>
        </div>
      </div>
    `}handleImageError(s){const e=s.target;e.style.display="none"}},l.ListWidget.styles=g`
    :host {
      display: block;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background-color: #ffffff;
      color: #000000;
    }

    .widget-container {
      padding: 1.5rem;
      max-width: 100%;
    }

    .widget-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }

    .header-icon {
      font-size: 1.5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .header-title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
      color: #000000;
    }

    .widget-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .section-title {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      color: #4a4a4a;
    }

    .items-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
    }

    .item-content {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
    }

    .item-name {
      font-size: 1rem;
      font-weight: 600;
      color: #000000;
    }

    .item-metadata {
      font-size: 0.875rem;
      color: #4a4a4a;
    }

    .metadata-label {
      font-weight: 500;
    }

    @media (prefers-color-scheme: dark) {
      :host {
        background-color: #1a1a1a;
        color: #ffffff;
      }

      .header-title,
      .item-name {
        color: #ffffff;
      }

      .section-title,
      .item-metadata {
        color: #a0a0a0;
      }
    }
  `,ht([_t()],l.ListWidget.prototype,"headerIcon",2),ht([_t()],l.ListWidget.prototype,"headerTitle",2),ht([_t({type:Array})],l.ListWidget.prototype,"sections",2),ht([_t()],l.ListWidget.prototype,"metadataLabel",2),l.ListWidget=ht([Ve("list-widget")],l.ListWidget),typeof globalThis<"u"&&(globalThis.MyElement=globalThis.MyElement||{},globalThis.MyElement.LitElement=z),l.LitElement=z,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})}));var xe=Object.getOwnPropertyDescriptor,Oe=(l,t,n,r)=>{for(var a=r>1?void 0:r?xe(t,n):t,c=l.length-1,u;c>=0;c--)(u=l[c])&&(a=u(a)||a);return a};C.WhosOutWidget=class extends j{constructor(){super(...arguments),this.sections=[{title:"This Week",items:[{avatar:"https://i.pravatar.cc/150?img=5",name:"Alice Johnson",metadata:"July 3rd"},{avatar:"https://i.pravatar.cc/150?img=6",name:"Charlie Brown",metadata:"July 5th"},{avatar:"https://i.pravatar.cc/150?img=7",name:"Bob Williams",metadata:"July 10th"},{avatar:"https://i.pravatar.cc/150?img=8",name:"Eve Davis",metadata:"July 12th"},{avatar:"https://i.pravatar.cc/150?img=9",name:"Frank White",metadata:"july 14th"}]}]}render(){return me`
      <list-widget
        headerIcon="👥"
        headerTitle="Who's Out"
        .sections=${this.sections}
        metadataLabel="Out until "
      ></list-widget>
    `}},C.WhosOutWidget=Oe([Pe("whos-out-widget")],C.WhosOutWidget),typeof globalThis<"u"&&(globalThis.MyElement=globalThis.MyElement||{},globalThis.MyElement.LitElement=j),C.LitElement=j,Object.defineProperty(C,Symbol.toStringTag,{value:"Module"})}));
