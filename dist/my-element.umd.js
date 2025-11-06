(function(u,f){typeof exports=="object"&&typeof module<"u"?f(exports):typeof define=="function"&&define.amd?define(["exports"],f):(u=typeof globalThis<"u"?globalThis:u||self,f(u.MyElement={}))})(this,(function(u){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=globalThis,k=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),q=new WeakMap;let W=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(k&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&q.set(e,t))}return t}toString(){return this.cssText}};const ot=r=>new W(typeof r=="string"?r:r+"",void 0,j),ht=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1]),r[0]);return new W(e,r,j)},at=(r,t)=>{if(k)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),i=f.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},J=k?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ot(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:lt,defineProperty:ct,getOwnPropertyDescriptor:dt,getOwnPropertyNames:pt,getOwnPropertySymbols:ut,getPrototypeOf:$t}=Object,U=globalThis,K=U.trustedTypes,ft=K?K.emptyScript:"",_t=U.reactiveElementPolyfillSupport,w=(r,t)=>r,T={toAttribute(r,t){switch(t){case Boolean:r=r?ft:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},L=(r,t)=>!lt(r,t),Z={attribute:!0,type:String,converter:T,reflect:!1,useDefault:!1,hasChanged:L};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ct(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=dt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){const a=i?.call(this);n?.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Z}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=$t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,s=[...pt(e),...ut(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(J(i))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return at(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:T).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:T;this._$Em=i;const a=o.fromAttribute(e,n.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,n=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??L)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s){const{wrapped:o}=n,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,n,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[w("elementProperties")]=new Map,b[w("finalized")]=new Map,_t?.({ReactiveElement:b}),(U.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,H=D.trustedTypes,F=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,G="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,Q="?"+_,mt=`<${Q}>`,g=document,C=()=>g.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",z=Array.isArray,gt=r=>z(r)||typeof r?.[Symbol.iterator]=="function",I=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,y=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,st=/^(?:script|style|textarea|title)$/i,yt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),At=yt(1),E=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),it=new WeakMap,A=g.createTreeWalker(g,129);function rt(r,t){if(!z(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return F!==void 0?F.createHTML(t):t}const vt=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=x;for(let a=0;a<e;a++){const h=r[a];let d,p,l=-1,$=0;for(;$<h.length&&(o.lastIndex=$,p=o.exec(h),p!==null);)$=o.lastIndex,o===x?p[1]==="!--"?o=X:p[1]!==void 0?o=Y:p[2]!==void 0?(st.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=y):p[3]!==void 0&&(o=y):o===y?p[0]===">"?(o=i??x,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?y:p[3]==='"'?et:tt):o===et||o===tt?o=y:o===X||o===Y?o=x:(o=y,i=void 0);const m=o===y&&r[a+1].startsWith("/>")?" ":"";n+=o===x?h+mt:l>=0?(s.push(d),h.slice(0,l)+G+h.slice(l)+_+m):h+_+(l===-2?a:m)}return[rt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class M{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const a=t.length-1,h=this.parts,[d,p]=vt(t,e);if(this.el=M.createElement(d,s),A.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=A.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(G)){const $=p[o++],m=i.getAttribute(l).split(_),R=/([.?@])?(.*)/.exec($);h.push({type:1,index:n,name:R[2],strings:m,ctor:R[1]==="."?Et:R[1]==="?"?St:R[1]==="@"?wt:N}),i.removeAttribute(l)}else l.startsWith(_)&&(h.push({type:6,index:n}),i.removeAttribute(l));if(st.test(i.tagName)){const l=i.textContent.split(_),$=l.length-1;if($>0){i.textContent=H?H.emptyScript:"";for(let m=0;m<$;m++)i.append(l[m],C()),A.nextNode(),h.push({type:2,index:++n});i.append(l[$],C())}}}else if(i.nodeType===8)if(i.data===Q)h.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(_,l+1))!==-1;)h.push({type:7,index:n}),l+=_.length-1}n++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function S(r,t,e=r,s){if(t===E)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const n=P(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=S(r,i._$AS(r,t.values),i,s)),t}class bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??g).importNode(e,!0);A.currentNode=i;let n=A.nextNode(),o=0,a=0,h=s[0];for(;h!==void 0;){if(o===h.index){let d;h.type===2?d=new O(n,n.nextSibling,this,t):h.type===1?d=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(d=new Ct(n,this,t)),this._$AV.push(d),h=s[++a]}o!==h?.index&&(n=A.nextNode(),o++)}return A.currentNode=g,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),P(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(g.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=M.createElement(rt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const n=new bt(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new M(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new O(this.O(C()),this.O(C()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=S(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const a=t;let h,d;for(t=n[0],h=0;h<n.length-1;h++)d=S(this,a[s+h],e,h),d===E&&(d=this._$AH[h]),o||=!P(d)||d!==this._$AH[h],d===c?t=c:t!==c&&(t+=(d??"")+n[h+1]),this._$AH[h]=d}o&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class St extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class wt extends N{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??c)===E)return;const s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ct{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const Pt=D.litHtmlPolyfillSupport;Pt?.(M,O),(D.litHtmlVersions??=[]).push("3.3.1");const xt=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const n=e?.renderBefore??null;s._$litPart$=i=new O(t.insertBefore(C(),n),n,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis;class v extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}}v._$litElement$=!0,v.finalized=!0,B.litElementHydrateSupport?.({LitElement:v});const Mt=B.litElementPolyfillSupport;Mt?.({LitElement:v}),(B.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=r=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:L},Tt=(r=Ut,t,e)=>{const{kind:s,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),s==="accessor"){const{name:o}=e;return{set(a){const h=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,h,r)},init(a){return a!==void 0&&this.C(o,void 0,r,a),a}}}if(s==="setter"){const{name:o}=e;return function(a){const h=this[o];t.call(this,a),this.requestUpdate(o,h,r)}}throw Error("Unsupported decorator location: "+s)};function nt(r){return(t,e)=>typeof e=="object"?Tt(r,t,e):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,t,e)}var Ht=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,V=(r,t,e,s)=>{for(var i=s>1?void 0:s?Nt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Ht(t,e,i),i};u.MyElement=class extends v{constructor(){super(...arguments),this.placeholder="",this.buttonLabel="Submit",this.textValue=""}render(){return At`
      <input
        type="text"
        placeholder=${this.placeholder}
        @input=${this.handleInput}
      />
      <button @click=${this.handleClick}>${this.buttonLabel}</button>
    `}handleClick(){var t=this;this.dispatchEvent(new CustomEvent("handle-button-click",{detail:{textValue:t.textValue}}))}handleInput(t){this.textValue=t.target.value}},u.MyElement.styles=ht`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `,V([nt()],u.MyElement.prototype,"placeholder",2),V([nt()],u.MyElement.prototype,"buttonLabel",2),u.MyElement=V([Ot("my-element")],u.MyElement),typeof globalThis<"u"&&(globalThis.MyElement=globalThis.MyElement||{},globalThis.MyElement.LitElement=v),u.LitElement=v,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})}));
