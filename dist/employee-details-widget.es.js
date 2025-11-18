/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k = globalThis, L = k.ShadowRoot && (k.ShadyCSS === void 0 || k.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, I = Symbol(), K = /* @__PURE__ */ new WeakMap();
let oe = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== I) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (L && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = K.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && K.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const de = (o) => new oe(typeof o == "string" ? o : o + "", void 0, I), ne = (o, ...e) => {
  const t = o.length === 1 ? o[0] : e.reduce(((i, s, n) => i + ((r) => {
    if (r._$cssResult$ === !0) return r.cssText;
    if (typeof r == "number") return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + o[n + 1]), o[0]);
  return new oe(t, o, I);
}, pe = (o, e) => {
  if (L) o.adoptedStyleSheets = e.map(((t) => t instanceof CSSStyleSheet ? t : t.styleSheet));
  else for (const t of e) {
    const i = document.createElement("style"), s = k.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = t.cssText, o.appendChild(i);
  }
}, Z = L ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return de(t);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ue, defineProperty: fe, getOwnPropertyDescriptor: $e, getOwnPropertyNames: me, getOwnPropertySymbols: ge, getPrototypeOf: _e } = Object, N = globalThis, G = N.trustedTypes, ye = G ? G.emptyScript : "", ve = N.reactiveElementPolyfillSupport, E = (o, e) => o, D = { toAttribute(o, e) {
  switch (e) {
    case Boolean:
      o = o ? ye : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, e) {
  let t = o;
  switch (e) {
    case Boolean:
      t = o !== null;
      break;
    case Number:
      t = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(o);
      } catch {
        t = null;
      }
  }
  return t;
} }, B = (o, e) => !ue(o, e), Q = { attribute: !0, type: String, converter: D, reflect: !1, useDefault: !1, hasChanged: B };
Symbol.metadata ??= Symbol("metadata"), N.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let v = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Q) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, t);
      s !== void 0 && fe(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: s, set: n } = $e(this.prototype, e) ?? { get() {
      return this[t];
    }, set(r) {
      this[t] = r;
    } };
    return { get: s, set(r) {
      const a = s?.call(this);
      n?.call(this, r), this.requestUpdate(e, a, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Q;
  }
  static _$Ei() {
    if (this.hasOwnProperty(E("elementProperties"))) return;
    const e = _e(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(E("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(E("properties"))) {
      const t = this.properties, i = [...me(t), ...ge(t)];
      for (const s of i) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, s] of t) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const s = this._$Eu(t, i);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const s of i) t.unshift(Z(s));
    } else e !== void 0 && t.push(Z(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise(((e) => this.enableUpdating = e)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((e) => e(this)));
  }
  addController(e) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return pe(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((e) => e.hostConnected?.()));
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((e) => e.hostDisconnected?.()));
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$ET(e, t) {
    const i = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, i);
    if (s !== void 0 && i.reflect === !0) {
      const n = (i.converter?.toAttribute !== void 0 ? i.converter : D).toAttribute(t, i.type);
      this._$Em = e, n == null ? this.removeAttribute(s) : this.setAttribute(s, n), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const n = i.getPropertyOptions(s), r = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : D;
      this._$Em = s;
      const a = r.fromAttribute(t, n.type);
      this[s] = a ?? this._$Ej?.get(s) ?? a, this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      const s = this.constructor, n = this[e];
      if (i ??= s.getPropertyOptions(e), !((i.hasChanged ?? B)(n, t) || i.useDefault && i.reflect && n === this._$Ej?.get(e) && !this.hasAttribute(s._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: s, wrapped: n }, r) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, r ?? t ?? this[e]), n !== !0 || r !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [s, n] of this._$Ep) this[s] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [s, n] of i) {
        const { wrapped: r } = n, a = this[s];
        r !== !0 || this._$AL.has(s) || a === void 0 || this.C(s, void 0, n, a);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach(((i) => i.hostUpdate?.())), this.update(t)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach(((t) => t.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq &&= this._$Eq.forEach(((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
v.elementStyles = [], v.shadowRootOptions = { mode: "open" }, v[E("elementProperties")] = /* @__PURE__ */ new Map(), v[E("finalized")] = /* @__PURE__ */ new Map(), ve?.({ ReactiveElement: v }), (N.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F = globalThis, H = F.trustedTypes, X = H ? H.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, re = "$lit$", $ = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + $, Ae = `<${le}>`, y = document, S = () => y.createComment(""), C = (o) => o === null || typeof o != "object" && typeof o != "function", W = Array.isArray, be = (o) => W(o) || typeof o?.[Symbol.iterator] == "function", z = `[ 	
\f\r]`, x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Y = /-->/g, ee = />/g, m = RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), te = /'/g, ie = /"/g, ae = /^(?:script|style|textarea|title)$/i, we = (o) => (e, ...t) => ({ _$litType$: o, strings: e, values: t }), g = we(1), b = Symbol.for("lit-noChange"), d = Symbol.for("lit-nothing"), se = /* @__PURE__ */ new WeakMap(), _ = y.createTreeWalker(y, 129);
function he(o, e) {
  if (!W(o) || !o.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return X !== void 0 ? X.createHTML(e) : e;
}
const xe = (o, e) => {
  const t = o.length - 1, i = [];
  let s, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", r = x;
  for (let a = 0; a < t; a++) {
    const l = o[a];
    let c, p, h = -1, u = 0;
    for (; u < l.length && (r.lastIndex = u, p = r.exec(l), p !== null); ) u = r.lastIndex, r === x ? p[1] === "!--" ? r = Y : p[1] !== void 0 ? r = ee : p[2] !== void 0 ? (ae.test(p[2]) && (s = RegExp("</" + p[2], "g")), r = m) : p[3] !== void 0 && (r = m) : r === m ? p[0] === ">" ? (r = s ?? x, h = -1) : p[1] === void 0 ? h = -2 : (h = r.lastIndex - p[2].length, c = p[1], r = p[3] === void 0 ? m : p[3] === '"' ? ie : te) : r === ie || r === te ? r = m : r === Y || r === ee ? r = x : (r = m, s = void 0);
    const f = r === m && o[a + 1].startsWith("/>") ? " " : "";
    n += r === x ? l + Ae : h >= 0 ? (i.push(c), l.slice(0, h) + re + l.slice(h) + $ + f) : l + $ + (h === -2 ? a : f);
  }
  return [he(o, n + (o[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class P {
  constructor({ strings: e, _$litType$: t }, i) {
    let s;
    this.parts = [];
    let n = 0, r = 0;
    const a = e.length - 1, l = this.parts, [c, p] = xe(e, t);
    if (this.el = P.createElement(c, i), _.currentNode = this.el.content, t === 2 || t === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (s = _.nextNode()) !== null && l.length < a; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const h of s.getAttributeNames()) if (h.endsWith(re)) {
          const u = p[r++], f = s.getAttribute(h).split($), T = /([.?@])?(.*)/.exec(u);
          l.push({ type: 1, index: n, name: T[2], strings: f, ctor: T[1] === "." ? Se : T[1] === "?" ? Ce : T[1] === "@" ? Pe : j }), s.removeAttribute(h);
        } else h.startsWith($) && (l.push({ type: 6, index: n }), s.removeAttribute(h));
        if (ae.test(s.tagName)) {
          const h = s.textContent.split($), u = h.length - 1;
          if (u > 0) {
            s.textContent = H ? H.emptyScript : "";
            for (let f = 0; f < u; f++) s.append(h[f], S()), _.nextNode(), l.push({ type: 2, index: ++n });
            s.append(h[u], S());
          }
        }
      } else if (s.nodeType === 8) if (s.data === le) l.push({ type: 2, index: n });
      else {
        let h = -1;
        for (; (h = s.data.indexOf($, h + 1)) !== -1; ) l.push({ type: 7, index: n }), h += $.length - 1;
      }
      n++;
    }
  }
  static createElement(e, t) {
    const i = y.createElement("template");
    return i.innerHTML = e, i;
  }
}
function w(o, e, t = o, i) {
  if (e === b) return e;
  let s = i !== void 0 ? t._$Co?.[i] : t._$Cl;
  const n = C(e) ? void 0 : e._$litDirective$;
  return s?.constructor !== n && (s?._$AO?.(!1), n === void 0 ? s = void 0 : (s = new n(o), s._$AT(o, t, i)), i !== void 0 ? (t._$Co ??= [])[i] = s : t._$Cl = s), s !== void 0 && (e = w(o, s._$AS(o, e.values), s, i)), e;
}
class Ee {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: i } = this._$AD, s = (e?.creationScope ?? y).importNode(t, !0);
    _.currentNode = s;
    let n = _.nextNode(), r = 0, a = 0, l = i[0];
    for (; l !== void 0; ) {
      if (r === l.index) {
        let c;
        l.type === 2 ? c = new M(n, n.nextSibling, this, e) : l.type === 1 ? c = new l.ctor(n, l.name, l.strings, this, e) : l.type === 6 && (c = new Oe(n, this, e)), this._$AV.push(c), l = i[++a];
      }
      r !== l?.index && (n = _.nextNode(), r++);
    }
    return _.currentNode = y, s;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class M {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, i, s) {
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = s, this._$Cv = s?.isConnected ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = w(this, e, t), C(e) ? e === d || e == null || e === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : e !== this._$AH && e !== b && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : be(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== d && C(this._$AH) ? this._$AA.nextSibling.data = e : this.T(y.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = P.createElement(he(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === s) this._$AH.p(t);
    else {
      const n = new Ee(s, this), r = n.u(this.options);
      n.p(t), this.T(r), this._$AH = n;
    }
  }
  _$AC(e) {
    let t = se.get(e.strings);
    return t === void 0 && se.set(e.strings, t = new P(e)), t;
  }
  k(e) {
    W(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, s = 0;
    for (const n of e) s === t.length ? t.push(i = new M(this.O(S()), this.O(S()), this, this.options)) : i = t[s], i._$AI(n), s++;
    s < t.length && (this._$AR(i && i._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class j {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, s, n) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = n, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = d;
  }
  _$AI(e, t = this, i, s) {
    const n = this.strings;
    let r = !1;
    if (n === void 0) e = w(this, e, t, 0), r = !C(e) || e !== this._$AH && e !== b, r && (this._$AH = e);
    else {
      const a = e;
      let l, c;
      for (e = n[0], l = 0; l < n.length - 1; l++) c = w(this, a[i + l], t, l), c === b && (c = this._$AH[l]), r ||= !C(c) || c !== this._$AH[l], c === d ? e = d : e !== d && (e += (c ?? "") + n[l + 1]), this._$AH[l] = c;
    }
    r && !s && this.j(e);
  }
  j(e) {
    e === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Se extends j {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === d ? void 0 : e;
  }
}
class Ce extends j {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== d);
  }
}
class Pe extends j {
  constructor(e, t, i, s, n) {
    super(e, t, i, s, n), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = w(this, e, t, 0) ?? d) === b) return;
    const i = this._$AH, s = e === d && i !== d || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, n = e !== d && (i === d || s);
    s && this.element.removeEventListener(this.name, this, i), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Oe {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    w(this, e);
  }
}
const Ue = F.litHtmlPolyfillSupport;
Ue?.(P, M), (F.litHtmlVersions ??= []).push("3.3.1");
const Me = (o, e, t) => {
  const i = t?.renderBefore ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const n = t?.renderBefore ?? null;
    i._$litPart$ = s = new M(e.insertBefore(S(), n), n, void 0, t ?? {});
  }
  return s._$AI(o), s;
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
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Me(t, this.renderRoot, this.renderOptions);
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
const Te = q.litElementPolyfillSupport;
Te?.({ LitElement: A });
(q.litElementVersions ??= []).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = (o) => (e, t) => {
  t !== void 0 ? t.addInitializer((() => {
    customElements.define(o, e);
  })) : customElements.define(o, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ke = { attribute: !0, type: String, converter: D, reflect: !1, hasChanged: B }, De = (o = ke, e, t) => {
  const { kind: i, metadata: s } = t;
  let n = globalThis.litPropertyMetadata.get(s);
  if (n === void 0 && globalThis.litPropertyMetadata.set(s, n = /* @__PURE__ */ new Map()), i === "setter" && ((o = Object.create(o)).wrapped = !0), n.set(t.name, o), i === "accessor") {
    const { name: r } = t;
    return { set(a) {
      const l = e.get.call(this);
      e.set.call(this, a), this.requestUpdate(r, l, o);
    }, init(a) {
      return a !== void 0 && this.C(r, void 0, o, a), a;
    } };
  }
  if (i === "setter") {
    const { name: r } = t;
    return function(a) {
      const l = this[r];
      e.call(this, a), this.requestUpdate(r, l, o);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function R(o) {
  return (e, t) => typeof t == "object" ? De(o, e, t) : ((i, s, n) => {
    const r = s.hasOwnProperty(n);
    return s.constructor.createProperty(n, i), r ? Object.getOwnPropertyDescriptor(s, n) : void 0;
  })(o, e, t);
}
var He = Object.defineProperty, Ne = Object.getOwnPropertyDescriptor, V = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Ne(e, t) : e, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (s = (i ? r(e, t, s) : r(s)) || s);
  return i && s && He(e, t, s), s;
};
let O = class extends A {
  constructor() {
    super(...arguments), this.fields = [], this.columns = 2;
  }
  render() {
    return !this.fields || this.fields.length === 0 ? g`` : g`
      <div class="field-list-container">
        ${this.fields.map((o) => this.renderField(o))}
      </div>
    `;
  }
  renderField(o) {
    const e = this.getIconContent(o);
    return g`
      <div class="field-item">
        <div class="field-icon">${e}</div>
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
    return o.icon ? g`<span class="icon-emoji">${o.icon}</span>` : o.iconUrl ? g`<img src="${o.iconUrl}" alt="${o.label}" class="icon-image" />` : g``;
  }
};
O.styles = ne`
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
  `;
V([
  R({ type: Array })
], O.prototype, "fields", 2);
V([
  R({ type: Number })
], O.prototype, "columns", 2);
O = V([
  ce("field-list-widget")
], O);
var je = Object.defineProperty, Re = Object.getOwnPropertyDescriptor, J = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Re(e, t) : e, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (s = (i ? r(e, t, s) : r(s)) || s);
  return i && s && je(e, t, s), s;
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
    return g`
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
        <div class="widget-content ${this.collapsed ? "collapsed" : ""}">
            <field-list-widget .fields=${this.fields}></field-list-widget>
        </div>


    `;
  }
};
U.styles = ne`
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
    
    .widget-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: stretch;  /* prevents header from moving */
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
    flex-shrink: 0;  /* keeps header fixed */
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

    `;
J([
  R({ type: Boolean })
], U.prototype, "collapsed", 2);
J([
  R({ type: Object })
], U.prototype, "employeeData", 2);
U = J([
  ce("employee-details-widget")
], U);
export {
  U as EmployeeDetailsWidget
};
