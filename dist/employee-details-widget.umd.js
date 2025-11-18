(function(u,$){typeof exports=="object"&&typeof module<"u"?$(exports):typeof define=="function"&&define.amd?define(["exports"],$):(u=typeof globalThis<"u"?globalThis:u||self,$(u.EmployeeDetails={}))})(this,(function(u){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=globalThis,k=$.ShadowRoot&&($.ShadyCSS===void 0||$.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),J=new WeakMap;let K=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(k&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&J.set(e,t))}return t}toString(){return this.cssText}};const dt=n=>new K(typeof n=="string"?n:n+"",void 0,z),Z=(n,...t)=>{const e=n.length===1?n[0]:t.reduce(((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1]),n[0]);return new K(e,n,z)},pt=(n,t)=>{if(k)n.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=$.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},G=k?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return dt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ut,defineProperty:ft,getOwnPropertyDescriptor:$t,getOwnPropertyNames:gt,getOwnPropertySymbols:mt,getPrototypeOf:_t}=Object,H=globalThis,Q=H.trustedTypes,yt=Q?Q.emptyScript:"",vt=H.reactiveElementPolyfillSupport,S=(n,t)=>n,N={toAttribute(n,t){switch(t){case Boolean:n=n?yt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},L=(n,t)=>!ut(n,t),X={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:L};Symbol.metadata??=Symbol("metadata"),H.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ft(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=$t(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){const a=s?.call(this);o?.call(this,r),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??X}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=_t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,i=[...gt(e),...mt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(G(s))}else t!==void 0&&e.push(G(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:N).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:N;this._$Em=s;const a=r.fromAttribute(e,o.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??L)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i){const{wrapped:r}=o,a=this[s];r!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[S("elementProperties")]=new Map,E[S("finalized")]=new Map,vt?.({ReactiveElement:E}),(H.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,D=W.trustedTypes,Y=D?D.createPolicy("lit-html",{createHTML:n=>n}):void 0,tt="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,et="?"+g,At=`<${et}>`,y=document,C=()=>y.createComment(""),P=n=>n===null||typeof n!="object"&&typeof n!="function",I=Array.isArray,bt=n=>I(n)||typeof n?.[Symbol.iterator]=="function",B=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,st=/>/g,v=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,ot=/"/g,rt=/^(?:script|style|textarea|title)$/i,Et=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),A=Et(1),w=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),lt=new WeakMap,b=y.createTreeWalker(y,129);function at(n,t){if(!I(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Y!==void 0?Y.createHTML(t):t}const wt=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",r=O;for(let a=0;a<e;a++){const l=n[a];let d,p,h=-1,f=0;for(;f<l.length&&(r.lastIndex=f,p=r.exec(l),p!==null);)f=r.lastIndex,r===O?p[1]==="!--"?r=it:p[1]!==void 0?r=st:p[2]!==void 0?(rt.test(p[2])&&(s=RegExp("</"+p[2],"g")),r=v):p[3]!==void 0&&(r=v):r===v?p[0]===">"?(r=s??O,h=-1):p[1]===void 0?h=-2:(h=r.lastIndex-p[2].length,d=p[1],r=p[3]===void 0?v:p[3]==='"'?ot:nt):r===ot||r===nt?r=v:r===it||r===st?r=O:(r=v,s=void 0);const _=r===v&&n[a+1].startsWith("/>")?" ":"";o+=r===O?l+At:h>=0?(i.push(d),l.slice(0,h)+tt+l.slice(h)+g+_):l+g+(h===-2?a:_)}return[at(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const a=t.length-1,l=this.parts,[d,p]=wt(t,e);if(this.el=M.createElement(d,i),b.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=b.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(tt)){const f=p[r++],_=s.getAttribute(h).split(g),R=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:R[2],strings:_,ctor:R[1]==="."?St:R[1]==="?"?Ct:R[1]==="@"?Pt:j}),s.removeAttribute(h)}else h.startsWith(g)&&(l.push({type:6,index:o}),s.removeAttribute(h));if(rt.test(s.tagName)){const h=s.textContent.split(g),f=h.length-1;if(f>0){s.textContent=D?D.emptyScript:"";for(let _=0;_<f;_++)s.append(h[_],C()),b.nextNode(),l.push({type:2,index:++o});s.append(h[f],C())}}}else if(s.nodeType===8)if(s.data===et)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(g,h+1))!==-1;)l.push({type:7,index:o}),h+=g.length-1}o++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function x(n,t,e=n,i){if(t===w)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const o=P(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=x(n,s._$AS(n,t.values),s,i)),t}class xt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??y).importNode(e,!0);b.currentNode=s;let o=b.nextNode(),r=0,a=0,l=i[0];for(;l!==void 0;){if(r===l.index){let d;l.type===2?d=new U(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new Ot(o,this,t)),this._$AV.push(d),l=i[++a]}r!==l?.index&&(o=b.nextNode(),r++)}return b.currentNode=y,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),P(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=M.createElement(at(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const o=new xt(s,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new M(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new U(this.O(C()),this.O(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=c}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=x(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==w,r&&(this._$AH=t);else{const a=t;let l,d;for(t=o[0],l=0;l<o.length-1;l++)d=x(this,a[i+l],e,l),d===w&&(d=this._$AH[l]),r||=!P(d)||d!==this._$AH[l],d===c?t=c:t!==c&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}r&&!s&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class St extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class Ct extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class Pt extends j{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??c)===w)return;const i=this._$AH,s=t===c&&i!==c||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==c&&(i===c||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const Mt=W.litHtmlPolyfillSupport;Mt?.(M,U),(W.litHtmlVersions??=[]).push("3.3.1");const Ut=(n,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const o=e?.renderBefore??null;i._$litPart$=s=new U(t.insertBefore(C(),o),o,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis;class m extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}}m._$litElement$=!0,m.finalized=!0,q.litElementHydrateSupport?.({LitElement:m});const Tt=q.litElementPolyfillSupport;Tt?.({LitElement:m}),(q.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=n=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(n,t)})):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:L},Nt=(n=Ht,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),o.set(e.name,n),i==="accessor"){const{name:r}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,l,n)},init(a){return a!==void 0&&this.C(r,void 0,n,a),a}}}if(i==="setter"){const{name:r}=e;return function(a){const l=this[r];t.call(this,a),this.requestUpdate(r,l,n)}}throw Error("Unsupported decorator location: "+i)};function F(n){return(t,e)=>typeof e=="object"?Nt(n,t,e):((i,s,o)=>{const r=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),r?Object.getOwnPropertyDescriptor(s,o):void 0})(n,t,e)}var Dt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,V=(n,t,e,i)=>{for(var s=i>1?void 0:i?jt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Dt(t,e,s),s};let T=class extends m{constructor(){super(...arguments),this.fields=[],this.columns=2}render(){return!this.fields||this.fields.length===0?A``:A`
      <div class="field-list-container">
        ${this.fields.map(n=>this.renderField(n))}
      </div>
    `}renderField(n){const t=this.getIconContent(n);return A`
      <div class="field-item">
        <div class="field-icon">${t}</div>
        <div class="field-content">
          <div class="field-label">${n.label}</div>
          <div class="field-title ${n.highlight?"highlighted":""}">
            ${n.title}
          </div>
        </div>
      </div>
    `}getIconContent(n){return n.icon?A`<span class="icon-emoji">${n.icon}</span>`:n.iconUrl?A`<img src="${n.iconUrl}" alt="${n.label}" class="icon-image" />`:A``}};T.styles=Z`
    :host {
      display: block;
      width: 100%;
    }

    .field-list-container {
      display: grid;
      grid-template-columns: repeat(var(--field-columns, 2), 1fr);
      gap: 24px;
    }

    .field-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .field-icon {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
     margin-top: 10px;
    }

    .icon-emoji {
      font-size: 16px;
      line-height: 1;
      color: #8a2be2;
    }

    .icon-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .field-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
      min-width: 0;
    }

    .field-label {
      font-size: 11px;
      font-weight: 500;
      color: #9ca3af;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      line-height: 1.4;
    }

    .field-title {
      font-size: 14px;
      font-weight: 400;
      color: #111827;
      word-break: break-word;
      line-height: 1.5;
    }

    .field-title.highlighted {
      color: #8a2be2;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .field-list-container {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }
  `,V([F({type:Array})],T.prototype,"fields",2),V([F({type:Number})],T.prototype,"columns",2),T=V([ht("field-list-widget")],T);var Rt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,ct=(n,t,e,i)=>{for(var s=i>1?void 0:i?kt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Rt(t,e,s),s};u.EmployeeDetailsWidget=class extends m{constructor(){super(...arguments),this.collapsed=!1,this.fields=[{label:"Manager",title:"Maria Thompson",iconUrl:"https://img.icons8.com/?size=100&id=11224&format=png&color=7950F2",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"📍"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"📞"},{label:"Job Title",title:"Forklift Operator",icon:"💼"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"📍"},{label:"Department",title:"Warehouse Operations",icon:"💼"},{label:"Email",title:"james.davis@nova.com",icon:"✉️",highlight:!0},{label:"Mobile phone",title:"+1 (214) 555-0198",icon:"📞"},{label:"Employment Type",title:"Full-time",icon:"💼"},{label:"Nickname",title:"JD",icon:"🏷️"}]}toggleCollapse(){this.collapsed=!this.collapsed}render(){return A`
      <div class="widget-container">

        <!-- Header -->
        <div class="widget-header" @click=${this.toggleCollapse}>
          <span class="header-left">
            <span class="header-icon">👤</span>
            <span class="header-title">Employee details</span>
          </span>

          <svg 
            class="chevron-icon ${this.collapsed?"collapsed":""}" 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
          >
            <path 
              d="M5 12.5L10 7.5L15 12.5" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <!-- Collapsible Content -->
        <div class="widget-content ${this.collapsed?"collapsed":""}">
          <field-list-widget .fields=${this.fields}></field-list-widget>
        </div>

      </div>
    `}},u.EmployeeDetailsWidget.styles=Z`
    :host {
      display: block;
      width: 100%;
      font-family: 'Inter', sans-serif;
    }

    /* Card */
    .widget-container {
      background: #ffffff;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1),
                  0 1px 2px rgba(0, 0, 0, 0.06);
      overflow: hidden;
      width: 100%;
    }

    /* Header */
    .widget-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid #e5e7eb;
      background: #f9fafb;
      transition: background-color 0.2s ease;
    }

    .widget-header:hover {
      background-color: #f3f4f6;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-icon {
      font-size: 18px;
    }

    .header-title {
      font-size: 16px;
      font-weight: 600;
      color: #111827;
    }

    /* Chevron */
    .chevron-icon {
      width: 20px;
      height: 20px;
      color: #6b7280;
      transition: transform 0.25s ease;
    }
    .chevron-icon.collapsed {
      transform: rotate(180deg);
    }

    /* Collapse animation */
    .widget-content {
      padding: 20px;
      overflow: hidden;
      max-height: 1000px;
      transition: max-height 0.35s ease, padding 0.35s ease;
    }

    .widget-content.collapsed {
      max-height: 0;
      padding-top: 0;
      padding-bottom: 0;
    }
  `,ct([F({type:Boolean})],u.EmployeeDetailsWidget.prototype,"collapsed",2),u.EmployeeDetailsWidget=ct([ht("employee-details-widget")],u.EmployeeDetailsWidget),typeof globalThis<"u"&&(globalThis.MyElement=globalThis.MyElement||{},globalThis.MyElement.LitElement=m),u.LitElement=m,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})}));
