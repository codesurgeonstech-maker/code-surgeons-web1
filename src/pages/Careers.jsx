import { C, FONT, GRADIENT, SHADOW } from '../styles/theme';
import FadeIn from '../components/FadeIn';
import { ArrowUpRight, MapPin, Clock, Users, Zap, Brain, Code2, Globe } from 'lucide-react';

const OPENINGS = [
  {
    title: 'Senior AI/ML Engineer',
    dept: 'Agentic AI',
    type: 'Full-time · Remote',
    location: 'Global',
    icon: <Brain size={20} color={C.primaryCont} />,
    tags: ['Python', 'LangChain', 'LangGraph', 'GPT-4', 'Vector DBs'],
    desc: 'Design and implement production-ready agentic AI pipelines. You\'ll architect multi-agent orchestration systems, integrate LLMs with enterprise data, and obsess over reliability and performance.',
  },
  {
    title: '.NET / WPF Desktop Engineer',
    dept: 'Windows Apps',
    type: 'Full-time · Hybrid',
    location: 'Chennai, India',
    icon: <Code2 size={20} color={C.primaryCont} />,
    tags: ['C#', '.NET 8', 'WPF', 'MVVM', 'SQL Server'],
    desc: 'Build high-performance native Windows applications for enterprise clients. Deep WPF expertise, a passion for native performance, and clean architectural thinking are essential.',
  },
  {
    title: 'Full-Stack Web Engineer',
    dept: 'Web Development',
    type: 'Full-time · Remote',
    location: 'Global',
    icon: <Globe size={20} color={C.primaryCont} />,
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    desc: 'Architect and build scalable web applications and APIs. You care as much about performance and clean abstractions as you do about shipping features that work in production.',
  },
  {
    title: 'CRM/ERP Solutions Architect',
    dept: 'Enterprise Software',
    type: 'Full-time · Hybrid',
    location: 'Chennai, India',
    icon: <Zap size={20} color={C.primaryCont} />,
    tags: ['CRM Design', 'ERP', 'Business Analysis', 'SQL', 'Process Mapping'],
    desc: 'Lead the discovery and architectural design phase for enterprise CRM and ERP implementations. You translate complex business logic into elegant, scalable system designs.',
  },
];

const VALUES = [
  { icon: <Brain size={22} color={C.primaryCont} />, title: 'AI-First Thinking', desc: 'We embed intelligence into everything — not as a feature, but as the foundation of every architecture decision.' },
  { icon: <Zap size={22} color={C.primaryCont} />, title: 'Surgical Precision', desc: 'We don\'t rush. We plan meticulously, execute carefully, and hold ourselves to an obsessively high standard.' },
  { icon: <Users size={22} color={C.primaryCont} />, title: 'Small, Elite Teams', desc: 'No bloated hierarchies. You work directly with the people who make the decisions — and your impact is felt immediately.' },
  { icon: <Globe size={22} color={C.primaryCont} />, title: 'Global Impact', desc: 'Our software is used by teams across 4 continents. The scale of impact is real from day one.' },
];

