import { useState, useEffect } from 'react';
import { C, FONT, GRADIENT, SHADOW } from '../styles/theme';
import FadeIn from '../components/FadeIn';
import { CheckCircle, ArrowUpRight, Zap, Brain, Code2, Users, Globe } from 'lucide-react';

const RESPONSIVE_CSS = `
  @keyframes pulseDot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }
  @media (max-width: 900px) {
    .home-hero { flex-direction: column !important; padding-top: 60px !important; }
    .home-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
    .home-stats { grid-template-columns: repeat(2,1fr) !important; }
    .home-info-card-2 { margin-left: 0 !important; }
  }
  @media (max-width: 600px) {
    .home-stats { grid-template-columns: 1fr !important; }
    .home-cta-btns { flex-direction: column !important; }
    .code-resp { max-width: 100% !important; width: 100% !important; margin-top: 32px !important; }
    .code-resp pre { padding: 16px !important; margin: 0 !important; }
  }
`;

const DYNAMIC = ['Websites.', 'Windows Apps.', 'CRM & ERP.', 'Agentic AI.'];

const SERVICES = [
  { icon: <Code2 size={22} color={C.primaryCont} />, title: 'Enterprise Windows Apps', desc: 'High-performance native applications engineered for the modern Windows ecosystem. Low-latency execution and high-fidelity interfaces.' },
  { icon: <Brain size={22} color={C.primaryCont} />, title: 'Agentic AI', desc: 'Developing autonomous agents that understand, reason, and execute complex business workflows with surgical precision.' },
  { icon: <Globe size={22} color={C.primaryCont} />, title: 'CRM / ERP Systems', desc: 'Customized ecosystems that breathe life into business operations. Built for scale, not shortcuts.' },
  { icon: <Zap size={22} color={C.primaryCont} />, title: 'Web Development', desc: 'Scalable, performant web applications engineered for real-world load and exceptional user experiences.' },
  { icon: <Users size={22} color={C.primaryCont} />, title: 'Custom Software', desc: 'Tailored systems with zero bloat. Just performance-obsessed engineering aligned to your domain.' },
];

// const STATS = [
//   { n: '50+', label: 'Products Shipped', sub: 'Across web, mobile, desktop & AI' },
//   { n: '20+', label: 'Global Clients', sub: 'Powering mission-critical systems' },
//   { n: '100%', label: 'AI-First Architecture', sub: 'Intelligence built in, not bolted on' },
//   { n: '4yrs', label: 'Deep Domain Expertise', sub: 'Windows, AI, CRM, ERP & Web' },
// ];

const FEATURES = [
  { label: 'Zero-Dependency Core', desc: 'Lightweight foundations for blazing-fast start times.' },
  { label: 'Animated Logic', desc: 'UI transitions mapped to underlying computational states.' },
  { label: 'Neural Architecture', desc: 'Deep integration with LLMs and Vector Databases.' },
];

const CODE_SNIPPET = `// Initializing CodeSurgeon AI
async function performSurgery(entity) {
  const diagnosis = await AI.analyze(entity.source);
  if (diagnosis.isSuboptimal) {
    return await Refactor.optimize({
      precision: 'surgical',
      speed:     'instant',
      ux:        'high-end-editorial'
    });
  }
}`;

