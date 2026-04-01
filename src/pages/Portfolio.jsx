import { useState } from 'react';
import { C, FONT, GRADIENT, SHADOW } from '../styles/theme';
import FadeIn from '../components/FadeIn';
import { ArrowUpRight, Monitor, Brain, Globe, Database } from 'lucide-react';

const FILTERS = ['All', 'Windows Apps', 'Agentic AI', 'CRM/ERP', 'Web'];

const PROJECTS = [
  {
    tag: 'Agentic AI',
    title: 'SurgeAI — Autonomous Workflow Engine',
    desc: 'Multi-agent orchestration system that automates complex enterprise approval workflows, reducing manual steps by 80%.',
    metrics: ['80% faster approvals', '20+ integrations', '99.9% uptime'],
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&auto=format&fit=crop',
    color: '#003d9b',
  },
  {
    tag: 'Windows Apps',
    title: 'DataVault — Secure Offline-First System',
    desc: 'High-performance WPF desktop application for regulated industries. End-to-end encryption with military-grade key management.',
    metrics: ['0ms latency', 'AES-256 encryption', '5-star rating'],
    img: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop',
    color: '#7b2600',
  },
  {
    tag: 'CRM/ERP',
    title: 'NexaFlow — Enterprise CRM Platform',
    desc: 'Fully custom CRM built for a multinational logistics firm. AI-powered lead scoring, pipeline automation, and real-time dashboards.',
    metrics: ['40% more conversions', '500+ seats', 'Real-time sync'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    color: '#1a5276',
  },
  {
    tag: 'Agentic AI',
    title: 'OptiMind — Decision Intelligence System',
    desc: 'ML-powered decision engine for a financial services firm. Processes thousands of loan applications with full explainability and audit trails.',
    metrics: ['10k+ decisions/day', '95% accuracy', 'Full auditability'],
    img: 'https://images.unsplash.com/photo-1625314887424-9f190599d56d?q=80&w=1200&auto=format&fit=crop',
    color: '#003d9b',
  },
  {
    tag: 'Web',
    title: 'MedTrack — Healthcare Analytics Portal',
    desc: 'Real-time analytics dashboard for hospital networks. HIPAA-compliant data pipeline with AI-powered anomaly detection.',
    metrics: ['HIPAA compliant', '50ms queries', '12 hospitals'],
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    color: '#1a5276',
  },
  {
    tag: 'Windows Apps',
    title: 'FleetCommand — Industrial Control System',
    desc: 'Mission-critical Windows application for fleet management. Real-time telemetry, predictive maintenance alerts, and route optimization.',
    metrics: ['Real-time telemetry', '30% cost savings', '500+ vehicles'],
    img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=1200&auto=format&fit=crop',
    color: '#7b2600',
  },
];

const ICON_MAP = { 'Windows Apps': <Monitor size={14} />, 'Agentic AI': <Brain size={14} />, 'Web': <Globe size={14} />, 'CRM/ERP': <Database size={14} /> };

export default function Portfolio({ setPage, setModalOpen }) {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.tag === active);

  return (
    <div style={{ background: C.bg, fontFamily: FONT.body }}>

      {/* HERO */}
      <section style={pageHero}>
        <div style={heroBg} />
        <FadeIn>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={chip}>Portfolio Gallery</div>
            <h1 style={h1Sty}>
              Selected work from our<br />
              <span style={{ background: GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                engineering practice.
              </span>
            </h1>
            <p style={heroSub}>
              From mission-critical desktop applications to groundbreaking AI systems —
              every project is a surgical procedure, executed with precision.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* FILTER BAR */}
      <div style={filterBar}>
        {FILTERS.map(f => (
          <button key={f} style={{ ...filterBtn, ...(active === f ? filterActive : {}) }} onClick={() => setActive(f)}>
            {f}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <section style={{ padding: '48px 5% 96px' }}>
        <div style={grid}>
          {filtered.map((proj, i) => (
            <FadeIn key={proj.title} delay={i * 80}>
              <div style={card}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = SHADOW; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Image */}
                <div style={imgWrap}>
                  <img src={proj.img} alt={proj.title} style={imgSty} loading="lazy" />
                  <div style={imgOverlay(proj.color)} />
                  <span style={tagBadge}>
                    {ICON_MAP[proj.tag]} &nbsp;{proj.tag}
                  </span>
                </div>
                {/* Info */}
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontFamily: FONT.headline, fontWeight: 700, fontSize: 17, color: C.onBg, marginBottom: 8, lineHeight: 1.3 }}>{proj.title}</h3>
                  <p style={{ fontSize: 13, color: C.onSurfaceVar, lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{proj.desc}</p>
                  {/* Metrics */}
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                    {proj.metrics.map(m => (
                      <span key={m} style={metricChip}>{m}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.primaryCont, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                    View Case Study <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 20px', color: C.onSurfaceVar }}>
            No projects in this category yet. <button style={{ color: C.primaryCont, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }} onClick={() => setActive('All')}>View All →</button>
          </div>
        )}
      </section>

      {/* STATS ROW */}
      <section style={{ background: C.primary, padding: '64px 5%' }}>
        <FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 40, textAlign: 'center' }}>
            {[['50+', 'Projects Delivered'], ['20+', 'Global Clients'], ['4+', 'Years of Excellence'], ['100%', 'Client Retention']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: FONT.headline, fontWeight: 800, fontSize: 'clamp(32px,4vw,52px)', color: '#fff', lineHeight: 1, marginBottom: 8 }}>{n}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>{l}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section style={{ padding: '96px 5%', background: C.surface, textAlign: 'center' }}>
        <FadeIn>
          <div style={chip}>Start Your Project</div>
          <h2 style={{ ...h2Sty, maxWidth: 540, margin: '0 auto 16px' }}>
            Ready to add your project to this gallery?
          </h2>
          <p style={{ ...heroSub, margin: '0 auto 36px', maxWidth: 440 }}>
            Tell us about your vision. We'll engineer it with surgical precision.
          </p>
          <button style={btnPrimary} onClick={() => setModalOpen(true)}>Start a Project</button>
        </FadeIn>
      </section>
    </div>
  );
}

const pageHero  = { padding: '60px 5% 80px', background: C.surface, position: 'relative', overflow: 'hidden' };
const heroBg    = { position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 80% at 70% 40%, rgba(0,82,204,0.05) 0%, transparent 70%)', pointerEvents:'none' };
const chip      = { fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:C.primaryCont, fontWeight:700, marginBottom:16 };
const h1Sty     = { fontFamily:FONT.headline, fontWeight:800, fontSize:'clamp(36px,5vw,68px)', lineHeight:1.05, letterSpacing:'-0.02em', color:C.onBg, marginBottom:20 };
const heroSub   = { fontSize:16, color:C.onSurfaceVar, maxWidth:520, lineHeight:1.8, fontWeight:300 };
const h2Sty     = { fontFamily:FONT.headline, fontWeight:800, fontSize:'clamp(26px,3vw,44px)', lineHeight:1.1, letterSpacing:'-0.02em', color:C.onBg, marginBottom:16 };
const filterBar = { padding:'20px 5%', background:'#fff', borderBottom:`1px solid ${C.outlineVar}40`, display:'flex', gap:8, flexWrap:'wrap', position:'sticky', top:72, zIndex:100, backdropFilter:'blur(20px)' };
const filterBtn = { padding:'8px 18px', borderRadius:100, border:`1px solid ${C.outlineVar}60`, background:'transparent', color:C.onSurfaceVar, fontSize:13, fontWeight:500, cursor:'pointer', fontFamily:FONT.body, transition:'all 0.2s' };
const filterActive = { background:`rgba(0,82,204,0.08)`, borderColor:C.primaryCont, color:C.primaryCont, fontWeight:600 };
const grid      = { display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:24 };
const card      = { background:'#fff', borderRadius:16, overflow:'hidden', border:`1px solid ${C.outlineVar}40`, transition:'all 0.25s' };
const imgWrap   = { position:'relative', height:220, overflow:'hidden' };
const imgSty    = { width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s' };
const imgOverlay= (c) => ({ position:'absolute', inset:0, background:`linear-gradient(to top, ${c}CC 0%, transparent 50%)` });
const tagBadge  = { position:'absolute', top:14, left:14, background:'rgba(255,255,255,0.95)', border:'none', borderRadius:100, padding:'4px 10px', fontSize:11, color:C.primary, fontWeight:700, display:'inline-flex', alignItems:'center', letterSpacing:'0.03em' };
const metricChip= { background:`rgba(0,82,204,0.06)`, border:`1px solid rgba(0,82,204,0.12)`, borderRadius:100, padding:'4px 10px', fontSize:11, color:C.primaryCont, fontWeight:500 };
const btnPrimary= { background:GRADIENT, color:'#fff', border:'none', cursor:'pointer', padding:'13px 32px', borderRadius:8, fontSize:15, fontWeight:600, fontFamily:FONT.body, boxShadow:'0 4px 14px rgba(0,61,155,0.25)', transition:'all 0.25s' };
