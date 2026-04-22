import { C, FONT, GRADIENT, SHADOW } from '../styles/theme';
import FadeIn from '../components/FadeIn';
import SEOHead, { SEO_PAGES } from '../components/SEOHead';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';

const POSTS = [
  {
    category: 'Agentic AI',
    title: 'Building Production-Ready AI Agents with LangGraph',
    excerpt: 'A deep dive into how we architect multi-agent systems at CodeSurgeons — covering state management, tool use, and the "surgical" evaluation framework that keeps our agents reliable.',
    date: 'Mar 28, 2026',
    readTime: '12 min read',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    category: 'Windows Apps',
    title: 'WPF in 2026: Why Native Desktop Still Wins for Enterprise',
    excerpt: 'Web apps have dominated, but for mission-critical enterprise workflows, native Windows apps deliver performance and security that no browser can match. Here\'s our technical case.',
    date: 'Mar 15, 2026',
    readTime: '8 min read',
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop',
    featured: false,
  },
  {
    category: 'Engineering',
    title: 'The "No-Line" Rule: How We Design without Borders',
    excerpt: 'Our design philosophy prohibits 1px borders for section separation. Instead, we use tonal shifts, spatial breathing room, and layered surfaces. Here\'s why it creates better UX.',
    date: 'Mar 5, 2026',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    featured: false,
  },
  {
    category: 'CRM/ERP',
    title: 'Custom CRM vs Off-the-Shelf: A 5-Year Total Cost Analysis',
    excerpt: 'After delivering 15+ custom CRM implementations, we ran the numbers. For companies with complex sales cycles, bespoke CRM pays for itself within 18 months.',
    date: 'Feb 22, 2026',
    readTime: '10 min read',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    featured: false,
  },
  {
    category: 'Agentic AI',
    title: 'RAG vs Fine-Tuning: Choosing the Right Knowledge Strategy',
    excerpt: 'Retrieval-Augmented Generation gives you recency and control. Fine-tuning gives you style and compression. We break down when to use each — and when to combine them.',
    date: 'Feb 10, 2026',
    readTime: '9 min read',
    img: 'https://images.unsplash.com/photo-1655393001859-994df50ae1cd?q=80&w=800&auto=format&fit=crop',
    featured: false,
  },
  {
    category: 'Engineering',
    title: 'Zero-Dependency Architecture: The Performance Investment',
    excerpt: 'Every third-party dependency is a performance tax. We document how eliminating non-essential libraries shaved 60% off our app bundle sizes.',
    date: 'Jan 28, 2026',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    featured: false,
  },
];

const CATS = ['All', 'Agentic AI', 'Windows Apps', 'Engineering', 'CRM/ERP'];

const RESP_CSS = `
  @media (max-width: 860px) {
    .feat-card-grid { grid-template-columns: 1fr !important; }
    .feat-img-wrap { height: 260px !important; }
    .post-grid { grid-template-columns: 1fr 1fr !important; }
    .feat-content { padding: 32px 24px !important; }
    .sub-btn-wrap { flex-direction: column !important; max-width: 100% !important; margin-top: 24px !important; }
    .sub-btn-wrap > input, .sub-btn-wrap > button { width: 100% !important; flex: none !important; }
    .blog-hero { padding: 80px 5% !important; }
  }
  @media (max-width: 580px) {
    .post-grid { grid-template-columns: 1fr !important; }
    .feat-img-wrap { height: 200px !important; }
    .h1-text { font-size: 34px !important; }
    .blog-hero { padding: 60px 4% !important; }
  }
`;

