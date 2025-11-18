(function(u,f){typeof exports=="object"&&typeof module<"u"?f(exports):typeof define=="function"&&define.amd?define(["exports"],f):(u=typeof globalThis<"u"?globalThis:u||self,f(u.FieldListWidget={}))})(this,(function(u){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=globalThis,L=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,k=Symbol(),q=new WeakMap;let V=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==k)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(L&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&q.set(e,t))}return t}toString(){return this.cssText}};const ht=n=>new V(typeof n=="string"?n:n+"",void 0,k),lt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce(((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1]),n[0]);return new V(e,n,k)},at=(n,t)=>{if(L)n.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),i=f.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},J=L?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ht(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ct,defineProperty:dt,getOwnPropertyDescriptor:pt,getOwnPropertyNames:ut,getOwnPropertySymbols:$t,getPrototypeOf:ft}=Object,M=globalThis,K=M.trustedTypes,_t=K?K.emptyScript:"",gt=M.reactiveElementPolyfillSupport,w=(n,t)=>n,H={toAttribute(n,t){switch(t){case Boolean:n=n?_t:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},z=(n,t)=>!ct(n,t),Z={attribute:!0,type:String,converter:H,reflect:!1,useDefault:!1,hasChanged:z};Symbol.metadata??=Symbol("metadata"),M.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&dt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=pt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){const l=i?.call(this);r?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Z}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=ft(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,s=[...ut(e),...$t(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(J(i))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return at(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const r=(s.converter?.toAttribute!==void 0?s.converter:H).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:H;this._$Em=i;const l=o.fromAttribute(e,r.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,r=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??z)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,r]of s){const{wrapped:o}=r,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,r,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[w("elementProperties")]=new Map,v[w("finalized")]=new Map,gt?.({ReactiveElement:v}),(M.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,N=D.trustedTypes,G=N?N.createPolicy("lit-html",{createHTML:n=>n}):void 0,Q="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,X="?"+_,mt=`<${X}>`,m=document,x=()=>m.createComment(""),C=n=>n===null||typeof n!="object"&&typeof n!="function",I=Array.isArray,yt=n=>I(n)||typeof n?.[Symbol.iterator]=="function",W=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,tt=/>/g,y=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,st=/"/g,it=/^(?:script|style|textarea|title)$/i,At=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),b=At(1),E=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),nt=new WeakMap,A=m.createTreeWalker(m,129);function rt(n,t){if(!I(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const vt=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":t===3?"<math>":"",o=P;for(let l=0;l<e;l++){const h=n[l];let d,p,a=-1,$=0;for(;$<h.length&&(o.lastIndex=$,p=o.exec(h),p!==null);)$=o.lastIndex,o===P?p[1]==="!--"?o=Y:p[1]!==void 0?o=tt:p[2]!==void 0?(it.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=y):p[3]!==void 0&&(o=y):o===y?p[0]===">"?(o=i??P,a=-1):p[1]===void 0?a=-2:(a=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?y:p[3]==='"'?st:et):o===st||o===et?o=y:o===Y||o===tt?o=P:(o=y,i=void 0);const g=o===y&&n[l+1].startsWith("/>")?" ":"";r+=o===P?h+mt:a>=0?(s.push(d),h.slice(0,a)+Q+h.slice(a)+_+g):h+_+(a===-2?l:g)}return[rt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class U{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const l=t.length-1,h=this.parts,[d,p]=vt(t,e);if(this.el=U.createElement(d,s),A.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=A.nextNode())!==null&&h.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(Q)){const $=p[o++],g=i.getAttribute(a).split(_),j=/([.?@])?(.*)/.exec($);h.push({type:1,index:r,name:j[2],strings:g,ctor:j[1]==="."?Et:j[1]==="?"?St:j[1]==="@"?wt:R}),i.removeAttribute(a)}else a.startsWith(_)&&(h.push({type:6,index:r}),i.removeAttribute(a));if(it.test(i.tagName)){const a=i.textContent.split(_),$=a.length-1;if($>0){i.textContent=N?N.emptyScript:"";for(let g=0;g<$;g++)i.append(a[g],x()),A.nextNode(),h.push({type:2,index:++r});i.append(a[$],x())}}}else if(i.nodeType===8)if(i.data===X)h.push({type:2,index:r});else{let a=-1;for(;(a=i.data.indexOf(_,a+1))!==-1;)h.push({type:7,index:r}),a+=_.length-1}r++}}static createElement(t,e){const s=m.createElement("template");return s.innerHTML=t,s}}function S(n,t,e=n,s){if(t===E)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const r=C(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=S(n,i._$AS(n,t.values),i,s)),t}class bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??m).importNode(e,!0);A.currentNode=i;let r=A.nextNode(),o=0,l=0,h=s[0];for(;h!==void 0;){if(o===h.index){let d;h.type===2?d=new O(r,r.nextSibling,this,t):h.type===1?d=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(d=new xt(r,this,t)),this._$AV.push(d),h=s[++l]}o!==h?.index&&(r=A.nextNode(),o++)}return A.currentNode=m,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),C(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):yt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(m.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=U.createElement(rt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const r=new bt(i,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=nt.get(t.strings);return e===void 0&&nt.set(t.strings,e=new U(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new O(this.O(x()),this.O(x()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=S(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const l=t;let h,d;for(t=r[0],h=0;h<r.length-1;h++)d=S(this,l[s+h],e,h),d===E&&(d=this._$AH[h]),o||=!C(d)||d!==this._$AH[h],d===c?t=c:t!==c&&(t+=(d??"")+r[h+1]),this._$AH[h]=d}o&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class St extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class wt extends R{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??c)===E)return;const s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class xt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const Ct=D.litHtmlPolyfillSupport;Ct?.(U,O),(D.litHtmlVersions??=[]).push("3.3.1");const Pt=(n,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const r=e?.renderBefore??null;s._$litPart$=i=new O(t.insertBefore(x(),r),r,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis;class T extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}}T._$litElement$=!0,T.finalized=!0,B.litElementHydrateSupport?.({LitElement:T});const Ut=B.litElementPolyfillSupport;Ut?.({LitElement:T}),(B.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=n=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(n,t)})):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:z},Mt=(n=Tt,t,e)=>{const{kind:s,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(e.name,n),s==="accessor"){const{name:o}=e;return{set(l){const h=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,h,n)},init(l){return l!==void 0&&this.C(o,void 0,n,l),l}}}if(s==="setter"){const{name:o}=e;return function(l){const h=this[o];t.call(this,l),this.requestUpdate(o,h,n)}}throw Error("Unsupported decorator location: "+s)};function ot(n){return(t,e)=>typeof e=="object"?Mt(n,t,e):((s,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,t,e)}var Ht=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,F=(n,t,e,s)=>{for(var i=s>1?void 0:s?Nt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Ht(t,e,i),i};u.FieldListWidget=class extends T{constructor(){super(...arguments),this.fields=[],this.columns=2}render(){return!this.fields||this.fields.length===0?b``:b`
      <div class="field-list-container">
        ${this.fields.map(t=>this.renderField(t))}
      </div>
    `}renderField(t){const e=this.getIconContent(t);return b`
      <div class="field-item">
        <div class="field-icon">${e}</div>
        <div class="field-content">
          <div class="field-label">${t.label}</div>
          <div class="field-title ${t.highlight?"highlighted":""}">
            ${t.title}
          </div>
        </div>
      </div>
    `}getIconContent(t){return t.icon?b`<span class="icon-emoji">${t.icon}</span>`:t.iconUrl?b`<img src="${t.iconUrl}" alt="${t.label}" class="icon-image" />`:b``}},u.FieldListWidget.styles=lt`
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
  `,F([ot({type:Array})],u.FieldListWidget.prototype,"fields",2),F([ot({type:Number})],u.FieldListWidget.prototype,"columns",2),u.FieldListWidget=F([Ot("field-list-widget")],u.FieldListWidget),Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})}));
