/* ============================================
   ELEKTROID — Catálogo digital
   Tokens: fundo #080808, verde #00d452
   ============================================ */

:root {
  --bg: #080808;
  --bg-card: #0e0e0e;
  --bg-card-hover: #131313;
  --border: #1f1f1f;
  --border-hover: #2c2c2c;
  --green: #00d452;
  --green-dim: #00a341;
  --green-glow: rgba(0, 212, 82, 0.14);
  --text: #f4f4f4;
  --text-mid: #9a9a9a;
  --text-dim: #5c5c5c;
  --radius: 2px;
  --font-display: 'Sora', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'Space Mono', monospace;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.5;
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; }
ul { list-style: none; }
button { font-family: inherit; cursor: pointer; border: none; background: none; }
img { display: block; max-width: 100%; }

.container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ---------- background grid texture ---------- */
.grid-overlay {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 212, 82, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 82, 0.035) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
  z-index: 0;
  mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%);
}

/* ---------- corner bracket signature element ---------- */
.bracket {
  position: relative;
}
.bracket::before,
.bracket::after,
.bracket .b-tl,
.bracket .b-br {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  border-color: var(--green);
  opacity: 0.55;
  transition: opacity 0.25s ease, width 0.25s ease, height 0.25s ease;
}
.bracket::before {
  top: -1px; left: -1px;
  border-top: 2px solid var(--green);
  border-left: 2px solid var(--green);
}
.bracket::after {
  bottom: -1px; right: -1px;
  border-bottom: 2px solid var(--green);
  border-right: 2px solid var(--green);
}
.bracket:hover::before,
.bracket:hover::after {
  width: 20px;
  height: 20px;
  opacity: 1;
}

/* screw detail */
.screw {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--border-hover);
  position: absolute;
}

/* ============================================
   HEADER
   ============================================ */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(8, 8, 8, 0.88);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
}
.logo-mark {
  width: 38px;
  height: 38px;
  border: 1.5px solid var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: 700;
  color: var(--green);
  font-size: 17px;
}
.logo-mark .screw { top: 3px; left: 3px; }
.logo-sub {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--text-dim);
  font-weight: 400;
  margin-top: 2px;
}

.main-nav {
  display: flex;
  gap: 36px;
}
.main-nav a {
  font-size: 14px;
  color: var(--text-mid);
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
}
.main-nav a:hover { color: var(--text); }
.main-nav a::after {
  content: '';
  position: absolute;
  left: 0; bottom: -6px;
  width: 0; height: 1.5px;
  background: var(--green);
  transition: width 0.2s ease;
}
.main-nav a:hover::after { width: 100%; }

.header-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}
.icon-btn {
  width: 38px;
  height: 38px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-mid);
  transition: border-color 0.2s ease, color 0.2s ease;
}
.icon-btn:hover {
  border-color: var(--green);
  color: var(--green);
}
.icon-btn svg { width: 17px; height: 17px; }

/* ============================================
   BUTTONS
   ============================================ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 26px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-family: var(--font-body);
  border: 1px solid transparent;
  transition: all 0.2s ease;
  white-space: nowrap;
}
.btn-primary {
  background: var(--green);
  color: #051a0a;
}
.btn-primary:hover {
  background: #1eff72;
  box-shadow: 0 0 0 1px var(--green), 0 0 24px var(--green-glow);
}
.btn-ghost {
  border-color: var(--border-hover);
  color: var(--text);
  background: transparent;
}
.btn-ghost:hover {
  border-color: var(--green);
  color: var(--green);
}
.btn-sm { padding: 9px 16px; font-size: 11px; }
.btn-full { width: 100%; }

/* ============================================
   HERO
   ============================================ */
.hero {
  position: relative;
  padding: 96px 0 80px;
  z-index: 1;
}
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--green);
  text-transform: uppercase;
  margin-bottom: 28px;
  padding: 7px 14px;
  border: 1px solid rgba(0, 212, 82, 0.3);
}
.hero-eyebrow .dot {
  width: 6px; height: 6px;
  background: var(--green);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--green);
}
.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 76px);
  font-weight: 600;
  line-height: 1.04;
  letter-spacing: -0.01em;
  max-width: 820px;
}
.hero h1 em {
  font-style: normal;
  color: var(--green);
}
.hero-sub {
  margin-top: 26px;
  font-size: 17px;
  color: var(--text-mid);
  max-width: 540px;
  line-height: 1.65;
}
.hero-ctas {
  display: flex;
  gap: 16px;
  margin-top: 40px;
}
.hero-strip {
  display: flex;
  gap: 40px;
  margin-top: 64px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
}
.hero-strip-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--text-mid);
}
.hero-strip-item svg {
  width: 17px; height: 17px;
  color: var(--green);
  flex-shrink: 0;
}

