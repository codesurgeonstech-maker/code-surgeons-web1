import { C, FONT, SHADOW } from '../styles/theme';
import FadeIn from '../components/FadeIn';
import { Brain, Workflow, Network, Cpu, ArrowUpRight, Zap, GitBranch, MessageSquare } from 'lucide-react';

const CAPABILITIES = [
  { icon: <Brain size={24} color={C.primaryCont} />, title: 'Autonomous Decision Agents', desc: 'AI agents that analyze, reason, and act — without constant human prompting. They understand context, maintain state, and execute multi-step workflows end to end.' },
  { icon: <Workflow size={24} color={C.primaryCont} />, title: 'Workflow Automation', desc: 'Map your business processes to intelligent pipelines. Our agents handle exceptions, escalate intelligently, and learn from outcomes — continuously improving.' },
  { icon: <Network size={24} color={C.primaryCont} />, title: 'Multi-Agent Orchestration', desc: 'Coordinate fleets of specialized agents. Supervisor agents delegate tasks, route decisions, and synthesize results from parallel agent threads.' },
  { icon: <Cpu size={24} color={C.primaryCont} />, title: 'LLM & RAG Integration', desc: 'Deep integration with GPT-4, Claude, Gemini and custom fine-tuned models. Retrieval-Augmented Generation for grounded, accurate enterprise knowledge.' },
  { icon: <GitBranch size={24} color={C.primaryCont} />, title: 'Decision Systems', desc: 'Complex rule engines augmented by machine learning. From fraud detection to credit scoring — decisions made with surgical precision and full auditability.' },
  { icon: <MessageSquare size={24} color={C.primaryCont} />, title: 'AI-Powered CoPilots', desc: 'Embed intelligent co-pilots into your existing products. Context-aware assistants that know your domain, your data, and your users.' },
];

const TECH_STACK = ['OpenAI GPT-4', 'Claude 3.5', 'Gemini Pro', 'LangChain', 'LangGraph', 'CrewAI', 'Pinecone', 'Weaviate', 'FastAPI', 'Python', 'Vector DBs', 'RAG Pipelines'];

const PROCESS_AI = [
  { n: '01', title: 'Domain Mapping', desc: 'We audit your workflows, data sources, and decision points. Understanding your domain is the foundation of precise AI design.' },
  { n: '02', title: 'Agent Architecture', desc: 'Designing the agent graph: which models, which tools, how they communicate. Blueprint for intelligence before a single call.' },
  { n: '03', title: 'Precision Build', desc: 'Coding the agents, integrating tools, connecting data pipelines. Rigorous evaluation at each milestone.' },
  { n: '04', title: 'Deploy & Monitor', desc: 'Production deployment with observability dashboards, latency monitoring, and continuous improvement loops.' },
];

const CODE_AGENT = `# CodeSurgeon Agentic Pipeline
from langgraph import AgentGraph, Tool

class SurgeonAgent:
    def __init__(self, domain: str):
        self.graph = AgentGraph()
        self.tools = Tool.load(domain)
    
    async def execute(self, task: str):
        diagnosis = await self.analyze(task)
        plan = self.architect(diagnosis)
        
        # Multi-step surgical execution
        for step in plan.steps:
            result = await self.graph.run(
                agent=step.agent,
                tools=self.tools,
                context=diagnosis.context
            )
        return result.synthesize()`;

