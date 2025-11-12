/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = globalThis, St = ut.ShadowRoot && (ut.ShadyCSS === void 0 || ut.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Qt = Symbol(), It = /* @__PURE__ */ new WeakMap();
let be = class {
  constructor(t, r, n) {
    if (this._$cssResult$ = !0, n !== Qt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = r;
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (St && t === void 0) {
      const n = r !== void 0 && r.length === 1;
      n && (t = It.get(r)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && It.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Se = (l) => new be(typeof l == "string" ? l : l + "", void 0, Qt), we = (l, t) => {
  if (St) l.adoptedStyleSheets = t.map(((r) => r instanceof CSSStyleSheet ? r : r.styleSheet));
  else for (const r of t) {
    const n = document.createElement("style"), a = ut.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = r.cssText, l.appendChild(n);
  }
}, zt = St ? (l) => l : (l) => l instanceof CSSStyleSheet ? ((t) => {
  let r = "";
  for (const n of t.cssRules) r += n.cssText;
  return Se(r);
})(l) : l;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ce, defineProperty: Pe, getOwnPropertyDescriptor: xe, getOwnPropertyNames: Oe, getOwnPropertySymbols: Ue, getPrototypeOf: Te } = Object, ft = globalThis, Wt = ft.trustedTypes, Me = Wt ? Wt.emptyScript : "", He = ft.reactiveElementPolyfillSupport, st = (l, t) => l, bt = { toAttribute(l, t) {
  switch (t) {
    case Boolean:
      l = l ? Me : null;
      break;
    case Object:
    case Array:
      l = l == null ? l : JSON.stringify(l);
  }
  return l;
}, fromAttribute(l, t) {
  let r = l;
  switch (t) {
    case Boolean:
      r = l !== null;
      break;
    case Number:
      r = l === null ? null : Number(l);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(l);
      } catch {
        r = null;
      }
  }
  return r;
} }, Xt = (l, t) => !Ce(l, t), Bt = { attribute: !0, type: String, converter: bt, reflect: !1, useDefault: !1, hasChanged: Xt };
Symbol.metadata ??= Symbol("metadata"), ft.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let q = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, r = Bt) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(t, r), !r.noAccessor) {
      const n = Symbol(), a = this.getPropertyDescriptor(t, n, r);
      a !== void 0 && Pe(this.prototype, t, a);
    }
  }
  static getPropertyDescriptor(t, r, n) {
    const { get: a, set: c } = xe(this.prototype, t) ?? { get() {
      return this[r];
    }, set(u) {
      this[r] = u;
    } };
    return { get: a, set(u) {
      const g = a?.call(this);
      c?.call(this, u), this.requestUpdate(t, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Bt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(st("elementProperties"))) return;
    const t = Te(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(st("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(st("properties"))) {
      const r = this.properties, n = [...Oe(r), ...Ue(r)];
      for (const a of n) this.createProperty(a, r[a]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const r = litPropertyMetadata.get(t);
      if (r !== void 0) for (const [n, a] of r) this.elementProperties.set(n, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, n] of this.elementProperties) {
      const a = this._$Eu(r, n);
      a !== void 0 && this._$Eh.set(a, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const a of n) r.unshift(zt(a));
    } else t !== void 0 && r.push(zt(t));
    return r;
  }
  static _$Eu(t, r) {
    const n = r.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
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
    const t = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const n of r.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return we(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((t) => t.hostConnected?.()));
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((t) => t.hostDisconnected?.()));
  }
  attributeChangedCallback(t, r, n) {
    this._$AK(t, n);
  }
  _$ET(t, r) {
    const n = this.constructor.elementProperties.get(t), a = this.constructor._$Eu(t, n);
    if (a !== void 0 && n.reflect === !0) {
      const c = (n.converter?.toAttribute !== void 0 ? n.converter : bt).toAttribute(r, n.type);
      this._$Em = t, c == null ? this.removeAttribute(a) : this.setAttribute(a, c), this._$Em = null;
    }
  }
  _$AK(t, r) {
    const n = this.constructor, a = n._$Eh.get(t);
    if (a !== void 0 && this._$Em !== a) {
      const c = n.getPropertyOptions(a), u = typeof c.converter == "function" ? { fromAttribute: c.converter } : c.converter?.fromAttribute !== void 0 ? c.converter : bt;
      this._$Em = a;
      const g = u.fromAttribute(r, c.type);
      this[a] = g ?? this._$Ej?.get(a) ?? g, this._$Em = null;
    }
  }
  requestUpdate(t, r, n) {
    if (t !== void 0) {
      const a = this.constructor, c = this[t];
      if (n ??= a.getPropertyOptions(t), !((n.hasChanged ?? Xt)(c, r) || n.useDefault && n.reflect && c === this._$Ej?.get(t) && !this.hasAttribute(a._$Eu(t, n)))) return;
      this.C(t, r, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, r, { useDefault: n, reflect: a, wrapped: c }, u) {
    n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, u ?? r ?? this[t]), c !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (r = void 0), this._$AL.set(t, r)), a === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
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
        for (const [a, c] of this._$Ep) this[a] = c;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [a, c] of n) {
        const { wrapped: u } = c, g = this[a];
        u !== !0 || this._$AL.has(a) || g === void 0 || this.C(a, void 0, c, g);
      }
    }
    let t = !1;
    const r = this._$AL;
    try {
      t = this.shouldUpdate(r), t ? (this.willUpdate(r), this._$EO?.forEach(((n) => n.hostUpdate?.())), this.update(r)) : this._$EM();
    } catch (n) {
      throw t = !1, this._$EM(), n;
    }
    t && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach(((r) => r.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
    this._$Eq &&= this._$Eq.forEach(((r) => this._$ET(r, this[r]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
q.elementStyles = [], q.shadowRootOptions = { mode: "open" }, q[st("elementProperties")] = /* @__PURE__ */ new Map(), q[st("finalized")] = /* @__PURE__ */ new Map(), He?.({ ReactiveElement: q }), (ft.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wt = globalThis, $t = wt.trustedTypes, qt = $t ? $t.createPolicy("lit-html", { createHTML: (l) => l }) : void 0, Yt = "$lit$", M = `lit$${Math.random().toFixed(9).slice(2)}$`, te = "?" + M, Ne = `<${te}>`, D = document, it = () => D.createComment(""), rt = (l) => l === null || typeof l != "object" && typeof l != "function", Ct = Array.isArray, Re = (l) => Ct(l) || typeof l?.[Symbol.iterator] == "function", Et = `[ 	
\f\r]`, et = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Vt = /-->/g, Jt = />/g, k = RegExp(`>|${Et}(?:([^\\s"'>=/]+)(${Et}*=${Et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ft = /'/g, Kt = /"/g, ee = /^(?:script|style|textarea|title)$/i, Le = (l) => (t, ...r) => ({ _$litType$: l, strings: t, values: r }), ke = Le(1), J = Symbol.for("lit-noChange"), S = Symbol.for("lit-nothing"), Zt = /* @__PURE__ */ new WeakMap(), j = D.createTreeWalker(D, 129);
function se(l, t) {
  if (!Ct(l) || !l.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return qt !== void 0 ? qt.createHTML(t) : t;
}
const je = (l, t) => {
  const r = l.length - 1, n = [];
  let a, c = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = et;
  for (let g = 0; g < r; g++) {
    const f = l[g];
    let y, v, _ = -1, C = 0;
    for (; C < f.length && (u.lastIndex = C, v = u.exec(f), v !== null); ) C = u.lastIndex, u === et ? v[1] === "!--" ? u = Vt : v[1] !== void 0 ? u = Jt : v[2] !== void 0 ? (ee.test(v[2]) && (a = RegExp("</" + v[2], "g")), u = k) : v[3] !== void 0 && (u = k) : u === k ? v[0] === ">" ? (u = a ?? et, _ = -1) : v[1] === void 0 ? _ = -2 : (_ = u.lastIndex - v[2].length, y = v[1], u = v[3] === void 0 ? k : v[3] === '"' ? Kt : Ft) : u === Kt || u === Ft ? u = k : u === Vt || u === Jt ? u = et : (u = k, a = void 0);
    const P = u === k && l[g + 1].startsWith("/>") ? " " : "";
    c += u === et ? f + Ne : _ >= 0 ? (n.push(y), f.slice(0, _) + Yt + f.slice(_) + M + P) : f + M + (_ === -2 ? g : P);
  }
  return [se(l, c + (l[r] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class nt {
  constructor({ strings: t, _$litType$: r }, n) {
    let a;
    this.parts = [];
    let c = 0, u = 0;
    const g = t.length - 1, f = this.parts, [y, v] = je(t, r);
    if (this.el = nt.createElement(y, n), j.currentNode = this.el.content, r === 2 || r === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (a = j.nextNode()) !== null && f.length < g; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const _ of a.getAttributeNames()) if (_.endsWith(Yt)) {
          const C = v[u++], P = a.getAttribute(_).split(M), I = /([.?@])?(.*)/.exec(C);
          f.push({ type: 1, index: c, name: I[2], strings: P, ctor: I[1] === "." ? Ie : I[1] === "?" ? ze : I[1] === "@" ? We : _t }), a.removeAttribute(_);
        } else _.startsWith(M) && (f.push({ type: 6, index: c }), a.removeAttribute(_));
        if (ee.test(a.tagName)) {
          const _ = a.textContent.split(M), C = _.length - 1;
          if (C > 0) {
            a.textContent = $t ? $t.emptyScript : "";
            for (let P = 0; P < C; P++) a.append(_[P], it()), j.nextNode(), f.push({ type: 2, index: ++c });
            a.append(_[C], it());
          }
        }
      } else if (a.nodeType === 8) if (a.data === te) f.push({ type: 2, index: c });
      else {
        let _ = -1;
        for (; (_ = a.data.indexOf(M, _ + 1)) !== -1; ) f.push({ type: 7, index: c }), _ += M.length - 1;
      }
      c++;
    }
  }
  static createElement(t, r) {
    const n = D.createElement("template");
    return n.innerHTML = t, n;
  }
}
function F(l, t, r = l, n) {
  if (t === J) return t;
  let a = n !== void 0 ? r._$Co?.[n] : r._$Cl;
  const c = rt(t) ? void 0 : t._$litDirective$;
  return a?.constructor !== c && (a?._$AO?.(!1), c === void 0 ? a = void 0 : (a = new c(l), a._$AT(l, r, n)), n !== void 0 ? (r._$Co ??= [])[n] = a : r._$Cl = a), a !== void 0 && (t = F(l, a._$AS(l, t.values), a, n)), t;
}
class De {
  constructor(t, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: r }, parts: n } = this._$AD, a = (t?.creationScope ?? D).importNode(r, !0);
    j.currentNode = a;
    let c = j.nextNode(), u = 0, g = 0, f = n[0];
    for (; f !== void 0; ) {
      if (u === f.index) {
        let y;
        f.type === 2 ? y = new ot(c, c.nextSibling, this, t) : f.type === 1 ? y = new f.ctor(c, f.name, f.strings, this, t) : f.type === 6 && (y = new Be(c, this, t)), this._$AV.push(y), f = n[++g];
      }
      u !== f?.index && (c = j.nextNode(), u++);
    }
    return j.currentNode = D, a;
  }
  p(t) {
    let r = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, r), r += n.strings.length - 2) : n._$AI(t[r])), r++;
  }
}
class ot {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, r, n, a) {
    this.type = 2, this._$AH = S, this._$AN = void 0, this._$AA = t, this._$AB = r, this._$AM = n, this.options = a, this._$Cv = a?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && t?.nodeType === 11 && (t = r.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, r = this) {
    t = F(this, t, r), rt(t) ? t === S || t == null || t === "" ? (this._$AH !== S && this._$AR(), this._$AH = S) : t !== this._$AH && t !== J && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Re(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== S && rt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(D.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: r, _$litType$: n } = t, a = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = nt.createElement(se(n.h, n.h[0]), this.options)), n);
    if (this._$AH?._$AD === a) this._$AH.p(r);
    else {
      const c = new De(a, this), u = c.u(this.options);
      c.p(r), this.T(u), this._$AH = c;
    }
  }
  _$AC(t) {
    let r = Zt.get(t.strings);
    return r === void 0 && Zt.set(t.strings, r = new nt(t)), r;
  }
  k(t) {
    Ct(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let n, a = 0;
    for (const c of t) a === r.length ? r.push(n = new ot(this.O(it()), this.O(it()), this, this.options)) : n = r[a], n._$AI(c), a++;
    a < r.length && (this._$AR(n && n._$AB.nextSibling, a), r.length = a);
  }
  _$AR(t = this._$AA.nextSibling, r) {
    for (this._$AP?.(!1, !0, r); t !== this._$AB; ) {
      const n = t.nextSibling;
      t.remove(), t = n;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class _t {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, r, n, a, c) {
    this.type = 1, this._$AH = S, this._$AN = void 0, this.element = t, this.name = r, this._$AM = a, this.options = c, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = S;
  }
  _$AI(t, r = this, n, a) {
    const c = this.strings;
    let u = !1;
    if (c === void 0) t = F(this, t, r, 0), u = !rt(t) || t !== this._$AH && t !== J, u && (this._$AH = t);
    else {
      const g = t;
      let f, y;
      for (t = c[0], f = 0; f < c.length - 1; f++) y = F(this, g[n + f], r, f), y === J && (y = this._$AH[f]), u ||= !rt(y) || y !== this._$AH[f], y === S ? t = S : t !== S && (t += (y ?? "") + c[f + 1]), this._$AH[f] = y;
    }
    u && !a && this.j(t);
  }
  j(t) {
    t === S ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ie extends _t {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === S ? void 0 : t;
  }
}
class ze extends _t {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== S);
  }
}
class We extends _t {
  constructor(t, r, n, a, c) {
    super(t, r, n, a, c), this.type = 5;
  }
  _$AI(t, r = this) {
    if ((t = F(this, t, r, 0) ?? S) === J) return;
    const n = this._$AH, a = t === S && n !== S || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, c = t !== S && (n === S || a);
    a && this.element.removeEventListener(this.name, this, n), c && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Be {
  constructor(t, r, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    F(this, t);
  }
}
const qe = wt.litHtmlPolyfillSupport;
qe?.(nt, ot), (wt.litHtmlVersions ??= []).push("3.3.1");
const Ve = (l, t, r) => {
  const n = r?.renderBefore ?? t;
  let a = n._$litPart$;
  if (a === void 0) {
    const c = r?.renderBefore ?? null;
    n._$litPart$ = a = new ot(t.insertBefore(it(), c), c, void 0, r ?? {});
  }
  return a._$AI(l), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pt = globalThis;
class V extends q {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Ve(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return J;
  }
}
V._$litElement$ = !0, V.finalized = !0, Pt.litElementHydrateSupport?.({ LitElement: V });
const Je = Pt.litElementPolyfillSupport;
Je?.({ LitElement: V });
(Pt.litElementVersions ??= []).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Fe = (l) => (t, r) => {
  r !== void 0 ? r.addInitializer((() => {
    customElements.define(l, t);
  })) : customElements.define(l, t);
};
(function(l, t) {
  typeof exports == "object" && typeof module < "u" ? t(exports) : typeof define == "function" && define.amd ? define(["exports"], t) : (l = typeof globalThis < "u" ? globalThis : l || self, t(l.ListWidget = {}));
})(void 0, (function(l) {
  /**
  * @license
  * Copyright 2019 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
  const t = globalThis, r = t.ShadowRoot && (t.ShadyCSS === void 0 || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), a = /* @__PURE__ */ new WeakMap();
  let c = class {
    constructor(s, e, i) {
      if (this._$cssResult$ = !0, i !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = s, this.t = e;
    }
    get styleSheet() {
      let s = this.o;
      const e = this.t;
      if (r && s === void 0) {
        const i = e !== void 0 && e.length === 1;
        i && (s = a.get(e)), s === void 0 && ((this.o = s = new CSSStyleSheet()).replaceSync(this.cssText), i && a.set(e, s));
      }
      return s;
    }
    toString() {
      return this.cssText;
    }
  };
  const u = (s) => new c(typeof s == "string" ? s : s + "", void 0, n), g = (s, ...e) => {
    const i = s.length === 1 ? s[0] : e.reduce(((o, h, d) => o + ((p) => {
      if (p._$cssResult$ === !0) return p.cssText;
      if (typeof p == "number") return p;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + p + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(h) + s[d + 1]), s[0]);
    return new c(i, s, n);
  }, f = (s, e) => {
    if (r) s.adoptedStyleSheets = e.map(((i) => i instanceof CSSStyleSheet ? i : i.styleSheet));
    else for (const i of e) {
      const o = document.createElement("style"), h = t.litNonce;
      h !== void 0 && o.setAttribute("nonce", h), o.textContent = i.cssText, s.appendChild(o);
    }
  }, y = r ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((e) => {
    let i = "";
    for (const o of e.cssRules) i += o.cssText;
    return u(i);
  })(s) : s;
  /**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
  const { is: v, defineProperty: _, getOwnPropertyDescriptor: C, getOwnPropertyNames: P, getOwnPropertySymbols: I, getPrototypeOf: ie } = Object, at = globalThis, xt = at.trustedTypes, re = xt ? xt.emptyScript : "", ne = at.reactiveElementPolyfillSupport, K = (s, e) => s, ht = { toAttribute(s, e) {
    switch (e) {
      case Boolean:
        s = s ? re : null;
        break;
      case Object:
      case Array:
        s = s == null ? s : JSON.stringify(s);
    }
    return s;
  }, fromAttribute(s, e) {
    let i = s;
    switch (e) {
      case Boolean:
        i = s !== null;
        break;
      case Number:
        i = s === null ? null : Number(s);
        break;
      case Object:
      case Array:
        try {
          i = JSON.parse(s);
        } catch {
          i = null;
        }
    }
    return i;
  } }, mt = (s, e) => !v(s, e), Ot = { attribute: !0, type: String, converter: ht, reflect: !1, useDefault: !1, hasChanged: mt };
  Symbol.metadata ??= Symbol("metadata"), at.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  let z = class extends HTMLElement {
    static addInitializer(s) {
      this._$Ei(), (this.l ??= []).push(s);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(s, e = Ot) {
      if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(s) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(s, e), !e.noAccessor) {
        const i = Symbol(), o = this.getPropertyDescriptor(s, i, e);
        o !== void 0 && _(this.prototype, s, o);
      }
    }
    static getPropertyDescriptor(s, e, i) {
      const { get: o, set: h } = C(this.prototype, s) ?? { get() {
        return this[e];
      }, set(d) {
        this[e] = d;
      } };
      return { get: o, set(d) {
        const p = o?.call(this);
        h?.call(this, d), this.requestUpdate(s, p, i);
      }, configurable: !0, enumerable: !0 };
    }
    static getPropertyOptions(s) {
      return this.elementProperties.get(s) ?? Ot;
    }
    static _$Ei() {
      if (this.hasOwnProperty(K("elementProperties"))) return;
      const s = ie(this);
      s.finalize(), s.l !== void 0 && (this.l = [...s.l]), this.elementProperties = new Map(s.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(K("finalized"))) return;
      if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(K("properties"))) {
        const e = this.properties, i = [...P(e), ...I(e)];
        for (const o of i) this.createProperty(o, e[o]);
      }
      const s = this[Symbol.metadata];
      if (s !== null) {
        const e = litPropertyMetadata.get(s);
        if (e !== void 0) for (const [i, o] of e) this.elementProperties.set(i, o);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [e, i] of this.elementProperties) {
        const o = this._$Eu(e, i);
        o !== void 0 && this._$Eh.set(o, e);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
      const e = [];
      if (Array.isArray(s)) {
        const i = new Set(s.flat(1 / 0).reverse());
        for (const o of i) e.unshift(y(o));
      } else s !== void 0 && e.push(y(s));
      return e;
    }
    static _$Eu(s, e) {
      const i = e.attribute;
      return i === !1 ? void 0 : typeof i == "string" ? i : typeof s == "string" ? s.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise(((s) => this.enableUpdating = s)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((s) => s(this)));
    }
    addController(s) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(s), this.renderRoot !== void 0 && this.isConnected && s.hostConnected?.();
    }
    removeController(s) {
      this._$EO?.delete(s);
    }
    _$E_() {
      const s = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
      for (const i of e.keys()) this.hasOwnProperty(i) && (s.set(i, this[i]), delete this[i]);
      s.size > 0 && (this._$Ep = s);
    }
    createRenderRoot() {
      const s = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return f(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((s) => s.hostConnected?.()));
    }
    enableUpdating(s) {
    }
    disconnectedCallback() {
      this._$EO?.forEach(((s) => s.hostDisconnected?.()));
    }
    attributeChangedCallback(s, e, i) {
      this._$AK(s, i);
    }
    _$ET(s, e) {
      const i = this.constructor.elementProperties.get(s), o = this.constructor._$Eu(s, i);
      if (o !== void 0 && i.reflect === !0) {
        const h = (i.converter?.toAttribute !== void 0 ? i.converter : ht).toAttribute(e, i.type);
        this._$Em = s, h == null ? this.removeAttribute(o) : this.setAttribute(o, h), this._$Em = null;
      }
    }
    _$AK(s, e) {
      const i = this.constructor, o = i._$Eh.get(s);
      if (o !== void 0 && this._$Em !== o) {
        const h = i.getPropertyOptions(o), d = typeof h.converter == "function" ? { fromAttribute: h.converter } : h.converter?.fromAttribute !== void 0 ? h.converter : ht;
        this._$Em = o;
        const p = d.fromAttribute(e, h.type);
        this[o] = p ?? this._$Ej?.get(o) ?? p, this._$Em = null;
      }
    }
    requestUpdate(s, e, i) {
      if (s !== void 0) {
        const o = this.constructor, h = this[s];
        if (i ??= o.getPropertyOptions(s), !((i.hasChanged ?? mt)(h, e) || i.useDefault && i.reflect && h === this._$Ej?.get(s) && !this.hasAttribute(o._$Eu(s, i)))) return;
        this.C(s, e, i);
      }
      this.isUpdatePending === !1 && (this._$ES = this._$EP());
    }
    C(s, e, { useDefault: i, reflect: o, wrapped: h }, d) {
      i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(s) && (this._$Ej.set(s, d ?? e ?? this[s]), h !== !0 || d !== void 0) || (this._$AL.has(s) || (this.hasUpdated || i || (e = void 0), this._$AL.set(s, e)), o === !0 && this._$Em !== s && (this._$Eq ??= /* @__PURE__ */ new Set()).add(s));
    }
    async _$EP() {
      this.isUpdatePending = !0;
      try {
        await this._$ES;
      } catch (e) {
        Promise.reject(e);
      }
      const s = this.scheduleUpdate();
      return s != null && await s, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [o, h] of this._$Ep) this[o] = h;
          this._$Ep = void 0;
        }
        const i = this.constructor.elementProperties;
        if (i.size > 0) for (const [o, h] of i) {
          const { wrapped: d } = h, p = this[o];
          d !== !0 || this._$AL.has(o) || p === void 0 || this.C(o, void 0, h, p);
        }
      }
      let s = !1;
      const e = this._$AL;
      try {
        s = this.shouldUpdate(e), s ? (this.willUpdate(e), this._$EO?.forEach(((i) => i.hostUpdate?.())), this.update(e)) : this._$EM();
      } catch (i) {
        throw s = !1, this._$EM(), i;
      }
      s && this._$AE(e);
    }
    willUpdate(s) {
    }
    _$AE(s) {
      this._$EO?.forEach(((e) => e.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(s)), this.updated(s);
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
    shouldUpdate(s) {
      return !0;
    }
    update(s) {
      this._$Eq &&= this._$Eq.forEach(((e) => this._$ET(e, this[e]))), this._$EM();
    }
    updated(s) {
    }
    firstUpdated(s) {
    }
  };
  z.elementStyles = [], z.shadowRootOptions = { mode: "open" }, z[K("elementProperties")] = /* @__PURE__ */ new Map(), z[K("finalized")] = /* @__PURE__ */ new Map(), ne?.({ ReactiveElement: z }), (at.reactiveElementVersions ??= []).push("2.1.1");
  /**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
  const gt = globalThis, lt = gt.trustedTypes, Ut = lt ? lt.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, Tt = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, Mt = "?" + U, oe = `<${Mt}>`, H = document, Z = () => H.createComment(""), G = (s) => s === null || typeof s != "object" && typeof s != "function", yt = Array.isArray, ae = (s) => yt(s) || typeof s?.[Symbol.iterator] == "function", At = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ht = /-->/g, Nt = />/g, N = RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Rt = /'/g, Lt = /"/g, kt = /^(?:script|style|textarea|title)$/i, he = (s) => (e, ...i) => ({ _$litType$: s, strings: e, values: i }), x = he(1), W = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), jt = /* @__PURE__ */ new WeakMap(), R = H.createTreeWalker(H, 129);
  function Dt(s, e) {
    if (!yt(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return Ut !== void 0 ? Ut.createHTML(e) : e;
  }
  const le = (s, e) => {
    const i = s.length - 1, o = [];
    let h, d = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", p = Q;
    for (let A = 0; A < i; A++) {
      const $ = s[A];
      let b, w, m = -1, O = 0;
      for (; O < $.length && (p.lastIndex = O, w = p.exec($), w !== null); ) O = p.lastIndex, p === Q ? w[1] === "!--" ? p = Ht : w[1] !== void 0 ? p = Nt : w[2] !== void 0 ? (kt.test(w[2]) && (h = RegExp("</" + w[2], "g")), p = N) : w[3] !== void 0 && (p = N) : p === N ? w[0] === ">" ? (p = h ?? Q, m = -1) : w[1] === void 0 ? m = -2 : (m = p.lastIndex - w[2].length, b = w[1], p = w[3] === void 0 ? N : w[3] === '"' ? Lt : Rt) : p === Lt || p === Rt ? p = N : p === Ht || p === Nt ? p = Q : (p = N, h = void 0);
      const T = p === N && s[A + 1].startsWith("/>") ? " " : "";
      d += p === Q ? $ + oe : m >= 0 ? (o.push(b), $.slice(0, m) + Tt + $.slice(m) + U + T) : $ + U + (m === -2 ? A : T);
    }
    return [Dt(s, d + (s[i] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), o];
  };
  class X {
    constructor({ strings: e, _$litType$: i }, o) {
      let h;
      this.parts = [];
      let d = 0, p = 0;
      const A = e.length - 1, $ = this.parts, [b, w] = le(e, i);
      if (this.el = X.createElement(b, o), R.currentNode = this.el.content, i === 2 || i === 3) {
        const m = this.el.content.firstChild;
        m.replaceWith(...m.childNodes);
      }
      for (; (h = R.nextNode()) !== null && $.length < A; ) {
        if (h.nodeType === 1) {
          if (h.hasAttributes()) for (const m of h.getAttributeNames()) if (m.endsWith(Tt)) {
            const O = w[p++], T = h.getAttribute(m).split(U), pt = /([.?@])?(.*)/.exec(O);
            $.push({ type: 1, index: d, name: pt[2], strings: T, ctor: pt[1] === "." ? de : pt[1] === "?" ? pe : pt[1] === "@" ? ue : ct }), h.removeAttribute(m);
          } else m.startsWith(U) && ($.push({ type: 6, index: d }), h.removeAttribute(m));
          if (kt.test(h.tagName)) {
            const m = h.textContent.split(U), O = m.length - 1;
            if (O > 0) {
              h.textContent = lt ? lt.emptyScript : "";
              for (let T = 0; T < O; T++) h.append(m[T], Z()), R.nextNode(), $.push({ type: 2, index: ++d });
              h.append(m[O], Z());
            }
          }
        } else if (h.nodeType === 8) if (h.data === Mt) $.push({ type: 2, index: d });
        else {
          let m = -1;
          for (; (m = h.data.indexOf(U, m + 1)) !== -1; ) $.push({ type: 7, index: d }), m += U.length - 1;
        }
        d++;
      }
    }
    static createElement(e, i) {
      const o = H.createElement("template");
      return o.innerHTML = e, o;
    }
  }
  function B(s, e, i = s, o) {
    if (e === W) return e;
    let h = o !== void 0 ? i._$Co?.[o] : i._$Cl;
    const d = G(e) ? void 0 : e._$litDirective$;
    return h?.constructor !== d && (h?._$AO?.(!1), d === void 0 ? h = void 0 : (h = new d(s), h._$AT(s, i, o)), o !== void 0 ? (i._$Co ??= [])[o] = h : i._$Cl = h), h !== void 0 && (e = B(s, h._$AS(s, e.values), h, o)), e;
  }
  class ce {
    constructor(e, i) {
      this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = i;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(e) {
      const { el: { content: i }, parts: o } = this._$AD, h = (e?.creationScope ?? H).importNode(i, !0);
      R.currentNode = h;
      let d = R.nextNode(), p = 0, A = 0, $ = o[0];
      for (; $ !== void 0; ) {
        if (p === $.index) {
          let b;
          $.type === 2 ? b = new Y(d, d.nextSibling, this, e) : $.type === 1 ? b = new $.ctor(d, $.name, $.strings, this, e) : $.type === 6 && (b = new $e(d, this, e)), this._$AV.push(b), $ = o[++A];
        }
        p !== $?.index && (d = R.nextNode(), p++);
      }
      return R.currentNode = H, h;
    }
    p(e) {
      let i = 0;
      for (const o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(e, o, i), i += o.strings.length - 2) : o._$AI(e[i])), i++;
    }
  }
  class Y {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(e, i, o, h) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = e, this._$AB = i, this._$AM = o, this.options = h, this._$Cv = h?.isConnected ?? !0;
    }
    get parentNode() {
      let e = this._$AA.parentNode;
      const i = this._$AM;
      return i !== void 0 && e?.nodeType === 11 && (e = i.parentNode), e;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(e, i = this) {
      e = B(this, e, i), G(e) ? e === E || e == null || e === "" ? (this._$AH !== E && this._$AR(), this._$AH = E) : e !== this._$AH && e !== W && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : ae(e) ? this.k(e) : this._(e);
    }
    O(e) {
      return this._$AA.parentNode.insertBefore(e, this._$AB);
    }
    T(e) {
      this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
    }
    _(e) {
      this._$AH !== E && G(this._$AH) ? this._$AA.nextSibling.data = e : this.T(H.createTextNode(e)), this._$AH = e;
    }
    $(e) {
      const { values: i, _$litType$: o } = e, h = typeof o == "number" ? this._$AC(e) : (o.el === void 0 && (o.el = X.createElement(Dt(o.h, o.h[0]), this.options)), o);
      if (this._$AH?._$AD === h) this._$AH.p(i);
      else {
        const d = new ce(h, this), p = d.u(this.options);
        d.p(i), this.T(p), this._$AH = d;
      }
    }
    _$AC(e) {
      let i = jt.get(e.strings);
      return i === void 0 && jt.set(e.strings, i = new X(e)), i;
    }
    k(e) {
      yt(this._$AH) || (this._$AH = [], this._$AR());
      const i = this._$AH;
      let o, h = 0;
      for (const d of e) h === i.length ? i.push(o = new Y(this.O(Z()), this.O(Z()), this, this.options)) : o = i[h], o._$AI(d), h++;
      h < i.length && (this._$AR(o && o._$AB.nextSibling, h), i.length = h);
    }
    _$AR(e = this._$AA.nextSibling, i) {
      for (this._$AP?.(!1, !0, i); e !== this._$AB; ) {
        const o = e.nextSibling;
        e.remove(), e = o;
      }
    }
    setConnected(e) {
      this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
    }
  }
  class ct {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(e, i, o, h, d) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = e, this.name = i, this._$AM = h, this.options = d, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = E;
    }
    _$AI(e, i = this, o, h) {
      const d = this.strings;
      let p = !1;
      if (d === void 0) e = B(this, e, i, 0), p = !G(e) || e !== this._$AH && e !== W, p && (this._$AH = e);
      else {
        const A = e;
        let $, b;
        for (e = d[0], $ = 0; $ < d.length - 1; $++) b = B(this, A[o + $], i, $), b === W && (b = this._$AH[$]), p ||= !G(b) || b !== this._$AH[$], b === E ? e = E : e !== E && (e += (b ?? "") + d[$ + 1]), this._$AH[$] = b;
      }
      p && !h && this.j(e);
    }
    j(e) {
      e === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
    }
  }
  class de extends ct {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(e) {
      this.element[this.name] = e === E ? void 0 : e;
    }
  }
  class pe extends ct {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(e) {
      this.element.toggleAttribute(this.name, !!e && e !== E);
    }
  }
  class ue extends ct {
    constructor(e, i, o, h, d) {
      super(e, i, o, h, d), this.type = 5;
    }
    _$AI(e, i = this) {
      if ((e = B(this, e, i, 0) ?? E) === W) return;
      const o = this._$AH, h = e === E && o !== E || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive, d = e !== E && (o === E || h);
      h && this.element.removeEventListener(this.name, this, o), d && this.element.addEventListener(this.name, this, e), this._$AH = e;
    }
    handleEvent(e) {
      typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
    }
  }
  class $e {
    constructor(e, i, o) {
      this.element = e, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = o;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(e) {
      B(this, e);
    }
  }
  const fe = gt.litHtmlPolyfillSupport;
  fe?.(X, Y), (gt.litHtmlVersions ??= []).push("3.3.1");
  const _e = (s, e, i) => {
    const o = i?.renderBefore ?? e;
    let h = o._$litPart$;
    if (h === void 0) {
      const d = i?.renderBefore ?? null;
      o._$litPart$ = h = new Y(e.insertBefore(Z(), d), d, void 0, i ?? {});
    }
    return h._$AI(s), h;
  };
  /**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
  const vt = globalThis;
  class L extends z {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const e = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= e.firstChild, e;
    }
    update(e) {
      const i = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = _e(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
      return W;
    }
  }
  L._$litElement$ = !0, L.finalized = !0, vt.litElementHydrateSupport?.({ LitElement: L });
  const me = vt.litElementPolyfillSupport;
  me?.({ LitElement: L }), (vt.litElementVersions ??= []).push("4.2.1");
  /**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
  const ge = (s) => (e, i) => {
    i !== void 0 ? i.addInitializer((() => {
      customElements.define(s, e);
    })) : customElements.define(s, e);
  };
  /**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */
  const ye = { attribute: !0, type: String, converter: ht, reflect: !1, hasChanged: mt }, Ae = (s = ye, e, i) => {
    const { kind: o, metadata: h } = i;
    let d = globalThis.litPropertyMetadata.get(h);
    if (d === void 0 && globalThis.litPropertyMetadata.set(h, d = /* @__PURE__ */ new Map()), o === "setter" && ((s = Object.create(s)).wrapped = !0), d.set(i.name, s), o === "accessor") {
      const { name: p } = i;
      return { set(A) {
        const $ = e.get.call(this);
        e.set.call(this, A), this.requestUpdate(p, $, s);
      }, init(A) {
        return A !== void 0 && this.C(p, void 0, s, A), A;
      } };
    }
    if (o === "setter") {
      const { name: p } = i;
      return function(A) {
        const $ = this[p];
        e.call(this, A), this.requestUpdate(p, $, s);
      };
    }
    throw Error("Unsupported decorator location: " + o);
  };
  function dt(s) {
    return (e, i) => typeof i == "object" ? Ae(s, e, i) : ((o, h, d) => {
      const p = h.hasOwnProperty(d);
      return h.constructor.createProperty(d, o), p ? Object.getOwnPropertyDescriptor(h, d) : void 0;
    })(s, e, i);
  }
  var ve = Object.defineProperty, Ee = Object.getOwnPropertyDescriptor, tt = (s, e, i, o) => {
    for (var h = o > 1 ? void 0 : o ? Ee(e, i) : e, d = s.length - 1, p; d >= 0; d--) (p = s[d]) && (h = (o ? p(e, i, h) : p(h)) || h);
    return o && h && ve(e, i, h), h;
  };
  l.ListWidget = class extends L {
    constructor() {
      super(...arguments), this.headerIcon = "", this.headerTitle = "", this.sections = [], this.metadataLabel = "";
    }
    render() {
      return x`
      <div class="widget-container">
        ${this.renderHeader()}
        ${this.renderSections()}
      </div>
    `;
    }
    renderHeader() {
      return this.headerTitle ? x`
      <div class="widget-header">
        ${this.headerIcon ? x`<span class="header-icon">${this.headerIcon}</span>` : ""}
        <h2 class="header-title">${this.headerTitle}</h2>
      </div>
    ` : x``;
    }
    renderSections() {
      return !this.sections || this.sections.length === 0 ? x`` : x`
      <div class="widget-content">
        ${this.sections.map((s) => this.renderSection(s))}
      </div>
    `;
    }
    renderSection(s) {
      return x`
      <div class="section">
        ${s.title ? x`<h3 class="section-title">${s.title}</h3>` : ""}
        <div class="items-list">
          ${s.items.map((e) => this.renderItem(e))}
        </div>
      </div>
    `;
    }
    renderItem(s) {
      return x`
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
            ${this.metadataLabel ? x`<span class="metadata-label">${this.metadataLabel}</span>` : ""}
            ${s.metadata}
          </div>
        </div>
      </div>
    `;
    }
    handleImageError(s) {
      const e = s.target;
      e.style.display = "none";
    }
  }, l.ListWidget.styles = g`
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
  `, tt([dt()], l.ListWidget.prototype, "headerIcon", 2), tt([dt()], l.ListWidget.prototype, "headerTitle", 2), tt([dt({ type: Array })], l.ListWidget.prototype, "sections", 2), tt([dt()], l.ListWidget.prototype, "metadataLabel", 2), l.ListWidget = tt([ge("list-widget")], l.ListWidget), typeof globalThis < "u" && (globalThis.MyElement = globalThis.MyElement || {}, globalThis.MyElement.LitElement = L), l.LitElement = L, Object.defineProperty(l, Symbol.toStringTag, { value: "Module" });
}));
var Ke = Object.getOwnPropertyDescriptor, Ze = (l, t, r, n) => {
  for (var a = n > 1 ? void 0 : n ? Ke(t, r) : t, c = l.length - 1, u; c >= 0; c--)
    (u = l[c]) && (a = u(a) || a);
  return a;
};
let Gt = class extends V {
  constructor() {
    super(...arguments), this.sections = [
      {
        title: "This Week",
        items: [
          {
            avatar: "https://i.pravatar.cc/150?img=5",
            name: "Alice Johnson",
            metadata: "July 3rd"
          },
          {
            avatar: "https://i.pravatar.cc/150?img=6",
            name: "Charlie Brown",
            metadata: "July 5th"
          },
          {
            avatar: "https://i.pravatar.cc/150?img=7",
            name: "Bob Williams",
            metadata: "July 10th"
          },
          {
            avatar: "https://i.pravatar.cc/150?img=8",
            name: "Eve Davis",
            metadata: "July 12th"
          },
          {
            avatar: "https://i.pravatar.cc/150?img=9",
            name: "Frank White",
            metadata: "july 14th"
          }
        ]
      }
    ];
  }
  render() {
    return ke`
      <list-widget
        headerIcon="👥"
        headerTitle="Who's Out"
        .sections=${this.sections}
        metadataLabel="Out until "
      ></list-widget>
    `;
  }
};
Gt = Ze([
  Fe("whos-out-widget")
], Gt);
typeof globalThis < "u" && (globalThis.MyElement = globalThis.MyElement || {}, globalThis.MyElement.LitElement = V);
export {
  V as LitElement,
  Gt as WhosOutWidget
};