/* ============================================
   SECTION HEADERS
   ============================================ */
.section { padding: 88px 0; position: relative; z-index: 1; }
.section-tight { padding: 64px 0; }
.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 48px;
  gap: 24px;
  flex-wrap: wrap;
}
.section-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 14px;
  display: block;
}
.section-head h2 {
  font-family: var(--font-display);
  font-size: clamp(28px, 3.4vw, 40px);
  font-weight: 600;
  letter-spacing: -0.01em;
  max-width: 560px;
}
.section-desc {
  font-size: 14.5px;
  color: var(--text-mid);
  max-width: 320px;
  text-align: right;
}

/* ============================================
   CATEGORY GRID
   ============================================ */
.cat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}
.cat-card {
  background: var(--bg);
  padding: 36px 28px;
  position: relative;
  transition: background 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 200px;
  justify-content: space-between;
}
.cat-card:hover { background: var(--bg-card-hover); }
.cat-icon {
  width: 44px; height: 44px;
  border: 1px solid var(--border-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--green);
  transition: border-color 0.25s ease;
}
.cat-card:hover .cat-icon { border-color: var(--green); }
.cat-icon svg { width: 22px; height: 22px; }
.cat-name {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 600;
}
.cat-count {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-dim);
  letter-spacing: 0.06em;
}
.cat-arrow {
  position: absolute;
  top: 28px; right: 28px;
  color: var(--text-dim);
  transition: color 0.25s ease, transform 0.25s ease;
}
.cat-card:hover .cat-arrow {
  color: var(--green);
  transform: translate(3px, -3px);
}
.cat-arrow svg { width: 16px; height: 16px; }

/* ============================================
   FILTER BAR
   ============================================ */
.filter-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
.filter-chip {
  padding: 9px 18px;
  border: 1px solid var(--border-hover);
  font-size: 13px;
  font-weight: 500;
  color: var(--text-mid);
  transition: all 0.2s ease;
}
.filter-chip:hover { border-color: var(--text-mid); color: var(--text); }
.filter-chip.active {
  background: var(--green);
  border-color: var(--green);
  color: #051a0a;
  font-weight: 600;
}

/* ============================================
   PRODUCT GRID / CARD
   ============================================ */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
.product-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: border-color 0.25s ease, transform 0.25s ease;
  display: flex;
  flex-direction: column;
}
.product-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-3px);
}
.product-media {
  position: relative;
  aspect-ratio: 1 / 1;
  background: #050505;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}
.product-media img {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
}
.product-placeholder-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.product-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--text-dim);
}
.product-placeholder svg { width: 40px; height: 40px; opacity: 0.5; }
.product-placeholder span {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.product-badge {
  position: absolute;
  top: 12px; left: 12px;
  background: var(--green);
  color: #051a0a;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 5px 10px;
}
.product-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}
.product-cat {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--green);
}
.product-name {
  font-family: var(--font-display);
  font-size: 16.5px;
  font-weight: 600;
  line-height: 1.3;
}
.product-specs {
  display: flex;
  gap: 14px;
  font-size: 12px;
  color: var(--text-mid);
  flex-wrap: wrap;
}
.product-specs span {
  display: flex;
  align-items: center;
  gap: 5px;
}
.product-specs svg { width: 13px; height: 13px; color: var(--text-dim); }
.product-price-row {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.price-old {
  font-size: 12.5px;
  color: var(--text-dim);
  text-decoration: line-through;
}
.price-new {
  font-family: var(--font-display);
  font-size: 21px;
  font-weight: 600;
  color: var(--green);
}
.price-installment {
  font-size: 11.5px;
  color: var(--text-dim);
  font-family: var(--font-mono);
  letter-spacing: 0.01em;
}
.price-block { display: flex; flex-direction: column; gap: 2px; }
.product-cta {
  margin-top: 16px;
}

/* ============================================
   TRUST / WHY US
   ============================================ */
.trust-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}
.trust-card {
  background: var(--bg);
  padding: 40px 32px;
}
.trust-num {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--green);
  letter-spacing: 0.1em;
  margin-bottom: 18px;
  display: block;
}
.trust-card h3 {
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 12px;
}
.trust-card p {
  font-size: 14px;
  color: var(--text-mid);
  line-height: 1.6;
}

