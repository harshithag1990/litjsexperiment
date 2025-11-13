(function(u,$){typeof exports=="object"&&typeof module<"u"?$(exports):typeof define=="function"&&define.amd?define(["exports"],$):(u=typeof globalThis<"u"?globalThis:u||self,$(u.ListWidget={}))})(this,(function(u){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=globalThis,I=$.ShadowRoot&&($.ShadyCSS===void 0||$.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),Z=new WeakMap;let F=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(I&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Z.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Z.set(e,t))}return t}toString(){return this.cssText}};const at=r=>new F(typeof r=="string"?r:r+"",void 0,z),ht=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1]),r[0]);return new F(e,r,z)},lt=(r,t)=>{if(I)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=$.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},J=I?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return at(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:dt,defineProperty:ct,getOwnPropertyDescriptor:pt,getOwnPropertyNames:ut,getOwnPropertySymbols:ft,getPrototypeOf:gt}=Object,k=globalThis,K=k.trustedTypes,$t=K?K.emptyScript:"",mt=k.reactiveElementPolyfillSupport,S=(r,t)=>r,H={toAttribute(r,t){switch(t){case Boolean:r=r?$t:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},D=(r,t)=>!dt(r,t),G={attribute:!0,type:String,converter:H,reflect:!1,useDefault:!1,hasChanged:D};Symbol.metadata??=Symbol("metadata"),k.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ct(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=pt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){const h=s?.call(this);n?.call(this,o),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??G}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=gt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,i=[...ut(e),...ft(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:H).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:H;this._$Em=s;const h=o.fromAttribute(e,n.type);this[s]=h??this._$Ej?.get(s)??h,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??D)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:o}=n,h=this[s];o!==!0||this._$AL.has(s)||h===void 0||this.C(s,void 0,n,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[S("elementProperties")]=new Map,w[S("finalized")]=new Map,mt?.({ReactiveElement:w}),(k.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,N=W.trustedTypes,Q=N?N.createPolicy("lit-html",{createHTML:r=>r}):void 0,X="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,Y="?"+m,_t=`<${Y}>`,b=document,C=()=>b.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",B=Array.isArray,bt=r=>B(r)||typeof r?.[Symbol.iterator]=="function",q=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,y=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,st=/"/g,rt=/^(?:script|style|textarea|title)$/i,yt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=yt(1),x=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),nt=new WeakMap,v=b.createTreeWalker(b,129);function ot(r,t){if(!B(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(t):t}const vt=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",o=U;for(let h=0;h<e;h++){const a=r[h];let c,p,l=-1,g=0;for(;g<a.length&&(o.lastIndex=g,p=o.exec(a),p!==null);)g=o.lastIndex,o===U?p[1]==="!--"?o=tt:p[1]!==void 0?o=et:p[2]!==void 0?(rt.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=y):p[3]!==void 0&&(o=y):o===y?p[0]===">"?(o=s??U,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?y:p[3]==='"'?st:it):o===st||o===it?o=y:o===tt||o===et?o=U:(o=y,s=void 0);const _=o===y&&r[h+1].startsWith("/>")?" ":"";n+=o===U?a+_t:l>=0?(i.push(c),a.slice(0,l)+X+a.slice(l)+m+_):a+m+(l===-2?h:_)}return[ot(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class O{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const h=t.length-1,a=this.parts,[c,p]=vt(t,e);if(this.el=O.createElement(c,i),v.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=v.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(X)){const g=p[o++],_=s.getAttribute(l).split(m),j=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:j[2],strings:_,ctor:j[1]==="."?wt:j[1]==="?"?xt:j[1]==="@"?Et:L}),s.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:n}),s.removeAttribute(l));if(rt.test(s.tagName)){const l=s.textContent.split(m),g=l.length-1;if(g>0){s.textContent=N?N.emptyScript:"";for(let _=0;_<g;_++)s.append(l[_],C()),v.nextNode(),a.push({type:2,index:++n});s.append(l[g],C())}}}else if(s.nodeType===8)if(s.data===Y)a.push({type:2,index:n});else{let l=-1;for(;(l=s.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:n}),l+=m.length-1}n++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function E(r,t,e=r,i){if(t===x)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const n=P(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=E(r,s._$AS(r,t.values),s,i)),t}class At{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??b).importNode(e,!0);v.currentNode=s;let n=v.nextNode(),o=0,h=0,a=i[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new T(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new St(n,this,t)),this._$AV.push(c),a=i[++h]}o!==a?.index&&(n=v.nextNode(),o++)}return v.currentNode=b,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class T{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=O.createElement(ot(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const n=new At(s,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=nt.get(t.strings);return e===void 0&&nt.set(t.strings,e=new O(t)),e}k(t){B(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new T(this.O(C()),this.O(C()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=E(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{const h=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=E(this,h[i+a],e,a),c===x&&(c=this._$AH[a]),o||=!P(c)||c!==this._$AH[a],c===d?t=d:t!==d&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class xt extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Et extends L{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===x)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class St{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const Ct=W.litHtmlPolyfillSupport;Ct?.(O,T),(W.litHtmlVersions??=[]).push("3.3.1");const Pt=(r,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const n=e?.renderBefore??null;i._$litPart$=s=new T(t.insertBefore(C(),n),n,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis;class A extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}}A._$litElement$=!0,A.finalized=!0,V.litElementHydrateSupport?.({LitElement:A});const Ut=V.litElementPolyfillSupport;Ut?.({LitElement:A}),(V.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=r=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:D},Mt=(r=Tt,t,e)=>{const{kind:i,metadata:s}=e;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),i==="accessor"){const{name:o}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(o,a,r)},init(h){return h!==void 0&&this.C(o,void 0,r,h),h}}}if(i==="setter"){const{name:o}=e;return function(h){const a=this[o];t.call(this,h),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+i)};function R(r){return(t,e)=>typeof e=="object"?Mt(r,t,e):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,t,e)}var kt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,M=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ht(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&kt(t,e,s),s};u.ListWidget=class extends A{constructor(){super(...arguments),this.headerIcon="",this.headerTitle="",this.sections=[],this.metadataLabel=""}render(){return f`
      <div class="widget-container">
        ${this.renderHeader()}
        ${this.renderSections()}
      </div>
    `}renderHeader(){return this.headerTitle?f`
      <div class="widget-header">
        ${this.headerIcon?f`<span class="header-icon">${this.headerIcon}</span>`:""}
        <h2 class="header-title">${this.headerTitle}</h2>
      </div>
    `:f``}renderSections(){return!this.sections||this.sections.length===0?f``:f`
      <div class="widget-content">
        ${this.sections.map(t=>this.renderSection(t))}
      </div>
    `}renderSection(t){return f`
      <div class="section">
        ${t.title?f`<h3 class="section-title">${t.title}</h3>`:""}
        <div class="items-list">
          ${t.items.map(e=>this.renderItem(e))}
        </div>
      </div>
    `}getInitials(t){const e=t.firstName&&t.firstName.trim()?t.firstName.trim().charAt(0).toUpperCase():"",i=t.lastName&&t.lastName.trim()?t.lastName.trim().charAt(0).toUpperCase():"";return`${e}${i}`||null}renderItem(t){const e=t.avatar&&t.avatar.trim()!=="",i=this.getInitials(t);return f`
      <div class="item">
        ${e?f`<img 
              src=${t.avatar} 
              alt=${t.name}
              class="avatar"
              @error=${this.handleImageError}
            />`:i?f`<div class="avatar avatar-initials">${i}</div>`:f`<div class="avatar avatar-default">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                  <path d="M12 14C7.58172 14 4 16.6863 4 20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20C20 16.6863 16.4183 14 12 14Z" fill="currentColor"/>
                </svg>
              </div>`}
        <div class="item-content">
          <div class="item-name">${t.name}</div>
          <div class="item-metadata">
            ${this.metadataLabel?f`<span class="metadata-label">${this.metadataLabel}</span>`:""}
            ${t.metadata}
          </div>
        </div>
      </div>
    `}handleImageError(t){const e=t.target;e.style.display="none"}},u.ListWidget.styles=ht`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      max-height: 100%;
      min-width: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background: linear-gradient(135deg, #e8f4f8 0%, #f0e8f5 100%);
      color: #2d2d2d;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .widget-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      min-height: 0;
      max-height: 100%;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 16px;
      backdrop-filter: blur(10px);
      box-sizing: border-box;
    }

    .widget-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(138, 43, 226, 0.1);
      flex-shrink: 0;
    }

    .header-icon {
      font-size: 1.75rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #8a2be2 0%, #9370db 100%);
      border-radius: 12px;
      padding: 0.5rem;
      box-shadow: 0 2px 8px rgba(138, 43, 226, 0.2);
      flex-shrink: 0;
    }

    .header-title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
      color: #6a1b9a;
      letter-spacing: -0.02em;
      flex-shrink: 0;
    }

    .widget-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      flex: 0 1 auto;
      min-height: 0;
      overflow-y: auto;
      overflow-x: hidden;
      padding-right: 0.5rem;
    }

    /* Custom scrollbar styling */
    .widget-content::-webkit-scrollbar {
      width: 6px;
    }

    .widget-content::-webkit-scrollbar-track {
      background: rgba(138, 43, 226, 0.05);
      border-radius: 10px;
    }

    .widget-content::-webkit-scrollbar-thumb {
      background: rgba(138, 43, 226, 0.3);
      border-radius: 10px;
    }

    .widget-content::-webkit-scrollbar-thumb:hover {
      background: rgba(138, 43, 226, 0.5);
    }

    /* Firefox scrollbar styling */
    .widget-content {
      scrollbar-width: thin;
      scrollbar-color: rgba(138, 43, 226, 0.3) rgba(138, 43, 226, 0.05);
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex-shrink: 0;
    }

    .section-title {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 600;
      color: #8a2be2;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0.5rem 0;
      flex-shrink: 0;
    }

    .items-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.625rem 0;
      transition: opacity 0.2s ease;
      flex-shrink: 0;
    }

    .item:hover {
      opacity: 0.8;
    }

    .avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
      border: 2px solid rgba(138, 43, 226, 0.15);
    }

    .avatar-initials {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #8a2be2 0%, #9370db 100%);
      color: white;
      font-weight: 600;
      font-size: 0.875rem;
      letter-spacing: 0.02em;
      object-fit: none;
    }

    .avatar-default {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #8a2be2 0%, #9370db 100%);
      color: white;
      object-fit: none;
    }

    .avatar-default svg {
      width: 24px;
      height: 24px;
    }

    .item-content {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
      min-width: 0;
    }

    .item-name {
      font-size: 0.95rem;
      font-weight: 600;
      color: #2d2d2d;
      letter-spacing: -0.01em;
    }

    .item-metadata {
      font-size: 0.8125rem;
      color: #6b7280;
      font-weight: 400;
    }

    .metadata-label {
      font-weight: 500;
      color: #8a2be2;
    }

    @media (prefers-color-scheme: dark) {
      :host {
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        color: #e0e0e0;
      }

      .widget-container {
        background: rgba(30, 30, 46, 0.95);
      }

      .widget-header {
        border-bottom-color: rgba(138, 43, 226, 0.3);
      }

      .header-title {
        color: #b794f6;
      }

      .section-title {
        color: #a78bfa;
      }

      .item:hover {
        opacity: 0.8;
      }

      .item-name {
        color: #e0e0e0;
      }

      .item-metadata {
        color: #9ca3af;
      }

      .metadata-label {
        color: #a78bfa;
      }
    }

    @media (max-width: 768px) {
      .widget-container {
        padding: 1.25rem;
      }

      .header-title {
        font-size: 1.25rem;
      }

      .item {
        padding: 0.5rem 0;
      }

      .avatar {
        width: 40px;
        height: 40px;
      }

      .avatar-initials {
        font-size: 0.8125rem;
      }

      .avatar-default svg {
        width: 20px;
        height: 20px;
      }
    }
  `,M([R()],u.ListWidget.prototype,"headerIcon",2),M([R()],u.ListWidget.prototype,"headerTitle",2),M([R({type:Array})],u.ListWidget.prototype,"sections",2),M([R()],u.ListWidget.prototype,"metadataLabel",2),u.ListWidget=M([Ot("list-widget")],u.ListWidget),typeof globalThis<"u"&&(globalThis.MyElement=globalThis.MyElement||{},globalThis.MyElement.LitElement=A),u.LitElement=A,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})}));
