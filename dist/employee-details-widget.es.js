/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D = globalThis, L = D.ShadowRoot && (D.ShadyCSS === void 0 || D.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, I = Symbol(), K = /* @__PURE__ */ new WeakMap();
let ot = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== I) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (L && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = K.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && K.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const dt = (o) => new ot(typeof o == "string" ? o : o + "", void 0, I), rt = (o, ...t) => {
  const e = o.length === 1 ? o[0] : t.reduce(((s, i, r) => s + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + o[r + 1]), o[0]);
  return new ot(e, o, I);
}, pt = (o, t) => {
  if (L) o.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
  else for (const e of t) {
    const s = document.createElement("style"), i = D.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, o.appendChild(s);
  }
}, Z = L ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return dt(e);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ut, defineProperty: ft, getOwnPropertyDescriptor: $t, getOwnPropertyNames: mt, getOwnPropertySymbols: gt, getPrototypeOf: _t } = Object, N = globalThis, G = N.trustedTypes, yt = G ? G.emptyScript : "", vt = N.reactiveElementPolyfillSupport, S = (o, t) => o, k = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? yt : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, B = (o, t) => !ut(o, t), Q = { attribute: !0, type: String, converter: k, reflect: !1, useDefault: !1, hasChanged: B };
Symbol.metadata ??= Symbol("metadata"), N.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let v = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Q) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && ft(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: r } = $t(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: i, set(n) {
      const a = i?.call(this);
      r?.call(this, n), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Q;
  }
  static _$Ei() {
    if (this.hasOwnProperty(S("elementProperties"))) return;
    const t = _t(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(S("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(S("properties"))) {
      const e = this.properties, s = [...mt(e), ...gt(e)];
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
      for (const i of s) e.unshift(Z(i));
    } else t !== void 0 && e.push(Z(t));
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
      const r = (s.converter?.toAttribute !== void 0 ? s.converter : k).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(i) : this.setAttribute(i, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const r = s.getPropertyOptions(i), n = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : k;
      this._$Em = i;
      const a = n.fromAttribute(e, r.type);
      this[i] = a ?? this._$Ej?.get(i) ?? a, this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      const i = this.constructor, r = this[t];
      if (s ??= i.getPropertyOptions(t), !((s.hasChanged ?? B)(r, e) || s.useDefault && s.reflect && r === this._$Ej?.get(t) && !this.hasAttribute(i._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: i, wrapped: r }, n) {
    s && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), r !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
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
        for (const [i, r] of this._$Ep) this[i] = r;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [i, r] of s) {
        const { wrapped: n } = r, a = this[i];
        n !== !0 || this._$AL.has(i) || a === void 0 || this.C(i, void 0, r, a);
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
v.elementStyles = [], v.shadowRootOptions = { mode: "open" }, v[S("elementProperties")] = /* @__PURE__ */ new Map(), v[S("finalized")] = /* @__PURE__ */ new Map(), vt?.({ ReactiveElement: v }), (N.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F = globalThis, H = F.trustedTypes, X = H ? H.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, nt = "$lit$", m = `lit$${Math.random().toFixed(9).slice(2)}$`, lt = "?" + m, At = `<${lt}>`, y = document, x = () => y.createComment(""), C = (o) => o === null || typeof o != "object" && typeof o != "function", W = Array.isArray, bt = (o) => W(o) || typeof o?.[Symbol.iterator] == "function", z = `[ 	
\f\r]`, E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Y = /-->/g, tt = />/g, g = RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, st = /"/g, at = /^(?:script|style|textarea|title)$/i, wt = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), $ = wt(1), b = Symbol.for("lit-noChange"), d = Symbol.for("lit-nothing"), it = /* @__PURE__ */ new WeakMap(), _ = y.createTreeWalker(y, 129);
function ht(o, t) {
  if (!W(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return X !== void 0 ? X.createHTML(t) : t;
}
const Et = (o, t) => {
  const e = o.length - 1, s = [];
  let i, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = E;
  for (let a = 0; a < e; a++) {
    const l = o[a];
    let c, p, h = -1, u = 0;
    for (; u < l.length && (n.lastIndex = u, p = n.exec(l), p !== null); ) u = n.lastIndex, n === E ? p[1] === "!--" ? n = Y : p[1] !== void 0 ? n = tt : p[2] !== void 0 ? (at.test(p[2]) && (i = RegExp("</" + p[2], "g")), n = g) : p[3] !== void 0 && (n = g) : n === g ? p[0] === ">" ? (n = i ?? E, h = -1) : p[1] === void 0 ? h = -2 : (h = n.lastIndex - p[2].length, c = p[1], n = p[3] === void 0 ? g : p[3] === '"' ? st : et) : n === st || n === et ? n = g : n === Y || n === tt ? n = E : (n = g, i = void 0);
    const f = n === g && o[a + 1].startsWith("/>") ? " " : "";
    r += n === E ? l + At : h >= 0 ? (s.push(c), l.slice(0, h) + nt + l.slice(h) + m + f) : l + m + (h === -2 ? a : f);
  }
  return [ht(o, r + (o[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class P {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let r = 0, n = 0;
    const a = t.length - 1, l = this.parts, [c, p] = Et(t, e);
    if (this.el = P.createElement(c, s), _.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (i = _.nextNode()) !== null && l.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const h of i.getAttributeNames()) if (h.endsWith(nt)) {
          const u = p[n++], f = i.getAttribute(h).split(m), T = /([.?@])?(.*)/.exec(u);
          l.push({ type: 1, index: r, name: T[2], strings: f, ctor: T[1] === "." ? xt : T[1] === "?" ? Ct : T[1] === "@" ? Pt : j }), i.removeAttribute(h);
        } else h.startsWith(m) && (l.push({ type: 6, index: r }), i.removeAttribute(h));
        if (at.test(i.tagName)) {
          const h = i.textContent.split(m), u = h.length - 1;
          if (u > 0) {
            i.textContent = H ? H.emptyScript : "";
            for (let f = 0; f < u; f++) i.append(h[f], x()), _.nextNode(), l.push({ type: 2, index: ++r });
            i.append(h[u], x());
          }
        }
      } else if (i.nodeType === 8) if (i.data === lt) l.push({ type: 2, index: r });
      else {
        let h = -1;
        for (; (h = i.data.indexOf(m, h + 1)) !== -1; ) l.push({ type: 7, index: r }), h += m.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const s = y.createElement("template");
    return s.innerHTML = t, s;
  }
}
function w(o, t, e = o, s) {
  if (t === b) return t;
  let i = s !== void 0 ? e._$Co?.[s] : e._$Cl;
  const r = C(t) ? void 0 : t._$litDirective$;
  return i?.constructor !== r && (i?._$AO?.(!1), r === void 0 ? i = void 0 : (i = new r(o), i._$AT(o, e, s)), s !== void 0 ? (e._$Co ??= [])[s] = i : e._$Cl = i), i !== void 0 && (t = w(o, i._$AS(o, t.values), i, s)), t;
}
class St {
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
    const { el: { content: e }, parts: s } = this._$AD, i = (t?.creationScope ?? y).importNode(e, !0);
    _.currentNode = i;
    let r = _.nextNode(), n = 0, a = 0, l = s[0];
    for (; l !== void 0; ) {
      if (n === l.index) {
        let c;
        l.type === 2 ? c = new M(r, r.nextSibling, this, t) : l.type === 1 ? c = new l.ctor(r, l.name, l.strings, this, t) : l.type === 6 && (c = new Ot(r, this, t)), this._$AV.push(c), l = s[++a];
      }
      n !== l?.index && (r = _.nextNode(), n++);
    }
    return _.currentNode = y, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class M {
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
    t = w(this, t, e), C(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== b && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : bt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== d && C(this._$AH) ? this._$AA.nextSibling.data = t : this.T(y.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = P.createElement(ht(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === i) this._$AH.p(e);
    else {
      const r = new St(i, this), n = r.u(this.options);
      r.p(e), this.T(n), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = it.get(t.strings);
    return e === void 0 && it.set(t.strings, e = new P(t)), e;
  }
  k(t) {
    W(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const r of t) i === e.length ? e.push(s = new M(this.O(x()), this.O(x()), this, this.options)) : s = e[i], s._$AI(r), i++;
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
class j {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, r) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = d;
  }
  _$AI(t, e = this, s, i) {
    const r = this.strings;
    let n = !1;
    if (r === void 0) t = w(this, t, e, 0), n = !C(t) || t !== this._$AH && t !== b, n && (this._$AH = t);
    else {
      const a = t;
      let l, c;
      for (t = r[0], l = 0; l < r.length - 1; l++) c = w(this, a[s + l], e, l), c === b && (c = this._$AH[l]), n ||= !C(c) || c !== this._$AH[l], c === d ? t = d : t !== d && (t += (c ?? "") + r[l + 1]), this._$AH[l] = c;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class xt extends j {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === d ? void 0 : t;
  }
}
class Ct extends j {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== d);
  }
}
class Pt extends j {
  constructor(t, e, s, i, r) {
    super(t, e, s, i, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = w(this, t, e, 0) ?? d) === b) return;
    const s = this._$AH, i = t === d && s !== d || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== d && (s === d || i);
    i && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ot {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    w(this, t);
  }
}
const Ut = F.litHtmlPolyfillSupport;
Ut?.(P, M), (F.litHtmlVersions ??= []).push("3.3.1");
const Mt = (o, t, e) => {
  const s = e?.renderBefore ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const r = e?.renderBefore ?? null;
    s._$litPart$ = i = new M(t.insertBefore(x(), r), r, void 0, e ?? {});
  }
  return i._$AI(o), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q = globalThis;
class A extends v {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Mt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return b;
  }
}
A._$litElement$ = !0, A.finalized = !0, q.litElementHydrateSupport?.({ LitElement: A });
const Tt = q.litElementPolyfillSupport;
Tt?.({ LitElement: A });
(q.litElementVersions ??= []).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = (o) => (t, e) => {
  e !== void 0 ? e.addInitializer((() => {
    customElements.define(o, t);
  })) : customElements.define(o, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Dt = { attribute: !0, type: String, converter: k, reflect: !1, hasChanged: B }, kt = (o = Dt, t, e) => {
  const { kind: s, metadata: i } = e;
  let r = globalThis.litPropertyMetadata.get(i);
  if (r === void 0 && globalThis.litPropertyMetadata.set(i, r = /* @__PURE__ */ new Map()), s === "setter" && ((o = Object.create(o)).wrapped = !0), r.set(e.name, o), s === "accessor") {
    const { name: n } = e;
    return { set(a) {
      const l = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(n, l, o);
    }, init(a) {
      return a !== void 0 && this.C(n, void 0, o, a), a;
    } };
  }
  if (s === "setter") {
    const { name: n } = e;
    return function(a) {
      const l = this[n];
      t.call(this, a), this.requestUpdate(n, l, o);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function R(o) {
  return (t, e) => typeof e == "object" ? kt(o, t, e) : ((s, i, r) => {
    const n = i.hasOwnProperty(r);
    return i.constructor.createProperty(r, s), n ? Object.getOwnPropertyDescriptor(i, r) : void 0;
  })(o, t, e);
}
var Ht = Object.defineProperty, Nt = Object.getOwnPropertyDescriptor, V = (o, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? Nt(t, e) : t, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (i = (s ? n(t, e, i) : n(i)) || i);
  return s && i && Ht(t, e, i), i;
};
let O = class extends A {
  constructor() {
    super(...arguments), this.fields = [], this.columns = 2;
  }
  render() {
    return !this.fields || this.fields.length === 0 ? $`` : $`
      <div class="field-list-container">
        ${this.fields.map((o) => this.renderField(o))}
      </div>
    `;
  }
  renderField(o) {
    const t = this.getIconContent(o);
    return $`
      <div class="field-item">
        <div class="field-icon">${t}</div>
        <div class="field-content">
          <div class="field-label">${o.label}</div>
          <div class="field-title ${o.highlight ? "highlighted" : ""}">
            ${o.title}
          </div>
        </div>
      </div>
    `;
  }
  getIconContent(o) {
    return o.icon ? $`<span class="icon-emoji">${o.icon}</span>` : o.iconUrl ? $`<img src="${o.iconUrl}" alt="${o.label}" class="icon-image" />` : $``;
  }
};
O.styles = rt`
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
      margin-top: 2px;
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
  `;
V([
  R({ type: Array })
], O.prototype, "fields", 2);
V([
  R({ type: Number })
], O.prototype, "columns", 2);
O = V([
  ct("field-list-widget")
], O);
var jt = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, J = (o, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? Rt(t, e) : t, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (i = (s ? n(t, e, i) : n(i)) || i);
  return s && i && jt(t, e, i), i;
};
let U = class extends A {
  constructor() {
    super(...arguments), this.collapsed = !1, this.employeeData = {
      manager: "Maria Thompson",
      location: "Dallas Distribution Center, Building C",
      workPhone: "+1 (214) 555-0182",
      jobTitle: "Forklift Operator",
      workSchedule: "Mon-Fri, 6:00 AM – 2:30 PM",
      department: "Warehouse Operations",
      email: "james.davis@nova.com",
      mobilePhone: "+1 (214) 555-0198",
      employmentType: "Full-time",
      nickname: "JD"
    }, this.fields = [];
  }
  connectedCallback() {
    super.connectedCallback(), this.updateFields();
  }
  updated(o) {
    super.updated(o), o.has("employeeData") && this.updateFields();
  }
  updateFields() {
    this.fields = [
      {
        label: "Manager",
        title: this.employeeData.manager || "",
        // icon: '💼',
        iconUrl: "https://img.icons8.com/?size=100&id=11224&format=png&color=7950F2",
        highlight: !0
      },
      {
        label: "Location",
        title: this.employeeData.location || "",
        icon: "📍"
      },
      {
        label: "Work phone",
        title: this.employeeData.workPhone || "",
        icon: "📞"
      },
      {
        label: "Job Title",
        title: this.employeeData.jobTitle || "",
        icon: "💼"
      },
      {
        label: "Work Schedule",
        title: this.employeeData.workSchedule || "",
        icon: "📍"
      },
      {
        label: "Department",
        title: this.employeeData.department || "",
        icon: "💼"
      },
      {
        label: "Email",
        title: this.employeeData.email || "",
        icon: "✉️",
        highlight: !0
      },
      {
        label: "Mobile phone",
        title: this.employeeData.mobilePhone || "",
        icon: "📞"
      },
      {
        label: "Employment Type",
        title: this.employeeData.employmentType || "",
        icon: "💼"
      },
      {
        label: "Nickname",
        title: this.employeeData.nickname || "",
        icon: "🏷️"
      }
    ];
  }
  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
  render() {
    return $`
      <div class="widget-container">
        <div class="widget-header" @click=${this.toggleCollapse}>
          <h2 class="header-title">Employee details</h2>
          <svg 
            class="chevron-icon ${this.collapsed ? "collapsed" : ""}" 
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
        ${this.collapsed ? "" : $`
          <div class="widget-content">
            <field-list-widget .fields=${this.fields}></field-list-widget>
          </div>
        `}
      </div>
    `;
  }
};
U.styles = rt`
    :host {
      display: block;
      width: 100%;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
      border: 1px solid #e5e7eb;
      overflow: hidden;
    }

    .widget-container {
      display: flex;
      flex-direction: column;
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
      transition: background-color 0.2s ease;
    }

    .widget-header:hover {
      background-color: #f9fafb;
    }

    .header-title {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #111827;
      letter-spacing: -0.01em;
    }

    .chevron-icon {
      width: 20px;
      height: 20px;
      color: #6b7280;
      transition: transform 0.2s ease;
      flex-shrink: 0;
    }

    .chevron-icon.collapsed {
      transform: rotate(180deg);
    }

    .widget-content {
      padding: 20px;
    }
  `;
J([
  R({ type: Boolean })
], U.prototype, "collapsed", 2);
J([
  R({ type: Object })
], U.prototype, "employeeData", 2);
U = J([
  ct("employee-details-widget")
], U);
export {
  U as EmployeeDetailsWidget
};
