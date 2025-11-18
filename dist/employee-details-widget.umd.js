(function(u,g){typeof exports=="object"&&typeof module<"u"?g(exports):typeof define=="function"&&define.amd?define(["exports"],g):(u=typeof globalThis<"u"?globalThis:u||self,g(u.EmployeeDetails={}))})(this,(function(u){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=globalThis,z=g.ShadowRoot&&(g.ShadyCSS===void 0||g.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L=Symbol(),K=new WeakMap;let Z=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==L)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(z&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=K.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(t,e))}return e}toString(){return this.cssText}};const de=n=>new Z(typeof n=="string"?n:n+"",void 0,L),G=(n,...e)=>{const t=n.length===1?n[0]:e.reduce(((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1]),n[0]);return new Z(t,n,L)},pe=(n,e)=>{if(z)n.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const i=document.createElement("style"),s=g.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},Q=z?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return de(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ue,defineProperty:fe,getOwnPropertyDescriptor:$e,getOwnPropertyNames:ge,getOwnPropertySymbols:me,getPrototypeOf:_e}=Object,N=globalThis,X=N.trustedTypes,ye=X?X.emptyScript:"",ve=N.reactiveElementPolyfillSupport,C=(n,e)=>n,j={toAttribute(n,e){switch(e){case Boolean:n=n?ye:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},W=(n,e)=>!ue(n,e),Y={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:W};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&fe(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=$e(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){const a=s?.call(this);o?.call(this,r),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Y}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=_e(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,i=[...ge(t),...me(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Q(s))}else e!==void 0&&t.push(Q(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:j).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:j;this._$Em=s;const a=r.fromAttribute(t,o.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){const s=this.constructor,o=this[e];if(i??=s.getPropertyOptions(e),!((i.hasChanged??W)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i){const{wrapped:r}=o,a=this[s];r!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[C("elementProperties")]=new Map,E[C("finalized")]=new Map,ve?.({ReactiveElement:E}),(N.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,R=B.trustedTypes,ee=R?R.createPolicy("lit-html",{createHTML:n=>n}):void 0,te="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,ie="?"+m,Ae=`<${ie}>`,v=document,P=()=>v.createComment(""),O=n=>n===null||typeof n!="object"&&typeof n!="function",q=Array.isArray,be=n=>q(n)||typeof n?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,se=/-->/g,ne=/>/g,A=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oe=/'/g,re=/"/g,le=/^(?:script|style|textarea|title)$/i,Ee=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),f=Ee(1),w=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),ae=new WeakMap,b=v.createTreeWalker(v,129);function he(n,e){if(!q(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ee!==void 0?ee.createHTML(e):e}const we=(n,e)=>{const t=n.length-1,i=[];let s,o=e===2?"<svg>":e===3?"<math>":"",r=T;for(let a=0;a<t;a++){const l=n[a];let d,p,h=-1,$=0;for(;$<l.length&&(r.lastIndex=$,p=r.exec(l),p!==null);)$=r.lastIndex,r===T?p[1]==="!--"?r=se:p[1]!==void 0?r=ne:p[2]!==void 0?(le.test(p[2])&&(s=RegExp("</"+p[2],"g")),r=A):p[3]!==void 0&&(r=A):r===A?p[0]===">"?(r=s??T,h=-1):p[1]===void 0?h=-2:(h=r.lastIndex-p[2].length,d=p[1],r=p[3]===void 0?A:p[3]==='"'?re:oe):r===re||r===oe?r=A:r===se||r===ne?r=T:(r=A,s=void 0);const y=r===A&&n[a+1].startsWith("/>")?" ":"";o+=r===T?l+Ae:h>=0?(i.push(d),l.slice(0,h)+te+l.slice(h)+m+y):l+m+(h===-2?a:y)}return[he(n,o+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class M{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0;const a=e.length-1,l=this.parts,[d,p]=we(e,t);if(this.el=M.createElement(d,i),b.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=b.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(te)){const $=p[r++],y=s.getAttribute(h).split(m),I=/([.?@])?(.*)/.exec($);l.push({type:1,index:o,name:I[2],strings:y,ctor:I[1]==="."?xe:I[1]==="?"?Ce:I[1]==="@"?Pe:k}),s.removeAttribute(h)}else h.startsWith(m)&&(l.push({type:6,index:o}),s.removeAttribute(h));if(le.test(s.tagName)){const h=s.textContent.split(m),$=h.length-1;if($>0){s.textContent=R?R.emptyScript:"";for(let y=0;y<$;y++)s.append(h[y],P()),b.nextNode(),l.push({type:2,index:++o});s.append(h[$],P())}}}else if(s.nodeType===8)if(s.data===ie)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(m,h+1))!==-1;)l.push({type:7,index:o}),h+=m.length-1}o++}}static createElement(e,t){const i=v.createElement("template");return i.innerHTML=e,i}}function S(n,e,t=n,i){if(e===w)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl;const o=O(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=S(n,s._$AS(n,e.values),s,i)),e}class Se{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??v).importNode(t,!0);b.currentNode=s;let o=b.nextNode(),r=0,a=0,l=i[0];for(;l!==void 0;){if(r===l.index){let d;l.type===2?d=new U(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new Oe(o,this,e)),this._$AV.push(d),l=i[++a]}r!==l?.index&&(o=b.nextNode(),r++)}return b.currentNode=v,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class U{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),O(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):be(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==c&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=M.createElement(he(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const o=new Se(s,this),r=o.u(this.options);o.p(t),this.T(r),this._$AH=o}}_$AC(e){let t=ae.get(e.strings);return t===void 0&&ae.set(e.strings,t=new M(e)),t}k(e){q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new U(this.O(P()),this.O(P()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=c}_$AI(e,t=this,i,s){const o=this.strings;let r=!1;if(o===void 0)e=S(this,e,t,0),r=!O(e)||e!==this._$AH&&e!==w,r&&(this._$AH=e);else{const a=e;let l,d;for(e=o[0],l=0;l<o.length-1;l++)d=S(this,a[i+l],t,l),d===w&&(d=this._$AH[l]),r||=!O(d)||d!==this._$AH[l],d===c?e=c:e!==c&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}r&&!s&&this.j(e)}j(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class xe extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===c?void 0:e}}class Ce extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==c)}}class Pe extends k{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??c)===w)return;const i=this._$AH,s=e===c&&i!==c||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==c&&(i===c||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}}const Te=B.litHtmlPolyfillSupport;Te?.(M,U),(B.litHtmlVersions??=[]).push("3.3.1");const Me=(n,e,t)=>{const i=t?.renderBefore??e;let s=i._$litPart$;if(s===void 0){const o=t?.renderBefore??null;i._$litPart$=s=new U(e.insertBefore(P(),o),o,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis;class _ extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Me(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}}_._$litElement$=!0,_.finalized=!0,V.litElementHydrateSupport?.({LitElement:_});const Ue=V.litElementPolyfillSupport;Ue?.({LitElement:_}),(V.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=n=>(e,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(n,e)})):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:W},De=(n=He,e,t)=>{const{kind:i,metadata:s}=t;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),o.set(t.name,n),i==="accessor"){const{name:r}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(r,l,n)},init(a){return a!==void 0&&this.C(r,void 0,n,a),a}}}if(i==="setter"){const{name:r}=t;return function(a){const l=this[r];e.call(this,a),this.requestUpdate(r,l,n)}}throw Error("Unsupported decorator location: "+i)};function x(n){return(e,t)=>typeof t=="object"?De(n,e,t):((i,s,o)=>{const r=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),r?Object.getOwnPropertyDescriptor(s,o):void 0})(n,e,t)}var Ne=Object.defineProperty,je=Object.getOwnPropertyDescriptor,J=(n,e,t,i)=>{for(var s=i>1?void 0:i?je(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Ne(e,t,s),s};let H=class extends _{constructor(){super(...arguments),this.fields=[],this.columns=2}render(){return!this.fields||this.fields.length===0?f``:f`
      <div class="field-list-container">
        ${this.fields.map(n=>this.renderField(n))}
      </div>
    `}renderField(n){const e=this.getIconContent(n);return f`
      <div class="field-item">
        <div class="field-icon">${e}</div>
        <div class="field-content">
          <div class="field-label">${n.label}</div>
          <div class="field-title ${n.highlight?"highlighted":""}">
            ${n.title}
          </div>
        </div>
      </div>
    `}getIconContent(n){return n.icon?f`<span class="icon-emoji">${n.icon}</span>`:n.iconUrl?f`<img src="${n.iconUrl}" alt="${n.label}" class="icon-image" />`:f``}};H.styles=G`
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
  `,J([x({type:Array})],H.prototype,"fields",2),J([x({type:Number})],H.prototype,"columns",2),H=J([ce("field-list-widget")],H);var Re=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,D=(n,e,t,i)=>{for(var s=i>1?void 0:i?ke(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Re(e,t,s),s};u.EmployeeDetailsWidget=class extends _{constructor(){super(...arguments),this.collapsed=!1,this.headerTitle="Employee details",this.headerIcon="👤",this.fields=[{label:"Manager",title:"Maria Thompson",iconUrl:"https://img.icons8.com/?size=100&id=11224&format=png&color=7950F2",highlight:!0},{label:"Location",title:"Dallas Distribution Center, Building C",icon:"📍"},{label:"Work phone",title:"+1 (214) 555-0182",icon:"📞"},{label:"Job Title",title:"Forklift Operator",icon:"💼"},{label:"Work Schedule",title:"Mon-Fri, 6:00 AM – 2:30 PM",icon:"📍"},{label:"Department",title:"Warehouse Operations",icon:"💼"},{label:"Email",title:"james.davis@nova.com",icon:"✉️",highlight:!0},{label:"Mobile phone",title:"+1 (214) 555-0198",icon:"📞"},{label:"Employment Type",title:"Full-time",icon:"💼"},{label:"Nickname",title:"JD",icon:"🏷️"}]}toggleCollapse(){this.collapsed=!this.collapsed}renderHeaderIcon(){return this.headerIcon?.startsWith("http")?f`
        <img src="${this.headerIcon}" alt="header icon" class="header-img-icon" />
      `:f`<span class="header-icon">${this.headerIcon}</span>`}render(){return f`
      <div class="widget-container">

        <!-- Header -->
        <div class="widget-header" @click=${this.toggleCollapse}>
          <span class="header-left">
            ${this.renderHeaderIcon()}
            <span class="header-title">${this.headerTitle}</span>
          </span>

          <svg 
            class="chevron-icon ${this.collapsed?"collapsed":""}" 
            width="20" height="20" viewBox="0 0 20 20" fill="none"
          >
            <path 
              d="M5 12.5L10 7.5L15 12.5" 
              stroke="currentColor" stroke-width="2" 
              stroke-linecap="round" stroke-linejoin="round"
            />
          </svg>
        </div>

        <!-- Collapsible Content -->
        <div class="widget-content ${this.collapsed?"collapsed":""}">
          <field-list-widget .fields=${this.fields}></field-list-widget>
        </div>

      </div>
    `}},u.EmployeeDetailsWidget.styles=G`
    :host {
      display: block;
      width: 100%;
      font-family: 'Inter', sans-serif;
    }

    .widget-container {
      background: #ffffff;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1),
                  0 1px 2px rgba(0, 0, 0, 0.06);
      overflow: hidden;
      width: 100%;
    }

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

    .header-img-icon {
      width: 20px;
      height: 20px;
      object-fit: contain;
    }

    .header-title {
      font-size: 16px;
      font-weight: 600;
      color: #111827;
    }

    .chevron-icon {
      width: 20px;
      height: 20px;
      color: #6b7280;
      transition: transform 0.25s ease;
    }

    .chevron-icon.collapsed {
      transform: rotate(180deg);
    }

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
  `,D([x({type:Boolean})],u.EmployeeDetailsWidget.prototype,"collapsed",2),D([x({type:String})],u.EmployeeDetailsWidget.prototype,"headerTitle",2),D([x({type:String})],u.EmployeeDetailsWidget.prototype,"headerIcon",2),D([x({type:Array})],u.EmployeeDetailsWidget.prototype,"fields",2),u.EmployeeDetailsWidget=D([ce("employee-details-widget")],u.EmployeeDetailsWidget),typeof globalThis<"u"&&(globalThis.MyElement=globalThis.MyElement||{},globalThis.MyElement.LitElement=_),u.LitElement=_,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})}));
