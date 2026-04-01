import { C, FONT, GRADIENT, SHADOW } from '../styles/theme';
import FadeIn from '../components/FadeIn';
import { Monitor, Database, CloudCog, ArrowUpRight, CheckCircle, Shield, Cpu, Network } from 'lucide-react';

const RESP_CSS = `
  @media (max-width: 860px) {
    .svc-detail-grid { grid-template-columns: 1fr !important; direction: ltr !important; gap: 40px !important; }
    .svc-detail-grid > div { direction: ltr !important; }
    .code-resp { max-width: 100% !important; width: 100% !important; margin-top: 32px !important; }
    .code-resp pre { padding: 16px !important; margin: 0 !important; }
  }
`;

const SERVICES_DETAIL = [
  {
    icon: <Monitor size={28} color={C.primaryCont} />,
    title: 'Windows Desktop Development',
    sub: 'Native Performance · Multi-threaded Processing',
    desc: 'High-performance native applications optimized for Microsoft environments. We leverage WPF and .NET Core for seamless OS integration. Zero-lag execution. High-fidelity interfaces.',
    features: ['Native Performance', 'Multi-threaded Processing', 'WPF & .NET Core', 'Low-latency Execution'],
    code: '// Lead Prioritization Logic\nif (lead.score > 85) {\n  dispatch.notify("High Priority");\n  crm.elevate(lead.id);\n}',
  },
  {
    icon: <Database size={28} color={C.primaryCont} />,
    title: 'Custom CRM Solutions',
    sub: 'Bespoke · Scalable · Domain-tailored',
    desc: 'Customer relationships shouldn\'t fit into a box. We build bespoke management platforms tailored to your specific sales cycle and touchpoints. Every workflow, your way.',
    features: ['Pipeline Automation', 'Custom Reporting', 'Lead Scoring', 'Multi-channel Sync'],
    code: '// Pipeline Automation\nconst pipeline = await CRM.build({\n  stages: customWorkflow,\n  scoring: AIModel.v2,\n  notify: realTime\n});',
  },
  {
    icon: <CloudCog size={28} color={C.primaryCont} />,
    title: 'Enterprise ERP Systems',
    sub: 'Microservices · SecOps · Big Data',
    desc: 'Centralize your resources, logistics, and finance into a single, cohesive source of truth designed for scale. Decoupled architectures for modular growth.',
    features: ['Microservices Architecture', 'SecOps First', 'Big Data Rails', 'API Ecosystems'],
    code: '// ERP Core Module\nconst erp = await Enterprise.init({\n  modules: [\'finance\',\'hr\',\'ops\'],\n  scale: \'unlimited\',\n  security: \'enterprise-grade\'\n});',
  },
];

const PROCESS = [
  { n: '01', name: 'Diagnostic Discovery', desc: 'We dive deep into your existing tech debt and business constraints before writing a single line of code.' },
  { n: '02', name: 'Architectural Blueprint', desc: 'Designing the skeletal structure of your application to ensure long-term scalability and maintenance.' },
  { n: '03', name: 'Precision Execution', desc: 'Iterative sprints with constant feedback loops and rigorous automated testing at every phase.' },
  { n: '04', name: 'Deploy & Scale', desc: 'Monitoring, optimisation, and continuous delivery. We stay in the trenches long after launch.' },
];

const PILLARS = [
  { icon: <Shield size={20} color={C.primaryCont} />, title: 'SecOps First', desc: 'Built-in security audits and encryption protocols that exceed enterprise-grade standards.' },
  { icon: <Network size={20} color={C.primaryCont} />, title: 'Microservices', desc: 'Decoupled architectures for modular growth and resilient systems that never go down.' },
  { icon: <Cpu size={20} color={C.primaryCont} />, title: 'Big Data Rails', desc: 'Infrastructure optimized for processing millions of data points with sub-second latency.' },
  { icon: <CloudCog size={20} color={C.primaryCont} />, title: 'API Ecosystems', desc: 'Robust endpoints and documentation that allow your tools to talk to each other seamlessly.' },
];