/* ============================================
   TESTIMONIALS
   ============================================ */
.testimonial-track-wrap {
  overflow: hidden;
  position: relative;
}
.testimonial-track {
  display: flex;
  gap: 20px;
}
.testimonial-card {
  flex: 0 0 320px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.stars {
  display: flex;
  gap: 3px;
  color: var(--green);
}
.stars svg { width: 14px; height: 14px; }
.testimonial-card p {
  font-size: 14.5px;
  color: var(--text);
  line-height: 1.65;
  flex: 1;
}
.testimonial-author {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-dim);
  padding-top: 14px;
  border-top: 1px solid var(--border);
}

/* ============================================
   CONTACT / CTA
   ============================================ */
.contact-section {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, transparent, rgba(0,212,82,0.03));
}
.contact-inner {
  text-align: center;
  padding: 96px 0;
}
.contact-inner h2 {
  font-family: var(--font-display);
  font-size: clamp(30px, 4vw, 46px);
  font-weight: 600;
  letter-spacing: -0.01em;
  max-width: 640px;
  margin: 0 auto;
}
.contact-inner h2 em { font-style: normal; color: var(--green); }
.contact-inner > p {
  margin-top: 18px;
  color: var(--text-mid);
  font-size: 15px;
}
.contact-channels {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 44px;
  flex-wrap: wrap;
}
.channel-pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  border: 1px solid var(--border-hover);
  font-size: 14px;
  font-weight: 500;
  transition: border-color 0.2s ease, background 0.2s ease;
}
.channel-pill:hover {
  border-color: var(--green);
  background: var(--green-glow);
}
.channel-pill svg { width: 19px; height: 19px; color: var(--green); }

/* ============================================
   FOOTER
   ============================================ */
.site-footer {
  padding: 56px 0 32px;
  position: relative;
  z-index: 1;
}
.footer-top {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}
.footer-brand p {
  margin-top: 18px;
  font-size: 13.5px;
  color: var(--text-dim);
  line-height: 1.65;
  max-width: 280px;
}
.footer-col h4 {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-mid);
  margin-bottom: 18px;
}
.footer-col ul { display: flex; flex-direction: column; gap: 11px; }
.footer-col a {
  font-size: 13.5px;
  color: var(--text-dim);
  transition: color 0.2s ease;
}
.footer-col a:hover { color: var(--green); }
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 28px;
  font-size: 12.5px;
  color: var(--text-dim);
  flex-wrap: wrap;
  gap: 12px;
}
.footer-bottom a { color: var(--text-dim); }
.footer-bottom a:hover { color: var(--green); }

/* ============================================
   FLOATING WHATSAPP
   ============================================ */
.float-whatsapp {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 200;
  width: 58px;
  height: 58px;
  background: var(--green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #051a0a;
  box-shadow: 0 4px 24px rgba(0, 212, 82, 0.35);
  transition: transform 0.2s ease;
}
.float-whatsapp:hover { transform: scale(1.08); }
.float-whatsapp svg { width: 28px; height: 28px; }

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 1024px) {
  .cat-grid { grid-template-columns: repeat(2, 1fr); }
  .product-grid { grid-template-columns: repeat(2, 1fr); }
  .trust-grid { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1.2fr 1fr 1fr; }
  .main-nav { display: none; }
}
@media (max-width: 640px) {
  .cat-grid { grid-template-columns: 1fr; }
  .product-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .product-name { font-size: 14.5px; }
  .price-new { font-size: 17px; }
  .hero { padding: 64px 0 56px; }
  .hero-ctas { flex-direction: column; }
  .hero-ctas .btn { width: 100%; }
  .section { padding: 56px 0; }
  .section-head { flex-direction: column; align-items: flex-start; }
  .section-desc { text-align: left; }
  .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
  .footer-brand { grid-column: 1 / -1; }
  .contact-channels { flex-direction: column; align-items: stretch; }
}
@media (max-width: 420px) {
  .product-grid { grid-template-columns: 1fr; }
}
