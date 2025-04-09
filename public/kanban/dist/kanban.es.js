/**
@license

DHTMLX Kanban v.1.6.3

This software is covered by DHTMLX Evaluation License and purposed only for evaluation.
Contact sales@dhtmlx.com to get Commercial or Enterprise license.
Usage without proper license is prohibited.

(c) XB Software.

**/
function K() {
}
const Kr = (l) => l;
function Ce(l, e) {
  for (const t in e)
    l[t] = e[t];
  return (
    /** @type {T & S} */
    l
  );
}
function Br(l) {
  return l();
}
function el() {
  return /* @__PURE__ */ Object.create(null);
}
function De(l) {
  l.forEach(Br);
}
function nt(l) {
  return typeof l == "function";
}
function Z(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
let Wt;
function xt(l, e) {
  return l === e ? !0 : (Wt || (Wt = document.createElement("a")), Wt.href = e, l === Wt.href);
}
function Zo(l) {
  return Object.keys(l).length === 0;
}
function Ge(l, ...e) {
  if (l == null) {
    for (const n of e)
      n(void 0);
    return K;
  }
  const t = l.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function he(l, e, t) {
  l.$$.on_destroy.push(Ge(e, t));
}
function be(l, e, t, n) {
  if (l) {
    const i = Wr(l, e, t, n);
    return l[0](i);
  }
}
function Wr(l, e, t, n) {
  return l[1] && n ? Ce(t.ctx.slice(), l[1](n(e))) : t.ctx;
}
function pe(l, e, t, n) {
  if (l[2] && n) {
    const i = l[2](n(t));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], r = Math.max(e.dirty.length, i.length);
      for (let a = 0; a < r; a += 1)
        s[a] = e.dirty[a] | i[a];
      return s;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function we(l, e, t, n, i, s) {
  if (i) {
    const r = Wr(e, t, n, s);
    l.p(r, i);
  }
}
function ke(l) {
  if (l.ctx.length > 32) {
    const e = [], t = l.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function We(l) {
  const e = {};
  for (const t in l)
    t[0] !== "$" && (e[t] = l[t]);
  return e;
}
function tl(l, e) {
  const t = {};
  e = new Set(e);
  for (const n in l)
    !e.has(n) && n[0] !== "$" && (t[n] = l[n]);
  return t;
}
function cn(l) {
  const e = {};
  for (const t in l)
    e[t] = !0;
  return e;
}
function Ve(l) {
  return l ?? "";
}
function zt(l, e, t) {
  return l.set(t), e;
}
function Oe(l) {
  return l && nt(l.destroy) ? l.destroy : K;
}
const Yr = typeof window < "u";
let $o = Yr ? () => window.performance.now() : () => Date.now(), Pn = Yr ? (l) => requestAnimationFrame(l) : K;
const kt = /* @__PURE__ */ new Set();
function Gr(l) {
  kt.forEach((e) => {
    e.c(l) || (kt.delete(e), e.f());
  }), kt.size !== 0 && Pn(Gr);
}
function xo(l) {
  let e;
  return kt.size === 0 && Pn(Gr), {
    promise: new Promise((t) => {
      kt.add(e = { c: l, f: t });
    }),
    abort() {
      kt.delete(e);
    }
  };
}
const ea = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function M(l, e) {
  l.appendChild(e);
}
function Jr(l) {
  if (!l)
    return document;
  const e = l.getRootNode ? l.getRootNode() : l.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : l.ownerDocument;
}
function ta(l) {
  const e = I("style");
  return e.textContent = "/* empty */", na(Jr(l), e), e.sheet;
}
function na(l, e) {
  return M(
    /** @type {Document} */
    l.head || l,
    e
  ), e.sheet;
}
function v(l, e, t) {
  l.insertBefore(e, t || null);
}
function k(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function ot(l, e) {
  for (let t = 0; t < l.length; t += 1)
    l[t] && l[t].d(e);
}
function I(l) {
  return document.createElement(l);
}
function la(l) {
  return document.createElementNS("http://www.w3.org/2000/svg", l);
}
function $(l) {
  return document.createTextNode(l);
}
function H() {
  return $(" ");
}
function se() {
  return $("");
}
function te(l, e, t, n) {
  return l.addEventListener(e, t, n), () => l.removeEventListener(e, t, n);
}
function It(l) {
  return function(e) {
    return e.stopPropagation(), l.call(this, e);
  };
}
function g(l, e, t) {
  t == null ? l.removeAttribute(e) : l.getAttribute(e) !== t && l.setAttribute(e, t);
}
function Nn(l) {
  return l === "" ? null : +l;
}
function ia(l) {
  return Array.from(l.childNodes);
}
function re(l, e) {
  e = "" + e, l.data !== e && (l.data = /** @type {string} */
  e);
}
function Ue(l, e) {
  l.value = e ?? "";
}
function ce(l, e, t, n) {
  t == null ? l.style.removeProperty(e) : l.style.setProperty(e, t, "");
}
function nl(l, e, t) {
  for (let n = 0; n < l.options.length; n += 1) {
    const i = l.options[n];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (l.selectedIndex = -1);
}
function sa(l) {
  const e = l.querySelector(":checked");
  return e && e.__value;
}
let Yt;
function ra() {
  if (Yt === void 0) {
    Yt = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Yt = !0;
    }
  }
  return Yt;
}
function oa(l, e) {
  getComputedStyle(l).position === "static" && (l.style.position = "relative");
  const n = I("iframe");
  n.setAttribute(
    "style",
    "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
  ), n.setAttribute("aria-hidden", "true"), n.tabIndex = -1;
  const i = ra();
  let s;
  return i ? (n.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", s = te(
    window,
    "message",
    /** @param {MessageEvent} event */
    (r) => {
      r.source === n.contentWindow && e();
    }
  )) : (n.src = "about:blank", n.onload = () => {
    s = te(n.contentWindow, "resize", e), e();
  }), M(l, n), () => {
    (i || s && n.contentWindow) && s(), k(n);
  };
}
function X(l, e, t) {
  l.classList.toggle(e, !!t);
}
function Qr(l, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(l, { detail: e, bubbles: t, cancelable: n });
}
class dn {
  /**
   * @private
   * @default false
   */
  is_svg = !1;
  /** parent for creating node */
  e = void 0;
  /** html tag nodes */
  n = void 0;
  /** target */
  t = void 0;
  /** anchor */
  a = void 0;
  constructor(e = !1) {
    this.is_svg = e, this.e = this.n = null;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(e) {
    this.h(e);
  }
  /**
   * @param {string} html
   * @param {HTMLElement | SVGElement} target
   * @param {HTMLElement | SVGElement} anchor
   * @returns {void}
   */
  m(e, t, n = null) {
    this.e || (this.is_svg ? this.e = la(
      /** @type {keyof SVGElementTagNameMap} */
      t.nodeName
    ) : this.e = I(
      /** @type {keyof HTMLElementTagNameMap} */
      t.nodeType === 11 ? "TEMPLATE" : t.nodeName
    ), this.t = t.tagName !== "TEMPLATE" ? t : (
      /** @type {HTMLTemplateElement} */
      t.content
    ), this.c(e)), this.i(n);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(
      this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes
    );
  }
  /**
   * @returns {void} */
  i(e) {
    for (let t = 0; t < this.n.length; t += 1)
      v(this.t, this.n[t], e);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  /**
   * @returns {void} */
  d() {
    this.n.forEach(k);
  }
}
function Je(l, e) {
  return new l(e);
}
const en = /* @__PURE__ */ new Map();
let tn = 0;
function aa(l) {
  let e = 5381, t = l.length;
  for (; t--; )
    e = (e << 5) - e ^ l.charCodeAt(t);
  return e >>> 0;
}
function ua(l, e) {
  const t = { stylesheet: ta(e), rules: {} };
  return en.set(l, t), t;
}
function ll(l, e, t, n, i, s, r, a = 0) {
  const o = 16.666 / n;
  let u = `{
`;
  for (let w = 0; w <= 1; w += o) {
    const y = e + (t - e) * s(w);
    u += w * 100 + `%{${r(y, 1 - y)}}
`;
  }
  const f = u + `100% {${r(t, 1 - t)}}
}`, c = `__svelte_${aa(f)}_${a}`, d = Jr(l), { stylesheet: m, rules: _ } = en.get(d) || ua(d, l);
  _[c] || (_[c] = !0, m.insertRule(`@keyframes ${c} ${f}`, m.cssRules.length));
  const h = l.style.animation || "";
  return l.style.animation = `${h ? `${h}, ` : ""}${c} ${n}ms linear ${i}ms 1 both`, tn += 1, c;
}
function fa(l, e) {
  const t = (l.style.animation || "").split(", "), n = t.filter(
    e ? (s) => s.indexOf(e) < 0 : (s) => s.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), i = t.length - n.length;
  i && (l.style.animation = n.join(", "), tn -= i, tn || ca());
}
function ca() {
  Pn(() => {
    tn || (en.forEach((l) => {
      const { ownerNode: e } = l.stylesheet;
      e && k(e);
    }), en.clear());
  });
}
let Ht;
function Nt(l) {
  Ht = l;
}
function Mt() {
  if (!Ht)
    throw new Error("Function called outside component initialization");
  return Ht;
}
function rt(l) {
  Mt().$$.on_mount.push(l);
}
function zn(l) {
  Mt().$$.after_update.push(l);
}
function Hn(l) {
  Mt().$$.on_destroy.push(l);
}
function Re() {
  const l = Mt();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const i = l.$$.callbacks[e];
    if (i) {
      const s = Qr(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return i.slice().forEach((r) => {
        r.call(l, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function ht(l, e) {
  return Mt().$$.context.set(l, e), e;
}
function ye(l) {
  return Mt().$$.context.get(l);
}
function ve(l, e) {
  const t = l.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const wt = [], fe = [];
let vt = [];
const Sn = [], Xr = /* @__PURE__ */ Promise.resolve();
let Cn = !1;
function Zr() {
  Cn || (Cn = !0, Xr.then($r));
}
function dt() {
  return Zr(), Xr;
}
function ut(l) {
  vt.push(l);
}
function Ie(l) {
  Sn.push(l);
}
const bn = /* @__PURE__ */ new Set();
let gt = 0;
function $r() {
  if (gt !== 0)
    return;
  const l = Ht;
  do {
    try {
      for (; gt < wt.length; ) {
        const e = wt[gt];
        gt++, Nt(e), da(e.$$);
      }
    } catch (e) {
      throw wt.length = 0, gt = 0, e;
    }
    for (Nt(null), wt.length = 0, gt = 0; fe.length; )
      fe.pop()();
    for (let e = 0; e < vt.length; e += 1) {
      const t = vt[e];
      bn.has(t) || (bn.add(t), t());
    }
    vt.length = 0;
  } while (wt.length);
  for (; Sn.length; )
    Sn.pop()();
  Cn = !1, bn.clear(), Nt(l);
}
function da(l) {
  if (l.fragment !== null) {
    l.update(), De(l.before_update);
    const e = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, e), l.after_update.forEach(ut);
  }
}
function ma(l) {
  const e = [], t = [];
  vt.forEach((n) => l.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), vt = e;
}
let At;
function _a() {
  return At || (At = Promise.resolve(), At.then(() => {
    At = null;
  })), At;
}
function pn(l, e, t) {
  l.dispatchEvent(Qr(`${e ? "intro" : "outro"}${t}`));
}
const Qt = /* @__PURE__ */ new Set();
let at;
function W() {
  at = {
    r: 0,
    c: [],
    p: at
    // parent group
  };
}
function Y() {
  at.r || De(at.c), at = at.p;
}
function b(l, e) {
  l && l.i && (Qt.delete(l), l.i(e));
}
function p(l, e, t, n) {
  if (l && l.o) {
    if (Qt.has(l))
      return;
    Qt.add(l), at.c.push(() => {
      Qt.delete(l), n && (t && l.d(1), n());
    }), l.o(e);
  } else
    n && n();
}
const ha = { duration: 0 };
function yt(l, e, t, n) {
  let s = e(l, t, { direction: "both" }), r = n ? 0 : 1, a = null, o = null, u = null, f;
  function c() {
    u && fa(l, u);
  }
  function d(_, h) {
    const w = (
      /** @type {Program['d']} */
      _.b - r
    );
    return h *= Math.abs(w), {
      a: r,
      b: _.b,
      d: w,
      duration: h,
      start: _.start,
      end: _.start + h,
      group: _.group
    };
  }
  function m(_) {
    const {
      delay: h = 0,
      duration: w = 300,
      easing: y = Kr,
      tick: S = K,
      css: C
    } = s || ha, T = {
      start: $o() + h,
      b: _
    };
    _ || (T.group = at, at.r += 1), "inert" in l && (_ ? f !== void 0 && (l.inert = f) : (f = /** @type {HTMLElement} */
    l.inert, l.inert = !0)), a || o ? o = T : (C && (c(), u = ll(l, r, _, w, h, y, C)), _ && S(0, 1), a = d(T, w), ut(() => pn(l, _, "start")), xo((L) => {
      if (o && L > o.start && (a = d(o, w), o = null, pn(l, a.b, "start"), C && (c(), u = ll(
        l,
        r,
        a.b,
        a.duration,
        0,
        y,
        s.css
      ))), a) {
        if (L >= a.end)
          S(r = a.b, 1 - r), pn(l, a.b, "end"), o || (a.b ? c() : --a.group.r || De(a.group.c)), a = null;
        else if (L >= a.start) {
          const P = L - a.start;
          r = a.a + a.d * y(P / a.duration), S(r, 1 - r);
        }
      }
      return !!(a || o);
    }));
  }
  return {
    run(_) {
      nt(s) ? _a().then(() => {
        s = s({ direction: _ ? "in" : "out" }), m(_);
      }) : m(_);
    },
    end() {
      c(), a = o = null;
    }
  };
}
function ue(l) {
  return l?.length !== void 0 ? l : Array.from(l);
}
function xr(l, e) {
  l.d(1), e.delete(l.key);
}
function Ke(l, e) {
  p(l, 1, 1, () => {
    e.delete(l.key);
  });
}
function Fe(l, e, t, n, i, s, r, a, o, u, f, c) {
  let d = l.length, m = s.length, _ = d;
  const h = {};
  for (; _--; )
    h[l[_].key] = _;
  const w = [], y = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), C = [];
  for (_ = m; _--; ) {
    const E = c(i, s, _), F = t(E);
    let G = r.get(F);
    G ? C.push(() => G.p(E, e)) : (G = u(F, E), G.c()), y.set(F, w[_] = G), F in h && S.set(F, Math.abs(_ - h[F]));
  }
  const T = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
  function P(E) {
    b(E, 1), E.m(a, f), r.set(E.key, E), f = E.first, m--;
  }
  for (; d && m; ) {
    const E = w[m - 1], F = l[d - 1], G = E.key, V = F.key;
    E === F ? (f = E.first, d--, m--) : y.has(V) ? !r.has(G) || T.has(G) ? P(E) : L.has(V) ? d-- : S.get(G) > S.get(V) ? (L.add(G), P(E)) : (T.add(V), d--) : (o(F, r), d--);
  }
  for (; d--; ) {
    const E = l[d];
    y.has(E.key) || o(E, r);
  }
  for (; m; )
    P(w[m - 1]);
  return De(C), w;
}
function it(l, e) {
  const t = {}, n = {}, i = { $$scope: 1 };
  let s = l.length;
  for (; s--; ) {
    const r = l[s], a = e[s];
    if (a) {
      for (const o in r)
        o in a || (n[o] = 1);
      for (const o in a)
        i[o] || (t[o] = a[o], i[o] = 1);
      l[s] = a;
    } else
      for (const o in r)
        i[o] = 1;
  }
  for (const r in n)
    r in t || (t[r] = void 0);
  return t;
}
function st(l) {
  return typeof l == "object" && l !== null ? l : {};
}
function Se(l, e, t) {
  const n = l.$$.props[e];
  n !== void 0 && (l.$$.bound[n] = t, t(l.$$.ctx[n]));
}
function N(l) {
  l && l.c();
}
function R(l, e, t) {
  const { fragment: n, after_update: i } = l.$$;
  n && n.m(e, t), ut(() => {
    const s = l.$$.on_mount.map(Br).filter(nt);
    l.$$.on_destroy ? l.$$.on_destroy.push(...s) : De(s), l.$$.on_mount = [];
  }), i.forEach(ut);
}
function A(l, e) {
  const t = l.$$;
  t.fragment !== null && (ma(t.after_update), De(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function ga(l, e) {
  l.$$.dirty[0] === -1 && (wt.push(l), Zr(), l.$$.dirty.fill(0)), l.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function x(l, e, t, n, i, s, r = null, a = [-1]) {
  const o = Ht;
  Nt(l);
  const u = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: K,
    not_equal: i,
    bound: el(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: el(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  r && r(u.root);
  let f = !1;
  if (u.ctx = t ? t(l, e.props || {}, (c, d, ...m) => {
    const _ = m.length ? m[0] : d;
    return u.ctx && i(u.ctx[c], u.ctx[c] = _) && (!u.skip_bound && u.bound[c] && u.bound[c](_), f && ga(l, c)), d;
  }) : [], u.update(), f = !0, De(u.before_update), u.fragment = n ? n(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = ia(e.target);
      u.fragment && u.fragment.l(c), c.forEach(k);
    } else
      u.fragment && u.fragment.c();
    e.intro && b(l.$$.fragment), R(l, e.target, e.anchor), $r();
  }
  Nt(o);
}
class ee {
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$ = void 0;
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$set = void 0;
  /** @returns {void} */
  $destroy() {
    A(this, 1), this.$destroy = K;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!nt(t))
      return K;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const i = n.indexOf(t);
      i !== -1 && n.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Zo(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ba = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ba);
const On = {
  kanban: {
    Save: "Save",
    Close: "Close",
    Delete: "Delete",
    Name: "Name",
    Description: "Description",
    Type: "Type",
    "Start date": "Start date",
    "End date": "End date",
    Result: "Result",
    "No results": "No results",
    Search: "Search",
    "Search in": "Search in",
    "Add new row": "Add new row",
    "Add new column": "Add new column",
    "Add new card...": "Add new card...",
    "Add new card": "Add new card",
    "Edit card": "Edit card",
    Edit: "Edit",
    Everywhere: "Everywhere",
    Label: "Label",
    Status: "Status",
    Color: "Color",
    Date: "Date",
    Priority: "Priority",
    Progress: "Progress",
    Users: "Users",
    Untitled: "Untitled",
    Rename: "Rename",
    "Move up": "Move up",
    "Move down": "Move down",
    "Move left": "Move left",
    "Move right": "Move right",
    Sort: "Sort",
    "Label (a-z)": "Label (a-z)",
    "Label (z-a)": "Label (z-a)",
    "Description (a-z)": "Description (a-z)",
    "Description (z-a)": "Description (z-a)",
    Duplicate: "Duplicate",
    "Duplicate of": "Duplicate of",
    "Relates to": "Relates to",
    "Depends on": "Depends on",
    "Is required for": "Is required for",
    Duplicates: "Duplicates",
    "Is duplicated by": "Is duplicated by",
    "Parent for": "Parent for",
    "SubTask of": "SubTask of",
    Cancel: "Cancel",
    "Link task": "Link task",
    "Select a relation": "Select a relation",
    "Select a task": "Select a task",
    Send: "Send",
    "Would you like to delete this comment?": "Would you like to delete this comment?",
    "No comments yet": "No comments yet",
    "Would you like to delete this card?": "Would you like to delete this card?"
  }
}, pa = {
  monthFull: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  dayFull: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  hours: "Hours",
  minutes: "Minutes",
  done: "Done",
  clear: "Clear",
  today: "Today",
  am: ["am", "AM"],
  pm: ["pm", "PM"],
  weekStart: 7,
  clockFormat: 24
}, wa = {
  ok: "OK",
  cancel: "Cancel"
}, ka = {
  timeFormat: "%H:%i",
  dateFormat: "%m/%d/%Y"
}, eo = {
  core: wa,
  calendar: pa,
  formats: ka
};
let to = (/* @__PURE__ */ new Date()).valueOf();
const va = () => to++;
function Fn() {
  return "temp://" + to++;
}
class ya {
  constructor(e) {
    this._nextHandler = null, this._dispatch = e, this.exec = this.exec.bind(this);
  }
  async exec(e, t) {
    return this._dispatch(e, t), this._nextHandler && await this._nextHandler.exec(e, t), t;
  }
  setNext(e) {
    return this._nextHandler = e;
  }
}
function qn(l, e = "data-id") {
  let t = l;
  for (!t.tagName && l.target && (t = l.target); t; ) {
    if (t.getAttribute && t.getAttribute(e))
      return t;
    t = t.parentNode;
  }
  return null;
}
function Sa(l, e = "data-id") {
  const t = qn(l, e);
  return t ? no(t.getAttribute(e)) : null;
}
function no(l) {
  if (typeof l == "string") {
    const e = l * 1;
    if (!isNaN(e))
      return e;
  }
  return l;
}
function il(l, e, t) {
  function n(i) {
    const s = qn(i);
    if (!s)
      return;
    const r = no(s.dataset.id);
    if (typeof e == "function")
      return e(r, i);
    let a, o = i.target;
    for (; o != s; ) {
      if (a = o.dataset ? o.dataset.action : null, a && e[a]) {
        e[a](r, i);
        return;
      }
      o = o.parentNode;
    }
    e[t] && e[t](r, i);
  }
  l.addEventListener(t, n);
}
function Vt(l, e) {
  il(l, e, "click"), e.dblclick && il(l, e.dblclick, "dblclick");
}
function Ca(l, e) {
  for (let t = l.length - 1; t >= 0; t--)
    if (l[t] === e) {
      l.splice(t, 1);
      break;
    }
}
let lo = /* @__PURE__ */ new Date(), nn = !1;
const ft = [], sl = (l) => {
  if (nn) {
    nn = !1;
    return;
  }
  for (let e = ft.length - 1; e >= 0; e--) {
    const { node: t, date: n, props: i } = ft[e];
    if (!(n > lo) && !t.contains(l.target) && t !== l.target && (i.callback && i.callback(l), i.modal || l.defaultPrevented))
      break;
  }
}, rl = ["click", "contextmenu"], Ia = (l) => {
  lo = /* @__PURE__ */ new Date(), nn = !0;
  for (let e = ft.length - 1; e >= 0; e--) {
    const { node: t } = ft[e];
    if (!t.contains(l.target) && t !== l.target) {
      nn = !1;
      break;
    }
  }
};
function Ma(l, e) {
  ft.length || (rl.forEach(
    (n) => document.addEventListener(n, sl)
  ), document.addEventListener("mousedown", Ia)), typeof e != "object" && (e = { callback: e });
  const t = { node: l, date: /* @__PURE__ */ new Date(), props: e };
  return ft.push(t), {
    destroy() {
      Ca(ft, t), ft.length || rl.forEach(
        (n) => document.removeEventListener(n, sl)
      );
    }
  };
}
let ol = (/* @__PURE__ */ new Date()).valueOf();
function et() {
  return ol += 1, ol;
}
function xe(l) {
  return l < 10 ? "0" + l : l.toString();
}
function Ta(l) {
  const e = xe(l);
  return e.length == 2 ? "0" + e : e;
}
function Da(l) {
  let e = l.getDay();
  e === 0 && (e = 7);
  const t = new Date(l.valueOf());
  t.setDate(l.getDate() + (4 - e));
  const n = t.getFullYear(), i = Math.floor(
    (t.getTime() - new Date(n, 0, 1).getTime()) / 864e5
  );
  return 1 + Math.floor(i / 7);
}
const al = ["", ""];
function Ea(l, e, t) {
  switch (l) {
    case "%d":
      return xe(e.getDate());
    case "%m":
      return xe(e.getMonth() + 1);
    case "%j":
      return e.getDate();
    case "%n":
      return e.getMonth() + 1;
    case "%y":
      return xe(e.getFullYear() % 100);
    case "%Y":
      return e.getFullYear();
    case "%D":
      return t.dayShort[e.getDay()];
    case "%l":
      return t.dayFull[e.getDay()];
    case "%M":
      return t.monthShort[e.getMonth()];
    case "%F":
      return t.monthFull[e.getMonth()];
    case "%h":
      return xe((e.getHours() + 11) % 12 + 1);
    case "%g":
      return (e.getHours() + 11) % 12 + 1;
    case "%G":
      return e.getHours();
    case "%H":
      return xe(e.getHours());
    case "%i":
      return xe(e.getMinutes());
    case "%a":
      return ((e.getHours() > 11 ? t.pm : t.am) || al)[0];
    case "%A":
      return ((e.getHours() > 11 ? t.pm : t.am) || al)[1];
    case "%s":
      return xe(e.getSeconds());
    case "%S":
      return Ta(e.getMilliseconds());
    case "%W":
      return xe(Da(e));
    case "%c": {
      let n = e.getFullYear() + "";
      return n += "-" + xe(e.getMonth() + 1), n += "-" + xe(e.getDate()), n += "T", n += xe(e.getHours()), n += ":" + xe(e.getMinutes()), n += ":" + xe(e.getSeconds()), n;
    }
    default:
      return l;
  }
}
const La = /%[a-zA-Z]/g;
function Ot(l, e) {
  return typeof l == "function" ? l : function(t) {
    return t ? (t.getMonth || (t = new Date(t)), l.replace(
      La,
      (n) => Ea(n, t, e)
    )) : "";
  };
}
function ul(l) {
  return l && typeof l == "object" && !Array.isArray(l);
}
function In(l, e) {
  for (const t in e) {
    const n = e[t];
    ul(l[t]) && ul(n) ? l[t] = In(
      { ...l[t] },
      e[t]
    ) : l[t] = e[t];
  }
  return l;
}
function io(l) {
  return {
    getGroup(e) {
      const t = l[e];
      return (n) => t && t[n] || n;
    },
    getRaw() {
      return l;
    },
    extend(e, t) {
      if (!e)
        return this;
      let n;
      return t ? n = In({ ...e }, l) : n = In({ ...l }, e), io(n);
    }
  };
}
function Ra(l) {
  let e, t, n;
  return {
    c() {
      e = I("textarea"), g(e, "class", "wx-textarea svelte-1eba9c5"), g(
        e,
        "id",
        /*id*/
        l[1]
      ), e.disabled = /*disabled*/
      l[4], g(
        e,
        "placeholder",
        /*placeholder*/
        l[2]
      ), e.readOnly = /*readonly*/
      l[6], g(
        e,
        "title",
        /*title*/
        l[3]
      ), X(
        e,
        "wx-error",
        /*error*/
        l[5]
      );
    },
    m(i, s) {
      v(i, e, s), Ue(
        e,
        /*value*/
        l[0]
      ), t || (n = te(
        e,
        "input",
        /*textarea_input_handler*/
        l[7]
      ), t = !0);
    },
    p(i, [s]) {
      s & /*id*/
      2 && g(
        e,
        "id",
        /*id*/
        i[1]
      ), s & /*disabled*/
      16 && (e.disabled = /*disabled*/
      i[4]), s & /*placeholder*/
      4 && g(
        e,
        "placeholder",
        /*placeholder*/
        i[2]
      ), s & /*readonly*/
      64 && (e.readOnly = /*readonly*/
      i[6]), s & /*title*/
      8 && g(
        e,
        "title",
        /*title*/
        i[3]
      ), s & /*value*/
      1 && Ue(
        e,
        /*value*/
        i[0]
      ), s & /*error*/
      32 && X(
        e,
        "wx-error",
        /*error*/
        i[5]
      );
    },
    i: K,
    o: K,
    d(i) {
      i && k(e), t = !1, n();
    }
  };
}
function Aa(l, e, t) {
  let { value: n = "" } = e, { id: i = et() } = e, { placeholder: s = "" } = e, { title: r = "" } = e, { disabled: a = !1 } = e, { error: o = !1 } = e, { readonly: u = !1 } = e;
  function f() {
    n = this.value, t(0, n);
  }
  return l.$$set = (c) => {
    "value" in c && t(0, n = c.value), "id" in c && t(1, i = c.id), "placeholder" in c && t(2, s = c.placeholder), "title" in c && t(3, r = c.title), "disabled" in c && t(4, a = c.disabled), "error" in c && t(5, o = c.error), "readonly" in c && t(6, u = c.readonly);
  }, [
    n,
    i,
    s,
    r,
    a,
    o,
    u,
    f
  ];
}
class jn extends ee {
  constructor(e) {
    super(), x(this, e, Aa, Ra, Z, {
      value: 0,
      id: 1,
      placeholder: 2,
      title: 3,
      disabled: 4,
      error: 5,
      readonly: 6
    });
  }
}
function fl(l) {
  let e, t;
  return {
    c() {
      e = I("i"), g(e, "class", t = Ve(
        /*icon*/
        l[0]
      ) + " svelte-ap8ojf");
    },
    m(n, i) {
      v(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      1 && t !== (t = Ve(
        /*icon*/
        n[0]
      ) + " svelte-ap8ojf") && g(e, "class", t);
    },
    d(n) {
      n && k(e);
    }
  };
}
function Pa(l) {
  let e;
  return {
    c() {
      e = $(
        /*text*/
        l[3]
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*text*/
      8 && re(
        e,
        /*text*/
        t[3]
      );
    },
    i: K,
    o: K,
    d(t) {
      t && k(e);
    }
  };
}
function Na(l) {
  let e;
  const t = (
    /*#slots*/
    l[11].default
  ), n = be(
    t,
    l,
    /*$$scope*/
    l[10],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, s) {
      n && n.m(i, s), e = !0;
    },
    p(i, s) {
      n && n.p && (!e || s & /*$$scope*/
      1024) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[10],
        e ? pe(
          t,
          /*$$scope*/
          i[10],
          s,
          null
        ) : ke(
          /*$$scope*/
          i[10]
        ),
        null
      );
    },
    i(i) {
      e || (b(n, i), e = !0);
    },
    o(i) {
      p(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function za(l) {
  let e, t, n, i, s, r, a, o, u = (
    /*icon*/
    l[0] && fl(l)
  );
  const f = [Na, Pa], c = [];
  function d(m, _) {
    return (
      /*SLOTS*/
      m[5] ? 0 : 1
    );
  }
  return n = d(l), i = c[n] = f[n](l), {
    c() {
      e = I("button"), u && u.c(), t = H(), i.c(), g(
        e,
        "title",
        /*title*/
        l[2]
      ), g(e, "class", s = Ve(`wx-button ${/*buttonCss*/
      l[4]}`) + " svelte-ap8ojf"), e.disabled = /*disabled*/
      l[1], X(
        e,
        "wx-icon",
        /*icon*/
        l[0] && (!/*SLOTS*/
        l[5] || !/*SLOTS*/
        l[5].default)
      );
    },
    m(m, _) {
      v(m, e, _), u && u.m(e, null), M(e, t), c[n].m(e, null), r = !0, a || (o = te(
        e,
        "click",
        /*handleClick*/
        l[6]
      ), a = !0);
    },
    p(m, [_]) {
      /*icon*/
      m[0] ? u ? u.p(m, _) : (u = fl(m), u.c(), u.m(e, t)) : u && (u.d(1), u = null), i.p(m, _), (!r || _ & /*title*/
      4) && g(
        e,
        "title",
        /*title*/
        m[2]
      ), (!r || _ & /*buttonCss*/
      16 && s !== (s = Ve(`wx-button ${/*buttonCss*/
      m[4]}`) + " svelte-ap8ojf")) && g(e, "class", s), (!r || _ & /*disabled*/
      2) && (e.disabled = /*disabled*/
      m[1]), (!r || _ & /*buttonCss, icon, SLOTS*/
      49) && X(
        e,
        "wx-icon",
        /*icon*/
        m[0] && (!/*SLOTS*/
        m[5] || !/*SLOTS*/
        m[5].default)
      );
    },
    i(m) {
      r || (b(i), r = !0);
    },
    o(m) {
      p(i), r = !1;
    },
    d(m) {
      m && k(e), u && u.d(), c[n].d(), a = !1, o();
    }
  };
}
function Ha(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { type: s = "" } = e, { css: r = "" } = e, { click: a } = e, { icon: o = "" } = e, { disabled: u = !1 } = e, { title: f = "" } = e, { text: c = "" } = e;
  const d = e.$$slots;
  let m;
  const _ = Re(), h = (w) => {
    u || (_("click"), a && a(w));
  };
  return l.$$set = (w) => {
    t(13, e = Ce(Ce({}, e), We(w))), "type" in w && t(7, s = w.type), "css" in w && t(8, r = w.css), "click" in w && t(9, a = w.click), "icon" in w && t(0, o = w.icon), "disabled" in w && t(1, u = w.disabled), "title" in w && t(2, f = w.title), "text" in w && t(3, c = w.text), "$$scope" in w && t(10, i = w.$$scope);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*type, css*/
    384) {
      let w = s ? s.split(" ").filter((y) => y !== "").map((y) => "wx-" + y).join(" ") : "";
      t(4, m = r + (r ? " " : "") + w);
    }
  }, e = We(e), [
    o,
    u,
    f,
    c,
    m,
    d,
    h,
    s,
    r,
    a,
    i,
    n
  ];
}
let je = class extends ee {
  constructor(e) {
    super(), x(this, e, Ha, za, Z, {
      type: 7,
      css: 8,
      click: 9,
      icon: 0,
      disabled: 1,
      title: 2,
      text: 3
    });
  }
};
function cl(l) {
  let e, t;
  return {
    c() {
      e = I("span"), t = $(
        /*label*/
        l[2]
      ), g(e, "class", "svelte-1va8f8p");
    },
    m(n, i) {
      v(n, e, i), M(e, t);
    },
    p(n, i) {
      i & /*label*/
      4 && re(
        t,
        /*label*/
        n[2]
      );
    },
    d(n) {
      n && k(e);
    }
  };
}
function Oa(l) {
  let e, t, n, i, s, r, a, o, u = (
    /*label*/
    l[2] && cl(l)
  );
  return {
    c() {
      e = I("div"), t = I("input"), n = H(), i = I("label"), s = I("span"), r = H(), u && u.c(), g(t, "type", "checkbox"), g(
        t,
        "id",
        /*id*/
        l[1]
      ), t.disabled = /*disabled*/
      l[5], t.checked = /*value*/
      l[0], t.value = /*name*/
      l[3], g(t, "class", "svelte-1va8f8p"), g(s, "class", "svelte-1va8f8p"), g(
        i,
        "for",
        /*id*/
        l[1]
      ), g(i, "class", "svelte-1va8f8p"), g(
        e,
        "style",
        /*style*/
        l[4]
      ), g(e, "class", "wx-checkbox svelte-1va8f8p");
    },
    m(f, c) {
      v(f, e, c), M(e, t), M(e, n), M(e, i), M(i, s), M(i, r), u && u.m(i, null), a || (o = te(
        t,
        "change",
        /*handlerChange*/
        l[6]
      ), a = !0);
    },
    p(f, [c]) {
      c & /*id*/
      2 && g(
        t,
        "id",
        /*id*/
        f[1]
      ), c & /*disabled*/
      32 && (t.disabled = /*disabled*/
      f[5]), c & /*value*/
      1 && (t.checked = /*value*/
      f[0]), c & /*name*/
      8 && (t.value = /*name*/
      f[3]), /*label*/
      f[2] ? u ? u.p(f, c) : (u = cl(f), u.c(), u.m(i, null)) : u && (u.d(1), u = null), c & /*id*/
      2 && g(
        i,
        "for",
        /*id*/
        f[1]
      ), c & /*style*/
      16 && g(
        e,
        "style",
        /*style*/
        f[4]
      );
    },
    i: K,
    o: K,
    d(f) {
      f && k(e), u && u.d(), a = !1, o();
    }
  };
}
function Fa(l, e, t) {
  const n = Re();
  let { id: i = et() } = e, { label: s = "" } = e, { name: r = "" } = e, { value: a = !1 } = e, { style: o = "" } = e, { disabled: u = !1 } = e;
  function f({ target: c }) {
    t(0, a = c.checked), n("change", { value: a, name: r });
  }
  return l.$$set = (c) => {
    "id" in c && t(1, i = c.id), "label" in c && t(2, s = c.label), "name" in c && t(3, r = c.name), "value" in c && t(0, a = c.value), "style" in c && t(4, o = c.style), "disabled" in c && t(5, u = c.disabled);
  }, [a, i, s, r, o, u, f];
}
class qa extends ee {
  constructor(e) {
    super(), x(this, e, Fa, Oa, Z, {
      id: 1,
      label: 2,
      name: 3,
      value: 0,
      style: 4,
      disabled: 5
    });
  }
}
function ja(l) {
  let e, t, n, i, s;
  const r = (
    /*#slots*/
    l[8].default
  ), a = be(
    r,
    l,
    /*$$scope*/
    l[7],
    null
  );
  return {
    c() {
      e = I("div"), a && a.c(), g(e, "class", t = `wx-dropdown wx-${/*position*/
      l[0]}-${/*align*/
      l[1]} svelte-1jzzq2v`), ce(
        e,
        "width",
        /*width*/
        l[2]
      );
    },
    m(o, u) {
      v(o, e, u), a && a.m(e, null), l[9](e), n = !0, i || (s = Oe(Ma.call(
        null,
        e,
        /*down*/
        l[4]
      )), i = !0);
    },
    p(o, [u]) {
      a && a.p && (!n || u & /*$$scope*/
      128) && we(
        a,
        r,
        o,
        /*$$scope*/
        o[7],
        n ? pe(
          r,
          /*$$scope*/
          o[7],
          u,
          null
        ) : ke(
          /*$$scope*/
          o[7]
        ),
        null
      ), (!n || u & /*position, align*/
      3 && t !== (t = `wx-dropdown wx-${/*position*/
      o[0]}-${/*align*/
      o[1]} svelte-1jzzq2v`)) && g(e, "class", t), (!n || u & /*width*/
      4) && ce(
        e,
        "width",
        /*width*/
        o[2]
      );
    },
    i(o) {
      n || (b(a, o), n = !0);
    },
    o(o) {
      p(a, o), n = !1;
    },
    d(o) {
      o && k(e), a && a.d(o), l[9](null), i = !1, s();
    }
  };
}
function Va(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { position: s = "bottom" } = e, { align: r = "start" } = e, { autoFit: a = !0 } = e, { cancel: o = null } = e, { width: u = "100%" } = e, f;
  zn(() => {
    if (a) {
      const m = f.getBoundingClientRect(), _ = document.body.getBoundingClientRect();
      return m.right >= _.right && t(1, r = "end"), m.bottom >= _.bottom && t(0, s = "top"), `${s}-${r}`;
    }
  });
  function c(m) {
    o && o(m);
  }
  function d(m) {
    fe[m ? "unshift" : "push"](() => {
      f = m, t(3, f);
    });
  }
  return l.$$set = (m) => {
    "position" in m && t(0, s = m.position), "align" in m && t(1, r = m.align), "autoFit" in m && t(5, a = m.autoFit), "cancel" in m && t(6, o = m.cancel), "width" in m && t(2, u = m.width), "$$scope" in m && t(7, i = m.$$scope);
  }, [
    s,
    r,
    u,
    f,
    c,
    a,
    o,
    i,
    n,
    d
  ];
}
let Tt = class extends ee {
  constructor(e) {
    super(), x(this, e, Va, ja, Z, {
      position: 0,
      align: 1,
      autoFit: 5,
      cancel: 6,
      width: 2
    });
  }
};
function dl(l, e, t) {
  const n = l.slice();
  return n[15] = e[t], n;
}
function ml(l) {
  let e, t, n;
  return {
    c() {
      e = I("i"), g(e, "class", "wx-clear wxi-close svelte-1zsa67");
    },
    m(i, s) {
      v(i, e, s), t || (n = te(e, "click", It(
        /*handleClear*/
        l[10]
      )), t = !0);
    },
    p: K,
    d(i) {
      i && k(e), t = !1, n();
    }
  };
}
function Ua(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-empty wx-selected svelte-1zsa67");
    },
    m(t, n) {
      v(t, e, n);
    },
    p: K,
    d(t) {
      t && k(e);
    }
  };
}
function Ka(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-color wx-selected svelte-1zsa67"), ce(
        e,
        "background-color",
        /*value*/
        l[0] || "#00a037"
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*value*/
      1 && ce(
        e,
        "background-color",
        /*value*/
        t[0] || "#00a037"
      );
    },
    d(t) {
      t && k(e);
    }
  };
}
function _l(l) {
  let e, t;
  return e = new Tt({
    props: {
      cancel: (
        /*func*/
        l[14]
      ),
      $$slots: { default: [Ba] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*popup*/
      256 && (s.cancel = /*func*/
      n[14]), i & /*$$scope, colors*/
      262146 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function hl(l) {
  let e, t, n;
  function i() {
    return (
      /*click_handler_1*/
      l[13](
        /*color*/
        l[15]
      )
    );
  }
  return {
    c() {
      e = I("div"), g(e, "class", "wx-color svelte-1zsa67"), ce(
        e,
        "background-color",
        /*color*/
        l[15]
      );
    },
    m(s, r) {
      v(s, e, r), t || (n = te(e, "click", It(i)), t = !0);
    },
    p(s, r) {
      l = s, r & /*colors*/
      2 && ce(
        e,
        "background-color",
        /*color*/
        l[15]
      );
    },
    d(s) {
      s && k(e), t = !1, n();
    }
  };
}
function Ba(l) {
  let e, t, n, i, s, r = ue(
    /*colors*/
    l[1]
  ), a = [];
  for (let o = 0; o < r.length; o += 1)
    a[o] = hl(dl(l, r, o));
  return {
    c() {
      e = I("div"), t = I("div"), n = H();
      for (let o = 0; o < a.length; o += 1)
        a[o].c();
      g(t, "class", "wx-empty svelte-1zsa67"), g(e, "class", "wx-colors svelte-1zsa67");
    },
    m(o, u) {
      v(o, e, u), M(e, t), M(e, n);
      for (let f = 0; f < a.length; f += 1)
        a[f] && a[f].m(e, null);
      i || (s = te(t, "click", It(
        /*click_handler*/
        l[12]
      )), i = !0);
    },
    p(o, u) {
      if (u & /*colors, selectColor*/
      514) {
        r = ue(
          /*colors*/
          o[1]
        );
        let f;
        for (f = 0; f < r.length; f += 1) {
          const c = dl(o, r, f);
          a[f] ? a[f].p(c, u) : (a[f] = hl(c), a[f].c(), a[f].m(e, null));
        }
        for (; f < a.length; f += 1)
          a[f].d(1);
        a.length = r.length;
      }
    },
    d(o) {
      o && k(e), ot(a, o), i = !1, s();
    }
  };
}
function Wa(l) {
  let e, t, n, i, s, r, a, o, u = (
    /*clear*/
    l[3] && /*value*/
    l[0] && !/*disabled*/
    l[6] && ml(l)
  );
  function f(_, h) {
    return (
      /*value*/
      _[0] ? Ka : Ua
    );
  }
  let c = f(l), d = c(l), m = (
    /*popup*/
    l[8] && _l(l)
  );
  return {
    c() {
      e = I("div"), t = I("input"), n = H(), u && u.c(), i = H(), d.c(), s = H(), m && m.c(), g(
        t,
        "title",
        /*title*/
        l[5]
      ), t.value = /*value*/
      l[0], t.readOnly = !0, g(
        t,
        "id",
        /*id*/
        l[2]
      ), g(
        t,
        "placeholder",
        /*placeholder*/
        l[4]
      ), t.disabled = /*disabled*/
      l[6], g(t, "class", "svelte-1zsa67"), X(
        t,
        "wx-error",
        /*error*/
        l[7]
      ), X(
        t,
        "wx-focus",
        /*popup*/
        l[8]
      ), g(e, "class", "wx-colorselect svelte-1zsa67");
    },
    m(_, h) {
      v(_, e, h), M(e, t), M(e, n), u && u.m(e, null), M(e, i), d.m(e, null), M(e, s), m && m.m(e, null), r = !0, a || (o = te(
        e,
        "click",
        /*handlePopup*/
        l[11]
      ), a = !0);
    },
    p(_, [h]) {
      (!r || h & /*title*/
      32) && g(
        t,
        "title",
        /*title*/
        _[5]
      ), (!r || h & /*value*/
      1 && t.value !== /*value*/
      _[0]) && (t.value = /*value*/
      _[0]), (!r || h & /*id*/
      4) && g(
        t,
        "id",
        /*id*/
        _[2]
      ), (!r || h & /*placeholder*/
      16) && g(
        t,
        "placeholder",
        /*placeholder*/
        _[4]
      ), (!r || h & /*disabled*/
      64) && (t.disabled = /*disabled*/
      _[6]), (!r || h & /*error*/
      128) && X(
        t,
        "wx-error",
        /*error*/
        _[7]
      ), (!r || h & /*popup*/
      256) && X(
        t,
        "wx-focus",
        /*popup*/
        _[8]
      ), /*clear*/
      _[3] && /*value*/
      _[0] && !/*disabled*/
      _[6] ? u ? u.p(_, h) : (u = ml(_), u.c(), u.m(e, i)) : u && (u.d(1), u = null), c === (c = f(_)) && d ? d.p(_, h) : (d.d(1), d = c(_), d && (d.c(), d.m(e, s))), /*popup*/
      _[8] ? m ? (m.p(_, h), h & /*popup*/
      256 && b(m, 1)) : (m = _l(_), m.c(), b(m, 1), m.m(e, null)) : m && (W(), p(m, 1, 1, () => {
        m = null;
      }), Y());
    },
    i(_) {
      r || (b(m), r = !0);
    },
    o(_) {
      p(m), r = !1;
    },
    d(_) {
      _ && k(e), u && u.d(), d.d(), m && m.d(), a = !1, o();
    }
  };
}
function Ya(l, e, t) {
  let { colors: n = [
    "#00a037",
    "#df282f",
    "#fd772c",
    "#6d4bce",
    "#b26bd3",
    "#c87095",
    "#90564d",
    "#eb2f89",
    "#ea77c0",
    "#777676",
    "#a9a8a8",
    "#9bb402",
    "#e7a90b",
    "#0bbed7",
    "#038cd9"
  ] } = e, { value: i = "" } = e, { id: s = et() } = e, { clear: r = !0 } = e, { placeholder: a = "" } = e, { title: o } = e, { disabled: u = !1 } = e, { error: f = !1 } = e, c;
  function d(S) {
    t(0, i = S), t(8, c = null);
  }
  function m() {
    t(0, i = null);
  }
  function _() {
    if (u)
      return !1;
    t(8, c = !0);
  }
  const h = () => d(""), w = (S) => d(S), y = () => t(8, c = null);
  return l.$$set = (S) => {
    "colors" in S && t(1, n = S.colors), "value" in S && t(0, i = S.value), "id" in S && t(2, s = S.id), "clear" in S && t(3, r = S.clear), "placeholder" in S && t(4, a = S.placeholder), "title" in S && t(5, o = S.title), "disabled" in S && t(6, u = S.disabled), "error" in S && t(7, f = S.error);
  }, [
    i,
    n,
    s,
    r,
    a,
    o,
    u,
    f,
    c,
    d,
    m,
    _,
    h,
    w,
    y
  ];
}
class Ga extends ee {
  constructor(e) {
    super(), x(this, e, Ya, Wa, Z, {
      colors: 1,
      value: 0,
      id: 2,
      clear: 3,
      placeholder: 4,
      title: 5,
      disabled: 6,
      error: 7
    });
  }
}
function Ja() {
  let l = null, e = !1, t, n, i, s;
  const r = (d, m, _, h) => {
    t = d, n = m, i = _, s = h;
  }, a = (d) => {
    l = d, e = l !== null, i(l);
  }, o = (d, m) => {
    const _ = d === null ? null : Math.max(0, Math.min(l + d, n.length - 1));
    _ !== l && (a(_), t ? u(_, m) : requestAnimationFrame(() => u(_, m)));
  }, u = (d, m) => {
    if (d !== null && t) {
      const _ = t.querySelectorAll(".list > .item")[d];
      _ && (_.scrollIntoView({ block: "nearest" }), m && m.preventDefault());
    }
  };
  return { move: (d) => {
    const m = Sa(d), _ = n.findIndex((h) => h.id == m);
    _ !== l && a(_);
  }, keydown: (d, m) => {
    switch (d.code) {
      case "Enter":
        e ? s() : a(0);
        break;
      case "Space":
        e || a(0);
        break;
      case "Escape":
        i(l = null);
        break;
      case "Tab":
        i(l = null);
        break;
      case "ArrowDown":
        o(e ? 1 : m || 0, d);
        break;
      case "ArrowUp":
        o(e ? -1 : m || 0, d);
        break;
    }
  }, init: r, navigate: o };
}
function gl(l, e, t) {
  const n = l.slice();
  return n[13] = e[t], n[15] = t, n;
}
const Qa = (l) => ({ option: l & /*items*/
1 }), bl = (l) => ({ option: (
  /*data*/
  l[13]
) });
function pl(l) {
  let e, t;
  return e = new Tt({
    props: {
      cancel: (
        /*func*/
        l[8]
      ),
      $$slots: { default: [xa] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*$$scope, list, items, navIndex*/
      519 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Xa(l) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "No data", g(e, "class", "wx-no-data svelte-fl05h9");
    },
    m(t, n) {
      v(t, e, n);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && k(e);
    }
  };
}
function Za(l) {
  let e = [], t = /* @__PURE__ */ new Map(), n, i, s = ue(
    /*items*/
    l[0]
  );
  const r = (a) => (
    /*data*/
    a[13].id
  );
  for (let a = 0; a < s.length; a += 1) {
    let o = gl(l, s, a), u = r(o);
    t.set(u, e[a] = wl(u, o));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      n = se();
    },
    m(a, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, o);
      v(a, n, o), i = !0;
    },
    p(a, o) {
      o & /*items, navIndex, $$scope*/
      517 && (s = ue(
        /*items*/
        a[0]
      ), W(), e = Fe(e, o, r, 1, a, s, t, n.parentNode, Ke, wl, n, gl), Y());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < s.length; o += 1)
          b(e[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < e.length; o += 1)
        p(e[o]);
      i = !1;
    },
    d(a) {
      a && k(n);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(a);
    }
  };
}
function $a(l) {
  let e = (
    /*data*/
    l[13].name + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i & /*items*/
      1 && e !== (e = /*data*/
      n[13].name + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function wl(l, e) {
  let t, n, i, s;
  const r = (
    /*#slots*/
    e[6].default
  ), a = be(
    r,
    e,
    /*$$scope*/
    e[9],
    bl
  ), o = a || $a(e);
  return {
    key: l,
    first: null,
    c() {
      t = I("div"), o && o.c(), n = H(), g(t, "class", "wx-item svelte-fl05h9"), g(t, "data-id", i = /*data*/
      e[13].id), X(
        t,
        "wx-focus",
        /*index*/
        e[15] === /*navIndex*/
        e[2]
      ), this.first = t;
    },
    m(u, f) {
      v(u, t, f), o && o.m(t, null), M(t, n), s = !0;
    },
    p(u, f) {
      e = u, a ? a.p && (!s || f & /*$$scope, items*/
      513) && we(
        a,
        r,
        e,
        /*$$scope*/
        e[9],
        s ? pe(
          r,
          /*$$scope*/
          e[9],
          f,
          Qa
        ) : ke(
          /*$$scope*/
          e[9]
        ),
        bl
      ) : o && o.p && (!s || f & /*items*/
      1) && o.p(e, s ? f : -1), (!s || f & /*items*/
      1 && i !== (i = /*data*/
      e[13].id)) && g(t, "data-id", i), (!s || f & /*items, navIndex*/
      5) && X(
        t,
        "wx-focus",
        /*index*/
        e[15] === /*navIndex*/
        e[2]
      );
    },
    i(u) {
      s || (b(o, u), s = !0);
    },
    o(u) {
      p(o, u), s = !1;
    },
    d(u) {
      u && k(t), o && o.d(u);
    }
  };
}
function xa(l) {
  let e, t, n, i, s, r;
  const a = [Za, Xa], o = [];
  function u(f, c) {
    return (
      /*items*/
      f[0].length ? 0 : 1
    );
  }
  return t = u(l), n = o[t] = a[t](l), {
    c() {
      e = I("div"), n.c(), g(e, "class", "wx-list svelte-fl05h9");
    },
    m(f, c) {
      v(f, e, c), o[t].m(e, null), l[7](e), i = !0, s || (r = [
        te(e, "click", It(
          /*select*/
          l[5]
        )),
        te(
          e,
          "mousemove",
          /*move*/
          l[3]
        )
      ], s = !0);
    },
    p(f, c) {
      let d = t;
      t = u(f), t === d ? o[t].p(f, c) : (W(), p(o[d], 1, 1, () => {
        o[d] = null;
      }), Y(), n = o[t], n ? n.p(f, c) : (n = o[t] = a[t](f), n.c()), b(n, 1), n.m(e, null));
    },
    i(f) {
      i || (b(n), i = !0);
    },
    o(f) {
      p(n), i = !1;
    },
    d(f) {
      f && k(e), o[t].d(), l[7](null), s = !1, De(r);
    }
  };
}
function eu(l) {
  let e, t, n = (
    /*navIndex*/
    l[2] !== null && pl(l)
  );
  return {
    c() {
      n && n.c(), e = se();
    },
    m(i, s) {
      n && n.m(i, s), v(i, e, s), t = !0;
    },
    p(i, [s]) {
      /*navIndex*/
      i[2] !== null ? n ? (n.p(i, s), s & /*navIndex*/
      4 && b(n, 1)) : (n = pl(i), n.c(), b(n, 1), n.m(e.parentNode, e)) : n && (W(), p(n, 1, 1, () => {
        n = null;
      }), Y());
    },
    i(i) {
      t || (b(n), t = !0);
    },
    o(i) {
      p(n), t = !1;
    },
    d(i) {
      i && k(e), n && n.d(i);
    }
  };
}
function tu(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { items: s = [] } = e, r, a = null;
  const o = Re(), { move: u, keydown: f, init: c, navigate: d } = Ja(), m = () => o("select", { id: s[a]?.id });
  rt(() => {
    o("ready", { navigate: d, keydown: f, move: u });
  });
  function _(w) {
    fe[w ? "unshift" : "push"](() => {
      r = w, t(1, r);
    });
  }
  const h = () => d(null);
  return l.$$set = (w) => {
    "items" in w && t(0, s = w.items), "$$scope" in w && t(9, i = w.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*list, items*/
    3 && c(r, s, (w) => t(2, a = w), m);
  }, [
    s,
    r,
    a,
    u,
    d,
    m,
    n,
    _,
    h,
    i
  ];
}
class so extends ee {
  constructor(e) {
    super(), x(this, e, tu, eu, Z, { items: 0 });
  }
}
const nu = (l) => ({ option: l[1] & /*option*/
4 }), kl = (l) => ({ option: (
  /*option*/
  l[33]
) });
function lu(l) {
  let e;
  return {
    c() {
      e = I("i"), g(e, "class", "wx-icon wxi-angle-down svelte-1oh2bu");
    },
    m(t, n) {
      v(t, e, n);
    },
    p: K,
    d(t) {
      t && k(e);
    }
  };
}
function iu(l) {
  let e, t, n;
  return {
    c() {
      e = I("i"), g(e, "class", "wx-icon wxi-close svelte-1oh2bu");
    },
    m(i, s) {
      v(i, e, s), t || (n = te(e, "click", It(
        /*doUnselect*/
        l[14]
      )), t = !0);
    },
    p: K,
    d(i) {
      i && k(e), t = !1, n();
    }
  };
}
function vl(l) {
  let e, t;
  return e = new so({
    props: {
      items: (
        /*filterOptions*/
        l[8]
      ),
      $$slots: {
        default: [
          ru,
          ({ option: n }) => ({ 33: n }),
          ({ option: n }) => [0, n ? 4 : 0]
        ]
      },
      $$scope: { ctx: l }
    }
  }), e.$on(
    "ready",
    /*ready*/
    l[12]
  ), e.$on(
    "select",
    /*selectByEvent*/
    l[13]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*filterOptions*/
      256 && (s.items = /*filterOptions*/
      n[8]), i[0] & /*$$scope*/
      134217728 | i[1] & /*option*/
      4 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function su(l) {
  let e = (
    /*option*/
    l[33].name + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i[1] & /*option*/
      4 && e !== (e = /*option*/
      n[33].name + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function ru(l) {
  let e;
  const t = (
    /*#slots*/
    l[22].default
  ), n = be(
    t,
    l,
    /*$$scope*/
    l[27],
    kl
  ), i = n || su(l);
  return {
    c() {
      i && i.c();
    },
    m(s, r) {
      i && i.m(s, r), e = !0;
    },
    p(s, r) {
      n ? n.p && (!e || r[0] & /*$$scope*/
      134217728 | r[1] & /*option*/
      4) && we(
        n,
        t,
        s,
        /*$$scope*/
        s[27],
        e ? pe(
          t,
          /*$$scope*/
          s[27],
          r,
          nu
        ) : ke(
          /*$$scope*/
          s[27]
        ),
        kl
      ) : i && i.p && (!e || r[1] & /*option*/
      4) && i.p(s, e ? r : [-1, -1]);
    },
    i(s) {
      e || (b(i, s), e = !0);
    },
    o(s) {
      p(i, s), e = !1;
    },
    d(s) {
      i && i.d(s);
    }
  };
}
function ou(l) {
  let e, t, n, i, s, r, a;
  function o(d, m) {
    return (
      /*clearButton*/
      d[6] && !/*disabled*/
      d[4] && /*value*/
      d[0] ? iu : lu
    );
  }
  let u = o(l), f = u(l), c = !/*disabled*/
  l[4] && vl(l);
  return {
    c() {
      e = I("div"), t = I("input"), n = H(), f.c(), i = H(), c && c.c(), g(
        t,
        "id",
        /*id*/
        l[1]
      ), t.disabled = /*disabled*/
      l[4], g(
        t,
        "placeholder",
        /*placeholder*/
        l[2]
      ), g(t, "class", "svelte-1oh2bu"), X(
        t,
        "wx-error",
        /*error*/
        l[5]
      ), g(e, "class", "wx-combo svelte-1oh2bu"), g(
        e,
        "title",
        /*title*/
        l[3]
      );
    },
    m(d, m) {
      v(d, e, m), M(e, t), l[23](t), Ue(
        t,
        /*text*/
        l[7]
      ), M(e, n), f.m(e, null), M(e, i), c && c.m(e, null), s = !0, r || (a = [
        te(
          t,
          "input",
          /*input_1_input_handler*/
          l[24]
        ),
        te(
          t,
          "focus",
          /*onFocus*/
          l[16]
        ),
        te(
          t,
          "blur",
          /*onBlur*/
          l[17]
        ),
        te(
          t,
          "input",
          /*input*/
          l[15]
        ),
        te(
          e,
          "click",
          /*click_handler*/
          l[25]
        ),
        te(
          e,
          "keydown",
          /*keydown_handler*/
          l[26]
        )
      ], r = !0);
    },
    p(d, m) {
      (!s || m[0] & /*id*/
      2) && g(
        t,
        "id",
        /*id*/
        d[1]
      ), (!s || m[0] & /*disabled*/
      16) && (t.disabled = /*disabled*/
      d[4]), (!s || m[0] & /*placeholder*/
      4) && g(
        t,
        "placeholder",
        /*placeholder*/
        d[2]
      ), m[0] & /*text*/
      128 && t.value !== /*text*/
      d[7] && Ue(
        t,
        /*text*/
        d[7]
      ), (!s || m[0] & /*error*/
      32) && X(
        t,
        "wx-error",
        /*error*/
        d[5]
      ), u === (u = o(d)) && f ? f.p(d, m) : (f.d(1), f = u(d), f && (f.c(), f.m(e, i))), /*disabled*/
      d[4] ? c && (W(), p(c, 1, 1, () => {
        c = null;
      }), Y()) : c ? (c.p(d, m), m[0] & /*disabled*/
      16 && b(c, 1)) : (c = vl(d), c.c(), b(c, 1), c.m(e, null)), (!s || m[0] & /*title*/
      8) && g(
        e,
        "title",
        /*title*/
        d[3]
      );
    },
    i(d) {
      s || (b(c), s = !0);
    },
    o(d) {
      p(c), s = !1;
    },
    d(d) {
      d && k(e), l[23](null), f.d(), c && c.d(), r = !1, De(a);
    }
  };
}
function au(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { value: s = "" } = e, { id: r = et() } = e, { options: a = [] } = e, { textField: o = "label" } = e, { placeholder: u = "" } = e, { title: f = "" } = e, { disabled: c = !1 } = e, { error: d = !1 } = e, { clearButton: m = !1 } = e;
  const _ = Re();
  let h = "", w = [], y, S;
  function C(Q) {
    t(9, y = Q.detail.navigate), t(10, S = Q.detail.keydown);
  }
  let T;
  function L(Q) {
    const B = Q.detail.id;
    E(B, !0);
  }
  function P(Q) {
    if (!a.length)
      return;
    if (Q === "" && m) {
      F();
      return;
    }
    let B = a.find((ge) => ge[o] === Q);
    B || (B = a.find((ge) => ge[o].toLowerCase().includes(Q.toLowerCase())));
    const le = B ? B.id : T || a[0].id;
    E(le, !1);
  }
  function E(Q, B) {
    if (Q || Q === 0) {
      let le = a.find((ge) => ge.id === Q);
      t(7, h = le[o]), t(8, w = a), B && y(null), s !== le.id && (t(0, s = le.id), _("select", { selected: le }));
    }
    !O && B && V.focus();
  }
  function F() {
    t(7, h = t(0, s = "")), t(8, w = a), _("select", { selected: null });
  }
  function G() {
    t(8, w = h ? a.filter((Q) => Q[o].toLowerCase().includes(h.toLowerCase())) : a), w.length ? y(0) : y(null);
  }
  let V, O;
  function D() {
    O = !0;
  }
  function j() {
    O = !1, setTimeout(
      () => {
        O || P(h);
      },
      200
    );
  }
  const z = () => w.findIndex((Q) => Q.id === s);
  function q(Q) {
    fe[Q ? "unshift" : "push"](() => {
      V = Q, t(11, V);
    });
  }
  function J() {
    h = this.value, t(7, h), t(21, T), t(0, s), t(19, a), t(20, o);
  }
  const U = () => y(z()), ne = (Q) => S(Q, z());
  return l.$$set = (Q) => {
    "value" in Q && t(0, s = Q.value), "id" in Q && t(1, r = Q.id), "options" in Q && t(19, a = Q.options), "textField" in Q && t(20, o = Q.textField), "placeholder" in Q && t(2, u = Q.placeholder), "title" in Q && t(3, f = Q.title), "disabled" in Q && t(4, c = Q.disabled), "error" in Q && t(5, d = Q.error), "clearButton" in Q && t(6, m = Q.clearButton), "$$scope" in Q && t(27, i = Q.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*prevValue, value, options, textField*/
    3670017 && T != s && (t(7, h = s || s === 0 ? a.find((Q) => Q.id === s)[o] : ""), t(21, T = s)), l.$$.dirty[0] & /*options*/
    524288 && t(8, w = a);
  }, [
    s,
    r,
    u,
    f,
    c,
    d,
    m,
    h,
    w,
    y,
    S,
    V,
    C,
    L,
    F,
    G,
    D,
    j,
    z,
    a,
    o,
    T,
    n,
    q,
    J,
    U,
    ne,
    i
  ];
}
class Mn extends ee {
  constructor(e) {
    super(), x(
      this,
      e,
      au,
      ou,
      Z,
      {
        value: 0,
        id: 1,
        options: 19,
        textField: 20,
        placeholder: 2,
        title: 3,
        disabled: 4,
        error: 5,
        clearButton: 6
      },
      null,
      [-1, -1]
    );
  }
}
function uu(l) {
  let e, t, n;
  return {
    c() {
      e = I("input"), g(
        e,
        "id",
        /*id*/
        l[2]
      ), e.readOnly = /*readonly*/
      l[3], e.disabled = /*disabled*/
      l[6], g(
        e,
        "placeholder",
        /*placeholder*/
        l[5]
      ), g(
        e,
        "title",
        /*title*/
        l[9]
      ), g(
        e,
        "style",
        /*inputStyle*/
        l[8]
      ), g(e, "class", "svelte-1axmg32");
    },
    m(i, s) {
      v(i, e, s), Ue(
        e,
        /*value*/
        l[0]
      ), l[24](e), t || (n = [
        te(
          e,
          "input",
          /*input_1_input_handler_2*/
          l[23]
        ),
        te(
          e,
          "input",
          /*input_handler_2*/
          l[25]
        ),
        te(
          e,
          "change",
          /*change_handler_2*/
          l[26]
        )
      ], t = !0);
    },
    p(i, s) {
      s & /*id*/
      4 && g(
        e,
        "id",
        /*id*/
        i[2]
      ), s & /*readonly*/
      8 && (e.readOnly = /*readonly*/
      i[3]), s & /*disabled*/
      64 && (e.disabled = /*disabled*/
      i[6]), s & /*placeholder*/
      32 && g(
        e,
        "placeholder",
        /*placeholder*/
        i[5]
      ), s & /*title*/
      512 && g(
        e,
        "title",
        /*title*/
        i[9]
      ), s & /*inputStyle*/
      256 && g(
        e,
        "style",
        /*inputStyle*/
        i[8]
      ), s & /*value*/
      1 && e.value !== /*value*/
      i[0] && Ue(
        e,
        /*value*/
        i[0]
      );
    },
    d(i) {
      i && k(e), l[24](null), t = !1, De(n);
    }
  };
}
function fu(l) {
  let e, t, n;
  return {
    c() {
      e = I("input"), g(
        e,
        "id",
        /*id*/
        l[2]
      ), e.readOnly = /*readonly*/
      l[3], e.disabled = /*disabled*/
      l[6], g(
        e,
        "placeholder",
        /*placeholder*/
        l[5]
      ), g(e, "type", "number"), g(
        e,
        "style",
        /*inputStyle*/
        l[8]
      ), g(
        e,
        "title",
        /*title*/
        l[9]
      ), g(e, "class", "svelte-1axmg32");
    },
    m(i, s) {
      v(i, e, s), Ue(
        e,
        /*value*/
        l[0]
      ), l[20](e), t || (n = [
        te(
          e,
          "input",
          /*input_1_input_handler_1*/
          l[19]
        ),
        te(
          e,
          "input",
          /*input_handler_1*/
          l[21]
        ),
        te(
          e,
          "change",
          /*change_handler_1*/
          l[22]
        )
      ], t = !0);
    },
    p(i, s) {
      s & /*id*/
      4 && g(
        e,
        "id",
        /*id*/
        i[2]
      ), s & /*readonly*/
      8 && (e.readOnly = /*readonly*/
      i[3]), s & /*disabled*/
      64 && (e.disabled = /*disabled*/
      i[6]), s & /*placeholder*/
      32 && g(
        e,
        "placeholder",
        /*placeholder*/
        i[5]
      ), s & /*inputStyle*/
      256 && g(
        e,
        "style",
        /*inputStyle*/
        i[8]
      ), s & /*title*/
      512 && g(
        e,
        "title",
        /*title*/
        i[9]
      ), s & /*value*/
      1 && Nn(e.value) !== /*value*/
      i[0] && Ue(
        e,
        /*value*/
        i[0]
      );
    },
    d(i) {
      i && k(e), l[20](null), t = !1, De(n);
    }
  };
}
function cu(l) {
  let e, t, n;
  return {
    c() {
      e = I("input"), g(
        e,
        "id",
        /*id*/
        l[2]
      ), e.readOnly = /*readonly*/
      l[3], e.disabled = /*disabled*/
      l[6], g(
        e,
        "placeholder",
        /*placeholder*/
        l[5]
      ), g(e, "type", "password"), g(
        e,
        "style",
        /*inputStyle*/
        l[8]
      ), g(
        e,
        "title",
        /*title*/
        l[9]
      ), g(e, "class", "svelte-1axmg32");
    },
    m(i, s) {
      v(i, e, s), Ue(
        e,
        /*value*/
        l[0]
      ), l[16](e), t || (n = [
        te(
          e,
          "input",
          /*input_1_input_handler*/
          l[15]
        ),
        te(
          e,
          "input",
          /*input_handler*/
          l[17]
        ),
        te(
          e,
          "change",
          /*change_handler*/
          l[18]
        )
      ], t = !0);
    },
    p(i, s) {
      s & /*id*/
      4 && g(
        e,
        "id",
        /*id*/
        i[2]
      ), s & /*readonly*/
      8 && (e.readOnly = /*readonly*/
      i[3]), s & /*disabled*/
      64 && (e.disabled = /*disabled*/
      i[6]), s & /*placeholder*/
      32 && g(
        e,
        "placeholder",
        /*placeholder*/
        i[5]
      ), s & /*inputStyle*/
      256 && g(
        e,
        "style",
        /*inputStyle*/
        i[8]
      ), s & /*title*/
      512 && g(
        e,
        "title",
        /*title*/
        i[9]
      ), s & /*value*/
      1 && e.value !== /*value*/
      i[0] && Ue(
        e,
        /*value*/
        i[0]
      );
    },
    d(i) {
      i && k(e), l[16](null), t = !1, De(n);
    }
  };
}
function yl(l) {
  let e, t;
  return {
    c() {
      e = I("i"), g(e, "class", t = "wx-icon " + /*icon*/
      l[10] + " svelte-1axmg32");
    },
    m(n, i) {
      v(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      1024 && t !== (t = "wx-icon " + /*icon*/
      n[10] + " svelte-1axmg32") && g(e, "class", t);
    },
    d(n) {
      n && k(e);
    }
  };
}
function du(l) {
  let e, t, n;
  function i(o, u) {
    return (
      /*type*/
      o[4] == "password" ? cu : (
        /*type*/
        o[4] == "number" ? fu : uu
      )
    );
  }
  let s = i(l), r = s(l), a = (
    /*icon*/
    l[10] && yl(l)
  );
  return {
    c() {
      e = I("div"), r.c(), t = H(), a && a.c(), g(e, "class", n = "wx-text " + /*css*/
      l[1] + " svelte-1axmg32"), X(
        e,
        "wx-error",
        /*error*/
        l[7]
      ), X(
        e,
        "wx-disabled",
        /*disabled*/
        l[6]
      );
    },
    m(o, u) {
      v(o, e, u), r.m(e, null), M(e, t), a && a.m(e, null);
    },
    p(o, [u]) {
      s === (s = i(o)) && r ? r.p(o, u) : (r.d(1), r = s(o), r && (r.c(), r.m(e, t))), /*icon*/
      o[10] ? a ? a.p(o, u) : (a = yl(o), a.c(), a.m(e, null)) : a && (a.d(1), a = null), u & /*css*/
      2 && n !== (n = "wx-text " + /*css*/
      o[1] + " svelte-1axmg32") && g(e, "class", n), u & /*css, error*/
      130 && X(
        e,
        "wx-error",
        /*error*/
        o[7]
      ), u & /*css, disabled*/
      66 && X(
        e,
        "wx-disabled",
        /*disabled*/
        o[6]
      );
    },
    i: K,
    o: K,
    d(o) {
      o && k(e), r.d(), a && a.d();
    }
  };
}
function mu(l, e, t) {
  let { value: n = "" } = e, { id: i = et() } = e, { readonly: s = !1 } = e, { focus: r = !1 } = e, { select: a = !1 } = e, { type: o = "text" } = e, { placeholder: u = "" } = e, { disabled: f = !1 } = e, { error: c = !1 } = e, { inputStyle: d = "" } = e, { title: m = "" } = e, { css: _ = "" } = e, { icon: h = "" } = e;
  const w = Re();
  h && _.indexOf("wx-icon-left") === -1 && (_ = "wx-icon-right " + _);
  let y;
  rt(() => {
    setTimeout(
      () => {
        r && y && y.focus(), a && y && y.select();
      },
      1
    );
  });
  function S() {
    n = this.value, t(0, n);
  }
  function C(z) {
    fe[z ? "unshift" : "push"](() => {
      y = z, t(11, y);
    });
  }
  const T = () => w("change", { value: n, input: !0 }), L = () => w("change", { value: n });
  function P() {
    n = Nn(this.value), t(0, n);
  }
  function E(z) {
    fe[z ? "unshift" : "push"](() => {
      y = z, t(11, y);
    });
  }
  const F = () => w("change", { value: n, input: !0 }), G = () => w("change", { value: n });
  function V() {
    n = this.value, t(0, n);
  }
  function O(z) {
    fe[z ? "unshift" : "push"](() => {
      y = z, t(11, y);
    });
  }
  const D = () => w("change", { value: n, input: !0 }), j = () => w("change", { value: n });
  return l.$$set = (z) => {
    "value" in z && t(0, n = z.value), "id" in z && t(2, i = z.id), "readonly" in z && t(3, s = z.readonly), "focus" in z && t(13, r = z.focus), "select" in z && t(14, a = z.select), "type" in z && t(4, o = z.type), "placeholder" in z && t(5, u = z.placeholder), "disabled" in z && t(6, f = z.disabled), "error" in z && t(7, c = z.error), "inputStyle" in z && t(8, d = z.inputStyle), "title" in z && t(9, m = z.title), "css" in z && t(1, _ = z.css), "icon" in z && t(10, h = z.icon);
  }, [
    n,
    _,
    i,
    s,
    o,
    u,
    f,
    c,
    d,
    m,
    h,
    y,
    w,
    r,
    a,
    S,
    C,
    T,
    L,
    P,
    E,
    F,
    G,
    V,
    O,
    D,
    j
  ];
}
class Vn extends ee {
  constructor(e) {
    super(), x(this, e, mu, du, Z, {
      value: 0,
      id: 2,
      readonly: 3,
      focus: 13,
      select: 14,
      type: 4,
      placeholder: 5,
      disabled: 6,
      error: 7,
      inputStyle: 8,
      title: 9,
      css: 1,
      icon: 10
    });
  }
}
function _u(l) {
  let e;
  return {
    c() {
      e = I("span"), g(e, "class", "wx-spacer svelte-wurt7c");
    },
    m(t, n) {
      v(t, e, n);
    },
    p: K,
    d(t) {
      t && k(e);
    }
  };
}
function hu(l) {
  let e, t, n;
  return {
    c() {
      e = I("i"), g(e, "class", "wx-pager wxi-angle-left svelte-wurt7c");
    },
    m(i, s) {
      v(i, e, s), t || (n = te(
        e,
        "click",
        /*click_handler*/
        l[8]
      ), t = !0);
    },
    p: K,
    d(i) {
      i && k(e), t = !1, n();
    }
  };
}
function gu(l) {
  let e;
  return {
    c() {
      e = I("span"), g(e, "class", "wx-spacer svelte-wurt7c");
    },
    m(t, n) {
      v(t, e, n);
    },
    p: K,
    d(t) {
      t && k(e);
    }
  };
}
function bu(l) {
  let e, t, n;
  return {
    c() {
      e = I("i"), g(e, "class", "wx-pager wxi-angle-right svelte-wurt7c");
    },
    m(i, s) {
      v(i, e, s), t || (n = te(
        e,
        "click",
        /*click_handler_1*/
        l[9]
      ), t = !0);
    },
    p: K,
    d(i) {
      i && k(e), t = !1, n();
    }
  };
}
function pu(l) {
  let e, t, n, i, s, r, a;
  function o(_, h) {
    return (
      /*part*/
      _[1] != "right" ? hu : _u
    );
  }
  let u = o(l), f = u(l);
  function c(_, h) {
    return (
      /*part*/
      _[1] != "left" ? bu : gu
    );
  }
  let d = c(l), m = d(l);
  return {
    c() {
      e = I("div"), f.c(), t = H(), n = I("span"), i = $(
        /*label*/
        l[2]
      ), s = H(), m.c(), g(n, "class", "wx-label svelte-wurt7c"), g(e, "class", "wx-header svelte-wurt7c");
    },
    m(_, h) {
      v(_, e, h), f.m(e, null), M(e, t), M(e, n), M(n, i), M(e, s), m.m(e, null), r || (a = te(
        n,
        "click",
        /*changeType*/
        l[4]
      ), r = !0);
    },
    p(_, [h]) {
      u === (u = o(_)) && f ? f.p(_, h) : (f.d(1), f = u(_), f && (f.c(), f.m(e, t))), h & /*label*/
      4 && re(
        i,
        /*label*/
        _[2]
      ), d === (d = c(_)) && m ? m.p(_, h) : (m.d(1), m = d(_), m && (m.c(), m.m(e, null)));
    },
    i: K,
    o: K,
    d(_) {
      _ && k(e), f.d(), m.d(), r = !1, a();
    }
  };
}
function wu(l, e, t) {
  const n = Re(), s = ye("wx-i18n").getRaw().calendar.monthFull;
  let { date: r } = e, { type: a } = e, { part: o } = e, u, f, c;
  function d() {
    n("shift", { diff: 0, type: a });
  }
  const m = () => n("shift", { diff: -1, type: a }), _ = () => n("shift", { diff: 1, type: a });
  return l.$$set = (h) => {
    "date" in h && t(5, r = h.date), "type" in h && t(0, a = h.type), "part" in h && t(1, o = h.part);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*date, type, month, year*/
    225)
      switch (t(6, u = r.getMonth()), t(7, f = r.getFullYear()), a) {
        case "month":
          t(2, c = `${s[u]} ${f}`);
          break;
        case "year":
          t(2, c = f);
          break;
        case "duodecade": {
          const h = f - f % 10, w = h + 9;
          t(2, c = `${h} - ${w}`);
          break;
        }
      }
  }, [
    a,
    o,
    c,
    n,
    d,
    r,
    u,
    f,
    m,
    _
  ];
}
let ku = class extends ee {
  constructor(e) {
    super(), x(this, e, wu, pu, Z, { date: 5, type: 0, part: 1 });
  }
};
function vu(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[2].default
  ), r = be(
    s,
    l,
    /*$$scope*/
    l[1],
    null
  );
  return {
    c() {
      e = I("button"), r && r.c(), g(e, "class", "svelte-1f88uh6");
    },
    m(a, o) {
      v(a, e, o), r && r.m(e, null), t = !0, n || (i = te(e, "click", function() {
        nt(
          /*click*/
          l[0]
        ) && l[0].apply(this, arguments);
      }), n = !0);
    },
    p(a, [o]) {
      l = a, r && r.p && (!t || o & /*$$scope*/
      2) && we(
        r,
        s,
        l,
        /*$$scope*/
        l[1],
        t ? pe(
          s,
          /*$$scope*/
          l[1],
          o,
          null
        ) : ke(
          /*$$scope*/
          l[1]
        ),
        null
      );
    },
    i(a) {
      t || (b(r, a), t = !0);
    },
    o(a) {
      p(r, a), t = !1;
    },
    d(a) {
      a && k(e), r && r.d(a), n = !1, i();
    }
  };
}
function yu(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { click: s } = e;
  return l.$$set = (r) => {
    "click" in r && t(0, s = r.click), "$$scope" in r && t(1, i = r.$$scope);
  }, [s, i, n];
}
let Ft = class extends ee {
  constructor(e) {
    super(), x(this, e, yu, vu, Z, { click: 0 });
  }
};
function Sl(l, e, t) {
  const n = l.slice();
  return n[17] = e[t], n;
}
function Cl(l, e, t) {
  const n = l.slice();
  return n[17] = e[t], n;
}
function Il(l) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = `${/*day*/
      l[17]}`, g(e, "class", "wx-weekday svelte-1bsdg9l");
    },
    m(t, n) {
      v(t, e, n);
    },
    p: K,
    d(t) {
      t && k(e);
    }
  };
}
function Ml(l, e) {
  let t, n = (
    /*day*/
    e[17].day + ""
  ), i, s, r, a;
  return {
    key: l,
    first: null,
    c() {
      t = I("div"), i = $(n), s = H(), g(t, "class", r = "wx-day " + /*day*/
      e[17].css + " svelte-1bsdg9l"), g(t, "data-id", a = /*day*/
      e[17].date), X(t, "wx-out", !/*day*/
      e[17].in), this.first = t;
    },
    m(o, u) {
      v(o, t, u), M(t, i), M(t, s);
    },
    p(o, u) {
      e = o, u & /*days*/
      1 && n !== (n = /*day*/
      e[17].day + "") && re(i, n), u & /*days*/
      1 && r !== (r = "wx-day " + /*day*/
      e[17].css + " svelte-1bsdg9l") && g(t, "class", r), u & /*days*/
      1 && a !== (a = /*day*/
      e[17].date) && g(t, "data-id", a), u & /*days, days*/
      1 && X(t, "wx-out", !/*day*/
      e[17].in);
    },
    d(o) {
      o && k(t);
    }
  };
}
function Su(l) {
  let e, t, n, i, s = [], r = /* @__PURE__ */ new Map(), a, o, u = ue(
    /*weekdays*/
    l[1]
  ), f = [];
  for (let m = 0; m < u.length; m += 1)
    f[m] = Il(Cl(l, u, m));
  let c = ue(
    /*days*/
    l[0]
  );
  const d = (m) => (
    /*day*/
    m[17].date
  );
  for (let m = 0; m < c.length; m += 1) {
    let _ = Sl(l, c, m), h = d(_);
    r.set(h, s[m] = Ml(h, _));
  }
  return {
    c() {
      e = I("div"), t = I("div");
      for (let m = 0; m < f.length; m += 1)
        f[m].c();
      n = H(), i = I("div");
      for (let m = 0; m < s.length; m += 1)
        s[m].c();
      g(t, "class", "wx-weekdays svelte-1bsdg9l"), g(i, "class", "wx-days svelte-1bsdg9l");
    },
    m(m, _) {
      v(m, e, _), M(e, t);
      for (let h = 0; h < f.length; h += 1)
        f[h] && f[h].m(t, null);
      M(e, n), M(e, i);
      for (let h = 0; h < s.length; h += 1)
        s[h] && s[h].m(i, null);
      a || (o = Oe(Vt.call(
        null,
        i,
        /*selectDates*/
        l[2]
      )), a = !0);
    },
    p(m, [_]) {
      if (_ & /*weekdays*/
      2) {
        u = ue(
          /*weekdays*/
          m[1]
        );
        let h;
        for (h = 0; h < u.length; h += 1) {
          const w = Cl(m, u, h);
          f[h] ? f[h].p(w, _) : (f[h] = Il(w), f[h].c(), f[h].m(t, null));
        }
        for (; h < f.length; h += 1)
          f[h].d(1);
        f.length = u.length;
      }
      _ & /*days*/
      1 && (c = ue(
        /*days*/
        m[0]
      ), s = Fe(s, _, d, 1, m, c, r, i, xr, Ml, null, Sl));
    },
    i: K,
    o: K,
    d(m) {
      m && k(e), ot(f, m);
      for (let _ = 0; _ < s.length; _ += 1)
        s[_].d();
      a = !1, o();
    }
  };
}
function Cu(l) {
  const e = l.getDay();
  return e === 0 || e === 6;
}
function Iu(l, e, t) {
  let { value: n } = e, { current: i } = e, { cancel: s } = e, { select: r } = e, { part: a } = e, { markers: o = null } = e;
  const u = ye("wx-i18n").getRaw().calendar, f = (u.weekStart || 7) % 7, c = u.dayShort.slice(f).concat(u.dayShort.slice(0, f));
  let d, m;
  const _ = (T, L, P) => new Date(T.getFullYear(), T.getMonth() + (L || 0), T.getDate() + (P || 0));
  let h = a !== "normal";
  function w() {
    const T = _(i, 0, 1 - i.getDate());
    return T.setDate(T.getDate() - (T.getDay() - (f - 7)) % 7), T;
  }
  function y() {
    const T = _(i, 1, -i.getDate());
    return T.setDate(T.getDate() + (6 - T.getDay() + f) % 7), T;
  }
  const S = { click: C };
  function C(T, L) {
    r && (L.stopPropagation(), r(new Date(new Date(T)))), s && s();
  }
  return l.$$set = (T) => {
    "value" in T && t(3, n = T.value), "current" in T && t(4, i = T.current), "cancel" in T && t(5, s = T.cancel), "select" in T && t(6, r = T.select), "part" in T && t(7, a = T.part), "markers" in T && t(8, o = T.markers);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*part, value, current, date, markers, days*/
    921) {
      a == "normal" ? t(9, m = [n ? _(n).valueOf() : 0]) : t(9, m = n ? [
        n.start ? _(n.start).valueOf() : 0,
        n.end ? _(n.end).valueOf() : 0
      ] : [0, 0]);
      const T = w(), L = y(), P = i.getMonth();
      t(0, d = []);
      for (let E = T; E <= L; E.setDate(E.getDate() + 1)) {
        const F = {
          day: E.getDate(),
          in: E.getMonth() === P,
          date: E.valueOf()
        };
        let G = "";
        if (G += F.in ? "" : " wx-inactive", G += m.indexOf(F.date) > -1 ? " wx-selected" : "", h) {
          const V = F.date == m[0], O = F.date == m[1];
          V && !O ? G += " wx-left" : O && !V && (G += " wx-right"), F.date > m[0] && F.date < m[1] && (G += " wx-inrange");
        }
        if (G += Cu(E) ? " wx-weekend" : "", o) {
          const V = o(E);
          V && (G += " " + V);
        }
        d.push({ ...F, css: G });
      }
    }
  }, [
    d,
    c,
    S,
    n,
    i,
    s,
    r,
    a,
    o,
    m
  ];
}
class Mu extends ee {
  constructor(e) {
    super(), x(this, e, Iu, Su, Z, {
      value: 3,
      current: 4,
      cancel: 5,
      select: 6,
      part: 7,
      markers: 8
    });
  }
}
function Tl(l, e, t) {
  const n = l.slice();
  return n[9] = e[t], n[11] = t, n;
}
function Dl(l) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = `${/*month*/
      l[9]} `, g(e, "class", "wx-month svelte-pmn9ti"), g(
        e,
        "data-id",
        /*i*/
        l[11]
      ), X(
        e,
        "wx-current",
        /*monthNum*/
        l[1] === /*i*/
        l[11]
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*monthNum*/
      2 && X(
        e,
        "wx-current",
        /*monthNum*/
        t[1] === /*i*/
        t[11]
      );
    },
    d(t) {
      t && k(e);
    }
  };
}
function Tu(l) {
  let e = (
    /*locale*/
    l[2].done + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p: K,
    d(n) {
      n && k(t);
    }
  };
}
function Du(l) {
  let e, t, n, i, s, r, a, o = ue(
    /*months*/
    l[3]
  ), u = [];
  for (let f = 0; f < o.length; f += 1)
    u[f] = Dl(Tl(l, o, f));
  return i = new Ft({
    props: {
      click: (
        /*cancel*/
        l[0]
      ),
      $$slots: { default: [Tu] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = I("div");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      t = H(), n = I("div"), N(i.$$.fragment), g(e, "class", "wx-months svelte-pmn9ti"), g(n, "class", "wx-buttons svelte-pmn9ti");
    },
    m(f, c) {
      v(f, e, c);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(e, null);
      v(f, t, c), v(f, n, c), R(i, n, null), s = !0, r || (a = Oe(Vt.call(
        null,
        e,
        /*selectMonths*/
        l[4]
      )), r = !0);
    },
    p(f, [c]) {
      if (c & /*monthNum, months*/
      10) {
        o = ue(
          /*months*/
          f[3]
        );
        let m;
        for (m = 0; m < o.length; m += 1) {
          const _ = Tl(f, o, m);
          u[m] ? u[m].p(_, c) : (u[m] = Dl(_), u[m].c(), u[m].m(e, null));
        }
        for (; m < u.length; m += 1)
          u[m].d(1);
        u.length = o.length;
      }
      const d = {};
      c & /*cancel*/
      1 && (d.click = /*cancel*/
      f[0]), c & /*$$scope*/
      4096 && (d.$$scope = { dirty: c, ctx: f }), i.$set(d);
    },
    i(f) {
      s || (b(i.$$.fragment, f), s = !0);
    },
    o(f) {
      p(i.$$.fragment, f), s = !1;
    },
    d(f) {
      f && (k(e), k(t), k(n)), ot(u, f), A(i), r = !1, a();
    }
  };
}
function Eu(l, e, t) {
  let { value: n } = e, { current: i } = e, { cancel: s } = e, { part: r } = e;
  const a = ye("wx-i18n").getRaw().calendar, o = a.monthShort;
  let u;
  const f = { click: c };
  function c(d, m) {
    (d || d === 0) && (m.stopPropagation(), i.setMonth(d), t(6, i)), r === "normal" && t(5, n = new Date(i)), s();
  }
  return l.$$set = (d) => {
    "value" in d && t(5, n = d.value), "current" in d && t(6, i = d.current), "cancel" in d && t(0, s = d.cancel), "part" in d && t(7, r = d.part);
  }, l.$$.update = () => {
    l.$$.dirty & /*part, value, current*/
    224 && (r !== "normal" && n ? r === "left" && n.start ? t(1, u = n.start.getMonth()) : r === "right" && n.end ? t(1, u = n.end.getMonth()) : t(1, u = i.getMonth()) : t(1, u = i.getMonth()));
  }, [s, u, a, o, f, n, i, r];
}
class Lu extends ee {
  constructor(e) {
    super(), x(this, e, Eu, Du, Z, { value: 5, current: 6, cancel: 0, part: 7 });
  }
}
function El(l, e, t) {
  const n = l.slice();
  return n[9] = e[t], n[11] = t, n;
}
function Ll(l) {
  let e, t = (
    /*y*/
    l[9] + ""
  ), n, i, s;
  return {
    c() {
      e = I("div"), n = $(t), i = H(), g(e, "class", "wx-year svelte-is1ghx"), g(e, "data-id", s = /*y*/
      l[9]), X(
        e,
        "wx-current",
        /*year*/
        l[2] == /*y*/
        l[9]
      ), X(
        e,
        "wx-prev-decade",
        /*i*/
        l[11] === 0
      ), X(
        e,
        "wx-next-decade",
        /*i*/
        l[11] === 11
      );
    },
    m(r, a) {
      v(r, e, a), M(e, n), M(e, i);
    },
    p(r, a) {
      a & /*years*/
      2 && t !== (t = /*y*/
      r[9] + "") && re(n, t), a & /*years*/
      2 && s !== (s = /*y*/
      r[9]) && g(e, "data-id", s), a & /*year, years*/
      6 && X(
        e,
        "wx-current",
        /*year*/
        r[2] == /*y*/
        r[9]
      );
    },
    d(r) {
      r && k(e);
    }
  };
}
function Ru(l) {
  let e = (
    /*_*/
    l[3].done + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p: K,
    d(n) {
      n && k(t);
    }
  };
}
function Au(l) {
  let e, t, n, i, s, r, a, o = ue(
    /*years*/
    l[1]
  ), u = [];
  for (let f = 0; f < o.length; f += 1)
    u[f] = Ll(El(l, o, f));
  return i = new Ft({
    props: {
      click: (
        /*cancel*/
        l[0]
      ),
      $$slots: { default: [Ru] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = I("div");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      t = H(), n = I("div"), N(i.$$.fragment), g(e, "class", "wx-years svelte-is1ghx"), g(n, "class", "wx-buttons svelte-is1ghx");
    },
    m(f, c) {
      v(f, e, c);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(e, null);
      v(f, t, c), v(f, n, c), R(i, n, null), s = !0, r || (a = Oe(Vt.call(
        null,
        e,
        /*selectYears*/
        l[4]
      )), r = !0);
    },
    p(f, [c]) {
      if (c & /*years, year*/
      6) {
        o = ue(
          /*years*/
          f[1]
        );
        let m;
        for (m = 0; m < o.length; m += 1) {
          const _ = El(f, o, m);
          u[m] ? u[m].p(_, c) : (u[m] = Ll(_), u[m].c(), u[m].m(e, null));
        }
        for (; m < u.length; m += 1)
          u[m].d(1);
        u.length = o.length;
      }
      const d = {};
      c & /*cancel*/
      1 && (d.click = /*cancel*/
      f[0]), c & /*$$scope*/
      4096 && (d.$$scope = { dirty: c, ctx: f }), i.$set(d);
    },
    i(f) {
      s || (b(i.$$.fragment, f), s = !0);
    },
    o(f) {
      p(i.$$.fragment, f), s = !1;
    },
    d(f) {
      f && (k(e), k(t), k(n)), ot(u, f), A(i), r = !1, a();
    }
  };
}
function Pu(l, e, t) {
  const n = ye("wx-i18n").getRaw().calendar;
  let { value: i } = e, { current: s } = e, { cancel: r } = e, { part: a } = e, o, u;
  const f = { click: c };
  function c(d, m) {
    d && (m.stopPropagation(), s.setFullYear(d), t(5, s)), a === "normal" && t(6, i = new Date(s)), r();
  }
  return l.$$set = (d) => {
    "value" in d && t(6, i = d.value), "current" in d && t(5, s = d.current), "cancel" in d && t(0, r = d.cancel), "part" in d && t(7, a = d.part);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*current, year, years*/
    38) {
      t(2, u = s.getFullYear());
      const d = u - u % 10 - 1, m = d + 12;
      t(1, o = []);
      for (let _ = d; _ < m; ++_)
        o.push(_);
    }
  }, [r, o, u, n, f, s, i, a];
}
class Nu extends ee {
  constructor(e) {
    super(), x(this, e, Pu, Au, Z, { value: 6, current: 5, cancel: 0, part: 7 });
  }
}
const ln = {
  month: {
    component: Mu,
    next: Hu,
    prev: zu
  },
  year: {
    component: Lu,
    next: Fu,
    prev: Ou
  },
  duodecade: {
    component: Nu,
    next: ju,
    prev: qu
  }
};
function zu(l) {
  let e = new Date(l);
  for (e.setMonth(l.getMonth() - 1); l.getMonth() === e.getMonth(); )
    e.setDate(e.getDate() - 1);
  return e;
}
function Hu(l) {
  return l = new Date(l), l.setDate(1), l.setMonth(l.getMonth() + 1), l;
}
function Ou(l) {
  return l = new Date(l), l.setFullYear(l.getFullYear() - 1), l;
}
function Fu(l) {
  return l = new Date(l), l.setFullYear(l.getFullYear() + 1), l;
}
function qu(l) {
  return l = new Date(l), l.setFullYear(l.getFullYear() - 10), l;
}
function ju(l) {
  return l = new Date(l), l.setFullYear(l.getFullYear() + 10), l;
}
function Rl(l) {
  let e, t, n, i, s, r, a, o, u = (
    /*done*/
    l[2] && Al(l)
  );
  return i = new Ft({
    props: {
      click: (
        /*func_1*/
        l[14]
      ),
      $$slots: { default: [Uu] },
      $$scope: { ctx: l }
    }
  }), a = new Ft({
    props: {
      click: (
        /*func_2*/
        l[15]
      ),
      $$slots: { default: [Ku] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = I("div"), u && u.c(), t = H(), n = I("div"), N(i.$$.fragment), s = H(), r = I("div"), N(a.$$.fragment), g(n, "class", "wx-button-item svelte-9ihaic"), g(r, "class", "wx-button-item svelte-9ihaic"), g(e, "class", "wx-buttons svelte-9ihaic");
    },
    m(f, c) {
      v(f, e, c), u && u.m(e, null), M(e, t), M(e, n), R(i, n, null), M(e, s), M(e, r), R(a, r, null), o = !0;
    },
    p(f, c) {
      /*done*/
      f[2] ? u ? (u.p(f, c), c & /*done*/
      4 && b(u, 1)) : (u = Al(f), u.c(), b(u, 1), u.m(e, t)) : u && (W(), p(u, 1, 1, () => {
        u = null;
      }), Y());
      const d = {};
      c & /*$$scope*/
      131072 && (d.$$scope = { dirty: c, ctx: f }), i.$set(d);
      const m = {};
      c & /*$$scope*/
      131072 && (m.$$scope = { dirty: c, ctx: f }), a.$set(m);
    },
    i(f) {
      o || (b(u), b(i.$$.fragment, f), b(a.$$.fragment, f), o = !0);
    },
    o(f) {
      p(u), p(i.$$.fragment, f), p(a.$$.fragment, f), o = !1;
    },
    d(f) {
      f && k(e), u && u.d(), A(i), A(a);
    }
  };
}
function Al(l) {
  let e, t, n;
  return t = new Ft({
    props: {
      click: (
        /*func*/
        l[13]
      ),
      $$slots: { default: [Vu] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-button-item svelte-9ihaic");
    },
    m(i, s) {
      v(i, e, s), R(t, e, null), n = !0;
    },
    p(i, s) {
      const r = {};
      s & /*$$scope*/
      131072 && (r.$$scope = { dirty: s, ctx: i }), t.$set(r);
    },
    i(i) {
      n || (b(t.$$.fragment, i), n = !0);
    },
    o(i) {
      p(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(e), A(t);
    }
  };
}
function Vu(l) {
  let e = (
    /*_*/
    l[7]("done") + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p: K,
    d(n) {
      n && k(t);
    }
  };
}
function Uu(l) {
  let e = (
    /*_*/
    l[7]("clear") + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p: K,
    d(n) {
      n && k(t);
    }
  };
}
function Ku(l) {
  let e = (
    /*_*/
    l[7]("today") + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p: K,
    d(n) {
      n && k(t);
    }
  };
}
function Bu(l) {
  let e, t, n, i, s, r, a, o, u;
  n = new ku({
    props: {
      date: (
        /*current*/
        l[1]
      ),
      part: (
        /*part*/
        l[3]
      ),
      type: (
        /*type*/
        l[6]
      )
    }
  }), n.$on(
    "shift",
    /*shift_handler*/
    l[12]
  );
  var f = ln[
    /*type*/
    l[6]
  ].component;
  function c(m, _) {
    return {
      props: {
        value: (
          /*value*/
          m[0]
        ),
        current: (
          /*current*/
          m[1]
        ),
        part: (
          /*part*/
          m[3]
        ),
        markers: (
          /*markers*/
          m[4]
        ),
        select: (
          /*select*/
          m[11]
        ),
        cancel: (
          /*cancel*/
          m[9]
        )
      }
    };
  }
  f && (r = Je(f, c(l)));
  let d = (
    /*type*/
    l[6] === "month" && /*buttons*/
    l[5] && Rl(l)
  );
  return {
    c() {
      e = I("div"), t = I("div"), N(n.$$.fragment), i = H(), s = I("div"), r && N(r.$$.fragment), a = H(), d && d.c(), g(t, "class", "wx-wrap svelte-9ihaic"), g(e, "class", o = "wx-calendar " + /*part*/
      (l[3] !== "normal" && /*part*/
      l[3] !== "both" ? "wx-part" : "") + " svelte-9ihaic");
    },
    m(m, _) {
      v(m, e, _), M(e, t), R(n, t, null), M(t, i), M(t, s), r && R(r, s, null), M(s, a), d && d.m(s, null), u = !0;
    },
    p(m, [_]) {
      const h = {};
      if (_ & /*current*/
      2 && (h.date = /*current*/
      m[1]), _ & /*part*/
      8 && (h.part = /*part*/
      m[3]), _ & /*type*/
      64 && (h.type = /*type*/
      m[6]), n.$set(h), _ & /*type*/
      64 && f !== (f = ln[
        /*type*/
        m[6]
      ].component)) {
        if (r) {
          W();
          const w = r;
          p(w.$$.fragment, 1, 0, () => {
            A(w, 1);
          }), Y();
        }
        f ? (r = Je(f, c(m)), N(r.$$.fragment), b(r.$$.fragment, 1), R(r, s, a)) : r = null;
      } else if (f) {
        const w = {};
        _ & /*value*/
        1 && (w.value = /*value*/
        m[0]), _ & /*current*/
        2 && (w.current = /*current*/
        m[1]), _ & /*part*/
        8 && (w.part = /*part*/
        m[3]), _ & /*markers*/
        16 && (w.markers = /*markers*/
        m[4]), r.$set(w);
      }
      /*type*/
      m[6] === "month" && /*buttons*/
      m[5] ? d ? (d.p(m, _), _ & /*type, buttons*/
      96 && b(d, 1)) : (d = Rl(m), d.c(), b(d, 1), d.m(s, null)) : d && (W(), p(d, 1, 1, () => {
        d = null;
      }), Y()), (!u || _ & /*part*/
      8 && o !== (o = "wx-calendar " + /*part*/
      (m[3] !== "normal" && /*part*/
      m[3] !== "both" ? "wx-part" : "") + " svelte-9ihaic")) && g(e, "class", o);
    },
    i(m) {
      u || (b(n.$$.fragment, m), r && b(r.$$.fragment, m), b(d), u = !0);
    },
    o(m) {
      p(n.$$.fragment, m), r && p(r.$$.fragment, m), p(d), u = !1;
    },
    d(m) {
      m && k(e), A(n), r && A(r), d && d.d();
    }
  };
}
function Wu(l, e, t) {
  const n = Re(), i = ye("wx-i18n").getGroup("calendar");
  let { value: s } = e, { current: r } = e, { done: a = !1 } = e, { part: o = "normal" } = e, { markers: u = null } = e, { buttons: f = !0 } = e, c = "month";
  function d(T, L) {
    T.preventDefault(), n("change", { value: L });
  }
  function m() {
    c === "duodecade" ? t(6, c = "year") : c === "year" && t(6, c = "month");
  }
  function _(T) {
    T.diff == 0 ? c === "month" ? t(6, c = "year") : c === "year" && t(6, c = "duodecade") : n("shift", T);
  }
  function h(T) {
    n("change", { select: !0, value: T });
  }
  const w = (T) => _(T.detail), y = (T) => d(T, -1), S = (T) => d(T, null), C = (T) => d(T, /* @__PURE__ */ new Date());
  return l.$$set = (T) => {
    "value" in T && t(0, s = T.value), "current" in T && t(1, r = T.current), "done" in T && t(2, a = T.done), "part" in T && t(3, o = T.part), "markers" in T && t(4, u = T.markers), "buttons" in T && t(5, f = T.buttons);
  }, [
    s,
    r,
    a,
    o,
    u,
    f,
    c,
    i,
    d,
    m,
    _,
    h,
    w,
    y,
    S,
    C
  ];
}
class sn extends ee {
  constructor(e) {
    super(), x(this, e, Wu, Bu, Z, {
      value: 0,
      current: 1,
      done: 2,
      part: 3,
      markers: 4,
      buttons: 5
    });
  }
}
function Yu(l) {
  let e, t;
  return e = new sn({
    props: {
      value: (
        /*value*/
        l[0]
      ),
      current: (
        /*current*/
        l[1]
      ),
      markers: (
        /*markers*/
        l[2]
      ),
      buttons: (
        /*buttons*/
        l[3]
      )
    }
  }), e.$on(
    "shift",
    /*shift_handler*/
    l[6]
  ), e.$on(
    "change",
    /*change_handler*/
    l[7]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, [i]) {
      const s = {};
      i & /*value*/
      1 && (s.value = /*value*/
      n[0]), i & /*current*/
      2 && (s.current = /*current*/
      n[1]), i & /*markers*/
      4 && (s.markers = /*markers*/
      n[2]), i & /*buttons*/
      8 && (s.buttons = /*buttons*/
      n[3]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Gu(l, e, t) {
  const n = Re();
  let { value: i } = e, { current: s } = e, { markers: r = null } = e, { buttons: a = !0 } = e;
  function o() {
    s || t(1, s = i ? new Date(i) : /* @__PURE__ */ new Date());
  }
  function u({ diff: m, type: _ }) {
    const h = ln[_];
    t(1, s = m > 0 ? h.next(s) : h.prev(s));
  }
  function f(m) {
    const _ = m.value;
    _ ? (t(1, s = new Date(_)), t(0, i = new Date(_))) : t(0, i = null), n("change", { value: i });
  }
  const c = (m) => u(m.detail), d = (m) => f(m.detail);
  return l.$$set = (m) => {
    "value" in m && t(0, i = m.value), "current" in m && t(1, s = m.current), "markers" in m && t(2, r = m.markers), "buttons" in m && t(3, a = m.buttons);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && o();
  }, [
    i,
    s,
    r,
    a,
    u,
    f,
    c,
    d
  ];
}
class Ju extends ee {
  constructor(e) {
    super(), x(this, e, Gu, Yu, Z, {
      value: 0,
      current: 1,
      markers: 2,
      buttons: 3
    });
  }
}
function Pl(l) {
  let e, t;
  return e = new Tt({
    props: {
      cancel: (
        /*cancel*/
        l[13]
      ),
      width: (
        /*width*/
        l[4]
      ),
      align: (
        /*align*/
        l[5]
      ),
      autoFit: !!/*align*/
      l[5],
      $$slots: { default: [Qu] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*width*/
      16 && (s.width = /*width*/
      n[4]), i & /*align*/
      32 && (s.align = /*align*/
      n[5]), i & /*align*/
      32 && (s.autoFit = !!/*align*/
      n[5]), i & /*$$scope, buttons, value*/
      16777345 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Qu(l) {
  let e, t;
  return e = new Ju({
    props: {
      buttons: (
        /*buttons*/
        l[7]
      ),
      value: (
        /*value*/
        l[0]
      )
    }
  }), e.$on(
    "change",
    /*change_handler*/
    l[17]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*buttons*/
      128 && (s.buttons = /*buttons*/
      n[7]), i & /*value*/
      1 && (s.value = /*value*/
      n[0]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Xu(l) {
  let e, t, n, i, s, r;
  t = new Vn({
    props: {
      css: (
        /*css*/
        l[8]
      ),
      title: (
        /*title*/
        l[9]
      ),
      value: (
        /*formattedValue*/
        l[12]
      ),
      id: (
        /*id*/
        l[1]
      ),
      readonly: !/*editable*/
      l[10],
      disabled: (
        /*disabled*/
        l[2]
      ),
      error: (
        /*error*/
        l[3]
      ),
      placeholder: (
        /*placeholder*/
        l[6]
      ),
      icon: "wxi-calendar",
      inputStyle: "cursor: pointer; width: 100%; padding-right: calc(var(--wx-input-icon-size) + var(--wx-input-icon-indent) * 2);"
    }
  }), t.$on(
    "input",
    /*cancel*/
    l[13]
  ), t.$on(
    "change",
    /*doChangeInput*/
    l[15]
  );
  let a = (
    /*popup*/
    l[11] && !/*disabled*/
    l[2] && Pl(l)
  );
  return {
    c() {
      e = I("div"), N(t.$$.fragment), n = H(), a && a.c(), g(e, "class", "wx-datepicker svelte-1k3rk87");
    },
    m(o, u) {
      v(o, e, u), R(t, e, null), M(e, n), a && a.m(e, null), i = !0, s || (r = [
        te(
          window,
          "scroll",
          /*cancel*/
          l[13]
        ),
        te(
          e,
          "click",
          /*click_handler*/
          l[18]
        )
      ], s = !0);
    },
    p(o, [u]) {
      const f = {};
      u & /*css*/
      256 && (f.css = /*css*/
      o[8]), u & /*title*/
      512 && (f.title = /*title*/
      o[9]), u & /*formattedValue*/
      4096 && (f.value = /*formattedValue*/
      o[12]), u & /*id*/
      2 && (f.id = /*id*/
      o[1]), u & /*editable*/
      1024 && (f.readonly = !/*editable*/
      o[10]), u & /*disabled*/
      4 && (f.disabled = /*disabled*/
      o[2]), u & /*error*/
      8 && (f.error = /*error*/
      o[3]), u & /*placeholder*/
      64 && (f.placeholder = /*placeholder*/
      o[6]), t.$set(f), /*popup*/
      o[11] && !/*disabled*/
      o[2] ? a ? (a.p(o, u), u & /*popup, disabled*/
      2052 && b(a, 1)) : (a = Pl(o), a.c(), b(a, 1), a.m(e, null)) : a && (W(), p(a, 1, 1, () => {
        a = null;
      }), Y());
    },
    i(o) {
      i || (b(t.$$.fragment, o), b(a), i = !0);
    },
    o(o) {
      p(t.$$.fragment, o), p(a), i = !1;
    },
    d(o) {
      o && k(e), A(t), a && a.d(), s = !1, De(r);
    }
  };
}
function Zu(l, e, t) {
  let { value: n } = e, { id: i = et() } = e, { disabled: s = !1 } = e, { error: r = !1 } = e, { width: a = "unset" } = e, { align: o = "start" } = e, { placeholder: u = "" } = e, { format: f } = e, { buttons: c = !0 } = e, { css: d = "" } = e, { title: m = "" } = e, { editable: _ = !1 } = e;
  const h = Re(), { calendar: w, formats: y } = ye("wx-i18n").getRaw(), S = f || y.dateFormat;
  let C = typeof S == "function" ? S : Ot(S, w), T;
  function L() {
    t(11, T = !1);
  }
  function P(O) {
    const D = O === n || O && n && O.valueOf() === n.valueOf() || !O && !n;
    t(0, n = O), D || h("select", { selected: O }), setTimeout(L, 1);
  }
  let E;
  function F(O) {
    if (!_)
      return;
    const { value: D, input: j } = O.detail;
    if (j)
      return;
    t(12, E = "");
    let z = typeof _ == "function" ? _(D) : D ? new Date(D) : null;
    z = isNaN(z) ? n || null : z || null, P(z);
  }
  const G = (O) => P(O.detail.value), V = () => t(11, T = !0);
  return l.$$set = (O) => {
    "value" in O && t(0, n = O.value), "id" in O && t(1, i = O.id), "disabled" in O && t(2, s = O.disabled), "error" in O && t(3, r = O.error), "width" in O && t(4, a = O.width), "align" in O && t(5, o = O.align), "placeholder" in O && t(6, u = O.placeholder), "format" in O && t(16, f = O.format), "buttons" in O && t(7, c = O.buttons), "css" in O && t(8, d = O.css), "title" in O && t(9, m = O.title), "editable" in O && t(10, _ = O.editable);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && t(12, E = n ? C(n) : "");
  }, [
    n,
    i,
    s,
    r,
    a,
    o,
    u,
    c,
    d,
    m,
    _,
    T,
    E,
    L,
    P,
    F,
    f,
    G,
    V
  ];
}
class $u extends ee {
  constructor(e) {
    super(), x(this, e, Zu, Xu, Z, {
      value: 0,
      id: 1,
      disabled: 2,
      error: 3,
      width: 4,
      align: 5,
      placeholder: 6,
      format: 16,
      buttons: 7,
      css: 8,
      title: 9,
      editable: 10
    });
  }
}
function xu(l) {
  let e, t, n, i, s, r, a;
  return n = new sn({
    props: {
      value: {
        start: (
          /*start*/
          l[0]
        ),
        end: (
          /*end*/
          l[1]
        )
      },
      current: (
        /*leftCurrent*/
        l[6]
      ),
      markers: (
        /*markers*/
        l[4]
      ),
      buttons: !1,
      part: "left"
    }
  }), n.$on(
    "shift",
    /*shift_handler_1*/
    l[14]
  ), n.$on(
    "change",
    /*change_handler_1*/
    l[15]
  ), r = new sn({
    props: {
      value: {
        start: (
          /*start*/
          l[0]
        ),
        end: (
          /*end*/
          l[1]
        )
      },
      current: (
        /*rightCurrent*/
        l[7]
      ),
      markers: (
        /*markers*/
        l[4]
      ),
      done: (
        /*done*/
        l[2]
      ),
      buttons: (
        /*buttons*/
        l[5]
      ),
      part: "right"
    }
  }), r.$on(
    "shift",
    /*shift_handler_2*/
    l[16]
  ), r.$on(
    "change",
    /*change_handler_2*/
    l[17]
  ), {
    c() {
      e = I("div"), t = I("div"), N(n.$$.fragment), i = H(), s = I("div"), N(r.$$.fragment), g(t, "class", "wx-half svelte-wlbsu6"), g(s, "class", "wx-half svelte-wlbsu6"), g(e, "class", "wx-rangecalendar svelte-wlbsu6");
    },
    m(o, u) {
      v(o, e, u), M(e, t), R(n, t, null), M(e, i), M(e, s), R(r, s, null), a = !0;
    },
    p(o, u) {
      const f = {};
      u & /*start, end*/
      3 && (f.value = {
        start: (
          /*start*/
          o[0]
        ),
        end: (
          /*end*/
          o[1]
        )
      }), u & /*leftCurrent*/
      64 && (f.current = /*leftCurrent*/
      o[6]), u & /*markers*/
      16 && (f.markers = /*markers*/
      o[4]), n.$set(f);
      const c = {};
      u & /*start, end*/
      3 && (c.value = {
        start: (
          /*start*/
          o[0]
        ),
        end: (
          /*end*/
          o[1]
        )
      }), u & /*rightCurrent*/
      128 && (c.current = /*rightCurrent*/
      o[7]), u & /*markers*/
      16 && (c.markers = /*markers*/
      o[4]), u & /*done*/
      4 && (c.done = /*done*/
      o[2]), u & /*buttons*/
      32 && (c.buttons = /*buttons*/
      o[5]), r.$set(c);
    },
    i(o) {
      a || (b(n.$$.fragment, o), b(r.$$.fragment, o), a = !0);
    },
    o(o) {
      p(n.$$.fragment, o), p(r.$$.fragment, o), a = !1;
    },
    d(o) {
      o && k(e), A(n), A(r);
    }
  };
}
function ef(l) {
  let e, t;
  return e = new sn({
    props: {
      value: {
        start: (
          /*start*/
          l[0]
        ),
        end: (
          /*end*/
          l[1]
        )
      },
      current: (
        /*leftCurrent*/
        l[6]
      ),
      markers: (
        /*markers*/
        l[4]
      ),
      done: (
        /*done*/
        l[2]
      ),
      buttons: (
        /*buttons*/
        l[5]
      ),
      part: "both"
    }
  }), e.$on(
    "shift",
    /*shift_handler*/
    l[12]
  ), e.$on(
    "change",
    /*change_handler*/
    l[13]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*start, end*/
      3 && (s.value = {
        start: (
          /*start*/
          n[0]
        ),
        end: (
          /*end*/
          n[1]
        )
      }), i & /*leftCurrent*/
      64 && (s.current = /*leftCurrent*/
      n[6]), i & /*markers*/
      16 && (s.markers = /*markers*/
      n[4]), i & /*done*/
      4 && (s.done = /*done*/
      n[2]), i & /*buttons*/
      32 && (s.buttons = /*buttons*/
      n[5]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function tf(l) {
  let e, t, n, i;
  const s = [ef, xu], r = [];
  function a(o, u) {
    return (
      /*months*/
      o[3] == 1 ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, [u]) {
      let f = e;
      e = a(o), e === f ? r[e].p(o, u) : (W(), p(r[f], 1, 1, () => {
        r[f] = null;
      }), Y(), t = r[e], t ? t.p(o, u) : (t = r[e] = s[e](o), t.c()), b(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function Nl(l, e, t) {
  const n = new Date(l);
  return n.setMonth(n.getMonth() + e), n;
}
function nf(l, e, t) {
  const n = Re();
  let { start: i } = e, { end: s } = e, { done: r } = e, { current: a } = e, { months: o = 2 } = e, { markers: u = null } = e, { buttons: f = !0 } = e, c, d;
  function m(V) {
    t(6, c = V ? new Date(V) : a || /* @__PURE__ */ new Date());
  }
  function _() {
    c && t(7, d = Nl(c, 1));
  }
  function h() {
    d && t(6, c = Nl(d, -1));
  }
  function w({ diff: V, type: O }) {
    const D = ln[O];
    V > 0 ? t(7, d = D.next(d)) : V < 0 && t(6, c = D.prev(c));
  }
  function y(V) {
    C(V), i && t(6, c = new Date(i));
  }
  function S(V) {
    C(V), s && t(7, d = new Date(s));
  }
  function C(V) {
    const O = V.value, D = O === -1;
    D || (V.select ? !i || s ? (t(0, i = O), t(1, s = null)) : i > O ? (t(1, s = i), t(0, i = O)) : t(1, s = O) : O ? (t(0, i = new Date(O)), t(1, s = new Date(O))) : t(0, i = t(1, s = null))), (D || !r) && n("change", { start: i, end: s });
  }
  const T = (V) => w(V.detail), L = (V) => y(V.detail), P = (V) => w(V.detail), E = (V) => y(V.detail), F = (V) => w(V.detail), G = (V) => S(V.detail);
  return l.$$set = (V) => {
    "start" in V && t(0, i = V.start), "end" in V && t(1, s = V.end), "done" in V && t(2, r = V.done), "current" in V && t(11, a = V.current), "months" in V && t(3, o = V.months), "markers" in V && t(4, u = V.markers), "buttons" in V && t(5, f = V.buttons);
  }, l.$$.update = () => {
    l.$$.dirty & /*start*/
    1 && m(i), l.$$.dirty & /*leftCurrent*/
    64 && _(), l.$$.dirty & /*rightCurrent*/
    128 && h();
  }, [
    i,
    s,
    r,
    o,
    u,
    f,
    c,
    d,
    w,
    y,
    S,
    a,
    T,
    L,
    P,
    E,
    F,
    G
  ];
}
class lf extends ee {
  constructor(e) {
    super(), x(this, e, nf, tf, Z, {
      start: 0,
      end: 1,
      done: 2,
      current: 11,
      months: 3,
      markers: 4,
      buttons: 5
    });
  }
}
function sf(l) {
  let e, t, n, i;
  return {
    c() {
      e = I("i"), g(
        e,
        "title",
        /*title*/
        l[1]
      ), g(e, "class", t = "wx-icon " + /*css*/
      l[0] + " svelte-12ezr0r");
    },
    m(s, r) {
      v(s, e, r), n || (i = te(
        e,
        "click",
        /*click_handler_1*/
        l[6]
      ), n = !0);
    },
    p(s, r) {
      r & /*title*/
      2 && g(
        e,
        "title",
        /*title*/
        s[1]
      ), r & /*css*/
      1 && t !== (t = "wx-icon " + /*css*/
      s[0] + " svelte-12ezr0r") && g(e, "class", t);
    },
    i: K,
    o: K,
    d(s) {
      s && k(e), n = !1, i();
    }
  };
}
function rf(l) {
  let e, t, n, i, s;
  const r = (
    /*#slots*/
    l[4].default
  ), a = be(
    r,
    l,
    /*$$scope*/
    l[3],
    null
  );
  return {
    c() {
      e = I("i"), a && a.c(), g(
        e,
        "title",
        /*title*/
        l[1]
      ), g(e, "role", "icon"), g(e, "class", t = "wx-icon " + /*css*/
      l[0] + " svelte-12ezr0r");
    },
    m(o, u) {
      v(o, e, u), a && a.m(e, null), n = !0, i || (s = te(
        e,
        "click",
        /*click_handler*/
        l[5]
      ), i = !0);
    },
    p(o, u) {
      a && a.p && (!n || u & /*$$scope*/
      8) && we(
        a,
        r,
        o,
        /*$$scope*/
        o[3],
        n ? pe(
          r,
          /*$$scope*/
          o[3],
          u,
          null
        ) : ke(
          /*$$scope*/
          o[3]
        ),
        null
      ), (!n || u & /*title*/
      2) && g(
        e,
        "title",
        /*title*/
        o[1]
      ), (!n || u & /*css*/
      1 && t !== (t = "wx-icon " + /*css*/
      o[0] + " svelte-12ezr0r")) && g(e, "class", t);
    },
    i(o) {
      n || (b(a, o), n = !0);
    },
    o(o) {
      p(a, o), n = !1;
    },
    d(o) {
      o && k(e), a && a.d(o), i = !1, s();
    }
  };
}
function of(l) {
  let e, t, n, i;
  const s = [rf, sf], r = [];
  function a(o, u) {
    return (
      /*SLOTS*/
      o[2] && /*SLOTS*/
      o[2].default ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function af(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { css: s = "" } = e, { title: r = "" } = e;
  const a = e.$$slots;
  function o(f) {
    ve.call(this, l, f);
  }
  function u(f) {
    ve.call(this, l, f);
  }
  return l.$$set = (f) => {
    t(7, e = Ce(Ce({}, e), We(f))), "css" in f && t(0, s = f.css), "title" in f && t(1, r = f.title), "$$scope" in f && t(3, i = f.$$scope);
  }, e = We(e), [s, r, a, i, n, o, u];
}
let Te = class extends ee {
  constructor(e) {
    super(), x(this, e, af, of, Z, { css: 0, title: 1 });
  }
};
const uf = (l) => ({ option: l & /*option*/
33554432 }), zl = (l) => ({ option: (
  /*option*/
  l[25]
) });
function Hl(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
const ff = (l) => ({ option: l & /*selected*/
256 }), Ol = (l) => ({ option: (
  /*tag*/
  l[26]
) });
function cf(l) {
  let e = (
    /*tag*/
    l[26][
      /*textField*/
      l[1]
    ] + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i & /*selected, textField*/
      258 && e !== (e = /*tag*/
      n[26][
        /*textField*/
        n[1]
      ] + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function Fl(l) {
  let e, t, n;
  function i() {
    return (
      /*click_handler*/
      l[19](
        /*tag*/
        l[26]
      )
    );
  }
  return {
    c() {
      e = I("i"), g(e, "class", "wxi-close svelte-ijj3jn");
    },
    m(s, r) {
      v(s, e, r), t || (n = te(e, "click", It(i)), t = !0);
    },
    p(s, r) {
      l = s;
    },
    d(s) {
      s && k(e), t = !1, n();
    }
  };
}
function ql(l, e) {
  let t, n, i, s;
  const r = (
    /*#slots*/
    e[18].default
  ), a = be(
    r,
    e,
    /*$$scope*/
    e[23],
    Ol
  ), o = a || cf(e);
  let u = !/*disabled*/
  e[4] && Fl(e);
  return {
    key: l,
    first: null,
    c() {
      t = I("div"), o && o.c(), n = H(), u && u.c(), i = H(), g(t, "class", "wx-tag svelte-ijj3jn"), this.first = t;
    },
    m(f, c) {
      v(f, t, c), o && o.m(t, null), M(t, n), u && u.m(t, null), M(t, i), s = !0;
    },
    p(f, c) {
      e = f, a ? a.p && (!s || c & /*$$scope, selected*/
      8388864) && we(
        a,
        r,
        e,
        /*$$scope*/
        e[23],
        s ? pe(
          r,
          /*$$scope*/
          e[23],
          c,
          ff
        ) : ke(
          /*$$scope*/
          e[23]
        ),
        Ol
      ) : o && o.p && (!s || c & /*selected, textField*/
      258) && o.p(e, s ? c : -1), /*disabled*/
      e[4] ? u && (u.d(1), u = null) : u ? u.p(e, c) : (u = Fl(e), u.c(), u.m(t, i));
    },
    i(f) {
      s || (b(o, f), s = !0);
    },
    o(f) {
      p(o, f), s = !1;
    },
    d(f) {
      f && k(t), o && o.d(f), u && u.d();
    }
  };
}
function jl(l) {
  let e, t;
  return e = new so({
    props: {
      items: (
        /*filterOptions*/
        l[9]
      ),
      $$slots: {
        default: [
          mf,
          ({ option: n }) => ({ 25: n }),
          ({ option: n }) => n ? 33554432 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), e.$on(
    "ready",
    /*ready*/
    l[12]
  ), e.$on(
    "select",
    /*select*/
    l[14]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*filterOptions*/
      512 && (s.items = /*filterOptions*/
      n[9]), i & /*$$scope, option, value, checkboxes*/
      41943105 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Vl(l) {
  let e, t;
  return e = new qa({
    props: {
      style: "margin-right: 8px; pointer-events: none;",
      name: (
        /*option*/
        l[25].id
      ),
      value: (
        /*value*/
        l[0] && /*value*/
        l[0].includes(
          /*option*/
          l[25].id
        )
      )
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*option*/
      33554432 && (s.name = /*option*/
      n[25].id), i & /*value, option*/
      33554433 && (s.value = /*value*/
      n[0] && /*value*/
      n[0].includes(
        /*option*/
        n[25].id
      )), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function df(l) {
  let e = (
    /*option*/
    l[25].name + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i & /*option*/
      33554432 && e !== (e = /*option*/
      n[25].name + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function mf(l) {
  let e, t, n = (
    /*checkboxes*/
    l[6] && Vl(l)
  );
  const i = (
    /*#slots*/
    l[18].default
  ), s = be(
    i,
    l,
    /*$$scope*/
    l[23],
    zl
  ), r = s || df(l);
  return {
    c() {
      n && n.c(), e = H(), r && r.c();
    },
    m(a, o) {
      n && n.m(a, o), v(a, e, o), r && r.m(a, o), t = !0;
    },
    p(a, o) {
      /*checkboxes*/
      a[6] ? n ? (n.p(a, o), o & /*checkboxes*/
      64 && b(n, 1)) : (n = Vl(a), n.c(), b(n, 1), n.m(e.parentNode, e)) : n && (W(), p(n, 1, 1, () => {
        n = null;
      }), Y()), s ? s.p && (!t || o & /*$$scope, option*/
      41943040) && we(
        s,
        i,
        a,
        /*$$scope*/
        a[23],
        t ? pe(
          i,
          /*$$scope*/
          a[23],
          o,
          uf
        ) : ke(
          /*$$scope*/
          a[23]
        ),
        zl
      ) : r && r.p && (!t || o & /*option*/
      33554432) && r.p(a, t ? o : -1);
    },
    i(a) {
      t || (b(n), b(r, a), t = !0);
    },
    o(a) {
      p(n), p(r, a), t = !1;
    },
    d(a) {
      a && k(e), n && n.d(a), r && r.d(a);
    }
  };
}
function _f(l) {
  let e, t, n, i = [], s = /* @__PURE__ */ new Map(), r, a, o, u, f, c, d, m, _, h = ue(
    /*selected*/
    l[8]
  );
  const w = (S) => (
    /*tag*/
    S[26].id
  );
  for (let S = 0; S < h.length; S += 1) {
    let C = Hl(l, h, S), T = w(C);
    s.set(T, i[S] = ql(T, C));
  }
  let y = !/*disabled*/
  l[4] && jl(l);
  return {
    c() {
      e = I("div"), t = I("div"), n = I("div");
      for (let S = 0; S < i.length; S += 1)
        i[S].c();
      r = H(), a = I("div"), o = I("input"), u = H(), f = I("i"), c = H(), y && y.c(), g(n, "class", "wx-tags svelte-ijj3jn"), g(o, "type", "text"), g(
        o,
        "placeholder",
        /*placeholder*/
        l[2]
      ), o.disabled = /*disabled*/
      l[4], g(o, "class", "svelte-ijj3jn"), g(f, "class", "wx-icon wxi-angle-down svelte-ijj3jn"), g(a, "class", "wx-select svelte-ijj3jn"), g(t, "class", "wx-wrapper svelte-ijj3jn"), g(
        e,
        "title",
        /*title*/
        l[3]
      ), g(e, "class", "wx-multicombo svelte-ijj3jn"), X(
        e,
        "wx-error",
        /*error*/
        l[5]
      ), X(
        e,
        "wx-disabled",
        /*disabled*/
        l[4]
      ), X(
        e,
        "wx-not-empty",
        /*selected*/
        l[8].length
      ), X(e, "wx-focus", Ul);
    },
    m(S, C) {
      v(S, e, C), M(e, t), M(t, n);
      for (let T = 0; T < i.length; T += 1)
        i[T] && i[T].m(n, null);
      M(t, r), M(t, a), M(a, o), Ue(
        o,
        /*text*/
        l[7]
      ), M(a, u), M(a, f), M(e, c), y && y.m(e, null), d = !0, m || (_ = [
        te(
          o,
          "input",
          /*input_1_input_handler*/
          l[20]
        ),
        te(
          o,
          "input",
          /*input*/
          l[13]
        ),
        te(
          e,
          "click",
          /*click_handler_1*/
          l[21]
        ),
        te(
          e,
          "keydown",
          /*keydown_handler*/
          l[22]
        )
      ], m = !0);
    },
    p(S, [C]) {
      C & /*remove, selected, disabled, textField, $$scope*/
      8421650 && (h = ue(
        /*selected*/
        S[8]
      ), W(), i = Fe(i, C, w, 1, S, h, s, n, Ke, ql, null, Hl), Y()), (!d || C & /*placeholder*/
      4) && g(
        o,
        "placeholder",
        /*placeholder*/
        S[2]
      ), (!d || C & /*disabled*/
      16) && (o.disabled = /*disabled*/
      S[4]), C & /*text*/
      128 && o.value !== /*text*/
      S[7] && Ue(
        o,
        /*text*/
        S[7]
      ), /*disabled*/
      S[4] ? y && (W(), p(y, 1, 1, () => {
        y = null;
      }), Y()) : y ? (y.p(S, C), C & /*disabled*/
      16 && b(y, 1)) : (y = jl(S), y.c(), b(y, 1), y.m(e, null)), (!d || C & /*title*/
      8) && g(
        e,
        "title",
        /*title*/
        S[3]
      ), (!d || C & /*error*/
      32) && X(
        e,
        "wx-error",
        /*error*/
        S[5]
      ), (!d || C & /*disabled*/
      16) && X(
        e,
        "wx-disabled",
        /*disabled*/
        S[4]
      ), (!d || C & /*selected*/
      256) && X(
        e,
        "wx-not-empty",
        /*selected*/
        S[8].length
      ), (!d || C & /*focus, disabled*/
      16) && X(e, "wx-focus", Ul);
    },
    i(S) {
      if (!d) {
        for (let C = 0; C < h.length; C += 1)
          b(i[C]);
        b(y), d = !0;
      }
    },
    o(S) {
      for (let C = 0; C < i.length; C += 1)
        p(i[C]);
      p(y), d = !1;
    },
    d(S) {
      S && k(e);
      for (let C = 0; C < i.length; C += 1)
        i[C].d();
      y && y.d(), m = !1, De(_);
    }
  };
}
let Ul = !1;
function hf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { value: s } = e, { options: r = [] } = e, { textField: a = "label" } = e, { placeholder: o = "" } = e, { title: u = "" } = e, { disabled: f = !1 } = e, { error: c = !1 } = e, { checkboxes: d = !1 } = e;
  const m = Re();
  let _ = "", h = [], w, y, S;
  function C(D) {
    t(10, y = D.detail.navigate), t(11, S = D.detail.keydown);
  }
  function T() {
    t(9, w = _ ? r.filter((D) => D[a].toLowerCase().includes(_.toLowerCase())) : r), w.length ? y(0) : y(null);
  }
  function L(D) {
    const { id: j } = D.detail;
    if (j) {
      let z;
      s ? s.includes(j) ? z = s.filter((q) => q !== j) : z = [...s, j] : z = [j], t(0, s = z), t(8, h = r.filter((q) => s.includes(q.id))), m("select", { selected: h }), m("change", { value: s });
    }
  }
  function P(D) {
    t(0, s = s.filter((j) => j !== D)), m("change", { value: s });
  }
  const E = () => s && s.length ? w.findIndex((D) => D.id === s[0]) : 0, F = (D) => P(D.id);
  function G() {
    _ = this.value, t(7, _);
  }
  const V = () => !f && y(E()), O = (D) => S(D, E());
  return l.$$set = (D) => {
    "value" in D && t(0, s = D.value), "options" in D && t(17, r = D.options), "textField" in D && t(1, a = D.textField), "placeholder" in D && t(2, o = D.placeholder), "title" in D && t(3, u = D.title), "disabled" in D && t(4, f = D.disabled), "error" in D && t(5, c = D.error), "checkboxes" in D && t(6, d = D.checkboxes), "$$scope" in D && t(23, i = D.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*options*/
    131072 && t(9, w = r), l.$$.dirty & /*value, options*/
    131073 && t(8, h = s ? r.filter((D) => s.includes(D.id)) : []);
  }, [
    s,
    a,
    o,
    u,
    f,
    c,
    d,
    _,
    h,
    w,
    y,
    S,
    C,
    T,
    L,
    P,
    E,
    r,
    n,
    F,
    G,
    V,
    O,
    i
  ];
}
class gf extends ee {
  constructor(e) {
    super(), x(this, e, hf, _f, Z, {
      value: 0,
      options: 17,
      textField: 1,
      placeholder: 2,
      title: 3,
      disabled: 4,
      error: 5,
      checkboxes: 6
    });
  }
}
function Kl(l, e, t) {
  const n = l.slice();
  return n[9] = e[t], n;
}
function Bl(l, e) {
  let t, n = (
    /*option*/
    e[9][
      /*label*/
      e[1]
    ] + ""
  ), i, s;
  return {
    key: l,
    first: null,
    c() {
      t = I("option"), i = $(n), t.__value = s = /*option*/
      e[9].id, Ue(t, t.__value), g(t, "class", "svelte-f9enzu"), this.first = t;
    },
    m(r, a) {
      v(r, t, a), M(t, i);
    },
    p(r, a) {
      e = r, a & /*options, label*/
      6 && n !== (n = /*option*/
      e[9][
        /*label*/
        e[1]
      ] + "") && re(i, n), a & /*options*/
      4 && s !== (s = /*option*/
      e[9].id) && (t.__value = s, Ue(t, t.__value));
    },
    d(r) {
      r && k(t);
    }
  };
}
function Wl(l) {
  let e, t;
  return {
    c() {
      e = I("div"), t = $(
        /*placeholder*/
        l[3]
      ), g(e, "class", "wx-placeholder svelte-f9enzu");
    },
    m(n, i) {
      v(n, e, i), M(e, t);
    },
    p(n, i) {
      i & /*placeholder*/
      8 && re(
        t,
        /*placeholder*/
        n[3]
      );
    },
    d(n) {
      n && k(e);
    }
  };
}
function bf(l) {
  let e, t, n = [], i = /* @__PURE__ */ new Map(), s, r, a, o, u, f = ue(
    /*options*/
    l[2]
  );
  const c = (m) => (
    /*option*/
    m[9].id
  );
  for (let m = 0; m < f.length; m += 1) {
    let _ = Kl(l, f, m), h = c(_);
    i.set(h, n[m] = Bl(h, _));
  }
  let d = !/*value*/
  l[0] && /*value*/
  l[0] !== 0 && Wl(l);
  return {
    c() {
      e = I("div"), t = I("select");
      for (let m = 0; m < n.length; m += 1)
        n[m].c();
      s = H(), d && d.c(), r = H(), a = I("i"), g(
        t,
        "id",
        /*id*/
        l[7]
      ), t.disabled = /*disabled*/
      l[5], g(
        t,
        "title",
        /*title*/
        l[4]
      ), g(t, "class", "svelte-f9enzu"), /*value*/
      l[0] === void 0 && ut(() => (
        /*select_change_handler*/
        l[8].call(t)
      )), X(
        t,
        "wx-error",
        /*error*/
        l[6]
      ), g(a, "class", "wx-icon wxi-angle-down svelte-f9enzu"), g(e, "class", "wx-select svelte-f9enzu");
    },
    m(m, _) {
      v(m, e, _), M(e, t);
      for (let h = 0; h < n.length; h += 1)
        n[h] && n[h].m(t, null);
      nl(
        t,
        /*value*/
        l[0],
        !0
      ), M(e, s), d && d.m(e, null), M(e, r), M(e, a), o || (u = te(
        t,
        "change",
        /*select_change_handler*/
        l[8]
      ), o = !0);
    },
    p(m, [_]) {
      _ & /*options, label*/
      6 && (f = ue(
        /*options*/
        m[2]
      ), n = Fe(n, _, c, 1, m, f, i, t, xr, Bl, null, Kl)), _ & /*id*/
      128 && g(
        t,
        "id",
        /*id*/
        m[7]
      ), _ & /*disabled*/
      32 && (t.disabled = /*disabled*/
      m[5]), _ & /*title*/
      16 && g(
        t,
        "title",
        /*title*/
        m[4]
      ), _ & /*value, options*/
      5 && nl(
        t,
        /*value*/
        m[0]
      ), _ & /*error*/
      64 && X(
        t,
        "wx-error",
        /*error*/
        m[6]
      ), !/*value*/
      m[0] && /*value*/
      m[0] !== 0 ? d ? d.p(m, _) : (d = Wl(m), d.c(), d.m(e, r)) : d && (d.d(1), d = null);
    },
    i: K,
    o: K,
    d(m) {
      m && k(e);
      for (let _ = 0; _ < n.length; _ += 1)
        n[_].d();
      d && d.d(), o = !1, u();
    }
  };
}
function pf(l, e, t) {
  let { label: n = "label" } = e, { value: i = "" } = e, { options: s = [] } = e, { placeholder: r = "" } = e, { title: a } = e, { disabled: o = !1 } = e, { error: u = !1 } = e, { id: f = et() } = e;
  function c() {
    i = sa(this), t(0, i), t(2, s);
  }
  return l.$$set = (d) => {
    "label" in d && t(1, n = d.label), "value" in d && t(0, i = d.value), "options" in d && t(2, s = d.options), "placeholder" in d && t(3, r = d.placeholder), "title" in d && t(4, a = d.title), "disabled" in d && t(5, o = d.disabled), "error" in d && t(6, u = d.error), "id" in d && t(7, f = d.id);
  }, [
    i,
    n,
    s,
    r,
    a,
    o,
    u,
    f,
    c
  ];
}
class ro extends ee {
  constructor(e) {
    super(), x(this, e, pf, bf, Z, {
      label: 1,
      value: 0,
      options: 2,
      placeholder: 3,
      title: 4,
      disabled: 5,
      error: 6,
      id: 7
    });
  }
}
function Yl(l) {
  let e, t;
  return {
    c() {
      e = I("label"), t = $(
        /*label*/
        l[2]
      ), g(
        e,
        "for",
        /*id*/
        l[1]
      ), g(e, "class", "svelte-vxce8u");
    },
    m(n, i) {
      v(n, e, i), M(e, t);
    },
    p(n, i) {
      i & /*label*/
      4 && re(
        t,
        /*label*/
        n[2]
      ), i & /*id*/
      2 && g(
        e,
        "for",
        /*id*/
        n[1]
      );
    },
    d(n) {
      n && k(e);
    }
  };
}
function wf(l) {
  let e, t, n, i, s, r, a, o = (
    /*label*/
    l[2] && Yl(l)
  );
  return {
    c() {
      e = I("div"), o && o.c(), t = H(), n = I("div"), i = I("input"), g(
        i,
        "id",
        /*id*/
        l[1]
      ), g(i, "type", "range"), g(
        i,
        "min",
        /*min*/
        l[4]
      ), g(
        i,
        "max",
        /*max*/
        l[5]
      ), g(
        i,
        "step",
        /*step*/
        l[6]
      ), i.disabled = /*disabled*/
      l[8], g(
        i,
        "style",
        /*bgStyle*/
        l[9]
      ), g(i, "class", "svelte-vxce8u"), g(n, "class", "svelte-vxce8u"), g(e, "class", "wx-slider svelte-vxce8u"), g(e, "style", s = /*width*/
      l[3] ? `width: ${/*width*/
      l[3]}` : ""), g(
        e,
        "title",
        /*title*/
        l[7]
      );
    },
    m(u, f) {
      v(u, e, f), o && o.m(e, null), M(e, t), M(e, n), M(n, i), Ue(
        i,
        /*value*/
        l[0]
      ), r || (a = [
        te(
          i,
          "change",
          /*input_change_input_handler*/
          l[13]
        ),
        te(
          i,
          "input",
          /*input_change_input_handler*/
          l[13]
        ),
        te(
          i,
          "change",
          /*onChange*/
          l[10]
        )
      ], r = !0);
    },
    p(u, [f]) {
      /*label*/
      u[2] ? o ? o.p(u, f) : (o = Yl(u), o.c(), o.m(e, t)) : o && (o.d(1), o = null), f & /*id*/
      2 && g(
        i,
        "id",
        /*id*/
        u[1]
      ), f & /*min*/
      16 && g(
        i,
        "min",
        /*min*/
        u[4]
      ), f & /*max*/
      32 && g(
        i,
        "max",
        /*max*/
        u[5]
      ), f & /*step*/
      64 && g(
        i,
        "step",
        /*step*/
        u[6]
      ), f & /*disabled*/
      256 && (i.disabled = /*disabled*/
      u[8]), f & /*bgStyle*/
      512 && g(
        i,
        "style",
        /*bgStyle*/
        u[9]
      ), f & /*value*/
      1 && Ue(
        i,
        /*value*/
        u[0]
      ), f & /*width*/
      8 && s !== (s = /*width*/
      u[3] ? `width: ${/*width*/
      u[3]}` : "") && g(e, "style", s), f & /*title*/
      128 && g(
        e,
        "title",
        /*title*/
        u[7]
      );
    },
    i: K,
    o: K,
    d(u) {
      u && k(e), o && o.d(), r = !1, De(a);
    }
  };
}
function kf(l, e, t) {
  const n = Re();
  let { id: i = et() } = e, { label: s = "" } = e, { width: r = "" } = e, { min: a = 0 } = e, { max: o = 100 } = e, { value: u = 0 } = e, { step: f = 1 } = e, { title: c = "" } = e, { disabled: d = !1 } = e, m = 0, _ = "", h;
  function w({ target: S }) {
    const C = S.value * 1;
    n("change", { value: C }), t(0, u = C);
  }
  function y() {
    u = Nn(this.value), t(0, u), t(4, a), t(5, o), t(8, d), t(11, m), t(12, h);
  }
  return l.$$set = (S) => {
    "id" in S && t(1, i = S.id), "label" in S && t(2, s = S.label), "width" in S && t(3, r = S.width), "min" in S && t(4, a = S.min), "max" in S && t(5, o = S.max), "value" in S && t(0, u = S.value), "step" in S && t(6, f = S.step), "title" in S && t(7, c = S.title), "disabled" in S && t(8, d = S.disabled);
  }, l.$$.update = () => {
    l.$$.dirty & /*value, min, max, disabled, progress, previous*/
    6449 && (t(11, m = (u - a) / (o - a) * 100 + "%"), t(9, _ = d ? "" : `background: linear-gradient(90deg, var(--wx-slider-primary) 0% ${m}, var(--wx-slider-background) ${m} 100%);`), isNaN(u) && t(0, u = 0), h !== u && (n("change", { value: u, previous: h, input: !0 }), t(12, h = u)));
  }, [
    u,
    i,
    s,
    r,
    a,
    o,
    f,
    c,
    d,
    _,
    w,
    m,
    h,
    y
  ];
}
class vf extends ee {
  constructor(e) {
    super(), x(this, e, kf, wf, Z, {
      id: 1,
      label: 2,
      width: 3,
      min: 4,
      max: 5,
      value: 0,
      step: 6,
      title: 7,
      disabled: 8
    });
  }
}
function St(l, { delay: e = 0, duration: t = 400, easing: n = Kr } = {}) {
  const i = +getComputedStyle(l).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (s) => `opacity: ${s * i}`
  };
}
function yf(l) {
  let e, t, n = (
    /*notice*/
    l[0].text + ""
  ), i, s, r, a, o, u, f, c, d;
  return {
    c() {
      e = I("div"), t = I("div"), i = $(n), s = H(), r = I("div"), a = I("i"), g(t, "class", "wx-text svelte-5yx8ba"), g(a, "class", "wx-close wxi-close svelte-5yx8ba"), g(r, "class", "wx-button svelte-5yx8ba"), g(e, "class", o = "wx-notice wx-" + /*notice*/
      (l[0].type ? (
        /*notice*/
        l[0].type
      ) : "") + " svelte-5yx8ba"), g(e, "role", "status"), g(e, "aria-live", "polite");
    },
    m(m, _) {
      v(m, e, _), M(e, t), M(t, i), M(e, s), M(e, r), M(r, a), f = !0, c || (d = te(
        a,
        "click",
        /*onRemove*/
        l[1]
      ), c = !0);
    },
    p(m, [_]) {
      (!f || _ & /*notice*/
      1) && n !== (n = /*notice*/
      m[0].text + "") && re(i, n), (!f || _ & /*notice*/
      1 && o !== (o = "wx-notice wx-" + /*notice*/
      (m[0].type ? (
        /*notice*/
        m[0].type
      ) : "") + " svelte-5yx8ba")) && g(e, "class", o);
    },
    i(m) {
      f || (m && ut(() => {
        f && (u || (u = yt(e, St, {}, !0)), u.run(1));
      }), f = !0);
    },
    o(m) {
      m && (u || (u = yt(e, St, {}, !1)), u.run(0)), f = !1;
    },
    d(m) {
      m && k(e), m && u && u.end(), c = !1, d();
    }
  };
}
function Sf(l, e, t) {
  let { notice: n = {} } = e;
  function i() {
    n.remove && n.remove();
  }
  return l.$$set = (s) => {
    "notice" in s && t(0, n = s.notice);
  }, [n, i];
}
class Cf extends ee {
  constructor(e) {
    super(), x(this, e, Sf, yf, Z, { notice: 0 });
  }
}
function Gl(l, e, t) {
  const n = l.slice();
  return n[1] = e[t], n;
}
function Jl(l, e) {
  let t, n, i;
  return n = new Cf({ props: { notice: (
    /*notice*/
    e[1]
  ) } }), {
    key: l,
    first: null,
    c() {
      t = se(), N(n.$$.fragment), this.first = t;
    },
    m(s, r) {
      v(s, t, r), R(n, s, r), i = !0;
    },
    p(s, r) {
      e = s;
      const a = {};
      r & /*data*/
      1 && (a.notice = /*notice*/
      e[1]), n.$set(a);
    },
    i(s) {
      i || (b(n.$$.fragment, s), i = !0);
    },
    o(s) {
      p(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && k(t), A(n, s);
    }
  };
}
function If(l) {
  let e, t = [], n = /* @__PURE__ */ new Map(), i, s = ue(
    /*data*/
    l[0]
  );
  const r = (a) => (
    /*notice*/
    a[1].id
  );
  for (let a = 0; a < s.length; a += 1) {
    let o = Gl(l, s, a), u = r(o);
    n.set(u, t[a] = Jl(u, o));
  }
  return {
    c() {
      e = I("div");
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      g(e, "class", "wx-notices svelte-ervf1h");
    },
    m(a, o) {
      v(a, e, o);
      for (let u = 0; u < t.length; u += 1)
        t[u] && t[u].m(e, null);
      i = !0;
    },
    p(a, [o]) {
      o & /*data*/
      1 && (s = ue(
        /*data*/
        a[0]
      ), W(), t = Fe(t, o, r, 1, a, s, n, e, Ke, Jl, null, Gl), Y());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < s.length; o += 1)
          b(t[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < t.length; o += 1)
        p(t[o]);
      i = !1;
    },
    d(a) {
      a && k(e);
      for (let o = 0; o < t.length; o += 1)
        t[o].d();
    }
  };
}
function Mf(l, e, t) {
  let { data: n } = e;
  return l.$$set = (i) => {
    "data" in i && t(0, n = i.data);
  }, [n];
}
class Tf extends ee {
  constructor(e) {
    super(), x(this, e, Mf, If, Z, { data: 0 });
  }
}
function Ql(l, e, t) {
  const n = l.slice();
  return n[11] = e[t], n;
}
const Df = (l) => ({}), Xl = (l) => ({}), Ef = (l) => ({}), Zl = (l) => ({});
function $l(l) {
  let e, t;
  return {
    c() {
      e = I("div"), t = $(
        /*title*/
        l[0]
      ), g(e, "class", "wx-header svelte-at32q2");
    },
    m(n, i) {
      v(n, e, i), M(e, t);
    },
    p(n, i) {
      i & /*title*/
      1 && re(
        t,
        /*title*/
        n[0]
      );
    },
    d(n) {
      n && k(e);
    }
  };
}
function Lf(l) {
  let e, t = (
    /*title*/
    l[0] && $l(l)
  );
  return {
    c() {
      t && t.c(), e = se();
    },
    m(n, i) {
      t && t.m(n, i), v(n, e, i);
    },
    p(n, i) {
      /*title*/
      n[0] ? t ? t.p(n, i) : (t = $l(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && k(e), t && t.d(n);
    }
  };
}
function Rf(l) {
  let e = (
    /*_*/
    l[5](
      /*button*/
      l[11]
    ) + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i & /*buttons*/
      8 && e !== (e = /*_*/
      n[5](
        /*button*/
        n[11]
      ) + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function xl(l) {
  let e, t, n, i;
  function s() {
    return (
      /*func*/
      l[8](
        /*button*/
        l[11]
      )
    );
  }
  return t = new je({
    props: {
      type: "block " + /*button*/
      (l[11] === "ok" ? "primary" : "secondary"),
      click: s,
      $$slots: { default: [Rf] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = I("div"), N(t.$$.fragment), n = H(), g(e, "class", "wx-button svelte-at32q2");
    },
    m(r, a) {
      v(r, e, a), R(t, e, null), M(e, n), i = !0;
    },
    p(r, a) {
      l = r;
      const o = {};
      a & /*buttons*/
      8 && (o.type = "block " + /*button*/
      (l[11] === "ok" ? "primary" : "secondary")), a & /*buttons, ok, cancel*/
      14 && (o.click = s), a & /*$$scope, buttons*/
      1032 && (o.$$scope = { dirty: a, ctx: l }), t.$set(o);
    },
    i(r) {
      i || (b(t.$$.fragment, r), i = !0);
    },
    o(r) {
      p(t.$$.fragment, r), i = !1;
    },
    d(r) {
      r && k(e), A(t);
    }
  };
}
function Af(l) {
  let e, t, n = ue(
    /*buttons*/
    l[3]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = xl(Ql(l, n, r));
  const s = (r) => p(i[r], 1, 1, () => {
    i[r] = null;
  });
  return {
    c() {
      e = I("div");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      g(e, "class", "wx-buttons svelte-at32q2");
    },
    m(r, a) {
      v(r, e, a);
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(e, null);
      t = !0;
    },
    p(r, a) {
      if (a & /*buttons, ok, cancel, _*/
      46) {
        n = ue(
          /*buttons*/
          r[3]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const u = Ql(r, n, o);
          i[o] ? (i[o].p(u, a), b(i[o], 1)) : (i[o] = xl(u), i[o].c(), b(i[o], 1), i[o].m(e, null));
        }
        for (W(), o = n.length; o < i.length; o += 1)
          s(o);
        Y();
      }
    },
    i(r) {
      if (!t) {
        for (let a = 0; a < n.length; a += 1)
          b(i[a]);
        t = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        p(i[a]);
      t = !1;
    },
    d(r) {
      r && k(e), ot(i, r);
    }
  };
}
function Pf(l) {
  let e, t, n, i, s, r, a, o, u;
  const f = (
    /*#slots*/
    l[7].title
  ), c = be(
    f,
    l,
    /*$$scope*/
    l[10],
    Zl
  ), d = c || Lf(l), m = (
    /*#slots*/
    l[7].default
  ), _ = be(
    m,
    l,
    /*$$scope*/
    l[10],
    null
  ), h = (
    /*#slots*/
    l[7].buttons
  ), w = be(
    h,
    l,
    /*$$scope*/
    l[10],
    Xl
  ), y = w || Af(l);
  return {
    c() {
      e = I("div"), t = I("div"), d && d.c(), n = H(), i = I("div"), _ && _.c(), s = H(), y && y.c(), g(t, "class", "wx-window svelte-at32q2"), g(e, "class", "wx-modal svelte-at32q2"), g(e, "tabindex", "0");
    },
    m(S, C) {
      v(S, e, C), M(e, t), d && d.m(t, null), M(t, n), M(t, i), _ && _.m(i, null), M(t, s), y && y.m(t, null), l[9](e), a = !0, o || (u = te(
        e,
        "keydown",
        /*keydown*/
        l[6]
      ), o = !0);
    },
    p(S, [C]) {
      c ? c.p && (!a || C & /*$$scope*/
      1024) && we(
        c,
        f,
        S,
        /*$$scope*/
        S[10],
        a ? pe(
          f,
          /*$$scope*/
          S[10],
          C,
          Ef
        ) : ke(
          /*$$scope*/
          S[10]
        ),
        Zl
      ) : d && d.p && (!a || C & /*title*/
      1) && d.p(S, a ? C : -1), _ && _.p && (!a || C & /*$$scope*/
      1024) && we(
        _,
        m,
        S,
        /*$$scope*/
        S[10],
        a ? pe(
          m,
          /*$$scope*/
          S[10],
          C,
          null
        ) : ke(
          /*$$scope*/
          S[10]
        ),
        null
      ), w ? w.p && (!a || C & /*$$scope*/
      1024) && we(
        w,
        h,
        S,
        /*$$scope*/
        S[10],
        a ? pe(
          h,
          /*$$scope*/
          S[10],
          C,
          Df
        ) : ke(
          /*$$scope*/
          S[10]
        ),
        Xl
      ) : y && y.p && (!a || C & /*buttons, ok, cancel*/
      14) && y.p(S, a ? C : -1);
    },
    i(S) {
      a || (b(d, S), b(_, S), b(y, S), S && ut(() => {
        a && (r || (r = yt(e, St, { duration: 100 }, !0)), r.run(1));
      }), a = !0);
    },
    o(S) {
      p(d, S), p(_, S), p(y, S), S && (r || (r = yt(e, St, { duration: 100 }, !1)), r.run(0)), a = !1;
    },
    d(S) {
      S && k(e), d && d.d(S), _ && _.d(S), y && y.d(S), l[9](null), S && r && r.end(), o = !1, u();
    }
  };
}
function Nf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  const s = ye("wx-i18n").getGroup("core");
  let { title: r = "" } = e, { ok: a } = e, { cancel: o } = e, { buttons: u = ["cancel", "ok"] } = e;
  function f(_) {
    switch (_.code) {
      case "Enter": {
        const h = _.target.tagName;
        if (h === "TEXTAREA" || h === "BUTTON")
          return;
        a();
        break;
      }
      case "Escape":
        o();
        break;
    }
  }
  let c;
  rt(() => {
    c.focus();
  });
  const d = (_) => _ === "ok" ? a() : o();
  function m(_) {
    fe[_ ? "unshift" : "push"](() => {
      c = _, t(4, c);
    });
  }
  return l.$$set = (_) => {
    "title" in _ && t(0, r = _.title), "ok" in _ && t(1, a = _.ok), "cancel" in _ && t(2, o = _.cancel), "buttons" in _ && t(3, u = _.buttons), "$$scope" in _ && t(10, i = _.$$scope);
  }, [
    r,
    a,
    o,
    u,
    c,
    s,
    f,
    n,
    d,
    m,
    i
  ];
}
class zf extends ee {
  constructor(e) {
    super(), x(this, e, Nf, Pf, Z, { title: 0, ok: 1, cancel: 2, buttons: 3 });
  }
}
function ei(l) {
  let e, t;
  return e = new zf({
    props: {
      title: (
        /*modal*/
        l[0].title
      ),
      buttons: (
        /*modal*/
        l[0].buttons
      ),
      ok: (
        /*modal*/
        l[0].resolve
      ),
      cancel: (
        /*modal*/
        l[0].reject
      ),
      $$slots: { default: [Hf] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*modal*/
      1 && (s.title = /*modal*/
      n[0].title), i & /*modal*/
      1 && (s.buttons = /*modal*/
      n[0].buttons), i & /*modal*/
      1 && (s.ok = /*modal*/
      n[0].resolve), i & /*modal*/
      1 && (s.cancel = /*modal*/
      n[0].reject), i & /*$$scope, modal*/
      9 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Hf(l) {
  let e = (
    /*modal*/
    l[0].message + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i & /*modal*/
      1 && e !== (e = /*modal*/
      n[0].message + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function Of(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[2].default
  ), r = be(
    s,
    l,
    /*$$scope*/
    l[3],
    null
  );
  let a = (
    /*modal*/
    l[0] && ei(l)
  );
  return n = new Tf({ props: { data: (
    /*notices*/
    l[1]
  ) } }), {
    c() {
      r && r.c(), e = H(), a && a.c(), t = H(), N(n.$$.fragment);
    },
    m(o, u) {
      r && r.m(o, u), v(o, e, u), a && a.m(o, u), v(o, t, u), R(n, o, u), i = !0;
    },
    p(o, [u]) {
      r && r.p && (!i || u & /*$$scope*/
      8) && we(
        r,
        s,
        o,
        /*$$scope*/
        o[3],
        i ? pe(
          s,
          /*$$scope*/
          o[3],
          u,
          null
        ) : ke(
          /*$$scope*/
          o[3]
        ),
        null
      ), /*modal*/
      o[0] ? a ? (a.p(o, u), u & /*modal*/
      1 && b(a, 1)) : (a = ei(o), a.c(), b(a, 1), a.m(t.parentNode, t)) : a && (W(), p(a, 1, 1, () => {
        a = null;
      }), Y());
      const f = {};
      u & /*notices*/
      2 && (f.data = /*notices*/
      o[1]), n.$set(f);
    },
    i(o) {
      i || (b(r, o), b(a), b(n.$$.fragment, o), i = !0);
    },
    o(o) {
      p(r, o), p(a), p(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && (k(e), k(t)), r && r.d(o), a && a.d(o), A(n, o);
    }
  };
}
function Ff(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, s = null;
  function r(u) {
    return t(0, s = { ...u }), new Promise((f, c) => {
      t(
        0,
        s.resolve = (d) => {
          t(0, s = null), f(d);
        },
        s
      ), t(
        0,
        s.reject = (d) => {
          t(0, s = null), c(d);
        },
        s
      );
    });
  }
  let a = [];
  function o(u) {
    u = { ...u }, u.id = u.id || et(), u.remove = () => t(1, a = a.filter((f) => f.id !== u.id)), u.expire != -1 && setTimeout(u.remove, u.expire || 5e3), t(1, a = [...a, u]);
  }
  return ht("wx-helpers", { showNotice: o, showModal: r }), l.$$set = (u) => {
    "$$scope" in u && t(3, i = u.$$scope);
  }, [s, a, n, i];
}
class qf extends ee {
  constructor(e) {
    super(), x(this, e, Ff, Of, Z, {});
  }
}
const jf = (l) => ({}), ti = (l) => ({ id: (
  /*id*/
  l[5]
) });
function ni(l) {
  let e, t;
  return {
    c() {
      e = I("label"), t = $(
        /*label*/
        l[0]
      ), g(
        e,
        "for",
        /*id*/
        l[5]
      ), g(e, "class", "svelte-16h42zq");
    },
    m(n, i) {
      v(n, e, i), M(e, t);
    },
    p(n, i) {
      i & /*label*/
      1 && re(
        t,
        /*label*/
        n[0]
      );
    },
    d(n) {
      n && k(e);
    }
  };
}
function Vf(l) {
  let e, t, n, i, s, r, a, o = (
    /*label*/
    l[0] && ni(l)
  );
  const u = (
    /*#slots*/
    l[7].default
  ), f = be(
    u,
    l,
    /*$$scope*/
    l[6],
    ti
  );
  return {
    c() {
      e = I("div"), o && o.c(), t = H(), n = I("div"), f && f.c(), g(n, "class", i = "wx-field-control wx-" + /*type*/
      l[4] + " svelte-16h42zq"), g(e, "class", s = "wx-field wx-" + /*position*/
      l[1] + " svelte-16h42zq"), g(e, "style", r = /*width*/
      l[2] ? `width: ${/*width*/
      l[2]}` : ""), X(
        e,
        "wx-error",
        /*error*/
        l[3]
      );
    },
    m(c, d) {
      v(c, e, d), o && o.m(e, null), M(e, t), M(e, n), f && f.m(n, null), a = !0;
    },
    p(c, [d]) {
      /*label*/
      c[0] ? o ? o.p(c, d) : (o = ni(c), o.c(), o.m(e, t)) : o && (o.d(1), o = null), f && f.p && (!a || d & /*$$scope*/
      64) && we(
        f,
        u,
        c,
        /*$$scope*/
        c[6],
        a ? pe(
          u,
          /*$$scope*/
          c[6],
          d,
          jf
        ) : ke(
          /*$$scope*/
          c[6]
        ),
        ti
      ), (!a || d & /*type*/
      16 && i !== (i = "wx-field-control wx-" + /*type*/
      c[4] + " svelte-16h42zq")) && g(n, "class", i), (!a || d & /*position*/
      2 && s !== (s = "wx-field wx-" + /*position*/
      c[1] + " svelte-16h42zq")) && g(e, "class", s), (!a || d & /*width*/
      4 && r !== (r = /*width*/
      c[2] ? `width: ${/*width*/
      c[2]}` : "")) && g(e, "style", r), (!a || d & /*position, error*/
      10) && X(
        e,
        "wx-error",
        /*error*/
        c[3]
      );
    },
    i(c) {
      a || (b(f, c), a = !0);
    },
    o(c) {
      p(f, c), a = !1;
    },
    d(c) {
      c && k(e), o && o.d(), f && f.d(c);
    }
  };
}
function Uf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { label: s = "" } = e, { position: r = "" } = e, { width: a = "" } = e, { error: o = !1 } = e, { type: u = "" } = e, f = et();
  return l.$$set = (c) => {
    "label" in c && t(0, s = c.label), "position" in c && t(1, r = c.position), "width" in c && t(2, a = c.width), "error" in c && t(3, o = c.error), "type" in c && t(4, u = c.type), "$$scope" in c && t(6, i = c.$$scope);
  }, [s, r, a, o, u, f, i, n];
}
class lt extends ee {
  constructor(e) {
    super(), x(this, e, Uf, Vf, Z, {
      label: 0,
      position: 1,
      width: 2,
      error: 3,
      type: 4
    });
  }
}
function Kf(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[1].default
  ), r = be(
    s,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e = I("div"), t = I("div"), r && r.c(), g(t, "class", "wx-window svelte-1ki3q24"), g(e, "class", "wx-modal svelte-1ki3q24");
    },
    m(a, o) {
      v(a, e, o), M(e, t), r && r.m(t, null), i = !0;
    },
    p(a, [o]) {
      r && r.p && (!i || o & /*$$scope*/
      1) && we(
        r,
        s,
        a,
        /*$$scope*/
        a[0],
        i ? pe(
          s,
          /*$$scope*/
          a[0],
          o,
          null
        ) : ke(
          /*$$scope*/
          a[0]
        ),
        null
      );
    },
    i(a) {
      i || (b(r, a), a && ut(() => {
        i && (n || (n = yt(e, St, { duration: 100 }, !0)), n.run(1));
      }), i = !0);
    },
    o(a) {
      p(r, a), a && (n || (n = yt(e, St, { duration: 100 }, !1)), n.run(0)), i = !1;
    },
    d(a) {
      a && k(e), r && r.d(a), a && n && n.end();
    }
  };
}
function Bf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  return l.$$set = (s) => {
    "$$scope" in s && t(0, i = s.$$scope);
  }, [i, n];
}
class Wf extends ee {
  constructor(e) {
    super(), x(this, e, Bf, Kf, Z, {});
  }
}
const Yf = (l) => ({}), li = (l) => ({ mount: (
  /*mount*/
  l[1]
) });
function Gf(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[5].default
  ), r = be(
    s,
    l,
    /*$$scope*/
    l[4],
    li
  );
  return {
    c() {
      e = I("div"), t = I("div"), r && r.c(), g(t, "class", n = "wx-" + /*theme*/
      l[0] + "-theme svelte-1dixdmq"), g(e, "class", "wx-portal svelte-1dixdmq");
    },
    m(a, o) {
      v(a, e, o), M(e, t), r && r.m(t, null), l[6](t), i = !0;
    },
    p(a, [o]) {
      r && r.p && (!i || o & /*$$scope*/
      16) && we(
        r,
        s,
        a,
        /*$$scope*/
        a[4],
        i ? pe(
          s,
          /*$$scope*/
          a[4],
          o,
          Yf
        ) : ke(
          /*$$scope*/
          a[4]
        ),
        li
      ), (!i || o & /*theme*/
      1 && n !== (n = "wx-" + /*theme*/
      a[0] + "-theme svelte-1dixdmq")) && g(t, "class", n);
    },
    i(a) {
      i || (b(r, a), i = !0);
    },
    o(a) {
      p(r, a), i = !1;
    },
    d(a) {
      a && k(e), r && r.d(a), l[6](null);
    }
  };
}
function Jf(l) {
  for (; l !== document.body && !l.getAttribute("data-wx-portal-root"); )
    l = l.parentNode;
  return l;
}
function Qf(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, s, { theme: r = "" } = e, { target: a = void 0 } = e, o = [];
  const u = (c) => {
    o && o.push(c);
  };
  r === "" && (r = ye("wx-theme")), rt(() => {
    (a || Jf(s)).appendChild(s), o && o.forEach((d) => d());
  }), Hn(() => {
    s && s.parentNode && s.parentNode.removeChild(s);
  });
  function f(c) {
    fe[c ? "unshift" : "push"](() => {
      s = c, t(2, s);
    });
  }
  return l.$$set = (c) => {
    "theme" in c && t(0, r = c.theme), "target" in c && t(3, a = c.target), "$$scope" in c && t(4, i = c.$$scope);
  }, [r, u, s, a, i, n, f];
}
let oo = class extends ee {
  constructor(e) {
    super(), x(this, e, Qf, Gf, Z, { theme: 0, target: 3, mount: 1 });
  }
  get mount() {
    return this.$$.ctx[1];
  }
};
function Xf(l) {
  let e, t = `<style>
@font-face {
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
src: local(''),
    url('https://cdn.webix.com/fonts/roboto/regular.woff2') format('woff2'),
    url('https://cdn.webix.com/fonts/roboto/regular.woff') format('woff');
}
@font-face {
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
src: local(''),
    url('https://cdn.webix.com/fonts/roboto/500.woff2') format('woff2'),
    url('https://cdn.webix.com/fonts/roboto/500.woff') format('woff');
}
</style>`, n;
  return {
    c() {
      e = new dn(!1), n = se(), e.a = n;
    },
    m(i, s) {
      e.m(t, i, s), v(i, n, s);
    },
    p: K,
    i: K,
    o: K,
    d(i) {
      i && (k(n), e.d());
    }
  };
}
class Zf extends ee {
  constructor(e) {
    super(), x(this, e, null, Xf, Z, {});
  }
}
function $f(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[3].default
  ), i = be(
    n,
    l,
    /*$$scope*/
    l[2],
    null
  );
  return {
    c() {
      e = I("div"), i && i.c(), g(e, "class", "wx-material-theme"), ce(e, "height", "100%");
    },
    m(s, r) {
      v(s, e, r), i && i.m(e, null), t = !0;
    },
    p(s, r) {
      i && i.p && (!t || r & /*$$scope*/
      4) && we(
        i,
        n,
        s,
        /*$$scope*/
        s[2],
        t ? pe(
          n,
          /*$$scope*/
          s[2],
          r,
          null
        ) : ke(
          /*$$scope*/
          s[2]
        ),
        null
      );
    },
    i(s) {
      t || (b(i, s), t = !0);
    },
    o(s) {
      p(i, s), t = !1;
    },
    d(s) {
      s && k(e), i && i.d(s);
    }
  };
}
function ii(l) {
  let e, t, n, i, s, r;
  return n = new Zf({}), {
    c() {
      e = I("link"), t = H(), N(n.$$.fragment), i = H(), s = I("link"), g(e, "rel", "preconnect"), g(e, "href", "https://cdn.webix.com"), g(e, "crossorigin", ""), g(s, "rel", "stylesheet"), g(s, "href", "https://webix.io/dev/fonts/wxi/wx-icons.css");
    },
    m(a, o) {
      v(a, e, o), v(a, t, o), R(n, a, o), v(a, i, o), v(a, s, o), r = !0;
    },
    i(a) {
      r || (b(n.$$.fragment, a), r = !0);
    },
    o(a) {
      p(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && (k(e), k(t), k(i), k(s)), A(n, a);
    }
  };
}
function xf(l) {
  let e, t, n, i = (
    /*SLOTS*/
    l[1] && /*SLOTS*/
    l[1].default && $f(l)
  ), s = (
    /*fonts*/
    l[0] && ii()
  );
  return {
    c() {
      i && i.c(), e = H(), s && s.c(), t = se();
    },
    m(r, a) {
      i && i.m(r, a), v(r, e, a), s && s.m(document.head, null), M(document.head, t), n = !0;
    },
    p(r, [a]) {
      /*SLOTS*/
      r[1] && /*SLOTS*/
      r[1].default && i.p(r, a), /*fonts*/
      r[0] ? s ? a & /*fonts*/
      1 && b(s, 1) : (s = ii(), s.c(), b(s, 1), s.m(t.parentNode, t)) : s && (W(), p(s, 1, 1, () => {
        s = null;
      }), Y());
    },
    i(r) {
      n || (b(i), b(s), n = !0);
    },
    o(r) {
      p(i), p(s), n = !1;
    },
    d(r) {
      r && k(e), i && i.d(r), s && s.d(r), k(t);
    }
  };
}
function ec(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { fonts: s = !0 } = e;
  const r = e.$$slots;
  return ht("wx-theme", "material"), l.$$set = (a) => {
    t(4, e = Ce(Ce({}, e), We(a))), "fonts" in a && t(0, s = a.fonts), "$$scope" in a && t(2, i = a.$$scope);
  }, e = We(e), [s, r, i, n];
}
class ao extends ee {
  constructor(e) {
    super(), x(this, e, ec, xf, Z, { fonts: 0 });
  }
}
function tc(l) {
  let e, t = `<style>
@font-face {
font-family: 'Open Sans';
font-style: normal;
font-weight: 500;
src: local(''),
      url('https://cdn.webix.com/fonts/open-sans/500.woff2') format('woff2'),
      url('https://cdn.webix.com/fonts/open-sans/500.woff') format('woff');
}
@font-face {
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
src: local(''),
      url('https://cdn.webix.com/fonts/open-sans/regular.woff2') format('woff2'),
      url('https://cdn.webix.com/fonts/open-sans/regular.woff') format('woff');
}
@font-face {
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
src: local(''),
      url('https://cdn.webix.com/fonts/open-sans/600.woff2') format('woff2'),
      url('https://cdn.webix.com/fonts/open-sans/600.woff') format('woff');
}
@font-face {
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
src: local(''),
      url('https://cdn.webix.com/fonts/open-sans/700.woff2') format('woff2'),
      url('https://cdn.webix.com/fonts/open-sans/700.woff') format('woff');
}
  </style>`, n;
  return {
    c() {
      e = new dn(!1), n = se(), e.a = n;
    },
    m(i, s) {
      e.m(t, i, s), v(i, n, s);
    },
    p: K,
    i: K,
    o: K,
    d(i) {
      i && (k(n), e.d());
    }
  };
}
class uo extends ee {
  constructor(e) {
    super(), x(this, e, null, tc, Z, {});
  }
}
function nc(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[3].default
  ), i = be(
    n,
    l,
    /*$$scope*/
    l[2],
    null
  );
  return {
    c() {
      e = I("div"), i && i.c(), g(e, "class", "wx-willow-theme"), ce(e, "height", "100%");
    },
    m(s, r) {
      v(s, e, r), i && i.m(e, null), t = !0;
    },
    p(s, r) {
      i && i.p && (!t || r & /*$$scope*/
      4) && we(
        i,
        n,
        s,
        /*$$scope*/
        s[2],
        t ? pe(
          n,
          /*$$scope*/
          s[2],
          r,
          null
        ) : ke(
          /*$$scope*/
          s[2]
        ),
        null
      );
    },
    i(s) {
      t || (b(i, s), t = !0);
    },
    o(s) {
      p(i, s), t = !1;
    },
    d(s) {
      s && k(e), i && i.d(s);
    }
  };
}
function si(l) {
  let e, t, n, i, s, r;
  return n = new uo({}), {
    c() {
      e = I("link"), t = H(), N(n.$$.fragment), i = H(), s = I("link"), g(e, "rel", "preconnect"), g(e, "href", "https://cdn.webix.com"), g(e, "crossorigin", ""), g(s, "rel", "stylesheet"), g(s, "href", "https://webix.io/dev/fonts/wxi/wx-icons.css");
    },
    m(a, o) {
      v(a, e, o), v(a, t, o), R(n, a, o), v(a, i, o), v(a, s, o), r = !0;
    },
    i(a) {
      r || (b(n.$$.fragment, a), r = !0);
    },
    o(a) {
      p(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && (k(e), k(t), k(i), k(s)), A(n, a);
    }
  };
}
function lc(l) {
  let e, t, n, i = (
    /*SLOTS*/
    l[1] && /*SLOTS*/
    l[1].default && nc(l)
  ), s = (
    /*fonts*/
    l[0] && si()
  );
  return {
    c() {
      i && i.c(), e = H(), s && s.c(), t = se();
    },
    m(r, a) {
      i && i.m(r, a), v(r, e, a), s && s.m(document.head, null), M(document.head, t), n = !0;
    },
    p(r, [a]) {
      /*SLOTS*/
      r[1] && /*SLOTS*/
      r[1].default && i.p(r, a), /*fonts*/
      r[0] ? s ? a & /*fonts*/
      1 && b(s, 1) : (s = si(), s.c(), b(s, 1), s.m(t.parentNode, t)) : s && (W(), p(s, 1, 1, () => {
        s = null;
      }), Y());
    },
    i(r) {
      n || (b(i), b(s), n = !0);
    },
    o(r) {
      p(i), p(s), n = !1;
    },
    d(r) {
      r && k(e), i && i.d(r), s && s.d(r), k(t);
    }
  };
}
function ic(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { fonts: s = !0 } = e;
  const r = e.$$slots;
  return ht("wx-theme", "willow"), l.$$set = (a) => {
    t(4, e = Ce(Ce({}, e), We(a))), "fonts" in a && t(0, s = a.fonts), "$$scope" in a && t(2, i = a.$$scope);
  }, e = We(e), [s, r, i, n];
}
class fo extends ee {
  constructor(e) {
    super(), x(this, e, ic, lc, Z, { fonts: 0 });
  }
}
function sc(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[3].default
  ), i = be(
    n,
    l,
    /*$$scope*/
    l[2],
    null
  );
  return {
    c() {
      e = I("div"), i && i.c(), g(e, "class", "wx-willow-dark-theme"), ce(e, "height", "100%");
    },
    m(s, r) {
      v(s, e, r), i && i.m(e, null), t = !0;
    },
    p(s, r) {
      i && i.p && (!t || r & /*$$scope*/
      4) && we(
        i,
        n,
        s,
        /*$$scope*/
        s[2],
        t ? pe(
          n,
          /*$$scope*/
          s[2],
          r,
          null
        ) : ke(
          /*$$scope*/
          s[2]
        ),
        null
      );
    },
    i(s) {
      t || (b(i, s), t = !0);
    },
    o(s) {
      p(i, s), t = !1;
    },
    d(s) {
      s && k(e), i && i.d(s);
    }
  };
}
function ri(l) {
  let e, t, n, i, s, r;
  return n = new uo({}), {
    c() {
      e = I("link"), t = H(), N(n.$$.fragment), i = H(), s = I("link"), g(e, "rel", "preconnect"), g(e, "href", "https://cdn.webix.com"), g(e, "crossorigin", ""), g(s, "rel", "stylesheet"), g(s, "href", "https://webix.io/dev/fonts/wxi/wx-icons.css");
    },
    m(a, o) {
      v(a, e, o), v(a, t, o), R(n, a, o), v(a, i, o), v(a, s, o), r = !0;
    },
    i(a) {
      r || (b(n.$$.fragment, a), r = !0);
    },
    o(a) {
      p(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && (k(e), k(t), k(i), k(s)), A(n, a);
    }
  };
}
function rc(l) {
  let e, t, n, i = (
    /*SLOTS*/
    l[1] && /*SLOTS*/
    l[1].default && sc(l)
  ), s = (
    /*fonts*/
    l[0] && ri()
  );
  return {
    c() {
      i && i.c(), e = H(), s && s.c(), t = se();
    },
    m(r, a) {
      i && i.m(r, a), v(r, e, a), s && s.m(document.head, null), M(document.head, t), n = !0;
    },
    p(r, [a]) {
      /*SLOTS*/
      r[1] && /*SLOTS*/
      r[1].default && i.p(r, a), /*fonts*/
      r[0] ? s ? a & /*fonts*/
      1 && b(s, 1) : (s = ri(), s.c(), b(s, 1), s.m(t.parentNode, t)) : s && (W(), p(s, 1, 1, () => {
        s = null;
      }), Y());
    },
    i(r) {
      n || (b(i), b(s), n = !0);
    },
    o(r) {
      p(i), p(s), n = !1;
    },
    d(r) {
      r && k(e), i && i.d(r), s && s.d(r), k(t);
    }
  };
}
function oc(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { fonts: s = !0 } = e;
  const r = e.$$slots;
  return ht("wx-theme", "willow-dark"), l.$$set = (a) => {
    t(4, e = Ce(Ce({}, e), We(a))), "fonts" in a && t(0, s = a.fonts), "$$scope" in a && t(2, i = a.$$scope);
  }, e = We(e), [s, r, i, n];
}
class co extends ee {
  constructor(e) {
    super(), x(this, e, oc, rc, Z, { fonts: 0 });
  }
}
const ac = {
  monthFull: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  dayFull: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  hours: "Hours",
  minutes: "Minutes",
  done: "Done",
  clear: "Clear",
  today: "Today",
  am: ["am", "AM"],
  pm: ["pm", "PM"],
  weekStart: 7,
  clockFormat: 24
}, uc = {
  ok: "OK",
  cancel: "Cancel"
}, fc = {
  timeFormat: "%H:%i",
  dateFormat: "%m/%d/%Y"
}, cc = {
  core: uc,
  calendar: ac,
  formats: fc
};
function dc(l) {
  let e;
  const t = (
    /*#slots*/
    l[3].default
  ), n = be(
    t,
    l,
    /*$$scope*/
    l[2],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, s) {
      n && n.m(i, s), e = !0;
    },
    p(i, [s]) {
      n && n.p && (!e || s & /*$$scope*/
      4) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[2],
        e ? pe(
          t,
          /*$$scope*/
          i[2],
          s,
          null
        ) : ke(
          /*$$scope*/
          i[2]
        ),
        null
      );
    },
    i(i) {
      e || (b(n, i), e = !0);
    },
    o(i) {
      p(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function mc(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { words: s = null } = e, { optional: r = !1 } = e, a = ye("wx-i18n");
  return a || (a = io(cc)), a = a.extend(s, r), ht("wx-i18n", a), l.$$set = (o) => {
    "words" in o && t(0, s = o.words), "optional" in o && t(1, r = o.optional), "$$scope" in o && t(2, i = o.$$scope);
  }, [s, r, i, n];
}
let mo = class extends ee {
  constructor(e) {
    super(), x(this, e, mc, dc, Z, { words: 0, optional: 1 });
  }
};
const bt = [];
function Un(l, e = K) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(a) {
    if (Z(l, a) && (l = a, t)) {
      const o = !bt.length;
      for (const u of n)
        u[1](), bt.push(u, l);
      if (o) {
        for (let u = 0; u < bt.length; u += 2)
          bt[u][0](bt[u + 1]);
        bt.length = 0;
      }
    }
  }
  function s(a) {
    i(a(l));
  }
  function r(a, o = K) {
    const u = [a, o];
    return n.add(u), n.size === 1 && (t = e(i, s) || K), a(l), () => {
      n.delete(u), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: s, subscribe: r };
}
let _o = (/* @__PURE__ */ new Date()).valueOf();
const Kn = () => _o++;
function Dt() {
  return "temp://" + _o++;
}
const ho = 2;
class _c {
  constructor(e) {
    e && (this._writable = e.writable, this._async = e.async), this._values = {}, this._state = {};
  }
  setState(e, t = 0) {
    const n = {};
    return this._wrapProperties(e, this._state, this._values, "", n, t), n;
  }
  getState() {
    return this._values;
  }
  getReactive() {
    return this._state;
  }
  _wrapProperties(e, t, n, i, s, r) {
    for (const a in e) {
      const o = t[a], u = n[a], f = e[a];
      if (o && (u === f && typeof f != "object" || f instanceof Date && u instanceof Date && u.getTime() === f.getTime()))
        continue;
      const c = i + (i ? "." : "") + a;
      o ? (o.__parse(f, c, s, r) && (n[a] = f), r & ho ? s[c] = o.__trigger : o.__trigger()) : (f && f.__reactive ? t[a] = this._wrapNested(f, f, c, s) : t[a] = this._wrapWritable(f), n[a] = f), s[c] = s[c] || null;
    }
  }
  _wrapNested(e, t, n, i) {
    const s = this._wrapWritable(e);
    return this._wrapProperties(e, s, t, n, i, 0), s.__parse = (r, a, o, u) => (this._wrapProperties(r, s, t, a, o, u), !1), s;
  }
  _wrapWritable(e) {
    const t = [], n = function() {
      for (let i = 0; i < t.length; i++)
        t[i](e);
    };
    return { subscribe: (i) => (t.push(i), this._async ? setTimeout(i, 1, e) : i(e), () => {
      const s = t.indexOf(i);
      s >= 0 && t.splice(s, 1);
    }), __trigger: () => {
      t.length && (this._async ? setTimeout(n, 1) : n());
    }, __parse: function(i) {
      return e = i, !0;
    } };
  }
}
class hc {
  constructor(e, t, n, i) {
    typeof e == "function" ? this._setter = e : this._setter = e.setState.bind(e), this._routes = t, this._parsers = n, this._prev = {}, this._triggers = /* @__PURE__ */ new Map(), this._sources = /* @__PURE__ */ new Map(), this._routes.forEach((s) => {
      s.in.forEach((r) => {
        const a = this._triggers.get(r) || [];
        a.push(s), this._triggers.set(r, a);
      }), s.out.forEach((r) => {
        const a = this._sources.get(r) || {};
        s.in.forEach((o) => a[o] = !0), this._sources.set(r, a);
      });
    }), this._routes.forEach((s) => {
      s.length = Math.max(...s.in.map((r) => go(r, this._sources, 1)));
    }), this._bus = i;
  }
  init(e) {
    const t = {};
    for (const n in e)
      if (this._prev[n] !== e[n]) {
        const i = this._parsers[n];
        t[n] = i ? i(e[n]) : e[n];
      }
    this._prev = this._prev ? { ...this._prev, ...e } : { ...e }, this.setState(t), this._bus && this._bus.exec("init-state", t);
  }
  setStateAsync(e) {
    const t = this._setter(e, ho);
    return this._async ? Object.assign(this._async.signals, t) : this._async = { signals: t, timer: setTimeout(this._applyState.bind(this), 1) }, t;
  }
  _applyState() {
    const e = this._async;
    if (e) {
      this._async = null, this._triggerUpdates(e.signals, []);
      for (const t in e.signals) {
        const n = e.signals[t];
        n && n();
      }
    }
  }
  setState(e, t = []) {
    const n = this._setter(e);
    return this._triggerUpdates(n, t), n;
  }
  _triggerUpdates(e, t) {
    const n = Object.keys(e), i = !t.length;
    t = t || [];
    for (let s = 0; s < n.length; s++) {
      const r = n[s], a = this._triggers.get(r);
      a && a.forEach((o) => {
        t.indexOf(o) == -1 && t.push(o);
      });
    }
    i && this._execNext(t);
  }
  _execNext(e) {
    for (; e.length; ) {
      e.sort((n, i) => n.length < i.length ? 1 : -1);
      const t = e[e.length - 1];
      e.splice(e.length - 1), t.exec(e);
    }
  }
}
function go(l, e, t) {
  const n = e.get(l);
  if (!n)
    return t;
  const i = Object.keys(n).map((s) => go(s, e, t + 1));
  return Math.max(...i);
}
class oi {
  constructor() {
    this._nextHandler = null, this._handlers = {}, this._tag = /* @__PURE__ */ new WeakMap(), this.exec = this.exec.bind(this);
  }
  on(e, t, n) {
    let i = this._handlers[e];
    i ? n && n.intercept ? i.unshift(t) : i.push(t) : i = this._handlers[e] = [t], n && n.tag && this._tag.set(t, n.tag);
  }
  intercept(e, t, n) {
    this.on(e, t, { ...n, intercept: !0 });
  }
  detach(e) {
    for (const t in this._handlers) {
      const n = this._handlers[t];
      for (let i = n.length - 1; i >= 0; i--)
        this._tag.get(n[i]) === e && n.splice(i, 1);
    }
  }
  async exec(e, t) {
    const n = this._handlers[e];
    if (n)
      for (let i = 0; i < n.length; i++) {
        const s = n[i](t);
        if (s === !1 || s && s.then && await s === !1)
          return;
      }
    return this._nextHandler && await this._nextHandler.exec(e, t), t;
  }
  setNext(e) {
    return this._nextHandler = e;
  }
}
let bo;
function gc() {
  if (typeof window > "u")
    return !0;
  const l = location.hostname, e = ["c3Zhci5kZXY=", "cmVhY3Qtd2lkZ2V0cy5jb20=", "c3ZlbHRlLXdpZGdldHMuY29t", "dnVlLXdpZGdldHMuY29t", "YW5ndWxhci13aWRnZXRzLmNvbQ==", "ZGh0bWx4LmNvbQ==", "ZGh0bWx4Y29kZS5jb20=", "d2ViaXhjb2RlLmNvbQ==", "d2ViaXguaW8=", "cmVwbC5jbw==", "Y3NiLmFwcA==", "cmVwbGl0LmRldg=="];
  for (let t = 0; t < e.length; t++) {
    const n = window.atob(e[t]);
    if (n === l || l.endsWith("." + n))
      return !0;
  }
  return !1;
}
bo = gc();
function po() {
  return bo;
}
function wo() {
  return (/* @__PURE__ */ new Date()).valueOf() > Math.imul(0x00681DCE, 1) * 256e3;
}
function bc(l) {
  po() || setTimeout(function() {
    if (typeof window < "u" && wo()) {
      const e = window.atob("IFlvdXIgdHJpYWwgaGFzIGV4cGlyZWQuIFBsZWFzZSBwdXJjaGFzZSB0aGUgY29tbWVyY2lhbCBsaWNlbnNlIGZvciB0aGUgS2FuYmFuIHdpZGdldCBhdCBodHRwczovL2RodG1seC5jb20="), { columns: t } = l.getState();
      t.forEach((n) => n.label += e), l.setState({ columns: t });
    }
  }, 36e3);
}
const pc = [{ id: 1, color: "#FE6158", label: "High" }, { id: 2, color: "#F1B941", label: "Medium" }, { id: 3, color: "#77D257", label: "Low" }], wc = ["#33B0B4", "#0096FA", "#F1B941"], Xt = { label: { show: !0 }, description: { show: !1 }, progress: { show: !1 }, start_date: { show: !1 }, end_date: { show: !1 }, users: { show: !1 }, priority: { show: !1, values: pc }, color: { show: !1, values: wc }, cover: { show: !1 }, attached: { show: !1 }, menu: { show: !0 } }, ko = [{ key: "label", type: "text", label: "Label" }, { key: "description", type: "textarea", label: "Description" }, { type: "combo", label: "Priority", key: "priority", config: { clearButton: !0 } }, { type: "color", label: "Color", key: "color" }, { type: "progress", key: "progress", label: "Progress" }, { type: "date", key: "start_date", label: "Start date" }, { type: "date", key: "end_date", label: "End date" }, { type: "multiselect", key: "users", label: "Users" }], qt = { debounce: 100, autoSave: !0, placement: "sidebar" }, Ze = { kanban: "wx-kanban", toolbar: "wx-kanban-toolbar", editor: "wx-kanban-editor", content: "wx-kanban-content", scrollableContent: "wx-kanban-scrollable-content", search: "wx-kanban-search", vote: "wx-vote-card-button" }, kc = () => [{ by: "label", dir: "asc", text: "Label (a-z)", id: 7 }, { by: "label", dir: "desc", text: "Label (z-a)", id: 8 }, { by: "description", dir: "asc", text: "Description (a-z)", id: 9 }, { by: "description", dir: "desc", text: "Description (z-a)", id: 10 }], vc = ({ store: l }) => {
  const { readonly: e } = l.getState(), t = [{ id: "duplicate-card", icon: "wxi-content-copy", text: "Duplicate" }, { id: "delete-card", icon: "wxi-delete-outline", text: "Delete" }];
  return !e?.select && e?.edit ? [{ id: "set-edit", icon: "wxi-edit-outline", text: "Edit" }, ...t] : t;
}, yc = ({ columns: l, columnIndex: e }) => [{ id: "add-card", icon: "wxi-plus", text: "Add new card" }, { id: "set-edit", icon: "wxi-edit-outline", text: "Rename" }, { id: "move-column:left", icon: "wxi-arrow-left", text: "Move left", disabled: e <= 0 }, { id: "move-column:right", icon: "wxi-arrow-right", text: "Move right", disabled: e >= l.length - 1 }, { id: "delete-column", icon: "wxi-delete-outline", text: "Delete" }], Sc = ({ rows: l, rowIndex: e }) => [{ id: "set-edit", icon: "wxi-edit-outline", text: "Rename" }, { id: "move-row:up", icon: "wxi-arrow-up", text: "Move up", disabled: e <= 0 }, { id: "move-row:down", icon: "wxi-arrow-down", text: "Move down", disabled: e >= l.length - 1 }, { id: "delete-row", icon: "wxi-delete-outline", text: "Delete" }];
function ie(l, e) {
  return !l || !e ? !1 : l == e;
}
function _t(l, e) {
  return !!l?.find((t) => ie(t, e));
}
function Cc(l) {
  return Object.keys(l.cardsMap).reduce((e, t) => e.concat(l.cardsMap[t]), []);
}
function ze(l, e) {
  return `${l}` + (e ? `:${e}` : "");
}
function vo(l) {
  return l.split(/(?<!temp):(?!\/\/)/);
}
function rn(l, e, t) {
  return t ? l[e] + ":" + l[t] : l[e];
}
function Ic(l, e, t = { shift: 20 }) {
  let n = null;
  function i() {
    if (e) {
      const s = e.getBoundingClientRect(), r = { x: e.scrollLeft, y: e.scrollTop }, { shift: a } = t;
      l.clientX > s.width + s.left - a && e.scrollTo(r.x + a, r.y), l.clientX < s.left + a && e.scrollTo(r.x - a, r.y), l.clientY > s.height + s.top - a && e.scrollTo(r.x, r.y + a), l.clientY < s.top + a && e.scrollTo(r.x, r.y - a), n = setTimeout(() => {
        i();
      }, 100);
    }
  }
  return i(), () => {
    n && clearTimeout(n);
  };
}
function wn(l) {
  const { shape: e, defaultMenuItems: t, store: n } = l, i = e || {};
  if (i.menu === !1)
    return { menu: { show: !1, items: () => !1 } };
  if (i.menu ||= {}, i.menu === !0 && (i.menu = { show: !0 }), typeof i.menu == "object") {
    if (Array.isArray(i.menu.items)) {
      const r = [...i.menu.items];
      i.menu.items = () => r;
    }
    const s = i.menu.items || t;
    i.menu.items = (r) => {
      let a = s({ ...r, store: n });
      return a && (a = yo(a)), a;
    }, i.menu.show ??= !0;
  }
  return i;
}
function yo(l) {
  return l.map((e) => {
    const t = { ...e };
    return e.items && (t.data = e.items), t.data && (t.data = yo(t.data)), e.label && (t.text = e.label), t;
  });
}
function Ut(l, e) {
  const { cards: t, columnKey: n, sort: i } = l;
  if (!i)
    return t;
  const s = t.reduce((a, o) => (a[o[n]] = a[o[n]] || [], a[o[n]].push(o), a), {}), r = (a, o) => `${typeof o == "function" ? o(a) : a[o]}`;
  return Object.keys(s).forEach((a) => {
    let o;
    "columns" in i ? o = i.columns[a] || {} : o = i, o.by && (e = e || ((u) => {
      const { dir: f } = u, c = u.by;
      return (d, m) => {
        const _ = r(d, c), h = r(m, c);
        return f === "desc" ? h.localeCompare(_, void 0, { numeric: !0 }) : _.localeCompare(h, void 0, { numeric: !0 });
      };
    }), s[a].sort(e(o)));
  }), Object.values(s).flat();
}
function Mc(l, e) {
  return (l || ko.filter((t) => e[t.key]?.show)).map((t) => {
    const n = e[t.key];
    return n && typeof t.key == "string" && (n.values && !t.values && (t.values = n.values), t.config && (n.config = t.config)), (t.type === "comments" || t.key === "users" && (t.type === "multiselect" || t.type === "combo")) && t.values && t.values.forEach(So), t.id = t.id || Kn(), t;
  });
}
let Tc = 0;
function Dc(l) {
  return l.users?.values && l.users.values.forEach(So), l;
}
function So(l) {
  if (!l.id)
    throw "Please provide user IDs";
  return !l.avatar && !l.avatarColor && (l.avatarColor = ["#00D19A", "#2F77E3", "#FFC975"][Math.floor(Tc++ % 3)]), l;
}
function Co(l, e) {
  const { id: t, before: n, columnId: i, rowId: s } = e, r = l.getState(), { areasMeta: a, cards: o, cardsMap: u, columns: f, columnKey: c, rowKey: d, sort: m } = r, _ = o.findIndex((L) => ie(L.id, t));
  if (_ < 0 || !u[ze(i, s)] || ie(t, n))
    return;
  const h = o[_];
  if (typeof f.find((L) => ie(L.id, i)).limit == "object") {
    const L = ze(i, s), P = L === rn(h, c, d);
    if (a[L].noFreeSpace && !P)
      return;
  } else {
    const L = ie(i, h[c]);
    if (a[i].noFreeSpace && !L)
      return;
  }
  const w = o.splice(_, 1)[0], y = { ...w }, S = u[rn(y, c, d)] || [], C = S.findIndex((L) => ie(L.id, t)) || 0, T = S[C + 1] || {};
  if (w[c] = i, d && s && (w[d] = s), !n)
    o.push(w);
  else {
    const L = o.findIndex((P) => ie(P.id, n));
    o.splice(L, 0, w);
  }
  return l.setState({ cards: m ? Ut({ ...r, cards: o }, l.sortRule) : o }), () => {
    const L = y[c], P = d && y[d];
    l.in.exec("move-card", { id: t, before: T.id, columnId: L, rowId: P, $meta: { skipHistory: !0 } });
  };
}
function Ec(l, e) {
  const t = e.card || {}, n = e.id || t.id || Dt(), i = l.getState(), { columnKey: s, rowKey: r, areasMeta: a, cards: o, columns: u, rows: f, sort: c } = i, d = e.rowId || r && t[r] || f[0].id;
  d && !e.rowId && (e.rowId = d);
  const m = e.columnId || t[s] || u[0].id;
  if (typeof u.find((h) => ie(h.id, m)).limit == "object") {
    if (a[ze(m, d)].noFreeSpace)
      return !1;
  } else if (a[m].noFreeSpace)
    return !1;
  const _ = { [s]: m, id: n, ...t };
  return r && (_[r] = d), o.push(_), l.setState({ cards: c ? Ut({ ...i, cards: o }, l.sortRule) : o }), e.before && Co(l, { ...e, id: n }), e.select !== !1 && l.in.exec("select-card", { id: n }), e.card = _, e.id = n, () => {
    l.in.exec("delete-card", { id: n, $meta: { skipHistory: !0 } });
  };
}
function Lc(l, { id: e, card: t, replace: n }) {
  const i = l.getState();
  let s, r = i.cards.map((a) => ie(a.id, e) ? (s = { ...a }, n ? { id: e, ...t } : { ...a, ...t }) : a);
  return i.sort && (r = Ut({ ...i, cards: r }, l.sortRule)), l.setState({ cards: r }), () => {
    l.in.exec("update-card", { id: e, card: s, replace: !0, $meta: { skipHistory: !0 } });
  };
}
function Rc(l, { id: e, card: t, select: n }) {
  const { cards: i, columnKey: s } = l.getState(), r = i.find((a) => ie(a.id, e));
  if (r) {
    const a = { ...r, id: Dt(), ...t || {} };
    l.in.exec("add-card", { columnId: a[s], before: e, card: a, select: n });
  }
}
function Ac(l, { id: e }) {
  const t = l.getState();
  t.selected?.includes(e) && l.in.exec("unselect-card", { id: e });
  const n = t.cards.findIndex((a) => ie(a.id, e)), i = t.cards[n], s = t.cards[n + 1]?.id, r = t.cards.filter((a) => !ie(a.id, e));
  return l.setState({ cards: r }), () => {
    l.in.exec("add-card", { columnId: i[t.columnKey], before: s, card: i, $meta: { skipHistory: !0, restore: e } });
  };
}
function Io(l, { id: e, before: t }) {
  const { columns: n } = l.getState(), i = n.findIndex((a) => ie(a.id, e)), s = n[i + 1]?.id, r = n.splice(i, 1)[0];
  if (t) {
    const a = n.findIndex((o) => ie(o.id, t));
    n.splice(a, 0, r);
  } else
    n.push(r);
  return l.setState({ columns: n }), () => {
    l.in.exec("move-column", { id: e, before: s, $meta: { skipHistory: !0 } });
  };
}
function Pc(l, e) {
  const t = e.id || e.column?.id || Dt(), n = l.getState().columns, i = { id: t, label: "Untitled", ...e.column || {} };
  return n.push(i), l.setState({ columns: n }), e.before && Io(l, { ...e, id: t }), l.in.exec("scroll", { to: "column", id: t }), e.id = t, e.column = i, () => {
    l.in.exec("delete-column", { id: t, $meta: { skipHistory: !0 } });
  };
}
function Nc(l, e) {
  const t = l.getState();
  let n;
  const i = e.id || e.column?.id, s = t.columns.map((r) => ie(r.id, i) ? (n = { ...r }, e.replace ? { id: i, ...e.column } : { ...r, ...e.column }) : r);
  return l.setState({ columns: s }), () => {
    l.in.exec("update-column", { column: n, replace: !0, $meta: { skipHistory: !0 } });
  };
}
function zc(l, { id: e }) {
  if (e) {
    const t = l.getState(), n = t.columns.findIndex((a) => ie(a.id, e)), i = t.columns[n], s = t.columns[n + 1]?.id, r = t.columns.filter((a) => !ie(a.id, e));
    return l.setState({ columns: r }), () => {
      l.in.exec("add-column", { column: i, before: s, $meta: { skipHistory: !0, restore: e } });
    };
  }
}
function Mo(l, { id: e, before: t }) {
  const { rows: n, rowKey: i } = l.getState();
  if (!i)
    return;
  const s = n.findIndex((o) => ie(o.id, e)), r = n[s + 1]?.id, a = n.splice(s, 1)[0];
  if (t) {
    const o = n.findIndex((u) => ie(u.id, t));
    n.splice(o, 0, a);
  } else
    n.push(a);
  return l.setState({ rows: n }), () => {
    l.in.exec("move-row", { id: e, before: r, $meta: { skipHistory: !0 } });
  };
}
function Hc(l, e) {
  const t = l.getState(), n = t.rows, i = e.id || e.row?.id || Dt(), s = { id: i, label: "Untitled", collapsed: !1, ...e.row || {} };
  if (n.push(s), !t.rowKey) {
    const r = t.rowKey = "rowKey";
    t.rows[0] = { id: "default", label: "Untitled" }, t.cards.map((a) => {
      a[r] = "default";
    });
  }
  return l.setState({ rows: n, rowKey: t.rowKey }), e.before && Mo(l, { id: i, before: e.before }), l.in.exec("scroll", { to: "row", id: i }), e.id = i, e.row = s, () => {
    l.in.exec("delete-row", { id: i, $meta: { skipHistory: !0 } });
  };
}
function Oc(l, e) {
  const t = l.getState();
  let n;
  const i = e.id || e.row?.id, s = t.rows.map((r) => ie(r.id, i) ? (n = { ...r }, e.replace ? { id: i, ...e.row } : { ...r, ...e.row }) : r);
  return l.setState({ rows: s }), () => {
    l.in.exec("update-row", { row: n, replace: !0, $meta: { skipHistory: !0 } });
  };
}
function Fc(l, { id: e }) {
  if (e) {
    const t = l.getState(), { rows: n } = t, i = n.findIndex((a) => ie(a.id, e)), s = n[i], r = n[i + 1]?.id;
    return n.splice(i, 1), l.setState({ rows: n }), () => {
      l.in.exec("add-row", { row: s, before: r, $meta: { skipHistory: !0, restore: e } });
    };
  }
}
function qc(l, { id: e, columnId: t, rowId: n, before: i, source: s, dragItemsCoords: r, dropAreasCoords: a }) {
  const { areasMeta: o, cardsMeta: u, layout: f } = l.getState();
  a?.forEach((d) => {
    d.id && (o[d.id].height = f !== "default:lazy" ? d.height : null);
  }), [...s].forEach((d) => {
    const m = u[d] || {};
    m.dragging = !0, u[d] = m;
  });
  const c = ze(t, n);
  l.setState({ dragItemId: e, dragItemsCoords: r, overAreaId: c, before: i, areasMeta: o, cardsMeta: u });
}
function jc(l, e) {
  const { rowId: t, columnId: n, before: i } = e;
  if (!n)
    return;
  const { areasMeta: s, cards: r, columns: a, rowKey: o } = l.getState(), u = r.find((m) => ie(m.id, e.source[e.source.length - 1])), f = ze(n, t), c = a.find((m) => ie(m.id, n));
  let d;
  typeof c.limit == "object" ? d = !s[f].noFreeSpace || ie(f, ze(u.column, u[o])) : d = !s[n].noFreeSpace || ie(n, u.column), d && l.setState({ overAreaId: d ? f : null, before: i });
}
function Vc(l, { id: e, columnId: t, rowId: n, before: i, source: s }) {
  if (!t)
    return;
  const r = { dragItemsCoords: null, dragItemId: null, before: null, overAreaId: null, areasMeta: {} }, { areasMeta: a, cardsMeta: o } = l.getState(), u = ze(t, n);
  if (u && e) {
    const c = a[u], { columnId: d, rowId: m } = c;
    if (s.length > 1) {
      const _ = Kn();
      s.forEach((h) => {
        l.in.exec("move-card", { id: h, columnId: d, rowId: m, before: i, $meta: { batch: _ } });
        const w = o[h];
        w && (w.dragging = !1);
      });
    } else {
      l.in.exec("move-card", { id: e, columnId: d, rowId: m, before: i });
      const _ = o[e];
      _ && (_.dragging = !1);
    }
  }
  r.cardsMeta = o;
  const f = l.getState().areasMeta;
  Object.keys(f).forEach((c) => {
    r.areasMeta[c] = { ...f[c], height: null };
  }), l.setState(r);
}
function Uc(l, { id: e, groupMode: t, eventSource: n }) {
  const { selected: i, search: s } = l.getState();
  if (e) {
    let r = null;
    if (t)
      if (r = i ? [...i] : [], r.includes(e)) {
        l.in.exec("unselect-card", { id: e });
        return;
      } else
        r.push(e);
    else
      r = [e];
    s && l.in.exec("set-search", { value: null }), l.setState({ selected: r }), r.length > 1 || n === "dnd" ? l.in.exec("set-edit", null) : l.in.exec("set-edit", { cardId: e, eventSource: "select-card" });
  }
}
function Kc(l, { id: e }) {
  const t = l.getState().selected;
  if (t) {
    if (l.in.exec("set-edit", null), !e) {
      l.setState({ selected: null });
      return;
    }
    const n = t.filter((i) => !ie(i, e));
    l.setState({ selected: n });
  }
}
function kn(l, e) {
  return `${l}`.toLowerCase().includes(`${e}`.toLowerCase());
}
function Bc(l, e, t) {
  return t ? kn(l[t] || "", e) : kn(l.label || "", e) || kn(l.description || "", e);
}
function Wc(l, { value: e, by: t, searchRule: n }) {
  const i = l.getState(), s = e?.trim(), r = i.cardsMeta;
  let a = { value: e, by: t };
  s ? Cc(i).map((o) => {
    const u = r[o.id] = r[o.id] || {};
    (n || Bc)(o, s, t) ? (u.found = !0, u.dimmed = !1) : (u.found = !1, u.dimmed = !0);
  }) : (Object.keys(r).forEach((o) => {
    const u = r[o];
    u && (delete u.dimmed, delete u.found);
  }), a = null), l.setState({ cardsMeta: r, search: a });
}
function Yc(l, e) {
  l.setState({ scroll: e });
}
function Gc(l, e) {
  if (!e) {
    l.setState({ sort: null });
    return;
  }
  const t = l.getState(), n = e.columnId, i = e.by || "label", s = e.dir || "asc", r = e.preserve || !1;
  let a = t.sort || {};
  n ? ("column" in a || (a = { columns: {} }), a.columns[n] = { by: i, dir: s, preserve: r }) : a = { dir: s, by: i, preserve: r };
  const o = Ut({ ...t, sort: a }, l.sortRule);
  r ? l.setState({ sort: a, cards: o }) : l.setState({ cards: o });
}
function Jc(l, e) {
  l.setState({ edit: e });
}
function Qc(l, { id: e, cardId: t, comment: n }) {
  if (t) {
    const i = l.getState(), { currentUser: s } = i, r = e || n.id || Dt(), a = t || n.cardId;
    if (!a || !s)
      return;
    const o = i.cards.map((u) => ie(u.id, a) ? { ...u, comments: [...u.comments || [], { ...n, id: r, cardId: a, userId: s, date: n.date || /* @__PURE__ */ new Date() }] } : u);
    return l.setState({ cards: o }), () => {
      l.in.exec("delete-comment", { id: r, cardId: a, $meta: { skipHistory: !0 } });
    };
  }
}
function Xc(l, { cardId: e, id: t, comment: n }) {
  if (e) {
    const i = l.getState(), s = t || n.id, r = e || n.cardId;
    if (!s || !r)
      return;
    let a = {};
    const o = i.cards.map((u) => ie(u.id, r) ? { ...u, comments: (u.comments || []).map((f) => ie(f.id, s) ? (a = { ...f }, { ...f, ...n }) : f) } : u);
    return l.setState({ cards: o }), () => {
      l.in.exec("update-comment", { id: s, cardId: r, comment: a, $meta: { skipHistory: !0 } });
    };
  }
}
function Zc(l, { cardId: e, id: t }) {
  if (e) {
    const n = l.getState();
    if (!t || !e)
      return;
    let i = {};
    const s = n.cards.map((r) => ie(r.id, e) ? { ...r, comments: (r.comments || []).filter((a) => ie(a.id, t) ? (i = { ...a }, !1) : !0) } : r);
    return l.setState({ cards: s }), () => {
      l.in.exec("add-comment", { id: t, cardId: e, comment: i, $meta: { skipHistory: !0 } });
    };
  }
}
function $c(l, e) {
  const t = l.getState().links, n = e.id || e.link.id || Dt();
  if (t.find((s) => ie(n, s.id)))
    return;
  const i = { ...e.link, id: n };
  return t.push(i), l.setState({ links: t }), e.link = i, e.id = n, () => {
    l.in.exec("delete-link", { id: n, $meta: { skipHistory: !0 } });
  };
}
function xc(l, { id: e }) {
  if (e) {
    const t = l.getState(), n = t.links.find((s) => ie(s.id, e)), i = t.links.filter((s) => !ie(s.id, e));
    return l.setState({ links: i }), () => {
      l.in.exec("add-link", { id: e, link: n, $meta: { skipHistory: !0 } });
    };
  }
}
function ed(l, { cardId: e }) {
  const t = l.getState(), { currentUser: n } = t;
  if (!e || !n)
    return;
  const i = t.cards.map((s) => ie(s.id, e) ? { ...s, votes: [...s.votes || [], n] } : s);
  l.setState({ cards: i });
}
function td(l, { cardId: e }) {
  const t = l.getState(), { currentUser: n } = t;
  if (!e || !n)
    return;
  const i = t.cards.map((s) => ie(s.id, e) ? { ...s, votes: (s.votes || []).filter((r) => !ie(r, n)) } : s);
  l.setState({ cards: i });
}
class nd extends _c {
  in;
  out;
  sortRule;
  config;
  _router;
  constructor(e, t) {
    super(e), bc(this), this.in = new oi(), this.out = new oi(), this.in.setNext(this.out), this.config = { history: !0, ...t || {} }, this._router = new hc(super.setState.bind(this), [{ in: ["cards", "rows", "columns", "columnKey", "rowKey"], out: ["areasMeta", "cardsMap"], exec: (i) => {
      const s = this.getState(), { rows: r, columns: a, columnKey: o, rowKey: u, cards: f } = s, c = {}, d = {};
      if (!o)
        return { cardsMap: d, areasMeta: c };
      f.map((m) => {
        const _ = rn(m, o, u);
        d[_] = d[_] || [], d[_]?.push(m);
      }), a.map((m) => {
        d[m.id] = d[m.id] || [], u && r.map((_) => {
          const h = ze(m.id, _.id);
          c[h] = { columnId: m.id, rowId: _.id, column: m, row: _, cardsCount: 0 }, d[h] = d[h] || [], d[m.id] = d[m.id]?.concat(d[h] || []);
        }), c[m.id] = { columnId: m.id, column: m, cardsCount: 0 };
      }), this._computeLimits({ areasMeta: c, cardsMap: d }), this.setState({ areasMeta: c, cardsMap: d }, i);
    } }, { in: ["cards", "rows", "columns", "columnKey", "rowKey"], out: ["areasMeta", "cardsMap"], exec: (i) => {
      const { renderType: s, scrollType: r } = this.getState(), a = `${r}:${s}`;
      this.setState({ layout: a }, i);
    } }], {}), this._initStructure();
    const n = { "add-card": Ec, "update-card": Lc, "move-card": Co, "duplicate-card": Rc, "delete-card": Ac, "add-column": Pc, "update-column": Nc, "move-column": Io, "delete-column": zc, "add-row": Hc, "update-row": Oc, "move-row": Mo, "delete-row": Fc, "start-drag-card": qc, "drag-card": jc, "end-drag-card": Vc, "set-search": Wc, "select-card": Uc, "unselect-card": Kc, scroll: Yc, "set-sort": Gc, "set-edit": Jc, "add-comment": Qc, "update-comment": Xc, "delete-comment": Zc, "add-link": $c, "delete-link": xc, "add-vote": ed, "delete-vote": td };
    this._setHandlers(n);
  }
  setState(e, t) {
    return this._router.setState(e, t);
  }
  init(e) {
    const { cards: t = [], links: n = [], columns: i = [], rows: s, columnKey: r = "column", rowKey: a = "", sort: o = null, readonly: u = !1, ...f } = e, c = this._normalizeReadonlyConfig(u);
    let d = this._normalizeCards(t);
    const m = (n || []).map((L) => ({ ...L }));
    o && (d = Ut({ columnKey: r, sort: o, cards: d }, this.sortRule));
    const _ = i.map((L) => ({ ...L })), h = (a && s || [{ id: "" }]).map((L) => ({ ...L })), { cardShape: w, columnShape: y, rowShape: S, editorShape: C } = this._normalizeShapes({ ...e, cards: d, readonly: c }), T = { ...f, cards: d, links: m, columns: _, columnKey: r, rowKey: a, rows: h, cardShape: w, columnShape: y, editorShape: C, rowShape: S, readonly: c };
    this._router.init(T), this.setState({ edit: null, selected: null });
  }
  undo() {
    const { history: e } = this.getState(), t = e.undo.pop();
    if (t) {
      if (typeof t == "object")
        t.undo(), e.redo.push({ ev: t.ev, key: t.key });
      else if (typeof t == "number") {
        const n = e.batches[t];
        for (let i = n.length - 1; i >= 0; i--)
          n[i].undo();
        e.redo.push(t);
      }
    }
    this.setState({ history: e });
  }
  redo() {
    const { history: e } = this.getState(), t = [...e.redo], n = t.pop();
    if (n) {
      if (typeof n == "object") {
        const { ev: i, key: s } = n;
        this.in.exec(s, i), this.setState({ history: { ...e, redo: t } });
      } else if (typeof n == "number") {
        const i = e.batches[n];
        delete e.batches[n], i.forEach((s) => {
          const { ev: r, key: a } = s;
          this.in.exec(a, r);
        }), this.setState({ history: { ...e, redo: t } });
      }
    }
  }
  _setHandlers(e) {
    const { history: t } = this.getState();
    Object.keys(e).forEach((n) => {
      this.in.on(n, (i) => {
        const s = e[n](this, i), r = i?.$meta;
        this.config.history && s && !r?.skipHistory && (r?.batch ? (t.batches[r.batch] ??= [], t.batches[r.batch].push({ undo: s, key: n, ev: i }), t.undo.includes(r.batch) || t.undo.push(r.batch)) : t.undo.push({ undo: s, key: n, ev: i }), t.redo.forEach((a) => {
          typeof a == "string" && delete t.batches[a];
        }), t.redo = [], this.setState({ history: t }));
      });
    });
  }
  _initStructure() {
    const e = "default", t = "default";
    this.setState({ columnKey: "column", rowKey: "", columns: [], rows: [], cards: [], cardsMap: {}, cardsMeta: {}, cardShape: Xt, columnShape: {}, rowShape: {}, editorShape: ko, areasMeta: {}, dragItemsCoords: null, dragItemId: null, before: null, overAreaId: null, selected: null, search: null, scroll: null, sort: null, edit: null, readonly: null, cardHeight: null, layout: `${e}:${t}`, scrollType: e, renderType: t, history: { undo: [], redo: [], batches: {} }, editor: {}, currentUser: null, links: [] });
  }
  _computeLimits({ areasMeta: e, cardsMap: t }) {
    for (const n in e) {
      const i = t[n];
      if (i) {
        const s = e[n];
        s.cardsCount = i.length || 0;
        const r = s.column;
        if (r.limit) {
          let a = 0;
          typeof r.limit == "object" ? s.rowId ? a = r.limit[s.rowId] || 0 : a = Object.keys(r.limit).reduce((o, u) => o + r.limit[u], 0) : a = r.limit, s.totalLimit = a, s.isOverLimit = !!a && s.cardsCount > a, s.noFreeSpace = r.strictLimit && !!a && s.cardsCount >= a;
        }
      }
    }
  }
  _normalizeCards(e) {
    return e.map((t) => {
      const n = t.id || Kn();
      return { ...t, id: n };
    });
  }
  _normalizeShapes(e) {
    const { cardShape: t = Xt, columnShape: n, rowShape: i, readonly: s, editorShape: r } = e;
    let a = { ...t };
    for (const c in t) {
      const d = t[c];
      typeof d == "boolean" && (a[c] = { show: d });
    }
    a = Object.keys(a).reduce((c, d) => {
      const m = Xt[d];
      return m ? c[d] = { ...m, ...a[d] } : c[d] = a[d], c;
    }, {}), s && (s.edit || (a.menu = a.menu || {}, a.menu.show = !1)), a = Dc(a), a = wn({ store: this, shape: a, defaultMenuItems: vc });
    const o = Mc(r, a), u = wn({ store: this, shape: n, defaultMenuItems: yc }), f = wn({ store: this, shape: i, defaultMenuItems: Sc });
    return { cardShape: a, columnShape: u, rowShape: f, editorShape: o };
  }
  _normalizeReadonlyConfig(e) {
    let t = { add: !0, dnd: !0, edit: !0, select: !0 };
    return typeof e == "object" ? t = { ...t, ...e } : e === !0 && Object.keys(t).forEach((n) => {
      t[n] = !1;
    }), t;
  }
}
function ld(l, e, t = 5) {
  return Math.abs(e.x - l.x) > t || Math.abs(e.y - l.y) > t;
}
function Tn(l, e) {
  return l >= e[0] && l <= e[1];
}
function id(l, e) {
  const { x: t, y: n } = l, i = Tn(t, [e.x, e.right]), s = Tn(n, [e.y, e.bottom]);
  return i && s;
}
function ai(l, e, t) {
  const n = { x: e.x - t.x, y: e.y - t.y };
  return { x: l.x - n.x, y: l.y - n.y };
}
function ui(l, e, t = !1) {
  const n = Array.from(l.querySelectorAll("[data-drop-area]")), i = Array.isArray(e) ? e : [e], s = l.querySelector(`[data-drag-item='${i[i.length - 1]}']`)?.offsetHeight || 300, r = {}, a = [], o = n.reduce((u, f) => {
    const c = JSON.parse(JSON.stringify(f.getBoundingClientRect())), d = f.getAttribute("data-drop-area"), m = Array.from(f.querySelectorAll("[data-drag-item]")), _ = [], h = m.reduce((C, T) => {
      const L = JSON.parse(JSON.stringify(T.getBoundingClientRect())), P = T.getAttribute("data-drag-item"), E = C[C.length - 1]?.bottom ?? L.y, F = { ...L, y: E, id: P };
      return r[P] = F, C.push(F), _t(i, P) || _.push(P), C;
    }, []), w = _.map((C, T) => ({ ...h[T], id: C }));
    if (!t) {
      const C = f.offsetParent, T = 30;
      f.offsetTop + f.offsetHeight + T >= C.scrollHeight && (c.bottom += s + T, c.height += s + T);
    }
    const y = { ...c, id: d }, S = f.querySelector(".wx-list-wrapper");
    return S && (y.scrollList = { node: S, initialScrollY: S.scrollTop }), a.push(y), u[d] = w, u;
  }, {});
  return { dragItemsCoords: r, dropAreasCoords: a, dropAreaItemsCoords: o };
}
function fi(l) {
  const e = {};
  if (e.target = l.target, "touches" in l) {
    const t = l.touches[0];
    e.touches = l.touches, e.clientX = t.clientX, e.clientY = t.clientY;
  } else
    e.clientX = l.clientX, e.clientY = l.clientY;
  return e;
}
function Bn(l, e = "data-id") {
  let t = l;
  for (!t.tagName && l.target && (t = l.target); t; ) {
    if (t.getAttribute && t.getAttribute(e))
      return t;
    t = t.parentNode;
  }
  return null;
}
function Dn(l, e = "data-id") {
  const t = Bn(l, e);
  return t ? t.getAttribute(e) : null;
}
function on(l, e = "data-id") {
  const t = Bn(l, e);
  return t ? sd(t.getAttribute(e)) : null;
}
function sd(l) {
  if (typeof l == "string") {
    const e = l * 1;
    if (!isNaN(e))
      return e;
  }
  return l;
}
(/* @__PURE__ */ new Date()).valueOf();
function rd(l, e) {
  if (e.readonly)
    return;
  let t, n;
  const i = l;
  let s, r, a, o, u, f, c, d, m, _;
  const h = (z, q) => {
    e.api.exec(z, q), e.onAction && e.onAction(z, q);
  };
  l.querySelector(`[data-kanban-id='${Ze.scrollableContent}']`)?.addEventListener("scroll", () => {
    if (o) {
      const { itemId: z, itemRect: q, itemsId: J } = o;
      o.scroll = { x: s.scrollLeft, y: s.scrollTop };
      const U = ui(i, J, !0);
      u = U.dragItemsCoords, c = U.dropAreasCoords, f = U.dropAreaItemsCoords, u[z] = q;
    }
  }, { capture: !0 });
  const { data: w } = e.api.getStores(), y = { duration: 500, timer: null }, S = () => {
    y.callback && (y.timer = setTimeout(y.callback, y.duration));
  }, C = () => {
    y.timer && clearTimeout(y.timer);
  };
  function T(z) {
    if (r && clearTimeout(r), s) {
      const q = s.getBoundingClientRect(), J = { x: s.scrollLeft, y: s.scrollTop }, U = 50;
      z.clientX > q.width + q.left - U && s.scrollTo(J.x + U, J.y), z.clientX < q.left + U && s.scrollTo(J.x - U, J.y), z.clientY > q.height + q.top - U && s.scrollTo(J.x, J.y + U), z.clientY < q.top + U && s.scrollTo(J.x, J.y - U), r = setTimeout(() => {
        T(z);
      }, 100);
    }
  }
  function L(z) {
    const q = {}, J = c.find((ne) => id(z, ne)), U = J?.id;
    if (U) {
      const [ne, Q] = vo(U);
      q.overAreaId = { rowId: Q, columnId: ne };
      let B = z.y;
      J.scrollList && (B += J.scrollList.node.scrollTop - J.scrollList.initialScrollY);
      const le = f[U];
      q.before = le.find((ge) => Tn(B, [ge.y, ge.bottom]))?.id;
    }
    return q;
  }
  function P(z, q, J, U, ne) {
    if (z.touches && z.touches.length > 1)
      return;
    const Q = U.itemId;
    ne?.indexOf(Q) === -1 && (h("select-card", { id: Q, eventSource: "dnd" }), ne = [Q]), a = ai(q, U, u[Q]), F(ne);
    const B = L(J);
    m = B.before, d = B.overAreaId, _ = ne || [Q], h("start-drag-card", { id: Q, rowId: d.rowId, columnId: d.columnId, before: m, source: _, dragItemsCoords: u, dropAreasCoords: c });
  }
  function E(z, q, J, U) {
    const { dragItemId: ne } = z, Q = u[U.itemId];
    a = ai(q, U, Q), t.style.left = a.x + "px", t.style.top = a.y + "px";
    const B = L(J), le = { id: ne, rowId: d.rowId, columnId: d.columnId, before: m, source: _ };
    B.overAreaId?.columnId && (le.rowId !== B.overAreaId?.rowId || le.columnId !== B.overAreaId?.columnId) && (d = B.overAreaId, le.rowId = d.rowId, le.columnId = d.columnId), m !== B.before && (m = le.before = B.before), h("drag-card", le);
  }
  function F(z) {
    const q = document.querySelector(".wx-kanban");
    z && z.length > 1 && q.style.setProperty("--wx-kanban-dragged-cards-count", JSON.stringify(`${z.length}`)), q.appendChild(t), t.classList.add("wx-dragged-card"), t.style.left = a.x + "px", t.style.top = a.y + "px", document.body.classList.add("wx-ondrag");
  }
  function G() {
    const z = document.querySelector(".wx-kanban");
    t.parentNode && z.removeChild(t), document.body.classList.remove("wx-ondrag"), z.style.removeProperty("--wx-kanban-dragged-cards-count"), t = null;
  }
  function V(z, q, J) {
    const U = J.scroll, ne = { x: q.scrollLeft, y: q.scrollTop };
    return { x: z.clientX + (ne.x - U.x), y: z.clientY + (ne.y - U.y) };
  }
  function O(z) {
    const q = fi(z);
    if (q.touches && q.touches.length > 1 || "button" in z && z.button !== 0)
      return;
    const J = Bn(q.target, "data-drag-item");
    if (s = i.querySelector(`[data-kanban-id="${Ze.content}"]`), J) {
      const U = on(J, "data-drag-item"), ne = on(q.target, "data-drag-item"), Q = w.getState().selected, B = Q && Q.length > 1 ? [...Q, U] : [U], le = ui(i, B);
      u = le.dragItemsCoords, c = le.dropAreasCoords, f = le.dropAreaItemsCoords, t = J.cloneNode(!0), n = "touches" in z ? { up: "touchend", move: "touchmove" } : { up: "mouseup", move: "mousemove" }, "touches" in z ? (y.callback = () => {
        document.addEventListener(n.move, D, { passive: !1 });
      }, S()) : document.addEventListener(n.move, D), document.addEventListener(n.up, j), o = { x: q.clientX, y: q.clientY, itemId: U, itemsId: B, itemRect: u[U], areaId: ne, scroll: { x: s.scrollLeft, y: s.scrollTop } };
    }
  }
  function D(z) {
    z.preventDefault(), z.stopPropagation();
    const q = fi(z);
    if (T(q), !o)
      return;
    const J = w.getState(), { selected: U, dragItemId: ne } = J, Q = V(q, s, o), B = { x: q.clientX, y: q.clientY };
    !ne && ld(o, B) && P(q, B, Q, o, U), ne && E(J, B, Q, o);
  }
  function j() {
    document.removeEventListener(n.move, D), document.removeEventListener(n.up, j), C(), G(), r && clearTimeout(r);
    const { dragItemId: z } = w.getState();
    z && h("end-drag-card", { id: z, rowId: d.rowId, columnId: d.columnId, before: m, source: _ }), o = null;
  }
  return i.addEventListener("mousedown", O), i.addEventListener("touchstart", O), i.addEventListener("dragstart", (z) => z.preventDefault()), { destroy() {
    i.removeEventListener("mousedown", O), i.removeEventListener("touchstart", O);
  } };
}
function od(l, e) {
  if (e.readonly)
    return;
  let t;
  const { api: n } = e, i = (r) => {
    t = r.target;
  };
  n.on("select-card", ({ id: r }) => {
    t || setTimeout(() => {
      n.exec("scroll", { to: "card", id: r });
    }, 100);
  });
  const s = (r) => {
    if (!t || Dn(r.target, "data-ignore-selection"))
      return;
    const a = on(t, "data-drag-item"), o = on(t, "data-kanban-id"), u = r.metaKey || r.ctrlKey, f = r.shiftKey;
    t === r.target && o !== Ze.editor && o !== Ze.vote && ad({ itemId: a, groupMode: u, rangeMode: f, api: n }), t = null;
  };
  return l.addEventListener("mousedown", i), l.addEventListener("mouseup", s), { destroy() {
    l.removeEventListener("mousedown", i), l.removeEventListener("mouseup", s);
  } };
}
function ad(l) {
  const { itemId: e, groupMode: t, rangeMode: n, api: i } = l, { cardsMap: s, columnKey: r } = i.getState(), { selected: a } = i.getState();
  if (!e && a?.length) {
    i.exec("unselect-card", { id: null });
    return;
  }
  if (n && a?.length) {
    const o = i.getCard(e), u = i.getCard(a[a.length - 1]);
    if (ud(o, u, r)) {
      const f = Object.keys(s).filter((h) => fd(h) === o[r]).reduce((h, w) => {
        const y = s[w];
        return h.concat(y);
      }, []), c = f.findIndex((h) => ie(h.id, e)), d = f.findIndex((h) => ie(h.id, u?.id)), m = Math.min(c, d), _ = Math.max(c, d);
      f.slice(m, _ + 1).forEach((h) => {
        a.indexOf(h.id) === -1 && i.exec("select-card", { id: h.id, groupMode: !0 });
      });
      return;
    }
  }
  i.exec("select-card", { id: e, groupMode: t });
}
function ud(l, e, t) {
  return !l || !e || !t ? !1 : ie(l[t], e[t]);
}
function fd(l) {
  return vo(l)[0];
}
function cd(l, e) {
  const { api: t, tick: n = () => new Promise((a) => {
    requestAnimationFrame(() => {
      a();
    });
  }) } = e, i = t.getReactiveState().scroll, s = { card: "data-drag-item", column: "data-column-header", row: "data-row-header" };
  i?.subscribe((a) => {
    if (a) {
      const { to: o, id: u, options: f } = a;
      r(`[${s[o]}="${u}"]`, f).then((c) => {
        c && t.exec("scroll", null);
      }).catch();
    }
  });
  function r(a, o) {
    return new Promise((u) => {
      n().then(() => {
        const f = l.querySelector(a);
        f && (f.scrollIntoView(o || { behavior: "smooth", block: "nearest", inline: "nearest" }), u(!0)), u(!1);
      });
    });
  }
}
function Wn(l) {
  let e = !1;
  function t(a) {
    a.buttons === 1 && (e = !0);
  }
  function n() {
    e = !1, i && i();
  }
  let i = null;
  function s(a) {
    e && (i && i(), i = Ic(a, l));
  }
  function r() {
    i && (i(), i = null), e = !1;
  }
  return document.body.addEventListener("mousemove", s), document.body.addEventListener("mouseup", r), l.addEventListener("mousedown", t), l.addEventListener("mouseover", t), l.addEventListener("mouseleave", n), { destroy: () => {
    document.body.removeEventListener("mousemove", s), document.body.removeEventListener("mouseup", r), l.removeEventListener("mousedown", t), l.removeEventListener("mouseover", t), l.removeEventListener("mouseleave", n);
  } };
}
function dd(l, e) {
  if (e.readonly)
    return;
  const t = e.locale, { api: n } = e, i = e.onAction;
  let s = e.inFocus || !1, r;
  function a(c, d) {
    switch (c) {
      case "delete": {
        const m = n.getState().selected;
        m?.length && (e.confirmDeletion?.() || Promise.resolve()).then(() => {
          m.forEach((_) => {
            n.exec("delete-card", { id: _ });
          });
        }).catch(() => {
        });
        break;
      }
      case "ctrl+d":
        d.preventDefault(), n.getState().selected?.forEach((m) => {
          const _ = n.getCard(m);
          n.exec("duplicate-card", { id: m, card: { label: `${t("Duplicate of")} ${_?.label}` } });
        });
        break;
      case "ctrl+z":
        d.preventDefault(), n.getStores().data.undo();
        break;
      case "ctrl+shift+z":
      case "ctrl+y":
        d.preventDefault(), n.getStores().data.redo();
        break;
    }
  }
  function o(c) {
    if (s) {
      const d = c.ctrlKey || c.metaKey, m = c.shiftKey, _ = c.code.replace("Key", "").toLowerCase(), h = `${d ? "ctrl+" : ""}${m ? "shift+" : ""}${_}`;
      a(h, c), i && i("keydown", { hotkey: h });
    }
  }
  function u(c) {
    const d = Dn(c.target, "data-wx-widget");
    s = d === Ze.kanban || d === Ze.toolbar, r = d, i && i("set-focus", { inFocus: s });
  }
  function f(c) {
    const d = Dn(c.target, "data-wx-widget");
    r === d && !s && (s = !0, r = Ze.kanban, i && i("set-focus", { inFocus: s }));
  }
  return document.addEventListener("keydown", o), document.addEventListener("mousedown", u), document.addEventListener("focusin", u), document.addEventListener("focusout", f), { destroy: () => {
    document.removeEventListener("keydown", o), document.removeEventListener("mousedown", u), document.removeEventListener("focusin", u), document.removeEventListener("focusout", f);
  } };
}
function ci(l) {
  switch (l?.toLowerCase()) {
    case "jpg":
    case "jpeg":
    case "gif":
    case "png":
    case "bmp":
    case "tiff":
    case "pcx":
    case "svg":
    case "ico":
      return !0;
    default:
      return !1;
  }
}
class md {
  _store;
  constructor(e) {
    this._store = e;
  }
  json(e) {
    const { cards: t, links: n, columns: i, rows: s } = this._store.getState(), r = { cards: t, links: n, columns: i };
    s.length > 0 && (r.rows = s), this._save(r, `${e || "kanban-export"}`, "json");
  }
  _save(e, t, n) {
    const i = document.createElement("a");
    document.body.appendChild(i), i.style.display = "none";
    const s = JSON.stringify(e), r = new Blob([s], { type: "octet/stream" }), a = window.URL.createObjectURL(r);
    i.href = a, i.download = `${t}.${n}`, i.click(), window.URL.revokeObjectURL(a), document.body.removeChild(i);
  }
}
function _d(l, e) {
  return { exec: l.in.exec.bind(l.in), on: l.out.on.bind(l.in), intercept: l.in.intercept.bind(l.in), getState: l.getState.bind(l), getReactiveState: l.getReactive.bind(l), setNext: (t) => e = e.setNext(t), getStores: () => ({ data: l }), getCard: (t) => {
    const { cards: n } = l.getState();
    return n.find((i) => i.id == t);
  }, serialize: () => {
    const { cards: t, links: n, columns: i, rows: s } = l.getState();
    return { cards: t, links: n, columns: i, rows: s };
  }, export: new md(l), undo: l.undo.bind(l), redo: l.redo.bind(l), getAreaCards: (t, n) => {
    const { cardsMap: i } = l.getState(), s = ze(t, n);
    return i[s];
  } };
}
function hd(l, e) {
  const { container: t, at: n, position: i = "top", align: s = "start" } = e, r = gd(t) || document.body;
  if (n) {
    l.style.position = "absolute";
    const a = n.getBoundingClientRect();
    l.style.top = `${a[i]}px`, l.style.left = `${a[s === "start" ? "left" : "right"]}px`;
  }
  return r.appendChild(l), { destroy() {
    l.remove();
  } };
}
function gd(l) {
  return typeof l == "string" ? document.querySelector(l) : l;
}
var Le = {};
function En() {
  return (
    // @ts-ignore TS2551 yes, I know that "navigator.userAgentData" is experimental
    typeof navigator.userAgentData == "object" && // required for Safari
    // @ts-ignore TS2551 yes, I know that "navigator.userAgentData" is experimental
    "mobile" in navigator.userAgentData ? navigator.userAgentData.mobile : function(l) {
      return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(l) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(l.slice(0, 4));
    }(navigator.userAgent || navigator.vendor || window.opera)
  );
}
function di() {
  if (En()) {
    var l = window.innerWidth, e = window.innerHeight, t = Math.min(l, e), n = Math.max(l, e);
    return t <= 480 && n <= 896;
  } else
    return !1;
}
function Yn() {
  return Le.AppRunsOnLegacyTouchDevice == null && (Le.AppRunsOnLegacyTouchDevice = !mt("(pointer:fine)") && !mt("(pointer:coarse)") && !mt("-moz-touch-enabled") && ("ontouchstart" in Window || (navigator.maxTouchPoints || 0) > 0 || /touch|android|iphone|ipod|ipad/i.test(navigator.userAgent))), Le.AppRunsOnLegacyTouchDevice;
}
function bd() {
  return Le.DevicePointingAccuracy == null && (jt(), !mn() && !Le.waitingForLoaded && (Le.waitingForLoaded = !0, window.addEventListener("DOMContentLoaded", jt))), Le.DeviceCanHover;
}
function an() {
  return Le.DevicePointingAccuracy == null && (jt(), !mn() && !Le.waitingForLoaded && (Le.waitingForLoaded = !0, window.addEventListener("DOMContentLoaded", jt))), Le.DevicePointingAccuracy;
}
function jt() {
  Le.DeviceCanHover = mt("(hover:hover)");
  var l = "fine";
  switch (!0) {
    case mt("(pointer:none)"):
      l = "none";
      break;
    case mt("(pointer:coarse)"):
    case mt("-moz-touch-enabled"):
    case Yn():
      l = "coarse";
      break;
  }
  if (Le.DevicePointingAccuracy = l, mn()) {
    var e = document.body.classList;
    if (l === "none" !== e.contains("noPointer") || l === "fine" !== e.contains("finePointer") || l === "coarse" !== e.contains("coarsePointer"))
      switch (document.body.classList.remove("noPointer", "finePointer", "coarsePointer"), l) {
        case "none":
          document.body.classList.add("noPointer");
          break;
        case "fine":
          document.body.classList.add("finePointer");
          break;
        case "coarse":
          document.body.classList.add("coarsePointer");
          break;
      }
  }
}
function pd(l) {
  Do(l, !1);
}
function wd(l) {
  Do(l, !0);
}
function kd(l) {
  Eo(l);
}
function mn() {
  return document.readyState === "interactive" || document.readyState === "complete";
}
function mt(l) {
  var e = window.matchMedia || // @ts-ignore
  window.webkitMatchmedia || window.mozMatchmedia || window.oMatchmedia;
  return e != null && e(l).matches;
}
function vd(l, e) {
  return typeof l.item == "function" ? l.item(e) : l[e];
}
function yd(l, e) {
  for (var t = 0, n = l.length; t < n; t++)
    if (e.test(vd(l, t)))
      return !0;
  return !1;
}
function To() {
  if (!Le.MediaQueriesHaveBeenRewritten && Yn())
    if (mn()) {
      for (var l = document.styleSheets, e = 0, t = l.length; e < t; e++)
        for (var n = l[e].cssRules || l[e].rules, i = 0, s = n.length; i < s; i++) {
          var r = n[i];
          if (r.type === CSSRule.MEDIA_RULE && yd(r.media, /handheld/i)) {
            var a = r.media;
            a.mediaText = a.mediaText.replace("handheld", "screen");
          }
        }
      for (var o = document.getElementsByTagName("link"), e = 0, t = o.length; e < t; e++) {
        var u = o[e];
        /handheld/i.test(u.media) && (u.media = u.media.replace("handheld", "screen"));
      }
      Le.MediaQueriesHaveBeenRewritten = !0;
    } else
      window.addEventListener("DOMContentLoaded", To);
}
function Do(l, e) {
  if (typeof l != "function")
    throw new Error("handler function expected");
  Le.EventHandlerRegistry == null && (Le.EventHandlerRegistry = []);
  for (var t = Le.EventHandlerRegistry, n = 0, i = t.length; n < i; n++)
    if (t[n].Handler === l) {
      t[n].onceOnly = e;
      return;
    }
  t.push({ Handler: l, onceOnly: e }), t.length === 1 && Sd();
}
function Eo(l) {
  Le.EventHandlerRegistry == null && (Le.EventHandlerRegistry = []);
  for (var e = Le.EventHandlerRegistry, t = 0, n = e.length; t < n; t++)
    if (e[t].Handler === l) {
      e.splice(t, 1);
      break;
    }
  e.length === 0 && Cd();
}
function Sd() {
  Le.AccuracyPoller = setInterval(function() {
    var l = an();
    jt(), an() !== l && Id();
  }, 500);
}
function Cd() {
  clearInterval(Le.AccuracyPoller), Le.AccuracyPoller = void 0;
}
function Id() {
  Le.EventHandlerRegistry == null && (Le.EventHandlerRegistry = []);
  for (var l = Le.EventHandlerRegistry, e = 0, t = l.length; e < t; e++) {
    var n = l[e], i = n.Handler, s = n.onceOnly;
    try {
      i(an());
    } catch (r) {
      console.warn("PointingAccuracy observation function failed with", r);
    }
    s && Eo(i);
  }
}
var mi = {
  get isMobile() {
    return En();
  },
  get isPhone() {
    return di();
  },
  get isTablet() {
    return En() && !di();
  },
  get isLegacyTouchDevice() {
    return Yn();
  },
  rewriteMediaQueriesOnLegacyTouchDevices: To,
  get PointingAccuracy() {
    return an();
  },
  get canHover() {
    return bd();
  },
  onPointingAccuracyChanged: pd,
  oncePointingAccuracyChanged: wd,
  offPointingAccuracyChanged: kd,
  get observesPointingAccuracy() {
    return Le.AccuracyPoller != null;
  }
};
function _n(l, e) {
  return l.data && (l.data = l.data.map((t) => _n(t, e))), {
    ...l,
    text: e(l.text),
    css: l.disabled ? "disabled" : ""
  };
}
function Md(l) {
  if (typeof l == "string") {
    const e = l * 1;
    if (!isNaN(e))
      return e;
  }
  return l;
}
function Td(l, e) {
  for (let t = l.length - 1; t >= 0; t--)
    if (l[t] === e) {
      l.splice(t, 1);
      break;
    }
}
let Lo = /* @__PURE__ */ new Date(), un = !1;
const ct = [], _i = (l) => {
  if (un) {
    un = !1;
    return;
  }
  for (let e = ct.length - 1; e >= 0; e--) {
    const { node: t, date: n, props: i } = ct[e];
    if (!(n > Lo) && !t.contains(l.target) && t !== l.target && (i.callback && i.callback(l), i.modal || l.defaultPrevented))
      break;
  }
}, hi = ["click", "contextmenu"], Dd = (l) => {
  Lo = /* @__PURE__ */ new Date(), un = !0;
  for (let e = ct.length - 1; e >= 0; e--) {
    const { node: t } = ct[e];
    if (!t.contains(l.target) && t !== l.target) {
      un = !1;
      break;
    }
  }
};
function Ed(l, e) {
  ct.length || (hi.forEach(
    (n) => document.addEventListener(n, _i)
  ), document.addEventListener("mousedown", Dd)), typeof e != "object" && (e = { callback: e });
  const t = { node: l, date: /* @__PURE__ */ new Date(), props: e };
  return ct.push(t), {
    destroy() {
      Td(ct, t), ct.length || hi.forEach(
        (n) => document.removeEventListener(n, _i)
      );
    }
  };
}
(/* @__PURE__ */ new Date()).valueOf();
function Ro(l, e) {
  l.forEach((t) => {
    e(t), t.data && t.data.length && Ro(t.data, e);
  });
}
function Ao(l, e) {
  const t = [];
  return l.forEach((n) => {
    if (n.data) {
      const i = Ao(n.data, e);
      i.length && t.push({ ...n, data: i });
    } else
      e(n) && t.push(n);
  }), t;
}
let Ld = 1;
function Rd(l) {
  return Ro(l, (e) => {
    e.id = e.id || Ld++;
  }), l;
}
const Ad = {};
function gi(l) {
  return Ad[l];
}
function bi(l) {
  let e, t;
  return {
    c() {
      e = I("i"), g(e, "class", t = "wx-icon " + /*item*/
      l[0].icon + " svelte-xfznf6");
    },
    m(n, i) {
      v(n, e, i);
    },
    p(n, i) {
      i & /*item*/
      1 && t !== (t = "wx-icon " + /*item*/
      n[0].icon + " svelte-xfznf6") && g(e, "class", t);
    },
    d(n) {
      n && k(e);
    }
  };
}
function Pd(l) {
  let e, t = (
    /*item*/
    l[0].text + ""
  ), n;
  return {
    c() {
      e = I("span"), n = $(t), g(e, "class", "wx-value svelte-xfznf6");
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s & /*item*/
      1 && t !== (t = /*item*/
      i[0].text + "") && re(n, t);
    },
    i: K,
    o: K,
    d(i) {
      i && k(e);
    }
  };
}
function Nd(l) {
  let e, t, n;
  var i = gi(
    /*item*/
    l[0].type
  );
  function s(r, a) {
    return { props: { item: (
      /*item*/
      r[0]
    ) } };
  }
  return i && (e = Je(i, s(l))), {
    c() {
      e && N(e.$$.fragment), t = se();
    },
    m(r, a) {
      e && R(e, r, a), v(r, t, a), n = !0;
    },
    p(r, a) {
      if (a & /*item*/
      1 && i !== (i = gi(
        /*item*/
        r[0].type
      ))) {
        if (e) {
          W();
          const o = e;
          p(o.$$.fragment, 1, 0, () => {
            A(o, 1);
          }), Y();
        }
        i ? (e = Je(i, s(r)), N(e.$$.fragment), b(e.$$.fragment, 1), R(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const o = {};
        a & /*item*/
        1 && (o.item = /*item*/
        r[0]), e.$set(o);
      }
    },
    i(r) {
      n || (e && b(e.$$.fragment, r), n = !0);
    },
    o(r) {
      e && p(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && k(t), e && A(e, r);
    }
  };
}
function pi(l) {
  let e, t = (
    /*item*/
    l[0].subtext + ""
  ), n;
  return {
    c() {
      e = I("span"), n = $(t), g(e, "class", "wx-subtext svelte-xfznf6");
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s & /*item*/
      1 && t !== (t = /*item*/
      i[0].subtext + "") && re(n, t);
    },
    d(i) {
      i && k(e);
    }
  };
}
function wi(l) {
  let e;
  return {
    c() {
      e = I("i"), g(e, "class", "wx-sub-icon wxi-angle-right svelte-xfznf6");
    },
    m(t, n) {
      v(t, e, n);
    },
    d(t) {
      t && k(e);
    }
  };
}
function zd(l) {
  let e, t, n, i, s, r, a, o, u, f, c, d = (
    /*item*/
    l[0].icon && bi(l)
  );
  const m = [Nd, Pd], _ = [];
  function h(S, C) {
    return (
      /*item*/
      S[0].type ? 0 : 1
    );
  }
  n = h(l), i = _[n] = m[n](l);
  let w = (
    /*item*/
    l[0].subtext && pi(l)
  ), y = (
    /*item*/
    l[0].data && wi()
  );
  return {
    c() {
      e = I("div"), d && d.c(), t = H(), i.c(), s = H(), w && w.c(), r = H(), y && y.c(), g(e, "class", a = "wx-item " + /*item*/
      (l[0].css || "") + " svelte-xfznf6"), g(e, "data-id", o = /*item*/
      l[0].id);
    },
    m(S, C) {
      v(S, e, C), d && d.m(e, null), M(e, t), _[n].m(e, null), M(e, s), w && w.m(e, null), M(e, r), y && y.m(e, null), u = !0, f || (c = [
        te(
          e,
          "mouseenter",
          /*onHover*/
          l[1]
        ),
        te(
          e,
          "click",
          /*click_handler*/
          l[4]
        )
      ], f = !0);
    },
    p(S, [C]) {
      /*item*/
      S[0].icon ? d ? d.p(S, C) : (d = bi(S), d.c(), d.m(e, t)) : d && (d.d(1), d = null);
      let T = n;
      n = h(S), n === T ? _[n].p(S, C) : (W(), p(_[T], 1, 1, () => {
        _[T] = null;
      }), Y(), i = _[n], i ? i.p(S, C) : (i = _[n] = m[n](S), i.c()), b(i, 1), i.m(e, s)), /*item*/
      S[0].subtext ? w ? w.p(S, C) : (w = pi(S), w.c(), w.m(e, r)) : w && (w.d(1), w = null), /*item*/
      S[0].data ? y || (y = wi(), y.c(), y.m(e, null)) : y && (y.d(1), y = null), (!u || C & /*item*/
      1 && a !== (a = "wx-item " + /*item*/
      (S[0].css || "") + " svelte-xfznf6")) && g(e, "class", a), (!u || C & /*item*/
      1 && o !== (o = /*item*/
      S[0].id)) && g(e, "data-id", o);
    },
    i(S) {
      u || (b(i), u = !0);
    },
    o(S) {
      p(i), u = !1;
    },
    d(S) {
      S && k(e), d && d.d(), _[n].d(), w && w.d(), y && y.d(), f = !1, De(c);
    }
  };
}
function Hd(l, e, t) {
  let { item: n } = e, { showSub: i = !1 } = e, { activeItem: s = null } = e;
  function r() {
    t(2, i = n.data ? n.id : !1), t(3, s = this);
  }
  function a(o) {
    ve.call(this, l, o);
  }
  return l.$$set = (o) => {
    "item" in o && t(0, n = o.item), "showSub" in o && t(2, i = o.showSub), "activeItem" in o && t(3, s = o.activeItem);
  }, [n, r, i, s, a];
}
class Od extends ee {
  constructor(e) {
    super(), x(this, e, Hd, zd, Z, { item: 0, showSub: 2, activeItem: 3 });
  }
}
function ki(l, e, t) {
  const n = l.slice();
  return n[30] = e[t], n;
}
function Fd(l) {
  let e, t, n, i;
  function s(u) {
    l[17](u);
  }
  function r(u) {
    l[18](u);
  }
  function a(...u) {
    return (
      /*click_handler_1*/
      l[19](
        /*item*/
        l[30],
        ...u
      )
    );
  }
  let o = { item: (
    /*item*/
    l[30]
  ) };
  return (
    /*showSub*/
    l[6] !== void 0 && (o.showSub = /*showSub*/
    l[6]), /*activeItem*/
    l[7] !== void 0 && (o.activeItem = /*activeItem*/
    l[7]), e = new Od({ props: o }), fe.push(() => Se(e, "showSub", s)), fe.push(() => Se(e, "activeItem", r)), e.$on("click", a), {
      c() {
        N(e.$$.fragment);
      },
      m(u, f) {
        R(e, u, f), i = !0;
      },
      p(u, f) {
        l = u;
        const c = {};
        f[0] & /*options*/
        1 && (c.item = /*item*/
        l[30]), !t && f[0] & /*showSub*/
        64 && (t = !0, c.showSub = /*showSub*/
        l[6], Ie(() => t = !1)), !n && f[0] & /*activeItem*/
        128 && (n = !0, c.activeItem = /*activeItem*/
        l[7], Ie(() => n = !1)), e.$set(c);
      },
      i(u) {
        i || (b(e.$$.fragment, u), i = !0);
      },
      o(u) {
        p(e.$$.fragment, u), i = !1;
      },
      d(u) {
        A(e, u);
      }
    }
  );
}
function qd(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-separator svelte-1tqohog");
    },
    m(t, n) {
      v(t, e, n);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && k(e);
    }
  };
}
function vi(l) {
  let e, t;
  return e = new Gn({
    props: {
      css: (
        /*css*/
        l[2]
      ),
      options: (
        /*item*/
        l[30].data
      ),
      at: "right-overlap",
      parent: (
        /*activeItem*/
        l[7]
      ),
      context: (
        /*context*/
        l[1]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    l[20]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*css*/
      4 && (s.css = /*css*/
      n[2]), i[0] & /*options*/
      1 && (s.options = /*item*/
      n[30].data), i[0] & /*activeItem*/
      128 && (s.parent = /*activeItem*/
      n[7]), i[0] & /*context*/
      2 && (s.context = /*context*/
      n[1]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function yi(l, e) {
  let t, n, i, s, r, a;
  const o = [qd, Fd], u = [];
  function f(d, m) {
    return (
      /*item*/
      d[30].type === "separator" ? 0 : 1
    );
  }
  n = f(e), i = u[n] = o[n](e);
  let c = (
    /*item*/
    e[30].data && /*showSub*/
    e[6] === /*item*/
    e[30].id && vi(e)
  );
  return {
    key: l,
    first: null,
    c() {
      t = se(), i.c(), s = H(), c && c.c(), r = se(), this.first = t;
    },
    m(d, m) {
      v(d, t, m), u[n].m(d, m), v(d, s, m), c && c.m(d, m), v(d, r, m), a = !0;
    },
    p(d, m) {
      e = d;
      let _ = n;
      n = f(e), n === _ ? u[n].p(e, m) : (W(), p(u[_], 1, 1, () => {
        u[_] = null;
      }), Y(), i = u[n], i ? i.p(e, m) : (i = u[n] = o[n](e), i.c()), b(i, 1), i.m(s.parentNode, s)), /*item*/
      e[30].data && /*showSub*/
      e[6] === /*item*/
      e[30].id ? c ? (c.p(e, m), m[0] & /*options, showSub*/
      65 && b(c, 1)) : (c = vi(e), c.c(), b(c, 1), c.m(r.parentNode, r)) : c && (W(), p(c, 1, 1, () => {
        c = null;
      }), Y());
    },
    i(d) {
      a || (b(i), b(c), a = !0);
    },
    o(d) {
      p(i), p(c), a = !1;
    },
    d(d) {
      d && (k(t), k(s), k(r)), u[n].d(d), c && c.d(d);
    }
  };
}
function jd(l) {
  let e, t = [], n = /* @__PURE__ */ new Map(), i, s, r, a, o = ue(
    /*options*/
    l[0]
  );
  const u = (f) => (
    /*item*/
    f[30].id
  );
  for (let f = 0; f < o.length; f += 1) {
    let c = ki(l, o, f), d = u(c);
    n.set(d, t[f] = yi(d, c));
  }
  return {
    c() {
      e = I("div");
      for (let f = 0; f < t.length; f += 1)
        t[f].c();
      g(e, "data-wx-menu", "true"), g(e, "class", i = "wx-menu " + /*css*/
      l[2] + " svelte-1tqohog"), ce(
        e,
        "top",
        /*y*/
        l[4] + "px"
      ), ce(
        e,
        "left",
        /*x*/
        l[3] + "px"
      ), ce(
        e,
        "width",
        /*width*/
        l[5]
      );
    },
    m(f, c) {
      v(f, e, c);
      for (let d = 0; d < t.length; d += 1)
        t[d] && t[d].m(e, null);
      l[21](e), s = !0, r || (a = [
        Oe(Ed.call(null, e, {
          callback: (
            /*cancel*/
            l[11]
          ),
          modal: !0
        })),
        te(
          e,
          "mouseleave",
          /*onLeave*/
          l[10]
        )
      ], r = !0);
    },
    p(f, c) {
      c[0] & /*css, options, activeItem, context, showSub, dispatch*/
      711 && (o = ue(
        /*options*/
        f[0]
      ), W(), t = Fe(t, c, u, 1, f, o, n, e, Ke, yi, null, ki), Y()), (!s || c[0] & /*css*/
      4 && i !== (i = "wx-menu " + /*css*/
      f[2] + " svelte-1tqohog")) && g(e, "class", i), (!s || c[0] & /*y*/
      16) && ce(
        e,
        "top",
        /*y*/
        f[4] + "px"
      ), (!s || c[0] & /*x*/
      8) && ce(
        e,
        "left",
        /*x*/
        f[3] + "px"
      ), (!s || c[0] & /*width*/
      32) && ce(
        e,
        "width",
        /*width*/
        f[5]
      );
    },
    i(f) {
      if (!s) {
        for (let c = 0; c < o.length; c += 1)
          b(t[c]);
        s = !0;
      }
    },
    o(f) {
      for (let c = 0; c < t.length; c += 1)
        p(t[c]);
      s = !1;
    },
    d(f) {
      f && k(e);
      for (let c = 0; c < t.length; c += 1)
        t[c].d();
      l[21](null), r = !1, De(a);
    }
  };
}
function Vd(l) {
  for (; l; ) {
    l = l.parentNode;
    const e = getComputedStyle(l).position;
    if (l === document.body || e === "relative" || e === "absolute" || e === "fixed")
      return l;
  }
  return null;
}
function Ud(l, e) {
  let t = 0;
  for (; l; ) {
    const n = getComputedStyle(l).position;
    if ((n === "absolute" || n === "relative" || n === "fixed") && (t = parseInt(getComputedStyle(l)["z-index"]) || 0), l = l.parentNode, l === e || l === document.body)
      break;
  }
  return t;
}
function Kd(l, e, t) {
  const n = Re();
  let { options: i } = e, { left: s = 0 } = e, { top: r = 0 } = e, { at: a = "bottom" } = e, { parent: o = null } = e, { mount: u = null } = e, { context: f = null } = e, { css: c = "" } = e, d = -1e4, m = -1e4, _, h, w, y, S, C, T, L, P, E, F;
  function G() {
    if (t(3, d = s), t(4, m = r), !F)
      return;
    const U = Vd(F), ne = L ? document.body : U;
    if (!U)
      return;
    const Q = F.getBoundingClientRect();
    if (!Q.width)
      return;
    const B = U.getBoundingClientRect(), le = ne.getBoundingClientRect();
    if (o) {
      const Me = Ud(o, U);
      t(8, F.style.zIndex = Math.max(Me + 1, 20), F);
    }
    if (o && a !== "point") {
      h = o.getBoundingClientRect();
      let Me = L ? 0 : 1;
      t(3, d = C ? h.right + Me : h.left - Me), t(4, m = w ? h.bottom + 1 : h.top), t(5, _ = S ? h.width + "px" : "auto");
    } else
      h = { left: s, right: s, top: r, bottom: r };
    let ge = y;
    T && t(4, m = h.top - Q.height);
    const He = m + Q.height - le.bottom;
    He > 0 && t(4, m -= He), d + Q.width - le.right > 0 && (C ? ge = !0 : t(3, d = h.right - Q.width)), ge && t(3, d = h.left - Q.width), d < 0 && (a !== "left" ? t(3, d = 0) : t(3, d = h.right)), t(3, d += ne.scrollLeft - B.left), t(4, m += ne.scrollTop - B.top);
  }
  u && u(G), rt(G);
  function V() {
    t(6, P = !1);
  }
  function O() {
    n("click", { action: null });
  }
  function D(U) {
    P = U, t(6, P);
  }
  function j(U) {
    E = U, t(7, E);
  }
  const z = (U, ne) => {
    if (!U.data && !ne.defaultPrevented) {
      const Q = { context: f, action: U, event: ne };
      U.handler && U.handler(Q), n("click", Q), ne.stopPropagation();
    }
  };
  function q(U) {
    ve.call(this, l, U);
  }
  function J(U) {
    fe[U ? "unshift" : "push"](() => {
      F = U, t(8, F);
    });
  }
  return l.$$set = (U) => {
    "options" in U && t(0, i = U.options), "left" in U && t(12, s = U.left), "top" in U && t(13, r = U.top), "at" in U && t(14, a = U.at), "parent" in U && t(15, o = U.parent), "mount" in U && t(16, u = U.mount), "context" in U && t(1, f = U.context), "css" in U && t(2, c = U.css);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*options*/
    1 && Rd(i), l.$$.dirty[0] & /*at*/
    16384 && (w = a.indexOf("bottom") !== -1, y = a.indexOf("left") !== -1, C = a.indexOf("right") !== -1, T = a.indexOf("top") !== -1, L = a.indexOf("overlap") !== -1, S = a.indexOf("fit") !== -1), l.$$.dirty[0] & /*parent*/
    32768 && G();
  }, [
    i,
    f,
    c,
    d,
    m,
    _,
    P,
    E,
    F,
    n,
    V,
    O,
    s,
    r,
    a,
    o,
    u,
    D,
    j,
    z,
    q,
    J
  ];
}
let Gn = class extends ee {
  constructor(e) {
    super(), x(
      this,
      e,
      Kd,
      jd,
      Z,
      {
        options: 0,
        left: 12,
        top: 13,
        at: 14,
        parent: 15,
        mount: 16,
        context: 1,
        css: 2
      },
      null,
      [-1, -1]
    );
  }
};
const Bd = (l) => ({}), Si = (l) => ({ mount: (
  /*mount*/
  l[1]
) });
function Wd(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[5].default
  ), r = be(
    s,
    l,
    /*$$scope*/
    l[4],
    Si
  );
  return {
    c() {
      e = I("div"), t = I("div"), r && r.c(), g(t, "class", n = "wx-" + /*theme*/
      l[0] + "-theme svelte-1dixdmq"), g(e, "class", "wx-portal svelte-1dixdmq");
    },
    m(a, o) {
      v(a, e, o), M(e, t), r && r.m(t, null), l[6](t), i = !0;
    },
    p(a, [o]) {
      r && r.p && (!i || o & /*$$scope*/
      16) && we(
        r,
        s,
        a,
        /*$$scope*/
        a[4],
        i ? pe(
          s,
          /*$$scope*/
          a[4],
          o,
          Bd
        ) : ke(
          /*$$scope*/
          a[4]
        ),
        Si
      ), (!i || o & /*theme*/
      1 && n !== (n = "wx-" + /*theme*/
      a[0] + "-theme svelte-1dixdmq")) && g(t, "class", n);
    },
    i(a) {
      i || (b(r, a), i = !0);
    },
    o(a) {
      p(r, a), i = !1;
    },
    d(a) {
      a && k(e), r && r.d(a), l[6](null);
    }
  };
}
function Yd(l) {
  for (; l !== document.body && !l.getAttribute("data-wx-portal-root"); )
    l = l.parentNode;
  return l;
}
function Gd(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, s, { theme: r = "" } = e, { target: a = void 0 } = e, o = [];
  const u = (c) => {
    o && o.push(c);
  };
  r === "" && (r = ye("wx-theme")), rt(() => {
    (a || Yd(s)).appendChild(s), o && o.forEach((d) => d());
  }), Hn(() => {
    s && s.parentNode && s.parentNode.removeChild(s);
  });
  function f(c) {
    fe[c ? "unshift" : "push"](() => {
      s = c, t(2, s);
    });
  }
  return l.$$set = (c) => {
    "theme" in c && t(0, r = c.theme), "target" in c && t(3, a = c.target), "$$scope" in c && t(4, i = c.$$scope);
  }, [r, u, s, a, i, n, f];
}
class Po extends ee {
  constructor(e) {
    super(), x(this, e, Gd, Wd, Z, { theme: 0, target: 3, mount: 1 });
  }
  get mount() {
    return this.$$.ctx[1];
  }
}
function Jd(l) {
  let e, t, n, i;
  const s = (
    /*#slots*/
    l[14].default
  ), r = be(
    s,
    l,
    /*$$scope*/
    l[15],
    null
  );
  return {
    c() {
      e = I("div"), r && r.c(), g(e, "data-menu-ignore", "true");
    },
    m(a, o) {
      v(a, e, o), r && r.m(e, null), t = !0, n || (i = te(
        e,
        "click",
        /*handler*/
        l[2]
      ), n = !0);
    },
    p(a, o) {
      r && r.p && (!t || o & /*$$scope*/
      32768) && we(
        r,
        s,
        a,
        /*$$scope*/
        a[15],
        t ? pe(
          s,
          /*$$scope*/
          a[15],
          o,
          null
        ) : ke(
          /*$$scope*/
          a[15]
        ),
        null
      );
    },
    i(a) {
      t || (b(r, a), t = !0);
    },
    o(a) {
      p(r, a), t = !1;
    },
    d(a) {
      a && k(e), r && r.d(a), n = !1, i();
    }
  };
}
function Ci(l) {
  let e, t;
  return e = new Po({
    props: {
      $$slots: {
        default: [
          Qd,
          ({ mount: n }) => ({ 20: n }),
          ({ mount: n }) => n ? 1048576 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*$$scope, parent, css, at, top, left, mount, item, filteredOptions*/
      1081595 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Ii(l) {
  let e, t;
  return e = new Gn({
    props: {
      css: (
        /*css*/
        l[1]
      ),
      at: (
        /*at*/
        l[0]
      ),
      top: (
        /*top*/
        l[7]
      ),
      left: (
        /*left*/
        l[6]
      ),
      mount: (
        /*mount*/
        l[20]
      ),
      parent: (
        /*parent*/
        l[5]
      ),
      context: (
        /*item*/
        l[4]
      ),
      options: (
        /*filteredOptions*/
        l[3]
      )
    }
  }), e.$on(
    "click",
    /*onClick*/
    l[9]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*css*/
      2 && (s.css = /*css*/
      n[1]), i & /*at*/
      1 && (s.at = /*at*/
      n[0]), i & /*top*/
      128 && (s.top = /*top*/
      n[7]), i & /*left*/
      64 && (s.left = /*left*/
      n[6]), i & /*mount*/
      1048576 && (s.mount = /*mount*/
      n[20]), i & /*parent*/
      32 && (s.parent = /*parent*/
      n[5]), i & /*item*/
      16 && (s.context = /*item*/
      n[4]), i & /*filteredOptions*/
      8 && (s.options = /*filteredOptions*/
      n[3]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Qd(l) {
  let e = (
    /*parent*/
    l[5]
  ), t, n, i = Ii(l);
  return {
    c() {
      i.c(), t = se();
    },
    m(s, r) {
      i.m(s, r), v(s, t, r), n = !0;
    },
    p(s, r) {
      r & /*parent*/
      32 && Z(e, e = /*parent*/
      s[5]) ? (W(), p(i, 1, 1, K), Y(), i = Ii(s), i.c(), b(i, 1), i.m(t.parentNode, t)) : i.p(s, r);
    },
    i(s) {
      n || (b(i), n = !0);
    },
    o(s) {
      p(i), n = !1;
    },
    d(s) {
      s && k(t), i.d(s);
    }
  };
}
function Xd(l) {
  let e, t, n, i = (
    /*SLOTS*/
    l[8] && /*SLOTS*/
    l[8].default && Jd(l)
  ), s = (
    /*parent*/
    l[5] && Ci(l)
  );
  return {
    c() {
      i && i.c(), e = H(), s && s.c(), t = se();
    },
    m(r, a) {
      i && i.m(r, a), v(r, e, a), s && s.m(r, a), v(r, t, a), n = !0;
    },
    p(r, [a]) {
      /*SLOTS*/
      r[8] && /*SLOTS*/
      r[8].default && i.p(r, a), /*parent*/
      r[5] ? s ? (s.p(r, a), a & /*parent*/
      32 && b(s, 1)) : (s = Ci(r), s.c(), b(s, 1), s.m(t.parentNode, t)) : s && (W(), p(s, 1, 1, () => {
        s = null;
      }), Y());
    },
    i(r) {
      n || (b(i), b(s), n = !0);
    },
    o(r) {
      p(i), p(s), n = !1;
    },
    d(r) {
      r && (k(e), k(t)), i && i.d(r), s && s.d(r);
    }
  };
}
function Zd(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  const s = Re(), r = e.$$slots;
  let { options: a } = e, { at: o = "bottom" } = e, { resolver: u = null } = e, { dataKey: f = "contextId" } = e, { filter: c = null } = e, { css: d = "" } = e;
  const m = L;
  var _, h = null, w = null;
  let y = 0, S = 0;
  function C(P) {
    t(5, w = null), s("click", P.detail);
  }
  function T(P, E) {
    let F = null;
    for (; P && P.dataset && !F; )
      F = P.dataset[E], P = P.parentNode;
    return F ? Md(F) : null;
  }
  function L(P, E) {
    if (!P) {
      t(5, w = null);
      return;
    }
    if (P.defaultPrevented)
      return;
    const F = P.target;
    F && F.dataset && F.dataset.menuIgnore || (t(6, y = P.clientX + 1), t(7, S = P.clientY + 1), t(4, h = typeof E < "u" ? E : T(F, f)), !(u && (t(4, h = u(h, P)), !h)) && (h !== null && c && t(3, _ = Ao(a, (G) => c(G, h))), t(5, w = F), P.preventDefault()));
  }
  return l.$$set = (P) => {
    t(19, e = Ce(Ce({}, e), We(P))), "options" in P && t(10, a = P.options), "at" in P && t(0, o = P.at), "resolver" in P && t(11, u = P.resolver), "dataKey" in P && t(12, f = P.dataKey), "filter" in P && t(13, c = P.filter), "css" in P && t(1, d = P.css), "$$scope" in P && t(15, i = P.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*options*/
    1024 && t(3, _ = a);
  }, e = We(e), [
    o,
    d,
    m,
    _,
    h,
    w,
    y,
    S,
    r,
    C,
    a,
    u,
    f,
    c,
    n,
    i
  ];
}
class hn extends ee {
  constructor(e) {
    super(), x(this, e, Zd, Xd, Z, {
      options: 10,
      at: 0,
      resolver: 11,
      dataKey: 12,
      filter: 13,
      css: 1,
      handler: 2
    });
  }
  get handler() {
    return this.$$.ctx[2];
  }
}
function Mi(l) {
  let e, t;
  return e = new Po({
    props: {
      $$slots: {
        default: [
          $d,
          ({ mount: n }) => ({ 10: n }),
          ({ mount: n }) => n ? 1024 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*$$scope, parent, css, at, mount, options*/
      1295 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Ti(l) {
  let e, t;
  return e = new Gn({
    props: {
      css: (
        /*css*/
        l[2]
      ),
      at: (
        /*at*/
        l[1]
      ),
      mount: (
        /*mount*/
        l[10]
      ),
      parent: (
        /*parent*/
        l[3]
      ),
      options: (
        /*options*/
        l[0]
      )
    }
  }), e.$on(
    "click",
    /*onClick*/
    l[4]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*css*/
      4 && (s.css = /*css*/
      n[2]), i & /*at*/
      2 && (s.at = /*at*/
      n[1]), i & /*mount*/
      1024 && (s.mount = /*mount*/
      n[10]), i & /*parent*/
      8 && (s.parent = /*parent*/
      n[3]), i & /*options*/
      1 && (s.options = /*options*/
      n[0]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function $d(l) {
  let e = (
    /*parent*/
    l[3]
  ), t, n, i = Ti(l);
  return {
    c() {
      i.c(), t = se();
    },
    m(s, r) {
      i.m(s, r), v(s, t, r), n = !0;
    },
    p(s, r) {
      r & /*parent*/
      8 && Z(e, e = /*parent*/
      s[3]) ? (W(), p(i, 1, 1, K), Y(), i = Ti(s), i.c(), b(i, 1), i.m(t.parentNode, t)) : i.p(s, r);
    },
    i(s) {
      n || (b(i), n = !0);
    },
    o(s) {
      p(i), n = !1;
    },
    d(s) {
      s && k(t), i.d(s);
    }
  };
}
function xd(l) {
  let e, t, n, i, s, r;
  const a = (
    /*#slots*/
    l[7].default
  ), o = be(
    a,
    l,
    /*$$scope*/
    l[8],
    null
  );
  let u = (
    /*parent*/
    l[3] && Mi(l)
  );
  return {
    c() {
      e = I("div"), o && o.c(), t = H(), u && u.c(), n = se(), g(e, "data-menu-ignore", "true");
    },
    m(f, c) {
      v(f, e, c), o && o.m(e, null), v(f, t, c), u && u.m(f, c), v(f, n, c), i = !0, s || (r = te(
        e,
        "click",
        /*show*/
        l[5]
      ), s = !0);
    },
    p(f, [c]) {
      o && o.p && (!i || c & /*$$scope*/
      256) && we(
        o,
        a,
        f,
        /*$$scope*/
        f[8],
        i ? pe(
          a,
          /*$$scope*/
          f[8],
          c,
          null
        ) : ke(
          /*$$scope*/
          f[8]
        ),
        null
      ), /*parent*/
      f[3] ? u ? (u.p(f, c), c & /*parent*/
      8 && b(u, 1)) : (u = Mi(f), u.c(), b(u, 1), u.m(n.parentNode, n)) : u && (W(), p(u, 1, 1, () => {
        u = null;
      }), Y());
    },
    i(f) {
      i || (b(o, f), b(u), i = !0);
    },
    o(f) {
      p(o, f), p(u), i = !1;
    },
    d(f) {
      f && (k(e), k(t), k(n)), o && o.d(f), u && u.d(f), s = !1, r();
    }
  };
}
function em(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  const s = Re();
  let { options: r } = e, { at: a = "bottom" } = e, { css: o = "" } = e;
  const u = (m) => {
    t(3, f = m.target), m.preventDefault();
  };
  var f = null;
  function c(m) {
    t(3, f = null), s("click", m.detail);
  }
  function d(m) {
    let _ = m.target;
    for (; !_.dataset.menuIgnore; )
      t(3, f = _), _ = _.parentNode;
  }
  return l.$$set = (m) => {
    "options" in m && t(0, r = m.options), "at" in m && t(1, a = m.at), "css" in m && t(2, o = m.css), "$$scope" in m && t(8, i = m.$$scope);
  }, [r, a, o, f, c, d, u, n, i];
}
class tm extends ee {
  constructor(e) {
    super(), x(this, e, em, xd, Z, { options: 0, at: 1, css: 2, handler: 6 });
  }
  get handler() {
    return this.$$.ctx[6];
  }
}
function Di(l) {
  let e, t, n, i, s, r, a, o, u;
  t = new Te({
    props: {
      css: `wxi-angle-${/*row*/
      l[0].collapsed ? "right" : "down"}`
    }
  }), t.$on(
    "click",
    /*handleRowCollapse*/
    l[8]
  );
  function f(_, h) {
    return (
      /*renaming*/
      _[2] ? lm : nm
    );
  }
  let c = f(l), d = c(l), m = (
    /*isMenuVisible*/
    l[7] && Ei(l)
  );
  return {
    c() {
      e = I("div"), N(t.$$.fragment), n = H(), i = I("div"), d.c(), s = H(), m && m.c(), r = se(), g(e, "class", "wx-label-icon svelte-9z9yku"), g(i, "class", "wx-label-text svelte-9z9yku");
    },
    m(_, h) {
      v(_, e, h), R(t, e, null), v(_, n, h), v(_, i, h), d.m(i, null), v(_, s, h), m && m.m(_, h), v(_, r, h), a = !0, o || (u = te(
        i,
        "dblclick",
        /*handleRowRename*/
        l[14]
      ), o = !0);
    },
    p(_, h) {
      const w = {};
      h[0] & /*row*/
      1 && (w.css = `wxi-angle-${/*row*/
      _[0].collapsed ? "right" : "down"}`), t.$set(w), c === (c = f(_)) && d ? d.p(_, h) : (d.d(1), d = c(_), d && (d.c(), d.m(i, null))), /*isMenuVisible*/
      _[7] ? m ? (m.p(_, h), h[0] & /*isMenuVisible*/
      128 && b(m, 1)) : (m = Ei(_), m.c(), b(m, 1), m.m(r.parentNode, r)) : m && (W(), p(m, 1, 1, () => {
        m = null;
      }), Y());
    },
    i(_) {
      a || (b(t.$$.fragment, _), b(m), a = !0);
    },
    o(_) {
      p(t.$$.fragment, _), p(m), a = !1;
    },
    d(_) {
      _ && (k(e), k(n), k(i), k(s), k(r)), A(t), d.d(), m && m.d(_), o = !1, u();
    }
  };
}
function nm(l) {
  let e = (
    /*row*/
    l[0].label + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i[0] & /*row*/
      1 && e !== (e = /*row*/
      n[0].label + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function lm(l) {
  let e, t, n, i;
  return {
    c() {
      e = I("input"), g(e, "type", "text"), g(e, "class", "wx-input svelte-9z9yku"), e.value = t = /*row*/
      l[0].label;
    },
    m(s, r) {
      v(s, e, r), n || (i = [
        te(
          e,
          "input",
          /*handleLabelInput*/
          l[15]
        ),
        te(
          e,
          "keypress",
          /*handleInputKeypress*/
          l[16]
        ),
        te(
          e,
          "blur",
          /*endRenaming*/
          l[13]
        ),
        Oe(rm.call(null, e))
      ], n = !0);
    },
    p(s, r) {
      r[0] & /*row*/
      1 && t !== (t = /*row*/
      s[0].label) && e.value !== t && (e.value = t);
    },
    d(s) {
      s && k(e), n = !1, De(i);
    }
  };
}
function Ei(l) {
  let e, t;
  return e = new hn({
    props: {
      options: (
        /*menuItems*/
        l[3]
      ),
      $$slots: { default: [im] },
      $$scope: { ctx: l }
    }
  }), e.$on(
    "click",
    /*handleMenuAction*/
    l[17]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*menuItems*/
      8 && (s.options = /*menuItems*/
      n[3]), i[0] & /*$$scope, menuEl*/
      536870944 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function im(l) {
  let e, t, n;
  return t = new Te({ props: { css: "wxi-dots-h" } }), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-menu svelte-9z9yku");
    },
    m(i, s) {
      v(i, e, s), R(t, e, null), l[27](e), n = !0;
    },
    p: K,
    i(i) {
      n || (b(t.$$.fragment, i), n = !0);
    },
    o(i) {
      p(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(e), A(t), l[27](null);
    }
  };
}
function Li(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[26].default
  ), i = be(
    n,
    l,
    /*$$scope*/
    l[29],
    null
  );
  return {
    c() {
      e = I("div"), i && i.c(), g(e, "class", "wx-content svelte-9z9yku");
    },
    m(s, r) {
      v(s, e, r), i && i.m(e, null), t = !0;
    },
    p(s, r) {
      i && i.p && (!t || r[0] & /*$$scope*/
      536870912) && we(
        i,
        n,
        s,
        /*$$scope*/
        s[29],
        t ? pe(
          n,
          /*$$scope*/
          s[29],
          r,
          null
        ) : ke(
          /*$$scope*/
          s[29]
        ),
        null
      );
    },
    i(s) {
      t || (b(i, s), t = !0);
    },
    o(s) {
      p(i, s), t = !1;
    },
    d(s) {
      s && k(e), i && i.d(s);
    }
  };
}
function sm(l) {
  let e, t, n, i, s, r, a, o, u, f, c = (
    /*collapsable*/
    l[1] && Di(l)
  ), d = !/*row*/
  l[0].collapsed && Li(l);
  return {
    c() {
      e = I("div"), t = I("div"), c && c.c(), n = H(), i = I("div"), o = H(), d && d.c(), g(i, "class", s = "wx-label-line " + /*collapsable*/
      (l[1] ? "collapsable" : "") + " svelte-9z9yku"), g(t, "class", r = "wx-label " + /*collapsable*/
      (l[1] ? "collapsable" : "") + " svelte-9z9yku"), g(t, "data-row-header", a = /*row*/
      l[0].id), g(e, "class", u = Ve(
        /*rowClass*/
        l[6]
      ) + " svelte-9z9yku"), X(
        e,
        "wx-collapsed",
        /*row*/
        l[0].collapsed
      );
    },
    m(m, _) {
      v(m, e, _), M(e, t), c && c.m(t, null), M(t, n), M(t, i), l[28](t), M(e, o), d && d.m(e, null), f = !0;
    },
    p(m, _) {
      /*collapsable*/
      m[1] ? c ? (c.p(m, _), _[0] & /*collapsable*/
      2 && b(c, 1)) : (c = Di(m), c.c(), b(c, 1), c.m(t, n)) : c && (W(), p(c, 1, 1, () => {
        c = null;
      }), Y()), (!f || _[0] & /*collapsable*/
      2 && s !== (s = "wx-label-line " + /*collapsable*/
      (m[1] ? "collapsable" : "") + " svelte-9z9yku")) && g(i, "class", s), (!f || _[0] & /*collapsable*/
      2 && r !== (r = "wx-label " + /*collapsable*/
      (m[1] ? "collapsable" : "") + " svelte-9z9yku")) && g(t, "class", r), (!f || _[0] & /*row*/
      1 && a !== (a = /*row*/
      m[0].id)) && g(t, "data-row-header", a), /*row*/
      m[0].collapsed ? d && (W(), p(d, 1, 1, () => {
        d = null;
      }), Y()) : d ? (d.p(m, _), _[0] & /*row*/
      1 && b(d, 1)) : (d = Li(m), d.c(), b(d, 1), d.m(e, null)), (!f || _[0] & /*rowClass*/
      64 && u !== (u = Ve(
        /*rowClass*/
        m[6]
      ) + " svelte-9z9yku")) && g(e, "class", u), (!f || _[0] & /*rowClass, row*/
      65) && X(
        e,
        "wx-collapsed",
        /*row*/
        m[0].collapsed
      );
    },
    i(m) {
      f || (b(c), b(d), f = !0);
    },
    o(m) {
      p(c), p(d), f = !1;
    },
    d(m) {
      m && k(e), c && c.d(), l[28](null), d && d.d();
    }
  };
}
function rm(l) {
  l.focus();
}
function om(l, e, t) {
  let n, i, s, r, a, o, u, f, c, { $$slots: d = {}, $$scope: m } = e, { row: _ = {
    id: "default",
    label: "default",
    collapsed: !1
  } } = e, { rows: h = [] } = e, { api: w } = e, { collapsable: y = !0 } = e;
  const S = ye("wx-i18n").getGroup("kanban"), C = Re(), { showModal: T } = ye("wx-helpers");
  function L() {
    C("action", {
      action: "update-row",
      data: {
        id: _.id,
        row: { collapsed: !_.collapsed }
      }
    });
  }
  const { readonly: P, rowShape: E, cardsMap: F, columns: G } = w.getReactiveState();
  he(l, P, (me) => t(25, c = me)), he(l, E, (me) => t(24, f = me)), he(l, F, (me) => t(22, o = me)), he(l, G, (me) => t(23, u = me));
  let V = !1, O = null;
  function D() {
    V && O?.trim() && C("action", {
      action: "update-row",
      data: { id: _.id, row: { label: O } }
    }), t(2, V = !1), O = null;
  }
  function j() {
    n && t(2, V = !0);
  }
  function z(me) {
    O = me.target.value;
  }
  function q(me) {
    me.charCode === 13 && D();
  }
  function J(me) {
    const Me = me === "up" ? i - 1 : i + 2, Be = h[Me]?.id;
    C("action", {
      action: "move-row",
      data: { id: _.id, before: Be }
    });
  }
  function U(me) {
    const Me = me.detail.action;
    if (Me) {
      if (Me.onClick) {
        Me.onClick({ id: Me.id, item: Me, row: _ });
        return;
      }
      switch (Me.id) {
        case "set-edit":
          j();
          break;
        case "delete-row": {
          (f.confirmDeletion ?? !0 ? T({
            message: S("Would you like to delete this row?")
          }) : Promise.resolve()).then(() => {
            C("action", {
              action: "delete-row",
              data: { id: _.id }
            });
          }).catch(() => {
          });
          break;
        }
        case "move-row:up":
          J("up");
          break;
        case "move-row:down":
          J("down");
          break;
      }
    }
  }
  let ne, Q;
  const B = (me, Me, Be, de) => {
    const Ee = de.menu.items({ rows: Be, rowIndex: Me, row: me });
    return !Ee || !Ee.length ? null : Ee.map((Ae) => _n(Ae, S));
  };
  function le(me, Me, Be, de) {
    let Ee = "wx-row";
    if (me.collapsed && (Ee += " wx-collapsed"), me.css && (Ee += " " + me.css), Me && Me.css) {
      let Ae = [];
      Be.forEach((Pe) => Ae = Ae.concat(de[ze(Pe.id, me.id)])), Ee += " " + Me.css(me, Ae);
    }
    return Ee;
  }
  function ge(me) {
    fe[me ? "unshift" : "push"](() => {
      Q = me, t(5, Q);
    });
  }
  function He(me) {
    fe[me ? "unshift" : "push"](() => {
      ne = me, t(4, ne);
    });
  }
  return l.$$set = (me) => {
    "row" in me && t(0, _ = me.row), "rows" in me && t(18, h = me.rows), "api" in me && t(19, w = me.api), "collapsable" in me && t(1, y = me.collapsable), "$$scope" in me && t(29, m = me.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*$readonly*/
    33554432 && t(20, n = c.edit), l.$$.dirty[0] & /*rows, row*/
    262145 && t(21, i = h.findIndex((me) => me.id === _.id)), l.$$.dirty[0] & /*row, rowIndex, rows, $rowShape*/
    19136513 && t(3, s = B(_, i, h, f)), l.$$.dirty[0] & /*$rowShape, menuItems, edit, renaming*/
    17825804 && t(7, r = f.menu.show && !!s && n && !V), l.$$.dirty[0] & /*row, $rowShape, $columns, $cardsMap*/
    29360129 && t(6, a = le(_, f, u, o));
  }, [
    _,
    y,
    V,
    s,
    ne,
    Q,
    a,
    r,
    L,
    P,
    E,
    F,
    G,
    D,
    j,
    z,
    q,
    U,
    h,
    w,
    n,
    i,
    o,
    u,
    f,
    c,
    d,
    ge,
    He,
    m
  ];
}
class No extends ee {
  constructor(e) {
    super(), x(
      this,
      e,
      om,
      sm,
      Z,
      {
        row: 0,
        rows: 18,
        api: 19,
        collapsable: 1
      },
      null,
      [-1, -1]
    );
  }
}
function Ri(l) {
  let e, t;
  return {
    c() {
      e = I("div"), t = $(
        /*label*/
        l[0]
      ), g(e, "class", "wx-label svelte-fhl0ry");
    },
    m(n, i) {
      v(n, e, i), M(e, t);
    },
    p(n, i) {
      i & /*label*/
      1 && re(
        t,
        /*label*/
        n[0]
      );
    },
    d(n) {
      n && k(e);
    }
  };
}
function Ai(l) {
  let e, t;
  return {
    c() {
      e = I("div"), t = $(
        /*progress*/
        l[2]
      ), g(e, "class", "wx-value svelte-fhl0ry");
    },
    m(n, i) {
      v(n, e, i), M(e, t);
    },
    p(n, i) {
      i & /*progress*/
      4 && re(
        t,
        /*progress*/
        n[2]
      );
    },
    d(n) {
      n && k(e);
    }
  };
}
function am(l) {
  let e, t, n, i, s, r = (
    /*label*/
    l[0] && Ri(l)
  ), a = (
    /*showValue*/
    l[1] && Ai(l)
  );
  return {
    c() {
      e = I("div"), r && r.c(), t = H(), n = I("div"), i = I("div"), s = H(), a && a.c(), g(i, "class", "wx-progress svelte-fhl0ry"), g(
        i,
        "style",
        /*bgStyle*/
        l[3]
      ), g(n, "class", "wx-wrap svelte-fhl0ry"), g(e, "class", "wx-layout svelte-fhl0ry");
    },
    m(o, u) {
      v(o, e, u), r && r.m(e, null), M(e, t), M(e, n), M(n, i), M(n, s), a && a.m(n, null);
    },
    p(o, [u]) {
      /*label*/
      o[0] ? r ? r.p(o, u) : (r = Ri(o), r.c(), r.m(e, t)) : r && (r.d(1), r = null), u & /*bgStyle*/
      8 && g(
        i,
        "style",
        /*bgStyle*/
        o[3]
      ), /*showValue*/
      o[1] ? a ? a.p(o, u) : (a = Ai(o), a.c(), a.m(n, null)) : a && (a.d(1), a = null);
    },
    i: K,
    o: K,
    d(o) {
      o && k(e), r && r.d(), a && a.d();
    }
  };
}
function um(l, e, t) {
  let { label: n = "" } = e, { min: i = 0 } = e, { max: s = 100 } = e, { value: r = 0 } = e, { showValue: a = !0 } = e, o = "0", u = "";
  return l.$$set = (f) => {
    "label" in f && t(0, n = f.label), "min" in f && t(4, i = f.min), "max" in f && t(5, s = f.max), "value" in f && t(6, r = f.value), "showValue" in f && t(1, a = f.showValue);
  }, l.$$.update = () => {
    l.$$.dirty & /*value, min, max, progress*/
    116 && (t(2, o = Math.round((r - i) / (s - i) * 100) + "%"), t(3, u = `background: linear-gradient(90deg, var(--wx-color-primary) 0% ${o}, var(--wx-kanban-progress-inactive-color) ${o} 100%);`));
  }, [n, a, o, u, i, s, r];
}
class fm extends ee {
  constructor(e) {
    super(), x(this, e, um, am, Z, {
      label: 0,
      min: 4,
      max: 5,
      value: 6,
      showValue: 1
    });
  }
}
function cm(l) {
  let e;
  return {
    c() {
      e = $(
        /*firstLetters*/
        l[5]
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*firstLetters*/
      32 && re(
        e,
        /*firstLetters*/
        t[5]
      );
    },
    d(t) {
      t && k(e);
    }
  };
}
function dm(l) {
  let e = (
    /*data*/
    l[0].label + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i & /*data*/
      1 && e !== (e = /*data*/
      n[0].label + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function mm(l) {
  let e, t, n;
  return {
    c() {
      e = I("img"), xt(e.src, t = /*data*/
      l[0].avatar) || g(e, "src", t), g(e, "alt", n = /*data*/
      l[0].label), g(e, "class", "svelte-vorcau");
    },
    m(i, s) {
      v(i, e, s);
    },
    p(i, s) {
      s & /*data*/
      1 && !xt(e.src, t = /*data*/
      i[0].avatar) && g(e, "src", t), s & /*data*/
      1 && n !== (n = /*data*/
      i[0].label) && g(e, "alt", n);
    },
    d(i) {
      i && k(e);
    }
  };
}
function _m(l) {
  let e, t;
  function n(r, a) {
    return (
      /*data*/
      r[0].avatar ? mm : (
        /*noTransform*/
        r[1] ? dm : cm
      )
    );
  }
  let i = n(l), s = i(l);
  return {
    c() {
      e = I("div"), s.c(), g(e, "class", t = "wx-user " + /*size*/
      l[2] + " svelte-vorcau"), g(
        e,
        "style",
        /*style*/
        l[4]
      ), X(
        e,
        "border",
        /*border*/
        l[3]
      );
    },
    m(r, a) {
      v(r, e, a), s.m(e, null);
    },
    p(r, [a]) {
      i === (i = n(r)) && s ? s.p(r, a) : (s.d(1), s = i(r), s && (s.c(), s.m(e, null))), a & /*size*/
      4 && t !== (t = "wx-user " + /*size*/
      r[2] + " svelte-vorcau") && g(e, "class", t), a & /*style*/
      16 && g(
        e,
        "style",
        /*style*/
        r[4]
      ), a & /*size, border*/
      12 && X(
        e,
        "border",
        /*border*/
        r[3]
      );
    },
    i: K,
    o: K,
    d(r) {
      r && k(e), s.d();
    }
  };
}
function hm(l, e, t) {
  let n, { data: i = { label: "", avatar: "", avatarColor: "" } } = e, { noTransform: s = !1 } = e, { size: r = "normal" } = e, { border: a = !0 } = e, o = "";
  return l.$$set = (u) => {
    "data" in u && t(0, i = u.data), "noTransform" in u && t(1, s = u.noTransform), "size" in u && t(2, r = u.size), "border" in u && t(3, a = u.border);
  }, l.$$.update = () => {
    l.$$.dirty & /*data*/
    1 && t(5, n = i.label.split(" ").map((u) => u[0]).join("")), l.$$.dirty & /*data*/
    1 && i.avatarColor && t(4, o = `background: ${i.avatarColor}; color: var(--wx-color-primary-font);`);
  }, [i, s, r, a, o, n];
}
class Et extends ee {
  constructor(e) {
    super(), x(this, e, hm, _m, Z, {
      data: 0,
      noTransform: 1,
      size: 2,
      border: 3
    });
  }
}
function Pi(l, e, t) {
  const n = l.slice();
  return n[10] = e[t], n;
}
function Ni(l) {
  let e, t = [], n = /* @__PURE__ */ new Map(), i, s = ue(
    /*footerValues*/
    l[3].users
  );
  const r = (a) => (
    /*user*/
    a[10].id
  );
  for (let a = 0; a < s.length; a += 1) {
    let o = Pi(l, s, a), u = r(o);
    n.set(u, t[a] = zi(u, o));
  }
  return {
    c() {
      e = I("div");
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      g(e, "class", "wx-users svelte-t8nmm1");
    },
    m(a, o) {
      v(a, e, o);
      for (let u = 0; u < t.length; u += 1)
        t[u] && t[u].m(e, null);
      i = !0;
    },
    p(a, o) {
      o & /*footerValues*/
      8 && (s = ue(
        /*footerValues*/
        a[3].users
      ), W(), t = Fe(t, o, r, 1, a, s, n, e, Ke, zi, null, Pi), Y());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < s.length; o += 1)
          b(t[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < t.length; o += 1)
        p(t[o]);
      i = !1;
    },
    d(a) {
      a && k(e);
      for (let o = 0; o < t.length; o += 1)
        t[o].d();
    }
  };
}
function zi(l, e) {
  let t, n, i;
  return n = new Et({
    props: {
      data: (
        /*user*/
        e[10]
      ),
      noTransform: (
        /*user*/
        e[10].id === "$total"
      )
    }
  }), {
    key: l,
    first: null,
    c() {
      t = se(), N(n.$$.fragment), this.first = t;
    },
    m(s, r) {
      v(s, t, r), R(n, s, r), i = !0;
    },
    p(s, r) {
      e = s;
      const a = {};
      r & /*footerValues*/
      8 && (a.data = /*user*/
      e[10]), r & /*footerValues*/
      8 && (a.noTransform = /*user*/
      e[10].id === "$total"), n.$set(a);
    },
    i(s) {
      i || (b(n.$$.fragment, s), i = !0);
    },
    o(s) {
      p(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && k(t), A(n, s);
    }
  };
}
function Hi(l) {
  let e, t, n, i, s, r;
  t = new Te({ props: { css: "wxi-calendar" } });
  let a = (
    /*footerValues*/
    l[3].startDate && Oi(l)
  ), o = (
    /*footerValues*/
    l[3].endDate && /*footerValues*/
    l[3].startDate && Fi()
  ), u = (
    /*footerValues*/
    l[3].endDate && qi(l)
  );
  return {
    c() {
      e = I("div"), N(t.$$.fragment), n = H(), a && a.c(), i = H(), o && o.c(), s = H(), u && u.c(), g(e, "class", "wx-date svelte-t8nmm1");
    },
    m(f, c) {
      v(f, e, c), R(t, e, null), M(e, n), a && a.m(e, null), M(e, i), o && o.m(e, null), M(e, s), u && u.m(e, null), r = !0;
    },
    p(f, c) {
      /*footerValues*/
      f[3].startDate ? a ? a.p(f, c) : (a = Oi(f), a.c(), a.m(e, i)) : a && (a.d(1), a = null), /*footerValues*/
      f[3].endDate && /*footerValues*/
      f[3].startDate ? o || (o = Fi(), o.c(), o.m(e, s)) : o && (o.d(1), o = null), /*footerValues*/
      f[3].endDate ? u ? u.p(f, c) : (u = qi(f), u.c(), u.m(e, null)) : u && (u.d(1), u = null);
    },
    i(f) {
      r || (b(t.$$.fragment, f), r = !0);
    },
    o(f) {
      p(t.$$.fragment, f), r = !1;
    },
    d(f) {
      f && k(e), A(t), a && a.d(), o && o.d(), u && u.d();
    }
  };
}
function Oi(l) {
  let e, t = (
    /*footerValues*/
    l[3].startDate + ""
  ), n;
  return {
    c() {
      e = I("span"), n = $(t), g(e, "class", "wx-date-value svelte-t8nmm1");
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s & /*footerValues*/
      8 && t !== (t = /*footerValues*/
      i[3].startDate + "") && re(n, t);
    },
    d(i) {
      i && k(e);
    }
  };
}
function Fi(l) {
  let e;
  return {
    c() {
      e = $("-");
    },
    m(t, n) {
      v(t, e, n);
    },
    d(t) {
      t && k(e);
    }
  };
}
function qi(l) {
  let e, t = (
    /*footerValues*/
    l[3].endDate + ""
  ), n;
  return {
    c() {
      e = I("span"), n = $(t), g(e, "class", "wx-date-value svelte-t8nmm1");
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s & /*footerValues*/
      8 && t !== (t = /*footerValues*/
      i[3].endDate + "") && re(n, t);
    },
    d(i) {
      i && k(e);
    }
  };
}
function ji(l) {
  let e, t, n, i;
  return t = new Te({
    props: {
      css: "wxi-like",
      $$slots: { default: [gm] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "click",
    /*handleVote*/
    l[5]
  ), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-votes svelte-t8nmm1"), g(e, "data-kanban-id", n = /*voteClickable*/
      l[2] ? "wx-vote-card-button" : ""), X(
        e,
        "wx-kanban-editor-voted",
        /*cardFields*/
        l[0].votes?.includes(
          /*$currentUser*/
          l[4]
        )
      ), X(
        e,
        "wx-clickable",
        /*voteClickable*/
        l[2]
      );
    },
    m(s, r) {
      v(s, e, r), R(t, e, null), i = !0;
    },
    p(s, r) {
      const a = {};
      r & /*$$scope, footerValues*/
      8200 && (a.$$scope = { dirty: r, ctx: s }), t.$set(a), (!i || r & /*voteClickable*/
      4 && n !== (n = /*voteClickable*/
      s[2] ? "wx-vote-card-button" : "")) && g(e, "data-kanban-id", n), (!i || r & /*cardFields, $currentUser*/
      17) && X(
        e,
        "wx-kanban-editor-voted",
        /*cardFields*/
        s[0].votes?.includes(
          /*$currentUser*/
          s[4]
        )
      ), (!i || r & /*voteClickable*/
      4) && X(
        e,
        "wx-clickable",
        /*voteClickable*/
        s[2]
      );
    },
    i(s) {
      i || (b(t.$$.fragment, s), i = !0);
    },
    o(s) {
      p(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && k(e), A(t);
    }
  };
}
function gm(l) {
  let e, t = (
    /*footerValues*/
    l[3].votes + ""
  ), n;
  return {
    c() {
      e = I("span"), n = $(t), g(e, "class", "wx-item-value svelte-t8nmm1");
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s & /*footerValues*/
      8 && t !== (t = /*footerValues*/
      i[3].votes + "") && re(n, t);
    },
    d(i) {
      i && k(e);
    }
  };
}
function Vi(l) {
  let e, t, n;
  return t = new Te({
    props: {
      css: "wxi-message",
      $$slots: { default: [bm] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-comments svelte-t8nmm1");
    },
    m(i, s) {
      v(i, e, s), R(t, e, null), n = !0;
    },
    p(i, s) {
      const r = {};
      s & /*$$scope, footerValues*/
      8200 && (r.$$scope = { dirty: s, ctx: i }), t.$set(r);
    },
    i(i) {
      n || (b(t.$$.fragment, i), n = !0);
    },
    o(i) {
      p(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(e), A(t);
    }
  };
}
function bm(l) {
  let e, t = (
    /*footerValues*/
    l[3].comments + ""
  ), n;
  return {
    c() {
      e = I("span"), n = $(t), g(e, "class", "wx-item-value svelte-t8nmm1");
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s & /*footerValues*/
      8 && t !== (t = /*footerValues*/
      i[3].comments + "") && re(n, t);
    },
    d(i) {
      i && k(e);
    }
  };
}
function Ui(l) {
  let e, t, n;
  return t = new Te({
    props: {
      css: "wxi-paperclip",
      $$slots: { default: [pm] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-attached svelte-t8nmm1");
    },
    m(i, s) {
      v(i, e, s), R(t, e, null), n = !0;
    },
    p(i, s) {
      const r = {};
      s & /*$$scope, footerValues*/
      8200 && (r.$$scope = { dirty: s, ctx: i }), t.$set(r);
    },
    i(i) {
      n || (b(t.$$.fragment, i), n = !0);
    },
    o(i) {
      p(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(e), A(t);
    }
  };
}
function pm(l) {
  let e, t = (
    /*footerValues*/
    l[3].attached + ""
  ), n;
  return {
    c() {
      e = I("span"), n = $(t), g(e, "class", "wx-item-value svelte-t8nmm1");
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s & /*footerValues*/
      8 && t !== (t = /*footerValues*/
      i[3].attached + "") && re(n, t);
    },
    d(i) {
      i && k(e);
    }
  };
}
function wm(l) {
  let e, t, n, i, s, r, a, o, u, f = (
    /*footerValues*/
    l[3].users && Ni(l)
  ), c = (
    /*footerValues*/
    (l[3].endDate || /*footerValues*/
    l[3].startDate) && Hi(l)
  ), d = (
    /*footerValues*/
    (l[3].votes || /*footerValues*/
    l[3].votes === 0 && /*voteClickable*/
    l[2]) && ji(l)
  ), m = (
    /*footerValues*/
    l[3].comments && Vi(l)
  ), _ = (
    /*footerValues*/
    l[3].attached && Ui(l)
  );
  return {
    c() {
      e = I("div"), f && f.c(), t = H(), n = I("div"), i = I("div"), c && c.c(), s = H(), r = I("div"), d && d.c(), a = H(), m && m.c(), o = H(), _ && _.c(), g(i, "class", "wx-icons-container svelte-t8nmm1"), g(r, "class", "wx-icons-container svelte-t8nmm1"), g(n, "class", "wx-card-icons svelte-t8nmm1"), g(e, "class", "wx-footer svelte-t8nmm1"), X(e, "wx-with-content", !!Object.keys(
        /*footerValues*/
        l[3]
      ).length);
    },
    m(h, w) {
      v(h, e, w), f && f.m(e, null), M(e, t), M(e, n), M(n, i), c && c.m(i, null), M(n, s), M(n, r), d && d.m(r, null), M(r, a), m && m.m(r, null), M(r, o), _ && _.m(r, null), u = !0;
    },
    p(h, [w]) {
      /*footerValues*/
      h[3].users ? f ? (f.p(h, w), w & /*footerValues*/
      8 && b(f, 1)) : (f = Ni(h), f.c(), b(f, 1), f.m(e, t)) : f && (W(), p(f, 1, 1, () => {
        f = null;
      }), Y()), /*footerValues*/
      h[3].endDate || /*footerValues*/
      h[3].startDate ? c ? (c.p(h, w), w & /*footerValues*/
      8 && b(c, 1)) : (c = Hi(h), c.c(), b(c, 1), c.m(i, null)) : c && (W(), p(c, 1, 1, () => {
        c = null;
      }), Y()), /*footerValues*/
      h[3].votes || /*footerValues*/
      h[3].votes === 0 && /*voteClickable*/
      h[2] ? d ? (d.p(h, w), w & /*footerValues, voteClickable*/
      12 && b(d, 1)) : (d = ji(h), d.c(), b(d, 1), d.m(r, a)) : d && (W(), p(d, 1, 1, () => {
        d = null;
      }), Y()), /*footerValues*/
      h[3].comments ? m ? (m.p(h, w), w & /*footerValues*/
      8 && b(m, 1)) : (m = Vi(h), m.c(), b(m, 1), m.m(r, o)) : m && (W(), p(m, 1, 1, () => {
        m = null;
      }), Y()), /*footerValues*/
      h[3].attached ? _ ? (_.p(h, w), w & /*footerValues*/
      8 && b(_, 1)) : (_ = Ui(h), _.c(), b(_, 1), _.m(r, null)) : _ && (W(), p(_, 1, 1, () => {
        _ = null;
      }), Y()), (!u || w & /*Object, footerValues*/
      8) && X(e, "wx-with-content", !!Object.keys(
        /*footerValues*/
        h[3]
      ).length);
    },
    i(h) {
      u || (b(f), b(c), b(d), b(m), b(_), u = !0);
    },
    o(h) {
      p(f), p(c), p(d), p(m), p(_), u = !1;
    },
    d(h) {
      h && k(e), f && f.d(), c && c.d(), d && d.d(), m && m.d(), _ && _.d();
    }
  };
}
const Ki = "%M %d";
function km(l, e, t) {
  let n, i, s, r = K, a = () => (r(), r = Ge(m, (h) => t(4, s = h)), m);
  l.$$.on_destroy.push(() => r());
  let { cardFields: o } = e, { cardShape: u } = e, { api: f } = e;
  const c = ye("wx-i18n");
  function d(h, w) {
    let y = {};
    const { show: S } = w?.users || {}, C = h.users;
    if (S && C) {
      const V = (Array.isArray(C) ? C : [C]).reduce(
        (j, z) => {
          const q = w.users.values?.find((J) => J.id === z);
          return q && j.push(q), j;
        },
        []
      );
      let O = V.map((j) => ({ ...j, label: j.label || "" })), D = 2;
      u.users.maxCount === !1 ? D = 1 / 0 : u.users.maxCount && (D = u.users.maxCount), V.length > D && (O = O.splice(0, D), O.push({
        label: `+${V.length - O.length}`,
        id: "$total"
      })), O?.length && (y.users = O);
    }
    const { show: T, format: L } = w.start_date || {}, { show: P, format: E } = w.end_date || {};
    let { end_date: F, start_date: G } = h;
    return (T || P) && (G && (y.startDate = Ot(L || Ki, c.getRaw().calendar)(G)), F && (y.endDate = Ot(E || Ki, c.getRaw().calendar)(F))), w?.attached?.show && h.attached?.length && (y.attached = h.attached.length), w.comments?.show && h.comments?.length && (y.comments = h.comments?.length), w.votes?.show && (y.votes = h.votes?.length || 0), y;
  }
  let m = null;
  a();
  function _() {
    if (i) {
      const h = o.id;
      o.votes?.includes(s) ? f.exec("delete-vote", { cardId: h }) : f.exec("add-vote", { cardId: h });
    }
  }
  return l.$$set = (h) => {
    "cardFields" in h && t(0, o = h.cardFields), "cardShape" in h && t(6, u = h.cardShape), "api" in h && t(7, f = h.api);
  }, l.$$.update = () => {
    l.$$.dirty & /*cardFields, cardShape*/
    65 && t(3, n = d(o, u)), l.$$.dirty & /*api*/
    128 && f && a(t(1, m = f.getReactiveState().currentUser)), l.$$.dirty & /*cardShape*/
    64 && t(2, i = u.votes?.clickable);
  }, [
    o,
    m,
    i,
    n,
    s,
    _,
    u,
    f
  ];
}
class vm extends ee {
  constructor(e) {
    super(), x(this, e, km, wm, Z, { cardFields: 0, cardShape: 6, api: 7 });
  }
}
function Bi(l, e, t) {
  const n = l.slice();
  return n[3] = e[t], n;
}
function Wi(l) {
  let e;
  function t(s, r) {
    return (
      /*field*/
      s[3].type === "priority" ? Sm : ym
    );
  }
  let n = t(l), i = n(l);
  return {
    c() {
      i.c(), e = se();
    },
    m(s, r) {
      i.m(s, r), v(s, e, r);
    },
    p(s, r) {
      n === (n = t(s)) && i ? i.p(s, r) : (i.d(1), i = n(s), i && (i.c(), i.m(e.parentNode, e)));
    },
    d(s) {
      s && k(e), i.d(s);
    }
  };
}
function ym(l) {
  let e, t, n, i = (
    /*field*/
    l[3].value + ""
  ), s, r, a, o = (
    /*field*/
    l[3]?.label && Yi(l)
  );
  return {
    c() {
      e = I("div"), o && o.c(), t = H(), n = I("span"), s = $(i), r = H(), g(n, "class", "wx-value"), g(e, "class", a = "wx-field " + /*field*/
      (l[3].css || "") + " svelte-16qucgr");
    },
    m(u, f) {
      v(u, e, f), o && o.m(e, null), M(e, t), M(e, n), M(n, s), M(e, r);
    },
    p(u, f) {
      /*field*/
      u[3]?.label ? o ? o.p(u, f) : (o = Yi(u), o.c(), o.m(e, t)) : o && (o.d(1), o = null), f & /*headerValues*/
      1 && i !== (i = /*field*/
      u[3].value + "") && re(s, i), f & /*headerValues*/
      1 && a !== (a = "wx-field " + /*field*/
      (u[3].css || "") + " svelte-16qucgr") && g(e, "class", a);
    },
    d(u) {
      u && k(e), o && o.d();
    }
  };
}
function Sm(l) {
  let e, t, n = (
    /*field*/
    l[3].value + ""
  ), i, s;
  return {
    c() {
      e = I("div"), t = I("span"), i = $(n), s = H(), g(t, "class", "wx-priority-label svelte-16qucgr"), g(e, "class", "wx-field wx-priority svelte-16qucgr"), ce(
        e,
        "background",
        /*field*/
        l[3].color
      );
    },
    m(r, a) {
      v(r, e, a), M(e, t), M(t, i), M(e, s);
    },
    p(r, a) {
      a & /*headerValues*/
      1 && n !== (n = /*field*/
      r[3].value + "") && re(i, n), a & /*headerValues*/
      1 && ce(
        e,
        "background",
        /*field*/
        r[3].color
      );
    },
    d(r) {
      r && k(e);
    }
  };
}
function Yi(l) {
  let e, t = (
    /*field*/
    l[3].label + ""
  ), n, i;
  return {
    c() {
      e = I("span"), n = $(t), i = $(":"), g(e, "class", "wx-label");
    },
    m(s, r) {
      v(s, e, r), M(e, n), M(e, i);
    },
    p(s, r) {
      r & /*headerValues*/
      1 && t !== (t = /*field*/
      s[3].label + "") && re(n, t);
    },
    d(s) {
      s && k(e);
    }
  };
}
function Gi(l) {
  let e, t = (
    /*field*/
    l[3].value && Wi(l)
  );
  return {
    c() {
      t && t.c(), e = se();
    },
    m(n, i) {
      t && t.m(n, i), v(n, e, i);
    },
    p(n, i) {
      /*field*/
      n[3].value ? t ? t.p(n, i) : (t = Wi(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && k(e), t && t.d(n);
    }
  };
}
function Cm(l) {
  let e, t = ue(
    /*headerValues*/
    l[0]
  ), n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i] = Gi(Bi(l, t, i));
  return {
    c() {
      e = I("div");
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      g(e, "class", "wx-card-header svelte-16qucgr");
    },
    m(i, s) {
      v(i, e, s);
      for (let r = 0; r < n.length; r += 1)
        n[r] && n[r].m(e, null);
    },
    p(i, [s]) {
      if (s & /*headerValues*/
      1) {
        t = ue(
          /*headerValues*/
          i[0]
        );
        let r;
        for (r = 0; r < t.length; r += 1) {
          const a = Bi(i, t, r);
          n[r] ? n[r].p(a, s) : (n[r] = Gi(a), n[r].c(), n[r].m(e, null));
        }
        for (; r < n.length; r += 1)
          n[r].d(1);
        n.length = t.length;
      }
    },
    i: K,
    o: K,
    d(i) {
      i && k(e), ot(n, i);
    }
  };
}
function Im(l, e) {
  let t = [];
  if (e.priority?.show) {
    const i = e.priority.values?.find((s) => s.id === l.priority);
    i && t.push({
      type: "priority",
      value: i.label,
      color: i.color
    });
  }
  const n = e.headerFields;
  if (n) {
    const i = n.reduce(
      (s, r) => (l[r.key] && s.push({
        value: l[r.key],
        label: r.label,
        css: r.css
      }), s),
      []
    );
    i && t.push(...i);
  }
  return t;
}
function Mm(l, e, t) {
  let n, { cardFields: i } = e, { cardShape: s } = e;
  return l.$$set = (r) => {
    "cardFields" in r && t(1, i = r.cardFields), "cardShape" in r && t(2, s = r.cardShape);
  }, l.$$.update = () => {
    l.$$.dirty & /*cardFields, cardShape*/
    6 && t(0, n = Im(i, s));
  }, [n, i, s];
}
class Tm extends ee {
  constructor(e) {
    super(), x(this, e, Mm, Cm, Z, { cardFields: 1, cardShape: 2 });
  }
}
function Ji(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-color wx-rounded svelte-1emjf0g"), ce(
        e,
        "background",
        /*cardFields*/
        l[0].color
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*cardFields*/
      1 && ce(
        e,
        "background",
        /*cardFields*/
        t[0].color
      );
    },
    d(t) {
      t && k(e);
    }
  };
}
function Qi(l) {
  let e, t, n;
  return {
    c() {
      e = I("div"), t = I("img"), xt(t.src, n = /*coverURL*/
      l[7]) || g(t, "src", n), g(t, "alt", ""), g(t, "class", "svelte-1emjf0g"), g(e, "class", "wx-field wx-image svelte-1emjf0g"), X(e, "wx-rounded", !/*cardShape*/
      (l[1].color?.show && /*cardFields*/
      l[0].color));
    },
    m(i, s) {
      v(i, e, s), M(e, t);
    },
    p(i, s) {
      s & /*coverURL*/
      128 && !xt(t.src, n = /*coverURL*/
      i[7]) && g(t, "src", n), s & /*cardShape, cardFields*/
      3 && X(e, "wx-rounded", !/*cardShape*/
      (i[1].color?.show && /*cardFields*/
      i[0].color));
    },
    d(i) {
      i && k(e);
    }
  };
}
function Xi(l) {
  let e, t = (
    /*cardFields*/
    l[0].label + ""
  ), n;
  return {
    c() {
      e = I("span"), n = $(t);
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s & /*cardFields*/
      1 && t !== (t = /*cardFields*/
      i[0].label + "") && re(n, t);
    },
    d(i) {
      i && k(e);
    }
  };
}
function Zi(l) {
  let e, t, n, i, s;
  return n = new Te({ props: { css: "wxi-dots-v" } }), {
    c() {
      e = I("div"), t = I("div"), N(n.$$.fragment), g(t, "data-menu-id", i = /*cardFields*/
      l[0].id), g(e, "class", "wx-menu svelte-1emjf0g"), g(e, "data-ignore-selection", "true");
    },
    m(r, a) {
      v(r, e, a), M(e, t), R(n, t, null), s = !0;
    },
    p(r, a) {
      (!s || a & /*cardFields*/
      1 && i !== (i = /*cardFields*/
      r[0].id)) && g(t, "data-menu-id", i);
    },
    i(r) {
      s || (b(n.$$.fragment, r), s = !0);
    },
    o(r) {
      p(n.$$.fragment, r), s = !1;
    },
    d(r) {
      r && k(e), A(n);
    }
  };
}
function $i(l) {
  let e, t = (
    /*cardFields*/
    l[0].description + ""
  ), n;
  return {
    c() {
      e = I("div"), n = $(t), g(e, "class", "wx-field wx-description svelte-1emjf0g");
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s & /*cardFields*/
      1 && t !== (t = /*cardFields*/
      i[0].description + "") && re(n, t);
    },
    d(i) {
      i && k(e);
    }
  };
}
function xi(l) {
  let e, t, n;
  return t = new fm({
    props: {
      min: (
        /*cardShape*/
        l[1].progress?.config?.min || 0
      ),
      max: (
        /*cardShape*/
        l[1].progress?.config?.max || 100
      ),
      value: (
        /*cardFields*/
        l[0].progress
      )
    }
  }), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-field svelte-1emjf0g");
    },
    m(i, s) {
      v(i, e, s), R(t, e, null), n = !0;
    },
    p(i, s) {
      const r = {};
      s & /*cardShape*/
      2 && (r.min = /*cardShape*/
      i[1].progress?.config?.min || 0), s & /*cardShape*/
      2 && (r.max = /*cardShape*/
      i[1].progress?.config?.max || 100), s & /*cardFields*/
      1 && (r.value = /*cardFields*/
      i[0].progress), t.$set(r);
    },
    i(i) {
      n || (b(t.$$.fragment, i), n = !0);
    },
    o(i) {
      p(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(e), A(t);
    }
  };
}
function Dm(l) {
  let e, t, n, i, s, r, a, o, u, f, c, d, m, _, h = (
    /*cardShape*/
    l[1].color?.show && /*cardFields*/
    l[0].color && Ji(l)
  ), w = (
    /*cardShape*/
    l[1]?.cover?.show && /*coverURL*/
    l[7] && Qi(l)
  );
  i = new Tm({
    props: {
      cardFields: (
        /*cardFields*/
        l[0]
      ),
      cardShape: (
        /*cardShape*/
        l[1]
      )
    }
  });
  let y = (
    /*cardShape*/
    l[1]?.label?.show && /*cardFields*/
    l[0].label && Xi(l)
  ), S = (
    /*menu*/
    l[2] && Zi(l)
  ), C = (
    /*cardShape*/
    l[1]?.description?.show && /*cardFields*/
    l[0].description && $i(l)
  ), T = (
    /*cardShape*/
    l[1]?.progress?.show && /*cardFields*/
    l[0].progress && xi(l)
  );
  return d = new vm({
    props: {
      cardFields: (
        /*cardFields*/
        l[0]
      ),
      cardShape: (
        /*cardShape*/
        l[1]
      ),
      api: (
        /*api*/
        l[3]
      )
    }
  }), {
    c() {
      h && h.c(), e = H(), w && w.c(), t = H(), n = I("div"), N(i.$$.fragment), s = H(), r = I("div"), a = I("div"), y && y.c(), o = H(), S && S.c(), u = H(), C && C.c(), f = H(), T && T.c(), c = H(), N(d.$$.fragment), g(a, "class", "wx-field wx-label svelte-1emjf0g"), g(r, "class", "wx-body svelte-1emjf0g"), g(n, "class", m = Ve(
        /*css*/
        l[6]
      ) + " svelte-1emjf0g"), X(
        n,
        "wx-selected",
        /*selected*/
        l[5]
      ), X(
        n,
        "wx-dragging",
        /*dragging*/
        l[4]
      );
    },
    m(L, P) {
      h && h.m(L, P), v(L, e, P), w && w.m(L, P), v(L, t, P), v(L, n, P), R(i, n, null), M(n, s), M(n, r), M(r, a), y && y.m(a, null), M(a, o), S && S.m(a, null), M(r, u), C && C.m(r, null), M(r, f), T && T.m(r, null), M(n, c), R(d, n, null), _ = !0;
    },
    p(L, [P]) {
      /*cardShape*/
      L[1].color?.show && /*cardFields*/
      L[0].color ? h ? h.p(L, P) : (h = Ji(L), h.c(), h.m(e.parentNode, e)) : h && (h.d(1), h = null), /*cardShape*/
      L[1]?.cover?.show && /*coverURL*/
      L[7] ? w ? w.p(L, P) : (w = Qi(L), w.c(), w.m(t.parentNode, t)) : w && (w.d(1), w = null);
      const E = {};
      P & /*cardFields*/
      1 && (E.cardFields = /*cardFields*/
      L[0]), P & /*cardShape*/
      2 && (E.cardShape = /*cardShape*/
      L[1]), i.$set(E), /*cardShape*/
      L[1]?.label?.show && /*cardFields*/
      L[0].label ? y ? y.p(L, P) : (y = Xi(L), y.c(), y.m(a, o)) : y && (y.d(1), y = null), /*menu*/
      L[2] ? S ? (S.p(L, P), P & /*menu*/
      4 && b(S, 1)) : (S = Zi(L), S.c(), b(S, 1), S.m(a, null)) : S && (W(), p(S, 1, 1, () => {
        S = null;
      }), Y()), /*cardShape*/
      L[1]?.description?.show && /*cardFields*/
      L[0].description ? C ? C.p(L, P) : (C = $i(L), C.c(), C.m(r, f)) : C && (C.d(1), C = null), /*cardShape*/
      L[1]?.progress?.show && /*cardFields*/
      L[0].progress ? T ? (T.p(L, P), P & /*cardShape, cardFields*/
      3 && b(T, 1)) : (T = xi(L), T.c(), b(T, 1), T.m(r, null)) : T && (W(), p(T, 1, 1, () => {
        T = null;
      }), Y());
      const F = {};
      P & /*cardFields*/
      1 && (F.cardFields = /*cardFields*/
      L[0]), P & /*cardShape*/
      2 && (F.cardShape = /*cardShape*/
      L[1]), P & /*api*/
      8 && (F.api = /*api*/
      L[3]), d.$set(F), (!_ || P & /*css*/
      64 && m !== (m = Ve(
        /*css*/
        L[6]
      ) + " svelte-1emjf0g")) && g(n, "class", m), (!_ || P & /*css, selected*/
      96) && X(
        n,
        "wx-selected",
        /*selected*/
        L[5]
      ), (!_ || P & /*css, dragging*/
      80) && X(
        n,
        "wx-dragging",
        /*dragging*/
        L[4]
      );
    },
    i(L) {
      _ || (b(i.$$.fragment, L), b(S), b(T), b(d.$$.fragment, L), _ = !0);
    },
    o(L) {
      p(i.$$.fragment, L), p(S), p(T), p(d.$$.fragment, L), _ = !1;
    },
    d(L) {
      L && (k(e), k(t), k(n)), h && h.d(L), w && w.d(L), A(i), y && y.d(), S && S.d(), C && C.d(), T && T.d(), A(d);
    }
  };
}
function Em(l, e) {
  let t = "wx-content";
  return l.css && (t += " " + l.css), e.css ? () => t += ` ${e.css(l)}` : () => t;
}
function Lm(l, e, t) {
  let n, i, s, { cardFields: r } = e, { cardShape: a } = e, { menu: o = !0 } = e, { api: u } = e, { dragging: f } = e, { selected: c } = e;
  return l.$$set = (d) => {
    "cardFields" in d && t(0, r = d.cardFields), "cardShape" in d && t(1, a = d.cardShape), "menu" in d && t(2, o = d.menu), "api" in d && t(3, u = d.api), "dragging" in d && t(4, f = d.dragging), "selected" in d && t(5, c = d.selected);
  }, l.$$.update = () => {
    l.$$.dirty & /*cardFields*/
    1 && t(8, n = r?.attached?.find((d) => d.isCover)), l.$$.dirty & /*coverAttachment*/
    256 && t(7, i = n ? n.coverURL || n.url : null), l.$$.dirty & /*cardFields, cardShape*/
    3 && t(6, s = Em(r, a)());
  }, [
    r,
    a,
    o,
    u,
    f,
    c,
    s,
    i,
    n
  ];
}
class Ct extends ee {
  constructor(e) {
    super(), x(this, e, Lm, Dm, Z, {
      cardFields: 0,
      cardShape: 1,
      menu: 2,
      api: 3,
      dragging: 4,
      selected: 5
    });
  }
}
function Rm(l) {
  let e, t, n, i, s;
  var r = (
    /*cardTemplate*/
    l[4]
  );
  function a(o, u) {
    return {
      props: {
        api: (
          /*api*/
          o[7]
        ),
        cardFields: (
          /*cardFields*/
          o[0]
        ),
        dragging: (
          /*dragging*/
          o[1]
        ),
        selected: (
          /*selected*/
          o[2]
        ),
        cardShape: (
          /*cardShape*/
          o[3]
        ),
        menu: (
          /*menu*/
          o[6]
        )
      }
    };
  }
  return r && (t = Je(r, a(l)), t.$on(
    "action",
    /*action_handler*/
    l[10]
  )), {
    c() {
      e = I("div"), t && N(t.$$.fragment), g(e, "class", "wx-card svelte-7hhwxe"), g(e, "data-drag-item", n = /*cardFields*/
      l[0].id), ce(
        e,
        "height",
        /*cardHeightValue*/
        l[8]
      ), ce(
        e,
        "max-height",
        /*cardHeightValue*/
        l[8]
      ), g(e, "data-id", i = /*cardFields*/
      l[0].id), X(
        e,
        "wx-hidden",
        /*dragging*/
        l[1]
      ), X(
        e,
        "wx-selected",
        /*selected*/
        l[2]
      ), X(
        e,
        "wx-dimmed",
        /*meta*/
        l[5]?.dimmed
      );
    },
    m(o, u) {
      v(o, e, u), t && R(t, e, null), s = !0;
    },
    p(o, [u]) {
      if (u & /*cardTemplate*/
      16 && r !== (r = /*cardTemplate*/
      o[4])) {
        if (t) {
          W();
          const f = t;
          p(f.$$.fragment, 1, 0, () => {
            A(f, 1);
          }), Y();
        }
        r ? (t = Je(r, a(o)), t.$on(
          "action",
          /*action_handler*/
          o[10]
        ), N(t.$$.fragment), b(t.$$.fragment, 1), R(t, e, null)) : t = null;
      } else if (r) {
        const f = {};
        u & /*api*/
        128 && (f.api = /*api*/
        o[7]), u & /*cardFields*/
        1 && (f.cardFields = /*cardFields*/
        o[0]), u & /*dragging*/
        2 && (f.dragging = /*dragging*/
        o[1]), u & /*selected*/
        4 && (f.selected = /*selected*/
        o[2]), u & /*cardShape*/
        8 && (f.cardShape = /*cardShape*/
        o[3]), u & /*menu*/
        64 && (f.menu = /*menu*/
        o[6]), t.$set(f);
      }
      (!s || u & /*cardFields*/
      1 && n !== (n = /*cardFields*/
      o[0].id)) && g(e, "data-drag-item", n), (!s || u & /*cardHeightValue*/
      256) && ce(
        e,
        "height",
        /*cardHeightValue*/
        o[8]
      ), (!s || u & /*cardHeightValue*/
      256) && ce(
        e,
        "max-height",
        /*cardHeightValue*/
        o[8]
      ), (!s || u & /*cardFields*/
      1 && i !== (i = /*cardFields*/
      o[0].id)) && g(e, "data-id", i), (!s || u & /*dragging*/
      2) && X(
        e,
        "wx-hidden",
        /*dragging*/
        o[1]
      ), (!s || u & /*selected*/
      4) && X(
        e,
        "wx-selected",
        /*selected*/
        o[2]
      ), (!s || u & /*meta*/
      32) && X(
        e,
        "wx-dimmed",
        /*meta*/
        o[5]?.dimmed
      );
    },
    i(o) {
      s || (t && b(t.$$.fragment, o), s = !0);
    },
    o(o) {
      t && p(t.$$.fragment, o), s = !1;
    },
    d(o) {
      o && k(e), t && A(t);
    }
  };
}
function Am(l, e, t) {
  let n, { cardFields: i } = e, { dragging: s = !1 } = e, { selected: r = !1 } = e, { cardShape: a } = e, { cardTemplate: o } = e, { meta: u = null } = e, { cardHeight: f } = e, { menu: c } = e, { api: d } = e;
  function m(_) {
    ve.call(this, l, _);
  }
  return l.$$set = (_) => {
    "cardFields" in _ && t(0, i = _.cardFields), "dragging" in _ && t(1, s = _.dragging), "selected" in _ && t(2, r = _.selected), "cardShape" in _ && t(3, a = _.cardShape), "cardTemplate" in _ && t(4, o = _.cardTemplate), "meta" in _ && t(5, u = _.meta), "cardHeight" in _ && t(9, f = _.cardHeight), "menu" in _ && t(6, c = _.menu), "api" in _ && t(7, d = _.api);
  }, l.$$.update = () => {
    l.$$.dirty & /*cardHeight*/
    512 && t(8, n = f ? f + "px" : "auto");
  }, [
    i,
    s,
    r,
    a,
    o,
    u,
    c,
    d,
    n,
    f,
    m
  ];
}
class Jn extends ee {
  constructor(e) {
    super(), x(this, e, Am, Rm, Z, {
      cardFields: 0,
      dragging: 1,
      selected: 2,
      cardShape: 3,
      cardTemplate: 4,
      meta: 5,
      cardHeight: 9,
      menu: 6,
      api: 7
    });
  }
}
function Pm(l) {
  let e, t, n = (
    /*column*/
    l[0].label + ""
  ), i;
  return {
    c() {
      e = I("div"), t = I("div"), i = $(n), g(t, "class", "wx-label-text svelte-1betjxn"), g(e, "class", "wx-collapsed-label svelte-1betjxn");
    },
    m(s, r) {
      v(s, e, r), M(e, t), M(t, i);
    },
    p(s, [r]) {
      r & /*column*/
      1 && n !== (n = /*column*/
      s[0].label + "") && re(i, n);
    },
    i: K,
    o: K,
    d(s) {
      s && k(e);
    }
  };
}
function Nm(l, e, t) {
  let { column: n } = e, { columnState: i } = e;
  return l.$$set = (s) => {
    "column" in s && t(0, n = s.column), "columnState" in s && t(1, i = s.columnState);
  }, [n, i];
}
class zm extends ee {
  constructor(e) {
    super(), x(this, e, Nm, Pm, Z, { column: 0, columnState: 1 });
  }
}
const Hm = (l) => ({}), es = (l) => ({});
function ts(l, e, t) {
  const n = l.slice();
  return n[27] = e[t], n;
}
const Om = (l) => ({ item: l & /*visibleItems*/
16 }), ns = (l) => ({ item: (
  /*row*/
  l[27].data
) });
function ls(l, e) {
  let t, n, i, s, r;
  const a = (
    /*#slots*/
    e[15].default
  ), o = be(
    a,
    e,
    /*$$scope*/
    e[14],
    ns
  );
  return {
    key: l,
    first: null,
    c() {
      t = I("div"), o && o.c(), n = H(), g(t, "class", "wx-item svelte-12ih14s"), g(t, "data-id", i = /*row*/
      e[27].data.id), g(t, "data-index", s = /*row*/
      e[27].index), this.first = t;
    },
    m(u, f) {
      v(u, t, f), o && o.m(t, null), M(t, n), r = !0;
    },
    p(u, f) {
      e = u, o && o.p && (!r || f & /*$$scope, visibleItems*/
      16400) && we(
        o,
        a,
        e,
        /*$$scope*/
        e[14],
        r ? pe(
          a,
          /*$$scope*/
          e[14],
          f,
          Om
        ) : ke(
          /*$$scope*/
          e[14]
        ),
        ns
      ), (!r || f & /*visibleItems*/
      16 && i !== (i = /*row*/
      e[27].data.id)) && g(t, "data-id", i), (!r || f & /*visibleItems*/
      16 && s !== (s = /*row*/
      e[27].index)) && g(t, "data-index", s);
    },
    i(u) {
      r || (b(o, u), r = !0);
    },
    o(u) {
      p(o, u), r = !1;
    },
    d(u) {
      u && k(t), o && o.d(u);
    }
  };
}
function Fm(l) {
  let e, t, n = [], i = /* @__PURE__ */ new Map(), s, r, a, o, u, f = ue(
    /*visibleItems*/
    l[4]
  );
  const c = (_) => (
    /*row*/
    _[27].index
  );
  for (let _ = 0; _ < f.length; _ += 1) {
    let h = ts(l, f, _), w = c(h);
    i.set(w, n[_] = ls(w, h));
  }
  const d = (
    /*#slots*/
    l[15].extra
  ), m = be(
    d,
    l,
    /*$$scope*/
    l[14],
    es
  );
  return {
    c() {
      e = I("div"), t = I("div");
      for (let _ = 0; _ < n.length; _ += 1)
        n[_].c();
      s = H(), m && m.c(), g(t, "class", "wx-content svelte-12ih14s"), ce(
        t,
        "padding-top",
        /*top*/
        l[5] + "px"
      ), ce(
        t,
        "padding-bottom",
        /*bottom*/
        l[6] + "px"
      ), g(e, "class", "wx-virtual-list svelte-12ih14s"), ce(
        e,
        "height",
        /*height*/
        l[0]
      ), ut(() => (
        /*div1_elementresize_handler*/
        l[18].call(e)
      ));
    },
    m(_, h) {
      v(_, e, h), M(e, t);
      for (let w = 0; w < n.length; w += 1)
        n[w] && n[w].m(t, null);
      l[16](t), M(e, s), m && m.m(e, null), l[17](e), r = oa(
        e,
        /*div1_elementresize_handler*/
        l[18].bind(e)
      ), a = !0, o || (u = [
        te(
          e,
          "scroll",
          /*handleScroll*/
          l[7]
        ),
        Oe(Wn.call(null, e))
      ], o = !0);
    },
    p(_, [h]) {
      h & /*visibleItems, $$scope*/
      16400 && (f = ue(
        /*visibleItems*/
        _[4]
      ), W(), n = Fe(n, h, c, 1, _, f, i, t, Ke, ls, null, ts), Y()), (!a || h & /*top*/
      32) && ce(
        t,
        "padding-top",
        /*top*/
        _[5] + "px"
      ), (!a || h & /*bottom*/
      64) && ce(
        t,
        "padding-bottom",
        /*bottom*/
        _[6] + "px"
      ), m && m.p && (!a || h & /*$$scope*/
      16384) && we(
        m,
        d,
        _,
        /*$$scope*/
        _[14],
        a ? pe(
          d,
          /*$$scope*/
          _[14],
          h,
          Hm
        ) : ke(
          /*$$scope*/
          _[14]
        ),
        es
      ), (!a || h & /*height*/
      1) && ce(
        e,
        "height",
        /*height*/
        _[0]
      );
    },
    i(_) {
      if (!a) {
        for (let h = 0; h < f.length; h += 1)
          b(n[h]);
        b(m, _), a = !0;
      }
    },
    o(_) {
      for (let h = 0; h < n.length; h += 1)
        p(n[h]);
      p(m, _), a = !1;
    },
    d(_) {
      _ && k(e);
      for (let h = 0; h < n.length; h += 1)
        n[h].d();
      l[16](null), m && m.d(_), l[17](null), r(), o = !1, De(u);
    }
  };
}
function qm(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { items: s } = e, { scrollToId: r } = e, { height: a = "100%" } = e, { itemHeight: o = void 0 } = e, { start: u = 0 } = e, { end: f = 0 } = e;
  const c = Re();
  let d = [], m, _, h, w = 0, y, S = !1, C = 0, T = 0, L;
  async function P(z) {
    if (_.querySelector(`[data-id="${z}"]`))
      return;
    const J = s.findIndex((U) => U.id === z);
    J > -1 && (t(2, _.scrollTop = (J + 1) * L - w / 2, _), G(), z = null);
  }
  async function E(z, q, J, U) {
    await dt(), d.length = z.length, d.fill(0);
    const { scrollTop: ne } = _;
    let Q = C - ne;
    for (let B = u; B < z.length; B++) {
      if (Q > q) {
        t(9, f = B);
        break;
      }
      let le = m[B - u];
      le || (t(9, f = B + 1), await dt(), le = m[B - u]);
      const ge = J || le.offsetHeight;
      d[B] = ge, Q += ge;
    }
    L = Math.round((C + Q) / f), F(L), await dt(), U && P(U);
  }
  function F(z) {
    const q = s.length - f;
    t(6, T = q * z);
  }
  async function G() {
    const { scrollTop: z } = _;
    y.forEach((U, ne) => {
      const { index: Q } = U;
      d[Q] = o || m[ne].offsetHeight;
    });
    let q = 0, J = 0;
    for (; q < s.length; ) {
      const U = d[q] || L;
      if (J + U > z) {
        t(8, u = q), t(5, C = J);
        break;
      }
      J += U, q += 1;
    }
    for (; q < s.length && (J += d[q] || L, q += 1, !(J > z + w)); )
      ;
    t(9, f = q), L = Math.round(J / f), F(L);
  }
  async function V() {
    G(), c("scroll", { start: u, end: f });
  }
  rt(() => {
    m = h.children, t(13, S = !0);
  });
  function O(z) {
    fe[z ? "unshift" : "push"](() => {
      h = z, t(3, h);
    });
  }
  function D(z) {
    fe[z ? "unshift" : "push"](() => {
      _ = z, t(2, _);
    });
  }
  function j() {
    w = this.offsetHeight, t(1, w);
  }
  return l.$$set = (z) => {
    "items" in z && t(10, s = z.items), "scrollToId" in z && t(11, r = z.scrollToId), "height" in z && t(0, a = z.height), "itemHeight" in z && t(12, o = z.itemHeight), "start" in z && t(8, u = z.start), "end" in z && t(9, f = z.end), "$$scope" in z && t(14, i = z.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*items, start, end*/
    1792 && t(4, y = s.slice(u, f).map((z, q) => ({ index: q + u, data: z }))), l.$$.dirty & /*isMounted, items, viewportHeight, itemHeight, scrollToId*/
    15362 && S && E(s, w, o, r);
  }, [
    a,
    w,
    _,
    h,
    y,
    C,
    T,
    V,
    u,
    f,
    s,
    r,
    o,
    S,
    i,
    n,
    O,
    D,
    j
  ];
}
class jm extends ee {
  constructor(e) {
    super(), x(this, e, qm, Fm, Z, {
      items: 10,
      scrollToId: 11,
      height: 0,
      itemHeight: 12,
      start: 8,
      end: 9
    });
  }
}
function is(l) {
  let e, t, n;
  return t = new jm({
    props: {
      items: (
        /*items*/
        l[13]
      ),
      scrollToId: (
        /*scrollToId*/
        l[14]
      ),
      $$slots: {
        extra: [Um],
        default: [
          Vm,
          ({ item: i }) => ({ 18: i }),
          ({ item: i }) => i ? 262144 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-list-wrapper svelte-tuxumq"), g(e, "data-id", "scroll-column"), X(
        e,
        "wx-not-anchored",
        /*overColId*/
        l[2]
      );
    },
    m(i, s) {
      v(i, e, s), R(t, e, null), n = !0;
    },
    p(i, s) {
      const r = {};
      s & /*items*/
      8192 && (r.items = /*items*/
      i[13]), s & /*scrollToId*/
      16384 && (r.scrollToId = /*scrollToId*/
      i[14]), s & /*$$scope, movedCardHeight, overCardId, overColId, areaId, api, cardTemplate, card, cardHeight, cardsMeta, selected, cardShape, isMenuVisible*/
      793598 && (r.$$scope = { dirty: s, ctx: i }), t.$set(r), (!n || s & /*overColId*/
      4) && X(
        e,
        "wx-not-anchored",
        /*overColId*/
        i[2]
      );
    },
    i(i) {
      n || (b(t.$$.fragment, i), n = !0);
    },
    o(i) {
      p(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(e), A(t);
    }
  };
}
function ss(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-drop-area svelte-tuxumq"), ce(
        e,
        "min-height",
        /*movedCardHeight*/
        l[8] + "px"
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*movedCardHeight*/
      256 && ce(
        e,
        "min-height",
        /*movedCardHeight*/
        t[8] + "px"
      );
    },
    d(t) {
      t && k(e);
    }
  };
}
function Vm(l) {
  let e = ie(
    /*card*/
    l[18].id,
    /*overCardId*/
    l[1]
  ), t, n, i, s = e && ss(l);
  return n = new Jn({
    props: {
      api: (
        /*api*/
        l[12]
      ),
      cardTemplate: (
        /*cardTemplate*/
        l[5] || Ct
      ),
      cardFields: (
        /*card*/
        l[18]
      ),
      cardHeight: (
        /*cardHeight*/
        l[7]
      ),
      dragging: (
        /*cardsMeta*/
        l[6][
          /*card*/
          l[18].id
        ]?.dragging
      ),
      selected: _t(
        /*selected*/
        l[3],
        /*card*/
        l[18].id
      ),
      meta: (
        /*cardsMeta*/
        l[6] && /*cardsMeta*/
        l[6][
          /*card*/
          l[18].id
        ]
      ),
      cardShape: (
        /*cardShape*/
        l[4]
      ),
      menu: (
        /*isMenuVisible*/
        l[11][
          /*card*/
          l[18].id
        ]
      )
    }
  }), n.$on(
    "action",
    /*action_handler*/
    l[17]
  ), {
    c() {
      s && s.c(), t = H(), N(n.$$.fragment);
    },
    m(r, a) {
      s && s.m(r, a), v(r, t, a), R(n, r, a), i = !0;
    },
    p(r, a) {
      a & /*card, overCardId*/
      262146 && (e = ie(
        /*card*/
        r[18].id,
        /*overCardId*/
        r[1]
      )), e ? s ? s.p(r, a) : (s = ss(r), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null);
      const o = {};
      a & /*api*/
      4096 && (o.api = /*api*/
      r[12]), a & /*cardTemplate*/
      32 && (o.cardTemplate = /*cardTemplate*/
      r[5] || Ct), a & /*card*/
      262144 && (o.cardFields = /*card*/
      r[18]), a & /*cardHeight*/
      128 && (o.cardHeight = /*cardHeight*/
      r[7]), a & /*cardsMeta, card*/
      262208 && (o.dragging = /*cardsMeta*/
      r[6][
        /*card*/
        r[18].id
      ]?.dragging), a & /*selected, card*/
      262152 && (o.selected = _t(
        /*selected*/
        r[3],
        /*card*/
        r[18].id
      )), a & /*cardsMeta, card*/
      262208 && (o.meta = /*cardsMeta*/
      r[6] && /*cardsMeta*/
      r[6][
        /*card*/
        r[18].id
      ]), a & /*cardShape*/
      16 && (o.cardShape = /*cardShape*/
      r[4]), a & /*isMenuVisible, card*/
      264192 && (o.menu = /*isMenuVisible*/
      r[11][
        /*card*/
        r[18].id
      ]), n.$set(o);
    },
    i(r) {
      i || (b(n.$$.fragment, r), i = !0);
    },
    o(r) {
      p(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && k(t), s && s.d(r), A(n, r);
    }
  };
}
function rs(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-drop-area svelte-tuxumq"), ce(
        e,
        "min-height",
        /*movedCardHeight*/
        l[8] + "px"
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*movedCardHeight*/
      256 && ce(
        e,
        "min-height",
        /*movedCardHeight*/
        t[8] + "px"
      );
    },
    d(t) {
      t && k(e);
    }
  };
}
function Um(l) {
  let e, t = !/*overCardId*/
  l[1] && ie(
    /*overColId*/
    l[2],
    /*areaId*/
    l[9]
  ), n = t && rs(l);
  return {
    c() {
      e = I("div"), n && n.c(), g(e, "slot", "extra");
    },
    m(i, s) {
      v(i, e, s), n && n.m(e, null);
    },
    p(i, s) {
      s & /*overCardId, overColId, areaId*/
      518 && (t = !/*overCardId*/
      i[1] && ie(
        /*overColId*/
        i[2],
        /*areaId*/
        i[9]
      )), t ? n ? n.p(i, s) : (n = rs(i), n.c(), n.m(e, null)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && k(e), n && n.d();
    }
  };
}
function Km(l) {
  let e, t, n = (
    /*cards*/
    l[0] && is(l)
  );
  return {
    c() {
      n && n.c(), e = se();
    },
    m(i, s) {
      n && n.m(i, s), v(i, e, s), t = !0;
    },
    p(i, [s]) {
      /*cards*/
      i[0] ? n ? (n.p(i, s), s & /*cards*/
      1 && b(n, 1)) : (n = is(i), n.c(), b(n, 1), n.m(e.parentNode, e)) : n && (W(), p(n, 1, 1, () => {
        n = null;
      }), Y());
    },
    i(i) {
      t || (b(n), t = !0);
    },
    o(i) {
      p(n), t = !1;
    },
    d(i) {
      i && k(e), n && n.d(i);
    }
  };
}
function Bm(l, e, t) {
  let n, i, s = K, r = () => (s(), s = Ge(S, (E) => t(16, i = E)), S);
  l.$$.on_destroy.push(() => s());
  let { cards: a } = e, { overCardId: o } = e, { overColId: u } = e, { movedCardId: f } = e, { selected: c } = e, { cardShape: d } = e, { cardTemplate: m = null } = e, { cardsMeta: _ = {} } = e, { cardHeight: h = null } = e, { movedCardHeight: w = 0 } = e, { areaId: y } = e, { scrollTo: S } = e;
  r();
  let { isMenuVisible: C } = e, { api: T } = e, L;
  function P(E) {
    ve.call(this, l, E);
  }
  return l.$$set = (E) => {
    "cards" in E && t(0, a = E.cards), "overCardId" in E && t(1, o = E.overCardId), "overColId" in E && t(2, u = E.overColId), "movedCardId" in E && t(15, f = E.movedCardId), "selected" in E && t(3, c = E.selected), "cardShape" in E && t(4, d = E.cardShape), "cardTemplate" in E && t(5, m = E.cardTemplate), "cardsMeta" in E && t(6, _ = E.cardsMeta), "cardHeight" in E && t(7, h = E.cardHeight), "movedCardHeight" in E && t(8, w = E.movedCardHeight), "areaId" in E && t(9, y = E.areaId), "scrollTo" in E && r(t(10, S = E.scrollTo)), "isMenuVisible" in E && t(11, C = E.isMenuVisible), "api" in E && t(12, T = E.api);
  }, l.$$.update = () => {
    l.$$.dirty & /*cards, movedCardId*/
    32769 && t(13, n = a.filter((E) => !ie(f, E.id))), l.$$.dirty & /*$scrollTo, items, api*/
    77824 && i && i.to === "card" && i.id && n.find((E) => ie(E.id, i.id)) && (t(14, L = i.id), T.exec("scroll", null));
  }, [
    a,
    o,
    u,
    c,
    d,
    m,
    _,
    h,
    w,
    y,
    S,
    C,
    T,
    n,
    L,
    f,
    i,
    P
  ];
}
class Wm extends ee {
  constructor(e) {
    super(), x(this, e, Bm, Km, Z, {
      cards: 0,
      overCardId: 1,
      overColId: 2,
      movedCardId: 15,
      selected: 3,
      cardShape: 4,
      cardTemplate: 5,
      cardsMeta: 6,
      cardHeight: 7,
      movedCardHeight: 8,
      areaId: 9,
      scrollTo: 10,
      isMenuVisible: 11,
      api: 12
    });
  }
}
function os(l, e, t) {
  const n = l.slice();
  return n[13] = e[t], n;
}
function as(l) {
  let e, t, n, i, s = (
    /*cards*/
    l[0] && us(l)
  );
  return {
    c() {
      e = I("div"), s && s.c(), g(e, "class", "wx-list-wrapper svelte-1mw05qg"), X(
        e,
        "wx-not-anchored",
        /*overColId*/
        l[2]
      );
    },
    m(r, a) {
      v(r, e, a), s && s.m(e, null), t = !0, n || (i = Oe(Wn.call(null, e)), n = !0);
    },
    p(r, a) {
      /*cards*/
      r[0] ? s ? (s.p(r, a), a & /*cards*/
      1 && b(s, 1)) : (s = us(r), s.c(), b(s, 1), s.m(e, null)) : s && (W(), p(s, 1, 1, () => {
        s = null;
      }), Y()), (!t || a & /*overColId*/
      4) && X(
        e,
        "wx-not-anchored",
        /*overColId*/
        r[2]
      );
    },
    i(r) {
      t || (b(s), t = !0);
    },
    o(r) {
      p(s), t = !1;
    },
    d(r) {
      r && k(e), s && s.d(), n = !1, i();
    }
  };
}
function us(l) {
  let e = [], t = /* @__PURE__ */ new Map(), n, i = !/*overCardId*/
  l[1] && ie(
    /*overColId*/
    l[2],
    /*areaId*/
    l[9]
  ), s, r, a = ue(
    /*cards*/
    l[0]
  );
  const o = (f) => (
    /*card*/
    f[13].id
  );
  for (let f = 0; f < a.length; f += 1) {
    let c = os(l, a, f), d = o(c);
    t.set(d, e[f] = cs(d, c));
  }
  let u = i && ds(l);
  return {
    c() {
      for (let f = 0; f < e.length; f += 1)
        e[f].c();
      n = H(), u && u.c(), s = se();
    },
    m(f, c) {
      for (let d = 0; d < e.length; d += 1)
        e[d] && e[d].m(f, c);
      v(f, n, c), u && u.m(f, c), v(f, s, c), r = !0;
    },
    p(f, c) {
      c & /*api, cardTemplate, cards, cardHeight, cardsMeta, selected, cardShape, isMenuVisible, movedCardHeight, overCardId*/
      3579 && (a = ue(
        /*cards*/
        f[0]
      ), W(), e = Fe(e, c, o, 1, f, a, t, n.parentNode, Ke, cs, n, os), Y()), c & /*overCardId, overColId, areaId*/
      518 && (i = !/*overCardId*/
      f[1] && ie(
        /*overColId*/
        f[2],
        /*areaId*/
        f[9]
      )), i ? u ? u.p(f, c) : (u = ds(f), u.c(), u.m(s.parentNode, s)) : u && (u.d(1), u = null);
    },
    i(f) {
      if (!r) {
        for (let c = 0; c < a.length; c += 1)
          b(e[c]);
        r = !0;
      }
    },
    o(f) {
      for (let c = 0; c < e.length; c += 1)
        p(e[c]);
      r = !1;
    },
    d(f) {
      f && (k(n), k(s));
      for (let c = 0; c < e.length; c += 1)
        e[c].d(f);
      u && u.d(f);
    }
  };
}
function fs(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-drop-area svelte-1mw05qg"), ce(
        e,
        "min-height",
        /*movedCardHeight*/
        l[8] + "px"
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*movedCardHeight*/
      256 && ce(
        e,
        "min-height",
        /*movedCardHeight*/
        t[8] + "px"
      );
    },
    d(t) {
      t && k(e);
    }
  };
}
function cs(l, e) {
  let t, n = ie(
    /*card*/
    e[13].id,
    /*overCardId*/
    e[1]
  ), i, s, r, a = n && fs(e);
  return s = new Jn({
    props: {
      api: (
        /*api*/
        e[11]
      ),
      cardTemplate: (
        /*cardTemplate*/
        e[5] || Ct
      ),
      cardFields: (
        /*card*/
        e[13]
      ),
      cardHeight: (
        /*cardHeight*/
        e[7]
      ),
      dragging: (
        /*cardsMeta*/
        e[6][
          /*card*/
          e[13].id
        ]?.dragging
      ),
      selected: _t(
        /*selected*/
        e[3],
        /*card*/
        e[13].id
      ),
      meta: (
        /*cardsMeta*/
        e[6] && /*cardsMeta*/
        e[6][
          /*card*/
          e[13].id
        ]
      ),
      cardShape: (
        /*cardShape*/
        e[4]
      ),
      menu: (
        /*isMenuVisible*/
        e[10][
          /*card*/
          e[13].id
        ]
      )
    }
  }), s.$on(
    "action",
    /*action_handler*/
    e[12]
  ), {
    key: l,
    first: null,
    c() {
      t = se(), a && a.c(), i = H(), N(s.$$.fragment), this.first = t;
    },
    m(o, u) {
      v(o, t, u), a && a.m(o, u), v(o, i, u), R(s, o, u), r = !0;
    },
    p(o, u) {
      e = o, u & /*cards, overCardId*/
      3 && (n = ie(
        /*card*/
        e[13].id,
        /*overCardId*/
        e[1]
      )), n ? a ? a.p(e, u) : (a = fs(e), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
      const f = {};
      u & /*api*/
      2048 && (f.api = /*api*/
      e[11]), u & /*cardTemplate*/
      32 && (f.cardTemplate = /*cardTemplate*/
      e[5] || Ct), u & /*cards*/
      1 && (f.cardFields = /*card*/
      e[13]), u & /*cardHeight*/
      128 && (f.cardHeight = /*cardHeight*/
      e[7]), u & /*cardsMeta, cards*/
      65 && (f.dragging = /*cardsMeta*/
      e[6][
        /*card*/
        e[13].id
      ]?.dragging), u & /*selected, cards*/
      9 && (f.selected = _t(
        /*selected*/
        e[3],
        /*card*/
        e[13].id
      )), u & /*cardsMeta, cards*/
      65 && (f.meta = /*cardsMeta*/
      e[6] && /*cardsMeta*/
      e[6][
        /*card*/
        e[13].id
      ]), u & /*cardShape*/
      16 && (f.cardShape = /*cardShape*/
      e[4]), u & /*isMenuVisible, cards*/
      1025 && (f.menu = /*isMenuVisible*/
      e[10][
        /*card*/
        e[13].id
      ]), s.$set(f);
    },
    i(o) {
      r || (b(s.$$.fragment, o), r = !0);
    },
    o(o) {
      p(s.$$.fragment, o), r = !1;
    },
    d(o) {
      o && (k(t), k(i)), a && a.d(o), A(s, o);
    }
  };
}
function ds(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-drop-area svelte-1mw05qg"), ce(
        e,
        "min-height",
        /*movedCardHeight*/
        l[8] + "px"
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*movedCardHeight*/
      256 && ce(
        e,
        "min-height",
        /*movedCardHeight*/
        t[8] + "px"
      );
    },
    d(t) {
      t && k(e);
    }
  };
}
function Ym(l) {
  let e, t, n = (
    /*cards*/
    l[0] && as(l)
  );
  return {
    c() {
      n && n.c(), e = se();
    },
    m(i, s) {
      n && n.m(i, s), v(i, e, s), t = !0;
    },
    p(i, [s]) {
      /*cards*/
      i[0] ? n ? (n.p(i, s), s & /*cards*/
      1 && b(n, 1)) : (n = as(i), n.c(), b(n, 1), n.m(e.parentNode, e)) : n && (W(), p(n, 1, 1, () => {
        n = null;
      }), Y());
    },
    i(i) {
      t || (b(n), t = !0);
    },
    o(i) {
      p(n), t = !1;
    },
    d(i) {
      i && k(e), n && n.d(i);
    }
  };
}
function Gm(l, e, t) {
  let { cards: n } = e, { overCardId: i } = e, { overColId: s } = e, { selected: r } = e, { cardShape: a } = e, { cardTemplate: o = null } = e, { cardsMeta: u = {} } = e, { cardHeight: f = null } = e, { movedCardHeight: c = 0 } = e, { areaId: d } = e, { isMenuVisible: m } = e, { api: _ } = e;
  function h(w) {
    ve.call(this, l, w);
  }
  return l.$$set = (w) => {
    "cards" in w && t(0, n = w.cards), "overCardId" in w && t(1, i = w.overCardId), "overColId" in w && t(2, s = w.overColId), "selected" in w && t(3, r = w.selected), "cardShape" in w && t(4, a = w.cardShape), "cardTemplate" in w && t(5, o = w.cardTemplate), "cardsMeta" in w && t(6, u = w.cardsMeta), "cardHeight" in w && t(7, f = w.cardHeight), "movedCardHeight" in w && t(8, c = w.movedCardHeight), "areaId" in w && t(9, d = w.areaId), "isMenuVisible" in w && t(10, m = w.isMenuVisible), "api" in w && t(11, _ = w.api);
  }, [
    n,
    i,
    s,
    r,
    a,
    o,
    u,
    f,
    c,
    d,
    m,
    _,
    h
  ];
}
class Jm extends ee {
  constructor(e) {
    super(), x(this, e, Gm, Ym, Z, {
      cards: 0,
      overCardId: 1,
      overColId: 2,
      selected: 3,
      cardShape: 4,
      cardTemplate: 5,
      cardsMeta: 6,
      cardHeight: 7,
      movedCardHeight: 8,
      areaId: 9,
      isMenuVisible: 10,
      api: 11
    });
  }
}
function ms(l, e, t) {
  const n = l.slice();
  return n[55] = e[t], n;
}
function Qm(l) {
  let e, t;
  return e = new zm({
    props: {
      column: (
        /*column*/
        l[0]
      ),
      columnState: (
        /*areaMeta*/
        l[1]
      )
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*column*/
      1 && (s.column = /*column*/
      n[0]), i[0] & /*areaMeta*/
      2 && (s.columnState = /*areaMeta*/
      n[1]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Xm(l) {
  let e, t, n;
  var i = (
    /*$columnShape*/
    l[7].collapsedTemplate
  );
  function s(r, a) {
    return {
      props: {
        column: (
          /*column*/
          r[0]
        ),
        columnState: (
          /*areaMeta*/
          r[1]
        )
      }
    };
  }
  return i && (e = Je(i, s(l))), {
    c() {
      e && N(e.$$.fragment), t = se();
    },
    m(r, a) {
      e && R(e, r, a), v(r, t, a), n = !0;
    },
    p(r, a) {
      if (a[0] & /*$columnShape*/
      128 && i !== (i = /*$columnShape*/
      r[7].collapsedTemplate)) {
        if (e) {
          W();
          const o = e;
          p(o.$$.fragment, 1, 0, () => {
            A(o, 1);
          }), Y();
        }
        i ? (e = Je(i, s(r)), N(e.$$.fragment), b(e.$$.fragment, 1), R(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const o = {};
        a[0] & /*column*/
        1 && (o.column = /*column*/
        r[0]), a[0] & /*areaMeta*/
        2 && (o.columnState = /*areaMeta*/
        r[1]), e.$set(o);
      }
    },
    i(r) {
      n || (e && b(e.$$.fragment, r), n = !0);
    },
    o(r) {
      e && p(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && k(t), e && A(e, r);
    }
  };
}
function Zm(l) {
  let e, t, n, i, s, r;
  const a = [e1, xm, $m], o = [];
  function u(d, m) {
    return (
      /*layout*/
      d[13] === "column:lazy" ? 0 : (
        /*layout*/
        d[13] === "column:default" ? 1 : 2
      )
    );
  }
  e = u(l), t = o[e] = a[e](l);
  let f = (
    /*add*/
    l[20] && (typeof /*column*/
    l[0].limit == "object" ? !/*areaMeta*/
    l[1].noFreeSpace : !/*columnMeta*/
    l[2].noFreeSpace) && ps(l)
  ), c = (
    /*areaMeta*/
    l[1].rowId && typeof /*column*/
    l[0].limit == "object" && /*areaMeta*/
    l[1].totalLimit && ws(l)
  );
  return {
    c() {
      t.c(), n = H(), i = I("div"), f && f.c(), s = H(), c && c.c(), g(i, "class", "wx-controls-wrapper svelte-10x9r2");
    },
    m(d, m) {
      o[e].m(d, m), v(d, n, m), v(d, i, m), f && f.m(i, null), M(i, s), c && c.m(i, null), r = !0;
    },
    p(d, m) {
      let _ = e;
      e = u(d), e === _ ? o[e].p(d, m) : (W(), p(o[_], 1, 1, () => {
        o[_] = null;
      }), Y(), t = o[e], t ? t.p(d, m) : (t = o[e] = a[e](d), t.c()), b(t, 1), t.m(n.parentNode, n)), /*add*/
      d[20] && (typeof /*column*/
      d[0].limit == "object" ? !/*areaMeta*/
      d[1].noFreeSpace : !/*columnMeta*/
      d[2].noFreeSpace) ? f ? (f.p(d, m), m[0] & /*add, column, areaMeta, columnMeta*/
      1048583 && b(f, 1)) : (f = ps(d), f.c(), b(f, 1), f.m(i, s)) : f && (W(), p(f, 1, 1, () => {
        f = null;
      }), Y()), /*areaMeta*/
      d[1].rowId && typeof /*column*/
      d[0].limit == "object" && /*areaMeta*/
      d[1].totalLimit ? c ? c.p(d, m) : (c = ws(d), c.c(), c.m(i, null)) : c && (c.d(1), c = null);
    },
    i(d) {
      r || (b(t), b(f), r = !0);
    },
    o(d) {
      p(t), p(f), r = !1;
    },
    d(d) {
      d && (k(n), k(i)), o[e].d(d), f && f.d(), c && c.d();
    }
  };
}
function $m(l) {
  let e, t = !/*overCardId*/
  l[16] && ie(
    /*overColId*/
    l[15],
    /*areaId*/
    l[11]
  ), n, i, s = (
    /*cards*/
    l[3] && _s(l)
  ), r = t && bs(l);
  return {
    c() {
      s && s.c(), e = H(), r && r.c(), n = se();
    },
    m(a, o) {
      s && s.m(a, o), v(a, e, o), r && r.m(a, o), v(a, n, o), i = !0;
    },
    p(a, o) {
      /*cards*/
      a[3] ? s ? (s.p(a, o), o[0] & /*cards*/
      8 && b(s, 1)) : (s = _s(a), s.c(), b(s, 1), s.m(e.parentNode, e)) : s && (W(), p(s, 1, 1, () => {
        s = null;
      }), Y()), o[0] & /*overCardId, overColId, areaId*/
      100352 && (t = !/*overCardId*/
      a[16] && ie(
        /*overColId*/
        a[15],
        /*areaId*/
        a[11]
      )), t ? r ? r.p(a, o) : (r = bs(a), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null);
    },
    i(a) {
      i || (b(s), i = !0);
    },
    o(a) {
      p(s), i = !1;
    },
    d(a) {
      a && (k(e), k(n)), s && s.d(a), r && r.d(a);
    }
  };
}
function xm(l) {
  let e, t;
  return e = new Jm({
    props: {
      api: (
        /*api*/
        l[5]
      ),
      cards: (
        /*cards*/
        l[3]
      ),
      overCardId: (
        /*overCardId*/
        l[16]
      ),
      overColId: (
        /*overColId*/
        l[15]
      ),
      selected: (
        /*selected*/
        l[19]
      ),
      cardShape: (
        /*cardShape*/
        l[18]
      ),
      cardTemplate: (
        /*cardTemplate*/
        l[4]
      ),
      cardsMeta: (
        /*cardsMeta*/
        l[17]
      ),
      movedCardHeight: (
        /*movedCardHeight*/
        l[9]
      ),
      areaId: (
        /*areaId*/
        l[11]
      ),
      cardHeight: (
        /*cardHeight*/
        l[12]
      ),
      isMenuVisible: (
        /*isMenuVisible*/
        l[6]
      )
    }
  }), e.$on(
    "action",
    /*action_handler_1*/
    l[51]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*api*/
      32 && (s.api = /*api*/
      n[5]), i[0] & /*cards*/
      8 && (s.cards = /*cards*/
      n[3]), i[0] & /*overCardId*/
      65536 && (s.overCardId = /*overCardId*/
      n[16]), i[0] & /*overColId*/
      32768 && (s.overColId = /*overColId*/
      n[15]), i[0] & /*selected*/
      524288 && (s.selected = /*selected*/
      n[19]), i[0] & /*cardShape*/
      262144 && (s.cardShape = /*cardShape*/
      n[18]), i[0] & /*cardTemplate*/
      16 && (s.cardTemplate = /*cardTemplate*/
      n[4]), i[0] & /*cardsMeta*/
      131072 && (s.cardsMeta = /*cardsMeta*/
      n[17]), i[0] & /*movedCardHeight*/
      512 && (s.movedCardHeight = /*movedCardHeight*/
      n[9]), i[0] & /*areaId*/
      2048 && (s.areaId = /*areaId*/
      n[11]), i[0] & /*cardHeight*/
      4096 && (s.cardHeight = /*cardHeight*/
      n[12]), i[0] & /*isMenuVisible*/
      64 && (s.isMenuVisible = /*isMenuVisible*/
      n[6]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function e1(l) {
  let e, t;
  return e = new Wm({
    props: {
      api: (
        /*api*/
        l[5]
      ),
      cards: (
        /*cards*/
        l[3]
      ),
      overCardId: (
        /*overCardId*/
        l[16]
      ),
      overColId: (
        /*overColId*/
        l[15]
      ),
      movedCardId: (
        /*movedCardId*/
        l[14]
      ),
      selected: (
        /*selected*/
        l[19]
      ),
      cardShape: (
        /*cardShape*/
        l[18]
      ),
      cardTemplate: (
        /*cardTemplate*/
        l[4]
      ),
      cardsMeta: (
        /*cardsMeta*/
        l[17]
      ),
      movedCardHeight: (
        /*movedCardHeight*/
        l[9]
      ),
      areaId: (
        /*areaId*/
        l[11]
      ),
      scrollTo: (
        /*scrollTo*/
        l[25]
      ),
      cardHeight: (
        /*cardHeight*/
        l[12]
      ),
      isMenuVisible: (
        /*isMenuVisible*/
        l[6]
      )
    }
  }), e.$on(
    "action",
    /*action_handler*/
    l[50]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*api*/
      32 && (s.api = /*api*/
      n[5]), i[0] & /*cards*/
      8 && (s.cards = /*cards*/
      n[3]), i[0] & /*overCardId*/
      65536 && (s.overCardId = /*overCardId*/
      n[16]), i[0] & /*overColId*/
      32768 && (s.overColId = /*overColId*/
      n[15]), i[0] & /*movedCardId*/
      16384 && (s.movedCardId = /*movedCardId*/
      n[14]), i[0] & /*selected*/
      524288 && (s.selected = /*selected*/
      n[19]), i[0] & /*cardShape*/
      262144 && (s.cardShape = /*cardShape*/
      n[18]), i[0] & /*cardTemplate*/
      16 && (s.cardTemplate = /*cardTemplate*/
      n[4]), i[0] & /*cardsMeta*/
      131072 && (s.cardsMeta = /*cardsMeta*/
      n[17]), i[0] & /*movedCardHeight*/
      512 && (s.movedCardHeight = /*movedCardHeight*/
      n[9]), i[0] & /*areaId*/
      2048 && (s.areaId = /*areaId*/
      n[11]), i[0] & /*cardHeight*/
      4096 && (s.cardHeight = /*cardHeight*/
      n[12]), i[0] & /*isMenuVisible*/
      64 && (s.isMenuVisible = /*isMenuVisible*/
      n[6]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function _s(l) {
  let e = [], t = /* @__PURE__ */ new Map(), n, i, s = ue(
    /*cards*/
    l[3]
  );
  const r = (a) => (
    /*card*/
    a[55].id
  );
  for (let a = 0; a < s.length; a += 1) {
    let o = ms(l, s, a), u = r(o);
    t.set(u, e[a] = gs(u, o));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      n = se();
    },
    m(a, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, o);
      v(a, n, o), i = !0;
    },
    p(a, o) {
      o[0] & /*api, cardTemplate, cards, cardsMeta, selected, cardShape, cardHeight, isMenuVisible, movedCardHeight, overCardId, overColId, areaId*/
      1022584 && (s = ue(
        /*cards*/
        a[3]
      ), W(), e = Fe(e, o, r, 1, a, s, t, n.parentNode, Ke, gs, n, ms), Y());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < s.length; o += 1)
          b(e[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < e.length; o += 1)
        p(e[o]);
      i = !1;
    },
    d(a) {
      a && k(n);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(a);
    }
  };
}
function hs(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-drop-area svelte-10x9r2"), ce(
        e,
        "min-height",
        /*movedCardHeight*/
        l[9] + "px"
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n[0] & /*movedCardHeight*/
      512 && ce(
        e,
        "min-height",
        /*movedCardHeight*/
        t[9] + "px"
      );
    },
    d(t) {
      t && k(e);
    }
  };
}
function gs(l, e) {
  let t, n = ie(
    /*card*/
    e[55].id,
    /*overCardId*/
    e[16]
  ) && ie(
    /*overColId*/
    e[15],
    /*areaId*/
    e[11]
  ), i, s, r, a = n && hs(e);
  return s = new Jn({
    props: {
      api: (
        /*api*/
        e[5]
      ),
      cardTemplate: (
        /*cardTemplate*/
        e[4] || Ct
      ),
      cardFields: (
        /*card*/
        e[55]
      ),
      dragging: (
        /*cardsMeta*/
        e[17][
          /*card*/
          e[55].id
        ]?.dragging
      ),
      selected: _t(
        /*selected*/
        e[19],
        /*card*/
        e[55].id
      ),
      meta: (
        /*cardsMeta*/
        e[17] && /*cardsMeta*/
        e[17][
          /*card*/
          e[55].id
        ]
      ),
      cardShape: (
        /*cardShape*/
        e[18]
      ),
      cardHeight: (
        /*cardHeight*/
        e[12]
      ),
      menu: (
        /*isMenuVisible*/
        e[6][
          /*card*/
          e[55].id
        ]
      )
    }
  }), s.$on(
    "action",
    /*action_handler_2*/
    e[52]
  ), {
    key: l,
    first: null,
    c() {
      t = se(), a && a.c(), i = H(), N(s.$$.fragment), this.first = t;
    },
    m(o, u) {
      v(o, t, u), a && a.m(o, u), v(o, i, u), R(s, o, u), r = !0;
    },
    p(o, u) {
      e = o, u[0] & /*cards, overCardId, overColId, areaId*/
      100360 && (n = ie(
        /*card*/
        e[55].id,
        /*overCardId*/
        e[16]
      ) && ie(
        /*overColId*/
        e[15],
        /*areaId*/
        e[11]
      )), n ? a ? a.p(e, u) : (a = hs(e), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
      const f = {};
      u[0] & /*api*/
      32 && (f.api = /*api*/
      e[5]), u[0] & /*cardTemplate*/
      16 && (f.cardTemplate = /*cardTemplate*/
      e[4] || Ct), u[0] & /*cards*/
      8 && (f.cardFields = /*card*/
      e[55]), u[0] & /*cardsMeta, cards*/
      131080 && (f.dragging = /*cardsMeta*/
      e[17][
        /*card*/
        e[55].id
      ]?.dragging), u[0] & /*selected, cards*/
      524296 && (f.selected = _t(
        /*selected*/
        e[19],
        /*card*/
        e[55].id
      )), u[0] & /*cardsMeta, cards*/
      131080 && (f.meta = /*cardsMeta*/
      e[17] && /*cardsMeta*/
      e[17][
        /*card*/
        e[55].id
      ]), u[0] & /*cardShape*/
      262144 && (f.cardShape = /*cardShape*/
      e[18]), u[0] & /*cardHeight*/
      4096 && (f.cardHeight = /*cardHeight*/
      e[12]), u[0] & /*isMenuVisible, cards*/
      72 && (f.menu = /*isMenuVisible*/
      e[6][
        /*card*/
        e[55].id
      ]), s.$set(f);
    },
    i(o) {
      r || (b(s.$$.fragment, o), r = !0);
    },
    o(o) {
      p(s.$$.fragment, o), r = !1;
    },
    d(o) {
      o && (k(t), k(i)), a && a.d(o), A(s, o);
    }
  };
}
function bs(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-drop-area svelte-10x9r2"), ce(
        e,
        "min-height",
        /*movedCardHeight*/
        l[9] + "px"
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n[0] & /*movedCardHeight*/
      512 && ce(
        e,
        "min-height",
        /*movedCardHeight*/
        t[9] + "px"
      );
    },
    d(t) {
      t && k(e);
    }
  };
}
function ps(l) {
  let e, t, n, i, s, r, a;
  return t = new Te({ props: { css: "wxi-plus" } }), {
    c() {
      e = I("div"), N(t.$$.fragment), n = H(), i = I("span"), i.textContent = `${/*_*/
      l[21]("Add new card...")}`, g(i, "class", "wx-add-card-tip svelte-10x9r2"), g(e, "class", "wx-add-card-btn svelte-10x9r2");
    },
    m(o, u) {
      v(o, e, u), R(t, e, null), M(e, n), M(e, i), s = !0, r || (a = te(
        e,
        "click",
        /*handleAddCardClick*/
        l[35]
      ), r = !0);
    },
    p: K,
    i(o) {
      s || (b(t.$$.fragment, o), s = !0);
    },
    o(o) {
      p(t.$$.fragment, o), s = !1;
    },
    d(o) {
      o && k(e), A(t), r = !1, a();
    }
  };
}
function ws(l) {
  let e, t = (
    /*areaMeta*/
    l[1].cardsCount + ""
  ), n, i, s = (
    /*areaMeta*/
    l[1].totalLimit + ""
  ), r;
  return {
    c() {
      e = I("div"), n = $(t), i = $("/"), r = $(s), g(e, "class", "wx-swimlane-limit svelte-10x9r2");
    },
    m(a, o) {
      v(a, e, o), M(e, n), M(e, i), M(e, r);
    },
    p(a, o) {
      o[0] & /*areaMeta*/
      2 && t !== (t = /*areaMeta*/
      a[1].cardsCount + "") && re(n, t), o[0] & /*areaMeta*/
      2 && s !== (s = /*areaMeta*/
      a[1].totalLimit + "") && re(r, s);
    },
    d(a) {
      a && k(e);
    }
  };
}
function ks(l) {
  let e, t, n;
  var i = (
    /*column*/
    l[0].overlay
  );
  function s(r, a) {
    return {};
  }
  return i && (e = Je(i, s())), {
    c() {
      e && N(e.$$.fragment), t = se();
    },
    m(r, a) {
      e && R(e, r, a), v(r, t, a), n = !0;
    },
    p(r, a) {
      if (a[0] & /*column*/
      1 && i !== (i = /*column*/
      r[0].overlay)) {
        if (e) {
          W();
          const o = e;
          p(o.$$.fragment, 1, 0, () => {
            A(o, 1);
          }), Y();
        }
        i ? (e = Je(i, s()), N(e.$$.fragment), b(e.$$.fragment, 1), R(e, t.parentNode, t)) : e = null;
      }
    },
    i(r) {
      n || (e && b(e.$$.fragment, r), n = !0);
    },
    o(r) {
      e && p(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && k(t), e && A(e, r);
    }
  };
}
function t1(l) {
  let e, t, n, i, s, r;
  const a = [Zm, Xm, Qm], o = [];
  function u(c, d) {
    return (
      /*column*/
      c[0].collapsed ? (
        /*$columnShape*/
        c[7].collapsedTemplate ? 1 : 2
      ) : 0
    );
  }
  t = u(l), n = o[t] = a[t](l);
  let f = (
    /*column*/
    l[0].overlay && ks(l)
  );
  return {
    c() {
      e = I("div"), n.c(), i = H(), f && f.c(), g(e, "class", s = Ve(
        /*columnClass*/
        l[8]
      ) + " svelte-10x9r2"), g(
        e,
        "data-drop-area",
        /*areaId*/
        l[11]
      ), ce(
        e,
        "min-height",
        /*areaDragHeight*/
        l[10]
      );
    },
    m(c, d) {
      v(c, e, d), o[t].m(e, null), M(e, i), f && f.m(e, null), r = !0;
    },
    p(c, d) {
      let m = t;
      t = u(c), t === m ? o[t].p(c, d) : (W(), p(o[m], 1, 1, () => {
        o[m] = null;
      }), Y(), n = o[t], n ? n.p(c, d) : (n = o[t] = a[t](c), n.c()), b(n, 1), n.m(e, i)), /*column*/
      c[0].overlay ? f ? (f.p(c, d), d[0] & /*column*/
      1 && b(f, 1)) : (f = ks(c), f.c(), b(f, 1), f.m(e, null)) : f && (W(), p(f, 1, 1, () => {
        f = null;
      }), Y()), (!r || d[0] & /*columnClass*/
      256 && s !== (s = Ve(
        /*columnClass*/
        c[8]
      ) + " svelte-10x9r2")) && g(e, "class", s), (!r || d[0] & /*areaId*/
      2048) && g(
        e,
        "data-drop-area",
        /*areaId*/
        c[11]
      ), (!r || d[0] & /*areaDragHeight*/
      1024) && ce(
        e,
        "min-height",
        /*areaDragHeight*/
        c[10]
      );
    },
    i(c) {
      r || (b(n), b(f), r = !0);
    },
    o(c) {
      p(n), p(f), r = !1;
    },
    d(c) {
      c && k(e), o[t].d(), f && f.d();
    }
  };
}
function n1(l, e, t) {
  let n, i, s, r, a, o, u, f, c, d, m, _, h, w, y, S, C, T, L, P, E, F, G, V, O, D, j, { column: z } = e, { areaMeta: q } = e, { columnMeta: J } = e, { row: U } = e, { cards: ne } = e, { cardTemplate: Q = null } = e, { api: B } = e, { isMenuVisible: le } = e;
  const ge = ye("wx-i18n").getGroup("kanban"), { selected: He, cardShape: me, cardsMeta: Me, scroll: Be, readonly: de, columnShape: Ee, before: Ae, overAreaId: Pe, dragItemId: tt, dragItemsCoords: Qe, layout: Xe, cardHeight: $e, cardsMap: ae } = B.getReactiveState();
  he(l, He, (_e) => t(47, O = _e)), he(l, me, (_e) => t(46, V = _e)), he(l, Me, (_e) => t(45, G = _e)), he(l, de, (_e) => t(49, j = _e)), he(l, Ee, (_e) => t(7, C = _e)), he(l, Ae, (_e) => t(44, F = _e)), he(l, Pe, (_e) => t(43, E = _e)), he(l, tt, (_e) => t(42, P = _e)), he(l, Qe, (_e) => t(48, D = _e)), he(l, Xe, (_e) => t(41, L = _e)), he(l, $e, (_e) => t(40, T = _e)), he(l, ae, (_e) => t(39, S = _e));
  const Ye = Re();
  function oe() {
    Ye("action", {
      action: "add-card",
      data: {
        columnId: z.id,
        rowId: U.id,
        card: { label: ge("Untitled") }
      }
    });
  }
  function Ne(_e, Bt, Qo, Xo) {
    let Rt = "wx-column";
    return Bt.collapsed && (Rt += " wx-collapsed"), Qo && (Rt += " wx-over-limit"), Bt.css && (Rt += " " + Bt.css), _e && _e.css && (Rt += " " + _e.css(Bt, Xo)), Rt;
  }
  function qe(_e) {
    ve.call(this, l, _e);
  }
  function Go(_e) {
    ve.call(this, l, _e);
  }
  function Jo(_e) {
    ve.call(this, l, _e);
  }
  return l.$$set = (_e) => {
    "column" in _e && t(0, z = _e.column), "areaMeta" in _e && t(1, q = _e.areaMeta), "columnMeta" in _e && t(2, J = _e.columnMeta), "row" in _e && t(36, U = _e.row), "cards" in _e && t(3, ne = _e.cards), "cardTemplate" in _e && t(4, Q = _e.cardTemplate), "api" in _e && t(5, B = _e.api), "isMenuVisible" in _e && t(6, le = _e.isMenuVisible);
  }, l.$$.update = () => {
    l.$$.dirty[1] & /*$rReadonly*/
    262144 && t(20, n = j.add), l.$$.dirty[1] & /*$rDragItemsCoords, $rMovedCardId*/
    133120 && t(37, i = D && D[P]), l.$$.dirty[1] & /*$rSelected*/
    65536 && t(19, s = O), l.$$.dirty[1] & /*$rCardShape*/
    32768 && t(18, r = V), l.$$.dirty[1] & /*$rCardsMeta*/
    16384 && t(17, a = G), l.$$.dirty[1] & /*$rOverCardId*/
    8192 && t(16, o = F), l.$$.dirty[1] & /*$rOverColId*/
    4096 && t(15, u = E), l.$$.dirty[1] & /*$rMovedCardId*/
    2048 && t(14, f = P), l.$$.dirty[1] & /*$rLayout*/
    1024 && t(13, c = L), l.$$.dirty[1] & /*$rCardHeight*/
    512 && t(12, d = T), l.$$.dirty[0] & /*column*/
    1 | l.$$.dirty[1] & /*row*/
    32 && t(11, m = ze(z.id, U.id)), l.$$.dirty[0] & /*areaMeta*/
    2 && t(38, _ = q?.height), l.$$.dirty[1] & /*areaHeight*/
    128 && t(10, h = _ ? `${_}px` : "auto"), l.$$.dirty[1] & /*movedCardCoords*/
    64 && t(9, w = i?.height || 50), l.$$.dirty[0] & /*$columnShape, column, areaMeta*/
    131 | l.$$.dirty[1] & /*$cardsMap*/
    256 && t(8, y = Ne(C, z, q.isOverLimit, S[z.id]));
  }, [
    z,
    q,
    J,
    ne,
    Q,
    B,
    le,
    C,
    y,
    w,
    h,
    m,
    d,
    c,
    f,
    u,
    o,
    a,
    r,
    s,
    n,
    ge,
    He,
    me,
    Me,
    Be,
    de,
    Ee,
    Ae,
    Pe,
    tt,
    Qe,
    Xe,
    $e,
    ae,
    oe,
    U,
    i,
    _,
    S,
    T,
    L,
    P,
    E,
    F,
    G,
    V,
    O,
    D,
    j,
    qe,
    Go,
    Jo
  ];
}
class zo extends ee {
  constructor(e) {
    super(), x(
      this,
      e,
      n1,
      t1,
      Z,
      {
        column: 0,
        areaMeta: 1,
        columnMeta: 2,
        row: 36,
        cards: 3,
        cardTemplate: 4,
        api: 5,
        isMenuVisible: 6
      },
      null,
      [-1, -1]
    );
  }
}
function vs(l) {
  let e, t = (
    /*column*/
    l[1].label + ""
  ), n, i, s = (
    /*column*/
    l[1].limit && ys(l)
  );
  return {
    c() {
      e = I("div"), n = $(t), i = H(), s && s.c(), g(e, "class", "wx-label svelte-1dnc12v"), g(e, "data-action", "rename");
    },
    m(r, a) {
      v(r, e, a), M(e, n), M(e, i), s && s.m(e, null);
    },
    p(r, a) {
      a & /*column*/
      2 && t !== (t = /*column*/
      r[1].label + "") && re(n, t), /*column*/
      r[1].limit ? s ? s.p(r, a) : (s = ys(r), s.c(), s.m(e, null)) : s && (s.d(1), s = null);
    },
    d(r) {
      r && k(e), s && s.d();
    }
  };
}
function ys(l) {
  let e, t = (
    /*columnState*/
    l[2].cardsCount + ""
  ), n, i, s = (
    /*columnState*/
    l[2].totalLimit + ""
  ), r, a;
  return {
    c() {
      e = $("("), n = $(t), i = $("/"), r = $(s), a = $(")");
    },
    m(o, u) {
      v(o, e, u), v(o, n, u), v(o, i, u), v(o, r, u), v(o, a, u);
    },
    p(o, u) {
      u & /*columnState*/
      4 && t !== (t = /*columnState*/
      o[2].cardsCount + "") && re(n, t), u & /*columnState*/
      4 && s !== (s = /*columnState*/
      o[2].totalLimit + "") && re(r, s);
    },
    d(o) {
      o && (k(e), k(n), k(i), k(r), k(a));
    }
  };
}
function Ss(l) {
  let e, t, n, i;
  return t = new Te({ props: { css: "wxi-dots-h" } }), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-menu svelte-1dnc12v"), g(e, "data-menu-id", n = /*column*/
      l[1].id);
    },
    m(s, r) {
      v(s, e, r), R(t, e, null), i = !0;
    },
    p(s, r) {
      (!i || r & /*column*/
      2 && n !== (n = /*column*/
      s[1].id)) && g(e, "data-menu-id", n);
    },
    i(s) {
      i || (b(t.$$.fragment, s), i = !0);
    },
    o(s) {
      p(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && k(e), A(t);
    }
  };
}
function l1(l) {
  let e, t, n, i, s, r;
  t = new Te({
    props: {
      css: (
        /*column*/
        l[1].collapsed ? "wxi-angle-right" : "wxi-angle-left"
      )
    }
  });
  let a = !/*renaming*/
  l[3] && !/*column*/
  l[1].collapsed && vs(l), o = (
    /*isMenuVisible*/
    l[0] && !/*readonly*/
    l[4] && !/*renaming*/
    l[3] && !/*column*/
    l[1].collapsed && Ss(l)
  );
  return {
    c() {
      e = I("div"), N(t.$$.fragment), n = H(), a && a.c(), i = H(), o && o.c(), s = se(), g(e, "class", "wx-collapse-icon svelte-1dnc12v"), g(e, "data-action", "collapse");
    },
    m(u, f) {
      v(u, e, f), R(t, e, null), v(u, n, f), a && a.m(u, f), v(u, i, f), o && o.m(u, f), v(u, s, f), r = !0;
    },
    p(u, [f]) {
      const c = {};
      f & /*column*/
      2 && (c.css = /*column*/
      u[1].collapsed ? "wxi-angle-right" : "wxi-angle-left"), t.$set(c), !/*renaming*/
      u[3] && !/*column*/
      u[1].collapsed ? a ? a.p(u, f) : (a = vs(u), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null), /*isMenuVisible*/
      u[0] && !/*readonly*/
      u[4] && !/*renaming*/
      u[3] && !/*column*/
      u[1].collapsed ? o ? (o.p(u, f), f & /*isMenuVisible, readonly, renaming, column*/
      27 && b(o, 1)) : (o = Ss(u), o.c(), b(o, 1), o.m(s.parentNode, s)) : o && (W(), p(o, 1, 1, () => {
        o = null;
      }), Y());
    },
    i(u) {
      r || (b(t.$$.fragment, u), b(o), r = !0);
    },
    o(u) {
      p(t.$$.fragment, u), p(o), r = !1;
    },
    d(u) {
      u && (k(e), k(n), k(i), k(s)), A(t), a && a.d(u), o && o.d(u);
    }
  };
}
function i1(l, e, t) {
  let { isMenuVisible: n } = e, { column: i } = e, { columnState: s } = e, { renaming: r = !1 } = e, { readonly: a = !1 } = e;
  return l.$$set = (o) => {
    "isMenuVisible" in o && t(0, n = o.isMenuVisible), "column" in o && t(1, i = o.column), "columnState" in o && t(2, s = o.columnState), "renaming" in o && t(3, r = o.renaming), "readonly" in o && t(4, a = o.readonly);
  }, [n, i, s, r, a];
}
class s1 extends ee {
  constructor(e) {
    super(), x(this, e, i1, l1, Z, {
      isMenuVisible: 0,
      column: 1,
      columnState: 2,
      renaming: 3,
      readonly: 4
    });
  }
}
function Cs(l) {
  let e, t, n, i, s;
  return {
    c() {
      e = I("div"), g(e, "class", t = "wx-collapsed-column" + /*column*/
      (l[3].css ? " " + /*column*/
      l[3].css : "") + " svelte-13iqu94"), ce(
        e,
        "left",
        /*columnOffset*/
        l[8] + "px"
      );
    },
    m(r, a) {
      v(r, e, a), i || (s = [
        te(
          e,
          "click",
          /*handleColumnCollapse*/
          l[17]
        ),
        Oe(n = hd.call(null, e, { container: (
          /*contentEl*/
          l[2]
        ) }))
      ], i = !0);
    },
    p(r, a) {
      a & /*column*/
      8 && t !== (t = "wx-collapsed-column" + /*column*/
      (r[3].css ? " " + /*column*/
      r[3].css : "") + " svelte-13iqu94") && g(e, "class", t), a & /*columnOffset*/
      256 && ce(
        e,
        "left",
        /*columnOffset*/
        r[8] + "px"
      ), n && nt(n.update) && a & /*contentEl*/
      4 && n.update.call(null, { container: (
        /*contentEl*/
        r[2]
      ) });
    },
    d(r) {
      r && k(e), i = !1, De(s);
    }
  };
}
function r1(l) {
  let e, t;
  return e = new s1({
    props: {
      column: (
        /*column*/
        l[3]
      ),
      columnState: (
        /*columnState*/
        l[4]
      ),
      isMenuVisible: (
        /*isMenuVisible*/
        l[5]
      ),
      renaming: (
        /*renaming*/
        l[0]
      ),
      readonly: !/*$readonly*/
      l[10].edit
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*column*/
      8 && (s.column = /*column*/
      n[3]), i & /*columnState*/
      16 && (s.columnState = /*columnState*/
      n[4]), i & /*isMenuVisible*/
      32 && (s.isMenuVisible = /*isMenuVisible*/
      n[5]), i & /*renaming*/
      1 && (s.renaming = /*renaming*/
      n[0]), i & /*$readonly*/
      1024 && (s.readonly = !/*$readonly*/
      n[10].edit), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function o1(l) {
  let e, t, n;
  var i = (
    /*$columnShape*/
    l[6].headerTemplate
  );
  function s(r, a) {
    return {
      props: {
        api: (
          /*api*/
          r[1]
        ),
        column: (
          /*column*/
          r[3]
        ),
        columnState: (
          /*columnState*/
          r[4]
        ),
        isMenuVisible: (
          /*isMenuVisible*/
          r[5]
        ),
        renaming: (
          /*renaming*/
          r[0]
        ),
        readonly: !/*$readonly*/
        r[10].edit
      }
    };
  }
  return i && (e = Je(i, s(l))), {
    c() {
      e && N(e.$$.fragment), t = se();
    },
    m(r, a) {
      e && R(e, r, a), v(r, t, a), n = !0;
    },
    p(r, a) {
      if (a & /*$columnShape*/
      64 && i !== (i = /*$columnShape*/
      r[6].headerTemplate)) {
        if (e) {
          W();
          const o = e;
          p(o.$$.fragment, 1, 0, () => {
            A(o, 1);
          }), Y();
        }
        i ? (e = Je(i, s(r)), N(e.$$.fragment), b(e.$$.fragment, 1), R(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const o = {};
        a & /*api*/
        2 && (o.api = /*api*/
        r[1]), a & /*column*/
        8 && (o.column = /*column*/
        r[3]), a & /*columnState*/
        16 && (o.columnState = /*columnState*/
        r[4]), a & /*isMenuVisible*/
        32 && (o.isMenuVisible = /*isMenuVisible*/
        r[5]), a & /*renaming*/
        1 && (o.renaming = /*renaming*/
        r[0]), a & /*$readonly*/
        1024 && (o.readonly = !/*$readonly*/
        r[10].edit), e.$set(o);
      }
    },
    i(r) {
      n || (e && b(e.$$.fragment, r), n = !0);
    },
    o(r) {
      e && p(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && k(t), e && A(e, r);
    }
  };
}
function a1(l) {
  let e;
  return {
    c() {
      e = I("span"), e.textContent = "", g(e, "class", "wx-mark svelte-13iqu94"), X(e, "wx-error", wo());
    },
    m(t, n) {
      v(t, e, n);
    },
    d(t) {
      t && k(e);
    }
  };
}
function Is(l) {
  let e, t, n, i;
  return {
    c() {
      e = I("input"), g(e, "type", "text"), g(e, "class", "wx-input svelte-13iqu94"), e.value = t = /*column*/
      l[3].label;
    },
    m(s, r) {
      v(s, e, r), n || (i = [
        te(
          e,
          "input",
          /*handleColumnInput*/
          l[15]
        ),
        te(
          e,
          "keypress",
          /*handleInputKeypress*/
          l[16]
        ),
        te(
          e,
          "blur",
          /*endRenaming*/
          l[14]
        ),
        Oe(f1.call(null, e))
      ], n = !0);
    },
    p(s, r) {
      r & /*column*/
      8 && t !== (t = /*column*/
      s[3].label) && e.value !== t && (e.value = t);
    },
    d(s) {
      s && k(e), n = !1, De(i);
    }
  };
}
function u1(l) {
  let e, t, n, i, s, r = !po(), a, o, u, f, c, d = (
    /*column*/
    l[3].collapsed && /*columnEl*/
    l[7] && /*contentEl*/
    l[2] && Cs(l)
  );
  const m = [o1, r1], _ = [];
  function h(S, C) {
    return (
      /*$columnShape*/
      S[6].headerTemplate ? 0 : 1
    );
  }
  n = h(l), i = _[n] = m[n](l);
  let w = r && a1(), y = (
    /*renaming*/
    l[0] && Is(l)
  );
  return {
    c() {
      e = I("div"), d && d.c(), t = H(), i.c(), s = H(), w && w.c(), a = H(), y && y.c(), g(e, "class", o = Ve(
        /*columnClass*/
        l[9]
      ) + " svelte-13iqu94"), g(e, "data-id", u = /*column*/
      l[3].id), g(e, "data-column-header", f = /*column*/
      l[3].id);
    },
    m(S, C) {
      v(S, e, C), d && d.m(e, null), M(e, t), _[n].m(e, null), M(e, s), w && w.m(e, null), M(e, a), y && y.m(e, null), l[19](e), c = !0;
    },
    p(S, [C]) {
      /*column*/
      S[3].collapsed && /*columnEl*/
      S[7] && /*contentEl*/
      S[2] ? d ? d.p(S, C) : (d = Cs(S), d.c(), d.m(e, t)) : d && (d.d(1), d = null);
      let T = n;
      n = h(S), n === T ? _[n].p(S, C) : (W(), p(_[T], 1, 1, () => {
        _[T] = null;
      }), Y(), i = _[n], i ? i.p(S, C) : (i = _[n] = m[n](S), i.c()), b(i, 1), i.m(e, s)), /*renaming*/
      S[0] ? y ? y.p(S, C) : (y = Is(S), y.c(), y.m(e, null)) : y && (y.d(1), y = null), (!c || C & /*columnClass*/
      512 && o !== (o = Ve(
        /*columnClass*/
        S[9]
      ) + " svelte-13iqu94")) && g(e, "class", o), (!c || C & /*column*/
      8 && u !== (u = /*column*/
      S[3].id)) && g(e, "data-id", u), (!c || C & /*column*/
      8 && f !== (f = /*column*/
      S[3].id)) && g(e, "data-column-header", f);
    },
    i(S) {
      c || (b(i), c = !0);
    },
    o(S) {
      p(i), c = !1;
    },
    d(S) {
      S && k(e), d && d.d(), _[n].d(), w && w.d(), y && y.d(), l[19](null);
    }
  };
}
function f1(l) {
  l.focus();
}
function c1(l, e, t) {
  let n, i, s, r, { api: a } = e, { contentEl: o } = e, { column: u } = e, { columnState: f } = e, { isMenuVisible: c } = e, { renaming: d = !1 } = e;
  const m = Re(), { columnShape: _, cardsMap: h, readonly: w } = a.getReactiveState();
  he(l, _, (D) => t(6, s = D)), he(l, h, (D) => t(18, i = D)), he(l, w, (D) => t(10, r = D));
  let y = null, S;
  function C() {
    d && y?.trim() && m("action", {
      action: "update-column",
      data: {
        id: u.id,
        column: { label: y }
      }
    }), t(0, d = !1), y = null, m("action", { action: "close-column-input", data: {} });
  }
  function T(D) {
    y = D.target.value;
  }
  function L(D) {
    D.charCode === 13 && C();
  }
  function P() {
    m("action", {
      action: "expand-column",
      data: { id: u.id }
    });
  }
  let E = null;
  function F() {
    t(8, E = S?.offsetLeft);
  }
  zn(() => {
    F();
  });
  function G(D, j, z, q) {
    let J = "wx-column";
    return j.collapsed && (J += " wx-collapsed"), z && (J += " wx-over-limit"), j.css && (J += " " + j.css), D && D.css && (J += " " + D.css(j, q)), J;
  }
  const V = new ResizeObserver(() => {
    F();
  });
  Hn(() => {
    V.disconnect();
  });
  function O(D) {
    fe[D ? "unshift" : "push"](() => {
      S = D, t(7, S);
    });
  }
  return l.$$set = (D) => {
    "api" in D && t(1, a = D.api), "contentEl" in D && t(2, o = D.contentEl), "column" in D && t(3, u = D.column), "columnState" in D && t(4, f = D.columnState), "isMenuVisible" in D && t(5, c = D.isMenuVisible), "renaming" in D && t(0, d = D.renaming);
  }, l.$$.update = () => {
    l.$$.dirty & /*$columnShape, column, columnState, $cardsMap*/
    262232 && t(9, n = G(s, u, f.isOverLimit, i[u.id])), l.$$.dirty & /*contentEl*/
    4 && o && V.observe(o);
  }, [
    d,
    a,
    o,
    u,
    f,
    c,
    s,
    S,
    E,
    n,
    r,
    _,
    h,
    w,
    C,
    T,
    L,
    P,
    i,
    O
  ];
}
class d1 extends ee {
  constructor(e) {
    super(), x(this, e, c1, u1, Z, {
      api: 1,
      contentEl: 2,
      column: 3,
      columnState: 4,
      isMenuVisible: 5,
      renaming: 0
    });
  }
}
function Ms(l, e, t) {
  const n = l.slice();
  return n[26] = e[t], n;
}
function Ts(l, e) {
  let t, n, i;
  return n = new d1({
    props: {
      column: (
        /*column*/
        e[26]
      ),
      isMenuVisible: (
        /*$columnShape*/
        e[4].menu.show && !!/*columnMenuItems*/
        e[5][
          /*column*/
          e[26].id
        ]?.length
      ),
      contentEl: (
        /*contentEl*/
        e[3]
      ),
      api: (
        /*api*/
        e[2]
      ),
      columnState: (
        /*areasMeta*/
        e[1][
          /*column*/
          e[26].id
        ]
      ),
      renaming: (
        /*renamingCard*/
        e[6] === /*column*/
        e[26].id
      )
    }
  }), n.$on(
    "action",
    /*handleColumnActions*/
    e[14]
  ), {
    key: l,
    first: null,
    c() {
      t = se(), N(n.$$.fragment), this.first = t;
    },
    m(s, r) {
      v(s, t, r), R(n, s, r), i = !0;
    },
    p(s, r) {
      e = s;
      const a = {};
      r & /*columns*/
      1 && (a.column = /*column*/
      e[26]), r & /*$columnShape, columnMenuItems, columns*/
      49 && (a.isMenuVisible = /*$columnShape*/
      e[4].menu.show && !!/*columnMenuItems*/
      e[5][
        /*column*/
        e[26].id
      ]?.length), r & /*contentEl*/
      8 && (a.contentEl = /*contentEl*/
      e[3]), r & /*api*/
      4 && (a.api = /*api*/
      e[2]), r & /*areasMeta, columns*/
      3 && (a.columnState = /*areasMeta*/
      e[1][
        /*column*/
        e[26].id
      ]), r & /*renamingCard, columns*/
      65 && (a.renaming = /*renamingCard*/
      e[6] === /*column*/
      e[26].id), n.$set(a);
    },
    i(s) {
      i || (b(n.$$.fragment, s), i = !0);
    },
    o(s) {
      p(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && k(t), A(n, s);
    }
  };
}
function m1(l) {
  let e, t = [], n = /* @__PURE__ */ new Map(), i, s, r, a, o, u, f = ue(
    /*columns*/
    l[0]
  );
  const c = (_) => (
    /*column*/
    _[26].id
  );
  for (let _ = 0; _ < f.length; _ += 1) {
    let h = Ms(l, f, _), w = c(h);
    n.set(w, t[_] = Ts(w, h));
  }
  function d(_) {
    l[17](_);
  }
  let m = {
    at: "left-bottom",
    options: (
      /*menuItems*/
      l[8]
    ),
    resolver: (
      /*resolver*/
      l[13]
    ),
    dataKey: "menuId"
  };
  return (
    /*showMenu*/
    l[7] !== void 0 && (m.handler = /*showMenu*/
    l[7]), s = new hn({ props: m }), fe.push(() => Se(s, "handler", d)), s.$on(
      "click",
      /*handleMenuAction*/
      l[12]
    ), {
      c() {
        e = I("div");
        for (let _ = 0; _ < t.length; _ += 1)
          t[_].c();
        i = H(), N(s.$$.fragment), g(e, "class", "wx-header svelte-r4xqi9"), X(
          e,
          "fixed",
          /*fixed*/
          l[9]
        );
      },
      m(_, h) {
        v(_, e, h);
        for (let w = 0; w < t.length; w += 1)
          t[w] && t[w].m(e, null);
        v(_, i, h), R(s, _, h), a = !0, o || (u = [
          te(e, "click", function() {
            nt(
              /*showMenu*/
              l[7]
            ) && l[7].apply(this, arguments);
          }),
          Oe(Vt.call(
            null,
            e,
            /*handleClicks*/
            l[15]
          ))
        ], o = !0);
      },
      p(_, [h]) {
        l = _, h & /*columns, $columnShape, columnMenuItems, contentEl, api, areasMeta, renamingCard, handleColumnActions*/
        16511 && (f = ue(
          /*columns*/
          l[0]
        ), W(), t = Fe(t, h, c, 1, l, f, n, e, Ke, Ts, null, Ms), Y()), (!a || h & /*fixed*/
        512) && X(
          e,
          "fixed",
          /*fixed*/
          l[9]
        );
        const w = {};
        h & /*menuItems*/
        256 && (w.options = /*menuItems*/
        l[8]), !r && h & /*showMenu*/
        128 && (r = !0, w.handler = /*showMenu*/
        l[7], Ie(() => r = !1)), s.$set(w);
      },
      i(_) {
        if (!a) {
          for (let h = 0; h < f.length; h += 1)
            b(t[h]);
          b(s.$$.fragment, _), a = !0;
        }
      },
      o(_) {
        for (let h = 0; h < t.length; h += 1)
          p(t[h]);
        p(s.$$.fragment, _), a = !1;
      },
      d(_) {
        _ && (k(e), k(i));
        for (let h = 0; h < t.length; h += 1)
          t[h].d();
        A(s, _), o = !1, De(u);
      }
    }
  );
}
function _1(l, e, t) {
  let n, i, s, r, { columns: a } = e, { areasMeta: o } = e, { api: u } = e, { contentEl: f } = e;
  const c = ye("wx-i18n").getGroup("kanban"), d = Re(), { showModal: m } = ye("wx-helpers"), { readonly: _, columnShape: h } = u.getReactiveState();
  he(l, _, (j) => t(16, s = j)), he(l, h, (j) => t(4, r = j));
  const w = (j, z, q, J) => {
    let U = J.menu.items({ columns: q, columnIndex: z, column: j });
    return !U || !U.length ? null : (i && (U = U.filter((ne) => ne.id !== "add-card")), U.map((ne) => _n(ne, c)));
  };
  let y = {};
  function S(j, z) {
    const q = a.findIndex((ne) => ne.id === j), J = z === "left" ? q - 1 : q + 2, U = a[J]?.id;
    d("action", {
      action: "move-column",
      data: { id: j, before: U }
    });
  }
  let C = null;
  function T(j) {
    const { action: z, context: q } = j.detail;
    if (z) {
      if (z.onClick) {
        z.onClick({
          id: z.id,
          item: z,
          column: q
        });
        return;
      }
      switch (z.id) {
        case "add-card":
          d("action", {
            action: "add-card",
            data: {
              columnId: q.id,
              card: { label: c("Untitled") }
            }
          });
          break;
        case "set-edit":
          s.edit && t(6, C = q.id);
          break;
        case "delete-column": {
          (r.confirmDeletion ?? !0 ? m({
            message: c("Would you like to delete this column?")
          }) : Promise.resolve()).then(() => {
            d("action", {
              action: "delete-column",
              data: { id: q.id }
            });
          }).catch(() => {
          });
          break;
        }
        case "move-column:left":
          S(q.id, "left");
          break;
        case "move-column:right":
          S(q.id, "right");
          break;
      }
    }
  }
  let L = null, P = [];
  function E(j) {
    return t(8, P = y[j] || []), a.find((z) => z.id === j);
  }
  const F = ({ detail: { action: j, data: z } }) => {
    if (j === "close-column-input")
      t(6, C = null);
    else if (j === "expand-column") {
      G(z.id);
      return;
    }
    d("action", { action: j, data: z });
  };
  function G(j) {
    const z = a.find((q) => q.id === j);
    d("action", {
      action: "update-column",
      data: {
        id: j,
        column: { collapsed: !z.collapsed }
      }
    });
  }
  function V(j, z) {
    qn(z.target, "data-action")?.dataset.action !== "rename" || !s.edit || a.find((J) => J.id === j).collapsed || t(6, C = j);
  }
  const O = {
    dblclick: V,
    collapse: G
  };
  function D(j) {
    L = j, t(7, L);
  }
  return l.$$set = (j) => {
    "columns" in j && t(0, a = j.columns), "areasMeta" in j && t(1, o = j.areasMeta), "api" in j && t(2, u = j.api), "contentEl" in j && t(3, f = j.contentEl);
  }, l.$$.update = () => {
    l.$$.dirty & /*$columnShape*/
    16 && t(9, n = r.fixedHeaders !== !1), l.$$.dirty & /*$readonly*/
    65536 && (i = s.add === !1), l.$$.dirty & /*columns, $columnShape*/
    17 && a.forEach((j, z) => {
      t(5, y[j.id] = w(j, z, a, r), y);
    });
  }, [
    a,
    o,
    u,
    f,
    r,
    y,
    C,
    L,
    P,
    n,
    _,
    h,
    T,
    E,
    F,
    O,
    s,
    D
  ];
}
class Ho extends ee {
  constructor(e) {
    super(), x(this, e, _1, m1, Z, {
      columns: 0,
      areasMeta: 1,
      api: 2,
      contentEl: 3
    });
  }
}
const h1 = (l) => ({
  startIndex: l[0] & /*startIndex*/
  1,
  endIndex: l[0] & /*endIndex*/
  2,
  byRow: l[0] & /*byRow*/
  8,
  virtualContentEl: l[0] & /*virtualContentEl*/
  16
}), Ds = (l) => ({
  startIndex: (
    /*startIndex*/
    l[0]
  ),
  endIndex: (
    /*endIndex*/
    l[1]
  ),
  byRow: (
    /*byRow*/
    l[3]
  ),
  virtualContentEl: (
    /*virtualContentEl*/
    l[4]
  )
});
function g1(l) {
  let e, t, n, i, s;
  const r = (
    /*#slots*/
    l[30].default
  ), a = be(
    r,
    l,
    /*$$scope*/
    l[29],
    Ds
  );
  return {
    c() {
      e = I("div"), t = I("div"), a && a.c(), g(t, "class", "wx-content svelte-jco5m0"), ce(
        t,
        "padding-top",
        /*topPadding*/
        l[6] + "px"
      ), ce(
        t,
        "padding-bottom",
        /*bottomPadding*/
        l[5] + "px"
      ), g(e, "class", "wx-list-wrapper svelte-jco5m0"), g(e, "data-id", "virtual-content");
    },
    m(o, u) {
      v(o, e, u), M(e, t), a && a.m(t, null), l[31](t), l[32](e), n = !0, i || (s = [
        te(
          e,
          "scroll",
          /*handleScroll*/
          l[14]
        ),
        Oe(Wn.call(null, e))
      ], i = !0);
    },
    p(o, u) {
      a && a.p && (!n || u[0] & /*$$scope, startIndex, endIndex, byRow, virtualContentEl*/
      536870939) && we(
        a,
        r,
        o,
        /*$$scope*/
        o[29],
        n ? pe(
          r,
          /*$$scope*/
          o[29],
          u,
          h1
        ) : ke(
          /*$$scope*/
          o[29]
        ),
        Ds
      ), (!n || u[0] & /*topPadding*/
      64) && ce(
        t,
        "padding-top",
        /*topPadding*/
        o[6] + "px"
      ), (!n || u[0] & /*bottomPadding*/
      32) && ce(
        t,
        "padding-bottom",
        /*bottomPadding*/
        o[5] + "px"
      );
    },
    i(o) {
      n || (b(a, o), n = !0);
    },
    o(o) {
      p(a, o), n = !1;
    },
    d(o) {
      o && k(e), a && a.d(o), l[31](null), l[32](null), i = !1, De(s);
    }
  };
}
const b1 = 10;
function p1(l, e, t) {
  let n, i, s, r, a, o, u, f, c, d, m, _, h, w, y, S, C, { $$slots: T = {}, $$scope: L } = e, { api: P } = e;
  const { cardsMap: E, columns: F, rows: G, cardHeight: V, cards: O, columnKey: D, scroll: j } = P.getReactiveState();
  he(l, E, (de) => t(28, C = de)), he(l, F, (de) => t(27, S = de)), he(l, G, (de) => t(26, y = de)), he(l, V, (de) => t(25, w = de)), he(l, O, (de) => t(24, h = de)), he(l, D, (de) => t(23, _ = de)), he(l, j, (de) => t(22, m = de));
  let z, q = 0, J = {}, U = 0, ne = 1;
  rt(() => {
    le();
  });
  function Q() {
    t(16, q = 0), s.reduce(
      (de, Ee) => {
        if (Ee.collapsed)
          return de;
        const Ae = i.reduce(
          (Pe, tt) => {
            const Qe = ze(tt.id, Ee.id), Xe = n[Qe].length;
            return Xe > Pe && (Pe = Xe), Pe;
          },
          0
        );
        return t(
          3,
          J[Ee.id] = {
            id: Ee.id,
            maxCardsCount: Ae,
            minIndex: de,
            maxIndex: de + Ae,
            startIndex: 0,
            endIndex: 0,
            visible: !0
          },
          J
        ), t(16, q += Ae), de + Ae;
      },
      0
    ), z && (t(0, U = 0), t(1, ne = 0), le());
  }
  async function B(de) {
    if (z.querySelector(`[data-drag-item="${de}"]`))
      return;
    const Ae = a.find(($e) => ie($e.id, de)), Pe = rn(Ae, o), tt = n[Pe].findIndex(($e) => ie($e.id, de)), Qe = i.findIndex(($e) => $e.id === Pe), Xe = parseFloat(getComputedStyle(z).getPropertyValue("--wx-kanban-column-width")) || 300;
    return tt > -1 ? (await dt(), t(2, z.scrollTop = tt * u, z), t(2, z.scrollLeft = Xe * Qe, z), !0) : !1;
  }
  function le() {
    const de = z.scrollTop - f, Ee = Math.floor(de < 0 ? 0 : de / u), Ae = Ee + Math.floor((z.offsetHeight + f * 2) / u);
    if (Ae >= q) {
      t(1, ne = q);
      return;
    }
    t(0, U = Ee), t(1, ne = Ae);
  }
  function ge(de, Ee) {
    s.forEach((Ae) => {
      const Pe = J[Ae.id], tt = Ee - de;
      let Qe = de - Pe.minIndex, Xe = Qe + tt;
      Pe.startIndex = Qe < 0 ? 0 : Qe, Pe.endIndex = Xe > Pe.maxIndex ? Pe.maxIndex : Xe;
      const $e = Qe < Pe.maxIndex && Xe > 0;
      Pe.visible = $e, Ae.collapsed && (Pe.visible = !0), t(3, J[Ae.id] = Pe, J);
    });
  }
  function He() {
    le();
  }
  let me;
  function Me(de) {
    fe[de ? "unshift" : "push"](() => {
      me = de, t(4, me);
    });
  }
  function Be(de) {
    fe[de ? "unshift" : "push"](() => {
      z = de, t(2, z);
    });
  }
  return l.$$set = (de) => {
    "api" in de && t(15, P = de.api), "$$scope" in de && t(29, L = de.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*$rCardsMap*/
    268435456 && t(20, n = C), l.$$.dirty[0] & /*$rColumns*/
    134217728 && t(19, i = S), l.$$.dirty[0] & /*$rRows*/
    67108864 && t(17, s = y), l.$$.dirty[0] & /*$rCardHeight*/
    33554432 && t(21, r = w), l.$$.dirty[0] & /*$rCards*/
    16777216 && (a = h), l.$$.dirty[0] & /*$rColumnKey*/
    8388608 && (o = _), l.$$.dirty[0] & /*cardHeight*/
    2097152 && t(18, u = r + b1), l.$$.dirty[0] & /*fullCardHeight*/
    262144 && (f = u * 2), l.$$.dirty[0] & /*rows, columns, cardsMap*/
    1703936 && s && i && n && Q(), l.$$.dirty[0] & /*$scrollTo, api*/
    4227072 && m && m.to === "card" && m.id && B(m.id).then((de) => {
      de && P.exec("scroll", null);
    }), l.$$.dirty[0] & /*startIndex, endIndex*/
    3 && ge(U, ne), l.$$.dirty[0] & /*startIndex, fullCardHeight*/
    262145 && t(6, c = U * u), l.$$.dirty[0] & /*maxCardsCount, endIndex, fullCardHeight*/
    327682 && t(5, d = (q - ne) * u);
  }, [
    U,
    ne,
    z,
    J,
    me,
    d,
    c,
    E,
    F,
    G,
    V,
    O,
    D,
    j,
    He,
    P,
    q,
    s,
    u,
    i,
    n,
    r,
    m,
    _,
    h,
    w,
    y,
    S,
    C,
    L,
    T,
    Me,
    Be
  ];
}
class w1 extends ee {
  constructor(e) {
    super(), x(this, e, p1, g1, Z, { api: 15 }, null, [-1, -1]);
  }
}
function vn() {
}
function k1(l, e) {
  return l != l ? e == e : l !== e || l && typeof l == "object" || typeof l == "function";
}
const pt = [];
function v1(l, e = vn) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function i(a) {
    if (k1(l, a) && (l = a, t)) {
      const o = !pt.length;
      for (const u of n)
        u[1](), pt.push(u, l);
      if (o) {
        for (let u = 0; u < pt.length; u += 2)
          pt[u][0](pt[u + 1]);
        pt.length = 0;
      }
    }
  }
  function s(a) {
    i(a(l));
  }
  function r(a, o = vn) {
    const u = [a, o];
    return n.add(u), n.size === 1 && (t = e(i) || vn), a(l), () => {
      n.delete(u), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: s, subscribe: r };
}
(/* @__PURE__ */ new Date()).valueOf();
function y1(l, e) {
  for (const t in e) {
    const n = l[t], i = e[t];
    if (!fn(n, i))
      return !1;
  }
  return !0;
}
function fn(l, e) {
  if (typeof l == "number" || typeof l == "string" || typeof l == "boolean" || l === null)
    return l === e;
  if (typeof l != typeof e || (l === null || e === null) && l !== e || l instanceof Date && e instanceof Date && l.getTime() !== e.getTime())
    return !1;
  if (typeof l == "object")
    if (Array.isArray(l) && Array.isArray(e)) {
      if (l.length !== e.length)
        return !1;
      for (let n = l.length - 1; n >= 0; n--)
        if (!fn(l[n], e[n]))
          return !1;
      return !0;
    } else
      return y1(l, e);
  return l === e;
}
function Ln(l) {
  if (typeof l != "object" || l === null)
    return l;
  if (l instanceof Date)
    return new Date(l);
  if (l instanceof Array)
    return l.map(Ln);
  const e = {};
  for (const t in l)
    e[t] = Ln(l[t]);
  return e;
}
function Gt(l, e) {
  return e ? Ln(l) : { ...l };
}
function Oo(l, e, t) {
  const n = t && t.deepCopy;
  let i = !1, s = null;
  const r = v1(l), { set: a } = r;
  let o = Gt(l, n);
  return r.set = function(u) {
    fn(o, u) || (o = Gt(u, n), a(u));
  }, r.update = function(u) {
    const f = u(Gt(o, n));
    fn(o, f) || (o = Gt(f, n), a(f));
  }, r.reset = function(u) {
    i = !1, o = {}, r.set(u);
  }, r.subscribe((u) => {
    i ? u && (!t || !t.debounce ? e(u) : (clearTimeout(s), s = setTimeout(() => e(u), t.debounce))) : i = !0;
  }), r;
}
function S1(l, e, t) {
  const n = ye("wx-i18n"), i = n.getGroup("kanban");
  return [n, i];
}
class C1 extends ee {
  constructor(e) {
    super(), x(this, e, S1, null, Z, { locale: 0, _: 1 });
  }
  get locale() {
    return this.$$.ctx[0];
  }
  get _() {
    return this.$$.ctx[1];
  }
}
function Es(l, e, t) {
  const n = l.slice();
  return n[33] = e[t], n;
}
function I1(l) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = `${/*_*/
      l[8]("No comments yet")}`, g(e, "class", "wx-kanban-no-comments svelte-1idrztz");
    },
    m(t, n) {
      v(t, e, n);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && k(e);
    }
  };
}
function M1(l) {
  let e, t = [], n = /* @__PURE__ */ new Map(), i, s, r, a = ue(
    /*comments*/
    l[0]
  );
  const o = (u) => (
    /*comment*/
    u[33].id
  );
  for (let u = 0; u < a.length; u += 1) {
    let f = Es(l, a, u), c = o(f);
    n.set(c, t[u] = Rs(c, f));
  }
  return {
    c() {
      e = I("div");
      for (let u = 0; u < t.length; u += 1)
        t[u].c();
      g(e, "class", "wx-comment-list svelte-1idrztz");
    },
    m(u, f) {
      v(u, e, f);
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(e, null);
      i = !0, s || (r = te(e, "click", function() {
        nt(
          /*showMenu*/
          l[6]
        ) && l[6].apply(this, arguments);
      }), s = !0);
    },
    p(u, f) {
      l = u, f[0] & /*comments, handleEditEnd, _, cancelEdit, editText, editId, config, dateFormatter, $currentUser, usersById*/
      113073 && (a = ue(
        /*comments*/
        l[0]
      ), W(), t = Fe(t, f, o, 1, l, a, n, e, Ke, Rs, null, Es), Y());
    },
    i(u) {
      if (!i) {
        for (let f = 0; f < a.length; f += 1)
          b(t[f]);
        i = !0;
      }
    },
    o(u) {
      for (let f = 0; f < t.length; f += 1)
        p(t[f]);
      i = !1;
    },
    d(u) {
      u && k(e);
      for (let f = 0; f < t.length; f += 1)
        t[f].d();
      s = !1, r();
    }
  };
}
function Ls(l) {
  let e, t, n, i;
  return t = new Te({ props: { css: "wxi-dots-v" } }), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-menu svelte-1idrztz"), g(e, "data-menu-id", n = /*comment*/
      l[33].id);
    },
    m(s, r) {
      v(s, e, r), R(t, e, null), i = !0;
    },
    p(s, r) {
      (!i || r[0] & /*comments*/
      1 && n !== (n = /*comment*/
      s[33].id)) && g(e, "data-menu-id", n);
    },
    i(s) {
      i || (b(t.$$.fragment, s), i = !0);
    },
    o(s) {
      p(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && k(e), A(t);
    }
  };
}
function T1(l) {
  let e, t = (
    /*comment*/
    l[33].text + ""
  ), n;
  return {
    c() {
      e = I("pre"), n = $(t), g(e, "class", "wx-text svelte-1idrztz");
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s[0] & /*comments*/
      1 && t !== (t = /*comment*/
      i[33].text + "") && re(n, t);
    },
    i: K,
    o: K,
    d(i) {
      i && k(e);
    }
  };
}
function D1(l) {
  let e, t = (
    /*comment*/
    l[33].html + ""
  ), n;
  return {
    c() {
      e = new dn(!1), n = se(), e.a = n;
    },
    m(i, s) {
      e.m(t, i, s), v(i, n, s);
    },
    p(i, s) {
      s[0] & /*comments*/
      1 && t !== (t = /*comment*/
      i[33].html + "") && e.p(t);
    },
    i: K,
    o: K,
    d(i) {
      i && (k(n), e.d());
    }
  };
}
function E1(l) {
  let e, t, n, i, s, r, a, o, u, f;
  function c(m) {
    l[23](m);
  }
  let d = {};
  return (
    /*editText*/
    l[5] !== void 0 && (d.value = /*editText*/
    l[5]), e = new jn({ props: d }), fe.push(() => Se(e, "value", c)), r = new je({
      props: {
        type: "secondary",
        click: (
          /*cancelEdit*/
          l[16]
        ),
        $$slots: { default: [L1] },
        $$scope: { ctx: l }
      }
    }), u = new je({
      props: {
        type: "primary",
        click: (
          /*handleEditEnd*/
          l[15]
        ),
        $$slots: { default: [R1] },
        $$scope: { ctx: l }
      }
    }), {
      c() {
        N(e.$$.fragment), n = H(), i = I("div"), s = I("div"), N(r.$$.fragment), a = H(), o = I("div"), N(u.$$.fragment), g(s, "class", "wx-comment-textarea-btn svelte-1idrztz"), g(o, "class", "wx-comment-textarea-btn svelte-1idrztz"), g(i, "class", "wx-edit-btns svelte-1idrztz");
      },
      m(m, _) {
        R(e, m, _), v(m, n, _), v(m, i, _), M(i, s), R(r, s, null), M(i, a), M(i, o), R(u, o, null), f = !0;
      },
      p(m, _) {
        const h = {};
        !t && _[0] & /*editText*/
        32 && (t = !0, h.value = /*editText*/
        m[5], Ie(() => t = !1)), e.$set(h);
        const w = {};
        _[1] & /*$$scope*/
        32 && (w.$$scope = { dirty: _, ctx: m }), r.$set(w);
        const y = {};
        _[1] & /*$$scope*/
        32 && (y.$$scope = { dirty: _, ctx: m }), u.$set(y);
      },
      i(m) {
        f || (b(e.$$.fragment, m), b(r.$$.fragment, m), b(u.$$.fragment, m), f = !0);
      },
      o(m) {
        p(e.$$.fragment, m), p(r.$$.fragment, m), p(u.$$.fragment, m), f = !1;
      },
      d(m) {
        m && (k(n), k(i)), A(e, m), A(r), A(u);
      }
    }
  );
}
function L1(l) {
  let e = (
    /*_*/
    l[8]("Cancel") + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p: K,
    d(n) {
      n && k(t);
    }
  };
}
function R1(l) {
  let e = (
    /*_*/
    l[8]("Save") + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p: K,
    d(n) {
      n && k(t);
    }
  };
}
function Rs(l, e) {
  let t, n, i, s, r, a, o, u = (
    /*usersById*/
    e[12][
      /*comment*/
      e[33].userId
    ].label + ""
  ), f, c, d = (
    /*editId*/
    e[4] !== /*comment*/
    e[33].id && ie(
      /*comment*/
      e[33].userId,
      /*$currentUser*/
      e[7]
    )
  ), m, _, h = (
    /*dateFormatter*/
    e[13](
      /*comment*/
      e[33].date
    ) + ""
  ), w, y, S, C, T, L, P, E;
  i = new Et({
    props: {
      size: "small",
      border: !1,
      data: (
        /*usersById*/
        e[12][
          /*comment*/
          e[33].userId
        ]
      )
    }
  });
  let F = d && Ls(e);
  const G = [E1, D1, T1], V = [];
  function O(D, j) {
    return j[0] & /*editId, comments*/
    17 && (S = null), S == null && (S = !!ie(
      /*editId*/
      D[4],
      /*comment*/
      D[33].id
    )), S ? 0 : (
      /*comment*/
      D[33].html && /*config*/
      D[11].html ? 1 : 2
    );
  }
  return C = O(e, [-1, -1]), T = V[C] = G[C](e), {
    key: l,
    first: null,
    c() {
      t = I("div"), n = I("div"), N(i.$$.fragment), s = H(), r = I("div"), a = I("div"), o = I("div"), f = $(u), c = H(), F && F.c(), m = H(), _ = I("div"), w = $(h), y = H(), T.c(), L = H(), g(n, "class", "wx-comment-icon svelte-1idrztz"), g(o, "class", "wx-name svelte-1idrztz"), g(a, "class", "wx-comment-header svelte-1idrztz"), g(_, "class", "wx-date svelte-1idrztz"), g(r, "class", "wx-content svelte-1idrztz"), g(t, "class", "wx-comment svelte-1idrztz"), g(t, "data-comment-id", P = /*comment*/
      e[33].id), this.first = t;
    },
    m(D, j) {
      v(D, t, j), M(t, n), R(i, n, null), M(t, s), M(t, r), M(r, a), M(a, o), M(o, f), M(a, c), F && F.m(a, null), M(r, m), M(r, _), M(_, w), M(r, y), V[C].m(r, null), M(t, L), E = !0;
    },
    p(D, j) {
      e = D;
      const z = {};
      j[0] & /*comments*/
      1 && (z.data = /*usersById*/
      e[12][
        /*comment*/
        e[33].userId
      ]), i.$set(z), (!E || j[0] & /*comments*/
      1) && u !== (u = /*usersById*/
      e[12][
        /*comment*/
        e[33].userId
      ].label + "") && re(f, u), j[0] & /*editId, comments, $currentUser*/
      145 && (d = /*editId*/
      e[4] !== /*comment*/
      e[33].id && ie(
        /*comment*/
        e[33].userId,
        /*$currentUser*/
        e[7]
      )), d ? F ? (F.p(e, j), j[0] & /*editId, comments, $currentUser*/
      145 && b(F, 1)) : (F = Ls(e), F.c(), b(F, 1), F.m(a, null)) : F && (W(), p(F, 1, 1, () => {
        F = null;
      }), Y()), (!E || j[0] & /*comments*/
      1) && h !== (h = /*dateFormatter*/
      e[13](
        /*comment*/
        e[33].date
      ) + "") && re(w, h);
      let q = C;
      C = O(e, j), C === q ? V[C].p(e, j) : (W(), p(V[q], 1, 1, () => {
        V[q] = null;
      }), Y(), T = V[C], T ? T.p(e, j) : (T = V[C] = G[C](e), T.c()), b(T, 1), T.m(r, null)), (!E || j[0] & /*comments*/
      1 && P !== (P = /*comment*/
      e[33].id)) && g(t, "data-comment-id", P);
    },
    i(D) {
      E || (b(i.$$.fragment, D), b(F), b(T), E = !0);
    },
    o(D) {
      p(i.$$.fragment, D), p(F), p(T), E = !1;
    },
    d(D) {
      D && k(t), A(i), F && F.d(), V[C].d();
    }
  };
}
function As(l) {
  let e, t, n, i, s, r, a, o, u, f, c, d;
  i = new Et({
    props: {
      size: "small",
      border: !1,
      data: (
        /*usersById*/
        l[12][
          /*$currentUser*/
          l[7]
        ]
      )
    }
  });
  function m(w) {
    l[25](w);
  }
  let _ = {
    placeholder: (
      /*_*/
      l[8]("Add a comment...")
    )
  };
  /*inputValue*/
  l[3] !== void 0 && (_.value = /*inputValue*/
  l[3]), r = new jn({ props: _ }), fe.push(() => Se(r, "value", m)), f = new je({
    props: {
      disabled: !/*inputValue*/
      l[3],
      type: "primary",
      click: (
        /*handleAdd*/
        l[14]
      ),
      $$slots: { default: [A1] },
      $$scope: { ctx: l }
    }
  });
  let h = (
    /*config*/
    l[11].placement === "page" && /*placement*/
    l[2] === "modal" && Ps(l)
  );
  return {
    c() {
      e = I("div"), t = I("div"), n = I("div"), N(i.$$.fragment), s = H(), N(r.$$.fragment), o = H(), u = I("div"), N(f.$$.fragment), c = H(), h && h.c(), g(n, "class", "wx-comment-icon svelte-1idrztz"), g(t, "class", "wx-new-comment svelte-1idrztz"), g(u, "class", "wx-comment-textarea-btn svelte-1idrztz"), g(e, "class", "wx-new-comment-wrapper svelte-1idrztz");
    },
    m(w, y) {
      v(w, e, y), M(e, t), M(t, n), R(i, n, null), M(t, s), R(r, t, null), M(e, o), M(e, u), R(f, u, null), M(u, c), h && h.m(u, null), d = !0;
    },
    p(w, y) {
      const S = {};
      y[0] & /*$currentUser*/
      128 && (S.data = /*usersById*/
      w[12][
        /*$currentUser*/
        w[7]
      ]), i.$set(S);
      const C = {};
      !a && y[0] & /*inputValue*/
      8 && (a = !0, C.value = /*inputValue*/
      w[3], Ie(() => a = !1)), r.$set(C);
      const T = {};
      y[0] & /*inputValue*/
      8 && (T.disabled = !/*inputValue*/
      w[3]), y[1] & /*$$scope*/
      32 && (T.$$scope = { dirty: y, ctx: w }), f.$set(T), /*config*/
      w[11].placement === "page" && /*placement*/
      w[2] === "modal" ? h ? (h.p(w, y), y[0] & /*placement*/
      4 && b(h, 1)) : (h = Ps(w), h.c(), b(h, 1), h.m(u, null)) : h && (W(), p(h, 1, 1, () => {
        h = null;
      }), Y());
    },
    i(w) {
      d || (b(i.$$.fragment, w), b(r.$$.fragment, w), b(f.$$.fragment, w), b(h), d = !0);
    },
    o(w) {
      p(i.$$.fragment, w), p(r.$$.fragment, w), p(f.$$.fragment, w), p(h), d = !1;
    },
    d(w) {
      w && k(e), A(i), A(r), A(f), h && h.d();
    }
  };
}
function A1(l) {
  let e = (
    /*_*/
    l[8]("Send") + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p: K,
    d(n) {
      n && k(t);
    }
  };
}
function Ps(l) {
  let e, t;
  return e = new je({
    props: {
      type: "secondary",
      click: (
        /*func_1*/
        l[26]
      ),
      $$slots: { default: [P1] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*handleViewChange*/
      2 && (s.click = /*func_1*/
      n[26]), i[1] & /*$$scope*/
      32 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function P1(l) {
  let e = (
    /*_*/
    l[8]("Back") + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p: K,
    d(n) {
      n && k(t);
    }
  };
}
function N1(l) {
  let e, t, n, i, s, r, a, o;
  const u = [M1, I1], f = [];
  function c(h, w) {
    return (
      /*comments*/
      h[0].length ? 0 : (
        /*$currentUser*/
        h[7] ? -1 : 1
      )
    );
  }
  ~(t = c(l)) && (n = f[t] = u[t](l));
  function d(h) {
    l[24](h);
  }
  let m = {
    at: "left-bottom",
    options: (
      /*menuItems*/
      l[18]
    ),
    resolver: z1,
    dataKey: "menuId"
  };
  /*showMenu*/
  l[6] !== void 0 && (m.handler = /*showMenu*/
  l[6]), s = new hn({ props: m }), fe.push(() => Se(s, "handler", d)), s.$on(
    "click",
    /*handleMenuAction*/
    l[17]
  );
  let _ = (
    /*$currentUser*/
    l[7] && !/*editId*/
    l[4] && As(l)
  );
  return {
    c() {
      e = I("div"), n && n.c(), i = H(), N(s.$$.fragment), a = H(), _ && _.c(), g(e, "class", "wx-comments svelte-1idrztz");
    },
    m(h, w) {
      v(h, e, w), ~t && f[t].m(e, null), M(e, i), R(s, e, null), M(e, a), _ && _.m(e, null), o = !0;
    },
    p(h, w) {
      let y = t;
      t = c(h), t === y ? ~t && f[t].p(h, w) : (n && (W(), p(f[y], 1, 1, () => {
        f[y] = null;
      }), Y()), ~t ? (n = f[t], n ? n.p(h, w) : (n = f[t] = u[t](h), n.c()), b(n, 1), n.m(e, i)) : n = null);
      const S = {};
      !r && w[0] & /*showMenu*/
      64 && (r = !0, S.handler = /*showMenu*/
      h[6], Ie(() => r = !1)), s.$set(S), /*$currentUser*/
      h[7] && !/*editId*/
      h[4] ? _ ? (_.p(h, w), w[0] & /*$currentUser, editId*/
      144 && b(_, 1)) : (_ = As(h), _.c(), b(_, 1), _.m(e, null)) : _ && (W(), p(_, 1, 1, () => {
        _ = null;
      }), Y());
    },
    i(h) {
      o || (b(n), b(s.$$.fragment, h), b(_), o = !0);
    },
    o(h) {
      p(n), p(s.$$.fragment, h), p(_), o = !1;
    },
    d(h) {
      h && k(e), ~t && f[t].d(), A(s), _ && _.d();
    }
  };
}
const z1 = (l) => l;
function H1(l, e, t) {
  let n, i, s, { api: r } = e, { comments: a = [] } = e, { users: o = [] } = e, { shape: u } = e, { handleViewChange: f = null } = e, { placement: c } = e;
  const d = ye("wx-i18n"), m = d.getGroup("kanban"), { showModal: _ } = ye("wx-helpers"), { currentUser: h, selected: w } = r.getReactiveState();
  he(l, h, (B) => t(7, s = B)), he(l, w, (B) => t(22, i = B));
  const y = u.config || {}, S = o.reduce(
    (B, le) => (B[le.id] = le, B),
    {}
  ), C = y.format || "%M %d %Y %h:%i", T = Ot(C, d.getRaw().calendar);
  let L = "";
  function P() {
    L && r.exec("add-comment", {
      id: Fn(),
      cardId: n,
      comment: { text: L, date: /* @__PURE__ */ new Date() }
    }).then(() => {
      t(0, a = r.getCard(n).comments), t(3, L = "");
    });
  }
  let E = null, F = null;
  function G(B) {
    t(4, E = B.id), t(5, F = B.text);
  }
  function V() {
    F && r.exec("update-comment", {
      cardId: n,
      id: E,
      comment: { text: F }
    }).then(() => {
      t(0, a = r.getCard(n).comments);
    }), O();
  }
  function O() {
    t(4, E = null), t(5, F = null);
  }
  function D(B) {
    (y.confirmDeletion ?? !0 ? _({
      message: m("Would you like to delete this comment?")
    }) : Promise.resolve()).then(() => {
      r.exec("delete-comment", { cardId: n, id: B }).then(() => {
        t(0, a = r.getCard(n).comments);
      });
    }).catch(() => {
    });
  }
  function j(B) {
    const { context: le, action: ge } = B.detail;
    if (ge)
      switch (ge.id) {
        case "edit-comment":
          G(a.find((He) => He.id == le));
          break;
        case "delete-comment":
          D(le);
          break;
      }
  }
  let z = null;
  const q = [
    {
      id: "edit-comment",
      text: m("Edit"),
      icon: "wxi-edit-outline"
    },
    {
      id: "delete-comment",
      text: m("Delete"),
      icon: "wxi-delete-outline"
    }
  ];
  function J(B) {
    F = B, t(5, F);
  }
  function U(B) {
    z = B, t(6, z);
  }
  function ne(B) {
    L = B, t(3, L);
  }
  const Q = () => f("main");
  return l.$$set = (B) => {
    "api" in B && t(19, r = B.api), "comments" in B && t(0, a = B.comments), "users" in B && t(20, o = B.users), "shape" in B && t(21, u = B.shape), "handleViewChange" in B && t(1, f = B.handleViewChange), "placement" in B && t(2, c = B.placement);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*$selected*/
    4194304 && (n = i?.[0]);
  }, [
    a,
    f,
    c,
    L,
    E,
    F,
    z,
    s,
    m,
    h,
    w,
    y,
    S,
    T,
    P,
    V,
    O,
    j,
    q,
    r,
    o,
    u,
    i,
    J,
    U,
    ne,
    Q
  ];
}
class Fo extends ee {
  constructor(e) {
    super(), x(
      this,
      e,
      H1,
      N1,
      Z,
      {
        api: 19,
        comments: 0,
        users: 20,
        shape: 21,
        handleViewChange: 1,
        placement: 2
      },
      null,
      [-1, -1]
    );
  }
}
function O1(l, e) {
  const t = ["click", "contextmenu"], n = (i) => {
    l && !l.contains(i.target) && !i.defaultPrevented && e(i);
  };
  return t.forEach((i) => document.addEventListener(i, n, !0)), {
    destroy() {
      t.forEach((i) => document.removeEventListener(i, n, !0));
    }
  };
}
let Ns = (/* @__PURE__ */ new Date()).valueOf();
function qo() {
  return Ns += 1, Ns;
}
function zs(l) {
  return l && typeof l == "object" && !Array.isArray(l);
}
function Rn(l, e) {
  for (const t in e) {
    const n = e[t];
    zs(l[t]) && zs(n) ? l[t] = Rn(
      { ...l[t] },
      e[t]
    ) : l[t] = e[t];
  }
  return l;
}
function Kt(l) {
  return {
    getGroup(e) {
      const t = l[e];
      return (n) => t && t[n] || n;
    },
    getRaw() {
      return l;
    },
    extend(e, t) {
      if (!e)
        return this;
      let n;
      return t ? n = Rn({ ...e }, l) : n = Rn({ ...l }, e), Kt(n);
    }
  };
}
const F1 = "wx-uploader-api", q1 = (l) => ({}), Hs = (l) => ({ open: (
  /*open*/
  l[8]
) });
function j1(l) {
  let e, t, n, i, s, r;
  const a = (
    /*#slots*/
    l[14].default
  ), o = be(
    a,
    l,
    /*$$scope*/
    l[13],
    Hs
  ), u = o || U1(l);
  return {
    c() {
      e = I("div"), t = I("input"), n = H(), u && u.c(), g(t, "type", "file"), g(t, "class", "input svelte-15jokro"), g(
        t,
        "accept",
        /*accept*/
        l[0]
      ), t.multiple = /*multiple*/
      l[1], t.disabled = /*disabled*/
      l[3], g(e, "class", "label svelte-15jokro"), X(
        e,
        "active",
        /*drag*/
        l[5]
      ), X(
        e,
        "wx-disabled",
        /*disabled*/
        l[3]
      );
    },
    m(f, c) {
      v(f, e, c), M(e, t), l[16](t), M(e, n), u && u.m(e, null), i = !0, s || (r = [
        te(
          t,
          "change",
          /*add*/
          l[7]
        ),
        Oe(
          /*api*/
          l[6].droparea(e)
        )
      ], s = !0);
    },
    p(f, c) {
      (!i || c & /*accept*/
      1) && g(
        t,
        "accept",
        /*accept*/
        f[0]
      ), (!i || c & /*multiple*/
      2) && (t.multiple = /*multiple*/
      f[1]), (!i || c & /*disabled*/
      8) && (t.disabled = /*disabled*/
      f[3]), o && o.p && (!i || c & /*$$scope*/
      8192) && we(
        o,
        a,
        f,
        /*$$scope*/
        f[13],
        i ? pe(
          a,
          /*$$scope*/
          f[13],
          c,
          q1
        ) : ke(
          /*$$scope*/
          f[13]
        ),
        Hs
      ), (!i || c & /*drag*/
      32) && X(
        e,
        "active",
        /*drag*/
        f[5]
      ), (!i || c & /*disabled*/
      8) && X(
        e,
        "wx-disabled",
        /*disabled*/
        f[3]
      );
    },
    i(f) {
      i || (b(u, f), i = !0);
    },
    o(f) {
      p(u, f), i = !1;
    },
    d(f) {
      f && k(e), l[16](null), u && u.d(f), s = !1, De(r);
    }
  };
}
function V1(l) {
  let e, t, n, i, s;
  const r = (
    /*#slots*/
    l[14].default
  ), a = be(
    r,
    l,
    /*$$scope*/
    l[13],
    null
  );
  return {
    c() {
      e = I("input"), t = H(), a && a.c(), g(e, "type", "file"), g(e, "class", "input svelte-15jokro"), g(
        e,
        "accept",
        /*accept*/
        l[0]
      ), e.multiple = /*multiple*/
      l[1], e.disabled = /*disabled*/
      l[3];
    },
    m(o, u) {
      v(o, e, u), l[15](e), v(o, t, u), a && a.m(o, u), n = !0, i || (s = te(
        e,
        "change",
        /*add*/
        l[7]
      ), i = !0);
    },
    p(o, u) {
      (!n || u & /*accept*/
      1) && g(
        e,
        "accept",
        /*accept*/
        o[0]
      ), (!n || u & /*multiple*/
      2) && (e.multiple = /*multiple*/
      o[1]), (!n || u & /*disabled*/
      8) && (e.disabled = /*disabled*/
      o[3]), a && a.p && (!n || u & /*$$scope*/
      8192) && we(
        a,
        r,
        o,
        /*$$scope*/
        o[13],
        n ? pe(
          r,
          /*$$scope*/
          o[13],
          u,
          null
        ) : ke(
          /*$$scope*/
          o[13]
        ),
        null
      );
    },
    i(o) {
      n || (b(a, o), n = !0);
    },
    o(o) {
      p(a, o), n = !1;
    },
    d(o) {
      o && (k(e), k(t)), l[15](null), a && a.d(o), i = !1, s();
    }
  };
}
function U1(l) {
  let e, t, n, i, s, r;
  return {
    c() {
      e = I("div"), t = I("span"), n = $(`Drop files here or
					`), i = I("span"), i.textContent = "select files", g(i, "class", "action svelte-15jokro"), g(e, "class", "dropzone svelte-15jokro");
    },
    m(a, o) {
      v(a, e, o), M(e, t), M(t, n), M(t, i), s || (r = te(
        i,
        "click",
        /*open*/
        l[8]
      ), s = !0);
    },
    p: K,
    d(a) {
      a && k(e), s = !1, r();
    }
  };
}
function K1(l) {
  let e, t, n, i;
  const s = [V1, j1], r = [];
  function a(o, u) {
    return (
      /*apiOnly*/
      o[2] ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, [u]) {
      let f = e;
      e = a(o), e === f ? r[e].p(o, u) : (W(), p(r[f], 1, 1, () => {
        r[f] = null;
      }), Y(), t = r[e], t ? t.p(o, u) : (t = r[e] = s[e](o), t.c()), b(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function B1(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  const s = Re();
  let { data: r = [] } = e, { accept: a = "" } = e, { multiple: o = !0 } = e, { folder: u = !1 } = e, { uploadURL: f = "" } = e, { apiOnly: c = !1 } = e, { disabled: d = !1 } = e, { ready: m = new Promise(() => ({})) } = e, _, h, w = 0, y = {};
  const S = {
    open: (q) => D(q),
    droparea: (q, J) => {
      d || (J = J || {}, q.addEventListener("dragenter", () => {
        J.dragEnter && J.dragEnter(), V();
      }), q.addEventListener("dragleave", () => {
        J.dragEnter && J.dragLeave(), O();
      }), q.addEventListener("dragover", (U) => U.preventDefault(), !0), q.addEventListener(
        "drop",
        (U) => {
          U.preventDefault(), y = J, T(U), J.dragEnter && J.dragLeave();
        },
        !0
      ));
    }
  };
  rt(() => {
    t(4, _.webkitdirectory = u, _);
  }), ht(F1, S);
  function C(q) {
    Array.from(q.target.files).forEach((U) => P(U));
  }
  function T(q) {
    Array.from(q.dataTransfer.items).forEach((U) => {
      const ne = U.webkitGetAsEntry();
      ne && L(ne);
    }), t(5, h = !1), w = 0;
  }
  function L(q, J) {
    J = J || "", q.isFile ? q.file((U) => {
      P(U);
    }) : q.isDirectory && q.createReader().readEntries((ne) => {
      ne.forEach((Q) => {
        L(Q, J + Q.name + "/");
      });
    });
  }
  function P(q) {
    const J = {
      ...y,
      id: qo(),
      status: "client",
      name: q.name,
      file: q
    };
    J.selected && J.selected(J), s("select", J), o ? t(9, r = [...r, J]) : t(9, r = [J]), F(J), t(4, _.value = "", _);
  }
  function E(q) {
    const J = new FormData();
    return J.append("upload", q.file), fetch(f, { method: "POST", body: J }).then((ne) => ne.json()).then((ne) => ({ id: q.id, ...ne }), () => ({ id: q.id, status: "error" })).catch((ne) => console.log(ne));
  }
  function F(q) {
    if (!q)
      return;
    const J = typeof f == "function" ? f(q) : E(q);
    t(10, m = J.then((U) => {
      U.status = U.status || "server", G(q.id, U);
    }).catch((U) => {
      G(q.id, { status: "error", error: U });
    }));
  }
  function G(q, J) {
    const U = r.findIndex((Q) => Q.id == q), ne = t(9, r[U] = { ...r[U], ...J }, r);
    ne && ne.uploaded && ne.uploaded(ne), s("upload", r[U]), ne.temp && t(9, r = r.filter((Q) => Q.id != q));
  }
  function V() {
    w === 0 && t(5, h = !0), w++;
  }
  function O() {
    w--, w === 0 && t(5, h = !1);
  }
  function D(q) {
    y = q || {}, _.click();
  }
  function j(q) {
    fe[q ? "unshift" : "push"](() => {
      _ = q, t(4, _);
    });
  }
  function z(q) {
    fe[q ? "unshift" : "push"](() => {
      _ = q, t(4, _);
    });
  }
  return l.$$set = (q) => {
    "data" in q && t(9, r = q.data), "accept" in q && t(0, a = q.accept), "multiple" in q && t(1, o = q.multiple), "folder" in q && t(11, u = q.folder), "uploadURL" in q && t(12, f = q.uploadURL), "apiOnly" in q && t(2, c = q.apiOnly), "disabled" in q && t(3, d = q.disabled), "ready" in q && t(10, m = q.ready), "$$scope" in q && t(13, i = q.$$scope);
  }, [
    a,
    o,
    c,
    d,
    _,
    h,
    S,
    C,
    D,
    r,
    m,
    u,
    f,
    i,
    n,
    j,
    z
  ];
}
class W1 extends ee {
  constructor(e) {
    super(), x(this, e, B1, K1, Z, {
      data: 9,
      accept: 0,
      multiple: 1,
      folder: 11,
      uploadURL: 12,
      apiOnly: 2,
      disabled: 3,
      ready: 10
    });
  }
}
function Os(l, e, t) {
  const n = l.slice();
  return n[12] = e[t], n;
}
function Fs(l) {
  let e, t, n, i, s, r = [], a = /* @__PURE__ */ new Map(), o;
  n = new Te({ props: { css: "wxi-close" } }), n.$on(
    "click",
    /*removeAll*/
    l[2]
  );
  let u = ue(
    /*$data*/
    l[1]
  );
  const f = (c) => (
    /*obj*/
    c[12].id
  );
  for (let c = 0; c < u.length; c += 1) {
    let d = Os(l, u, c), m = f(d);
    a.set(m, r[c] = Vs(m, d));
  }
  return {
    c() {
      e = I("div"), t = I("div"), N(n.$$.fragment), i = H(), s = I("div");
      for (let c = 0; c < r.length; c += 1)
        r[c].c();
      g(t, "class", "wx-header svelte-l8op85"), g(s, "class", "wx-list svelte-l8op85"), g(e, "class", "wx-layout svelte-l8op85");
    },
    m(c, d) {
      v(c, e, d), M(e, t), R(n, t, null), M(e, i), M(e, s);
      for (let m = 0; m < r.length; m += 1)
        r[m] && r[m].m(s, null);
      o = !0;
    },
    p(c, d) {
      d & /*$data, remove, handleMakeCover, handleRemoveCover, isPreview, formatSize*/
      250 && (u = ue(
        /*$data*/
        c[1]
      ), W(), r = Fe(r, d, f, 1, c, u, a, s, Ke, Vs, null, Os), Y());
    },
    i(c) {
      if (!o) {
        b(n.$$.fragment, c);
        for (let d = 0; d < u.length; d += 1)
          b(r[d]);
        o = !0;
      }
    },
    o(c) {
      p(n.$$.fragment, c);
      for (let d = 0; d < r.length; d += 1)
        p(r[d]);
      o = !1;
    },
    d(c) {
      c && k(e), A(n);
      for (let d = 0; d < r.length; d += 1)
        r[d].d();
    }
  };
}
function Y1(l) {
  let e, t;
  return e = new Te({ props: { css: "wxi-paperclip" } }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p: K,
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function G1(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-thumb svelte-l8op85"), ce(e, "background-image", "url('" + /*obj*/
      (l[12].previewURL || /*obj*/
      l[12].url) + "')");
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*$data*/
      2 && ce(e, "background-image", "url('" + /*obj*/
      (t[12].previewURL || /*obj*/
      t[12].url) + "')");
    },
    i: K,
    o: K,
    d(t) {
      t && k(e);
    }
  };
}
function qs(l) {
  let e, t = (
    /*formatSize*/
    l[4](
      /*obj*/
      l[12].file.size
    ) + ""
  ), n;
  return {
    c() {
      e = I("div"), n = $(t), g(e, "class", "wx-size");
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s & /*$data*/
      2 && t !== (t = /*formatSize*/
      i[4](
        /*obj*/
        i[12].file.size
      ) + "") && re(n, t);
    },
    d(i) {
      i && k(e);
    }
  };
}
function J1(l) {
  let e, t, n, i, s, r, a, o, u = (
    /*isPreview*/
    l[5](
      /*obj*/
      l[12]
    )
  ), f;
  n = new Te({ props: { css: "wxi-external" } });
  function c() {
    return (
      /*click_handler_1*/
      l[9](
        /*obj*/
        l[12]
      )
    );
  }
  a = new Te({ props: { css: "wxi-delete-outline" } }), a.$on("click", c);
  let d = u && js(l);
  return {
    c() {
      e = I("div"), t = I("a"), N(n.$$.fragment), r = H(), N(a.$$.fragment), o = H(), d && d.c(), g(t, "class", "wx-upload-link svelte-l8op85"), g(t, "href", i = /*obj*/
      l[12].url), g(t, "download", s = /*obj*/
      l[12].name), g(t, "target", "_blank"), g(t, "rel", "noreferrer nofollow noopener"), g(e, "class", "wx-hidden svelte-l8op85");
    },
    m(m, _) {
      v(m, e, _), M(e, t), R(n, t, null), M(e, r), R(a, e, null), M(e, o), d && d.m(e, null), f = !0;
    },
    p(m, _) {
      l = m, (!f || _ & /*$data*/
      2 && i !== (i = /*obj*/
      l[12].url)) && g(t, "href", i), (!f || _ & /*$data*/
      2 && s !== (s = /*obj*/
      l[12].name)) && g(t, "download", s), _ & /*$data*/
      2 && (u = /*isPreview*/
      l[5](
        /*obj*/
        l[12]
      )), u ? d ? (d.p(l, _), _ & /*$data*/
      2 && b(d, 1)) : (d = js(l), d.c(), b(d, 1), d.m(e, null)) : d && (W(), p(d, 1, 1, () => {
        d = null;
      }), Y());
    },
    i(m) {
      f || (b(n.$$.fragment, m), b(a.$$.fragment, m), b(d), f = !0);
    },
    o(m) {
      p(n.$$.fragment, m), p(a.$$.fragment, m), p(d), f = !1;
    },
    d(m) {
      m && k(e), A(n), A(a), d && d.d();
    }
  };
}
function Q1(l) {
  let e, t, n, i;
  e = new Te({ props: { css: "wxi-alert" } });
  function s() {
    return (
      /*click_handler*/
      l[8](
        /*obj*/
        l[12]
      )
    );
  }
  return n = new Te({ props: { css: "wxi-delete-outline" } }), n.$on("click", s), {
    c() {
      N(e.$$.fragment), t = H(), N(n.$$.fragment);
    },
    m(r, a) {
      R(e, r, a), v(r, t, a), R(n, r, a), i = !0;
    },
    p(r, a) {
      l = r;
    },
    i(r) {
      i || (b(e.$$.fragment, r), b(n.$$.fragment, r), i = !0);
    },
    o(r) {
      p(e.$$.fragment, r), p(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && k(t), A(e, r), A(n, r);
    }
  };
}
function X1(l) {
  let e, t;
  return e = new Te({ props: { css: "wxi-loading wx-spin" } }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p: K,
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function js(l) {
  let e, t, n, i;
  const s = [$1, Z1], r = [];
  function a(o, u) {
    return (
      /*obj*/
      o[12].isCover ? 1 : 0
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, u) {
      let f = e;
      e = a(o), e === f ? r[e].p(o, u) : (W(), p(r[f], 1, 1, () => {
        r[f] = null;
      }), Y(), t = r[e], t ? t.p(o, u) : (t = r[e] = s[e](o), t.c()), b(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function Z1(l) {
  let e, t;
  return e = new je({
    props: {
      click: (
        /*handleRemoveCover*/
        l[7]
      ),
      $$slots: { default: [x1] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*$$scope*/
      32768 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function $1(l) {
  let e, t;
  function n() {
    return (
      /*func*/
      l[10](
        /*obj*/
        l[12]
      )
    );
  }
  return e = new je({
    props: {
      click: n,
      $$slots: { default: [e_] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(i, s) {
      R(e, i, s), t = !0;
    },
    p(i, s) {
      l = i;
      const r = {};
      s & /*$data*/
      2 && (r.click = n), s & /*$$scope*/
      32768 && (r.$$scope = { dirty: s, ctx: l }), e.$set(r);
    },
    i(i) {
      t || (b(e.$$.fragment, i), t = !0);
    },
    o(i) {
      p(e.$$.fragment, i), t = !1;
    },
    d(i) {
      A(e, i);
    }
  };
}
function x1(l) {
  let e;
  return {
    c() {
      e = $("Remove cover");
    },
    m(t, n) {
      v(t, e, n);
    },
    d(t) {
      t && k(e);
    }
  };
}
function e_(l) {
  let e;
  return {
    c() {
      e = $("Make cover");
    },
    m(t, n) {
      v(t, e, n);
    },
    d(t) {
      t && k(e);
    }
  };
}
function Vs(l, e) {
  let t, n, i, s, r, a, o, u = (
    /*obj*/
    e[12].name + ""
  ), f, c, d, m, _, h, w, y;
  const S = [G1, Y1], C = [];
  function T(G, V) {
    return V & /*$data*/
    2 && (i = null), i == null && (i = !!/*isPreview*/
    G[5](
      /*obj*/
      G[12]
    )), i ? 0 : 1;
  }
  s = T(e, -1), r = C[s] = S[s](e);
  let L = (
    /*obj*/
    e[12].file && qs(e)
  );
  const P = [X1, Q1, J1], E = [];
  function F(G, V) {
    return (
      /*obj*/
      G[12].status === "client" ? 0 : (
        /*obj*/
        G[12].status === "error" ? 1 : !/*obj*/
        G[12].status || /*obj*/
        G[12].status === "server" ? 2 : -1
      )
    );
  }
  return ~(_ = F(e)) && (h = E[_] = P[_](e)), {
    key: l,
    first: null,
    c() {
      t = I("div"), n = I("div"), r.c(), a = H(), o = I("div"), f = $(u), c = H(), L && L.c(), d = H(), m = I("div"), h && h.c(), w = H(), g(n, "class", "wx-file-icon svelte-l8op85"), g(o, "class", "wx-name svelte-l8op85"), g(m, "class", "wx-controls svelte-l8op85"), g(t, "class", "wx-row svelte-l8op85"), this.first = t;
    },
    m(G, V) {
      v(G, t, V), M(t, n), C[s].m(n, null), M(t, a), M(t, o), M(o, f), M(t, c), L && L.m(t, null), M(t, d), M(t, m), ~_ && E[_].m(m, null), M(t, w), y = !0;
    },
    p(G, V) {
      e = G;
      let O = s;
      s = T(e, V), s === O ? C[s].p(e, V) : (W(), p(C[O], 1, 1, () => {
        C[O] = null;
      }), Y(), r = C[s], r ? r.p(e, V) : (r = C[s] = S[s](e), r.c()), b(r, 1), r.m(n, null)), (!y || V & /*$data*/
      2) && u !== (u = /*obj*/
      e[12].name + "") && re(f, u), /*obj*/
      e[12].file ? L ? L.p(e, V) : (L = qs(e), L.c(), L.m(t, d)) : L && (L.d(1), L = null);
      let D = _;
      _ = F(e), _ === D ? ~_ && E[_].p(e, V) : (h && (W(), p(E[D], 1, 1, () => {
        E[D] = null;
      }), Y()), ~_ ? (h = E[_], h ? h.p(e, V) : (h = E[_] = P[_](e), h.c()), b(h, 1), h.m(m, null)) : h = null);
    },
    i(G) {
      y || (b(r), b(h), y = !0);
    },
    o(G) {
      p(r), p(h), y = !1;
    },
    d(G) {
      G && k(t), C[s].d(), L && L.d(), ~_ && E[_].d();
    }
  };
}
function t_(l) {
  let e, t, n = (
    /*$data*/
    l[1].length && Fs(l)
  );
  return {
    c() {
      n && n.c(), e = se();
    },
    m(i, s) {
      n && n.m(i, s), v(i, e, s), t = !0;
    },
    p(i, [s]) {
      /*$data*/
      i[1].length ? n ? (n.p(i, s), s & /*$data*/
      2 && b(n, 1)) : (n = Fs(i), n.c(), b(n, 1), n.m(e.parentNode, e)) : n && (W(), p(n, 1, 1, () => {
        n = null;
      }), Y());
    },
    i(i) {
      t || (b(n), t = !0);
    },
    o(i) {
      p(n), t = !1;
    },
    d(i) {
      i && k(e), n && n.d(i);
    }
  };
}
function n_(l, e, t) {
  let n, i = K, s = () => (i(), i = Ge(r, (y) => t(1, n = y)), r);
  l.$$.on_destroy.push(() => i());
  let { data: r } = e;
  s();
  const a = ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb"];
  function o() {
    r.set([]);
  }
  function u(y) {
    r.update((S) => S.filter((C) => C.id !== y));
  }
  function f(y) {
    let S = 0;
    for (; y > 1024; )
      S++, y = y / 1024;
    return Math.round(y * 100) / 100 + " " + a[S];
  }
  function c(y) {
    const S = y?.url?.split(".").pop(), C = y?.previewURL?.split(".").pop();
    return ci(C) || ci(S);
  }
  function d(y) {
    r.update((S) => S.map((C) => C.id === y ? { ...C, isCover: !0 } : (delete C.isCover, C)));
  }
  function m() {
    r.update((y) => y.map((S) => {
      const C = { ...S };
      return delete C.isCover, C;
    }));
  }
  const _ = (y) => u(y.id), h = (y) => u(y.id), w = (y) => d(y.id);
  return l.$$set = (y) => {
    "data" in y && s(t(0, r = y.data));
  }, [
    r,
    n,
    o,
    u,
    f,
    c,
    d,
    m,
    _,
    h,
    w
  ];
}
class l_ extends ee {
  constructor(e) {
    super(), x(this, e, n_, t_, Z, { data: 0 });
  }
}
function i_(l) {
  let e, t, n, i, s, r;
  t = new l_({ props: { data: (
    /*files*/
    l[4]
  ) } });
  const a = [
    { uploadURL: (
      /*uploadFn*/
      l[3]
    ) },
    /*field*/
    l[0].config
  ];
  function o(f) {
    l[7](f);
  }
  let u = {};
  for (let f = 0; f < a.length; f += 1)
    u = Ce(u, a[f]);
  return (
    /*$files*/
    l[2] !== void 0 && (u.data = /*$files*/
    l[2]), i = new W1({ props: u }), fe.push(() => Se(i, "data", o)), {
      c() {
        e = I("div"), N(t.$$.fragment), n = H(), N(i.$$.fragment), g(e, "class", "wx-files-control svelte-1vstfbt");
      },
      m(f, c) {
        v(f, e, c), R(t, e, null), M(e, n), R(i, e, null), r = !0;
      },
      p(f, [c]) {
        const d = {};
        c & /*files*/
        16 && (d.data = /*files*/
        f[4]), t.$set(d);
        const m = c & /*uploadFn, field*/
        9 ? it(a, [
          c & /*uploadFn*/
          8 && { uploadURL: (
            /*uploadFn*/
            f[3]
          ) },
          c & /*field*/
          1 && st(
            /*field*/
            f[0].config
          )
        ]) : {};
        !s && c & /*$files*/
        4 && (s = !0, m.data = /*$files*/
        f[2], Ie(() => s = !1)), i.$set(m);
      },
      i(f) {
        r || (b(t.$$.fragment, f), b(i.$$.fragment, f), r = !0);
      },
      o(f) {
        p(t.$$.fragment, f), p(i.$$.fragment, f), r = !1;
      },
      d(f) {
        f && k(e), A(t), A(i);
      }
    }
  );
}
function s_(l, e, t) {
  let n, i, s, r = K, a = () => (r(), r = Ge(n, (w) => t(2, s = w)), n), o, u = K, f = () => (u(), u = Ge(d, (w) => t(6, o = w)), d);
  l.$$.on_destroy.push(() => r()), l.$$.on_destroy.push(() => u());
  let { field: c } = e, { values: d } = e;
  f();
  let m = !1;
  function _(w) {
    const y = new FormData();
    y.append("upload", w.file);
    const S = { method: "POST", body: y };
    return fetch(c.uploadURL, S).then((C) => C.json()).then(
      (C) => (w.id = C.id, C),
      () => ({ id: w.id, status: "error" })
    ).catch();
  }
  function h(w) {
    s = w, n.set(s);
  }
  return l.$$set = (w) => {
    "field" in w && t(0, c = w.field), "values" in w && f(t(1, d = w.values));
  }, l.$$.update = () => {
    l.$$.dirty & /*ready, field, $files*/
    37 && (m && zt(d, o[c.key] = s, o), t(5, m = !0)), l.$$.dirty & /*$values, field*/
    65 && a(t(4, n = Un(o[c.key] || []))), l.$$.dirty & /*field*/
    1 && t(3, i = typeof c.uploadURL == "function" ? c.uploadURL : _);
  }, [c, d, s, i, n, m, o, h];
}
class r_ extends ee {
  constructor(e) {
    super(), x(this, e, s_, i_, Z, { field: 0, values: 1 });
  }
}
function Us(l) {
  let e, t;
  return e = new oo({
    props: {
      target: (
        /*layoutEl*/
        l[5]
      ),
      $$slots: { default: [c_] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*layoutEl*/
      32 && (s.target = /*layoutEl*/
      n[5]), i & /*$$scope, start, end*/
      65539 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function o_(l) {
  let e;
  return {
    c() {
      e = $("Clear");
    },
    m(t, n) {
      v(t, e, n);
    },
    d(t) {
      t && k(e);
    }
  };
}
function a_(l) {
  let e;
  return {
    c() {
      e = $("Today");
    },
    m(t, n) {
      v(t, e, n);
    },
    d(t) {
      t && k(e);
    }
  };
}
function u_(l) {
  let e;
  return {
    c() {
      e = $("Done");
    },
    m(t, n) {
      v(t, e, n);
    },
    d(t) {
      t && k(e);
    }
  };
}
function f_(l) {
  let e, t, n, i, s, r, a, o, u, f, c;
  function d(h) {
    l[11](h);
  }
  function m(h) {
    l[12](h);
  }
  let _ = { buttons: !1 };
  return (
    /*start*/
    l[0] !== void 0 && (_.start = /*start*/
    l[0]), /*end*/
    l[1] !== void 0 && (_.end = /*end*/
    l[1]), e = new lf({ props: _ }), fe.push(() => Se(e, "start", d)), fe.push(() => Se(e, "end", m)), r = new je({
      props: {
        type: "link wx-calendar-btn",
        click: (
          /*clearDate*/
          l[8]
        ),
        $$slots: { default: [o_] },
        $$scope: { ctx: l }
      }
    }), o = new je({
      props: {
        type: "link wx-calendar-btn",
        click: (
          /*setToday*/
          l[7]
        ),
        $$slots: { default: [a_] },
        $$scope: { ctx: l }
      }
    }), f = new je({
      props: {
        type: "primary wx-calendar-btn",
        click: (
          /*cancel*/
          l[6]
        ),
        $$slots: { default: [u_] },
        $$scope: { ctx: l }
      }
    }), {
      c() {
        N(e.$$.fragment), i = H(), s = I("div"), N(r.$$.fragment), a = H(), N(o.$$.fragment), u = H(), N(f.$$.fragment), g(s, "class", "wx-buttons svelte-d1z2io");
      },
      m(h, w) {
        R(e, h, w), v(h, i, w), v(h, s, w), R(r, s, null), M(s, a), R(o, s, null), M(s, u), R(f, s, null), c = !0;
      },
      p(h, w) {
        const y = {};
        !t && w & /*start*/
        1 && (t = !0, y.start = /*start*/
        h[0], Ie(() => t = !1)), !n && w & /*end*/
        2 && (n = !0, y.end = /*end*/
        h[1], Ie(() => n = !1)), e.$set(y);
        const S = {};
        w & /*$$scope*/
        65536 && (S.$$scope = { dirty: w, ctx: h }), r.$set(S);
        const C = {};
        w & /*$$scope*/
        65536 && (C.$$scope = { dirty: w, ctx: h }), o.$set(C);
        const T = {};
        w & /*$$scope*/
        65536 && (T.$$scope = { dirty: w, ctx: h }), f.$set(T);
      },
      i(h) {
        c || (b(e.$$.fragment, h), b(r.$$.fragment, h), b(o.$$.fragment, h), b(f.$$.fragment, h), c = !0);
      },
      o(h) {
        p(e.$$.fragment, h), p(r.$$.fragment, h), p(o.$$.fragment, h), p(f.$$.fragment, h), c = !1;
      },
      d(h) {
        h && (k(i), k(s)), A(e, h), A(r), A(o), A(f);
      }
    }
  );
}
function c_(l) {
  let e, t;
  return e = new Tt({
    props: {
      cancel: (
        /*cancel*/
        l[6]
      ),
      width: "unset",
      $$slots: { default: [f_] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*$$scope, start, end*/
      65539 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function d_(l) {
  let e, t, n, i, s, r, a, o, u;
  t = new Vn({
    props: {
      value: (
        /*formattedValue*/
        l[4]
      ),
      id: (
        /*id*/
        l[2]
      ),
      readonly: !0,
      inputStyle: "cursor: pointer; text-overflow: ellipsis; padding-right: 18px;"
    }
  }), s = new Te({ props: { css: "wxi-calendar" } });
  let f = (
    /*popup*/
    l[3] && Us(l)
  );
  return {
    c() {
      e = I("div"), N(t.$$.fragment), n = H(), i = I("div"), N(s.$$.fragment), r = H(), f && f.c(), g(i, "class", "wx-input-icon svelte-d1z2io"), g(e, "class", "wx-layout svelte-d1z2io");
    },
    m(c, d) {
      v(c, e, d), R(t, e, null), M(e, n), M(e, i), R(s, i, null), M(e, r), f && f.m(e, null), l[13](e), a = !0, o || (u = [
        te(
          window,
          "scroll",
          /*cancel*/
          l[6]
        ),
        te(
          e,
          "click",
          /*showPopup*/
          l[9]
        )
      ], o = !0);
    },
    p(c, [d]) {
      const m = {};
      d & /*formattedValue*/
      16 && (m.value = /*formattedValue*/
      c[4]), d & /*id*/
      4 && (m.id = /*id*/
      c[2]), t.$set(m), /*popup*/
      c[3] ? f ? (f.p(c, d), d & /*popup*/
      8 && b(f, 1)) : (f = Us(c), f.c(), b(f, 1), f.m(e, null)) : f && (W(), p(f, 1, 1, () => {
        f = null;
      }), Y());
    },
    i(c) {
      a || (b(t.$$.fragment, c), b(s.$$.fragment, c), b(f), a = !0);
    },
    o(c) {
      p(t.$$.fragment, c), p(s.$$.fragment, c), p(f), a = !1;
    },
    d(c) {
      c && k(e), A(t), A(s), f && f.d(), l[13](null), o = !1, De(u);
    }
  };
}
function m_(l, e, t) {
  let { start: n = null } = e, { end: i = null } = e, { id: s = et() } = e, { format: r } = e;
  const a = ye("wx-i18n").getGroup("calendar");
  let o, u = typeof r == "function" ? r : Ot(r, a);
  function f(C) {
    C.stopPropagation(), t(3, o = null);
  }
  function c() {
    const C = /* @__PURE__ */ new Date();
    t(0, n = C), t(1, i = C);
  }
  function d() {
    t(0, n = null), t(1, i = null);
  }
  let m = "";
  function _() {
    t(3, o = !0);
  }
  let h;
  function w(C) {
    n = C, t(0, n);
  }
  function y(C) {
    i = C, t(1, i);
  }
  function S(C) {
    fe[C ? "unshift" : "push"](() => {
      h = C, t(5, h);
    });
  }
  return l.$$set = (C) => {
    "start" in C && t(0, n = C.start), "end" in C && t(1, i = C.end), "id" in C && t(2, s = C.id), "format" in C && t(10, r = C.format);
  }, l.$$.update = () => {
    l.$$.dirty & /*start, end*/
    3 && (n ? t(4, m = u(n) + (i ? ` - ${u(i)}` : "")) : t(4, m = ""));
  }, [
    n,
    i,
    s,
    o,
    m,
    h,
    f,
    c,
    d,
    _,
    r,
    w,
    y,
    S
  ];
}
class __ extends ee {
  constructor(e) {
    super(), x(this, e, m_, d_, Z, { start: 0, end: 1, id: 2, format: 10 });
  }
}
function h_(l) {
  let e, t, n, i;
  function s(o) {
    l[4](o);
  }
  function r(o) {
    l[5](o);
  }
  let a = {
    id: (
      /*id*/
      l[3]
    ),
    format: (
      /*format*/
      l[2]
    )
  };
  return (
    /*start*/
    l[0] !== void 0 && (a.start = /*start*/
    l[0]), /*end*/
    l[1] !== void 0 && (a.end = /*end*/
    l[1]), e = new __({ props: a }), fe.push(() => Se(e, "start", s)), fe.push(() => Se(e, "end", r)), {
      c() {
        N(e.$$.fragment);
      },
      m(o, u) {
        R(e, o, u), i = !0;
      },
      p(o, [u]) {
        const f = {};
        u & /*id*/
        8 && (f.id = /*id*/
        o[3]), u & /*format*/
        4 && (f.format = /*format*/
        o[2]), !t && u & /*start*/
        1 && (t = !0, f.start = /*start*/
        o[0], Ie(() => t = !1)), !n && u & /*end*/
        2 && (n = !0, f.end = /*end*/
        o[1], Ie(() => n = !1)), e.$set(f);
      },
      i(o) {
        i || (b(e.$$.fragment, o), i = !0);
      },
      o(o) {
        p(e.$$.fragment, o), i = !1;
      },
      d(o) {
        A(e, o);
      }
    }
  );
}
function g_(l, e, t) {
  let { start: n } = e, { end: i } = e, { format: s } = e, { id: r = et() } = e;
  function a(u) {
    n = u, t(0, n);
  }
  function o(u) {
    i = u, t(1, i);
  }
  return l.$$set = (u) => {
    "start" in u && t(0, n = u.start), "end" in u && t(1, i = u.end), "format" in u && t(2, s = u.format), "id" in u && t(3, r = u.id);
  }, [
    n,
    i,
    s,
    r,
    a,
    o
  ];
}
class b_ extends ee {
  constructor(e) {
    super(), x(this, e, g_, h_, Z, { start: 0, end: 1, format: 2, id: 3 });
  }
}
function p_(l) {
  let e, t, n;
  return {
    c() {
      e = I("input"), g(e, "type", "text"), g(e, "class", "wx-title svelte-18nf24j"), g(
        e,
        "id",
        /*id*/
        l[1]
      ), e.value = /*value*/
      l[0], g(
        e,
        "placeholder",
        /*placeholder*/
        l[2]
      ), e.readOnly = /*readonly*/
      l[3], e.disabled = /*disabled*/
      l[4];
    },
    m(i, s) {
      v(i, e, s), t || (n = [
        te(
          e,
          "input",
          /*handleInput*/
          l[5]
        ),
        Oe(
          /*focusAction*/
          l[6].call(null, e)
        )
      ], t = !0);
    },
    p(i, [s]) {
      s & /*id*/
      2 && g(
        e,
        "id",
        /*id*/
        i[1]
      ), s & /*value*/
      1 && e.value !== /*value*/
      i[0] && (e.value = /*value*/
      i[0]), s & /*placeholder*/
      4 && g(
        e,
        "placeholder",
        /*placeholder*/
        i[2]
      ), s & /*readonly*/
      8 && (e.readOnly = /*readonly*/
      i[3]), s & /*disabled*/
      16 && (e.disabled = /*disabled*/
      i[4]);
    },
    i: K,
    o: K,
    d(i) {
      i && k(e), t = !1, De(n);
    }
  };
}
function w_(l, e, t) {
  let { id: n = String(va()) } = e, { value: i = "" } = e, { focus: s = !1 } = e, { placeholder: r = "" } = e, { readonly: a = !1 } = e, { disabled: o = !1 } = e;
  function u(c) {
    t(0, i = c.target.value);
  }
  function f(c) {
    s && c.focus();
  }
  return l.$$set = (c) => {
    "id" in c && t(1, n = c.id), "value" in c && t(0, i = c.value), "focus" in c && t(7, s = c.focus), "placeholder" in c && t(2, r = c.placeholder), "readonly" in c && t(3, a = c.readonly), "disabled" in c && t(4, o = c.disabled);
  }, [i, n, r, a, o, u, f, s];
}
class k_ extends ee {
  constructor(e) {
    super(), x(this, e, w_, p_, Z, {
      id: 1,
      value: 0,
      focus: 7,
      placeholder: 2,
      readonly: 3,
      disabled: 4
    });
  }
}
function Ks(l, e, t) {
  const n = l.slice();
  return n[34] = e[t], n;
}
function Bs(l, e) {
  let t, n, i, s = (
    /*link*/
    e[34].label + ""
  ), r, a, o, u = (
    /*getRelatedCardLabel*/
    e[13](
      /*link*/
      e[34]
    ) + ""
  ), f, c, d, m, _, h, w;
  function y() {
    return (
      /*click_handler*/
      e[23](
        /*link*/
        e[34]
      )
    );
  }
  function S() {
    return (
      /*click_handler_1*/
      e[24](
        /*link*/
        e[34]
      )
    );
  }
  return m = new Te({ props: { css: "wxi-delete-outline" } }), m.$on("click", S), {
    key: l,
    first: null,
    c() {
      t = I("div"), n = I("div"), i = I("div"), r = $(s), a = H(), o = I("div"), f = $(u), c = H(), d = I("div"), N(m.$$.fragment), g(i, "class", "wx-relates svelte-qfer4l"), g(o, "class", "wx-task svelte-qfer4l"), g(n, "class", "wx-link-content"), g(d, "class", "wx-delete-icon svelte-qfer4l"), g(t, "class", "wx-link svelte-qfer4l"), this.first = t;
    },
    m(C, T) {
      v(C, t, T), M(t, n), M(n, i), M(i, r), M(n, a), M(n, o), M(o, f), M(t, c), M(t, d), R(m, d, null), _ = !0, h || (w = te(o, "click", y), h = !0);
    },
    p(C, T) {
      e = C, (!_ || T[0] & /*links*/
      2) && s !== (s = /*link*/
      e[34].label + "") && re(r, s), (!_ || T[0] & /*links*/
      2) && u !== (u = /*getRelatedCardLabel*/
      e[13](
        /*link*/
        e[34]
      ) + "") && re(f, u);
    },
    i(C) {
      _ || (b(m.$$.fragment, C), _ = !0);
    },
    o(C) {
      p(m.$$.fragment, C), _ = !1;
    },
    d(C) {
      C && k(t), A(m), h = !1, w();
    }
  };
}
function Ws(l) {
  let e, t, n, i, s, r, a, o, u, f, c, d, m, _, h, w, y;
  function S(P) {
    l[25](P);
  }
  let C = {
    options: (
      /*relationOptions*/
      l[10]
    ),
    placeholder: (
      /*_*/
      l[7]("Select a relation")
    ),
    $$slots: {
      default: [
        v_,
        ({ option: P }) => ({ 33: P }),
        ({ option: P }) => [0, P ? 4 : 0]
      ]
    },
    $$scope: { ctx: l }
  };
  /*selectedRelationId*/
  l[2] !== void 0 && (C.value = /*selectedRelationId*/
  l[2]), i = new Mn({ props: C }), fe.push(() => Se(i, "value", S)), i.$on(
    "select",
    /*select_handler*/
    l[26]
  );
  function T(P) {
    l[27](P);
  }
  let L = {
    options: (
      /*cardOptions*/
      l[4]
    ),
    placeholder: (
      /*_*/
      l[7]("Select a task")
    ),
    disabled: (
      /*isCardSelectDisabled*/
      l[5]
    ),
    $$slots: {
      default: [
        y_,
        ({ option: P }) => ({ 33: P }),
        ({ option: P }) => [0, P ? 4 : 0]
      ]
    },
    $$scope: { ctx: l }
  };
  return (
    /*selectedCardId*/
    l[3] !== void 0 && (L.value = /*selectedCardId*/
    l[3]), o = new Mn({ props: L }), fe.push(() => Se(o, "value", T)), m = new je({
      props: {
        type: "secondary block",
        click: (
          /*handleCancel*/
          l[12]
        ),
        $$slots: { default: [S_] },
        $$scope: { ctx: l }
      }
    }), w = new je({
      props: {
        type: "primary block",
        click: (
          /*func*/
          l[28]
        ),
        $$slots: { default: [C_] },
        $$scope: { ctx: l }
      }
    }), {
      c() {
        e = I("div"), t = I("div"), n = I("div"), N(i.$$.fragment), r = H(), a = I("div"), N(o.$$.fragment), f = H(), c = I("div"), d = I("div"), N(m.$$.fragment), _ = H(), h = I("div"), N(w.$$.fragment), g(n, "class", "wx-relates-combo svelte-qfer4l"), g(a, "class", "wx-tasks-combo svelte-qfer4l"), g(t, "class", "wx-combos-wrapper svelte-qfer4l"), g(d, "class", "wx-cancel-btn"), g(h, "class", "wx-link-btn svelte-qfer4l"), g(c, "class", "wx-btns-wrapper svelte-qfer4l"), g(e, "class", "wx-set-link svelte-qfer4l");
      },
      m(P, E) {
        v(P, e, E), M(e, t), M(t, n), R(i, n, null), M(t, r), M(t, a), R(o, a, null), M(e, f), M(e, c), M(c, d), R(m, d, null), M(c, _), M(c, h), R(w, h, null), y = !0;
      },
      p(P, E) {
        const F = {};
        E[1] & /*$$scope, option*/
        68 && (F.$$scope = { dirty: E, ctx: P }), !s && E[0] & /*selectedRelationId*/
        4 && (s = !0, F.value = /*selectedRelationId*/
        P[2], Ie(() => s = !1)), i.$set(F);
        const G = {};
        E[0] & /*cardOptions*/
        16 && (G.options = /*cardOptions*/
        P[4]), E[0] & /*isCardSelectDisabled*/
        32 && (G.disabled = /*isCardSelectDisabled*/
        P[5]), E[1] & /*$$scope, option*/
        68 && (G.$$scope = { dirty: E, ctx: P }), !u && E[0] & /*selectedCardId*/
        8 && (u = !0, G.value = /*selectedCardId*/
        P[3], Ie(() => u = !1)), o.$set(G);
        const V = {};
        E[1] & /*$$scope*/
        64 && (V.$$scope = { dirty: E, ctx: P }), m.$set(V);
        const O = {};
        E[1] & /*$$scope*/
        64 && (O.$$scope = { dirty: E, ctx: P }), w.$set(O);
      },
      i(P) {
        y || (b(i.$$.fragment, P), b(o.$$.fragment, P), b(m.$$.fragment, P), b(w.$$.fragment, P), y = !0);
      },
      o(P) {
        p(i.$$.fragment, P), p(o.$$.fragment, P), p(m.$$.fragment, P), p(w.$$.fragment, P), y = !1;
      },
      d(P) {
        P && k(e), A(i), A(o), A(m), A(w);
      }
    }
  );
}
function v_(l) {
  let e = (
    /*option*/
    l[33].label + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i[1] & /*option*/
      4 && e !== (e = /*option*/
      n[33].label + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function y_(l) {
  let e = (
    /*option*/
    l[33].label + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i[1] & /*option*/
      4 && e !== (e = /*option*/
      n[33].label + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function S_(l) {
  let e = (
    /*_*/
    l[7]("Cancel") + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p: K,
    d(n) {
      n && k(t);
    }
  };
}
function C_(l) {
  let e = (
    /*_*/
    l[7]("Link Task") + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p: K,
    d(n) {
      n && k(t);
    }
  };
}
function I_(l) {
  let e, t = [], n = /* @__PURE__ */ new Map(), i, s, r, a, o, u, f, c, d, m, _ = ue(
    /*links*/
    l[1]
  );
  const h = (y) => (
    /*link*/
    y[34].id
  );
  for (let y = 0; y < _.length; y += 1) {
    let S = Ks(l, _, y), C = h(S);
    n.set(C, t[y] = Bs(C, S));
  }
  let w = (
    /*addLinkMode*/
    l[6] && Ws(l)
  );
  return a = new Te({ props: { css: "wxi-plus" } }), {
    c() {
      e = I("div");
      for (let y = 0; y < t.length; y += 1)
        t[y].c();
      i = H(), w && w.c(), s = H(), r = I("div"), N(a.$$.fragment), o = H(), u = I("span"), u.textContent = `${/*_*/
      l[7]("Add link")}`, g(r, "class", "wx-add-link svelte-qfer4l"), g(e, "class", f = "wx-links " + /*fieldPlace*/
      l[0] + " svelte-qfer4l");
    },
    m(y, S) {
      v(y, e, S);
      for (let C = 0; C < t.length; C += 1)
        t[C] && t[C].m(e, null);
      M(e, i), w && w.m(e, null), M(e, s), M(e, r), R(a, r, null), M(r, o), M(r, u), c = !0, d || (m = te(
        r,
        "click",
        /*handleAddClick*/
        l[11]
      ), d = !0);
    },
    p(y, S) {
      S[0] & /*handleDelete, links, goToRelatedLink, getRelatedCardLabel*/
      172034 && (_ = ue(
        /*links*/
        y[1]
      ), W(), t = Fe(t, S, h, 1, y, _, n, e, Ke, Bs, i, Ks), Y()), /*addLinkMode*/
      y[6] ? w ? (w.p(y, S), S[0] & /*addLinkMode*/
      64 && b(w, 1)) : (w = Ws(y), w.c(), b(w, 1), w.m(e, s)) : w && (W(), p(w, 1, 1, () => {
        w = null;
      }), Y()), (!c || S[0] & /*fieldPlace*/
      1 && f !== (f = "wx-links " + /*fieldPlace*/
      y[0] + " svelte-qfer4l")) && g(e, "class", f);
    },
    i(y) {
      if (!c) {
        for (let S = 0; S < _.length; S += 1)
          b(t[S]);
        b(w), b(a.$$.fragment, y), c = !0;
      }
    },
    o(y) {
      for (let S = 0; S < t.length; S += 1)
        p(t[S]);
      p(w), p(a.$$.fragment, y), c = !1;
    },
    d(y) {
      y && k(e);
      for (let S = 0; S < t.length; S += 1)
        t[S].d();
      w && w.d(), A(a), d = !1, m();
    }
  };
}
function M_(l, e, t) {
  let n, i, { api: s } = e, { card: r } = e, { shape: a } = e, { fieldPlace: o } = e;
  const u = ye("wx-i18n").getGroup("kanban"), { showModal: f } = ye("wx-helpers"), { cards: c, links: d } = s.getReactiveState();
  he(l, c, (B) => t(21, n = B)), he(l, d, (B) => t(22, i = B));
  const m = [
    {
      id: 1,
      relation: "relatesTo",
      master: !1,
      label: u("Relates to")
    },
    {
      id: 2,
      relation: "requiredFor",
      master: !0,
      label: u("Is required for")
    },
    {
      id: 3,
      relation: "requiredFor",
      master: !1,
      label: u("Depends on")
    },
    {
      id: 4,
      relation: "duplicate",
      master: !0,
      label: u("Duplicates")
    },
    {
      id: 5,
      relation: "duplicate",
      master: !1,
      label: u("Is duplicated by")
    },
    {
      id: 6,
      relation: "parent",
      master: !0,
      label: u("Is parent for")
    },
    {
      id: 7,
      relation: "parent",
      master: !1,
      label: u("Is subtask of")
    }
  ];
  let _ = null, h = null, w = [], y = null, S = !0, C = !1;
  const T = a.config || {};
  let L;
  function P() {
    t(6, C = !0);
  }
  function E() {
    t(6, C = !1), t(5, S = !0), t(3, h = t(2, _ = ""));
  }
  function F(B) {
    const le = B.isMaster ? "slaveId" : "masterId";
    return n.find((He) => ie(He.id, B[le])).label;
  }
  function G() {
    t(4, w = w.filter((B) => !L.find((le) => (ie(B.id, le.slaveId) && ie(le.masterId, r.id) || ie(B.id, le.masterId) && ie(le.slaveId, r.id)) && le.relation === y)));
  }
  function V() {
    if (_ && h) {
      const B = m.find((le) => ie(le.id, _)).master;
      s.exec("add-link", {
        link: {
          masterId: B ? r.id : h,
          slaveId: B ? h : r.id,
          relation: y
        }
      }), E();
    }
  }
  function O(B) {
    (T.confirmDeletion ?? !0 ? f({
      message: u("Would you like to delete this link?")
    }) : Promise.resolve()).then(() => {
      s.exec("delete-link", { id: B });
    }).catch(() => {
    });
  }
  function D() {
    _ && (y = m.find((B) => ie(B.id, _)).relation), G(), t(3, h = ""), t(5, S = !1);
  }
  function j(B) {
    const le = B.isMaster ? "slaveId" : "masterId";
    s.exec("select-card", { id: B[le] });
  }
  const z = (B) => j(B), q = (B) => O(B.id);
  function J(B) {
    _ = B, t(2, _);
  }
  const U = () => D();
  function ne(B) {
    h = B, t(3, h);
  }
  const Q = () => V();
  return l.$$set = (B) => {
    "api" in B && t(18, s = B.api), "card" in B && t(19, r = B.card), "shape" in B && t(20, a = B.shape), "fieldPlace" in B && t(0, o = B.fieldPlace);
  }, l.$$.update = () => {
    l.$$.dirty[0] & /*$storeLinks, card*/
    4718592 && t(1, L = i.filter((B) => ie(B.masterId, r.id) || ie(B.slaveId, r.id)).map((B) => {
      const le = { ...B };
      return le.isMaster = ie(le.masterId, r.id), le.label = m.find((ge) => ge.relation === le.relation && (le.relation === "relatesTo" || le.isMaster === ge.master)).label, le;
    })), l.$$.dirty[0] & /*links, $storeCards, card*/
    2621442 && (t(4, w = L && n.filter((B) => !ie(B.id, r.id))), E());
  }, [
    o,
    L,
    _,
    h,
    w,
    S,
    C,
    u,
    c,
    d,
    m,
    P,
    E,
    F,
    V,
    O,
    D,
    j,
    s,
    r,
    a,
    n,
    i,
    z,
    q,
    J,
    U,
    ne,
    Q
  ];
}
class T_ extends ee {
  constructor(e) {
    super(), x(
      this,
      e,
      M_,
      I_,
      Z,
      {
        api: 18,
        card: 19,
        shape: 20,
        fieldPlace: 0
      },
      null,
      [-1, -1]
    );
  }
}
function Ys(l, e, t) {
  const n = l.slice();
  return n[23] = e[t], n[24] = e, n[25] = t, n;
}
function D_(l) {
  let e, t, n, i, s;
  return t = new lt({
    props: {
      label: (
        /*_*/
        l[8](
          /*field*/
          l[23].label
        )
      ),
      position: "top",
      $$slots: { default: [B_] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = I("div"), N(t.$$.fragment), n = H(), g(e, "class", i = "wx-card-comments " + /*fieldsPlace*/
      l[6] + " svelte-1c331lt");
    },
    m(r, a) {
      v(r, e, a), R(t, e, null), M(e, n), s = !0;
    },
    p(r, a) {
      const o = {};
      a & /*fields*/
      1 && (o.label = /*_*/
      r[8](
        /*field*/
        r[23].label
      )), a & /*$$scope, api, placement, fields, $values, handleViewChange, editCard*/
      268435645 && (o.$$scope = { dirty: a, ctx: r }), t.$set(o), (!s || a & /*fieldsPlace*/
      64 && i !== (i = "wx-card-comments " + /*fieldsPlace*/
      r[6] + " svelte-1c331lt")) && g(e, "class", i);
    },
    i(r) {
      s || (b(t.$$.fragment, r), s = !0);
    },
    o(r) {
      p(t.$$.fragment, r), s = !1;
    },
    d(r) {
      r && k(e), A(t);
    }
  };
}
function E_(l) {
  let e, t, n, i;
  return t = new lt({
    props: {
      label: (
        /*_*/
        l[8](
          /*field*/
          l[23].label
        )
      ),
      position: "top",
      $$slots: { default: [W_] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = I("div"), N(t.$$.fragment), n = H(), g(e, "class", "links svelte-1c331lt");
    },
    m(s, r) {
      v(s, e, r), R(t, e, null), M(e, n), i = !0;
    },
    p(s, r) {
      const a = {};
      r & /*fields*/
      1 && (a.label = /*_*/
      s[8](
        /*field*/
        s[23].label
      )), r & /*$$scope, fieldsPlace, fields, editCard, api*/
      268435533 && (a.$$scope = { dirty: r, ctx: s }), t.$set(a);
    },
    i(s) {
      i || (b(t.$$.fragment, s), i = !0);
    },
    o(s) {
      p(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && k(e), A(t);
    }
  };
}
function L_(l) {
  let e, t;
  return e = new lt({
    props: {
      label: (
        /*_*/
        l[8](
          /*field*/
          l[23].label
        )
      ),
      position: "top",
      $$slots: { default: [Y_] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fields*/
      1 && (s.label = /*_*/
      n[8](
        /*field*/
        n[23].label
      )), i & /*$$scope, fields, values*/
      268435459 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function R_(l) {
  let e, t;
  return e = new lt({
    props: {
      label: (
        /*_*/
        l[8](
          /*field*/
          l[23].label
        )
      ),
      position: "top",
      $$slots: {
        default: [
          G_,
          ({ id: n }) => ({ 26: n }),
          ({ id: n }) => n ? 67108864 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fields*/
      1 && (s.label = /*_*/
      n[8](
        /*field*/
        n[23].label
      )), i & /*$$scope, id, fields, $values*/
      335544449 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function A_(l) {
  let e, t;
  return e = new lt({
    props: {
      label: (
        /*_*/
        l[8](
          /*field*/
          l[23].label
        )
      ),
      position: "top",
      $$slots: {
        default: [
          J_,
          ({ id: n }) => ({ 26: n }),
          ({ id: n }) => n ? 67108864 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fields*/
      1 && (s.label = /*_*/
      n[8](
        /*field*/
        n[23].label
      )), i & /*$$scope, id, fields, $values*/
      335544449 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function P_(l) {
  let e, t;
  return e = new lt({
    props: {
      label: (
        /*_*/
        l[8](
          /*field*/
          l[23].label
        )
      ),
      position: "top",
      $$slots: { default: [$_] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fields*/
      1 && (s.label = /*_*/
      n[8](
        /*field*/
        n[23].label
      )), i & /*$$scope, fields, $values*/
      268435585 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function N_(l) {
  let e, t;
  return e = new lt({
    props: {
      label: (
        /*_*/
        l[8](
          /*field*/
          l[23].label
        )
      ),
      position: "top",
      $$slots: {
        default: [
          x_,
          ({ id: n }) => ({ 26: n }),
          ({ id: n }) => n ? 67108864 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fields*/
      1 && (s.label = /*_*/
      n[8](
        /*field*/
        n[23].label
      )), i & /*$$scope, id, fields, $values*/
      335544449 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function z_(l) {
  let e, t;
  return e = new lt({
    props: {
      label: (
        /*_*/
        l[8](
          /*field*/
          l[23].label
        )
      ),
      position: "top",
      $$slots: {
        default: [
          eh,
          ({ id: n }) => ({ 26: n }),
          ({ id: n }) => n ? 67108864 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fields*/
      1 && (s.label = /*_*/
      n[8](
        /*field*/
        n[23].label
      )), i & /*$$scope, id, fields, $values*/
      335544449 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function H_(l) {
  let e, t;
  return e = new lt({
    props: {
      label: (
        /*_*/
        l[8](
          /*field*/
          l[23].label
        )
      ),
      position: "top",
      $$slots: {
        default: [
          ih,
          ({ id: n }) => ({ 26: n }),
          ({ id: n }) => n ? 67108864 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fields*/
      1 && (s.label = /*_*/
      n[8](
        /*field*/
        n[23].label
      )), i & /*$$scope, id, fields, $values*/
      335544449 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function O_(l) {
  let e, t;
  return e = new lt({
    props: {
      label: `${/*_*/
      l[8](
        /*field*/
        l[23].label
      )} ${/*$values*/
      l[7][
        /*field*/
        l[23].key
      ]}%`,
      position: "top",
      $$slots: {
        default: [
          sh,
          ({ id: n }) => ({ 26: n }),
          ({ id: n }) => n ? 67108864 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fields, $values*/
      129 && (s.label = `${/*_*/
      n[8](
        /*field*/
        n[23].label
      )} ${/*$values*/
      n[7][
        /*field*/
        n[23].key
      ]}%`), i & /*$$scope, id, fields, $values*/
      335544449 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function F_(l) {
  let e, t;
  return e = new lt({
    props: {
      label: (
        /*_*/
        l[8](
          /*field*/
          l[23].label
        )
      ),
      position: "top",
      $$slots: {
        default: [
          rh,
          ({ id: n }) => ({ 26: n }),
          ({ id: n }) => n ? 67108864 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fields*/
      1 && (s.label = /*_*/
      n[8](
        /*field*/
        n[23].label
      )), i & /*$$scope, id, fields, $values*/
      335544449 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function q_(l) {
  let e, t;
  return e = new lt({
    props: {
      $$slots: {
        default: [
          oh,
          ({ id: n }) => ({ 26: n }),
          ({ id: n }) => n ? 67108864 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*$$scope, id, fields, $values*/
      335544449 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function j_(l) {
  let e, t;
  return e = new lt({
    props: {
      label: (
        /*_*/
        l[8](
          /*field*/
          l[23].label
        )
      ),
      position: "top",
      $$slots: {
        default: [
          ah,
          ({ id: n }) => ({ 26: n }),
          ({ id: n }) => n ? 67108864 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fields*/
      1 && (s.label = /*_*/
      n[8](
        /*field*/
        n[23].label
      )), i & /*$$scope, id, fields, $values*/
      335544449 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function V_(l) {
  let e, t;
  return e = new je({
    props: {
      type: "primary block",
      click: (
        /*func_1*/
        l[22]
      ),
      $$slots: { default: [K_] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*handleViewChange*/
      16 && (s.click = /*func_1*/
      n[22]), i & /*$$scope, editCard*/
      268435464 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function U_(l) {
  let e, t, n;
  function i(r) {
    l[21](
      r,
      /*field*/
      l[23]
    );
  }
  let s = {
    api: (
      /*api*/
      l[2]
    ),
    placement: (
      /*placement*/
      l[5]
    ),
    users: (
      /*field*/
      l[23].values || /*users*/
      l[9]
    ),
    shape: (
      /*field*/
      l[23]
    )
  };
  return (
    /*$values*/
    l[7][
      /*field*/
      l[23].key
    ] !== void 0 && (s.comments = /*$values*/
    l[7][
      /*field*/
      l[23].key
    ]), e = new Fo({ props: s }), fe.push(() => Se(e, "comments", i)), {
      c() {
        N(e.$$.fragment);
      },
      m(r, a) {
        R(e, r, a), n = !0;
      },
      p(r, a) {
        l = r;
        const o = {};
        a & /*api*/
        4 && (o.api = /*api*/
        l[2]), a & /*placement*/
        32 && (o.placement = /*placement*/
        l[5]), a & /*fields*/
        1 && (o.users = /*field*/
        l[23].values || /*users*/
        l[9]), a & /*fields*/
        1 && (o.shape = /*field*/
        l[23]), !t && a & /*$values, fields*/
        129 && (t = !0, o.comments = /*$values*/
        l[7][
          /*field*/
          l[23].key
        ], Ie(() => t = !1)), e.$set(o);
      },
      i(r) {
        n || (b(e.$$.fragment, r), n = !0);
      },
      o(r) {
        p(e.$$.fragment, r), n = !1;
      },
      d(r) {
        A(e, r);
      }
    }
  );
}
function K_(l) {
  let e = (
    /*_*/
    l[8]("Show comments") + ""
  ), t, n, i = (
    /*editCard*/
    (l[3].comments?.length || 0) + ""
  ), s, r;
  return {
    c() {
      t = $(e), n = $(`
						(`), s = $(i), r = $(")");
    },
    m(a, o) {
      v(a, t, o), v(a, n, o), v(a, s, o), v(a, r, o);
    },
    p(a, o) {
      o & /*editCard*/
      8 && i !== (i = /*editCard*/
      (a[3].comments?.length || 0) + "") && re(s, i);
    },
    d(a) {
      a && (k(t), k(n), k(s), k(r));
    }
  };
}
function B_(l) {
  let e, t, n, i;
  const s = [U_, V_], r = [];
  function a(o, u) {
    return (
      /*field*/
      o[23].config?.placement === "editor" ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, u) {
      let f = e;
      e = a(o), e === f ? r[e].p(o, u) : (W(), p(r[f], 1, 1, () => {
        r[f] = null;
      }), Y(), t = r[e], t ? t.p(o, u) : (t = r[e] = s[e](o), t.c()), b(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function W_(l) {
  let e, t;
  return e = new T_({
    props: {
      fieldPlace: (
        /*fieldsPlace*/
        l[6]
      ),
      shape: (
        /*fields*/
        l[0].find(Js)
      ),
      card: (
        /*editCard*/
        l[3]
      ),
      api: (
        /*api*/
        l[2]
      )
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fieldsPlace*/
      64 && (s.fieldPlace = /*fieldsPlace*/
      n[6]), i & /*fields*/
      1 && (s.shape = /*fields*/
      n[0].find(Js)), i & /*editCard*/
      8 && (s.card = /*editCard*/
      n[3]), i & /*api*/
      4 && (s.api = /*api*/
      n[2]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Y_(l) {
  let e, t, n;
  return e = new r_({
    props: {
      field: (
        /*field*/
        l[23]
      ),
      values: (
        /*values*/
        l[1]
      )
    }
  }), {
    c() {
      N(e.$$.fragment), t = H();
    },
    m(i, s) {
      R(e, i, s), v(i, t, s), n = !0;
    },
    p(i, s) {
      const r = {};
      s & /*fields*/
      1 && (r.field = /*field*/
      i[23]), s & /*values*/
      2 && (r.values = /*values*/
      i[1]), e.$set(r);
    },
    i(i) {
      n || (b(e.$$.fragment, i), n = !0);
    },
    o(i) {
      p(e.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(t), A(e, i);
    }
  };
}
function G_(l) {
  let e, t, n, i, s;
  function r(u) {
    l[19](
      u,
      /*field*/
      l[23]
    );
  }
  function a(u) {
    l[20](
      u,
      /*field*/
      l[23]
    );
  }
  let o = {
    id: (
      /*id*/
      l[26]
    ),
    format: (
      /*field*/
      l[23].format || "%m/%d/%Y"
    )
  };
  return (
    /*$values*/
    l[7][
      /*field*/
      l[23].key.start
    ] !== void 0 && (o.start = /*$values*/
    l[7][
      /*field*/
      l[23].key.start
    ]), /*$values*/
    l[7][
      /*field*/
      l[23].key.end
    ] !== void 0 && (o.end = /*$values*/
    l[7][
      /*field*/
      l[23].key.end
    ]), e = new b_({ props: o }), fe.push(() => Se(e, "start", r)), fe.push(() => Se(e, "end", a)), {
      c() {
        N(e.$$.fragment), i = H();
      },
      m(u, f) {
        R(e, u, f), v(u, i, f), s = !0;
      },
      p(u, f) {
        l = u;
        const c = {};
        f & /*id*/
        67108864 && (c.id = /*id*/
        l[26]), f & /*fields*/
        1 && (c.format = /*field*/
        l[23].format || "%m/%d/%Y"), !t && f & /*$values, fields*/
        129 && (t = !0, c.start = /*$values*/
        l[7][
          /*field*/
          l[23].key.start
        ], Ie(() => t = !1)), !n && f & /*$values, fields*/
        129 && (n = !0, c.end = /*$values*/
        l[7][
          /*field*/
          l[23].key.end
        ], Ie(() => n = !1)), e.$set(c);
      },
      i(u) {
        s || (b(e.$$.fragment, u), s = !0);
      },
      o(u) {
        p(e.$$.fragment, u), s = !1;
      },
      d(u) {
        u && k(i), A(e, u);
      }
    }
  );
}
function J_(l) {
  let e, t, n, i;
  const s = [
    { id: (
      /*id*/
      l[26]
    ) },
    {
      format: (
        /*field*/
        l[23].format || "%m/%d/%Y"
      )
    },
    /*field*/
    l[23].config
  ];
  function r(o) {
    l[18](
      o,
      /*field*/
      l[23]
    );
  }
  let a = {};
  for (let o = 0; o < s.length; o += 1)
    a = Ce(a, s[o]);
  return (
    /*$values*/
    l[7][
      /*field*/
      l[23].key
    ] !== void 0 && (a.value = /*$values*/
    l[7][
      /*field*/
      l[23].key
    ]), e = new $u({ props: a }), fe.push(() => Se(e, "value", r)), {
      c() {
        N(e.$$.fragment), n = H();
      },
      m(o, u) {
        R(e, o, u), v(o, n, u), i = !0;
      },
      p(o, u) {
        l = o;
        const f = u & /*id, fields*/
        67108865 ? it(s, [
          u & /*id*/
          67108864 && { id: (
            /*id*/
            l[26]
          ) },
          u & /*fields*/
          1 && {
            format: (
              /*field*/
              l[23].format || "%m/%d/%Y"
            )
          },
          u & /*fields*/
          1 && st(
            /*field*/
            l[23].config
          )
        ]) : {};
        !t && u & /*$values, fields*/
        129 && (t = !0, f.value = /*$values*/
        l[7][
          /*field*/
          l[23].key
        ], Ie(() => t = !1)), e.$set(f);
      },
      i(o) {
        i || (b(e.$$.fragment, o), i = !0);
      },
      o(o) {
        p(e.$$.fragment, o), i = !1;
      },
      d(o) {
        o && k(n), A(e, o);
      }
    }
  );
}
function Q_(l) {
  let e, t;
  return e = new Et({ props: { data: (
    /*option*/
    l[27]
  ) } }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*option*/
      134217728 && (s.data = /*option*/
      n[27]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function X_(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-color svelte-1c331lt"), ce(
        e,
        "background",
        /*option*/
        l[27].color
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*option*/
      134217728 && ce(
        e,
        "background",
        /*option*/
        t[27].color
      );
    },
    i: K,
    o: K,
    d(t) {
      t && k(e);
    }
  };
}
function Z_(l) {
  let e, t, n, i, s, r = (
    /*option*/
    l[27].label + ""
  ), a, o;
  const u = [X_, Q_], f = [];
  function c(d, m) {
    return (
      /*option*/
      d[27].color ? 0 : (
        /*option*/
        d[27].avatar || /*option*/
        d[27].avatarColor ? 1 : -1
      )
    );
  }
  return ~(t = c(l)) && (n = f[t] = u[t](l)), {
    c() {
      e = I("div"), n && n.c(), i = H(), s = I("span"), a = $(r), g(s, "class", "wx-multiselect-label svelte-1c331lt"), g(e, "class", "wx-multiselect-option svelte-1c331lt");
    },
    m(d, m) {
      v(d, e, m), ~t && f[t].m(e, null), M(e, i), M(e, s), M(s, a), o = !0;
    },
    p(d, m) {
      let _ = t;
      t = c(d), t === _ ? ~t && f[t].p(d, m) : (n && (W(), p(f[_], 1, 1, () => {
        f[_] = null;
      }), Y()), ~t ? (n = f[t], n ? n.p(d, m) : (n = f[t] = u[t](d), n.c()), b(n, 1), n.m(e, i)) : n = null), (!o || m & /*option*/
      134217728) && r !== (r = /*option*/
      d[27].label + "") && re(a, r);
    },
    i(d) {
      o || (b(n), o = !0);
    },
    o(d) {
      p(n), o = !1;
    },
    d(d) {
      d && k(e), ~t && f[t].d();
    }
  };
}
function $_(l) {
  let e, t, n, i;
  const s = [
    { checkboxes: !0 },
    { options: (
      /*field*/
      l[23].values
    ) },
    /*field*/
    l[23].config
  ];
  function r(o) {
    l[17](
      o,
      /*field*/
      l[23]
    );
  }
  let a = {
    $$slots: {
      default: [
        Z_,
        ({ option: o }) => ({ 27: o }),
        ({ option: o }) => o ? 134217728 : 0
      ]
    },
    $$scope: { ctx: l }
  };
  for (let o = 0; o < s.length; o += 1)
    a = Ce(a, s[o]);
  return (
    /*$values*/
    l[7][
      /*field*/
      l[23].key
    ] !== void 0 && (a.value = /*$values*/
    l[7][
      /*field*/
      l[23].key
    ]), e = new gf({ props: a }), fe.push(() => Se(e, "value", r)), {
      c() {
        N(e.$$.fragment), n = H();
      },
      m(o, u) {
        R(e, o, u), v(o, n, u), i = !0;
      },
      p(o, u) {
        l = o;
        const f = u & /*fields*/
        1 ? it(s, [
          s[0],
          { options: (
            /*field*/
            l[23].values
          ) },
          st(
            /*field*/
            l[23].config
          )
        ]) : {};
        u & /*$$scope, option*/
        402653184 && (f.$$scope = { dirty: u, ctx: l }), !t && u & /*$values, fields*/
        129 && (t = !0, f.value = /*$values*/
        l[7][
          /*field*/
          l[23].key
        ], Ie(() => t = !1)), e.$set(f);
      },
      i(o) {
        i || (b(e.$$.fragment, o), i = !0);
      },
      o(o) {
        p(e.$$.fragment, o), i = !1;
      },
      d(o) {
        o && k(n), A(e, o);
      }
    }
  );
}
function x_(l) {
  let e, t, n, i;
  const s = [
    { id: (
      /*id*/
      l[26]
    ) },
    { colors: (
      /*field*/
      l[23].values
    ) },
    /*field*/
    l[23].config
  ];
  function r(o) {
    l[16](
      o,
      /*field*/
      l[23]
    );
  }
  let a = {};
  for (let o = 0; o < s.length; o += 1)
    a = Ce(a, s[o]);
  return (
    /*$values*/
    l[7][
      /*field*/
      l[23].key
    ] !== void 0 && (a.value = /*$values*/
    l[7][
      /*field*/
      l[23].key
    ]), e = new Ga({ props: a }), fe.push(() => Se(e, "value", r)), {
      c() {
        N(e.$$.fragment), n = H();
      },
      m(o, u) {
        R(e, o, u), v(o, n, u), i = !0;
      },
      p(o, u) {
        l = o;
        const f = u & /*id, fields*/
        67108865 ? it(s, [
          u & /*id*/
          67108864 && { id: (
            /*id*/
            l[26]
          ) },
          u & /*fields*/
          1 && { colors: (
            /*field*/
            l[23].values
          ) },
          u & /*fields*/
          1 && st(
            /*field*/
            l[23].config
          )
        ]) : {};
        !t && u & /*$values, fields*/
        129 && (t = !0, f.value = /*$values*/
        l[7][
          /*field*/
          l[23].key
        ], Ie(() => t = !1)), e.$set(f);
      },
      i(o) {
        i || (b(e.$$.fragment, o), i = !0);
      },
      o(o) {
        p(e.$$.fragment, o), i = !1;
      },
      d(o) {
        o && k(n), A(e, o);
      }
    }
  );
}
function eh(l) {
  let e, t, n, i;
  const s = [
    { id: (
      /*id*/
      l[26]
    ) },
    { options: (
      /*field*/
      l[23].values
    ) },
    /*field*/
    l[23].config
  ];
  function r(o) {
    l[15](
      o,
      /*field*/
      l[23]
    );
  }
  let a = {};
  for (let o = 0; o < s.length; o += 1)
    a = Ce(a, s[o]);
  return (
    /*$values*/
    l[7][
      /*field*/
      l[23].key
    ] !== void 0 && (a.value = /*$values*/
    l[7][
      /*field*/
      l[23].key
    ]), e = new ro({ props: a }), fe.push(() => Se(e, "value", r)), {
      c() {
        N(e.$$.fragment), n = H();
      },
      m(o, u) {
        R(e, o, u), v(o, n, u), i = !0;
      },
      p(o, u) {
        l = o;
        const f = u & /*id, fields*/
        67108865 ? it(s, [
          u & /*id*/
          67108864 && { id: (
            /*id*/
            l[26]
          ) },
          u & /*fields*/
          1 && { options: (
            /*field*/
            l[23].values
          ) },
          u & /*fields*/
          1 && st(
            /*field*/
            l[23].config
          )
        ]) : {};
        !t && u & /*$values, fields*/
        129 && (t = !0, f.value = /*$values*/
        l[7][
          /*field*/
          l[23].key
        ], Ie(() => t = !1)), e.$set(f);
      },
      i(o) {
        i || (b(e.$$.fragment, o), i = !0);
      },
      o(o) {
        p(e.$$.fragment, o), i = !1;
      },
      d(o) {
        o && k(n), A(e, o);
      }
    }
  );
}
function th(l) {
  let e, t;
  return e = new Et({ props: { data: (
    /*option*/
    l[27]
  ) } }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*option*/
      134217728 && (s.data = /*option*/
      n[27]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function nh(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-color svelte-1c331lt"), ce(
        e,
        "background",
        /*option*/
        l[27].color
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*option*/
      134217728 && ce(
        e,
        "background",
        /*option*/
        t[27].color
      );
    },
    i: K,
    o: K,
    d(t) {
      t && k(e);
    }
  };
}
function lh(l) {
  let e, t, n, i, s = (
    /*option*/
    l[27].label + ""
  ), r, a;
  const o = [nh, th], u = [];
  function f(c, d) {
    return (
      /*option*/
      c[27].color ? 0 : (
        /*option*/
        c[27].avatar || /*option*/
        c[27].avatarColor ? 1 : -1
      )
    );
  }
  return ~(t = f(l)) && (n = u[t] = o[t](l)), {
    c() {
      e = I("div"), n && n.c(), i = H(), r = $(s), g(e, "class", "wx-combo-option svelte-1c331lt");
    },
    m(c, d) {
      v(c, e, d), ~t && u[t].m(e, null), M(e, i), M(e, r), a = !0;
    },
    p(c, d) {
      let m = t;
      t = f(c), t === m ? ~t && u[t].p(c, d) : (n && (W(), p(u[m], 1, 1, () => {
        u[m] = null;
      }), Y()), ~t ? (n = u[t], n ? n.p(c, d) : (n = u[t] = o[t](c), n.c()), b(n, 1), n.m(e, i)) : n = null), (!a || d & /*option*/
      134217728) && s !== (s = /*option*/
      c[27].label + "") && re(r, s);
    },
    i(c) {
      a || (b(n), a = !0);
    },
    o(c) {
      p(n), a = !1;
    },
    d(c) {
      c && k(e), ~t && u[t].d();
    }
  };
}
function ih(l) {
  let e, t, n, i;
  const s = [
    { id: (
      /*id*/
      l[26]
    ) },
    { options: (
      /*field*/
      l[23].values
    ) },
    /*field*/
    l[23].config
  ];
  function r(o) {
    l[14](
      o,
      /*field*/
      l[23]
    );
  }
  let a = {
    $$slots: {
      default: [
        lh,
        ({ option: o }) => ({ 27: o }),
        ({ option: o }) => o ? 134217728 : 0
      ]
    },
    $$scope: { ctx: l }
  };
  for (let o = 0; o < s.length; o += 1)
    a = Ce(a, s[o]);
  return (
    /*$values*/
    l[7][
      /*field*/
      l[23].key
    ] !== void 0 && (a.value = /*$values*/
    l[7][
      /*field*/
      l[23].key
    ]), e = new Mn({ props: a }), fe.push(() => Se(e, "value", r)), {
      c() {
        N(e.$$.fragment), n = H();
      },
      m(o, u) {
        R(e, o, u), v(o, n, u), i = !0;
      },
      p(o, u) {
        l = o;
        const f = u & /*id, fields*/
        67108865 ? it(s, [
          u & /*id*/
          67108864 && { id: (
            /*id*/
            l[26]
          ) },
          u & /*fields*/
          1 && { options: (
            /*field*/
            l[23].values
          ) },
          u & /*fields*/
          1 && st(
            /*field*/
            l[23].config
          )
        ]) : {};
        u & /*$$scope, option*/
        402653184 && (f.$$scope = { dirty: u, ctx: l }), !t && u & /*$values, fields*/
        129 && (t = !0, f.value = /*$values*/
        l[7][
          /*field*/
          l[23].key
        ], Ie(() => t = !1)), e.$set(f);
      },
      i(o) {
        i || (b(e.$$.fragment, o), i = !0);
      },
      o(o) {
        p(e.$$.fragment, o), i = !1;
      },
      d(o) {
        o && k(n), A(e, o);
      }
    }
  );
}
function sh(l) {
  let e, t, n, i;
  const s = [
    { id: (
      /*id*/
      l[26]
    ) },
    { min: 0 },
    /*field*/
    l[23].config
  ];
  function r(o) {
    l[13](
      o,
      /*field*/
      l[23]
    );
  }
  let a = {};
  for (let o = 0; o < s.length; o += 1)
    a = Ce(a, s[o]);
  return (
    /*$values*/
    l[7][
      /*field*/
      l[23].key
    ] !== void 0 && (a.value = /*$values*/
    l[7][
      /*field*/
      l[23].key
    ]), e = new vf({ props: a }), fe.push(() => Se(e, "value", r)), {
      c() {
        N(e.$$.fragment), n = H();
      },
      m(o, u) {
        R(e, o, u), v(o, n, u), i = !0;
      },
      p(o, u) {
        l = o;
        const f = u & /*id, fields*/
        67108865 ? it(s, [
          u & /*id*/
          67108864 && { id: (
            /*id*/
            l[26]
          ) },
          s[1],
          u & /*fields*/
          1 && st(
            /*field*/
            l[23].config
          )
        ]) : {};
        !t && u & /*$values, fields*/
        129 && (t = !0, f.value = /*$values*/
        l[7][
          /*field*/
          l[23].key
        ], Ie(() => t = !1)), e.$set(f);
      },
      i(o) {
        i || (b(e.$$.fragment, o), i = !0);
      },
      o(o) {
        p(e.$$.fragment, o), i = !1;
      },
      d(o) {
        o && k(n), A(e, o);
      }
    }
  );
}
function rh(l) {
  let e, t, n, i;
  const s = [
    { id: (
      /*id*/
      l[26]
    ) },
    /*field*/
    l[23].config
  ];
  function r(o) {
    l[12](
      o,
      /*field*/
      l[23]
    );
  }
  let a = {};
  for (let o = 0; o < s.length; o += 1)
    a = Ce(a, s[o]);
  return (
    /*$values*/
    l[7][
      /*field*/
      l[23].key
    ] !== void 0 && (a.value = /*$values*/
    l[7][
      /*field*/
      l[23].key
    ]), e = new jn({ props: a }), fe.push(() => Se(e, "value", r)), {
      c() {
        N(e.$$.fragment), n = H();
      },
      m(o, u) {
        R(e, o, u), v(o, n, u), i = !0;
      },
      p(o, u) {
        l = o;
        const f = u & /*id, fields*/
        67108865 ? it(s, [
          u & /*id*/
          67108864 && { id: (
            /*id*/
            l[26]
          ) },
          u & /*fields*/
          1 && st(
            /*field*/
            l[23].config
          )
        ]) : {};
        !t && u & /*$values, fields*/
        129 && (t = !0, f.value = /*$values*/
        l[7][
          /*field*/
          l[23].key
        ], Ie(() => t = !1)), e.$set(f);
      },
      i(o) {
        i || (b(e.$$.fragment, o), i = !0);
      },
      o(o) {
        p(e.$$.fragment, o), i = !1;
      },
      d(o) {
        o && k(n), A(e, o);
      }
    }
  );
}
function oh(l) {
  let e, t, n, i;
  const s = [
    { id: (
      /*id*/
      l[26]
    ) },
    { focus: !0 },
    /*field*/
    l[23].config
  ];
  function r(o) {
    l[11](
      o,
      /*field*/
      l[23]
    );
  }
  let a = {};
  for (let o = 0; o < s.length; o += 1)
    a = Ce(a, s[o]);
  return (
    /*$values*/
    l[7][
      /*field*/
      l[23].key
    ] !== void 0 && (a.value = /*$values*/
    l[7][
      /*field*/
      l[23].key
    ]), e = new k_({ props: a }), fe.push(() => Se(e, "value", r)), {
      c() {
        N(e.$$.fragment), n = H();
      },
      m(o, u) {
        R(e, o, u), v(o, n, u), i = !0;
      },
      p(o, u) {
        l = o;
        const f = u & /*id, fields*/
        67108865 ? it(s, [
          u & /*id*/
          67108864 && { id: (
            /*id*/
            l[26]
          ) },
          s[1],
          u & /*fields*/
          1 && st(
            /*field*/
            l[23].config
          )
        ]) : {};
        !t && u & /*$values, fields*/
        129 && (t = !0, f.value = /*$values*/
        l[7][
          /*field*/
          l[23].key
        ], Ie(() => t = !1)), e.$set(f);
      },
      i(o) {
        i || (b(e.$$.fragment, o), i = !0);
      },
      o(o) {
        p(e.$$.fragment, o), i = !1;
      },
      d(o) {
        o && k(n), A(e, o);
      }
    }
  );
}
function ah(l) {
  let e, t, n, i;
  const s = [
    { id: (
      /*id*/
      l[26]
    ) },
    { focus: !0 },
    /*field*/
    l[23].config
  ];
  function r(o) {
    l[10](
      o,
      /*field*/
      l[23]
    );
  }
  let a = {};
  for (let o = 0; o < s.length; o += 1)
    a = Ce(a, s[o]);
  return (
    /*$values*/
    l[7][
      /*field*/
      l[23].key
    ] !== void 0 && (a.value = /*$values*/
    l[7][
      /*field*/
      l[23].key
    ]), e = new Vn({ props: a }), fe.push(() => Se(e, "value", r)), {
      c() {
        N(e.$$.fragment), n = H();
      },
      m(o, u) {
        R(e, o, u), v(o, n, u), i = !0;
      },
      p(o, u) {
        l = o;
        const f = u & /*id, fields*/
        67108865 ? it(s, [
          u & /*id*/
          67108864 && { id: (
            /*id*/
            l[26]
          ) },
          s[1],
          u & /*fields*/
          1 && st(
            /*field*/
            l[23].config
          )
        ]) : {};
        !t && u & /*$values, fields*/
        129 && (t = !0, f.value = /*$values*/
        l[7][
          /*field*/
          l[23].key
        ], Ie(() => t = !1)), e.$set(f);
      },
      i(o) {
        i || (b(e.$$.fragment, o), i = !0);
      },
      o(o) {
        p(e.$$.fragment, o), i = !1;
      },
      d(o) {
        o && k(n), A(e, o);
      }
    }
  );
}
function Gs(l, e) {
  let t, n, i, s, r;
  const a = [
    j_,
    q_,
    F_,
    O_,
    H_,
    z_,
    N_,
    P_,
    A_,
    R_,
    L_,
    E_,
    D_
  ], o = [];
  function u(f, c) {
    return (
      /*field*/
      f[23].type === "text" ? 0 : (
        /*field*/
        f[23].type === "title" ? 1 : (
          /*field*/
          f[23].type === "textarea" ? 2 : (
            /*field*/
            f[23].type === "progress" ? 3 : (
              /*field*/
              f[23].type === "combo" ? 4 : (
                /*field*/
                f[23].type === "select" ? 5 : (
                  /*field*/
                  f[23].type === "color" ? 6 : (
                    /*field*/
                    f[23].type === "multiselect" ? 7 : (
                      /*field*/
                      f[23].type === "date" ? 8 : (
                        /*field*/
                        f[23].type === "dateRange" ? 9 : (
                          /*field*/
                          f[23].type === "files" ? 10 : (
                            /*field*/
                            f[23].type === "links" ? 11 : (
                              /*field*/
                              f[23].type === "comments" && /*field*/
                              (f[23].values?.length || /*users*/
                              f[9]?.length) ? 12 : -1
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  }
  return ~(n = u(e)) && (i = o[n] = a[n](e)), {
    key: l,
    first: null,
    c() {
      t = se(), i && i.c(), s = se(), this.first = t;
    },
    m(f, c) {
      v(f, t, c), ~n && o[n].m(f, c), v(f, s, c), r = !0;
    },
    p(f, c) {
      e = f;
      let d = n;
      n = u(e), n === d ? ~n && o[n].p(e, c) : (i && (W(), p(o[d], 1, 1, () => {
        o[d] = null;
      }), Y()), ~n ? (i = o[n], i ? i.p(e, c) : (i = o[n] = a[n](e), i.c()), b(i, 1), i.m(s.parentNode, s)) : i = null);
    },
    i(f) {
      r || (b(i), r = !0);
    },
    o(f) {
      p(i), r = !1;
    },
    d(f) {
      f && (k(t), k(s)), ~n && o[n].d(f);
    }
  };
}
function uh(l) {
  let e = [], t = /* @__PURE__ */ new Map(), n, i, s = ue(
    /*fields*/
    l[0]
  );
  const r = (a) => (
    /*field*/
    a[23].id
  );
  for (let a = 0; a < s.length; a += 1) {
    let o = Ys(l, s, a), u = r(o);
    t.set(u, e[a] = Gs(u, o));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      n = se();
    },
    m(a, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, o);
      v(a, n, o), i = !0;
    },
    p(a, [o]) {
      o & /*_, fields, id, $values, option, values, fieldsPlace, editCard, api, placement, users, handleViewChange*/
      201327615 && (s = ue(
        /*fields*/
        a[0]
      ), W(), e = Fe(e, o, r, 1, a, s, t, n.parentNode, Ke, Gs, n, Ys), Y());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < s.length; o += 1)
          b(e[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < e.length; o += 1)
        p(e[o]);
      i = !1;
    },
    d(a) {
      a && k(n);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(a);
    }
  };
}
const Js = (l) => l.type === "links";
function fh(l, e, t) {
  let n, i = K, s = () => (i(), i = Ge(a, (D) => t(7, n = D)), a);
  l.$$.on_destroy.push(() => i());
  let { fields: r = [] } = e, { values: a } = e;
  s();
  let { api: o } = e, { editCard: u } = e, { handleViewChange: f } = e, { placement: c } = e, { fieldsPlace: d = "right" } = e;
  const m = ye("wx-i18n").getGroup("kanban"), _ = o.getState().cardShape.users?.values;
  function h(D, j) {
    l.$$.not_equal(n[j.key], D) && (n[j.key] = D, a.set(n));
  }
  function w(D, j) {
    l.$$.not_equal(n[j.key], D) && (n[j.key] = D, a.set(n));
  }
  function y(D, j) {
    l.$$.not_equal(n[j.key], D) && (n[j.key] = D, a.set(n));
  }
  function S(D, j) {
    l.$$.not_equal(n[j.key], D) && (n[j.key] = D, a.set(n));
  }
  function C(D, j) {
    l.$$.not_equal(n[j.key], D) && (n[j.key] = D, a.set(n));
  }
  function T(D, j) {
    l.$$.not_equal(n[j.key], D) && (n[j.key] = D, a.set(n));
  }
  function L(D, j) {
    l.$$.not_equal(n[j.key], D) && (n[j.key] = D, a.set(n));
  }
  function P(D, j) {
    l.$$.not_equal(n[j.key], D) && (n[j.key] = D, a.set(n));
  }
  function E(D, j) {
    l.$$.not_equal(n[j.key], D) && (n[j.key] = D, a.set(n));
  }
  function F(D, j) {
    l.$$.not_equal(n[j.key.start], D) && (n[j.key.start] = D, a.set(n));
  }
  function G(D, j) {
    l.$$.not_equal(n[j.key.end], D) && (n[j.key.end] = D, a.set(n));
  }
  function V(D, j) {
    l.$$.not_equal(n[j.key], D) && (n[j.key] = D, a.set(n));
  }
  const O = () => f("comments");
  return l.$$set = (D) => {
    "fields" in D && t(0, r = D.fields), "values" in D && s(t(1, a = D.values)), "api" in D && t(2, o = D.api), "editCard" in D && t(3, u = D.editCard), "handleViewChange" in D && t(4, f = D.handleViewChange), "placement" in D && t(5, c = D.placement), "fieldsPlace" in D && t(6, d = D.fieldsPlace);
  }, [
    r,
    a,
    o,
    u,
    f,
    c,
    d,
    n,
    m,
    _,
    h,
    w,
    y,
    S,
    C,
    T,
    L,
    P,
    E,
    F,
    G,
    V,
    O
  ];
}
class jo extends ee {
  constructor(e) {
    super(), x(this, e, fh, uh, Z, {
      fields: 0,
      values: 1,
      api: 2,
      editCard: 3,
      handleViewChange: 4,
      placement: 5,
      fieldsPlace: 6
    });
  }
}
function Qs(l, e, t) {
  const n = l.slice();
  return n[40] = e[t], n;
}
function Xs(l) {
  let e, t, n, i, s, r, a, o, u, f, c, d = (
    /*view*/
    l[13] === "main" && !/*config*/
    l[0].autoSave && /*placement*/
    l[21] !== "modal" && Zs(l)
  );
  const m = [mh, dh], _ = [];
  function h(C, T) {
    return (
      /*view*/
      C[13] === "main" ? 0 : 1
    );
  }
  i = h(l), s = _[i] = m[i](l);
  const w = [ph, bh], y = [];
  function S(C, T) {
    return (
      /*view*/
      C[13] === "main" ? 0 : (
        /*view*/
        C[13] === "comments" ? 1 : -1
      )
    );
  }
  return ~(o = S(l)) && (u = y[o] = w[o](l)), {
    c() {
      e = I("div"), d && d.c(), t = H(), n = I("div"), s.c(), a = H(), u && u.c(), f = se(), g(n, "class", r = "wx-editor-controls" + /*isModal*/
      (l[20] && /*view*/
      l[13] === "comments" ? " comments" : "") + " svelte-caibrn"), g(e, "class", "wx-editor-controls-wrapper svelte-caibrn");
    },
    m(C, T) {
      v(C, e, T), d && d.m(e, null), M(e, t), M(e, n), _[i].m(n, null), v(C, a, T), ~o && y[o].m(C, T), v(C, f, T), c = !0;
    },
    p(C, T) {
      /*view*/
      C[13] === "main" && !/*config*/
      C[0].autoSave && /*placement*/
      C[21] !== "modal" ? d ? (d.p(C, T), T[0] & /*view, config*/
      8193 && b(d, 1)) : (d = Zs(C), d.c(), b(d, 1), d.m(e, t)) : d && (W(), p(d, 1, 1, () => {
        d = null;
      }), Y());
      let L = i;
      i = h(C), i === L ? _[i].p(C, T) : (W(), p(_[L], 1, 1, () => {
        _[L] = null;
      }), Y(), s = _[i], s ? s.p(C, T) : (s = _[i] = m[i](C), s.c()), b(s, 1), s.m(n, null)), (!c || T[0] & /*view*/
      8192 && r !== (r = "wx-editor-controls" + /*isModal*/
      (C[20] && /*view*/
      C[13] === "comments" ? " comments" : "") + " svelte-caibrn")) && g(n, "class", r);
      let P = o;
      o = S(C), o === P ? ~o && y[o].p(C, T) : (u && (W(), p(y[P], 1, 1, () => {
        y[P] = null;
      }), Y()), ~o ? (u = y[o], u ? u.p(C, T) : (u = y[o] = w[o](C), u.c()), b(u, 1), u.m(f.parentNode, f)) : u = null);
    },
    i(C) {
      c || (b(d), b(s), b(u), c = !0);
    },
    o(C) {
      p(d), p(s), p(u), c = !1;
    },
    d(C) {
      C && (k(e), k(a), k(f)), d && d.d(), _[i].d(), ~o && y[o].d(C);
    }
  };
}
function Zs(l) {
  let e, t, n;
  return t = new je({
    props: {
      type: "primary wx-editor-btn",
      click: (
        /*saveAndClose*/
        l[22]
      ),
      $$slots: { default: [ch] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-editor-save-button svelte-caibrn");
    },
    m(i, s) {
      v(i, e, s), R(t, e, null), n = !0;
    },
    p(i, s) {
      const r = {};
      s[0] & /*_*/
      4096 | s[1] & /*$$scope*/
      4096 && (r.$$scope = { dirty: s, ctx: i }), t.$set(r);
    },
    i(i) {
      n || (b(t.$$.fragment, i), n = !0);
    },
    o(i) {
      p(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(e), A(t);
    }
  };
}
function ch(l) {
  let e = (
    /*_*/
    l[12]("Save") + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i[0] & /*_*/
      4096 && e !== (e = /*_*/
      n[12]("Save") + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function dh(l) {
  let e, t;
  return e = new je({
    props: {
      click: (
        /*func_1*/
        l[35]
      ),
      $$slots: { default: [_h] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*_*/
      4096 | i[1] & /*$$scope*/
      4096 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function mh(l) {
  let e, t, n, i = (
    /*$cardShape*/
    l[19].votes?.show && $s(l)
  );
  return t = new Te({ props: { css: "wxi-close" } }), t.$on(
    "click",
    /*handleClose*/
    l[24]
  ), {
    c() {
      i && i.c(), e = H(), N(t.$$.fragment);
    },
    m(s, r) {
      i && i.m(s, r), v(s, e, r), R(t, s, r), n = !0;
    },
    p(s, r) {
      /*$cardShape*/
      s[19].votes?.show ? i ? (i.p(s, r), r[0] & /*$cardShape*/
      524288 && b(i, 1)) : (i = $s(s), i.c(), b(i, 1), i.m(e.parentNode, e)) : i && (W(), p(i, 1, 1, () => {
        i = null;
      }), Y());
    },
    i(s) {
      n || (b(i), b(t.$$.fragment, s), n = !0);
    },
    o(s) {
      p(i), p(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && k(e), i && i.d(s), A(t, s);
    }
  };
}
function _h(l) {
  let e = (
    /*_*/
    l[12]("Back") + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i[0] & /*_*/
      4096 && e !== (e = /*_*/
      n[12]("Back") + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function $s(l) {
  let e, t, n, i, s, r, a;
  n = new je({
    props: {
      click: (
        /*handleVote*/
        l[26]
      ),
      icon: "wxi-like",
      $$slots: { default: [hh] },
      $$scope: { ctx: l }
    }
  });
  let o = (
    /*votersList*/
    l[14] && /*voters*/
    l[15]?.length && xs(l)
  );
  return {
    c() {
      e = I("div"), t = I("div"), N(n.$$.fragment), i = H(), o && o.c(), g(t, "class", "wx-kanban-editor-vote svelte-caibrn"), X(
        t,
        "wx-kanban-editor-voted",
        /*$values*/
        l[9].votes?.includes(
          /*$currentUser*/
          l[18]
        )
      ), g(e, "class", "wx-kanban-editor-voting svelte-caibrn");
    },
    m(u, f) {
      v(u, e, f), M(e, t), R(n, t, null), M(e, i), o && o.m(e, null), s = !0, r || (a = [
        te(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          l[32]
        ),
        te(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          l[33]
        )
      ], r = !0);
    },
    p(u, f) {
      const c = {};
      f[0] & /*$values*/
      512 | f[1] & /*$$scope*/
      4096 && (c.$$scope = { dirty: f, ctx: u }), n.$set(c), (!s || f[0] & /*$values, $currentUser*/
      262656) && X(
        t,
        "wx-kanban-editor-voted",
        /*$values*/
        u[9].votes?.includes(
          /*$currentUser*/
          u[18]
        )
      ), /*votersList*/
      u[14] && /*voters*/
      u[15]?.length ? o ? (o.p(u, f), f[0] & /*votersList, voters*/
      49152 && b(o, 1)) : (o = xs(u), o.c(), b(o, 1), o.m(e, null)) : o && (W(), p(o, 1, 1, () => {
        o = null;
      }), Y());
    },
    i(u) {
      s || (b(n.$$.fragment, u), b(o), s = !0);
    },
    o(u) {
      p(n.$$.fragment, u), p(o), s = !1;
    },
    d(u) {
      u && k(e), A(n), o && o.d(), r = !1, De(a);
    }
  };
}
function hh(l) {
  let e = (
    /*$values*/
    (l[9].votes?.length || 0) + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i[0] & /*$values*/
      512 && e !== (e = /*$values*/
      (n[9].votes?.length || 0) + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function xs(l) {
  let e, t;
  return e = new Tt({
    props: {
      width: "230px",
      cancel: (
        /*func*/
        l[34]
      ),
      align: "end",
      $$slots: { default: [gh] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*votersList*/
      16384 && (s.cancel = /*func*/
      n[34]), i[0] & /*voters*/
      32768 | i[1] & /*$$scope*/
      4096 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function er(l, e) {
  let t, n, i, s, r = (
    /*user*/
    e[40].label + ""
  ), a, o, u;
  return n = new Et({
    props: { size: "small", data: (
      /*user*/
      e[40]
    ) }
  }), {
    key: l,
    first: null,
    c() {
      t = I("div"), N(n.$$.fragment), i = H(), s = I("span"), a = $(r), o = H(), g(s, "class", "wx-multiselect-label svelte-caibrn"), g(t, "class", "wx-multiselect-option svelte-caibrn"), this.first = t;
    },
    m(f, c) {
      v(f, t, c), R(n, t, null), M(t, i), M(t, s), M(s, a), M(t, o), u = !0;
    },
    p(f, c) {
      e = f;
      const d = {};
      c[0] & /*voters*/
      32768 && (d.data = /*user*/
      e[40]), n.$set(d), (!u || c[0] & /*voters*/
      32768) && r !== (r = /*user*/
      e[40].label + "") && re(a, r);
    },
    i(f) {
      u || (b(n.$$.fragment, f), u = !0);
    },
    o(f) {
      p(n.$$.fragment, f), u = !1;
    },
    d(f) {
      f && k(t), A(n);
    }
  };
}
function gh(l) {
  let e, t = [], n = /* @__PURE__ */ new Map(), i, s = ue(
    /*voters*/
    l[15]
  );
  const r = (a) => (
    /*user*/
    a[40].id
  );
  for (let a = 0; a < s.length; a += 1) {
    let o = Qs(l, s, a), u = r(o);
    n.set(u, t[a] = er(u, o));
  }
  return {
    c() {
      e = I("div");
      for (let a = 0; a < t.length; a += 1)
        t[a].c();
      g(e, "class", "wx-kanban-voters-list svelte-caibrn");
    },
    m(a, o) {
      v(a, e, o);
      for (let u = 0; u < t.length; u += 1)
        t[u] && t[u].m(e, null);
      i = !0;
    },
    p(a, o) {
      o[0] & /*voters*/
      32768 && (s = ue(
        /*voters*/
        a[15]
      ), W(), t = Fe(t, o, r, 1, a, s, n, e, Ke, er, null, Qs), Y());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < s.length; o += 1)
          b(t[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < t.length; o += 1)
        p(t[o]);
      i = !1;
    },
    d(a) {
      a && k(e);
      for (let o = 0; o < t.length; o += 1)
        t[o].d();
    }
  };
}
function bh(l) {
  let e, t, n;
  function i(r) {
    l[36](r);
  }
  let s = {
    api: (
      /*api*/
      l[2]
    ),
    users: (
      /*users*/
      l[7]
    ),
    shape: (
      /*shape*/
      l[1].find(lr)
    ),
    placement: (
      /*placement*/
      l[21]
    ),
    handleViewChange: (
      /*handleViewChange*/
      l[25]
    )
  };
  return (
    /*$values*/
    l[9].comments !== void 0 && (s.comments = /*$values*/
    l[9].comments), e = new Fo({ props: s }), fe.push(() => Se(e, "comments", i)), {
      c() {
        N(e.$$.fragment);
      },
      m(r, a) {
        R(e, r, a), n = !0;
      },
      p(r, a) {
        const o = {};
        a[0] & /*api*/
        4 && (o.api = /*api*/
        r[2]), a[0] & /*users*/
        128 && (o.users = /*users*/
        r[7]), a[0] & /*shape*/
        2 && (o.shape = /*shape*/
        r[1].find(lr)), !t && a[0] & /*$values*/
        512 && (t = !0, o.comments = /*$values*/
        r[9].comments, Ie(() => t = !1)), e.$set(o);
      },
      i(r) {
        n || (b(e.$$.fragment, r), n = !0);
      },
      o(r) {
        p(e.$$.fragment, r), n = !1;
      },
      d(r) {
        A(e, r);
      }
    }
  );
}
function ph(l) {
  let e, t, n, i, s, r, a, o = (
    /*isModal*/
    l[20] && /*leftSide*/
    l[8].length && tr(l)
  );
  i = new jo({
    props: {
      fields: (
        /*rightSide*/
        l[16]
      ),
      fieldsPlace: "right",
      placement: (
        /*placement*/
        l[21]
      ),
      values: (
        /*values*/
        l[23]
      ),
      api: (
        /*api*/
        l[2]
      ),
      editCard: (
        /*editCard*/
        l[3]
      ),
      handleViewChange: (
        /*handleViewChange*/
        l[25]
      )
    }
  });
  let u = (
    /*placement*/
    l[21] === "modal" && /*view*/
    l[13] === "main" && !/*config*/
    l[0].autoSave && nr(l)
  );
  return {
    c() {
      e = I("div"), o && o.c(), t = H(), n = I("div"), N(i.$$.fragment), s = H(), u && u.c(), r = se(), g(n, "class", "wx-kanban-editor-right svelte-caibrn"), g(e, "class", "wx-kanban-editor-main svelte-caibrn");
    },
    m(f, c) {
      v(f, e, c), o && o.m(e, null), M(e, t), M(e, n), R(i, n, null), v(f, s, c), u && u.m(f, c), v(f, r, c), a = !0;
    },
    p(f, c) {
      /*isModal*/
      f[20] && /*leftSide*/
      f[8].length ? o ? (o.p(f, c), c[0] & /*leftSide*/
      256 && b(o, 1)) : (o = tr(f), o.c(), b(o, 1), o.m(e, t)) : o && (W(), p(o, 1, 1, () => {
        o = null;
      }), Y());
      const d = {};
      c[0] & /*rightSide*/
      65536 && (d.fields = /*rightSide*/
      f[16]), c[0] & /*api*/
      4 && (d.api = /*api*/
      f[2]), c[0] & /*editCard*/
      8 && (d.editCard = /*editCard*/
      f[3]), i.$set(d), /*placement*/
      f[21] === "modal" && /*view*/
      f[13] === "main" && !/*config*/
      f[0].autoSave ? u ? (u.p(f, c), c[0] & /*view, config*/
      8193 && b(u, 1)) : (u = nr(f), u.c(), b(u, 1), u.m(r.parentNode, r)) : u && (W(), p(u, 1, 1, () => {
        u = null;
      }), Y());
    },
    i(f) {
      a || (b(o), b(i.$$.fragment, f), b(u), a = !0);
    },
    o(f) {
      p(o), p(i.$$.fragment, f), p(u), a = !1;
    },
    d(f) {
      f && (k(e), k(s), k(r)), o && o.d(), A(i), u && u.d(f);
    }
  };
}
function tr(l) {
  let e, t, n;
  return t = new jo({
    props: {
      fields: (
        /*leftSide*/
        l[8]
      ),
      fieldsPlace: "left",
      placement: (
        /*placement*/
        l[21]
      ),
      values: (
        /*values*/
        l[23]
      ),
      api: (
        /*api*/
        l[2]
      ),
      editCard: (
        /*editCard*/
        l[3]
      ),
      handleViewChange: (
        /*handleViewChange*/
        l[25]
      )
    }
  }), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-kanban-editor-left svelte-caibrn");
    },
    m(i, s) {
      v(i, e, s), R(t, e, null), n = !0;
    },
    p(i, s) {
      const r = {};
      s[0] & /*leftSide*/
      256 && (r.fields = /*leftSide*/
      i[8]), s[0] & /*api*/
      4 && (r.api = /*api*/
      i[2]), s[0] & /*editCard*/
      8 && (r.editCard = /*editCard*/
      i[3]), t.$set(r);
    },
    i(i) {
      n || (b(t.$$.fragment, i), n = !0);
    },
    o(i) {
      p(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(e), A(t);
    }
  };
}
function nr(l) {
  let e, t, n, i, s, r, a;
  return n = new je({
    props: {
      type: "wx-editor-btn",
      click: (
        /*handleClose*/
        l[24]
      ),
      $$slots: { default: [wh] },
      $$scope: { ctx: l }
    }
  }), r = new je({
    props: {
      type: "primary wx-editor-btn",
      click: (
        /*saveAndClose*/
        l[22]
      ),
      $$slots: { default: [kh] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = I("div"), t = I("div"), N(n.$$.fragment), i = H(), s = I("div"), N(r.$$.fragment), g(t, "class", "wx-editor-cancel-button svelte-caibrn"), g(s, "class", "wx-editor-save-button svelte-caibrn"), g(e, "class", "wx-editor-manual-save svelte-caibrn");
    },
    m(o, u) {
      v(o, e, u), M(e, t), R(n, t, null), M(e, i), M(e, s), R(r, s, null), a = !0;
    },
    p(o, u) {
      const f = {};
      u[0] & /*_*/
      4096 | u[1] & /*$$scope*/
      4096 && (f.$$scope = { dirty: u, ctx: o }), n.$set(f);
      const c = {};
      u[0] & /*_*/
      4096 | u[1] & /*$$scope*/
      4096 && (c.$$scope = { dirty: u, ctx: o }), r.$set(c);
    },
    i(o) {
      a || (b(n.$$.fragment, o), b(r.$$.fragment, o), a = !0);
    },
    o(o) {
      p(n.$$.fragment, o), p(r.$$.fragment, o), a = !1;
    },
    d(o) {
      o && k(e), A(n), A(r);
    }
  };
}
function wh(l) {
  let e = (
    /*_*/
    l[12]("Cancel") + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i[0] & /*_*/
      4096 && e !== (e = /*_*/
      n[12]("Cancel") + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function kh(l) {
  let e = (
    /*_*/
    l[12]("Save") + ""
  ), t;
  return {
    c() {
      t = $(e);
    },
    m(n, i) {
      v(n, t, i);
    },
    p(n, i) {
      i[0] & /*_*/
      4096 && e !== (e = /*_*/
      n[12]("Save") + "") && re(t, e);
    },
    d(n) {
      n && k(t);
    }
  };
}
function vh(l) {
  let e, t, n, i, s, r, a, o;
  function u(d) {
    l[31](d);
  }
  let f = {};
  /*_*/
  l[12] !== void 0 && (f._ = /*_*/
  l[12]), e = new C1({ props: f }), fe.push(() => Se(e, "_", u));
  let c = (
    /*_*/
    l[12] && /*editCard*/
    l[3] && Xs(l)
  );
  return {
    c() {
      N(e.$$.fragment), n = H(), i = I("div"), c && c.c(), g(i, "class", s = "wx-editor " + /*placement*/
      l[21] + " " + /*view*/
      l[13] + " svelte-caibrn"), g(i, "data-kanban-id", Ze.editor), g(i, "data-wx-widget", Ze.editor), X(
        i,
        "wx-modal-narrow",
        /*narrowModal*/
        l[17]
      ), X(
        i,
        "wx-editor-open",
        /*editCard*/
        l[3]
      );
    },
    m(d, m) {
      R(e, d, m), v(d, n, m), v(d, i, m), c && c.m(i, null), r = !0, a || (o = te(
        i,
        "click",
        /*click_handler*/
        l[30]
      ), a = !0);
    },
    p(d, m) {
      const _ = {};
      !t && m[0] & /*_*/
      4096 && (t = !0, _._ = /*_*/
      d[12], Ie(() => t = !1)), e.$set(_), /*_*/
      d[12] && /*editCard*/
      d[3] ? c ? (c.p(d, m), m[0] & /*_, editCard*/
      4104 && b(c, 1)) : (c = Xs(d), c.c(), b(c, 1), c.m(i, null)) : c && (W(), p(c, 1, 1, () => {
        c = null;
      }), Y()), (!r || m[0] & /*view*/
      8192 && s !== (s = "wx-editor " + /*placement*/
      d[21] + " " + /*view*/
      d[13] + " svelte-caibrn")) && g(i, "class", s), (!r || m[0] & /*view, narrowModal*/
      139264) && X(
        i,
        "wx-modal-narrow",
        /*narrowModal*/
        d[17]
      ), (!r || m[0] & /*view, editCard*/
      8200) && X(
        i,
        "wx-editor-open",
        /*editCard*/
        d[3]
      );
    },
    i(d) {
      r || (b(e.$$.fragment, d), b(c), r = !0);
    },
    o(d) {
      p(e.$$.fragment, d), p(c), r = !1;
    },
    d(d) {
      d && (k(n), k(i)), A(e, d), c && c.d(), a = !1, o();
    }
  };
}
function yh(l) {
  let e, t;
  return e = new mo({
    props: {
      words: { ...eo, ...On },
      optional: !0,
      $$slots: { default: [vh] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*view, narrowModal, editCard, _, config, rightSide, api, leftSide, users, shape, $values, votersList, voters, $currentUser, $cardShape*/
      1045391 | i[1] & /*$$scope*/
      4096 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
const lr = (l) => l.type === "comments";
function Sh(l, e, t) {
  let n, i, s, r = K, a = () => (r(), r = Ge(z, (oe) => t(18, s = oe)), z), o, u = K, f = () => (u(), u = Ge(V, (oe) => t(27, o = oe)), V), c, d = K, m = () => (d(), d = Ge(D, (oe) => t(28, c = oe)), D), _, h = K, w = () => (h(), h = Ge(j, (oe) => t(29, _ = oe)), j), y, S = K, C = () => (S(), S = Ge(O, (oe) => t(19, y = oe)), O);
  l.$$.on_destroy.push(() => r()), l.$$.on_destroy.push(() => u()), l.$$.on_destroy.push(() => d()), l.$$.on_destroy.push(() => h()), l.$$.on_destroy.push(() => S());
  let { config: T = qt } = e, { shape: L = null } = e, { api: P } = e;
  const E = T?.placement === "modal", F = T.placement || "sidebar";
  let G = null, V = null;
  f();
  let O = null;
  C();
  let D = null;
  m();
  let j = null;
  w();
  let z = null;
  a();
  function q() {
    P.exec("update-card", { card: { ...i }, id: i.id });
  }
  function J() {
    q(), F === "modal" && Q();
  }
  const U = Oo(
    {},
    () => {
      T.autoSave && q();
    },
    { debounce: T.debounce }
  );
  he(l, U, (oe) => t(9, i = oe));
  function ne(oe) {
    const Ne = { ...oe };
    return L.forEach((qe) => {
      typeof Ne[qe.key] > "u" && (qe.type === "files" || qe.type === "comments" ? Ne[qe.key] = [] : qe.type === "date" ? Ne[qe.key] = null : qe.type === "progress" ? Ne[qe.key] = 0 : Ne[qe.key] = "");
    }), Ne;
  }
  function Q() {
    P.exec("set-edit", null);
  }
  let B, le = "main";
  function ge(oe) {
    t(13, le = oe);
  }
  let He = !1;
  function me() {
    const oe = i.id;
    i.votes?.includes(s) ? (P.exec("delete-vote", { cardId: oe }), zt(U, i.votes = G.votes.filter((Ne) => Ne !== s), i)) : (P.exec("add-vote", { cardId: oe }), zt(U, i.votes = [...i.votes || [], s], i));
  }
  let Me = [], Be = [], de = [], Ee = [];
  function Ae(oe) {
    if (t(8, de = []), F === "sidebar") {
      t(16, Ee = [...oe]);
      return;
    }
    oe.forEach((Ne) => {
      Ne.modalSection === "left" ? de.push(Ne) : Ee.push(Ne);
    });
  }
  function Pe(oe) {
    ve.call(this, l, oe);
  }
  function tt(oe) {
    B = oe, t(12, B);
  }
  const Qe = () => t(14, He = !0), Xe = () => t(14, He = !1), $e = () => t(14, He = !1), ae = () => ge("main");
  function Ye(oe) {
    l.$$.not_equal(i.comments, oe) && (i.comments = oe, U.set(i));
  }
  return l.$$set = (oe) => {
    "config" in oe && t(0, T = oe.config), "shape" in oe && t(1, L = oe.shape), "api" in oe && t(2, P = oe.api);
  }, l.$$.update = () => {
    if (l.$$.dirty[0] & /*config*/
    1 && t(0, T = { ...qt, ...T }), l.$$.dirty[0] & /*api, edit, cardShape*/
    52 && P && !V && !O) {
      const oe = P.getReactiveState();
      f(t(4, V = oe.edit)), C(t(5, O = oe.cardShape)), m(t(6, D = oe.cards)), w(t(10, j = oe.dragItemId)), a(t(11, z = oe.currentUser));
    }
    if (l.$$.dirty[0] & /*shape*/
    2 && Ae(L), l.$$.dirty[0] & /*$dragItemId, cards, $cards, $edit, shape*/
    939524162) {
      const oe = !_ && D && c.find((Ne) => Ne.id === o?.cardId);
      if (L && oe?.priority !== void 0) {
        const Ne = L.find((qe) => qe.key === "priority");
        Ne && !Ne.values.find((qe) => qe.id === oe.priority) && (oe.priority = null);
      }
      t(3, G = oe);
    }
    if (l.$$.dirty[0] & /*shape, editCard*/
    10 && L && U.reset(ne(G)), l.$$.dirty[0] & /*api, $values, users*/
    644 && P) {
      const oe = P.getState().cardShape.users;
      oe?.values?.length && (t(7, Me = oe.values), i?.votes?.length ? t(15, Be = i.votes.map((Ne) => Me.find((qe) => qe.id == Ne))) : t(15, Be = []));
    }
    l.$$.dirty[0] & /*leftSide*/
    256 && t(17, n = E && !de.length);
  }, [
    T,
    L,
    P,
    G,
    V,
    O,
    D,
    Me,
    de,
    i,
    j,
    z,
    B,
    le,
    He,
    Be,
    Ee,
    n,
    s,
    y,
    E,
    F,
    J,
    U,
    Q,
    ge,
    me,
    o,
    c,
    _,
    Pe,
    tt,
    Qe,
    Xe,
    $e,
    ae,
    Ye
  ];
}
let Qn = class extends ee {
  constructor(e) {
    super(), x(this, e, Sh, yh, Z, { config: 0, shape: 1, api: 2 }, null, [-1, -1]);
  }
};
function Ch(l) {
  let e, t, n, i, s;
  return t = new Qn({
    props: {
      api: (
        /*api*/
        l[1]
      ),
      config: (
        /*config*/
        l[0]
      ),
      shape: (
        /*shape*/
        l[2]
      )
    }
  }), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-sidebar svelte-10gkwu4"), g(e, "data-kanban-id", Ze.editor), X(e, "wx-sidebar-open", !!/*editCard*/
      l[3]);
    },
    m(r, a) {
      v(r, e, a), R(t, e, null), n = !0, i || (s = te(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), i = !0);
    },
    p(r, a) {
      const o = {};
      a & /*api*/
      2 && (o.api = /*api*/
      r[1]), a & /*config*/
      1 && (o.config = /*config*/
      r[0]), a & /*shape*/
      4 && (o.shape = /*shape*/
      r[2]), t.$set(o), (!n || a & /*editCard*/
      8) && X(e, "wx-sidebar-open", !!/*editCard*/
      r[3]);
    },
    i(r) {
      n || (b(t.$$.fragment, r), n = !0);
    },
    o(r) {
      p(t.$$.fragment, r), n = !1;
    },
    d(r) {
      r && k(e), A(t), i = !1, s();
    }
  };
}
function Ih(l) {
  let e, t, n = (
    /*editCard*/
    l[3] && ir(l)
  );
  return {
    c() {
      n && n.c(), e = se();
    },
    m(i, s) {
      n && n.m(i, s), v(i, e, s), t = !0;
    },
    p(i, s) {
      /*editCard*/
      i[3] ? n ? (n.p(i, s), s & /*editCard*/
      8 && b(n, 1)) : (n = ir(i), n.c(), b(n, 1), n.m(e.parentNode, e)) : n && (W(), p(n, 1, 1, () => {
        n = null;
      }), Y());
    },
    i(i) {
      t || (b(n), t = !0);
    },
    o(i) {
      p(n), t = !1;
    },
    d(i) {
      i && k(e), n && n.d(i);
    }
  };
}
function ir(l) {
  let e, t;
  return e = new oo({
    props: {
      $$slots: { default: [Th] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*$$scope, api, config, shape*/
      135 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Mh(l) {
  let e, t;
  return e = new Qn({
    props: {
      api: (
        /*api*/
        l[1]
      ),
      config: (
        /*config*/
        l[0]
      ),
      shape: (
        /*shape*/
        l[2]
      )
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*api*/
      2 && (s.api = /*api*/
      n[1]), i & /*config*/
      1 && (s.config = /*config*/
      n[0]), i & /*shape*/
      4 && (s.shape = /*shape*/
      n[2]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Th(l) {
  let e, t, n;
  return t = new Wf({
    props: {
      $$slots: { default: [Mh] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-editor-modal svelte-10gkwu4"), g(e, "data-kanban-id", Ze.editor);
    },
    m(i, s) {
      v(i, e, s), R(t, e, null), n = !0;
    },
    p(i, s) {
      const r = {};
      s & /*$$scope, api, config, shape*/
      135 && (r.$$scope = { dirty: s, ctx: i }), t.$set(r);
    },
    i(i) {
      n || (b(t.$$.fragment, i), n = !0);
    },
    o(i) {
      p(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(e), A(t);
    }
  };
}
function Dh(l) {
  let e, t, n, i;
  const s = [Ih, Ch], r = [];
  function a(o, u) {
    return (
      /*config*/
      o[0].placement === "modal" ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, [u]) {
      let f = e;
      e = a(o), e === f ? r[e].p(o, u) : (W(), p(r[f], 1, 1, () => {
        r[f] = null;
      }), Y(), t = r[e], t ? t.p(o, u) : (t = r[e] = s[e](o), t.c()), b(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function Eh(l, e, t) {
  let n, i, { config: s = qt } = e, { api: r } = e, { shape: a } = e;
  const { edit: o } = r.getReactiveState();
  he(l, o, (f) => t(5, i = f));
  function u(f) {
    ve.call(this, l, f);
  }
  return l.$$set = (f) => {
    "config" in f && t(0, s = f.config), "api" in f && t(1, r = f.api), "shape" in f && t(2, a = f.shape);
  }, l.$$.update = () => {
    l.$$.dirty & /*api, $edit*/
    34 && t(3, n = r.getCard(i?.cardId)), l.$$.dirty & /*config*/
    1 && t(0, s = { ...qt, ...s });
  }, [s, r, a, n, o, i, u];
}
class Lh extends ee {
  constructor(e) {
    super(), x(this, e, Eh, Dh, Z, { config: 0, api: 1, shape: 2 });
  }
}
function sr(l, e, t) {
  const n = l.slice();
  return n[52] = e[t], n;
}
function rr(l, e, t) {
  const n = l.slice();
  return n[55] = e[t], n;
}
function or(l, e, t) {
  const n = l.slice();
  return n[52] = e[t], n;
}
function ar(l, e, t) {
  const n = l.slice();
  return n[55] = e[t], n;
}
function Rh(l) {
  let e, t, n, i;
  e = new Ho({
    props: {
      columns: (
        /*$storeColumns*/
        l[12]
      ),
      areasMeta: (
        /*$areasMeta*/
        l[13]
      ),
      contentEl: (
        /*contentEl*/
        l[3]
      ),
      api: (
        /*api*/
        l[1]
      )
    }
  }), e.$on(
    "action",
    /*action_handler_3*/
    l[41]
  );
  let s = (
    /*$storeColumns*/
    l[12].length && ur(l)
  );
  return {
    c() {
      N(e.$$.fragment), t = H(), s && s.c(), n = se();
    },
    m(r, a) {
      R(e, r, a), v(r, t, a), s && s.m(r, a), v(r, n, a), i = !0;
    },
    p(r, a) {
      const o = {};
      a[0] & /*$storeColumns*/
      4096 && (o.columns = /*$storeColumns*/
      r[12]), a[0] & /*$areasMeta*/
      8192 && (o.areasMeta = /*$areasMeta*/
      r[13]), a[0] & /*contentEl*/
      8 && (o.contentEl = /*contentEl*/
      r[3]), a[0] & /*api*/
      2 && (o.api = /*api*/
      r[1]), e.$set(o), /*$storeColumns*/
      r[12].length ? s ? (s.p(r, a), a[0] & /*$storeColumns*/
      4096 && b(s, 1)) : (s = ur(r), s.c(), b(s, 1), s.m(n.parentNode, n)) : s && (W(), p(s, 1, 1, () => {
        s = null;
      }), Y());
    },
    i(r) {
      i || (b(e.$$.fragment, r), b(s), i = !0);
    },
    o(r) {
      p(e.$$.fragment, r), p(s), i = !1;
    },
    d(r) {
      r && (k(t), k(n)), A(e, r), s && s.d(r);
    }
  };
}
function Ah(l) {
  let e, t;
  return e = new w1({
    props: {
      api: (
        /*api*/
        l[1]
      ),
      $$slots: {
        default: [
          zh,
          ({ startIndex: n, endIndex: i, byRow: s, virtualContentEl: r }) => ({
            48: n,
            49: i,
            50: s,
            51: r
          }),
          ({ startIndex: n, endIndex: i, byRow: s, virtualContentEl: r }) => [
            0,
            (n ? 131072 : 0) | (i ? 262144 : 0) | (s ? 524288 : 0) | (r ? 1048576 : 0)
          ]
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*api*/
      2 && (s.api = /*api*/
      n[1]), i[0] & /*$storeRows, $storeRowKey, api, $storeColumns, $areasMeta, $cardsMap, cardTemplate, isMenuVisible*/
      127043 | i[1] & /*byRow, startIndex, endIndex, virtualContentEl*/
      1966080 | i[2] & /*$$scope*/
      1 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function ur(l) {
  let e = [], t = /* @__PURE__ */ new Map(), n, i, s = ue(
    /*$storeRows*/
    l[14]
  );
  const r = (a) => (
    /*row*/
    a[52].id
  );
  for (let a = 0; a < s.length; a += 1) {
    let o = sr(l, s, a), u = r(o);
    t.set(u, e[a] = cr(u, o));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      n = se();
    },
    m(a, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, o);
      v(a, n, o), i = !0;
    },
    p(a, o) {
      o[0] & /*$storeRows, $storeRowKey, api, $storeColumns, $areasMeta, $cardsMap, cardTemplate, isMenuVisible*/
      127043 && (s = ue(
        /*$storeRows*/
        a[14]
      ), W(), e = Fe(e, o, r, 1, a, s, t, n.parentNode, Ke, cr, n, sr), Y());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < s.length; o += 1)
          b(e[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < e.length; o += 1)
        p(e[o]);
      i = !1;
    },
    d(a) {
      a && k(n);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(a);
    }
  };
}
function fr(l, e) {
  let t, n, i;
  return n = new zo({
    props: {
      api: (
        /*api*/
        e[1]
      ),
      column: (
        /*column*/
        e[55]
      ),
      row: (
        /*row*/
        e[52]
      ),
      columnMeta: (
        /*$areasMeta*/
        e[13][
          /*column*/
          e[55].id
        ]
      ),
      areaMeta: (
        /*$areasMeta*/
        e[13][ze(
          /*column*/
          e[55].id,
          /*row*/
          e[52].id
        )]
      ),
      cards: (
        /*$cardsMap*/
        e[16][ze(
          /*column*/
          e[55].id,
          /*row*/
          e[52].id
        )]
      ),
      cardTemplate: (
        /*cardTemplate*/
        e[0]
      ),
      isMenuVisible: (
        /*isMenuVisible*/
        e[6]
      )
    }
  }), n.$on(
    "action",
    /*action_handler_5*/
    e[42]
  ), {
    key: l,
    first: null,
    c() {
      t = se(), N(n.$$.fragment), this.first = t;
    },
    m(s, r) {
      v(s, t, r), R(n, s, r), i = !0;
    },
    p(s, r) {
      e = s;
      const a = {};
      r[0] & /*api*/
      2 && (a.api = /*api*/
      e[1]), r[0] & /*$storeColumns*/
      4096 && (a.column = /*column*/
      e[55]), r[0] & /*$storeRows*/
      16384 && (a.row = /*row*/
      e[52]), r[0] & /*$areasMeta, $storeColumns*/
      12288 && (a.columnMeta = /*$areasMeta*/
      e[13][
        /*column*/
        e[55].id
      ]), r[0] & /*$areasMeta, $storeColumns, $storeRows*/
      28672 && (a.areaMeta = /*$areasMeta*/
      e[13][ze(
        /*column*/
        e[55].id,
        /*row*/
        e[52].id
      )]), r[0] & /*$cardsMap, $storeColumns, $storeRows*/
      86016 && (a.cards = /*$cardsMap*/
      e[16][ze(
        /*column*/
        e[55].id,
        /*row*/
        e[52].id
      )]), r[0] & /*cardTemplate*/
      1 && (a.cardTemplate = /*cardTemplate*/
      e[0]), r[0] & /*isMenuVisible*/
      64 && (a.isMenuVisible = /*isMenuVisible*/
      e[6]), n.$set(a);
    },
    i(s) {
      i || (b(n.$$.fragment, s), i = !0);
    },
    o(s) {
      p(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && k(t), A(n, s);
    }
  };
}
function Ph(l) {
  let e = [], t = /* @__PURE__ */ new Map(), n, i, s = ue(
    /*$storeColumns*/
    l[12]
  );
  const r = (a) => (
    /*column*/
    a[55].id
  );
  for (let a = 0; a < s.length; a += 1) {
    let o = rr(l, s, a), u = r(o);
    t.set(u, e[a] = fr(u, o));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      n = H();
    },
    m(a, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, o);
      v(a, n, o), i = !0;
    },
    p(a, o) {
      o[0] & /*api, $storeColumns, $storeRows, $areasMeta, $cardsMap, cardTemplate, isMenuVisible*/
      94275 && (s = ue(
        /*$storeColumns*/
        a[12]
      ), W(), e = Fe(e, o, r, 1, a, s, t, n.parentNode, Ke, fr, n, rr), Y());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < s.length; o += 1)
          b(e[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < e.length; o += 1)
        p(e[o]);
      i = !1;
    },
    d(a) {
      a && k(n);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(a);
    }
  };
}
function cr(l, e) {
  let t, n, i;
  return n = new No({
    props: {
      row: (
        /*row*/
        e[52]
      ),
      rows: (
        /*$storeRows*/
        e[14]
      ),
      collapsable: !!/*$storeRowKey*/
      e[15],
      api: (
        /*api*/
        e[1]
      ),
      $$slots: { default: [Ph] },
      $$scope: { ctx: e }
    }
  }), n.$on(
    "action",
    /*action_handler_4*/
    e[43]
  ), {
    key: l,
    first: null,
    c() {
      t = se(), N(n.$$.fragment), this.first = t;
    },
    m(s, r) {
      v(s, t, r), R(n, s, r), i = !0;
    },
    p(s, r) {
      e = s;
      const a = {};
      r[0] & /*$storeRows*/
      16384 && (a.row = /*row*/
      e[52]), r[0] & /*$storeRows*/
      16384 && (a.rows = /*$storeRows*/
      e[14]), r[0] & /*$storeRowKey*/
      32768 && (a.collapsable = !!/*$storeRowKey*/
      e[15]), r[0] & /*api*/
      2 && (a.api = /*api*/
      e[1]), r[0] & /*$storeColumns, api, $storeRows, $areasMeta, $cardsMap, cardTemplate, isMenuVisible*/
      94275 | r[2] & /*$$scope*/
      1 && (a.$$scope = { dirty: r, ctx: e }), n.$set(a);
    },
    i(s) {
      i || (b(n.$$.fragment, s), i = !0);
    },
    o(s) {
      p(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && k(t), A(n, s);
    }
  };
}
function dr(l) {
  let e = [], t = /* @__PURE__ */ new Map(), n, i, s = ue(
    /*$storeRows*/
    l[14]
  );
  const r = (a) => (
    /*row*/
    a[52].id
  );
  for (let a = 0; a < s.length; a += 1) {
    let o = or(l, s, a), u = r(o);
    t.set(u, e[a] = hr(u, o));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      n = se();
    },
    m(a, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, o);
      v(a, n, o), i = !0;
    },
    p(a, o) {
      o[0] & /*$storeRows, $storeRowKey, api, $storeColumns, $areasMeta, $cardsMap, cardTemplate, isMenuVisible*/
      127043 | o[1] & /*byRow, startIndex, endIndex*/
      917504 && (s = ue(
        /*$storeRows*/
        a[14]
      ), W(), e = Fe(e, o, r, 1, a, s, t, n.parentNode, Ke, hr, n, or), Y());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < s.length; o += 1)
          b(e[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < e.length; o += 1)
        p(e[o]);
      i = !1;
    },
    d(a) {
      a && k(n);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(a);
    }
  };
}
function mr(l) {
  let e, t;
  return e = new No({
    props: {
      row: (
        /*row*/
        l[52]
      ),
      rows: (
        /*$storeRows*/
        l[14]
      ),
      collapsable: !!/*$storeRowKey*/
      l[15],
      api: (
        /*api*/
        l[1]
      ),
      $$slots: { default: [Nh] },
      $$scope: { ctx: l }
    }
  }), e.$on(
    "action",
    /*action_handler_1*/
    l[40]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*$storeRows*/
      16384 && (s.row = /*row*/
      n[52]), i[0] & /*$storeRows*/
      16384 && (s.rows = /*$storeRows*/
      n[14]), i[0] & /*$storeRowKey*/
      32768 && (s.collapsable = !!/*$storeRowKey*/
      n[15]), i[0] & /*api*/
      2 && (s.api = /*api*/
      n[1]), i[0] & /*$storeColumns, api, $storeRows, $areasMeta, $cardsMap, cardTemplate, isMenuVisible*/
      94275 | i[1] & /*byRow, startIndex, endIndex*/
      917504 | i[2] & /*$$scope*/
      1 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function _r(l, e) {
  let t, n, i;
  return n = new zo({
    props: {
      api: (
        /*api*/
        e[1]
      ),
      column: (
        /*column*/
        e[55]
      ),
      row: (
        /*row*/
        e[52]
      ),
      columnMeta: (
        /*$areasMeta*/
        e[13][
          /*column*/
          e[55].id
        ]
      ),
      areaMeta: (
        /*$areasMeta*/
        e[13][ze(
          /*column*/
          e[55].id,
          /*row*/
          e[52].id
        )]
      ),
      cards: (
        /*byRow*/
        e[50][
          /*row*/
          e[52].id
        ] ? (
          /*$cardsMap*/
          e[16][ze(
            /*column*/
            e[55].id,
            /*row*/
            e[52].id
          )]?.slice(
            /*byRow*/
            e[50][
              /*row*/
              e[52].id
            ].startIndex,
            /*byRow*/
            e[50][
              /*row*/
              e[52].id
            ].endIndex
          )
        ) : (
          /*$cardsMap*/
          e[16][ze(
            /*column*/
            e[55].id,
            /*row*/
            e[52].id
          )]?.slice(
            /*startIndex*/
            e[48],
            /*endIndex*/
            e[49]
          )
        )
      ),
      cardTemplate: (
        /*cardTemplate*/
        e[0]
      ),
      isMenuVisible: (
        /*isMenuVisible*/
        e[6]
      )
    }
  }), n.$on(
    "action",
    /*action_handler_2*/
    e[39]
  ), {
    key: l,
    first: null,
    c() {
      t = se(), N(n.$$.fragment), this.first = t;
    },
    m(s, r) {
      v(s, t, r), R(n, s, r), i = !0;
    },
    p(s, r) {
      e = s;
      const a = {};
      r[0] & /*api*/
      2 && (a.api = /*api*/
      e[1]), r[0] & /*$storeColumns*/
      4096 && (a.column = /*column*/
      e[55]), r[0] & /*$storeRows*/
      16384 && (a.row = /*row*/
      e[52]), r[0] & /*$areasMeta, $storeColumns*/
      12288 && (a.columnMeta = /*$areasMeta*/
      e[13][
        /*column*/
        e[55].id
      ]), r[0] & /*$areasMeta, $storeColumns, $storeRows*/
      28672 && (a.areaMeta = /*$areasMeta*/
      e[13][ze(
        /*column*/
        e[55].id,
        /*row*/
        e[52].id
      )]), r[0] & /*$storeRows, $cardsMap, $storeColumns*/
      86016 | r[1] & /*byRow, startIndex, endIndex*/
      917504 && (a.cards = /*byRow*/
      e[50][
        /*row*/
        e[52].id
      ] ? (
        /*$cardsMap*/
        e[16][ze(
          /*column*/
          e[55].id,
          /*row*/
          e[52].id
        )]?.slice(
          /*byRow*/
          e[50][
            /*row*/
            e[52].id
          ].startIndex,
          /*byRow*/
          e[50][
            /*row*/
            e[52].id
          ].endIndex
        )
      ) : (
        /*$cardsMap*/
        e[16][ze(
          /*column*/
          e[55].id,
          /*row*/
          e[52].id
        )]?.slice(
          /*startIndex*/
          e[48],
          /*endIndex*/
          e[49]
        )
      )), r[0] & /*cardTemplate*/
      1 && (a.cardTemplate = /*cardTemplate*/
      e[0]), r[0] & /*isMenuVisible*/
      64 && (a.isMenuVisible = /*isMenuVisible*/
      e[6]), n.$set(a);
    },
    i(s) {
      i || (b(n.$$.fragment, s), i = !0);
    },
    o(s) {
      p(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && k(t), A(n, s);
    }
  };
}
function Nh(l) {
  let e = [], t = /* @__PURE__ */ new Map(), n, i, s = ue(
    /*$storeColumns*/
    l[12]
  );
  const r = (a) => (
    /*column*/
    a[55].id
  );
  for (let a = 0; a < s.length; a += 1) {
    let o = ar(l, s, a), u = r(o);
    t.set(u, e[a] = _r(u, o));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      n = H();
    },
    m(a, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, o);
      v(a, n, o), i = !0;
    },
    p(a, o) {
      o[0] & /*api, $storeColumns, $storeRows, $areasMeta, $cardsMap, cardTemplate, isMenuVisible*/
      94275 | o[1] & /*byRow, startIndex, endIndex*/
      917504 && (s = ue(
        /*$storeColumns*/
        a[12]
      ), W(), e = Fe(e, o, r, 1, a, s, t, n.parentNode, Ke, _r, n, ar), Y());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < s.length; o += 1)
          b(e[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < e.length; o += 1)
        p(e[o]);
      i = !1;
    },
    d(a) {
      a && k(n);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(a);
    }
  };
}
function hr(l, e) {
  let t, n, i, s = (
    /*byRow*/
    e[50][
      /*row*/
      e[52].id
    ].visible && mr(e)
  );
  return {
    key: l,
    first: null,
    c() {
      t = se(), s && s.c(), n = se(), this.first = t;
    },
    m(r, a) {
      v(r, t, a), s && s.m(r, a), v(r, n, a), i = !0;
    },
    p(r, a) {
      e = r, /*byRow*/
      e[50][
        /*row*/
        e[52].id
      ].visible ? s ? (s.p(e, a), a[0] & /*$storeRows*/
      16384 | a[1] & /*byRow*/
      524288 && b(s, 1)) : (s = mr(e), s.c(), b(s, 1), s.m(n.parentNode, n)) : s && (W(), p(s, 1, 1, () => {
        s = null;
      }), Y());
    },
    i(r) {
      i || (b(s), i = !0);
    },
    o(r) {
      p(s), i = !1;
    },
    d(r) {
      r && (k(t), k(n)), s && s.d(r);
    }
  };
}
function zh(l) {
  let e, t, n, i;
  e = new Ho({
    props: {
      columns: (
        /*$storeColumns*/
        l[12]
      ),
      areasMeta: (
        /*$areasMeta*/
        l[13]
      ),
      contentEl: (
        /*virtualContentEl*/
        l[51]
      ),
      api: (
        /*api*/
        l[1]
      )
    }
  }), e.$on(
    "action",
    /*action_handler*/
    l[38]
  );
  let s = (
    /*$storeColumns*/
    l[12].length && dr(l)
  );
  return {
    c() {
      N(e.$$.fragment), t = H(), s && s.c(), n = se();
    },
    m(r, a) {
      R(e, r, a), v(r, t, a), s && s.m(r, a), v(r, n, a), i = !0;
    },
    p(r, a) {
      const o = {};
      a[0] & /*$storeColumns*/
      4096 && (o.columns = /*$storeColumns*/
      r[12]), a[0] & /*$areasMeta*/
      8192 && (o.areasMeta = /*$areasMeta*/
      r[13]), a[1] & /*virtualContentEl*/
      1048576 && (o.contentEl = /*virtualContentEl*/
      r[51]), a[0] & /*api*/
      2 && (o.api = /*api*/
      r[1]), e.$set(o), /*$storeColumns*/
      r[12].length ? s ? (s.p(r, a), a[0] & /*$storeColumns*/
      4096 && b(s, 1)) : (s = dr(r), s.c(), b(s, 1), s.m(n.parentNode, n)) : s && (W(), p(s, 1, 1, () => {
        s = null;
      }), Y());
    },
    i(r) {
      i || (b(e.$$.fragment, r), b(s), i = !0);
    },
    o(r) {
      p(e.$$.fragment, r), p(s), i = !1;
    },
    d(r) {
      r && (k(t), k(n)), A(e, r), s && s.d(r);
    }
  };
}
function gr(l) {
  let e, t;
  return e = new Lh({
    props: {
      api: (
        /*api*/
        l[1]
      ),
      config: (
        /*$rEditor*/
        l[17]
      ),
      shape: (
        /*$rEditorShape*/
        l[18]
      )
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i[0] & /*api*/
      2 && (s.api = /*api*/
      n[1]), i[0] & /*$rEditor*/
      131072 && (s.config = /*$rEditor*/
      n[17]), i[0] & /*$rEditorShape*/
      262144 && (s.shape = /*$rEditorShape*/
      n[18]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Hh(l) {
  let e, t, n, i, s, r, a, o, u, f, c, d, m, _, h, w;
  const y = [Ah, Rh], S = [];
  function C(E, F) {
    return (
      /*$rLayout*/
      E[11] === "default:lazy" ? 0 : 1
    );
  }
  i = C(l), s = S[i] = y[i](l);
  let T = (
    /*edit*/
    l[9] && !/*$movedCardId*/
    l[10] && /*$rEditor*/
    l[17].show !== !1 && gr(l)
  );
  function L(E) {
    l[45](E);
  }
  let P = {
    at: "left-bottom",
    options: (
      /*menuItems*/
      l[5]
    ),
    resolver: (
      /*resolver*/
      l[32]
    ),
    dataKey: "menuId"
  };
  return (
    /*showMenu*/
    l[4] !== void 0 && (P.handler = /*showMenu*/
    l[4]), d = new hn({ props: P }), fe.push(() => Se(d, "handler", L)), d.$on(
      "click",
      /*handleMenuAction*/
      l[33]
    ), {
      c() {
        e = I("div"), t = I("div"), n = I("div"), s.c(), a = H(), T && T.c(), c = H(), N(d.$$.fragment), g(n, "class", "wx-content svelte-1lcmu6i"), g(n, "data-kanban-id", Ze.scrollableContent), X(
          n,
          "wx-virtual-content",
          /*$rLayout*/
          l[11] === "default:lazy"
        ), X(n, "wx-not-anchored", !!/*$movedCardId*/
        l[10]), g(t, "class", "wx-content-wrapper svelte-1lcmu6i"), g(t, "data-kanban-id", Ze.content), X(
          t,
          "wx-virtual-content",
          /*$rLayout*/
          l[11] === "default:lazy"
        ), g(e, "class", "wx-kanban svelte-1lcmu6i"), g(e, "data-wx-widget", Ze.kanban), X(e, "wx-dragged", !!/*$movedCardId*/
        l[10]), X(e, "wx-touch", mi.isMobile || navigator.maxTouchPoints > 1);
      },
      m(E, F) {
        v(E, e, F), M(e, t), M(t, n), S[i].m(n, null), l[44](n), M(e, a), T && T.m(e, null), v(E, c, F), R(d, E, F), _ = !0, h || (w = [
          te(n, "click", function() {
            nt(
              /*showMenu*/
              l[4]
            ) && l[4].apply(this, arguments);
          }),
          Oe(r = od.call(null, t, {
            api: (
              /*api*/
              l[1]
            ),
            readonly: (
              /*select*/
              l[8] === !1
            )
          })),
          Oe(o = rd.call(null, e, {
            api: (
              /*api*/
              l[1]
            ),
            readonly: (
              /*dnd*/
              l[7] === !1
            )
          })),
          Oe(u = dd.call(null, e, {
            api: (
              /*api*/
              l[1]
            ),
            readonly: (
              /*edit*/
              l[9] === !1
            ),
            locale: (
              /*_*/
              l[19]
            ),
            confirmDeletion: (
              /*$rCardShape*/
              l[2].confirmDeletion?.show ?? !0 ? (
                /*showConfirm*/
                l[34]
              ) : null
            )
          })),
          Oe(f = cd.call(null, e, { api: (
            /*api*/
            l[1]
          ), tick: dt }))
        ], h = !0);
      },
      p(E, F) {
        l = E;
        let G = i;
        i = C(l), i === G ? S[i].p(l, F) : (W(), p(S[G], 1, 1, () => {
          S[G] = null;
        }), Y(), s = S[i], s ? s.p(l, F) : (s = S[i] = y[i](l), s.c()), b(s, 1), s.m(n, null)), (!_ || F[0] & /*$rLayout*/
        2048) && X(
          n,
          "wx-virtual-content",
          /*$rLayout*/
          l[11] === "default:lazy"
        ), (!_ || F[0] & /*$movedCardId*/
        1024) && X(n, "wx-not-anchored", !!/*$movedCardId*/
        l[10]), r && nt(r.update) && F[0] & /*api, select*/
        258 && r.update.call(null, {
          api: (
            /*api*/
            l[1]
          ),
          readonly: (
            /*select*/
            l[8] === !1
          )
        }), (!_ || F[0] & /*$rLayout*/
        2048) && X(
          t,
          "wx-virtual-content",
          /*$rLayout*/
          l[11] === "default:lazy"
        ), /*edit*/
        l[9] && !/*$movedCardId*/
        l[10] && /*$rEditor*/
        l[17].show !== !1 ? T ? (T.p(l, F), F[0] & /*edit, $movedCardId, $rEditor*/
        132608 && b(T, 1)) : (T = gr(l), T.c(), b(T, 1), T.m(e, null)) : T && (W(), p(T, 1, 1, () => {
          T = null;
        }), Y()), o && nt(o.update) && F[0] & /*api, dnd*/
        130 && o.update.call(null, {
          api: (
            /*api*/
            l[1]
          ),
          readonly: (
            /*dnd*/
            l[7] === !1
          )
        }), u && nt(u.update) && F[0] & /*api, edit, $rCardShape*/
        518 && u.update.call(null, {
          api: (
            /*api*/
            l[1]
          ),
          readonly: (
            /*edit*/
            l[9] === !1
          ),
          locale: (
            /*_*/
            l[19]
          ),
          confirmDeletion: (
            /*$rCardShape*/
            l[2].confirmDeletion?.show ?? !0 ? (
              /*showConfirm*/
              l[34]
            ) : null
          )
        }), f && nt(f.update) && F[0] & /*api*/
        2 && f.update.call(null, { api: (
          /*api*/
          l[1]
        ), tick: dt }), (!_ || F[0] & /*$movedCardId*/
        1024) && X(e, "wx-dragged", !!/*$movedCardId*/
        l[10]), (!_ || F & /*navigator*/
        0) && X(e, "wx-touch", mi.isMobile || navigator.maxTouchPoints > 1);
        const V = {};
        F[0] & /*menuItems*/
        32 && (V.options = /*menuItems*/
        l[5]), !m && F[0] & /*showMenu*/
        16 && (m = !0, V.handler = /*showMenu*/
        l[4], Ie(() => m = !1)), d.$set(V);
      },
      i(E) {
        _ || (b(s), b(T), b(d.$$.fragment, E), _ = !0);
      },
      o(E) {
        p(s), p(T), p(d.$$.fragment, E), _ = !1;
      },
      d(E) {
        E && (k(e), k(c)), S[i].d(), l[44](null), T && T.d(), A(d, E), h = !1, De(w);
      }
    }
  );
}
function Oh(l, e, t) {
  let n, i, s, r, a, o, u, f, c, d, m, _, h, w, y, { cardTemplate: S } = e, { api: C } = e, T;
  const L = ye("wx-i18n").getGroup("kanban");
  let { columns: P, rowKey: E, rows: F, readonly: G, dragItemId: V, areasMeta: O, cardsMap: D, cardShape: j, cards: z, editorShape: q, editor: J, layout: U } = C.getReactiveState();
  he(l, P, (ae) => t(12, c = ae)), he(l, E, (ae) => t(15, _ = ae)), he(l, F, (ae) => t(14, m = ae)), he(l, G, (ae) => t(37, o = ae)), he(l, V, (ae) => t(10, u = ae)), he(l, O, (ae) => t(13, d = ae)), he(l, D, (ae) => t(16, h = ae)), he(l, j, (ae) => t(2, r = ae)), he(l, z, (ae) => t(36, a = ae)), he(l, q, (ae) => t(18, y = ae)), he(l, J, (ae) => t(17, w = ae)), he(l, U, (ae) => t(11, f = ae));
  const { showModal: ne } = ye("wx-helpers");
  let Q = null, B = [];
  const le = {}, ge = {};
  function He(ae) {
    const Ye = a.find((oe) => oe.id == ae);
    return Ye && (C.getState().selected?.length > 1 && C.exec("select-card", { id: parseInt(ae) }), t(5, B = le[Ye.id] || [])), Ye;
  }
  const me = (ae, Ye) => {
    const oe = Ye.menu.items({ card: ae });
    return !oe || !oe.length ? null : oe.map((Ne) => _n(Ne, L));
  };
  function Me(ae) {
    const { action: Ye, context: oe } = ae.detail;
    if (Ye) {
      if (Ye.onClick) {
        Ye.onClick({
          id: Ye.id,
          item: Ye,
          card: oe
        });
        return;
      }
      switch (Ye.id) {
        case "delete-card": {
          (r.confirmDeletion?.show ?? !0 ? Be() : Promise.resolve()).then(() => {
            C.exec("delete-card", { id: oe.id });
          }).catch(() => {
          });
          break;
        }
        case "set-edit":
          C.exec("set-edit", { cardId: oe.id, eventSource: "ui" });
          break;
        case "duplicate-card":
          C.exec("duplicate-card", {
            id: oe.id,
            card: {
              label: `${L("Duplicate of")} ${oe.label}`
            }
          });
          break;
      }
    }
  }
  function Be() {
    return ne({
      message: L("Would you like to delete this card?")
    });
  }
  function de(ae) {
    ve.call(this, l, ae);
  }
  function Ee(ae) {
    ve.call(this, l, ae);
  }
  function Ae(ae) {
    ve.call(this, l, ae);
  }
  function Pe(ae) {
    ve.call(this, l, ae);
  }
  function tt(ae) {
    ve.call(this, l, ae);
  }
  function Qe(ae) {
    ve.call(this, l, ae);
  }
  function Xe(ae) {
    fe[ae ? "unshift" : "push"](() => {
      T = ae, t(3, T);
    });
  }
  function $e(ae) {
    Q = ae, t(4, Q);
  }
  return l.$$set = (ae) => {
    "cardTemplate" in ae && t(0, S = ae.cardTemplate), "api" in ae && t(1, C = ae.api);
  }, l.$$.update = () => {
    l.$$.dirty[1] & /*$storeReadonly*/
    64 && t(9, { edit: n, select: i, dnd: s } = o, n, (t(8, i), t(37, o)), (t(7, s), t(37, o))), l.$$.dirty[0] & /*$rCardShape*/
    4 | l.$$.dirty[1] & /*$rCards, cardMenuItems*/
    48 && a.forEach((ae) => {
      t(35, le[ae.id] = me(ae, r), le), t(6, ge[ae.id] = !!(r.menu.show && le[ae.id]?.length), ge);
    });
  }, [
    S,
    C,
    r,
    T,
    Q,
    B,
    ge,
    s,
    i,
    n,
    u,
    f,
    c,
    d,
    m,
    _,
    h,
    w,
    y,
    L,
    P,
    E,
    F,
    G,
    V,
    O,
    D,
    j,
    z,
    q,
    J,
    U,
    He,
    Me,
    Be,
    le,
    a,
    o,
    de,
    Ee,
    Ae,
    Pe,
    tt,
    Qe,
    Xe,
    $e
  ];
}
class Fh extends ee {
  constructor(e) {
    super(), x(this, e, Oh, Hh, Z, { cardTemplate: 0, api: 1 }, null, [-1, -1, -1]);
  }
}
function qh(l) {
  let e, t;
  return e = new Fh({
    props: {
      api: (
        /*api*/
        l[2]
      ),
      cardTemplate: (
        /*cardTemplate*/
        l[1]
      ),
      editor: (
        /*editor*/
        l[0]
      )
    }
  }), e.$on(
    "action",
    /*handleAction*/
    l[3]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*cardTemplate*/
      2 && (s.cardTemplate = /*cardTemplate*/
      n[1]), i & /*editor*/
      1 && (s.editor = /*editor*/
      n[0]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function jh(l) {
  let e, t;
  return e = new qf({
    props: {
      $$slots: { default: [qh] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*$$scope, cardTemplate, editor*/
      16777219 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Vh(l) {
  let e, t;
  return e = new mo({
    props: {
      words: { ...eo, ...On },
      optional: !0,
      $$slots: { default: [jh] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, [i]) {
      const s = {};
      i & /*$$scope, cardTemplate, editor*/
      16777219 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Uh(l, e, t) {
  let { columns: n } = e, { rows: i = null } = e, { cards: s } = e, { cardShape: r = Xt } = e, { columnShape: a = null } = e, { rowShape: o = null } = e, { editorShape: u = null } = e, { readonly: f = !1 } = e, { columnKey: c = "column" } = e, { rowKey: d = "" } = e, { scrollType: m = "default" } = e, { renderType: _ = "default" } = e, { cardHeight: h = null } = e, { cardTemplate: w = null } = e, { editor: y = qt } = e, { history: S = !0 } = e, { currentUser: C = null } = e, { links: T = null } = e, { dataStore: L = null } = e, { editorAutoSave: P = !0 } = e;
  const E = Re();
  let F = new ya(E);
  L || (L = new nd((O) => Un(O), { history: S }), L.out.setNext(F));
  const G = _d(L, F), V = ({ detail: { action: O, data: D } }) => {
    G.exec(O, D);
  };
  return l.$$set = (O) => {
    "columns" in O && t(5, n = O.columns), "rows" in O && t(6, i = O.rows), "cards" in O && t(7, s = O.cards), "cardShape" in O && t(8, r = O.cardShape), "columnShape" in O && t(9, a = O.columnShape), "rowShape" in O && t(10, o = O.rowShape), "editorShape" in O && t(11, u = O.editorShape), "readonly" in O && t(12, f = O.readonly), "columnKey" in O && t(13, c = O.columnKey), "rowKey" in O && t(14, d = O.rowKey), "scrollType" in O && t(15, m = O.scrollType), "renderType" in O && t(16, _ = O.renderType), "cardHeight" in O && t(17, h = O.cardHeight), "cardTemplate" in O && t(1, w = O.cardTemplate), "editor" in O && t(0, y = O.editor), "history" in O && t(18, S = O.history), "currentUser" in O && t(19, C = O.currentUser), "links" in O && t(20, T = O.links), "dataStore" in O && t(4, L = O.dataStore), "editorAutoSave" in O && t(21, P = O.editorAutoSave);
  }, l.$$.update = () => {
    l.$$.dirty & /*editorAutoSave*/
    2097152 && P === !1 && t(0, y.autoSave = !1, y), l.$$.dirty & /*dataStore, columnKey, rowKey, columns, rows, cards, cardShape, columnShape, editorShape, rowShape, readonly, cardHeight, currentUser, links, editor, scrollType, renderType*/
    1834993 && L.init({
      columnKey: c,
      rowKey: d,
      columns: n,
      rows: i,
      cards: s,
      cardsMap: {},
      cardsMeta: {},
      cardShape: r,
      columnShape: a,
      editorShape: u,
      rowShape: o,
      readonly: f,
      cardHeight: h,
      currentUser: C,
      links: T,
      editor: y,
      scrollType: m,
      renderType: _
    });
  }, [
    y,
    w,
    G,
    V,
    L,
    n,
    i,
    s,
    r,
    a,
    o,
    u,
    f,
    c,
    d,
    m,
    _,
    h,
    S,
    C,
    T,
    P
  ];
}
let Kh = class extends ee {
  constructor(e) {
    super(), x(this, e, Uh, Vh, Z, {
      columns: 5,
      rows: 6,
      cards: 7,
      cardShape: 8,
      columnShape: 9,
      rowShape: 10,
      editorShape: 11,
      readonly: 12,
      columnKey: 13,
      rowKey: 14,
      scrollType: 15,
      renderType: 16,
      cardHeight: 17,
      cardTemplate: 1,
      editor: 0,
      history: 18,
      currentUser: 19,
      links: 20,
      dataStore: 4,
      editorAutoSave: 21,
      api: 2
    });
  }
  get api() {
    return this.$$.ctx[2];
  }
};
function Bh(l) {
  let e, t;
  return e = new ao({ props: { fonts: (
    /*fonts*/
    l[0]
  ) } }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fonts*/
      1 && (s.fonts = /*fonts*/
      n[0]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Wh(l) {
  let e, t;
  return e = new ao({
    props: {
      fonts: (
        /*fonts*/
        l[0]
      ),
      $$slots: { default: [Yh] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fonts*/
      1 && (s.fonts = /*fonts*/
      n[0]), i & /*$$scope*/
      8 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Yh(l) {
  let e;
  const t = (
    /*#slots*/
    l[2].default
  ), n = be(
    t,
    l,
    /*$$scope*/
    l[3],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, s) {
      n && n.m(i, s), e = !0;
    },
    p(i, s) {
      n && n.p && (!e || s & /*$$scope*/
      8) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? pe(
          t,
          /*$$scope*/
          i[3],
          s,
          null
        ) : ke(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (b(n, i), e = !0);
    },
    o(i) {
      p(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Gh(l) {
  let e, t, n, i;
  const s = [Wh, Bh], r = [];
  function a(o, u) {
    return (
      /*SLOTS*/
      o[1] && /*SLOTS*/
      o[1].default ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function Jh(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  const s = cn(n);
  let { fonts: r = !0 } = e;
  const a = s;
  return l.$$set = (o) => {
    "fonts" in o && t(0, r = o.fonts), "$$scope" in o && t(3, i = o.$$scope);
  }, [r, a, n, i];
}
class Qh extends ee {
  constructor(e) {
    super(), x(this, e, Jh, Gh, Z, { fonts: 0 });
  }
}
function Xh(l) {
  let e, t;
  return e = new fo({ props: { fonts: (
    /*fonts*/
    l[0]
  ) } }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fonts*/
      1 && (s.fonts = /*fonts*/
      n[0]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Zh(l) {
  let e, t;
  return e = new fo({
    props: {
      fonts: (
        /*fonts*/
        l[0]
      ),
      $$slots: { default: [$h] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fonts*/
      1 && (s.fonts = /*fonts*/
      n[0]), i & /*$$scope*/
      8 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function $h(l) {
  let e;
  const t = (
    /*#slots*/
    l[2].default
  ), n = be(
    t,
    l,
    /*$$scope*/
    l[3],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, s) {
      n && n.m(i, s), e = !0;
    },
    p(i, s) {
      n && n.p && (!e || s & /*$$scope*/
      8) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? pe(
          t,
          /*$$scope*/
          i[3],
          s,
          null
        ) : ke(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (b(n, i), e = !0);
    },
    o(i) {
      p(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function xh(l) {
  let e, t, n, i;
  const s = [Zh, Xh], r = [];
  function a(o, u) {
    return (
      /*SLOTS*/
      o[1] && /*SLOTS*/
      o[1].default ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function eg(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  const s = cn(n);
  let { fonts: r = !0 } = e;
  const a = s;
  return l.$$set = (o) => {
    "fonts" in o && t(0, r = o.fonts), "$$scope" in o && t(3, i = o.$$scope);
  }, [r, a, n, i];
}
class tg extends ee {
  constructor(e) {
    super(), x(this, e, eg, xh, Z, { fonts: 0 });
  }
}
function ng(l) {
  let e, t;
  return e = new co({ props: { fonts: (
    /*fonts*/
    l[0]
  ) } }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fonts*/
      1 && (s.fonts = /*fonts*/
      n[0]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function lg(l) {
  let e, t;
  return e = new co({
    props: {
      fonts: (
        /*fonts*/
        l[0]
      ),
      $$slots: { default: [ig] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*fonts*/
      1 && (s.fonts = /*fonts*/
      n[0]), i & /*$$scope*/
      8 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function ig(l) {
  let e;
  const t = (
    /*#slots*/
    l[2].default
  ), n = be(
    t,
    l,
    /*$$scope*/
    l[3],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, s) {
      n && n.m(i, s), e = !0;
    },
    p(i, s) {
      n && n.p && (!e || s & /*$$scope*/
      8) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? pe(
          t,
          /*$$scope*/
          i[3],
          s,
          null
        ) : ke(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (b(n, i), e = !0);
    },
    o(i) {
      p(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function sg(l) {
  let e, t, n, i;
  const s = [lg, ng], r = [];
  function a(o, u) {
    return (
      /*SLOTS*/
      o[1] && /*SLOTS*/
      o[1].default ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function rg(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  const s = cn(n);
  let { fonts: r = !0 } = e;
  const a = s;
  return l.$$set = (o) => {
    "fonts" in o && t(0, r = o.fonts), "$$scope" in o && t(3, i = o.$$scope);
  }, [r, a, n, i];
}
class og extends ee {
  constructor(e) {
    super(), x(this, e, rg, sg, Z, { fonts: 0 });
  }
}
function br(l, e, t) {
  const n = l.slice();
  return n[25] = e[t], n;
}
function pr(l) {
  let e, t, n;
  return t = new Te({ props: { css: "wxi-close" } }), t.$on(
    "click",
    /*handleClear*/
    l[13]
  ), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-close-icon svelte-ra2v7s");
    },
    m(i, s) {
      v(i, e, s), R(t, e, null), n = !0;
    },
    p: K,
    i(i) {
      n || (b(t.$$.fragment, i), n = !0);
    },
    o(i) {
      p(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(e), A(t);
    }
  };
}
function wr(l) {
  let e, t;
  return e = new Tt({
    props: {
      cancel: (
        /*handlePopupClose*/
        l[10]
      ),
      $$slots: { default: [dg] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*$$scope, searchResults, resultTemplate, $$slots*/
      4227120 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function kr(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[17].default
  ), i = be(
    n,
    l,
    /*$$scope*/
    l[22],
    null
  );
  return {
    c() {
      e = I("div"), i && i.c(), g(e, "class", "wx-settings svelte-ra2v7s");
    },
    m(s, r) {
      v(s, e, r), i && i.m(e, null), t = !0;
    },
    p(s, r) {
      i && i.p && (!t || r & /*$$scope*/
      4194304) && we(
        i,
        n,
        s,
        /*$$scope*/
        s[22],
        t ? pe(
          n,
          /*$$scope*/
          s[22],
          r,
          null
        ) : ke(
          /*$$scope*/
          s[22]
        ),
        null
      );
    },
    i(s) {
      t || (b(i, s), t = !0);
    },
    o(s) {
      p(i, s), t = !1;
    },
    d(s) {
      s && k(e), i && i.d(s);
    }
  };
}
function ag(l) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = `${/*_*/
      l[9]("No results")}`, g(e, "class", "wx-list-item wx-no-results svelte-ra2v7s");
    },
    m(t, n) {
      v(t, e, n);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && k(e);
    }
  };
}
function ug(l) {
  let e, t, n, i, s = ue(
    /*searchResults*/
    l[4]
  ), r = [];
  for (let o = 0; o < s.length; o += 1)
    r[o] = vr(br(l, s, o));
  const a = (o) => p(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      e = I("div");
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      g(e, "class", "wx-results svelte-ra2v7s");
    },
    m(o, u) {
      v(o, e, u);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(e, null);
      t = !0, n || (i = Oe(Vt.call(
        null,
        e,
        /*resultClicks*/
        l[14]
      )), n = !0);
    },
    p(o, u) {
      if (u & /*searchResults, resultTemplate*/
      48) {
        s = ue(
          /*searchResults*/
          o[4]
        );
        let f;
        for (f = 0; f < s.length; f += 1) {
          const c = br(o, s, f);
          r[f] ? (r[f].p(c, u), b(r[f], 1)) : (r[f] = vr(c), r[f].c(), b(r[f], 1), r[f].m(e, null));
        }
        for (W(), f = s.length; f < r.length; f += 1)
          a(f);
        Y();
      }
    },
    i(o) {
      if (!t) {
        for (let u = 0; u < s.length; u += 1)
          b(r[u]);
        t = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let u = 0; u < r.length; u += 1)
        p(r[u]);
      t = !1;
    },
    d(o) {
      o && k(e), ot(r, o), n = !1, i();
    }
  };
}
function fg(l) {
  let e, t, n = (
    /*result*/
    l[25].label + ""
  ), i;
  return {
    c() {
      e = I("div"), t = I("span"), i = $(n), g(t, "class", "wx-list-item-text svelte-ra2v7s"), g(e, "class", "wx-item-inner svelte-ra2v7s");
    },
    m(s, r) {
      v(s, e, r), M(e, t), M(t, i);
    },
    p(s, r) {
      r & /*searchResults*/
      16 && n !== (n = /*result*/
      s[25].label + "") && re(i, n);
    },
    i: K,
    o: K,
    d(s) {
      s && k(e);
    }
  };
}
function cg(l) {
  let e, t, n;
  var i = (
    /*resultTemplate*/
    l[5]
  );
  function s(r, a) {
    return { props: { result: (
      /*result*/
      r[25]
    ) } };
  }
  return i && (e = Je(i, s(l))), {
    c() {
      e && N(e.$$.fragment), t = se();
    },
    m(r, a) {
      e && R(e, r, a), v(r, t, a), n = !0;
    },
    p(r, a) {
      if (a & /*resultTemplate*/
      32 && i !== (i = /*resultTemplate*/
      r[5])) {
        if (e) {
          W();
          const o = e;
          p(o.$$.fragment, 1, 0, () => {
            A(o, 1);
          }), Y();
        }
        i ? (e = Je(i, s(r)), N(e.$$.fragment), b(e.$$.fragment, 1), R(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const o = {};
        a & /*searchResults*/
        16 && (o.result = /*result*/
        r[25]), e.$set(o);
      }
    },
    i(r) {
      n || (e && b(e.$$.fragment, r), n = !0);
    },
    o(r) {
      e && p(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && k(t), e && A(e, r);
    }
  };
}
function vr(l) {
  let e, t, n, i, s, r;
  const a = [cg, fg], o = [];
  function u(f, c) {
    return (
      /*resultTemplate*/
      f[5] ? 0 : 1
    );
  }
  return t = u(l), n = o[t] = a[t](l), {
    c() {
      e = I("div"), n.c(), i = H(), g(e, "class", "wx-list-item svelte-ra2v7s"), g(e, "data-id", s = /*result*/
      l[25].id);
    },
    m(f, c) {
      v(f, e, c), o[t].m(e, null), M(e, i), r = !0;
    },
    p(f, c) {
      let d = t;
      t = u(f), t === d ? o[t].p(f, c) : (W(), p(o[d], 1, 1, () => {
        o[d] = null;
      }), Y(), n = o[t], n ? n.p(f, c) : (n = o[t] = a[t](f), n.c()), b(n, 1), n.m(e, i)), (!r || c & /*searchResults*/
      16 && s !== (s = /*result*/
      f[25].id)) && g(e, "data-id", s);
    },
    i(f) {
      r || (b(n), r = !0);
    },
    o(f) {
      p(n), r = !1;
    },
    d(f) {
      f && k(e), o[t].d();
    }
  };
}
function dg(l) {
  let e, t, n, i, s, r = (
    /*$$slots*/
    l[15]?.default && kr(l)
  );
  const a = [ug, ag], o = [];
  function u(f, c) {
    return (
      /*searchResults*/
      f[4] ? 0 : 1
    );
  }
  return n = u(l), i = o[n] = a[n](l), {
    c() {
      e = I("div"), r && r.c(), t = H(), i.c(), g(e, "class", "wx-search-popup svelte-ra2v7s");
    },
    m(f, c) {
      v(f, e, c), r && r.m(e, null), M(e, t), o[n].m(e, null), s = !0;
    },
    p(f, c) {
      /*$$slots*/
      f[15]?.default ? r ? (r.p(f, c), c & /*$$slots*/
      32768 && b(r, 1)) : (r = kr(f), r.c(), b(r, 1), r.m(e, t)) : r && (W(), p(r, 1, 1, () => {
        r = null;
      }), Y());
      let d = n;
      n = u(f), n === d ? o[n].p(f, c) : (W(), p(o[d], 1, 1, () => {
        o[d] = null;
      }), Y(), i = o[n], i ? i.p(f, c) : (i = o[n] = a[n](f), i.c()), b(i, 1), i.m(e, null));
    },
    i(f) {
      s || (b(r), b(i), s = !0);
    },
    o(f) {
      p(r), p(i), s = !1;
    },
    d(f) {
      f && k(e), r && r.d(), o[n].d();
    }
  };
}
function mg(l) {
  let e, t, n, i, s, r, a, o, u, f, c;
  n = new Te({ props: { css: "wxi-search" } });
  let d = !!/*value*/
  l[0] && pr(l), m = (
    /*searchFocused*/
    l[6] && wr(l)
  );
  return {
    c() {
      e = I("div"), t = I("div"), N(n.$$.fragment), i = H(), s = I("input"), a = H(), d && d.c(), o = H(), m && m.c(), g(t, "class", "wx-search-icon svelte-ra2v7s"), g(s, "id", r = `${/*id*/
      l[1]}`), s.readOnly = /*readonly*/
      l[2], g(
        s,
        "placeholder",
        /*placeholder*/
        l[3]
      ), g(s, "class", "svelte-ra2v7s"), g(e, "class", "wx-search svelte-ra2v7s"), g(e, "tabindex", 1), g(e, "data-wx-widget", Ze.search);
    },
    m(_, h) {
      v(_, e, h), M(e, t), R(n, t, null), M(e, i), M(e, s), Ue(
        s,
        /*value*/
        l[0]
      ), l[20](s), M(e, a), d && d.m(e, null), M(e, o), m && m.m(e, null), l[21](e), u = !0, f || (c = [
        te(
          s,
          "input",
          /*input_1_input_handler*/
          l[19]
        ),
        te(
          s,
          "focus",
          /*handleSearchFocus*/
          l[11]
        ),
        te(
          s,
          "blur",
          /*handleSearchBlur*/
          l[12]
        ),
        te(
          e,
          "click",
          /*click_handler*/
          l[18]
        )
      ], f = !0);
    },
    p(_, [h]) {
      (!u || h & /*id*/
      2 && r !== (r = `${/*id*/
      _[1]}`)) && g(s, "id", r), (!u || h & /*readonly*/
      4) && (s.readOnly = /*readonly*/
      _[2]), (!u || h & /*placeholder*/
      8) && g(
        s,
        "placeholder",
        /*placeholder*/
        _[3]
      ), h & /*value*/
      1 && s.value !== /*value*/
      _[0] && Ue(
        s,
        /*value*/
        _[0]
      ), /*value*/
      _[0] ? d ? (d.p(_, h), h & /*value*/
      1 && b(d, 1)) : (d = pr(_), d.c(), b(d, 1), d.m(e, o)) : d && (W(), p(d, 1, 1, () => {
        d = null;
      }), Y()), /*searchFocused*/
      _[6] ? m ? (m.p(_, h), h & /*searchFocused*/
      64 && b(m, 1)) : (m = wr(_), m.c(), b(m, 1), m.m(e, null)) : m && (W(), p(m, 1, 1, () => {
        m = null;
      }), Y());
    },
    i(_) {
      u || (b(n.$$.fragment, _), b(d), b(m), u = !0);
    },
    o(_) {
      p(n.$$.fragment, _), p(d), p(m), u = !1;
    },
    d(_) {
      _ && k(e), A(n), l[20](null), d && d.d(), m && m.d(), l[21](null), f = !1, De(c);
    }
  };
}
function _g(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e;
  const s = cn(n), r = ye("wx-i18n").getGroup("kanban");
  let { value: a = "" } = e, { id: o = et() } = e, { readonly: u = !1 } = e, { focus: f = !1 } = e, { placeholder: c = r("Search") } = e, { searchResults: d = null } = e, { resultTemplate: m } = e;
  const _ = Re();
  let h = !1, w;
  f && rt(() => w.focus());
  let y;
  function S(D) {
    y.contains(D.target) || (t(6, h = !1), t(0, a = ""));
  }
  function C() {
    t(6, h = !0), _("action", { action: "search-focus" });
  }
  function T() {
    _("action", { action: "search-blur" });
  }
  function L(D) {
    _("action", { action: "result-click", id: D }), t(6, h = !1);
  }
  function P() {
    t(0, a = "");
  }
  const E = { click: (D) => L(D) };
  function F(D) {
    ve.call(this, l, D);
  }
  function G() {
    a = this.value, t(0, a);
  }
  function V(D) {
    fe[D ? "unshift" : "push"](() => {
      w = D, t(7, w);
    });
  }
  function O(D) {
    fe[D ? "unshift" : "push"](() => {
      y = D, t(8, y);
    });
  }
  return l.$$set = (D) => {
    "value" in D && t(0, a = D.value), "id" in D && t(1, o = D.id), "readonly" in D && t(2, u = D.readonly), "focus" in D && t(16, f = D.focus), "placeholder" in D && t(3, c = D.placeholder), "searchResults" in D && t(4, d = D.searchResults), "resultTemplate" in D && t(5, m = D.resultTemplate), "$$scope" in D && t(22, i = D.$$scope);
  }, [
    a,
    o,
    u,
    c,
    d,
    m,
    h,
    w,
    y,
    r,
    S,
    C,
    T,
    P,
    E,
    s,
    f,
    n,
    F,
    G,
    V,
    O,
    i
  ];
}
class hg extends ee {
  constructor(e) {
    super(), x(this, e, _g, mg, Z, {
      value: 0,
      id: 1,
      readonly: 2,
      focus: 16,
      placeholder: 3,
      searchResults: 4,
      resultTemplate: 5
    });
  }
}
function yr(l) {
  let e, t, n, i, s, r;
  function a(u) {
    l[12](u);
  }
  let o = { options: (
    /*options*/
    l[1]
  ) };
  return (
    /*$search*/
    l[4].by !== void 0 && (o.value = /*$search*/
    l[4].by), i = new ro({ props: o }), fe.push(() => Se(i, "value", a)), {
      c() {
        e = I("div"), t = I("div"), t.textContent = `${/*_*/
        l[6]("Search in")}:`, n = H(), N(i.$$.fragment), g(t, "class", "wx-title svelte-4fxaw7"), g(e, "class", "wx-select svelte-4fxaw7");
      },
      m(u, f) {
        v(u, e, f), M(e, t), M(e, n), R(i, e, null), r = !0;
      },
      p(u, f) {
        const c = {};
        f & /*options*/
        2 && (c.options = /*options*/
        u[1]), !s && f & /*$search*/
        16 && (s = !0, c.value = /*$search*/
        u[4].by, Ie(() => s = !1)), i.$set(c);
      },
      i(u) {
        r || (b(i.$$.fragment, u), r = !0);
      },
      o(u) {
        p(i.$$.fragment, u), r = !1;
      },
      d(u) {
        u && k(e), A(i);
      }
    }
  );
}
function gg(l) {
  let e, t, n = (
    /*showOptions*/
    l[0] && yr(l)
  );
  return {
    c() {
      n && n.c(), e = se();
    },
    m(i, s) {
      n && n.m(i, s), v(i, e, s), t = !0;
    },
    p(i, s) {
      /*showOptions*/
      i[0] ? n ? (n.p(i, s), s & /*showOptions*/
      1 && b(n, 1)) : (n = yr(i), n.c(), b(n, 1), n.m(e.parentNode, e)) : n && (W(), p(n, 1, 1, () => {
        n = null;
      }), Y());
    },
    i(i) {
      t || (b(n), t = !0);
    },
    o(i) {
      p(n), t = !1;
    },
    d(i) {
      i && k(e), n && n.d(i);
    }
  };
}
function bg(l) {
  let e, t, n;
  function i(r) {
    l[13](r);
  }
  let s = {
    searchResults: (
      /*searchResults*/
      l[3]
    ),
    resultTemplate: (
      /*resultTemplate*/
      l[2]
    ),
    $$slots: { default: [gg] },
    $$scope: { ctx: l }
  };
  return (
    /*$search*/
    l[4].value !== void 0 && (s.value = /*$search*/
    l[4].value), e = new hg({ props: s }), fe.push(() => Se(e, "value", i)), e.$on(
      "action",
      /*handleSearchAction*/
      l[8]
    ), {
      c() {
        N(e.$$.fragment);
      },
      m(r, a) {
        R(e, r, a), n = !0;
      },
      p(r, [a]) {
        const o = {};
        a & /*searchResults*/
        8 && (o.searchResults = /*searchResults*/
        r[3]), a & /*resultTemplate*/
        4 && (o.resultTemplate = /*resultTemplate*/
        r[2]), a & /*$$scope, options, $search, showOptions*/
        16403 && (o.$$scope = { dirty: a, ctx: r }), !t && a & /*$search*/
        16 && (t = !0, o.value = /*$search*/
        r[4].value, Ie(() => t = !1)), e.$set(o);
      },
      i(r) {
        n || (b(e.$$.fragment, r), n = !0);
      },
      o(r) {
        p(e.$$.fragment, r), n = !1;
      },
      d(r) {
        A(e, r);
      }
    }
  );
}
function pg(l, e, t) {
  let n, i, s, r = K, a = () => (r(), r = Ge(n, (C) => t(11, s = C)), n);
  l.$$.on_destroy.push(() => r());
  const o = ye("wx-i18n").getGroup("kanban");
  let { api: u } = e, { showOptions: f = !0 } = e, { options: c = [
    { id: null, label: o("Everywhere") },
    { id: "label", label: o("Label") },
    {
      id: "description",
      label: o("Description")
    }
  ] } = e, { resultTemplate: d } = e, m = null;
  const _ = Oo({ value: "", by: c[0].id }, ({ value: C, by: T }) => {
    T || (T = null);
    const L = c.find((P) => P.id === T);
    u?.exec("set-search", { value: C, by: T, searchRule: L?.searchRule });
  });
  he(l, _, (C) => t(4, i = C));
  let h;
  function w({ detail: C }) {
    const { id: T, action: L } = C;
    switch (L) {
      case "result-click":
        u?.exec("select-card", { id: T });
        break;
      case "search-focus":
        i.value && u?.exec("set-search", { value: i.value, by: i.by });
        break;
    }
  }
  function y(C) {
    l.$$.not_equal(i.by, C) && (i.by = C, _.set(i));
  }
  function S(C) {
    l.$$.not_equal(i.value, C) && (i.value = C, _.set(i));
  }
  return l.$$set = (C) => {
    "api" in C && t(9, u = C.api), "showOptions" in C && t(0, f = C.showOptions), "options" in C && t(1, c = C.options), "resultTemplate" in C && t(2, d = C.resultTemplate);
  }, l.$$.update = () => {
    l.$$.dirty & /*api*/
    512 && a(t(5, n = u?.getReactiveState().cardsMeta)), l.$$.dirty & /*$cardsMeta, api, searchResults*/
    2568 && s && (t(3, m = Object.keys(s).reduce(
      (C, T) => (s[T].found && C.push(u?.getCard(T)), C),
      []
    )), m.length || t(3, m = null)), l.$$.dirty & /*changeHandler, $search, api*/
    1552 && (h || (t(10, h = (C) => {
      (C?.value !== i.value || C?.by !== i?.by) && _.reset(C);
    }), u?.on("set-search", h)));
  }, [
    f,
    c,
    d,
    m,
    i,
    n,
    o,
    _,
    w,
    u,
    h,
    s,
    y,
    S
  ];
}
class wg extends ee {
  constructor(e) {
    super(), x(this, e, pg, bg, Z, {
      api: 9,
      showOptions: 0,
      options: 1,
      resultTemplate: 2
    });
  }
}
function kg(l) {
  let e, t;
  return e = new Te({
    props: {
      title: (
        /*_*/
        l[0]("Add new row")
      ),
      css: "wxi-table-row-plus-after"
    }
  }), e.$on(
    "click",
    /*handleClick*/
    l[1]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p: K,
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function vg(l, e, t) {
  let { api: n } = e;
  const i = ye("wx-i18n").getGroup("kanban");
  function s() {
    n?.exec("add-row", {
      id: Fn(),
      row: { label: i("Untitled") }
    });
  }
  return l.$$set = (r) => {
    "api" in r && t(2, n = r.api);
  }, [i, s, n];
}
class yg extends ee {
  constructor(e) {
    super(), x(this, e, vg, kg, Z, { api: 2 });
  }
}
function Sg(l) {
  let e, t;
  return e = new Te({
    props: {
      title: (
        /*_*/
        l[0]("Add new column")
      ),
      css: "wxi-table-column-plus-after"
    }
  }), e.$on(
    "click",
    /*handleClick*/
    l[1]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p: K,
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Cg(l, e, t) {
  let { api: n } = e;
  const i = ye("wx-i18n").getGroup("kanban");
  function s() {
    n?.exec("add-column", {
      id: Fn(),
      column: { label: i("Untitled") }
    });
  }
  return l.$$set = (r) => {
    "api" in r && t(2, n = r.api);
  }, [i, s, n];
}
class Ig extends ee {
  constructor(e) {
    super(), x(this, e, Cg, Sg, Z, { api: 2 });
  }
}
function Sr(l) {
  let e, t, n, i = (
    /*preserve*/
    l[2].text + ""
  ), s, r;
  return t = new Te({ props: { css: "wxi-close" } }), t.$on(
    "click",
    /*handleReset*/
    l[5]
  ), {
    c() {
      e = I("div"), N(t.$$.fragment), n = H(), s = $(i), g(e, "class", "wx-preserve svelte-r6cslo");
    },
    m(a, o) {
      v(a, e, o), R(t, e, null), M(e, n), M(e, s), r = !0;
    },
    p(a, o) {
      (!r || o & /*preserve*/
      4) && i !== (i = /*preserve*/
      a[2].text + "") && re(s, i);
    },
    i(a) {
      r || (b(t.$$.fragment, a), r = !0);
    },
    o(a) {
      p(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && k(e), A(t);
    }
  };
}
function Mg(l) {
  let e, t, n;
  return t = new Te({ props: { css: "wxi-sort" } }), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-control svelte-r6cslo"), g(
        e,
        "title",
        /*_*/
        l[3]("Sort")
      );
    },
    m(i, s) {
      v(i, e, s), R(t, e, null), n = !0;
    },
    p: K,
    i(i) {
      n || (b(t.$$.fragment, i), n = !0);
    },
    o(i) {
      p(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(e), A(t);
    }
  };
}
function Tg(l) {
  let e, t, n, i = (
    /*preserve*/
    l[2] && Sr(l)
  );
  return t = new tm({
    props: {
      options: (
        /*options*/
        l[0]
      ),
      at: "left-bottom",
      $$slots: { default: [Mg] },
      $$scope: { ctx: l }
    }
  }), t.$on(
    "click",
    /*handleMenuAction*/
    l[4]
  ), {
    c() {
      i && i.c(), e = H(), N(t.$$.fragment);
    },
    m(s, r) {
      i && i.m(s, r), v(s, e, r), R(t, s, r), n = !0;
    },
    p(s, [r]) {
      /*preserve*/
      s[2] ? i ? (i.p(s, r), r & /*preserve*/
      4 && b(i, 1)) : (i = Sr(s), i.c(), b(i, 1), i.m(e.parentNode, e)) : i && (W(), p(i, 1, 1, () => {
        i = null;
      }), Y());
      const a = {};
      r & /*options*/
      1 && (a.options = /*options*/
      s[0]), r & /*$$scope*/
      256 && (a.$$scope = { dirty: r, ctx: s }), t.$set(a);
    },
    i(s) {
      n || (b(i), b(t.$$.fragment, s), n = !0);
    },
    o(s) {
      p(i), p(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && k(e), i && i.d(s), A(t, s);
    }
  };
}
function Dg(l, e, t) {
  let n, i = K, s = () => (i(), i = Ge(f, (m) => t(7, n = m)), f);
  l.$$.on_destroy.push(() => i());
  const r = ye("wx-i18n").getGroup("kanban");
  let { api: a } = e, { options: o = null } = e, u = null, f;
  function c(m) {
    const _ = m?.detail.action;
    if (_) {
      const h = o.find((w) => w.id === _.id);
      h && a.exec("set-sort", { by: h.by, dir: h.dir });
    }
  }
  function d() {
    a.exec("set-sort", null);
  }
  return l.$$set = (m) => {
    "api" in m && t(6, a = m.api), "options" in m && t(0, o = m.options);
  }, l.$$.update = () => {
    l.$$.dirty & /*options*/
    1 && (t(0, o = Array.isArray(o) ? o : kc()), t(0, o = o.map((m) => {
      let { id: _, text: h, label: w, dir: y } = m;
      return {
        ...m,
        id: _ || et(),
        text: r(h || w),
        icon: y === "asc" ? "wxi-asc" : "wxi-desc"
      };
    }))), l.$$.dirty & /*api, stateSort, $stateSort, options*/
    195 && a && (f || s(t(1, f = a.getReactiveState().sort)), n?.preserve ? t(2, u = o.find((m) => m.by === n.by && m.dir === n.dir)) : t(2, u = null));
  }, [
    o,
    f,
    u,
    r,
    c,
    d,
    a,
    n
  ];
}
class Eg extends ee {
  constructor(e) {
    super(), x(this, e, Dg, Tg, Z, { api: 6, options: 0 });
  }
}
function Lg(l) {
  let e, t;
  return e = new Te({
    props: {
      title: (
        /*_*/
        l[2]("Undo")
      ),
      css: `wxi-undo ${/*canUndo*/
      l[1] ? "" : "wx-disabled"}`
    }
  }), e.$on(
    "click",
    /*handleUndo*/
    l[3]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, [i]) {
      const s = {};
      i & /*canUndo*/
      2 && (s.css = `wxi-undo ${/*canUndo*/
      n[1] ? "" : "wx-disabled"}`), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Rg(l, e, t) {
  let n, i = K, s = () => (i(), i = Ge(u, (c) => t(5, n = c)), u);
  l.$$.on_destroy.push(() => i());
  let { api: r } = e;
  const a = ye("wx-i18n").getGroup("kanban");
  function o() {
    r.getStores().data.undo();
  }
  let u, f;
  return l.$$set = (c) => {
    "api" in c && t(4, r = c.api);
  }, l.$$.update = () => {
    l.$$.dirty & /*api, $history*/
    48 && r && (s(t(0, u = r.getReactiveState().history)), t(1, f = n.undo.length > 0));
  }, [u, f, a, o, r, n];
}
class Ag extends ee {
  constructor(e) {
    super(), x(this, e, Rg, Lg, Z, { api: 4 });
  }
}
function Pg(l) {
  let e, t;
  return e = new Te({
    props: {
      title: (
        /*_*/
        l[2]("Redo")
      ),
      css: `wxi-redo ${/*canRedo*/
      l[1] ? "" : "wx-disabled"}`
    }
  }), e.$on(
    "click",
    /*handleRedo*/
    l[3]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, [i]) {
      const s = {};
      i & /*canRedo*/
      2 && (s.css = `wxi-redo ${/*canRedo*/
      n[1] ? "" : "wx-disabled"}`), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Ng(l, e, t) {
  let n, i = K, s = () => (i(), i = Ge(u, (c) => t(5, n = c)), u);
  l.$$.on_destroy.push(() => i());
  let { api: r } = e;
  const a = ye("wx-i18n").getGroup("kanban");
  function o() {
    r?.getStores().data.redo();
  }
  let u, f;
  return l.$$set = (c) => {
    "api" in c && t(4, r = c.api);
  }, l.$$.update = () => {
    l.$$.dirty & /*api, $history*/
    48 && r && (s(t(0, u = r.getReactiveState().history)), t(1, f = n.redo?.length > 0));
  }, [u, f, a, o, r, n];
}
class zg extends ee {
  constructor(e) {
    super(), x(this, e, Ng, Pg, Z, { api: 4 });
  }
}
function Xn(l, e, t) {
  const n = document.createElement("DIV");
  n.className = "wx-theme", l.appendChild(n);
  let i = window.getComputedStyle(n).getPropertyValue("--wx-theme-name");
  return l.removeChild(n), (e && e !== i || !e && !i && t) && (i && l.classList.remove(`wx-${i}-theme`), i = e || t, l.classList.add(`wx-${i}-theme`)), i;
}
function Cr(l) {
  let e, t;
  return {
    c() {
      e = new dn(!1), t = se(), e.a = t;
    },
    m(n, i) {
      e.m(
        /*htmlString*/
        l[0],
        n,
        i
      ), v(n, t, i);
    },
    p(n, i) {
      i & /*htmlString*/
      1 && e.p(
        /*htmlString*/
        n[0]
      );
    },
    d(n) {
      n && (k(t), e.d());
    }
  };
}
function Hg(l) {
  let e, t = (
    /*htmlString*/
    l[0] && Cr(l)
  );
  return {
    c() {
      t && t.c(), e = se();
    },
    m(n, i) {
      t && t.m(n, i), v(n, e, i);
    },
    p(n, [i]) {
      /*htmlString*/
      n[0] ? t ? t.p(n, i) : (t = Cr(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: K,
    o: K,
    d(n) {
      n && k(e), t && t.d(n);
    }
  };
}
function Og(l, e, t) {
  let n;
  const i = ["template"];
  let s = tl(e, i), { template: r } = e;
  return l.$$set = (a) => {
    e = Ce(Ce({}, e), We(a)), t(2, s = tl(e, i)), "template" in a && t(1, r = a.template);
  }, l.$$.update = () => {
    t(0, n = typeof r == "function" ? r({ ...s }) : r);
  }, [n, r];
}
class An extends ee {
  constructor(e) {
    super(), x(this, e, Og, Hg, Z, { template: 1 });
  }
}
class Zn {
  _api;
  constructor(e) {
    this._api = e;
  }
  on(e, t) {
    this._api.on(e, t);
  }
  exec(e, t) {
    this._api.exec(e, t);
  }
}
const Ir = {
  material: Qh,
  willow: tg,
  "willow-dark": og
};
class f0 {
  api;
  export;
  events;
  config;
  container;
  _kanban;
  constructor(e, t) {
    this.container = typeof e == "string" ? document.querySelector(e) : e, this.config = t, this._init();
  }
  destructor() {
    this._kanban.$destroy(), this._kanban = this.api = this.events = null;
  }
  setConfig(e) {
    this._storeConfig(e), typeof e.history < "u" && console.debug("history cannot be reset at runtime"), typeof e.theme < "u" ? this.setTheme(e.theme) : this.api.getStores().data.init({ ...this.config });
  }
  parse(e) {
    const { cards: t, links: n, columns: i, rows: s } = e;
    (t || n || i || s) && (t && (this.config.cards = t), n && (this.config.links = n), i && (this.config.columns = i), s && (this.config.rows = s), this._kanban.$set(this._configToProps(this.config)));
  }
  serialize() {
    const { cards: e, links: t, columns: n, rows: i } = this.api.getState();
    return {
      cards: e,
      links: t,
      columns: n,
      rows: i
    };
  }
  undo() {
    this.api.undo();
  }
  redo() {
    this.api.redo();
  }
  getCard(e) {
    return this.api.getCard(e);
  }
  getAreaCards(e, t) {
    return this.api.getAreaCards(e, t);
  }
  getSelection() {
    return this.api.getState().selected;
  }
  addCard(e) {
    this.api.exec("add-card", e);
  }
  updateCard(e) {
    this.api.exec("update-card", e);
  }
  duplicateCard(e) {
    this.api.exec("duplicate-card", e);
  }
  deleteCard(e) {
    this.api.exec("delete-card", e);
  }
  moveCard(e) {
    this.api.exec("move-card", e);
  }
  addColumn(e) {
    this.api.exec("add-column", e);
  }
  updateColumn(e) {
    this.api.exec("update-column", e);
  }
  addRow(e) {
    this.api.exec("add-row", e);
  }
  updateRow(e) {
    this.api.exec("update-row", e);
  }
  moveColumn(e) {
    this.api.exec("move-column", e);
  }
  moveRow(e) {
    this.api.exec("move-row", e);
  }
  deleteColumn(e) {
    this.api.exec("delete-column", e);
  }
  deleteRow(e) {
    this.api.exec("delete-row", e);
  }
  addLink(e) {
    this.api.exec("add-link", e);
  }
  deleteLink(e) {
    this.api.exec("delete-link", e);
  }
  addComment(e) {
    this.api.exec("add-comment", e);
  }
  updateComment(e) {
    this.api.exec("update-comment", e);
  }
  deleteComment(e) {
    this.api.exec("delete-comment", e);
  }
  selectCard(e) {
    this.api.exec("select-card", e);
  }
  unselectCard(e) {
    this.api.exec("unselect-card", e);
  }
  setSearch(e) {
    this.api.exec("set-search", e);
  }
  setSort(e) {
    this.api.exec("set-sort", e);
  }
  setEdit(e) {
    this.api.exec("set-edit", { ...e });
  }
  scroll(e) {
    this.api.exec("scroll", e);
  }
  setLocale(e) {
    this._reset({ locale: e });
  }
  setTheme(e) {
    this._reset({ theme: e });
  }
  _init(e) {
    this._kanban && this.destructor();
    const t = Xn(
      this.container,
      this.config.theme?.name,
      "material"
    ), n = /* @__PURE__ */ new Map([
      ["wx-i18n", Kt(this.config.locale)],
      ["wx-theme", t]
    ]);
    Ir[t] && new Ir[t]({
      target: this.container,
      props: { fonts: this.config.theme?.fonts }
    }), e && (this.config.dataStore = e), this._kanban = new Kh({
      target: this.container,
      props: this.config,
      context: n
    }), this.api = this._kanban.api, this.events = new Zn(this.api), this.export = this.api.export;
  }
  _reset(e) {
    const t = this.api.getStores().data;
    this._storeConfig(e), this._init(t);
  }
  _storeConfig(e) {
    const t = this.serialize();
    this.config = { ...this.config, ...t, ...e };
  }
  _configToProps(e) {
    return e;
  }
}
function c0(l) {
  return new Proxy(An, {
    construct(e, [t]) {
      const n = t.props || {};
      return n.template = l, t.props = n, new e(t);
    }
  });
}
function Fg(l) {
  let e, t;
  return e = new Qn({
    props: {
      api: (
        /*api*/
        l[0]
      ),
      config: (
        /*config*/
        l[1]
      ),
      shape: (
        /*shape*/
        l[2]
      )
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, [i]) {
      const s = {};
      i & /*api*/
      1 && (s.api = /*api*/
      n[0]), i & /*config*/
      2 && (s.config = /*config*/
      n[1]), i & /*shape*/
      4 && (s.shape = /*shape*/
      n[2]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function qg(l, e, t) {
  let { api: n } = e, { config: i } = e, { shape: s } = e;
  return l.$$set = (r) => {
    "api" in r && t(0, n = r.api), "config" in r && t(1, i = r.config), "shape" in r && t(2, s = r.shape);
  }, [n, i, s];
}
class jg extends ee {
  constructor(e) {
    super(), x(this, e, qg, Fg, Z, { api: 0, config: 1, shape: 2 });
  }
}
class d0 {
  api;
  config;
  container;
  events;
  _component;
  constructor(e, t) {
    this.container = typeof e == "string" ? document.querySelector(e) : e, this.config = t, this._init();
  }
  destructor() {
    this._component.$destroy(), this._component = this.api = this.events = null;
  }
  setConfig(e) {
    e && (this.config = { ...this.config, ...e }, this._init());
  }
  /** @version v1.5.7 */
  setLocale(e, t) {
    this.setConfig({ locale: e, api: t });
  }
  _init() {
    this._component && this.destructor();
    const e = /* @__PURE__ */ new Map([
      ["wx-i18n", Kt(this.config.locale)],
      [
        "wx-theme",
        Xn(this.container, this.config.theme, "material")
      ]
    ]);
    this._component = new jg({
      target: this.container,
      props: this._configToProps(this.config),
      context: e
    }), this.events = new Zn(this.api);
  }
  _configToProps(e) {
    return e;
  }
}
const Vo = {};
function Vg(l) {
  return Vo[l] || l;
}
function Lt(l, e) {
  Vo[l] = e;
}
function Ug(l) {
  let e, t, n;
  return {
    c() {
      e = I("div"), t = $(" "), g(e, "class", n = "wx-separator" + /*menu*/
      (l[0] ? "-menu" : "") + " svelte-1eu7qav");
    },
    m(i, s) {
      v(i, e, s), M(e, t);
    },
    p(i, [s]) {
      s & /*menu*/
      1 && n !== (n = "wx-separator" + /*menu*/
      (i[0] ? "-menu" : "") + " svelte-1eu7qav") && g(e, "class", n);
    },
    i: K,
    o: K,
    d(i) {
      i && k(e);
    }
  };
}
function Kg(l, e, t) {
  let { menu: n = !1 } = e;
  return l.$$set = (i) => {
    "menu" in i && t(0, n = i.menu);
  }, [n];
}
class Uo extends ee {
  constructor(e) {
    super(), x(this, e, Kg, Ug, Z, { menu: 0 });
  }
}
function Bg(l) {
  let e;
  return {
    c() {
      e = I("div"), g(e, "class", "wx-spacer svelte-1mbb7ow");
    },
    m(t, n) {
      v(t, e, n);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && k(e);
    }
  };
}
class Ko extends ee {
  constructor(e) {
    super(), x(this, e, null, Bg, Z, {});
  }
}
function Wg(l) {
  let e, t, n, i, s, r;
  const a = [
    { text: (
      /*text*/
      l[3]
    ) },
    { menu: (
      /*menu*/
      l[1]
    ) },
    /*item*/
    l[0]
  ];
  function o(c) {
    l[8](c);
  }
  var u = (
    /*itemComponent*/
    l[2]
  );
  function f(c, d) {
    let m = {};
    for (let _ = 0; _ < a.length; _ += 1)
      m = Ce(m, a[_]);
    return d !== void 0 && d & /*text, menu, item*/
    11 && (m = Ce(m, it(a, [
      d & /*text*/
      8 && { text: (
        /*text*/
        c[3]
      ) },
      d & /*menu*/
      2 && { menu: (
        /*menu*/
        c[1]
      ) },
      d & /*item*/
      1 && st(
        /*item*/
        c[0]
      )
    ]))), /*$value*/
    c[4] !== void 0 && (m.value = /*$value*/
    c[4]), { props: m };
  }
  return u && (t = Je(u, f(l)), fe.push(() => Se(t, "value", o)), t.$on(
    "click",
    /*onClick*/
    l[5]
  )), {
    c() {
      e = I("div"), t && N(t.$$.fragment), g(e, "class", i = "wx-tb-element " + /*item*/
      (l[0].css || "") + " svelte-ptl7r2"), g(e, "data-id", s = /*item*/
      l[0].id), X(
        e,
        "wx-spacer",
        /*item*/
        l[0].spacer
      ), X(
        e,
        "wx-menu",
        /*menu*/
        l[1]
      );
    },
    m(c, d) {
      v(c, e, d), t && R(t, e, null), r = !0;
    },
    p(c, d) {
      if (d & /*itemComponent*/
      4 && u !== (u = /*itemComponent*/
      c[2])) {
        if (t) {
          W();
          const m = t;
          p(m.$$.fragment, 1, 0, () => {
            A(m, 1);
          }), Y();
        }
        u ? (t = Je(u, f(c, d)), fe.push(() => Se(t, "value", o)), t.$on(
          "click",
          /*onClick*/
          c[5]
        ), N(t.$$.fragment), b(t.$$.fragment, 1), R(t, e, null)) : t = null;
      } else if (u) {
        const m = d & /*text, menu, item*/
        11 ? it(a, [
          d & /*text*/
          8 && { text: (
            /*text*/
            c[3]
          ) },
          d & /*menu*/
          2 && { menu: (
            /*menu*/
            c[1]
          ) },
          d & /*item*/
          1 && st(
            /*item*/
            c[0]
          )
        ]) : {};
        !n && d & /*$value*/
        16 && (n = !0, m.value = /*$value*/
        c[4], Ie(() => n = !1)), t.$set(m);
      }
      (!r || d & /*item*/
      1 && i !== (i = "wx-tb-element " + /*item*/
      (c[0].css || "") + " svelte-ptl7r2")) && g(e, "class", i), (!r || d & /*item*/
      1 && s !== (s = /*item*/
      c[0].id)) && g(e, "data-id", s), (!r || d & /*item, item*/
      1) && X(
        e,
        "wx-spacer",
        /*item*/
        c[0].spacer
      ), (!r || d & /*item, menu*/
      3) && X(
        e,
        "wx-menu",
        /*menu*/
        c[1]
      );
    },
    i(c) {
      r || (t && b(t.$$.fragment, c), r = !0);
    },
    o(c) {
      t && p(t.$$.fragment, c), r = !1;
    },
    d(c) {
      c && k(e), t && A(t);
    }
  };
}
function Yg(l) {
  let e, t;
  return e = new Uo({ props: { menu: (
    /*menu*/
    l[1]
  ) } }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*menu*/
      2 && (s.menu = /*menu*/
      n[1]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Gg(l) {
  let e, t;
  return e = new Ko({ props: { menu: (
    /*menu*/
    l[1]
  ) } }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*menu*/
      2 && (s.menu = /*menu*/
      n[1]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Jg(l) {
  let e, t, n, i;
  const s = [Gg, Yg, Wg], r = [];
  function a(o, u) {
    return (
      /*item*/
      o[0].comp == "spacer" ? 0 : (
        /*item*/
        o[0].comp == "separator" ? 1 : 2
      )
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, [u]) {
      let f = e;
      e = a(o), e === f ? r[e].p(o, u) : (W(), p(r[f], 1, 1, () => {
        r[f] = null;
      }), Y(), t = r[e], t ? t.p(o, u) : (t = r[e] = s[e](o), t.c()), b(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function Qg(l, e, t) {
  let n;
  const i = Re();
  let { item: s = {} } = e, { menu: r = !1 } = e, { values: a } = e, o;
  function u() {
    s.handler && s.handler(s), i("click", { item: s });
  }
  let f = Un(null);
  he(l, f, (_) => t(4, n = _));
  let c = !1;
  f.subscribe((_) => {
    c || i("change", { value: _, item: s });
  });
  let d = "";
  function m(_) {
    n = _, f.set(n);
  }
  return l.$$set = (_) => {
    "item" in _ && t(0, s = _.item), "menu" in _ && t(1, r = _.menu), "values" in _ && t(7, a = _.values);
  }, l.$$.update = () => {
    l.$$.dirty & /*item*/
    1 && t(2, o = Vg(s.comp || "label")), l.$$.dirty & /*item, values*/
    129 && s.key && (c = !0, a ? zt(f, n = a[s.key], n) : zt(f, n = void 0, n), c = !1), l.$$.dirty & /*menu, item*/
    3 && t(3, d = r && s.menuText || s.text);
  }, [
    s,
    r,
    o,
    d,
    n,
    u,
    f,
    a,
    m
  ];
}
class $n extends ee {
  constructor(e) {
    super(), x(this, e, Qg, Jg, Z, { item: 0, menu: 1, values: 7 });
  }
}
function Mr(l) {
  let e, t;
  return {
    c() {
      e = I("i"), g(e, "class", t = Ve(
        /*icon*/
        l[0]
      ) + " svelte-16d1jeh");
    },
    m(n, i) {
      v(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      1 && t !== (t = Ve(
        /*icon*/
        n[0]
      ) + " svelte-16d1jeh") && g(e, "class", t);
    },
    d(n) {
      n && k(e);
    }
  };
}
function Xg(l) {
  let e;
  return {
    c() {
      e = $(
        /*text*/
        l[3]
      );
    },
    m(t, n) {
      v(t, e, n);
    },
    p(t, n) {
      n & /*text*/
      8 && re(
        e,
        /*text*/
        t[3]
      );
    },
    i: K,
    o: K,
    d(t) {
      t && k(e);
    }
  };
}
function Zg(l) {
  let e;
  const t = (
    /*#slots*/
    l[11].default
  ), n = be(
    t,
    l,
    /*$$scope*/
    l[10],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, s) {
      n && n.m(i, s), e = !0;
    },
    p(i, s) {
      n && n.p && (!e || s & /*$$scope*/
      1024) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[10],
        e ? pe(
          t,
          /*$$scope*/
          i[10],
          s,
          null
        ) : ke(
          /*$$scope*/
          i[10]
        ),
        null
      );
    },
    i(i) {
      e || (b(n, i), e = !0);
    },
    o(i) {
      p(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function $g(l) {
  let e, t, n, i, s, r, a, o, u = (
    /*icon*/
    l[0] && Mr(l)
  );
  const f = [Zg, Xg], c = [];
  function d(m, _) {
    return (
      /*SLOTS*/
      m[5] ? 0 : 1
    );
  }
  return n = d(l), i = c[n] = f[n](l), {
    c() {
      e = I("button"), u && u.c(), t = H(), i.c(), g(
        e,
        "title",
        /*title*/
        l[2]
      ), g(e, "class", s = Ve(
        /*buttonCss*/
        l[4]
      ) + " svelte-16d1jeh"), e.disabled = /*disabled*/
      l[1], X(
        e,
        "icon",
        /*icon*/
        l[0] && (!/*SLOTS*/
        l[5] || !/*SLOTS*/
        l[5].default)
      );
    },
    m(m, _) {
      v(m, e, _), u && u.m(e, null), M(e, t), c[n].m(e, null), r = !0, a || (o = te(
        e,
        "click",
        /*handleClick*/
        l[6]
      ), a = !0);
    },
    p(m, [_]) {
      /*icon*/
      m[0] ? u ? u.p(m, _) : (u = Mr(m), u.c(), u.m(e, t)) : u && (u.d(1), u = null), i.p(m, _), (!r || _ & /*title*/
      4) && g(
        e,
        "title",
        /*title*/
        m[2]
      ), (!r || _ & /*buttonCss*/
      16 && s !== (s = Ve(
        /*buttonCss*/
        m[4]
      ) + " svelte-16d1jeh")) && g(e, "class", s), (!r || _ & /*disabled*/
      2) && (e.disabled = /*disabled*/
      m[1]), (!r || _ & /*buttonCss, icon, SLOTS*/
      49) && X(
        e,
        "icon",
        /*icon*/
        m[0] && (!/*SLOTS*/
        m[5] || !/*SLOTS*/
        m[5].default)
      );
    },
    i(m) {
      r || (b(i), r = !0);
    },
    o(m) {
      p(i), r = !1;
    },
    d(m) {
      m && k(e), u && u.d(), c[n].d(), a = !1, o();
    }
  };
}
function xg(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { type: s = "" } = e, { css: r = "" } = e, { click: a } = e, { icon: o = "" } = e, { disabled: u = !1 } = e, { title: f = "" } = e, { text: c = "" } = e;
  const d = e.$$slots;
  let m;
  const _ = Re(), h = (w) => {
    u || (_("click"), a && a(w));
  };
  return l.$$set = (w) => {
    t(13, e = Ce(Ce({}, e), We(w))), "type" in w && t(7, s = w.type), "css" in w && t(8, r = w.css), "click" in w && t(9, a = w.click), "icon" in w && t(0, o = w.icon), "disabled" in w && t(1, u = w.disabled), "title" in w && t(2, f = w.title), "text" in w && t(3, c = w.text), "$$scope" in w && t(10, i = w.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*css, type*/
    384 && t(4, m = r + (s ? (r ? " " : "") + s : ""));
  }, e = We(e), [
    o,
    u,
    f,
    c,
    m,
    d,
    h,
    s,
    r,
    a,
    i,
    n
  ];
}
class xn extends ee {
  constructor(e) {
    super(), x(this, e, xg, $g, Z, {
      type: 7,
      css: 8,
      click: 9,
      icon: 0,
      disabled: 1,
      title: 2,
      text: 3
    });
  }
}
const { document: eb } = ea;
function tb(l) {
  let e, t, n, i, s, r;
  const a = (
    /*#slots*/
    l[8].default
  ), o = be(
    a,
    l,
    /*$$scope*/
    l[7],
    null
  );
  return {
    c() {
      e = H(), t = I("div"), o && o.c(), g(t, "class", n = `dropdown ${/*position*/
      l[0]}-${/*align*/
      l[1]} svelte-nevbmr`), ce(
        t,
        "width",
        /*width*/
        l[2]
      );
    },
    m(u, f) {
      v(u, e, f), v(u, t, f), o && o.m(t, null), l[9](t), i = !0, s || (r = te(
        eb.body,
        "click",
        /*down*/
        l[4]
      ), s = !0);
    },
    p(u, [f]) {
      o && o.p && (!i || f & /*$$scope*/
      128) && we(
        o,
        a,
        u,
        /*$$scope*/
        u[7],
        i ? pe(
          a,
          /*$$scope*/
          u[7],
          f,
          null
        ) : ke(
          /*$$scope*/
          u[7]
        ),
        null
      ), (!i || f & /*position, align*/
      3 && n !== (n = `dropdown ${/*position*/
      u[0]}-${/*align*/
      u[1]} svelte-nevbmr`)) && g(t, "class", n), (!i || f & /*width*/
      4) && ce(
        t,
        "width",
        /*width*/
        u[2]
      );
    },
    i(u) {
      i || (b(o, u), i = !0);
    },
    o(u) {
      p(o, u), i = !1;
    },
    d(u) {
      u && (k(e), k(t)), o && o.d(u), l[9](null), s = !1, r();
    }
  };
}
function nb(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { position: s = "bottom" } = e, { align: r = "start" } = e, { autoFit: a = !0 } = e, { cancel: o = null } = e, { width: u = "100%" } = e, f;
  zn(() => {
    if (a) {
      const _ = f.getBoundingClientRect(), h = document.body.getBoundingClientRect();
      return _.right >= h.right && t(1, r = "end"), _.bottom >= h.bottom && t(0, s = "top"), `${s}-${r}`;
    }
  });
  function c(_) {
    /* @__PURE__ */ new Date() - d < 200 || f.contains(_.target) || o && o(_);
  }
  const d = /* @__PURE__ */ new Date();
  function m(_) {
    fe[_ ? "unshift" : "push"](() => {
      f = _, t(3, f);
    });
  }
  return l.$$set = (_) => {
    "position" in _ && t(0, s = _.position), "align" in _ && t(1, r = _.align), "autoFit" in _ && t(5, a = _.autoFit), "cancel" in _ && t(6, o = _.cancel), "width" in _ && t(2, u = _.width), "$$scope" in _ && t(7, i = _.$$scope);
  }, [
    s,
    r,
    u,
    f,
    c,
    a,
    o,
    i,
    n,
    m
  ];
}
class Bo extends ee {
  constructor(e) {
    super(), x(this, e, nb, tb, Z, {
      position: 0,
      align: 1,
      autoFit: 5,
      cancel: 6,
      width: 2
    });
  }
}
const lb = {
  monthFull: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  dayFull: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  hours: "Hours",
  minutes: "Minutes",
  done: "Done",
  clear: "Clear",
  today: "Today",
  am: ["am", "AM"],
  pm: ["pm", "PM"],
  weekStart: 7,
  timeFormat: 24
}, ib = {
  ok: "OK",
  cancel: "Cancel"
}, Wo = {
  core: ib,
  calendar: lb
};
function sb(l) {
  let e;
  const t = (
    /*#slots*/
    l[3].default
  ), n = be(
    t,
    l,
    /*$$scope*/
    l[2],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, s) {
      n && n.m(i, s), e = !0;
    },
    p(i, [s]) {
      n && n.p && (!e || s & /*$$scope*/
      4) && we(
        n,
        t,
        i,
        /*$$scope*/
        i[2],
        e ? pe(
          t,
          /*$$scope*/
          i[2],
          s,
          null
        ) : ke(
          /*$$scope*/
          i[2]
        ),
        null
      );
    },
    i(i) {
      e || (b(n, i), e = !0);
    },
    o(i) {
      p(n, i), e = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function rb(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { words: s = null } = e, { optional: r = !1 } = e, a = ye("wx-i18n");
  return a || (a = Kt(Wo)), a = a.extend(s, r), ht("wx-i18n", a), l.$$set = (o) => {
    "words" in o && t(0, s = o.words), "optional" in o && t(1, r = o.optional), "$$scope" in o && t(2, i = o.$$scope);
  }, [s, r, i, n];
}
class ob extends ee {
  constructor(e) {
    super(), x(this, e, rb, sb, Z, { words: 0, optional: 1 });
  }
}
function Tr(l, e, t) {
  const n = l.slice();
  return n[11] = e[t], n;
}
function ab(l) {
  let e, t, n, i, s = ue(
    /*item*/
    l[0].items
  ), r = [];
  for (let u = 0; u < s.length; u += 1)
    r[u] = Dr(Tr(l, s, u));
  const a = (u) => p(r[u], 1, 1, () => {
    r[u] = null;
  });
  let o = (
    /*item*/
    l[0].text && Er(l)
  );
  return {
    c() {
      e = I("div");
      for (let u = 0; u < r.length; u += 1)
        r[u].c();
      t = H(), o && o.c(), n = se(), g(e, "class", "wx-tb-body svelte-urlj1k");
    },
    m(u, f) {
      v(u, e, f);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      v(u, t, f), o && o.m(u, f), v(u, n, f), i = !0;
    },
    p(u, f) {
      if (f & /*item, values, onClick*/
      19) {
        s = ue(
          /*item*/
          u[0].items
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const d = Tr(u, s, c);
          r[c] ? (r[c].p(d, f), b(r[c], 1)) : (r[c] = Dr(d), r[c].c(), b(r[c], 1), r[c].m(e, null));
        }
        for (W(), c = s.length; c < r.length; c += 1)
          a(c);
        Y();
      }
      /*item*/
      u[0].text ? o ? o.p(u, f) : (o = Er(u), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null);
    },
    i(u) {
      if (!i) {
        for (let f = 0; f < s.length; f += 1)
          b(r[f]);
        i = !0;
      }
    },
    o(u) {
      r = r.filter(Boolean);
      for (let f = 0; f < r.length; f += 1)
        p(r[f]);
      i = !1;
    },
    d(u) {
      u && (k(e), k(t), k(n)), ot(r, u), o && o.d(u);
    }
  };
}
function ub(l) {
  let e, t, n, i, s, r, a, o, u = (
    /*item*/
    l[0].icon && Lr(l)
  ), f = (
    /*item*/
    l[0].text && Rr(l)
  ), c = (
    /*item*/
    l[0].text && !/*item*/
    l[0].icon && Ar()
  ), d = !/*collapsed*/
  l[3] && Pr(l);
  return {
    c() {
      e = I("div"), u && u.c(), t = H(), f && f.c(), n = H(), c && c.c(), i = H(), d && d.c(), s = se(), g(e, "class", "wx-collapsed svelte-urlj1k");
    },
    m(m, _) {
      v(m, e, _), u && u.m(e, null), M(e, t), f && f.m(e, null), M(e, n), c && c.m(e, null), v(m, i, _), d && d.m(m, _), v(m, s, _), r = !0, a || (o = te(
        e,
        "click",
        /*show*/
        l[5]
      ), a = !0);
    },
    p(m, _) {
      /*item*/
      m[0].icon ? u ? u.p(m, _) : (u = Lr(m), u.c(), u.m(e, t)) : u && (u.d(1), u = null), /*item*/
      m[0].text ? f ? f.p(m, _) : (f = Rr(m), f.c(), f.m(e, n)) : f && (f.d(1), f = null), /*item*/
      m[0].text && !/*item*/
      m[0].icon ? c || (c = Ar(), c.c(), c.m(e, null)) : c && (c.d(1), c = null), /*collapsed*/
      m[3] ? d && (W(), p(d, 1, 1, () => {
        d = null;
      }), Y()) : d ? (d.p(m, _), _ & /*collapsed*/
      8 && b(d, 1)) : (d = Pr(m), d.c(), b(d, 1), d.m(s.parentNode, s));
    },
    i(m) {
      r || (b(d), r = !0);
    },
    o(m) {
      p(d), r = !1;
    },
    d(m) {
      m && (k(e), k(i), k(s)), u && u.d(), f && f.d(), c && c.d(), d && d.d(m), a = !1, o();
    }
  };
}
function fb(l) {
  let e, t;
  return e = new $n({
    props: {
      item: (
        /*sub*/
        l[11]
      ),
      values: (
        /*values*/
        l[1]
      )
    }
  }), e.$on(
    "click",
    /*onClick*/
    l[4]
  ), e.$on(
    "change",
    /*change_handler_2*/
    l[9]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*item*/
      1 && (s.item = /*sub*/
      n[11]), i & /*values*/
      2 && (s.values = /*values*/
      n[1]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function cb(l) {
  let e, t;
  return e = new gn({
    props: {
      item: (
        /*sub*/
        l[11]
      ),
      values: (
        /*values*/
        l[1]
      )
    }
  }), e.$on(
    "click",
    /*onClick*/
    l[4]
  ), e.$on(
    "change",
    /*change_handler_1*/
    l[8]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*item*/
      1 && (s.item = /*sub*/
      n[11]), i & /*values*/
      2 && (s.values = /*values*/
      n[1]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Dr(l) {
  let e, t, n, i;
  const s = [cb, fb], r = [];
  function a(o, u) {
    return (
      /*sub*/
      o[11].items ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, u) {
      let f = e;
      e = a(o), e === f ? r[e].p(o, u) : (W(), p(r[f], 1, 1, () => {
        r[f] = null;
      }), Y(), t = r[e], t ? t.p(o, u) : (t = r[e] = s[e](o), t.c()), b(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function Er(l) {
  let e, t = (
    /*item*/
    l[0].text + ""
  ), n;
  return {
    c() {
      e = I("div"), n = $(t), g(e, "class", "wx-label svelte-urlj1k");
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s & /*item*/
      1 && t !== (t = /*item*/
      i[0].text + "") && re(n, t);
    },
    d(i) {
      i && k(e);
    }
  };
}
function Lr(l) {
  let e, t;
  return {
    c() {
      e = I("i"), g(e, "class", t = "icon " + /*item*/
      l[0].icon + " svelte-urlj1k");
    },
    m(n, i) {
      v(n, e, i);
    },
    p(n, i) {
      i & /*item*/
      1 && t !== (t = "icon " + /*item*/
      n[0].icon + " svelte-urlj1k") && g(e, "class", t);
    },
    d(n) {
      n && k(e);
    }
  };
}
function Rr(l) {
  let e, t = (
    /*item*/
    l[0].text + ""
  ), n;
  return {
    c() {
      e = I("div"), n = $(t), g(e, "class", "wx-label-text");
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s & /*item*/
      1 && t !== (t = /*item*/
      i[0].text + "") && re(n, t);
    },
    d(i) {
      i && k(e);
    }
  };
}
function Ar(l) {
  let e;
  return {
    c() {
      e = I("i"), g(e, "class", "wx-label-arrow wxi-angle-down");
    },
    m(t, n) {
      v(t, e, n);
    },
    d(t) {
      t && k(e);
    }
  };
}
function Pr(l) {
  let e, t;
  return e = new Bo({
    props: {
      width: "",
      cancel: (
        /*cancel*/
        l[6]
      ),
      $$slots: { default: [db] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*$$scope, item, values, menu*/
      16391 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function db(l) {
  let e, t, n;
  return t = new gn({
    props: {
      item: {
        .../*item*/
        l[0],
        text: "",
        collapsed: !1
      },
      values: (
        /*values*/
        l[1]
      ),
      menu: (
        /*menu*/
        l[2]
      )
    }
  }), t.$on(
    "change",
    /*change_handler*/
    l[7]
  ), t.$on(
    "click",
    /*onClick*/
    l[4]
  ), {
    c() {
      e = I("div"), N(t.$$.fragment), g(e, "class", "wx-drop-group");
    },
    m(i, s) {
      v(i, e, s), R(t, e, null), n = !0;
    },
    p(i, s) {
      const r = {};
      s & /*item*/
      1 && (r.item = {
        .../*item*/
        i[0],
        text: "",
        collapsed: !1
      }), s & /*values*/
      2 && (r.values = /*values*/
      i[1]), s & /*menu*/
      4 && (r.menu = /*menu*/
      i[2]), t.$set(r);
    },
    i(i) {
      n || (b(t.$$.fragment, i), n = !0);
    },
    o(i) {
      p(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(e), A(t);
    }
  };
}
function mb(l) {
  let e, t, n, i, s;
  const r = [ub, ab], a = [];
  function o(u, f) {
    return (
      /*item*/
      u[0].collapsed && !/*menu*/
      u[2] ? 0 : 1
    );
  }
  return t = o(l), n = a[t] = r[t](l), {
    c() {
      e = I("div"), n.c(), g(e, "class", i = "wx-tb-group " + /*item*/
      (l[0].css || "") + " svelte-urlj1k"), X(
        e,
        "wx-column",
        /*item*/
        l[0].layout == "column"
      ), X(
        e,
        "wx-group-collapsed",
        /*item*/
        l[0].collapsed && !/*menu*/
        l[2]
      );
    },
    m(u, f) {
      v(u, e, f), a[t].m(e, null), s = !0;
    },
    p(u, [f]) {
      let c = t;
      t = o(u), t === c ? a[t].p(u, f) : (W(), p(a[c], 1, 1, () => {
        a[c] = null;
      }), Y(), n = a[t], n ? n.p(u, f) : (n = a[t] = r[t](u), n.c()), b(n, 1), n.m(e, null)), (!s || f & /*item*/
      1 && i !== (i = "wx-tb-group " + /*item*/
      (u[0].css || "") + " svelte-urlj1k")) && g(e, "class", i), (!s || f & /*item, item*/
      1) && X(
        e,
        "wx-column",
        /*item*/
        u[0].layout == "column"
      ), (!s || f & /*item, item, menu*/
      5) && X(
        e,
        "wx-group-collapsed",
        /*item*/
        u[0].collapsed && !/*menu*/
        u[2]
      );
    },
    i(u) {
      s || (b(n), s = !0);
    },
    o(u) {
      p(n), s = !1;
    },
    d(u) {
      u && k(e), a[t].d();
    }
  };
}
function _b(l, e, t) {
  const n = Re();
  let { item: i } = e, { values: s = null } = e, { menu: r = !1 } = e, a = !1;
  const o = (_) => {
    f(), n("click", _.detail);
  }, u = () => t(3, a = !1), f = () => t(3, a = !0);
  function c(_) {
    ve.call(this, l, _);
  }
  function d(_) {
    ve.call(this, l, _);
  }
  function m(_) {
    ve.call(this, l, _);
  }
  return l.$$set = (_) => {
    "item" in _ && t(0, i = _.item), "values" in _ && t(1, s = _.values), "menu" in _ && t(2, r = _.menu);
  }, l.$$.update = () => {
    l.$$.dirty & /*item*/
    1 && i.collapsed && t(3, a = !0);
  }, [
    i,
    s,
    r,
    a,
    o,
    u,
    f,
    c,
    d,
    m
  ];
}
class gn extends ee {
  constructor(e) {
    super(), x(this, e, _b, mb, Z, { item: 0, values: 1, menu: 2 });
  }
}
function Nr(l, e, t) {
  const n = l.slice();
  return n[14] = e[t], n;
}
function zr(l) {
  let e, t;
  return e = new Bo({
    props: {
      width: (
        /*width*/
        l[3] + "px"
      ),
      cancel: (
        /*cancel*/
        l[6]
      ),
      $$slots: { default: [bb] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*width*/
      8 && (s.width = /*width*/
      n[3] + "px"), i & /*$$scope, items, values*/
      131077 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function hb(l) {
  let e, t;
  return e = new $n({
    props: {
      item: (
        /*item*/
        l[14]
      ),
      values: (
        /*values*/
        l[2]
      ),
      menu: !0
    }
  }), e.$on(
    "click",
    /*click_handler_1*/
    l[10]
  ), e.$on(
    "change",
    /*change_handler_1*/
    l[11]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*items*/
      1 && (s.item = /*item*/
      n[14]), i & /*values*/
      4 && (s.values = /*values*/
      n[2]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function gb(l) {
  let e, t;
  return e = new gn({
    props: {
      item: (
        /*item*/
        l[14]
      ),
      values: (
        /*values*/
        l[2]
      ),
      menu: !0
    }
  }), e.$on(
    "click",
    /*click_handler*/
    l[8]
  ), e.$on(
    "change",
    /*change_handler*/
    l[9]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*items*/
      1 && (s.item = /*item*/
      n[14]), i & /*values*/
      4 && (s.values = /*values*/
      n[2]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Hr(l) {
  let e, t, n, i;
  const s = [gb, hb], r = [];
  function a(o, u) {
    return (
      /*item*/
      o[14].items ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, u) {
      let f = e;
      e = a(o), e === f ? r[e].p(o, u) : (W(), p(r[f], 1, 1, () => {
        r[f] = null;
      }), Y(), t = r[e], t ? t.p(o, u) : (t = r[e] = s[e](o), t.c()), b(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function bb(l) {
  let e, t, n = ue(
    /*items*/
    l[0]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Hr(Nr(l, n, r));
  const s = (r) => p(i[r], 1, 1, () => {
    i[r] = null;
  });
  return {
    c() {
      e = I("div");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      g(e, "class", "wx-drop-menu svelte-5toy9z");
    },
    m(r, a) {
      v(r, e, a);
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(e, null);
      t = !0;
    },
    p(r, a) {
      if (a & /*items, values*/
      5) {
        n = ue(
          /*items*/
          r[0]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const u = Nr(r, n, o);
          i[o] ? (i[o].p(u, a), b(i[o], 1)) : (i[o] = Hr(u), i[o].c(), b(i[o], 1), i[o].m(e, null));
        }
        for (W(), o = n.length; o < i.length; o += 1)
          s(o);
        Y();
      }
    },
    i(r) {
      if (!t) {
        for (let a = 0; a < n.length; a += 1)
          b(i[a]);
        t = !0;
      }
    },
    o(r) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        p(i[a]);
      t = !1;
    },
    d(r) {
      r && k(e), ot(i, r);
    }
  };
}
function pb(l) {
  let e, t, n, i, s, r, a;
  t = new xn({
    props: {
      icon: "wxi-dots-h",
      click: (
        /*showMenu*/
        l[7]
      )
    }
  });
  let o = (
    /*popup*/
    l[4] && zr(l)
  );
  return {
    c() {
      e = I("div"), N(t.$$.fragment), n = H(), o && o.c(), g(e, "class", i = "wx-menu " + /*css*/
      (l[1] || "") + " svelte-5toy9z"), g(e, "data-id", "$menu");
    },
    m(u, f) {
      v(u, e, f), R(t, e, null), M(e, n), o && o.m(e, null), l[12](e), s = !0, r || (a = Oe(O1.call(
        null,
        e,
        /*clickOutside_function*/
        l[13]
      )), r = !0);
    },
    p(u, [f]) {
      /*popup*/
      u[4] ? o ? (o.p(u, f), f & /*popup*/
      16 && b(o, 1)) : (o = zr(u), o.c(), b(o, 1), o.m(e, null)) : o && (W(), p(o, 1, 1, () => {
        o = null;
      }), Y()), (!s || f & /*css*/
      2 && i !== (i = "wx-menu " + /*css*/
      (u[1] || "") + " svelte-5toy9z")) && g(e, "class", i);
    },
    i(u) {
      s || (b(t.$$.fragment, u), b(o), s = !0);
    },
    o(u) {
      p(t.$$.fragment, u), p(o), s = !1;
    },
    d(u) {
      u && k(e), A(t), o && o.d(), l[12](null), r = !1, a();
    }
  };
}
function wb(l, e, t) {
  let { items: n = [] } = e, { css: i } = e, { values: s } = e, { width: r } = e, a, o;
  function u() {
    t(4, a = null);
  }
  function f() {
    setTimeout(() => t(4, a = !0));
  }
  function c(y) {
    ve.call(this, l, y);
  }
  function d(y) {
    ve.call(this, l, y);
  }
  function m(y) {
    ve.call(this, l, y);
  }
  function _(y) {
    ve.call(this, l, y);
  }
  function h(y) {
    fe[y ? "unshift" : "push"](() => {
      o = y, t(5, o);
    });
  }
  const w = () => u;
  return l.$$set = (y) => {
    "items" in y && t(0, n = y.items), "css" in y && t(1, i = y.css), "values" in y && t(2, s = y.values), "width" in y && t(3, r = y.width);
  }, [
    n,
    i,
    s,
    r,
    a,
    o,
    u,
    f,
    c,
    d,
    m,
    _,
    h,
    w
  ];
}
class kb extends ee {
  constructor(e) {
    super(), x(this, e, wb, pb, Z, { items: 0, css: 1, values: 2, width: 3 });
  }
}
function Or(l, e, t) {
  const n = l.slice();
  return n[20] = e[t], n[22] = t, n;
}
function vb(l) {
  let e, t;
  return e = new $n({
    props: {
      item: (
        /*item*/
        l[20]
      ),
      values: (
        /*values*/
        l[0]
      )
    }
  }), e.$on(
    "click",
    /*click_handler_1*/
    l[10]
  ), e.$on(
    "change",
    /*handleChange*/
    l[7]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*visibleItems*/
      64 && (s.item = /*item*/
      n[20]), i & /*values*/
      1 && (s.values = /*values*/
      n[0]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function yb(l) {
  let e, t;
  return e = new gn({
    props: {
      item: (
        /*item*/
        l[20]
      ),
      values: (
        /*values*/
        l[0]
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    l[9]
  ), e.$on(
    "change",
    /*handleChange*/
    l[7]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*visibleItems*/
      64 && (s.item = /*item*/
      n[20]), i & /*values*/
      1 && (s.values = /*values*/
      n[0]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Fr(l) {
  let e, t, n, i;
  const s = [yb, vb], r = [];
  function a(o, u) {
    return (
      /*item*/
      o[20].items ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, u) {
      let f = e;
      e = a(o), e === f ? r[e].p(o, u) : (W(), p(r[f], 1, 1, () => {
        r[f] = null;
      }), Y(), t = r[e], t ? t.p(o, u) : (t = r[e] = s[e](o), t.c()), b(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function qr(l) {
  let e, t;
  return e = new kb({
    props: {
      items: (
        /*menuItems*/
        l[5]
      ),
      css: (
        /*menuCss*/
        l[1]
      ),
      values: (
        /*values*/
        l[0]
      )
    }
  }), e.$on(
    "click",
    /*click_handler_2*/
    l[11]
  ), e.$on(
    "change",
    /*handleChange*/
    l[7]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*menuItems*/
      32 && (s.items = /*menuItems*/
      n[5]), i & /*menuCss*/
      2 && (s.css = /*menuCss*/
      n[1]), i & /*values*/
      1 && (s.values = /*values*/
      n[0]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Sb(l) {
  let e, t, n, i, s = ue(
    /*visibleItems*/
    l[6]
  ), r = [];
  for (let u = 0; u < s.length; u += 1)
    r[u] = Fr(Or(l, s, u));
  const a = (u) => p(r[u], 1, 1, () => {
    r[u] = null;
  });
  let o = (
    /*menuItems*/
    l[5].length && qr(l)
  );
  return {
    c() {
      e = I("div");
      for (let u = 0; u < r.length; u += 1)
        r[u].c();
      t = H(), o && o.c(), g(e, "class", n = "wx-toolbar " + /*css*/
      l[2] + " svelte-b19ms9"), X(
        e,
        "wx-wrap",
        /*overflow*/
        l[3] === "wrap"
      );
    },
    m(u, f) {
      v(u, e, f);
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(e, null);
      M(e, t), o && o.m(e, null), l[12](e), i = !0;
    },
    p(u, [f]) {
      if (f & /*visibleItems, values, handleChange*/
      193) {
        s = ue(
          /*visibleItems*/
          u[6]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const d = Or(u, s, c);
          r[c] ? (r[c].p(d, f), b(r[c], 1)) : (r[c] = Fr(d), r[c].c(), b(r[c], 1), r[c].m(e, t));
        }
        for (W(), c = s.length; c < r.length; c += 1)
          a(c);
        Y();
      }
      /*menuItems*/
      u[5].length ? o ? (o.p(u, f), f & /*menuItems*/
      32 && b(o, 1)) : (o = qr(u), o.c(), b(o, 1), o.m(e, null)) : o && (W(), p(o, 1, 1, () => {
        o = null;
      }), Y()), (!i || f & /*css*/
      4 && n !== (n = "wx-toolbar " + /*css*/
      u[2] + " svelte-b19ms9")) && g(e, "class", n), (!i || f & /*css, overflow*/
      12) && X(
        e,
        "wx-wrap",
        /*overflow*/
        u[3] === "wrap"
      );
    },
    i(u) {
      if (!i) {
        for (let f = 0; f < s.length; f += 1)
          b(r[f]);
        b(o), i = !0;
      }
    },
    o(u) {
      r = r.filter(Boolean);
      for (let f = 0; f < r.length; f += 1)
        p(r[f]);
      p(o), i = !1;
    },
    d(u) {
      u && k(e), ot(r, u), o && o.d(), l[12](null);
    }
  };
}
function Cb(l, e, t) {
  let { items: n = [] } = e, { menuCss: i = "" } = e, { css: s } = e, { values: r = null } = e, { overflow: a = "menu" } = e;
  const o = Re();
  function u(E) {
    r && (t(0, r[E.detail.item.key] = E.detail.value, r), t(0, r)), o("change", E.detail);
  }
  let f, c = -1, d = [], m;
  function _() {
    if (a === "wrap")
      return;
    const E = f.clientWidth;
    if (f.scrollWidth > E) {
      if (a === "collapse")
        return w();
      const V = f.children;
      let O = 0;
      for (let D = 0; D < n.length; D++) {
        if (O += V[D].clientWidth, n[D].comp == "separator" && (O += 8), O > E - 40) {
          if (c === D)
            return;
          c = D, t(5, d = []);
          for (let j = D; j < n.length; j++)
            d.push(n[j]), V[j].style.visibility = "hidden";
          D > 0 && n[D - 1].comp == "separator" && (V[D - 1].style.visibility = "hidden");
          break;
        }
        V[D].style.visibility = "";
      }
    } else {
      const V = E - h();
      if (V <= 0)
        return;
      if (a === "collapse")
        return y(V);
      if (d.length) {
        c = null;
        const O = f.children;
        for (let D = 0; D < n.length; D++)
          O[D].style.visibility = "";
        t(5, d = []);
      }
    }
  }
  function h() {
    const E = f.children;
    let F = 0;
    for (let G = 0; G < n.length; G++)
      n[G].comp != "spacer" && (F += E[G].clientWidth, n[G].comp == "separator" && (F += 8));
    return F;
  }
  function w() {
    for (let E = n.length - 1; E >= 0; E--)
      if (n[E].items && !n[E].collapsed) {
        t(8, n[E].collapsed = !0, n), t(8, n[E].$width = f.children[E].offsetWidth, n), dt().then(_);
        return;
      }
  }
  function y(E) {
    for (let F = 0; F < n.length; F++)
      if (n[F].collapsed && n[F].$width) {
        n[F].$width - f.children[F].offsetWidth < E + 10 && (t(8, n[F].collapsed = !1, n), dt().then(_));
        return;
      }
  }
  function S(E) {
    E.forEach((F) => {
      F.id || (F.id = qo());
    });
  }
  rt(() => {
    const E = new ResizeObserver(() => _());
    return E.observe(f), () => {
      E && E.unobserve(f);
    };
  });
  function C(E) {
    ve.call(this, l, E);
  }
  function T(E) {
    ve.call(this, l, E);
  }
  function L(E) {
    ve.call(this, l, E);
  }
  function P(E) {
    fe[E ? "unshift" : "push"](() => {
      f = E, t(4, f);
    });
  }
  return l.$$set = (E) => {
    "items" in E && t(8, n = E.items), "menuCss" in E && t(1, i = E.menuCss), "css" in E && t(2, s = E.css), "values" in E && t(0, r = E.values), "overflow" in E && t(3, a = E.overflow);
  }, l.$$.update = () => {
    l.$$.dirty & /*items*/
    256 && (S(n), t(6, m = n));
  }, [
    r,
    i,
    s,
    a,
    f,
    d,
    m,
    u,
    n,
    C,
    T,
    L,
    P
  ];
}
let Ib = class extends ee {
  constructor(e) {
    super(), x(this, e, Cb, Sb, Z, {
      items: 8,
      menuCss: 1,
      css: 2,
      values: 0,
      overflow: 3
    });
  }
};
function Mb(l) {
  let e, t;
  return e = new xn({
    props: {
      icon: (
        /*icon*/
        l[0]
      ),
      type: (
        /*type*/
        l[3]
      ),
      css: (
        /*css*/
        l[2]
      ),
      text: (
        /*text*/
        l[1]
      ),
      disabled: (
        /*disabled*/
        l[4]
      )
    }
  }), e.$on(
    "click",
    /*click_handler_1*/
    l[7]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*icon*/
      1 && (s.icon = /*icon*/
      n[0]), i & /*type*/
      8 && (s.type = /*type*/
      n[3]), i & /*css*/
      4 && (s.css = /*css*/
      n[2]), i & /*text*/
      2 && (s.text = /*text*/
      n[1]), i & /*disabled*/
      16 && (s.disabled = /*disabled*/
      n[4]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Tb(l) {
  let e, t, n, i, s, r, a;
  return {
    c() {
      e = I("div"), t = I("i"), i = H(), s = $(
        /*text*/
        l[1]
      ), g(t, "class", n = /*icon*/
      (l[0] || "wxi-empty") + " " + /*css*/
      (l[2] || "") + " svelte-b4dkf1"), g(e, "class", "wx-item svelte-b4dkf1");
    },
    m(o, u) {
      v(o, e, u), M(e, t), M(e, i), M(e, s), r || (a = te(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), r = !0);
    },
    p(o, u) {
      u & /*icon, css*/
      5 && n !== (n = /*icon*/
      (o[0] || "wxi-empty") + " " + /*css*/
      (o[2] || "") + " svelte-b4dkf1") && g(t, "class", n), u & /*text*/
      2 && re(
        s,
        /*text*/
        o[1]
      );
    },
    i: K,
    o: K,
    d(o) {
      o && k(e), r = !1, a();
    }
  };
}
function Db(l) {
  let e, t, n, i;
  const s = [Tb, Mb], r = [];
  function a(o, u) {
    return (
      /*menu*/
      o[5] ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, [u]) {
      let f = e;
      e = a(o), e === f ? r[e].p(o, u) : (W(), p(r[f], 1, 1, () => {
        r[f] = null;
      }), Y(), t = r[e], t ? t.p(o, u) : (t = r[e] = s[e](o), t.c()), b(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function Eb(l, e, t) {
  let { icon: n } = e, { text: i = "" } = e, { css: s } = e, { type: r } = e, { disabled: a } = e, { menu: o } = e;
  function u(c) {
    ve.call(this, l, c);
  }
  function f(c) {
    ve.call(this, l, c);
  }
  return l.$$set = (c) => {
    "icon" in c && t(0, n = c.icon), "text" in c && t(1, i = c.text), "css" in c && t(2, s = c.css), "type" in c && t(3, r = c.type), "disabled" in c && t(4, a = c.disabled), "menu" in c && t(5, o = c.menu);
  }, [n, i, s, r, a, o, u, f];
}
class Lb extends ee {
  constructor(e) {
    super(), x(this, e, Eb, Db, Z, {
      icon: 0,
      text: 1,
      css: 2,
      type: 3,
      disabled: 4,
      menu: 5
    });
  }
}
function Rb(l) {
  let e, t = (
    /*value*/
    (l[1] || /*text*/
    l[0]) + ""
  ), n;
  return {
    c() {
      e = I("div"), n = $(t), g(e, "class", "wx-label svelte-agyr5c");
    },
    m(i, s) {
      v(i, e, s), M(e, n);
    },
    p(i, s) {
      s & /*value, text*/
      3 && t !== (t = /*value*/
      (i[1] || /*text*/
      i[0]) + "") && re(n, t);
    },
    i: K,
    o: K,
    d(i) {
      i && k(e);
    }
  };
}
function Ab(l) {
  let e, t;
  const n = (
    /*#slots*/
    l[4].default
  ), i = be(
    n,
    l,
    /*$$scope*/
    l[3],
    null
  );
  return {
    c() {
      e = I("div"), i && i.c(), g(e, "class", "wx-label svelte-agyr5c");
    },
    m(s, r) {
      v(s, e, r), i && i.m(e, null), t = !0;
    },
    p(s, r) {
      i && i.p && (!t || r & /*$$scope*/
      8) && we(
        i,
        n,
        s,
        /*$$scope*/
        s[3],
        t ? pe(
          n,
          /*$$scope*/
          s[3],
          r,
          null
        ) : ke(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      t || (b(i, s), t = !0);
    },
    o(s) {
      p(i, s), t = !1;
    },
    d(s) {
      s && k(e), i && i.d(s);
    }
  };
}
function Pb(l) {
  let e, t, n, i;
  const s = [Ab, Rb], r = [];
  function a(o, u) {
    return (
      /*SLOTS*/
      o[2] ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function Nb(l, e, t) {
  let { $$slots: n = {}, $$scope: i } = e, { text: s } = e, { value: r } = e;
  const a = e.$$slots;
  return l.$$set = (o) => {
    t(5, e = Ce(Ce({}, e), We(o))), "text" in o && t(0, s = o.text), "value" in o && t(1, r = o.value), "$$scope" in o && t(3, i = o.$$scope);
  }, e = We(e), [s, r, a, i, n];
}
class zb extends ee {
  constructor(e) {
    super(), x(this, e, Nb, Pb, Z, { text: 0, value: 1 });
  }
}
function Hb(l) {
  let e, t;
  return e = new xn({
    props: {
      icon: (
        /*icon*/
        l[0]
      ),
      type: (
        /*type*/
        l[3]
      ),
      css: (
        /*css*/
        l[2]
      ),
      title: (
        /*text*/
        l[1]
      ),
      disabled: (
        /*disabled*/
        l[4]
      )
    }
  }), e.$on(
    "click",
    /*click_handler_1*/
    l[7]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*icon*/
      1 && (s.icon = /*icon*/
      n[0]), i & /*type*/
      8 && (s.type = /*type*/
      n[3]), i & /*css*/
      4 && (s.css = /*css*/
      n[2]), i & /*text*/
      2 && (s.title = /*text*/
      n[1]), i & /*disabled*/
      16 && (s.disabled = /*disabled*/
      n[4]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Ob(l) {
  let e, t, n, i, s, r = (
    /*icon*/
    l[0] && jr(l)
  );
  return {
    c() {
      e = I("div"), r && r.c(), t = H(), n = $(
        /*text*/
        l[1]
      ), g(e, "class", "wx-item svelte-ng2v87");
    },
    m(a, o) {
      v(a, e, o), r && r.m(e, null), M(e, t), M(e, n), i || (s = te(
        e,
        "click",
        /*click_handler*/
        l[6]
      ), i = !0);
    },
    p(a, o) {
      /*icon*/
      a[0] ? r ? r.p(a, o) : (r = jr(a), r.c(), r.m(e, t)) : r && (r.d(1), r = null), o & /*text*/
      2 && re(
        n,
        /*text*/
        a[1]
      );
    },
    i: K,
    o: K,
    d(a) {
      a && k(e), r && r.d(), i = !1, s();
    }
  };
}
function jr(l) {
  let e, t;
  return {
    c() {
      e = I("i"), g(e, "class", t = /*icon*/
      l[0] + " " + /*css*/
      l[2] + " svelte-ng2v87");
    },
    m(n, i) {
      v(n, e, i);
    },
    p(n, i) {
      i & /*icon, css*/
      5 && t !== (t = /*icon*/
      n[0] + " " + /*css*/
      n[2] + " svelte-ng2v87") && g(e, "class", t);
    },
    d(n) {
      n && k(e);
    }
  };
}
function Fb(l) {
  let e, t, n, i;
  const s = [Ob, Hb], r = [];
  function a(o, u) {
    return (
      /*menu*/
      o[5] ? 0 : 1
    );
  }
  return e = a(l), t = r[e] = s[e](l), {
    c() {
      t.c(), n = se();
    },
    m(o, u) {
      r[e].m(o, u), v(o, n, u), i = !0;
    },
    p(o, [u]) {
      let f = e;
      e = a(o), e === f ? r[e].p(o, u) : (W(), p(r[f], 1, 1, () => {
        r[f] = null;
      }), Y(), t = r[e], t ? t.p(o, u) : (t = r[e] = s[e](o), t.c()), b(t, 1), t.m(n.parentNode, n));
    },
    i(o) {
      i || (b(t), i = !0);
    },
    o(o) {
      p(t), i = !1;
    },
    d(o) {
      o && k(n), r[e].d(o);
    }
  };
}
function qb(l, e, t) {
  let { icon: n } = e, { text: i } = e, { css: s } = e, { type: r } = e, { disabled: a } = e, { menu: o } = e;
  function u(c) {
    ve.call(this, l, c);
  }
  function f(c) {
    ve.call(this, l, c);
  }
  return l.$$set = (c) => {
    "icon" in c && t(0, n = c.icon), "text" in c && t(1, i = c.text), "css" in c && t(2, s = c.css), "type" in c && t(3, r = c.type), "disabled" in c && t(4, a = c.disabled), "menu" in c && t(5, o = c.menu);
  }, [n, i, s, r, a, o, u, f];
}
class jb extends ee {
  constructor(e) {
    super(), x(this, e, qb, Fb, Z, {
      icon: 0,
      text: 1,
      css: 2,
      type: 3,
      disabled: 4,
      menu: 5
    });
  }
}
function Vr(l) {
  let e, t;
  return {
    c() {
      e = I("i"), g(e, "class", t = Ve(
        /*icon*/
        l[2]
      ) + " svelte-g7c8cw");
    },
    m(n, i) {
      v(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      4 && t !== (t = Ve(
        /*icon*/
        n[2]
      ) + " svelte-g7c8cw") && g(e, "class", t);
    },
    d(n) {
      n && k(e);
    }
  };
}
function Vb(l) {
  let e, t, n, i, s, r, a = (
    /*icon*/
    l[2] && Vr(l)
  );
  return {
    c() {
      e = I("div"), a && a.c(), t = H(), n = $(
        /*text*/
        l[0]
      ), g(e, "class", i = "wx-label " + /*css*/
      l[1] + " svelte-g7c8cw");
    },
    m(o, u) {
      v(o, e, u), a && a.m(e, null), M(e, t), M(e, n), s || (r = te(
        e,
        "click",
        /*handleClick*/
        l[3]
      ), s = !0);
    },
    p(o, [u]) {
      /*icon*/
      o[2] ? a ? a.p(o, u) : (a = Vr(o), a.c(), a.m(e, t)) : a && (a.d(1), a = null), u & /*text*/
      1 && re(
        n,
        /*text*/
        o[0]
      ), u & /*css*/
      2 && i !== (i = "wx-label " + /*css*/
      o[1] + " svelte-g7c8cw") && g(e, "class", i);
    },
    i: K,
    o: K,
    d(o) {
      o && k(e), a && a.d(), s = !1, r();
    }
  };
}
function Ub(l, e, t) {
  const n = Re();
  let { id: i = "" } = e, { text: s = "" } = e, { css: r = "" } = e, { icon: a = "" } = e;
  function o() {
    n("click", { id: i });
  }
  return l.$$set = (u) => {
    "id" in u && t(4, i = u.id), "text" in u && t(0, s = u.text), "css" in u && t(1, r = u.css), "icon" in u && t(2, a = u.icon);
  }, [s, r, a, o, i];
}
class Kb extends ee {
  constructor(e) {
    super(), x(this, e, Ub, Vb, Z, { id: 4, text: 0, css: 1, icon: 2 });
  }
}
Lt("button", Lb);
Lt("separator", Uo);
Lt("spacer", Ko);
Lt("label", zb);
Lt("item", Kb);
Lt("icon", jb);
function Bb(l) {
  let e, t;
  return e = new Ib({
    props: {
      api: (
        /*api*/
        l[0]
      ),
      items: (
        /*items*/
        l[1]
      )
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, i) {
      const s = {};
      i & /*api*/
      1 && (s.api = /*api*/
      n[0]), i & /*items*/
      2 && (s.items = /*items*/
      n[1]), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Wb(l) {
  let e, t;
  return e = new ob({
    props: {
      words: { ...Wo, ...On },
      optional: !0,
      $$slots: { default: [Bb] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(n, i) {
      R(e, n, i), t = !0;
    },
    p(n, [i]) {
      const s = {};
      i & /*$$scope, api, items*/
      7 && (s.$$scope = { dirty: i, ctx: n }), e.$set(s);
    },
    i(n) {
      t || (b(e.$$.fragment, n), t = !0);
    },
    o(n) {
      p(e.$$.fragment, n), t = !1;
    },
    d(n) {
      A(e, n);
    }
  };
}
function Yb(l, e, t) {
  let { api: n } = e, { items: i } = e;
  return i.forEach((s) => {
    s.api = n, s.type === "search" ? s.comp = wg : s.type === "undo" ? s.comp = Ag : s.type === "redo" ? s.comp = zg : s.type === "spacer" ? s.comp = "spacer" : s.type === "sort" ? s.comp = Eg : s.type === "addColumn" ? s.comp = Ig : s.type === "addRow" ? s.comp = yg : s.type === "template" && s.template ? s.comp = An : s && (s.comp = An, s.template = s.type);
  }), l.$$set = (s) => {
    "api" in s && t(0, n = s.api), "items" in s && t(1, i = s.items);
  }, [n, i];
}
class Gb extends ee {
  constructor(e) {
    super(), x(this, e, Yb, Wb, Z, { api: 0, items: 1 });
  }
}
class _0 {
  api;
  events;
  config;
  container;
  _toolbar;
  constructor(e, t) {
    this.container = typeof e == "string" ? document.querySelector(e) : e, this.config = t, this._init();
  }
  destructor() {
    this._toolbar.$destroy(), this._toolbar = this.api = this.events = null;
  }
  setConfig(e) {
    e && (this.config = { ...this.config, ...e }, this._init());
  }
  /** @version v1.5.7 */
  /** @version v2.0.0 api parameter is deprecated */
  setLocale(e, t) {
    const n = { locale: e };
    t && (n.api = t), this.setConfig(n);
  }
  _init() {
    this._toolbar && this.destructor();
    const e = /* @__PURE__ */ new Map([
      ["wx-i18n", Kt(this.config.locale)],
      [
        "wx-theme",
        Xn(this.container, this.config.theme, "material")
      ]
    ]);
    this._toolbar = new Gb({
      target: this.container,
      props: this._configToProps(this.config),
      context: e
    }), this.events = new Zn(this.api);
  }
  _configToProps(e) {
    let t = [
      { type: "search" },
      { type: "spacer" },
      { type: "undo" },
      { type: "redo" },
      { type: "sort" },
      { type: "addColumn" },
      { type: "addRow" }
    ];
    return e.items && (t = this._normalizeItems(e.items)), {
      ...e,
      items: t
    };
  }
  _normalizeItems(e) {
    return e.map((t) => typeof t == "string" ? {
      type: t
    } : typeof t == "function" ? {
      type: "template",
      template: t
    } : "template" in t && !t.type ? {
      type: "template",
      template: t.template
    } : t);
  }
}
(/* @__PURE__ */ new Date()).valueOf();
function yn(l) {
  return typeof l == "string" && l.length === 20 && parseInt(l.substr(7)) > 1e12;
}
class Jb {
  constructor() {
    this._nextHandler = null, this._handlers = {}, this._tag = /* @__PURE__ */ new WeakMap(), this.exec = this.exec.bind(this);
  }
  on(e, t, n) {
    let i = this._handlers[e];
    i ? n && n.intercept ? i.unshift(t) : i.push(t) : i = this._handlers[e] = [t], n && n.tag && this._tag.set(t, n.tag);
  }
  intercept(e, t, n) {
    this.on(e, t, { ...n, intercept: !0 });
  }
  detach(e) {
    for (const t in this._handlers) {
      const n = this._handlers[t];
      for (let i = n.length - 1; i >= 0; i--)
        this._tag.get(n[i]) === e && n.splice(i, 1);
    }
  }
  async exec(e, t) {
    const n = this._handlers[e];
    if (n)
      for (let i = 0; i < n.length; i++) {
        const s = n[i](t);
        if (s === !1 || s && s.then && await s === !1)
          return;
      }
    return this._nextHandler && await this._nextHandler.exec(e, t), t;
  }
  setNext(e) {
    return this._nextHandler = e;
  }
}
const Jt = Symbol(), Ur = 0, Qb = 1, Xb = 2;
class Zb {
  constructor() {
    this.reset(!0);
  }
  reset(e = !1) {
    this._awaitAddingQueue = [], this._queue = {}, this._waitPull = {}, this._status = [], e && (this._idPool = {}, this._backId = []);
  }
  resolve(e, t) {
    const n = this._backId[t];
    if (typeof n > "u")
      return e;
    const i = n[e];
    return typeof i > "u" ? e : i;
  }
  getSync() {
    const e = this._awaitAddingQueue;
    if (!e.length)
      return Ur;
    for (let t = 0; t < e.length; t++)
      if (!e[t].sent)
        return Qb;
    return Xb;
  }
  waitSync() {
    return new Promise((e) => {
      this.getSync() === Ur ? e() : this._status.push(e);
    });
  }
  getId(e) {
    return this._idPool[e] || (yn(e) ? null : e);
  }
  waitId(e) {
    return new Promise((t) => {
      const n = this.getId(e);
      n !== null && t(n);
      const i = this._waitPull[e] || [];
      i.push(t), this._waitPull[e] = i;
    });
  }
  add(e, t, n) {
    return new Promise((i, s) => {
      if (n = { ...n, resolve: i, reject: s }, n.debounce) {
        const r = `${e}"/"${t.id}`, a = this._queue[r];
        a && (n.resolve = (o) => {
          a.resolve(o), i(o);
        }, n.reject = () => {
          a.reject(), s();
        }, clearTimeout(a.timer)), this._queue[r] = n, n.timer = setTimeout(() => {
          this.tryExec(e, t, n);
        }, n.debounce);
        return;
      }
      this.tryExec(e, t, n);
    });
  }
  tryExec(e, t, n, i) {
    const s = this.exec(e, t, n, i);
    return s === null ? (i || this._awaitAddingQueue.push({ action: e, data: t, proc: n }), !1) : (s.then(
      (r) => {
        const a = r && r.id && r.id != t.id && yn(t.id);
        if (a && (this._idPool[t.id] = r.id, this._waitPull[t.id] && (this._waitPull[t.id].forEach((o) => o(r.id)), delete this._waitPull[t.id]), n.kind)) {
          let o = this._backId[n.kind];
          o || (o = this._backId[n.kind] = {}), o[r.id] = t.id;
        }
        t.response = r, n.resolve(!0), i && i(), a && this.execQueue();
      },
      () => {
        i && i(), n.reject();
      }
    ), !0);
  }
  exec(e, t, n, i) {
    const s = this.correctID(t, n.ignoreID ? t.id : null);
    if (s === Jt)
      return null;
    let r;
    try {
      r = n.handler(s, e, t);
    } catch (a) {
      i(), n.reject(a);
    }
    return r;
  }
  correctID(e, t) {
    let n = null;
    for (const i in e) {
      const s = e[i];
      if (typeof s == "object") {
        const r = this.correctID(s, t);
        if (r !== s) {
          if (r === Jt)
            return Jt;
          n === null && (n = { ...e }), n[i] = r;
        }
      } else if (s !== t && yn(s)) {
        const r = this._idPool[s];
        if (!r)
          return Jt;
        n === null && (n = { ...e }), n[i] = r;
      }
    }
    return n || e;
  }
  execQueue() {
    this._awaitAddingQueue.forEach((e) => {
      if (!e.sent) {
        const t = () => this._finishQueue(e);
        this.tryExec(e.action, e.data, e.proc, t) && (e.sent = !0);
      }
    });
  }
  _finishQueue(e) {
    if (this._awaitAddingQueue = this._awaitAddingQueue.filter((t) => t !== e), !this._awaitAddingQueue.length && this._status.length) {
      const t = [...this._status];
      this._status = [], t.forEach((n) => n());
    }
  }
}
class $b extends Jb {
  constructor(e) {
    super(), this._customHeaders = {}, this._url = e, this._queue = new Zb();
    const t = this.getHandlers();
    for (const n in t)
      this.on(n, (i) => {
        if (!i.skipProvider)
          return this._queue.add(n, i, t[n]);
      });
  }
  getHandlers() {
    return {};
  }
  setHeaders(e) {
    this._customHeaders = e;
  }
  getQueue() {
    return this._queue;
  }
  send(e, t, n, i = {}) {
    const s = {
      "Content-Type": "application/json",
      ...i,
      ...this._customHeaders
    }, r = {
      method: t,
      headers: s
    };
    return n && (r.body = typeof n == "object" ? JSON.stringify(n) : n), fetch(`${this._url}${e || ""}`, r).then((a) => a.json());
  }
}
const Pt = 1, Zt = 2, $t = 3, Yo = 4;
class h0 extends $b {
  constructor(e) {
    super(e);
  }
  getHandlers() {
    return {
      "add-card": {
        ignoreID: !0,
        kind: Pt,
        handler: (e) => (e.card = this.prepareCard(e.card), this.send("cards", "POST", e))
      },
      "update-card": {
        debounce: 500,
        handler: (e) => (e.card = this.prepareCard(e.card), this.send(`cards/${e.id}`, "PUT", e))
      },
      "move-card": {
        handler: (e) => this.send(`cards/${e.id}/move`, "PUT", e)
      },
      "delete-card": {
        handler: (e) => this.send(`cards/${e.id}`, "DELETE")
      },
      "add-column": {
        ignoreID: !0,
        kind: $t,
        handler: (e) => this.send("columns", "POST", e)
      },
      "update-column": {
        debounce: 500,
        handler: (e) => this.send(`columns/${e.id}`, "PUT", e)
      },
      "move-column": {
        handler: (e) => this.send(`columns/${e.id}/move`, "PUT", e)
      },
      "delete-column": {
        handler: (e) => this.send(`columns/${e.id}`, "DELETE")
      },
      "add-row": {
        ignoreID: !0,
        kind: Zt,
        handler: (e) => this.send("rows", "POST", e)
      },
      "update-row": {
        debounce: 500,
        handler: (e) => this.send(`rows/${e.id}`, "PUT", e)
      },
      "move-row": {
        handler: (e) => this.send(`rows/${e.id}/move`, "PUT", e)
      },
      "delete-row": {
        handler: (e) => this.send(`rows/${e.id}`, "DELETE")
      },
      "add-vote": {
        handler: (e) => this.send(`cards/${e.cardId}/vote`, "POST")
      },
      "delete-vote": {
        handler: (e) => this.send(`cards/${e.cardId}/vote`, "DELETE")
      },
      "add-comment": {
        ignoreID: !0,
        handler: (e) => this.send(
          `cards/${e.cardId}/comments`,
          "POST",
          e.comment
        )
      },
      "update-comment": {
        handler: (e) => this.send(
          `cards/${e.cardId}/comments/${e.id}`,
          "PUT",
          e.comment
        )
      },
      "delete-comment": {
        handler: (e) => this.send(`cards/${e.cardId}/comments/${e.id}`, "DELETE")
      },
      "add-link": {
        ignoreID: !0,
        kind: Yo,
        handler: (e) => this.send("links", "POST", e)
      },
      "delete-link": {
        handler: (e) => this.send(`links/${e.id}`, "DELETE")
      }
    };
  }
  getCards() {
    return this.send("cards", "GET").then(this.parseCards);
  }
  getColumns() {
    return this.send("columns", "GET");
  }
  getRows() {
    return this.send("rows", "GET");
  }
  getUsers() {
    return this.send("users", "GET");
  }
  getLinks() {
    return this.send("links", "GET");
  }
  getIDResolver() {
    return this.getQueue().resolve.bind(this.getQueue());
  }
  // [temp] remove the method when lib-provider is updated
  send(e, t, n, i = {}) {
    return this._url.charAt(-1) !== "/" && e[0] !== "/" && (e = "/" + e), super.send(e, t, n, i);
  }
  parseCards(e) {
    return e.forEach((t) => (t.end_date && (t.end_date = new Date(t.end_date)), t.start_date && (t.start_date = new Date(t.start_date)), t)), e;
  }
  prepareCard(e) {
    return e ? {
      ...e,
      users: e.users || null
    } : null;
  }
}
function g0(l, e) {
  function t(f) {
    return "id" in f && (f.id = e(f.id, Pt)), "column" in f && (f.column = e(f.column, $t)), "row" in f && (f.row = e(f.row, Zt)), f;
  }
  function n(f) {
    return "id" in f && (f.id = e(f.id, Zt)), f;
  }
  function i(f) {
    return "id" in f && (f.id = e(f.id, $t)), f;
  }
  function s(f) {
    return "id" in f && (f.id = e(f.id, Yo)), "masterId" in f && (f.masterId = e(f.masterId, Pt)), "slaveId" in f && (f.slaveId = e(f.slaveId, Pt)), f;
  }
  function r(f) {
    const c = t(f.card);
    switch (c.start_date = c.start_date ? new Date(c.start_date) : null, c.end_date = c.end_date ? new Date(c.end_date) : null, f.type) {
      case "add-card":
        l.exec(f.type, {
          skipProvider: !0,
          card: c,
          select: !1
        });
        break;
      case "update-card":
        l.exec("update-card", {
          skipProvider: !0,
          id: c.id,
          card: c
        });
        break;
      case "delete-card":
        l.exec("delete-card", {
          skipProvider: !0,
          id: c.id
        });
        break;
      case "move-card": {
        l.exec("move-card", {
          skipProvider: !0,
          id: c.id,
          rowId: c.row,
          columnId: c.column,
          before: e(f.before, Pt)
        });
        break;
      }
    }
  }
  function a(f) {
    const c = i(f.column);
    switch (f.type) {
      case "add-column":
        l.exec("add-column", {
          skipProvider: !0,
          column: c
        });
        break;
      case "delete-column":
        l.exec("delete-column", {
          skipProvider: !0,
          id: c.id
        });
        break;
      case "update-column":
        l.exec("update-column", {
          skipProvider: !0,
          id: c.id,
          column: c
        });
        break;
      case "move-column":
        l.exec("move-column", {
          skipProvider: !0,
          id: c.id,
          before: e(f.before, $t)
        });
    }
  }
  function o(f) {
    const c = n(f.row);
    switch (f.type) {
      case "add-row":
        l.exec("add-row", {
          skipProvider: !0,
          row: c
        });
        break;
      case "delete-row":
        l.exec("delete-row", {
          skipProvider: !0,
          id: c.id
        });
        break;
      case "update-row":
        l.exec("update-row", {
          skipProvider: !0,
          id: c.id,
          row: c
        });
        break;
      case "move-row":
        l.exec("move-row", {
          skipProvider: !0,
          id: c.id,
          before: e(f.before, Zt)
        });
    }
  }
  function u(f) {
    const c = s(f.link);
    switch (f.type) {
      case "add-link":
        l.exec("add-link", {
          skipProvider: !0,
          id: c.id,
          link: c
        });
        break;
      case "delete-link":
        l.exec("delete-link", {
          skipProvider: !0,
          id: c.id
        });
    }
  }
  return {
    cards: r,
    columns: a,
    rows: o,
    links: u
  };
}
class xb {
  constructor(e) {
    const { url: t, token: n } = e;
    this._url = t, this._token = n, this._mode = 1, this._seed = 1, this._queue = [], this.data = {}, this.api = {}, this._events = {};
  }
  headers() {
    return { Accept: "application/json", "Content-Type": "application/json", "Remote-Token": this._token };
  }
  fetch(e, t) {
    const n = { credentials: "include", headers: this.headers() };
    return t && (n.method = "POST", n.body = t), fetch(e, n).then((i) => i.json());
  }
  load(e) {
    return e && (this._url = e), this.fetch(this._url).then((t) => this.parse(t));
  }
  parse(e) {
    const { key: t, websocket: n } = e;
    t && (this._token = e.key);
    for (const i in e.data)
      this.data[i] = e.data[i];
    for (const i in e.api) {
      const s = this.api[i] = {}, r = e.api[i];
      for (const a in r)
        s[a] = this._wrapper(i + "." + a);
    }
    return n && this.connect(), this;
  }
  connect() {
    const e = this._socket;
    e && (this._socket = null, e.onclose = function() {
    }, e.close()), this._mode = 2, this._socket = function(t, n, i, s) {
      let r = n;
      r[0] === "/" && (r = document.location.protocol + "//" + document.location.host + n), r = r.replace(/^http(s|):/, "ws$1:");
      const a = r.indexOf("?") != -1 ? "&" : "?";
      r = `${r}${a}token=${i}&ws=1`;
      const o = new WebSocket(r);
      return o.onclose = () => setTimeout(() => t.connect(), 2e3), o.onmessage = (u) => {
        const f = JSON.parse(u.data);
        switch (f.action) {
          case "result":
            t.result(f.body, []);
            break;
          case "event":
            t.fire(f.body.name, f.body.value);
            break;
          case "start":
            s();
            break;
          default:
            t.onError(f.data);
        }
      }, o;
    }(this, this._url, this._token, () => (this._mode = 3, this._send(), this._resubscribe(), this));
  }
  _wrapper(e) {
    return function() {
      const t = [].slice.call(arguments);
      let n = null;
      const i = new Promise((s, r) => {
        n = { data: { id: this._uid(), name: e, args: t }, status: 1, resolve: s, reject: r }, this._queue.push(n);
      });
      return this.onCall(n, i), this._mode === 3 ? this._send(n) : setTimeout(() => this._send(), 1), i;
    }.bind(this);
  }
  _uid() {
    return (this._seed++).toString();
  }
  _send(e) {
    if (this._mode == 2)
      return void setTimeout(() => this._send(), 100);
    const t = e ? [e] : this._queue.filter((i) => i.status === 1);
    if (!t.length)
      return;
    const n = t.map((i) => (i.status = 2, i.data));
    this._mode !== 3 ? this.fetch(this._url, JSON.stringify(n)).catch((i) => this.onError(i)).then((i) => this.result(i, n)) : this._socket.send(JSON.stringify({ action: "call", body: n }));
  }
  result(e, t) {
    const n = {};
    if (e)
      for (let i = 0; i < e.length; i++)
        n[e[i].id] = e[i];
    else
      for (let i = 0; i < t.length; i++)
        n[t[i].id] = { id: t[i].id, error: "Network Error", data: null };
    for (let i = this._queue.length - 1; i >= 0; i--) {
      const s = this._queue[i], r = n[s.data.id];
      r && (this.onResponse(s, r), r.error ? s.reject(r.error) : s.resolve(r.data), this._queue.splice(i, 1));
    }
  }
  on(e, t) {
    const n = this._uid();
    let i = this._events[e];
    const s = !!i;
    return s || (i = this._events[e] = []), i.push({ id: n, handler: t }), s || this._mode != 3 || this._socket.send(JSON.stringify({ action: "subscribe", name: e })), { name: e, id: n };
  }
  _resubscribe() {
    if (this._mode == 3)
      for (const e in this._events)
        this._socket.send(JSON.stringify({ action: "subscribe", name: e }));
  }
  detach(e) {
    if (!e) {
      if (this._mode == 3)
        for (const s in this._events)
          this._socket.send(JSON.stringify({ action: "unsubscribe", key: s }));
      return void (this._events = {});
    }
    const { id: t, name: n } = e, i = this._events[n];
    if (i) {
      const s = i.filter((r) => r.id != t);
      s.length ? this._events[n] = s : (delete this._events[n], this._mode == 3 && this._socket.send(JSON.stringify({ action: "unsubscribe", name: n })));
    }
  }
  fire(e, t) {
    const n = this._events[e];
    if (n)
      for (let i = 0; i < n.length; i++)
        n[i].handler(t);
  }
  onError(e) {
    return null;
  }
  onCall(e, t) {
  }
  onResponse(e, t) {
  }
}
class b0 {
  _remote;
  _ready;
  constructor(e, t) {
    const n = new xb({
      url: e,
      token: t
    });
    n.fetch = function(i, s) {
      const r = {
        headers: this.headers()
      };
      return s && (r.method = "POST", r.body = s), fetch(i, r).then((a) => a.json());
    }, this._ready = n.load().then((i) => this._remote = i);
  }
  ready() {
    return this._ready;
  }
  on(e, t) {
    this.ready().then((n) => {
      if (typeof e == "string")
        n.on(e, t);
      else
        for (const i in e)
          n.on(i, e[i]);
    });
  }
}
export {
  d0 as Editor,
  f0 as Kanban,
  b0 as RemoteEvents,
  h0 as RestDataProvider,
  _0 as Toolbar,
  Xt as defaultCardShape,
  qt as defaultEditorConfig,
  ko as defaultEditorShape,
  vc as getDefaultCardMenuItems,
  yc as getDefaultColumnMenuItems,
  Sc as getDefaultRowMenuItems,
  g0 as kanbanUpdates,
  on as locateID,
  Fn as tempID,
  c0 as template
};
