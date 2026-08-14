/* tekening.js — componentbibliotheek voor de schematische tekeningen in overzicht.html.
 *
 * Principe: elke tekening is een `Aanzicht` met een tekenveld in échte millimeters.
 * Je tekent met werkelijke maten (poot 70 breed = 70); de schaal (px per mm) is
 * alleen presentatie. Maatfouten door px-omrekening kunnen daardoor niet meer.
 * Tekst en lijndiktes worden per aanzicht gecompenseerd zodat ze op elke schaal
 * even groot ogen. Vanilla JS, geen dependencies.
 */
'use strict';
(function (global) {
  const NS = 'http://www.w3.org/2000/svg';
  const KLEUR = {
    hout:   { fill: '#E4E0D5', stroke: '#262319' },
    beuken: { fill: '#DCE3DA', stroke: '#4E6B51' },
    ijzer:  { fill: '#B8B2A2', stroke: '#262319' },
    gat:    { fill: '#F3F1EA', stroke: '#262319' },
    maat: '#B0402F', ink: '#262319', muted: '#86816F', wit: '#F3F1EA'
  };
  let uid = 0;

  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, String(attrs[k]));
    if (parent) parent.appendChild(e);
    return e;
  }

  class Aanzicht {
    /**
     * mount: selector of element waarin het aanzicht komt
     * opts: { titel, sub, b, h  — tekenveld in mm,
     *         schaal — px per mm,
     *         marge — {l,r,t,b} in mm rondom het veld (ruimte voor maten/labels) }
     */
    constructor(mount, opts) {
      const m = Object.assign({ l: 30, r: 30, t: 20, b: 20 }, opts.marge || {});
      this.s = opts.schaal;
      this.fs = 10.5 / this.s;      // tekstgrootte ≈ 10,5 px op elke schaal
      this.rh = this.fs * 1.35;     // regelhoogte voor meerregelige labels
      const host = typeof mount === 'string' ? document.querySelector(mount) : mount;
      const wrap = document.createElement('div');
      wrap.className = 'aanzicht';
      host.appendChild(wrap);
      if (opts.titel) {
        const t = document.createElement('div');
        t.className = 'aanzicht-titel'; t.textContent = opts.titel; wrap.appendChild(t);
      }
      const W = opts.b + m.l + m.r, H = opts.h + m.t + m.b;
      this.svg = el('svg', { viewBox: `${-m.l} ${-m.t} ${W} ${H}` }, wrap);
      this.svg.style.width = Math.round(W * this.s) + 'px';
      this.svg.style.maxWidth = '100%';
      const defs = el('defs', {}, this.svg);
      this.mid = 'pijl' + (uid++);
      const mk = el('marker', { id: this.mid, viewBox: '0 0 10 10', refX: 8, refY: 5, markerWidth: 6, markerHeight: 6, orient: 'auto-start-reverse' }, defs);
      el('path', { d: 'M1 1L9 5L1 9', fill: 'none', stroke: KLEUR.maat, 'stroke-width': 1.4 }, mk);
      if (opts.sub) {
        const s = document.createElement('div');
        s.className = 'aanzicht-sub'; s.textContent = opts.sub; wrap.appendChild(s);
      }
    }

    _stijl(e, type, o) {
      const k = KLEUR[type] || KLEUR.hout;
      e.setAttribute('fill', o.open ? 'none' : k.fill);
      e.setAttribute('stroke', k.stroke);
      e.setAttribute('stroke-width', (o.dikte || 1.4) / this.s);
      if (o.stippel) e.setAttribute('stroke-dasharray', `${4 / this.s} ${3 / this.s}`);
      if (o.op != null) e.setAttribute('fill-opacity', o.op);
      return e;
    }

    /* massief vlak: type = hout | beuken | ijzer | gat */
    vlak(type, x, y, b, h, o = {}) { return this._stijl(el('rect', { x, y, width: b, height: h }, this.svg), type, o); }
    /* vrije vorm uit [x,y]-punten */
    vorm(type, punten, o = {}) {
      const d = 'M' + punten.map(p => p.join(' ')).join(' L ') + ' Z';
      return this._stijl(el('path', { d }, this.svg), type, o);
    }
    lijn(x1, y1, x2, y2, o = {}) {
      const e = el('line', { x1, y1, x2, y2 }, this.svg);
      e.setAttribute('stroke', o.kleur || KLEUR.ink);
      e.setAttribute('stroke-width', (o.dikte || 1) / this.s);
      if (o.stippel) e.setAttribute('stroke-dasharray', `${4 / this.s} ${3 / this.s}`);
      return e;
    }
    cirkel(x, y, r, o = {}) {
      const e = el('circle', { cx: x, cy: y, r }, this.svg);
      e.setAttribute('fill', o.vul || 'none');
      e.setAttribute('stroke', o.kleur || KLEUR.ink);
      e.setAttribute('stroke-width', (o.dikte || 1.2) / this.s);
      return e;
    }
    tekst(t, x, y, o = {}) {
      const e = el('text', { x, y }, this.svg);
      e.setAttribute('font-family', "'IBM Plex Mono',monospace");
      e.setAttribute('font-size', (o.grootte || 1) * this.fs);
      e.setAttribute('fill', o.kleur || KLEUR.ink);
      if (o.anchor) e.setAttribute('text-anchor', o.anchor);
      if (o.draai) e.setAttribute('transform', `rotate(${o.draai} ${x} ${y})`);
      e.textContent = t;
      return e;
    }
    /* meerregelig label; regels = string of array */
    label(regels, x, y, o = {}) {
      (Array.isArray(regels) ? regels : [regels])
        .forEach((r, i) => this.tekst(r, x, y + i * this.rh, o));
      return this;
    }
    /* genummerd merkteken ①-stijl: cirkeltje met nummer */
    merk(nr, x, y, o = {}) {
      this.cirkel(x, y, this.fs * 0.75, { vul: KLEUR.wit, kleur: o.kleur || KLEUR.ink });
      this.tekst(String(nr), x, y + this.fs * 0.36, { anchor: 'middle', grootte: 0.85, kleur: o.kleur || KLEUR.ink });
      return this;
    }
    /* horizontale maatlijn; label automatisch: ≥100 mm → cm, anders mm */
    maatH(x1, x2, y, o = {}) {
      const l = el('line', { x1, y1: y, x2, y2: y }, this.svg);
      l.setAttribute('stroke', KLEUR.maat); l.setAttribute('stroke-width', 1 / this.s);
      l.setAttribute('marker-start', `url(#${this.mid})`); l.setAttribute('marker-end', `url(#${this.mid})`);
      this.tekst(o.label != null ? o.label : this._auto(x2 - x1), (x1 + x2) / 2,
        y + (o.onder ? this.rh : -this.fs * 0.45), { anchor: 'middle', kleur: KLEUR.maat });
      return this;
    }
    maatV(x, y1, y2, o = {}) {
      const l = el('line', { x1: x, y1, x2: x, y2 }, this.svg);
      l.setAttribute('stroke', KLEUR.maat); l.setAttribute('stroke-width', 1 / this.s);
      l.setAttribute('marker-start', `url(#${this.mid})`); l.setAttribute('marker-end', `url(#${this.mid})`);
      this.tekst(o.label != null ? o.label : this._auto(y2 - y1),
        x + (o.rechts ? this.fs * 0.9 : -this.fs * 0.45), (y1 + y2) / 2,
        { anchor: 'middle', kleur: KLEUR.maat, draai: -90 });
      return this;
    }
    _auto(mm) { mm = Math.abs(mm); return mm >= 100 ? String(Math.round(mm / 10)) : String(mm); }
    /* rood gestippelde vrijhoud-/aandachtszone */
    zone(x, y, b, h) {
      const e = el('rect', { x, y, width: b, height: h }, this.svg);
      e.setAttribute('fill', 'none'); e.setAttribute('stroke', KLEUR.maat);
      e.setAttribute('stroke-width', 1 / this.s);
      e.setAttribute('stroke-dasharray', `${5 / this.s} ${3 / this.s}`);
      return e;
    }
    /* vloerlijn */
    vloer(x1, x2, y) { return this.lijn(x1, y, x2, y, { dikte: 2.4 }); }
  }

  global.Aanzicht = Aanzicht;
  global.TEKENKLEUR = KLEUR;
})(window);