export default function AgenticAI({ setPage, setModalOpen }) {
  return (
    <div style={{ background: C.bg, fontFamily: FONT.body }}>

      {/* HERO — dark themed for AI page */}
      <section style={aiHero}>
        <div style={gridOverlay} />
        <div style={glow1} />
        <div style={glow2} />
        <FadeIn>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
            <div style={badge}>
              <span style={badgeDot} /> Agentic AI Solutions
            </div>
            <h1 style={h1Sty}>
              Developing autonomous agents that{' '}
              <span style={{ background: 'linear-gradient(90deg,#b2c5ff,#7ba8ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                understand, reason, and execute.
              </span>
            </h1>
            <p style={heroSub}>
              We build AI agents that don't just answer — they operate. From intelligent workflow automation
              to multi-step decision systems, we're engineering the next layer of software.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button style={btnLight} onClick={() => setModalOpen(true)}>
                Build Your Agent <ArrowUpRight size={16} style={{ marginLeft: 6, verticalAlign: 'middle' }} />
              </button>
              <button style={btnGhost}>View AI Portfolio</button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* LIVE AGENT VISUAL */}
      <section style={{ background: 'linear-gradient(180deg,#040e1e 0%,#071428 100%)', padding: '0 5% 80px' }}>
        <FadeIn>
          <style>{`@media (max-width: 768px) { .code-resp-ai { max-width: 100% !important; border-radius: 12px !important; } .code-resp-ai pre { padding: 16px !important; } }`}</style>
          <div className="code-resp-ai" style={codeBlockWrap}>
            <div style={codeBar}>
              <span style={dot('#ff5f57')} /><span style={dot('#febc2e')} /><span style={dot('#28c840')} />
              <span style={{ marginLeft: 10, fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
                surgery_agent.py
              </span>
              <span style={{ marginLeft: 'auto', fontSize: 11, color: '#28c840', fontFamily: 'monospace' }}>● RUNNING</span>
            </div>
            <pre style={codePre}><code style={{ color: '#b2c5ff' }}>{CODE_AGENT}</code></pre>
          </div>
        </FadeIn>
      </section>

      {/* CAPABILITIES GRID */}
      <section style={{ padding: '96px 5%', background: C.surface }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={chip}>What We Build</div>
            <h2 style={h2Sty}>Complete Agentic AI solutions<br />for the modern enterprise.</h2>
            <p style={{ ...bodyTxt, margin: '0 auto', maxWidth: 520, textAlign: 'center' }}>
              Powering 20+ global clients with autonomous agents that operate with surgical precision.
            </p>
          </div>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {CAPABILITIES.map((cap, i) => (
            <FadeIn key={i} delay={i * 70}>
              <div style={capCard}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = SHADOW; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={iconBox}>{cap.icon}</div>
                <h3 style={{ fontFamily: FONT.headline, fontWeight: 700, fontSize: 17, color: C.onBg, margin: '14px 0 8px', lineHeight: 1.3 }}>{cap.title}</h3>
                <p style={{ fontSize: 13, color: C.onSurfaceVar, lineHeight: 1.7, fontWeight: 300 }}>{cap.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ padding: '72px 5%', background: C.surfaceLow }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={chip}>Technology Stack</div>
            <h2 style={{ ...h2Sty, marginBottom: 8 }}>Built on the best tools<br />in the AI ecosystem.</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 800, margin: '0 auto' }}>
            {TECH_STACK.map(t => (
              <span key={t} style={techChip}>{t}</span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* AI PROCESS */}
      <section style={{ padding: '96px 5%', background: '#fff' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={chip}>Our AI Process</div>
            <h2 style={h2Sty}>From concept to autonomous agent<br />in four surgical steps.</h2>
          </div>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 24 }}>
          {PROCESS_AI.map((step, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div style={stepCard}>
                <div style={stepNum}>{step.n}</div>
                <Zap size={20} color={C.primaryCont} style={{ marginBottom: 12 }} />
                <h3 style={{ fontFamily: FONT.headline, fontWeight: 700, fontSize: 16, color: C.onBg, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: C.onSurfaceVar, lineHeight: 1.7, fontWeight: 300 }}>{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg,#040e1e 0%,#0a1a3a 100%)', padding: '100px 5%' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontFamily: FONT.headline, fontWeight: 800, fontSize: 'clamp(28px,3.5vw,48px)', color: '#fff', lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.02em' }}>
              Ready to build your Agentic AI system?
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 36, fontWeight: 300, lineHeight: 1.8 }}>
              Let's surgically design an AI solution around your exact business needs.
            </p>
            <button style={btnLight} onClick={() => setPage('contact')}>
              Start the Conversation
            </button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

/* styles */
const aiHero    = { padding: '60px 5% 80px', background: 'linear-gradient(160deg,#040e1e 0%,#071428 60%,#0a1e3c 100%)', position: 'relative', overflow: 'hidden', minHeight: '70vh' };
const gridOverlay = { position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(178,197,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(178,197,255,0.03) 1px,transparent 1px)', backgroundSize:'60px 60px', pointerEvents:'none' };
const glow1     = { position:'absolute', top:'-20%', right:'-10%', width:'60vw', height:'60vw', borderRadius:'50%', background:'radial-gradient(circle,rgba(0,82,204,0.15) 0%,transparent 70%)', pointerEvents:'none' };
const glow2     = { position:'absolute', bottom:'-20%', left:'-10%', width:'40vw', height:'40vw', borderRadius:'50%', background:'radial-gradient(circle,rgba(123,38,0,0.08) 0%,transparent 70%)', pointerEvents:'none' };
const badge     = { display:'inline-flex', alignItems:'center', gap:8, background:'rgba(178,197,255,0.1)', border:'1px solid rgba(178,197,255,0.2)', padding:'6px 14px', borderRadius:100, fontSize:12, color:'#b2c5ff', marginBottom:24, letterSpacing:'0.08em', textTransform:'uppercase', fontWeight:600 };
const badgeDot  = { width:6, height:6, borderRadius:'50%', background:'#28c840', display:'inline-block' };
const h1Sty     = { fontFamily:FONT.headline, fontWeight:800, fontSize:'clamp(36px,5vw,68px)', lineHeight:1.05, letterSpacing:'-0.02em', color:'#fff', marginBottom:24 };
const heroSub   = { fontSize:16, color:'rgba(255,255,255,0.6)', maxWidth:560, marginBottom:36, lineHeight:1.8, fontWeight:300 };
const btnLight  = { background:'#fff', color:C.primary, border:'none', cursor:'pointer', padding:'13px 28px', borderRadius:8, fontSize:15, fontWeight:700, fontFamily:FONT.body, transition:'all 0.25s', boxShadow:'0 4px 20px rgba(0,0,0,0.3)', display:'inline-flex', alignItems:'center' };
const btnGhost  = { background:'transparent', color:'rgba(255,255,255,0.75)', border:'1px solid rgba(255,255,255,0.2)', cursor:'pointer', padding:'12px 28px', borderRadius:8, fontSize:15, fontWeight:500, fontFamily:FONT.body, transition:'all 0.25s' };
const codeBlockWrap = { background:'rgba(255,255,255,0.04)', borderRadius:16, overflow:'hidden', border:'1px solid rgba(178,197,255,0.12)', maxWidth:780, margin:'0 auto', width: '100%', boxSizing: 'border-box' };
const codeBar   = { background:'rgba(255,255,255,0.04)', padding:'12px 20px', display:'flex', alignItems:'center', gap:6 };
const dot       = (c) => ({ width:12, height:12, borderRadius:'50%', background:c, display:'inline-block' });
const codePre   = { padding:'24px 28px', fontFamily:'monospace', fontSize:13, lineHeight:1.8, color:'rgba(255,255,255,0.8)', overflowX:'auto', margin:0, boxSizing: 'border-box', width: '100%' };
const chip      = { fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:C.primaryCont, fontWeight:700, marginBottom:14 };
const h2Sty     = { fontFamily:FONT.headline, fontWeight:800, fontSize:'clamp(26px,3vw,44px)', lineHeight:1.1, letterSpacing:'-0.02em', color:C.onBg, marginBottom:16 };
const bodyTxt   = { fontSize:15, color:C.onSurfaceVar, lineHeight:1.8, fontWeight:300 };
const capCard   = { background:'#fff', borderRadius:16, padding:28, border:`1px solid ${C.outlineVar}50`, transition:'all 0.25s' };
const iconBox   = { width:48, height:48, borderRadius:12, background:'rgba(0,82,204,0.08)', display:'flex', alignItems:'center', justifyContent:'center' };
const techChip  = { background:'rgba(0,82,204,0.07)', border:`1px solid rgba(0,82,204,0.15)`, padding:'8px 18px', borderRadius:100, fontSize:13, color:C.primaryCont, fontWeight:500 };
const stepCard  = { background:C.surfaceLow, borderRadius:16, padding:'32px 24px', border:`1px solid ${C.outlineVar}40`, position:'relative' };
const stepNum   = { position:'absolute', top:-20, right:20, fontFamily:FONT.headline, fontWeight:800, fontSize:56, color:`${C.primaryCont}10`, lineHeight:1 };
