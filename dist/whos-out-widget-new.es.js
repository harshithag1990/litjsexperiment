/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R = globalThis, B = R.ShadowRoot && (R.ShadyCSS === void 0 || R.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, W = Symbol(), F = /* @__PURE__ */ new WeakMap();
let rt = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== W) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (B && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = F.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && F.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const dt = (r) => new rt(typeof r == "string" ? r : r + "", void 0, W), ot = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce(((s, i, o) => s + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[o + 1]), r[0]);
  return new rt(e, r, W);
}, pt = (r, t) => {
  if (B) r.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
  else for (const e of t) {
    const s = document.createElement("style"), i = R.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, r.appendChild(s);
  }
}, K = B ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return dt(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ut, defineProperty: ft, getOwnPropertyDescriptor: mt, getOwnPropertyNames: $t, getOwnPropertySymbols: gt, getPrototypeOf: vt } = Object, I = globalThis, X = I.trustedTypes, yt = X ? X.emptyScript : "", _t = I.reactiveElementPolyfillSupport, P = (r, t) => r, k = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? yt : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, V = (r, t) => !ut(r, t), Y = { attribute: !0, type: String, converter: k, reflect: !1, useDefault: !1, hasChanged: V };
Symbol.metadata ??= Symbol("metadata"), I.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let x = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Y) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && ft(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: o } = mt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: i, set(n) {
      const h = i?.call(this);
      o?.call(this, n), this.requestUpdate(t, h, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Y;
  }
  static _$Ei() {
    if (this.hasOwnProperty(P("elementProperties"))) return;
    const t = vt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(P("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(P("properties"))) {
      const e = this.properties, s = [...$t(e), ...gt(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(K(i));
    } else t !== void 0 && e.push(K(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((t) => this.enableUpdating = t)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((t) => t(this)));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return pt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((t) => t.hostConnected?.()));
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((t) => t.hostDisconnected?.()));
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ET(t, e) {
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const o = (s.converter?.toAttribute !== void 0 ? s.converter : k).toAttribute(e, s.type);
      this._$Em = t, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const o = s.getPropertyOptions(i), n = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : k;
      this._$Em = i;
      const h = n.fromAttribute(e, o.type);
      this[i] = h ?? this._$Ej?.get(i) ?? h, this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      const i = this.constructor, o = this[t];
      if (s ??= i.getPropertyOptions(t), !((s.hasChanged ?? V)(o, e) || s.useDefault && s.reflect && o === this._$Ej?.get(t) && !this.hasAttribute(i._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: i, wrapped: o }, n) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), o !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [i, o] of this._$Ep) this[i] = o;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [i, o] of s) {
        const { wrapped: n } = o, h = this[i];
        n !== !0 || this._$AL.has(i) || h === void 0 || this.C(i, void 0, o, h);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach(((s) => s.hostUpdate?.())), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach(((e) => e.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach(((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
x.elementStyles = [], x.shadowRootOptions = { mode: "open" }, x[P("elementProperties")] = /* @__PURE__ */ new Map(), x[P("finalized")] = /* @__PURE__ */ new Map(), _t?.({ ReactiveElement: x }), (I.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, z = J.trustedTypes, Z = z ? z.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, nt = "$lit$", m = `lit$${Math.random().toFixed(9).slice(2)}$`, at = "?" + m, bt = `<${at}>`, _ = document, T = () => _.createComment(""), N = (r) => r === null || typeof r != "object" && typeof r != "function", q = Array.isArray, At = (r) => q(r) || typeof r?.[Symbol.iterator] == "function", j = `[ 	
\f\r]`, C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Q = /-->/g, tt = />/g, g = RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, st = /"/g, ht = /^(?:script|style|textarea|title)$/i, xt = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), v = xt(1), w = Symbol.for("lit-noChange"), d = Symbol.for("lit-nothing"), it = /* @__PURE__ */ new WeakMap(), y = _.createTreeWalker(_, 129);
function lt(r, t) {
  if (!q(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Z !== void 0 ? Z.createHTML(t) : t;
}
const wt = (r, t) => {
  const e = r.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = C;
  for (let h = 0; h < e; h++) {
    const a = r[h];
    let c, p, l = -1, u = 0;
    for (; u < a.length && (n.lastIndex = u, p = n.exec(a), p !== null); ) u = n.lastIndex, n === C ? p[1] === "!--" ? n = Q : p[1] !== void 0 ? n = tt : p[2] !== void 0 ? (ht.test(p[2]) && (i = RegExp("</" + p[2], "g")), n = g) : p[3] !== void 0 && (n = g) : n === g ? p[0] === ">" ? (n = i ?? C, l = -1) : p[1] === void 0 ? l = -2 : (l = n.lastIndex - p[2].length, c = p[1], n = p[3] === void 0 ? g : p[3] === '"' ? st : et) : n === st || n === et ? n = g : n === Q || n === tt ? n = C : (n = g, i = void 0);
    const f = n === g && r[h + 1].startsWith("/>") ? " " : "";
    o += n === C ? a + bt : l >= 0 ? (s.push(c), a.slice(0, l) + nt + a.slice(l) + m + f) : a + m + (l === -2 ? h : f);
  }
  return [lt(r, o + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class O {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, n = 0;
    const h = t.length - 1, a = this.parts, [c, p] = wt(t, e);
    if (this.el = O.createElement(c, s), y.currentNode = this.el.content, e === 2 || e === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (i = y.nextNode()) !== null && a.length < h; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const l of i.getAttributeNames()) if (l.endsWith(nt)) {
          const u = p[n++], f = i.getAttribute(l).split(m), H = /([.?@])?(.*)/.exec(u);
          a.push({ type: 1, index: o, name: H[2], strings: f, ctor: H[1] === "." ? St : H[1] === "?" ? Ct : H[1] === "@" ? Pt : D }), i.removeAttribute(l);
        } else l.startsWith(m) && (a.push({ type: 6, index: o }), i.removeAttribute(l));
        if (ht.test(i.tagName)) {
          const l = i.textContent.split(m), u = l.length - 1;
          if (u > 0) {
            i.textContent = z ? z.emptyScript : "";
            for (let f = 0; f < u; f++) i.append(l[f], T()), y.nextNode(), a.push({ type: 2, index: ++o });
            i.append(l[u], T());
          }
        }
      } else if (i.nodeType === 8) if (i.data === at) a.push({ type: 2, index: o });
      else {
        let l = -1;
        for (; (l = i.data.indexOf(m, l + 1)) !== -1; ) a.push({ type: 7, index: o }), l += m.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const s = _.createElement("template");
    return s.innerHTML = t, s;
  }
}
function E(r, t, e = r, s) {
  if (t === w) return t;
  let i = s !== void 0 ? e._$Co?.[s] : e._$Cl;
  const o = N(t) ? void 0 : t._$litDirective$;
  return i?.constructor !== o && (i?._$AO?.(!1), o === void 0 ? i = void 0 : (i = new o(r), i._$AT(r, e, s)), s !== void 0 ? (e._$Co ??= [])[s] = i : e._$Cl = i), i !== void 0 && (t = E(r, i._$AS(r, t.values), i, s)), t;
}
class Et {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = (t?.creationScope ?? _).importNode(e, !0);
    y.currentNode = i;
    let o = y.nextNode(), n = 0, h = 0, a = s[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let c;
        a.type === 2 ? c = new U(o, o.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(o, a.name, a.strings, this, t) : a.type === 6 && (c = new Tt(o, this, t)), this._$AV.push(c), a = s[++h];
      }
      n !== a?.index && (o = y.nextNode(), n++);
    }
    return y.currentNode = _, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class U {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = i?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = E(this, t, e), N(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== w && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : At(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== d && N(this._$AH) ? this._$AA.nextSibling.data = t : this.T(_.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = O.createElement(lt(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === i) this._$AH.p(e);
    else {
      const o = new Et(i, this), n = o.u(this.options);
      o.p(e), this.T(n), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = it.get(t.strings);
    return e === void 0 && it.set(t.strings, e = new O(t)), e;
  }
  k(t) {
    q(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t) i === e.length ? e.push(s = new U(this.O(T()), this.O(T()), this, this.options)) : s = e[i], s._$AI(o), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class D {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, o) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = d;
  }
  _$AI(t, e = this, s, i) {
    const o = this.strings;
    let n = !1;
    if (o === void 0) t = E(this, t, e, 0), n = !N(t) || t !== this._$AH && t !== w, n && (this._$AH = t);
    else {
      const h = t;
      let a, c;
      for (t = o[0], a = 0; a < o.length - 1; a++) c = E(this, h[s + a], e, a), c === w && (c = this._$AH[a]), n ||= !N(c) || c !== this._$AH[a], c === d ? t = d : t !== d && (t += (c ?? "") + o[a + 1]), this._$AH[a] = c;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class St extends D {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === d ? void 0 : t;
  }
}
class Ct extends D {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== d);
  }
}
class Pt extends D {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = E(this, t, e, 0) ?? d) === w) return;
    const s = this._$AH, i = t === d && s !== d || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== d && (s === d || i);
    i && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Tt {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    E(this, t);
  }
}
const Nt = J.litHtmlPolyfillSupport;
Nt?.(O, U), (J.litHtmlVersions ??= []).push("3.3.1");
const Ot = (r, t, e) => {
  const s = e?.renderBefore ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const o = e?.renderBefore ?? null;
    s._$litPart$ = i = new U(t.insertBefore(T(), o), o, void 0, e ?? {});
  }
  return i._$AI(r), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class $ extends x {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Ot(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return w;
  }
}
$._$litElement$ = !0, $.finalized = !0, G.litElementHydrateSupport?.({ LitElement: $ });
const Ut = G.litElementPolyfillSupport;
Ut?.({ LitElement: $ });
(G.litElementVersions ??= []).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer((() => {
    customElements.define(r, t);
  })) : customElements.define(r, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Mt = { attribute: !0, type: String, converter: k, reflect: !1, hasChanged: V }, Ht = (r = Mt, t, e) => {
  const { kind: s, metadata: i } = e;
  let o = globalThis.litPropertyMetadata.get(i);
  if (o === void 0 && globalThis.litPropertyMetadata.set(i, o = /* @__PURE__ */ new Map()), s === "setter" && ((r = Object.create(r)).wrapped = !0), o.set(e.name, r), s === "accessor") {
    const { name: n } = e;
    return { set(h) {
      const a = t.get.call(this);
      t.set.call(this, h), this.requestUpdate(n, a, r);
    }, init(h) {
      return h !== void 0 && this.C(n, void 0, r, h), h;
    } };
  }
  if (s === "setter") {
    const { name: n } = e;
    return function(h) {
      const a = this[n];
      t.call(this, h), this.requestUpdate(n, a, r);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function A(r) {
  return (t, e) => typeof e == "object" ? Ht(r, t, e) : ((s, i, o) => {
    const n = i.hasOwnProperty(o);
    return i.constructor.createProperty(o, s), n ? Object.getOwnPropertyDescriptor(i, o) : void 0;
  })(r, t, e);
}
var Rt = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, M = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? kt(t, e) : t, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (i = (s ? n(t, e, i) : n(i)) || i);
  return s && i && Rt(t, e, i), i;
};
let b = class extends $ {
  constructor() {
    super(...arguments), this.image = "", this.name = "", this.firstName = "", this.lastName = "";
  }
  getInitials() {
    if (this.firstName && this.lastName)
      return `${this.firstName.charAt(0)}${this.lastName.charAt(0)}`.toUpperCase();
    if (this.name) {
      const r = this.name.trim().split(" ");
      return r.length >= 2 ? `${r[0].charAt(0)}${r[1].charAt(0)}`.toUpperCase() : this.name.substring(0, 2).toUpperCase();
    }
    return "--";
  }
  render() {
    return this.image && this.image.trim() !== "" ? v`
        <img 
          class="avatar" 
          src="${this.image}" 
          alt="${this.name}" 
          title="${this.name}"
        >
      ` : v`
      <div 
        class="avatar-placeholder" 
        title="${this.name}"
      >
        ${this.getInitials()}
      </div>
    `;
  }
};
b.styles = ot`
    :host {
      display: inline-block;
      /* Default size from list-widget */
      --avatar-size: 44px; 
    }

    /* Shared styles for Image and Placeholder */
    .avatar, .avatar-placeholder {
      width: var(--avatar-size);
      height: var(--avatar-size);
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
      box-sizing: border-box;
      
      /* EXACT STYLE FROM LIST-WIDGET: Purple translucent border */
      /*border: 2px solid rgba(138, 43, 226, 0.15);*/ 
      
      cursor: pointer;
      transition: opacity 0.2s ease;
      display: block;
    }

    /* EXACT STYLE FROM LIST-WIDGET: Gradient Background */
    .avatar-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #8a2be2 0%, #9370db 100%);
      color: white;
      
      /* Font styling from list-widget */
      font-weight: 600;
      font-size: 0.875rem;
      letter-spacing: 0.02em;
      user-select: none;
    }

    /* Hover effect from list-widget (.item:hover opacity, applied to avatar here) */
    .avatar:hover, .avatar-placeholder:hover {
      opacity: 0.8;
    }

    /* Responsive adjustments from list-widget */
    @media (max-width: 768px) {
      :host {
        --avatar-size: 40px;
      }
      .avatar-placeholder {
        font-size: 0.8125rem;
      }
    }
  `;
M([
  A({ type: String })
], b.prototype, "image", 2);
M([
  A({ type: String })
], b.prototype, "name", 2);
M([
  A({ type: String })
], b.prototype, "firstName", 2);
M([
  A({ type: String })
], b.prototype, "lastName", 2);
b = M([
  ct("user-avatar")
], b);
typeof globalThis < "u" && (globalThis.MyElement = globalThis.MyElement || {}, globalThis.MyElement.LitElement = $);
var zt = Object.defineProperty, It = Object.getOwnPropertyDescriptor, L = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? It(t, e) : t, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (i = (s ? n(t, e, i) : n(i)) || i);
  return s && i && zt(t, e, i), i;
};
let S = class extends $ {
  constructor() {
    super(...arguments), this.headerTitle = "Who's Out", this.sections = [
      {
        title: "Today",
        items: [
          { avatar: "https://i.pravatar.cc/150?img=5", name: "Alice Johnson", firstName: "Alice", lastName: "Johnson", metadata: "July 3rd" },
          { avatar: "https://i.pravatar.cc/150?img=6", name: "Charlie Brown", firstName: "Charlie", lastName: "Brown", metadata: "July 5th" },
          // Long name example to test initials logic
          { avatar: "", name: "Bob Williams", firstName: "Bob", lastName: "Williams", metadata: "July 10th" },
          { avatar: "https://i.pravatar.cc/150?img=8", name: "Eve Davis", firstName: "Eve", lastName: "Davis", metadata: "July 12th" }
        ]
      },
      {
        title: "Tomorrow",
        items: [
          { avatar: "https://i.pravatar.cc/150?img=5", name: "Alice Johnson", firstName: "Alice", lastName: "Johnson", metadata: "July 3rd" }
        ]
      }
    ], this.headerIcon = "";
  }
  renderDefaultIcon() {
    return v`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    `;
  }
  render() {
    return v`
      <div class="widget-card">
        
        <div class="header">
          ${this.headerIcon ? v`<span class="header-icon-text">${this.headerIcon}</span>` : this.renderDefaultIcon()}
          <span>${this.headerTitle}</span>
        </div>

        ${this.sections.map((r) => v`
          <div class="section">
            <div class="section-title">
              ${r.title} <span class="count">(${r.items.length})</span>
            </div>
            <div class="avatar-list">
              
              ${r.items.map((t) => v`
                <div class="person-item">
                  
                  <user-avatar
                    .image="${t.avatar}"
                    .name="${t.name}"
                    .firstName="${t.firstName}"
                    .lastName="${t.lastName}"
                  ></user-avatar>

                  <span class="person-name" title="${t.name}">
                    ${t.name} 
                  </span>
                  
                </div>
              `)}

            </div>
          </div>
        `)}

      </div>
    `;
  }
};
S.styles = ot`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      
      /* THEME VARIABLES - WHITE & PURPLE THEME */
      --bg-card: #ffffff;          /* Pure White Background */
      --text-primary: #1f2937;     /* Dark Grey/Black for readability */
      --text-secondary: #7c3aed;   /* Vivid Purple for Titles */
      --text-muted: #6b7280;       /* Soft Grey for counts */
      --border-color: #e5e7eb;     /* Light Grey Border */
      --header-icon-bg: #8b5cf6;   /* Purple Background for Icon Box */
      --header-icon-fg: #ffffff;   /* White Icon */
    }

    .widget-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 16px; 
      padding: 20px;
      /* Clean, soft shadow for white theme */
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      color: var(--text-primary);
    }

    .header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
      color: var(--text-secondary);
      font-weight: 800; /* Slightly bolder for emphasis on white */
      font-size: 18px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 16px;
    }

    /* Styling the default icon to look like the purple box */
    .header svg {
      width: 24px;
      height: 24px;
      fill: var(--header-icon-fg);
      background: var(--header-icon-bg);
      padding: 8px;
      border-radius: 12px;
      /* Subtle shadow on the icon box to make it pop */
      box-shadow: 0 2px 5px rgba(139, 92, 246, 0.4);
    }

    /* If a custom text icon is passed */
    .header-icon-text {
      font-size: 20px;
      line-height: 1;
      background: var(--header-icon-bg);
      color: var(--header-icon-fg);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      box-shadow: 0 2px 5px rgba(139, 92, 246, 0.4);
    }

    .section {
      margin-bottom: 24px;
    }

    .section-title {
      font-size: 12px;
      font-weight: 700;
      color: var(--text-secondary);
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .count {
      color: var(--text-muted);
      font-weight: 500;
      font-size: 11px;
    }

    .avatar-list {
      display: flex;
      flex-wrap: wrap;
      gap: 16px; 
      align-items: flex-start; 
    }

    /* Container for Avatar + Name */
    .person-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80px; 
      text-align: center;
    }

    /* Name Styling */
    .person-name {
      font-size: 12px;
      color: var(--text-primary); /* Dark Grey */
      margin-top: 8px;
      width: 100%;
      font-weight: 600; /* Slightly bolder for dark text on white */
      
      /* Allow wrapping */
      white-space: normal; 
      overflow-wrap: break-word; 
      word-wrap: break-word;
      line-height: 1.3;
      
      /* Limit to 2 lines */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `;
L([
  A({ type: String })
], S.prototype, "headerTitle", 2);
L([
  A({ type: Array })
], S.prototype, "sections", 2);
L([
  A({ type: String })
], S.prototype, "headerIcon", 2);
S = L([
  ct("whos-out-widget-new")
], S);
typeof globalThis < "u" && (globalThis.MyElement = globalThis.MyElement || {}, globalThis.MyElement.LitElement = $);
export {
  $ as LitElement,
  S as WhosOutWidgetNew
};