export default function Services({ setPage, setModalOpen }) {
  return (
    <div style={{ background: C.bg, fontFamily: FONT.body }}>
      <style dangerouslySetInnerHTML={{ __html: RESP_CSS }} />
      {/* PAGE HERO */}
      <section style={pageHero}>
        <div style={heroGlow} />
        <FadeIn>
          <div style={{ position:'relative', zIndex:1, maxWidth:680 }}>
            <div style={chip}>Services</div>
            <h1 style={h1Sty}>
              We architect robust,<br />
              <span style={{ background:GRADIENT, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                scalable software solutions.
              </span>
            </h1>
            <p style={heroSub}>
              We architect robust, scalable software solutions that act as the nervous system for your
              business operations. Precision in every line of code.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* SERVICE DETAIL CARDS */}
      {SERVICES_DETAIL.map((svc, i) => (
        <section key={i} style={{ ...secBase, background: i % 2 === 1 ? C.surfaceLow : C.surface }}>
          <FadeIn>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center', ...(i%2===1 ? {direction:'rtl'} : {}) }}>
              <div style={{ direction:'ltr' }}>
                <div style={iconBox}>{svc.icon}</div>
                <div style={subLabel}>{svc.sub}</div>
                <h2 style={h2Style}>{svc.title}</h2>
                <p style={bodyText}>{svc.desc}</p>
                <div style={{ marginTop:24 }}>
                  {svc.features.map(f => (
                    <div key={f} style={{ display:'flex', gap:10, marginBottom:12, alignItems:'center' }}>
                      <CheckCircle size={16} color={C.primaryCont} />
                      <span style={{ fontSize:14, color:C.onSurfaceVar, fontWeight:400 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button style={btnPrimary} onClick={() => setModalOpen(true)}>
                  Start a Project <ArrowUpRight size={16} style={{ marginLeft:6, verticalAlign:'middle' }} />
                </button>
              </div>
              <div className="code-resp" style={{ direction:'ltr', width: '100%', maxWidth: '100%' }}>
                <div style={codeBlock}>
                  <div style={codeBar}>
                    <span style={dot('#ff5f57')} /><span style={dot('#febc2e')} /><span style={dot('#28c840')} />
                    <span style={{ marginLeft:8, fontSize:11, color:'rgba(255,255,255,0.35)', fontFamily:'monospace' }}>logic.js</span>
                  </div>
                  <pre style={codePre}><code style={{ color:'#b2c5ff' }}>{svc.code}</code></pre>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      ))}

      {/* PILLARS */}
      <section style={{ ...secBase, background:'#fff' }}>
        <FadeIn>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <div style={{ ...chip, display:'inline-block' }}>Our Pillars</div>
            <h2 style={{ ...h2Style, textAlign:'center' }}>Engineering foundations<br />that never compromise.</h2>
          </div>
        </FadeIn>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:20 }}>
          {PILLARS.map((p, i) => (
            <FadeIn key={i} delay={i*80}>
              <div style={pillarCard}
                onMouseEnter={e => { e.currentTarget.style.boxShadow=SHADOW; e.currentTarget.style.transform='translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)'; }}
              >
                <div style={iconSmall}>{p.icon}</div>
                <h3 style={{ fontFamily:FONT.headline, fontWeight:700, fontSize:16, color:C.onBg, margin:'14px 0 8px' }}>{p.title}</h3>
                <p style={{ fontSize:13, color:C.onSurfaceVar, lineHeight:1.7, fontWeight:300 }}>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ ...secBase, background:C.surfaceLow }}>
        <FadeIn>
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <div style={{ ...chip, display:'inline-block' }}>Our Process</div>
            <h2 style={{ ...h2Style, textAlign:'center' }}>Four phases. Zero ambiguity.</h2>
            <p style={{ ...bodyText, margin:'0 auto', textAlign:'center' }}>Every project follows the same disciplined surgical path.</p>
          </div>
        </FadeIn>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:32, position:'relative' }}>
          {PROCESS.map((step, i) => (
            <FadeIn key={i} delay={i*100}>
              <div style={processCard}>
                <div style={processNum}>{step.n}</div>
                <h3 style={{ fontFamily:FONT.headline, fontWeight:700, fontSize:16, color:C.onBg, marginBottom:10 }}>{step.name}</h3>
                <p style={{ fontSize:13, color:C.onSurfaceVar, lineHeight:1.7, fontWeight:300 }}>{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={ctaSec}>
        <FadeIn>
          <div style={{ textAlign:'center', maxWidth:560, margin:'0 auto' }}>
            <h2 style={{ fontFamily:FONT.headline, fontWeight:800, fontSize:'clamp(28px,3.5vw,48px)', color:'#fff', lineHeight:1.1, marginBottom:16 }}>
              Join the forward-thinking enterprises that trust CodeSurgeons.
            </h2>
            <p style={{ fontSize:15, color:'rgba(255,255,255,0.65)', marginBottom:36, fontWeight:300, lineHeight:1.8 }}>
              Engineering software with the precision and care of a surgical procedure. Built for the modern enterprise.
            </p>
            <button style={{ ...btnPrimary, background:'#fff', color:C.primary }} onClick={() => setModalOpen(true)}>
              Start Your Project
            </button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

const pageHero = { padding:'60px 5% 100px', background:C.surface, position:'relative', overflow:'hidden' };
const heroGlow = { position:'absolute', top:0, right:0, width:'50vw', height:'100%', background:'radial-gradient(circle at 80% 50%, rgba(0,82,204,0.06) 0%, transparent 70%)', pointerEvents:'none' };
const secBase  = { padding:'96px 5%' };
const h1Sty    = { fontFamily:FONT.headline, fontWeight:800, fontSize:'clamp(38px,5vw,68px)', lineHeight:1.05, letterSpacing:'-0.02em', color:C.onBg, marginBottom:20 };
const heroSub  = { fontSize:16, color:C.onSurfaceVar, maxWidth:520, lineHeight:1.8, fontWeight:300 };
const chip     = { fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:C.primaryCont, fontWeight:700, marginBottom:16 };
const subLabel = { fontSize:13, color:C.primaryCont, fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:10 };
const h2Style  = { fontFamily:FONT.headline, fontWeight:800, fontSize:'clamp(26px,3vw,42px)', lineHeight:1.1, letterSpacing:'-0.02em', marginBottom:16, color:C.onBg };
const bodyText = { fontSize:15, color:C.onSurfaceVar, lineHeight:1.8, fontWeight:300, marginBottom:8 };
const iconBox  = { width:56, height:56, borderRadius:14, background:'rgba(0,82,204,0.08)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16 };
const iconSmall= { width:44, height:44, borderRadius:12, background:'rgba(0,82,204,0.08)', display:'flex', alignItems:'center', justifyContent:'center' };
const btnPrimary = { background:GRADIENT, color:'#fff', border:'none', cursor:'pointer', padding:'13px 28px', borderRadius:8, fontSize:15, fontWeight:600, fontFamily:FONT.body, boxShadow:'0 4px 14px rgba(0,61,155,0.2)', transition:'all 0.25s', marginTop:24, display:'inline-flex', alignItems:'center' };
const codeBlock= { background:'linear-gradient(135deg,#0a1628 0%,#0d1f3c 100%)', borderRadius:16, overflow:'hidden', boxShadow:'0 20px 50px rgba(0,24,72,0.2)', border:'1px solid rgba(178,197,255,0.12)', width: '100%', boxSizing: 'border-box' };
const codeBar  = { background:'rgba(255,255,255,0.04)', padding:'12px 16px', display:'flex', alignItems:'center', gap:6 };
const dot      = (c) => ({ width:12, height:12, borderRadius:'50%', background:c, display:'inline-block' });
const codePre  = { padding:'20px 24px', fontFamily:'monospace', fontSize:13, lineHeight:1.7, color:'rgba(255,255,255,0.8)', overflowX:'auto', margin:0, boxSizing: 'border-box' };
const pillarCard = { background:C.white, borderRadius:16, padding:28, border:`1px solid ${C.outlineVar}50`, transition:'all 0.25s' };
const processCard= { background:C.white, borderRadius:16, padding:28, border:`1px solid ${C.outlineVar}50`, position:'relative', paddingTop:44 };
const processNum = { position:'absolute', top:-16, left:24, fontFamily:FONT.headline, fontWeight:800, fontSize:48, color:`${C.primaryCont}14`, lineHeight:1 };
const ctaSec   = { background:`linear-gradient(135deg,${C.primary} 0%,#001848 100%)`, padding:'100px 5%' };