export default function Blog({ setPage }) {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <div style={{ background: C.bg, fontFamily: FONT.body }}>
      <SEOHead {...SEO_PAGES.blog} />
      <style dangerouslySetInnerHTML={{ __html: RESP_CSS }} />

      {/* HERO */}
      <section className="blog-hero" style={pageHero}>
        <div style={heroBg} />
        <FadeIn>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 680 }}>
            <div style={chip}>Technical Insights</div>
            <h1 className="h1-text" style={h1Sty}>
              Engineering deep-dives,<br />
              <span style={{ background: GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                architecture decisions,
              </span>{' '}
              and AI lessons.
            </h1>
            <p style={heroSub}>
              Written by the engineers who build the systems. No fluff — just technical precision.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* FEATURED POST */}
      <section style={{ padding: '0 5% 64px', background: C.surface }}>
        <FadeIn>
          <div className="feat-card-grid" style={featuredCard}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = SHADOW; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div className="feat-img-wrap" style={featImgWrap}>
              <img src={featured.img} alt={featured.title} style={featImg} loading="lazy" />
              <div style={featOverlay} />
            </div>
            <div className="feat-content" style={featContent}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
                <span style={catChip}><Tag size={11} /> &nbsp;{featured.category}</span>
                <span style={metaText}><Clock size={12} /> &nbsp;{featured.readTime}</span>
                <span style={metaText}>{featured.date}</span>
                <span style={{ ...catChip, background: `${GRADIENT}`, color: '#fff', border: 'none' }}>Featured</span>
              </div>
              <h2 style={{ fontFamily: FONT.headline, fontWeight: 800, fontSize: 'clamp(22px,3vw,34px)', color: C.onBg, lineHeight: 1.2, marginBottom: 14, letterSpacing: '-0.01em' }}>
                {featured.title}
              </h2>
              <p style={{ fontSize: 15, color: C.onSurfaceVar, lineHeight: 1.8, fontWeight: 300, marginBottom: 24 }}>
                {featured.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.primaryCont, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                Read the full post <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FILTER + GRID */}
      <section style={{ padding: '0 5% 96px', background: C.surface }}>
        <div style={filterBar}>
          {CATS.map(c => (
            <button key={c} style={filterBtn}>{c}</button>
          ))}
        </div>
        <div className="post-grid" style={postGrid}>
          {rest.map((post, i) => (
            <FadeIn key={post.title} delay={i * 80}>
              <article style={postCard}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = SHADOW; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={postImgWrap}>
                  <img src={post.img} alt={post.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s' }} loading="lazy" />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
                    <span style={catChip}>{post.category}</span>
                    <span style={metaText}><Clock size={11} /> &nbsp;{post.readTime}</span>
                    <span style={metaText}>{post.date}</span>
                  </div>
                  <h3 style={{ fontFamily: FONT.headline, fontWeight: 700, fontSize: 17, color: C.onBg, lineHeight: 1.3, marginBottom: 10 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: 13, color: C.onSurfaceVar, lineHeight: 1.7, fontWeight: 300, marginBottom: 18 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.primaryCont, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                    Read more <ArrowUpRight size={13} />
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background: C.primary, padding: '80px 5%' }}>
        <FadeIn>
          <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: FONT.headline, fontWeight: 800, fontSize: 'clamp(26px,3vw,40px)', color: '#fff', marginBottom: 12, lineHeight: 1.1 }}>
              Stay Connected
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', marginBottom: 32, fontWeight: 300 }}>
              Subscribe for technical insights. No noise — just the articles worth reading.
            </p>
            <div className="sub-btn-wrap" style={{ display: 'flex', gap: 12, maxWidth: 420, margin: '0 auto', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={emailInput}
              />
              <button style={subBtn}>Subscribe</button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

const pageHero   = { padding: '60px 5% 80px', background: C.surface, position: 'relative', overflow: 'hidden' };
const heroBg     = { position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 80% at 80% 40%, rgba(0,82,204,0.05) 0%, transparent 70%)', pointerEvents:'none' };
const chip       = { fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:C.primaryCont, fontWeight:700, marginBottom:16 };
const h1Sty      = { fontFamily:FONT.headline, fontWeight:800, fontSize:'clamp(34px,5vw,64px)', lineHeight:1.05, letterSpacing:'-0.02em', color:C.onBg, marginBottom:20 };
const heroSub    = { fontSize:16, color:C.onSurfaceVar, maxWidth:520, lineHeight:1.8, fontWeight:300 };
const featuredCard= { display:'grid', gridTemplateColumns:'1fr 1fr', borderRadius:20, overflow:'hidden', background:'#fff', border:`1px solid ${C.outlineVar}40`, transition:'box-shadow 0.25s', cursor:'pointer' };
const featImgWrap = { position:'relative', height:360, overflow:'hidden' };
const featImg    = { width:'100%', height:'100%', objectFit:'cover' };
const featOverlay= { position:'absolute', inset:0, background:'linear-gradient(to right, transparent 50%, rgba(255,255,255,0.02) 100%)' };
const featContent= { padding:40, display:'flex', flexDirection:'column', justifyContent:'center' };
const catChip    = { display:'inline-flex', alignItems:'center', gap:4, background:'rgba(0,82,204,0.07)', border:`1px solid rgba(0,82,204,0.15)`, borderRadius:100, padding:'4px 10px', fontSize:11, color:C.primaryCont, fontWeight:600 };
const metaText   = { display:'inline-flex', alignItems:'center', gap:4, fontSize:12, color:C.onSurfaceVar, fontWeight:400 };
const filterBar  = { display:'flex', gap:8, flexWrap:'wrap', marginBottom:36 };
const filterBtn  = { padding:'7px 16px', borderRadius:100, border:`1px solid ${C.outlineVar}60`, background:'transparent', color:C.onSurfaceVar, fontSize:13, fontWeight:500, cursor:'pointer', fontFamily:FONT.body, transition:'all 0.2s' };
const postGrid   = { display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:24 };
const postCard   = { background:'#fff', borderRadius:16, overflow:'hidden', border:`1px solid ${C.outlineVar}40`, transition:'all 0.25s', cursor:'pointer' };
const postImgWrap= { height:180, overflow:'hidden' };
const emailInput = { flex:1, background:'rgba(255,255,255,0.1)', border:'1px solid rgba(255,255,255,0.2)', borderRadius:8, padding:'12px 16px', color:'#fff', fontSize:14, fontFamily:FONT.body, outline:'none', minWidth:200 };
const subBtn     = { background:'#fff', color:C.primary, border:'none', cursor:'pointer', padding:'12px 22px', borderRadius:8, fontSize:14, fontWeight:700, fontFamily:FONT.body, whiteSpace:'nowrap' };
