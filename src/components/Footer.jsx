import { C, FONT, GRADIENT } from '../styles/theme';
import csLogo from '../assets/cslogo.png';

const s = {
  footer: {
    background: '#fff',
    color: C.onSurfaceVar,
    padding: '72px 5% 32px',
    borderTop: `1px solid ${C.outlineVar}40`,
  },
  top: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: '60px',
    marginBottom: '56px',
  },
  brand: { fontFamily: FONT.headline, fontSize: 20, fontWeight: 800, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10, color: C.onBg, letterSpacing: '-0.02em' },
  mark: {
    width: 32, height: 32, borderRadius: 8,
    background: GRADIENT,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 14, fontWeight: 800, color: '#fff',
  },
  desc: { fontSize: 14, color: C.onSurfaceVar, lineHeight: 1.8, maxWidth: 260, fontWeight: 300 },
  colHead: { fontFamily: FONT.headline, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20, color: C.primaryCont },
  link: { display: 'block', fontSize: 14, color: C.onSurfaceVar, textDecoration: 'none', marginBottom: 12, fontWeight: 400, cursor: 'pointer', background: 'none', border: 'none', textAlign: 'left', transition: 'color 0.2s' },
  divider: { borderTop: `1px solid ${C.outlineVar}30`, paddingTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 },
  copy: { fontSize: 13, color: C.onSurfaceVar, fontWeight: 300 },
  social: { display: 'flex', gap: 12 },
  socialBtn: {
    width: 36, height: 36, borderRadius: 8,
    border: `1px solid ${C.outlineVar}60`,
    background: '#fff', color: C.onBg,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 13, cursor: 'pointer', transition: 'all 0.2s', textDecoration: 'none',
  },
};

const SERVICES_LINKS = ['Windows Apps', 'Custom CRM', 'ERP Systems', 'Agentic AI', 'Cloud Architecture'];
const COMPANY_LINKS = ['About', 'Portfolio', 'Blog', 'Careers', 'Privacy Policy'];

export default function Footer({ setPage }) {
  const nav = (p) => { setPage(p); window.scrollTo(0, 0); };

  return (
    <footer style={s.footer}>
      <div style={s.top}>
        <div>
          <div style={s.brand}>
            <img src={csLogo} alt="CS Logo" style={{ width: 32, height: 32, objectFit: 'contain' }} />
            CodeSurgeons Tech
          </div>
          <p style={s.desc}>
            Building next-generation digital infrastructure with precision and editorial flair.
            Agentic AI · Windows Apps · CRM/ERP · Web
          </p>
          <p style={{ fontSize: 13, color: C.onSurfaceVar, marginTop: 24, fontWeight: 300 }}>
            © 2026 CodeSurgeons Tech. Engineered with Precision.
          </p>
        </div>
        <div>
          <div style={s.colHead}>Services</div>
          {SERVICES_LINKS.map(l => <span key={l} style={s.link} onClick={() => nav('services')}>{l}</span>)}
        </div>
        <div>
          <div style={s.colHead}>Company</div>
          {COMPANY_LINKS.map(l => (
            <span key={l} style={s.link} onClick={() => nav(l === 'About' ? 'home' : l.toLowerCase())}>{l}</span>
          ))}
        </div>
        <div>
          <div style={s.colHead}>Contact</div>
          <a href="mailto:dev@codesurgeons.in" style={s.link}>dev@codesurgeons.in</a>
          {/* <a target="_blank" rel="noopener noreferrer" style={s.link}>LinkedIn</a> */}
          <span style={s.link} onClick={() => nav('contact')}>Start a Project →</span>
        </div>
      </div>
      <div style={s.divider}>
        <span style={s.copy}>Architecting high-performance digital solutions with surgical precision.</span>
        <div style={s.social}>
          {['in', '𝕏', 'gh'].map(sc => (
            <a key={sc} href="#!" onClick={e => e.preventDefault()} style={s.socialBtn}>{sc}</a>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media(max-width:600px){
          footer { padding: 48px 5% 24px !important; }
          footer > div:first-child { grid-template-columns: repeat(2, 1fr) !important; gap: 32px 16px !important; }
          footer > div:first-child > div:first-child { grid-column: 1 / -1; margin-bottom: 8px; }
          footer > div:first-child > div:last-child { grid-column: 1 / -1; }
          footer > div:last-child { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; padding-top: 24px !important; }
        }
      `}</style>
    </footer>
  );
}