export default function Careers({ setPage }) {
  return (
    <div style={{ background: C.bg, fontFamily: FONT.body }}>

      {/* HERO */}
      <section style={darkHero}>
        <div style={gridBg} />
        <div style={glow} />
        <FadeIn>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
            <div style={badge}>
              <span style={greenDot} /> We're Hiring
            </div>
            <h1 style={h1Sty}>
              Join the Surge.<br />
              <span style={{ background: 'linear-gradient(90deg,#b2c5ff,#7ba8ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Engineer the future.
              </span>
            </h1>
            <p style={heroSub}>
              Architecting the future. Join our engineering elite. We're looking for exceptional engineers who believe that software should be built with surgical precision — no shortcuts, no bloat, no compromise.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button style={btnLight} onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}>
                View Open Roles <ArrowUpRight size={16} style={{ marginLeft: 6, verticalAlign: 'middle' }} />
              </button>
              <button style={btnGhost} onClick={() => setPage('contact')}>Send Open Application</button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* VALUES */}
      <section style={{ padding: '96px 5%', background: C.surface }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={chip}>Why CodeSurgeons</div>
            <h2 style={h2Sty}>We build different.<br />We hire different.</h2>
          </div>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
          {VALUES.map((v, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div style={valueCard}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = SHADOW; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={iconBox}>{v.icon}</div>
                <h3 style={{ fontFamily: FONT.headline, fontWeight: 700, fontSize: 16, color: C.onBg, margin: '14px 0 8px' }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: C.onSurfaceVar, lineHeight: 1.7, fontWeight: 300 }}>{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="openings" style={{ padding: '96px 5%', background: C.surfaceLow }}>
        <FadeIn>
          <div style={{ marginBottom: 56 }}>
            <div style={chip}>Open Positions</div>
            <h2 style={h2Sty}>Current Openings</h2>
            <p style={{ fontSize: 15, color: C.onSurfaceVar, fontWeight: 300, lineHeight: 1.8, maxWidth: 480 }}>
              We hire for precision, curiosity, and long-term thinking — not just skills on a resume.
            </p>
          </div>
        </FadeIn>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {OPENINGS.map((job, i) => (
            <FadeIn key={job.title} delay={i * 80}>
              <div style={jobCard}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${C.primaryCont}40`; e.currentTarget.style.boxShadow = SHADOW; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${C.outlineVar}50`; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                      <div style={jobIcon}>{job.icon}</div>
                      <div>
                        <div style={{ fontFamily: FONT.headline, fontWeight: 700, fontSize: 18, color: C.onBg, lineHeight: 1.2 }}>{job.title}</div>
                        <div style={{ fontSize: 12, color: C.primaryCont, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 2 }}>{job.dept}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: C.onSurfaceVar, lineHeight: 1.7, fontWeight: 300, maxWidth: 560, marginBottom: 14 }}>{job.desc}</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {job.tags.map(t => <span key={t} style={techTag}>{t}</span>)}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end', marginBottom: 16 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: C.onSurfaceVar }}>
                        <Clock size={13} /> {job.type}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: C.onSurfaceVar }}>
                        <MapPin size={13} /> {job.location}
                      </span>
                    </div>
                    <button style={applyBtn} onClick={() => setPage('contact')}>
                      Apply Now <ArrowUpRight size={14} style={{ marginLeft: 4 }} />
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg,${C.primary} 0%,#001848 100%)`, padding: '100px 5%' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto' }}>
            <h2 style={{ fontFamily: FONT.headline, fontWeight: 800, fontSize: 'clamp(28px,3.5vw,48px)', color: '#fff', lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.02em' }}>
              Don't see your role? Send an open application.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', marginBottom: 36, fontWeight: 300, lineHeight: 1.8 }}>
              We're always looking for exceptional talent. If you're exceptional, we'll find a place for you.
            </p>
            <button style={{ background: '#fff', color: C.primary, border: 'none', cursor: 'pointer', padding: '13px 28px', borderRadius: 8, fontSize: 15, fontWeight: 700, fontFamily: FONT.body }} onClick={() => setPage('contact')}>
              Get in Touch
            </button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

const darkHero  = { padding:'60px 5% 100px',background:'linear-gradient(160deg,#040e1e 0%,#071428 60%,#0a1e3c 100%)',position:'relative',overflow:'hidden',minHeight:'70vh' };
const gridBg    = { position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(178,197,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(178,197,255,0.03) 1px,transparent 1px)',backgroundSize:'60px 60px',pointerEvents:'none' };
const glow      = { position:'absolute',top:'-20%',right:'-10%',width:'60vw',height:'60vw',borderRadius:'50%',background:'radial-gradient(circle,rgba(0,82,204,0.15) 0%,transparent 70%)',pointerEvents:'none' };
const badge     = { display:'inline-flex',alignItems:'center',gap:8,background:'rgba(178,197,255,0.1)',border:'1px solid rgba(178,197,255,0.2)',padding:'6px 14px',borderRadius:100,fontSize:12,color:'#b2c5ff',marginBottom:24,letterSpacing:'0.08em',textTransform:'uppercase',fontWeight:600 };
const greenDot  = { width:6,height:6,borderRadius:'50%',background:'#28c840',display:'inline-block' };
const h1Sty     = { fontFamily:FONT.headline,fontWeight:800,fontSize:'clamp(36px,5vw,68px)',lineHeight:1.05,letterSpacing:'-0.02em',color:'#fff',marginBottom:24 };
const heroSub   = { fontSize:16,color:'rgba(255,255,255,0.6)',maxWidth:560,marginBottom:36,lineHeight:1.8,fontWeight:300 };
const btnLight  = { background:'#fff',color:C.primary,border:'none',cursor:'pointer',padding:'13px 28px',borderRadius:8,fontSize:15,fontWeight:700,fontFamily:FONT.body,transition:'all 0.25s',display:'inline-flex',alignItems:'center' };
const btnGhost  = { background:'transparent',color:'rgba(255,255,255,0.75)',border:'1px solid rgba(255,255,255,0.2)',cursor:'pointer',padding:'12px 28px',borderRadius:8,fontSize:15,fontWeight:500,fontFamily:FONT.body };
const chip      = { fontSize:11,letterSpacing:'0.12em',textTransform:'uppercase',color:C.primaryCont,fontWeight:700,marginBottom:14 };
const h2Sty     = { fontFamily:FONT.headline,fontWeight:800,fontSize:'clamp(26px,3vw,44px)',lineHeight:1.1,letterSpacing:'-0.02em',color:C.onBg,marginBottom:16 };
const valueCard = { background:'#fff',borderRadius:16,padding:28,border:`1px solid ${C.outlineVar}50`,transition:'all 0.25s' };
const iconBox   = { width:48,height:48,borderRadius:12,background:'rgba(0,82,204,0.08)',display:'flex',alignItems:'center',justifyContent:'center' };
const jobCard   = { background:'#fff',borderRadius:16,padding:28,border:`1px solid ${C.outlineVar}50`,transition:'all 0.25s' };
const jobIcon   = { width:44,height:44,borderRadius:12,background:'rgba(0,82,204,0.08)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 };
const techTag   = { background:`rgba(0,82,204,0.07)`,border:`1px solid rgba(0,82,204,0.12)`,borderRadius:100,padding:'4px 10px',fontSize:11,color:C.primaryCont,fontWeight:500 };
const applyBtn  = { background:GRADIENT,color:'#fff',border:'none',cursor:'pointer',padding:'10px 20px',borderRadius:8,fontSize:14,fontWeight:600,fontFamily:FONT.body,display:'inline-flex',alignItems:'center',boxShadow:'0 4px 14px rgba(0,61,155,0.25)' };