export default function Home({ setPage, setModalOpen }) {
  const [dynIdx, setDynIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setDynIdx(i => (i + 1) % DYNAMIC.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: C.bg, fontFamily: FONT.body }}>
      <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />
      {/* HERO */}
      <section className="home-hero" style={heroStyle}>
        {/* Background decoration */}
        <div style={heroGlow} />
        <div style={heroGlow2} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={badgeStyle}>
            <span style={badgeDot} />
            Information Services · Digital Surgery with Precision
          </div>
          <h1 style={h1Style}>
            We perform<br />
            <span style={{ background: GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Digital Surgery
            </span><br />
            with Precision.
          </h1>
          <div style={dynWrap}>
            <span style={{ opacity: 0.55, marginRight: 10 }}>Building</span>
            <span key={dynIdx} style={dynWord}>{DYNAMIC[dynIdx]}</span>
          </div>
          <p style={heroSub}>
            A premier software development company specializing in Windows Applications, CRM/ERP solutions,
            and Agentic AI. Our commitment is to the "Surge" standard — where performance meets aesthetics.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button style={btnPrimary} onClick={() => setModalOpen(true)}>
              Start a Project
            </button>
            <button style={btnSecondary} onClick={() => setPage('services')}>
              Explore Services →
            </button>
          </div>
        </div>
        {/* Code block float */}
        <div className="code-resp" style={codeFloat}>
          <div style={codeHeader}>
            <span style={codeDot('#ff5f57')} /><span style={codeDot('#febc2e')} /><span style={codeDot('#28c840')} />
            <span style={{ marginLeft: 8, fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>surgery.js</span>
          </div>
          <pre style={codePre}><code style={{ color: '#b2c5ff' }}>{CODE_SNIPPET}</code></pre>
        </div>
      </section>

      {/* STATS BAND */}
      {/* <section className="home-stats" style={statsBand}>
        {STATS.map((s, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div style={statItem}>
              <div style={statNum}>{s.n}</div>
              <div style={statLabel}>{s.label}</div>
              <div style={statSub}>{s.sub}</div>
            </div>
          </FadeIn>
        ))}
      </section> */}

      {/* ABOUT / INTRO */}
      <section style={sectionBase}>
        <FadeIn>
          <div className="home-two-col" style={twoCol}>
            <div>
              <div style={sectionLabel}>About CodeSurgeons</div>
              <h2 style={h2Style}>We don't just develop.<br />We engineer.</h2>
              <p style={bodyText}>
                Scalable digital systems built with precision. Every product we ship carries an AI-first architecture,
                performance-obsessed engineering, and editorial design that lasts.
              </p>
              <div style={{ marginTop: 28 }}>
                {FEATURES.map(f => (
                  <div key={f.label} style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'flex-start' }}>
                    <CheckCircle size={18} color={C.primaryCont} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontFamily: FONT.headline, fontWeight: 700, fontSize: 14, color: C.onBg, marginBottom: 2 }}>{f.label}</div>
                      <div style={{ fontSize: 13, color: C.onSurfaceVar, fontWeight: 300 }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button style={{ ...btnPrimary, marginTop: 16 }} onClick={() => setPage('ai')}>
                Explore Agentic AI →
              </button>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={infoCard(0)}>
                <div style={cardIconWrap}><Brain size={24} color={C.primaryCont} /></div>
                <div style={{ fontFamily: FONT.headline, fontWeight: 700, fontSize: 18, color: C.onBg, margin: '12px 0 6px', lineHeight: 1.3 }}>
                  Precision First
                </div>
                <p style={{ fontSize: 13, color: C.onSurfaceVar, lineHeight: 1.7, fontWeight: 300 }}>
                  Our "Digital Surgery" philosophy ensures that every pixel and every line of code serves a specific, optimized purpose.
                </p>
              </div>
              <div className="home-info-card-2" style={infoCard(1)}>
                <div style={cardIconWrap}><Zap size={24} color={C.primaryCont} /></div>
                <div style={{ fontFamily: FONT.headline, fontWeight: 700, fontSize: 18, color: C.onBg, margin: '12px 0 6px' }}>
                  Powering 20+ Global Clients
                </div>
                <p style={{ fontSize: 13, color: C.onSurfaceVar, lineHeight: 1.7, fontWeight: 300 }}>
                  From enterprise ERP to groundbreaking AI agents, our teams are trusted globally.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ ...sectionBase, background: C.surfaceLow }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ ...sectionLabel, justifyContent: 'center' }}>Core Services</div>
            <h2 style={{ ...h2Style, marginBottom: 12 }}>Enterprise Windows Apps</h2>
            <p style={{ ...bodyText, margin: '0 auto', maxWidth: 540 }}>
              We architect robust, scalable software solutions. Precision in every line of code.
            </p>
          </div>
        </FadeIn>
        <div style={servicesGrid}>
          {SERVICES.map((svc, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div
                style={serviceCard}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = SHADOW; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={iconWrap}>{svc.icon}</div>
                <h3 style={{ fontFamily: FONT.headline, fontWeight: 700, fontSize: 17, color: C.onBg, marginBottom: 10, lineHeight: 1.3 }}>{svc.title}</h3>
                <p style={{ fontSize: 14, color: C.onSurfaceVar, lineHeight: 1.7, fontWeight: 300, flex: 1 }}>{svc.desc}</p>
                <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 6, color: C.primaryCont, fontSize: 13, fontWeight: 600, cursor: 'pointer' }} onClick={() => setPage('services')}>
                  Learn more <ArrowUpRight size={14} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={400}>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <button style={btnPrimary} onClick={() => setPage('services')}>View All Services</button>
          </div>
        </FadeIn>
      </section>

      {/* CTA BAND */}
      <section style={ctaSection}>
        <div style={ctaGlow} />
        <FadeIn>
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div style={{ ...sectionLabel, justifyContent: 'center', color: 'rgba(255,255,255,0.6)' }}>Let's Work Together</div>
            <h2 style={{ fontFamily: FONT.headline, fontWeight: 800, fontSize: 'clamp(32px,4vw,56px)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>
              Whether it's a mission-critical ERP or a groundbreaking AI agent, our team is ready.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 40, fontWeight: 300 }}>
              No noise. No buzzwords. Just a focused conversation about your product and how we can engineer it right.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{ ...btnPrimary, background: '#fff', color: C.primary }} onClick={() => setModalOpen(true)}>
                Get in Touch
              </button>
              <button style={{ ...btnSecondary, borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }} onClick={() => setPage('portfolio')}>
                View Our Work
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

/* ── Styles ─────────────────────────────────────────────── */
const heroStyle = {
  minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '60px 5% 100px',
  gap: '60px', background: C.surface, position: 'relative', overflow: 'hidden',
  flexWrap: 'wrap',
};
const heroGlow = {
  position: 'absolute', top: '-10%', right: '-5%', width: '50vw', height: '50vw',
  borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,82,204,0.07) 0%, transparent 70%)',
  pointerEvents: 'none',
};
const heroGlow2 = {
  position: 'absolute', bottom: '-10%', left: '-10%', width: '40vw', height: '40vw',
  borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,38,0,0.04) 0%, transparent 70%)',
  pointerEvents: 'none',
};
const badgeStyle = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  background: 'rgba(0,82,204,0.07)', border: '1px solid rgba(0,82,204,0.2)',
  padding: '6px 14px', borderRadius: 100, fontSize: 12, color: C.primaryCont,
  marginBottom: 28, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600,
};
const badgeDot = { width: 6, height: 6, borderRadius: '50%', background: C.primaryCont, display: 'inline-block', animation: 'pulseDot 1.6s ease-in-out infinite' };
const h1Style = {
  fontFamily: FONT.headline, fontWeight: 800, fontSize: 'clamp(40px,5.5vw,80px)',
  lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 20, color: C.onBg,
};
const dynWrap = {
  fontFamily: FONT.headline, fontWeight: 700, fontSize: 'clamp(20px,3vw,36px)',
  color: C.primary, marginBottom: 24, letterSpacing: '-0.01em',
};
const dynWord = { color: C.primaryCont };
const heroSub = { fontSize: 16, color: C.onSurfaceVar, maxWidth: 520, marginBottom: 36, lineHeight: 1.8, fontWeight: 300 };
const btnPrimary = {
  background: GRADIENT, color: '#fff', border: 'none', cursor: 'pointer',
  padding: '13px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600,
  fontFamily: FONT.body, boxShadow: '0 4px 14px rgba(0,61,155,0.3)',
  transition: 'all 0.25s', letterSpacing: '0.01em',
};
const btnSecondary = {
  background: 'transparent', color: C.primary, border: `1px solid ${C.outlineVar}`,
  cursor: 'pointer', padding: '12px 28px', borderRadius: 8, fontSize: 15, fontWeight: 500,
  fontFamily: FONT.body, transition: 'all 0.25s',
};
const codeFloat = {
  background: 'linear-gradient(135deg,#0a1628 0%,#0d1f3c 100%)',
  borderRadius: 16, padding: '0 0 24px', overflow: 'hidden', flex: '1 1 100%',
  maxWidth: 480, width: '100%', boxSizing: 'border-box', boxShadow: '0 24px 60px rgba(0,24,72,0.18)',
  border: '1px solid rgba(178,197,255,0.15)', alignSelf: 'center',
};
const codeHeader = { background: 'rgba(255,255,255,0.05)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 };
const codeDot = (c) => ({ width: 12, height: 12, borderRadius: '50%', background: c, display: 'inline-block' });
const codePre = { margin: '0 24px', fontFamily: 'monospace', fontSize: 13, lineHeight: 1.7, overflowX: 'auto', color: 'rgba(255,255,255,0.8)', boxSizing: 'border-box' };

// const statsBand = {
//   background: '#fff', padding: '48px 5%',
//   display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 32,
//   borderTop: `1px solid ${C.outlineVar}30`, borderBottom: `1px solid ${C.outlineVar}30`,
// };
// const statItem = { textAlign: 'left', padding: '0 16px' };
// const statNum = { fontFamily: FONT.headline, fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: C.primaryCont, lineHeight: 1 };
// const statLabel = { fontFamily: FONT.headline, fontWeight: 700, fontSize: 14, color: C.onBg, margin: '6px 0 4px' };

const sectionBase = { padding: '96px 5%' };
const sectionLabel = {
  fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
  color: C.primaryCont, fontWeight: 700, marginBottom: 14,
  display: 'flex', alignItems: 'center', gap: 10,
};
const h2Style = {
  fontFamily: FONT.headline, fontWeight: 800, fontSize: 'clamp(28px,3.5vw,48px)',
  lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16, color: C.onBg,
};
const bodyText = { fontSize: 15, color: C.onSurfaceVar, lineHeight: 1.8, fontWeight: 300, maxWidth: 480 };
const twoCol = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' };

const infoCard = (i) => ({
  background: C.white, borderRadius: 16, padding: 28,
  marginBottom: i === 0 ? 20 : 0, marginLeft: i === 1 ? 48 : 0,
  boxShadow: '0 4px 24px rgba(0,24,72,0.06)', border: `1px solid ${C.outlineVar}50`,
});
const cardIconWrap = {
  width: 44, height: 44, borderRadius: 12, background: 'rgba(0,82,204,0.08)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

const servicesGrid = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20,
};
const serviceCard = {
  background: C.white, borderRadius: 16, padding: 28,
  border: `1px solid ${C.outlineVar}50`, display: 'flex', flexDirection: 'column',
  transition: 'all 0.25s', cursor: 'default',
};
const iconWrap = {
  width: 44, height: 44, borderRadius: 12, background: 'rgba(0,82,204,0.08)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
};

const ctaSection = {
  background: `linear-gradient(135deg, ${C.primary} 0%, #001848 100%)`,
  padding: '120px 5%', position: 'relative', overflow: 'hidden',
};
const ctaGlow = {
  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
  width: '60vw', height: '60vw', borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
  pointerEvents: 'none',
};
