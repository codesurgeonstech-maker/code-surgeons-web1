import { useState, useEffect } from 'react';
import { C, FONT, IMPORT, GLASS, GRADIENT } from '../styles/theme';
import { Menu, X } from 'lucide-react';
import csLogo from '../assets/cslogo.png';

const NAV_LINKS = [
  { label: 'Home', page: 'home' },
  { label: 'Services', page: 'services' },
  { label: 'AI & Products', page: 'ai' },
  { label: 'Projects', page: 'portfolio' },
  { label: 'Blog', page: 'blog' },
  { label: 'Contact', page: 'contact' },
];

const css = `
${IMPORT}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:${FONT.body};background:${C.bg};color:${C.onBg};overflow-x:hidden;line-height:1.6;}
::-webkit-scrollbar{width:4px;}
::-webkit-scrollbar-track{background:${C.surfaceLow};}
::-webkit-scrollbar-thumb{background:${C.primaryCont};border-radius:2px;}
::selection{background:${C.primaryCont}22;color:${C.primaryCont};}
img{max-width:100%;display:block;}

.nav{
  position:fixed;top:0;left:0;right:0;z-index:1000;
  padding:20px 5%;display:flex;align-items:center;justify-content:space-between;
  transition:all 0.4s ease;background:transparent;
}
.nav.scrolled{
  background:${GLASS};backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);
  padding:14px 5%;box-shadow:0 2px 20px rgba(0,24,72,0.06);
}
.nav-logo{
  font-family:${FONT.headline};font-size:18px;font-weight:800;
  color:#000;text-decoration:none;display:flex;align-items:center;gap:10px;
  letter-spacing:-0.02em; background:none; border:none; cursor:pointer; padding:0;
}
.nav-logo-mark{
  width:32px;height:32px;border-radius:8px;
  background:${GRADIENT};display:flex;align-items:center;justify-content:center;
  font-size:14px;font-weight:800;color:#fff;flex-shrink:0;
}
.nav-links{display:flex;align-items:center;gap:4px;}
.nav-link{
  font-family:${FONT.body};font-size:14px;font-weight:500;color:${C.onSurfaceVar};
  background:none;border:none;cursor:pointer;padding:8px 14px;border-radius:8px;
  transition:all 0.2s;text-decoration:none;
}
.nav-link:hover,.nav-link.active{background:${C.surfaceLow};color:${C.primary};}
.nav-cta{
  background:${GRADIENT};color:#fff;border:none;cursor:pointer;
  padding:10px 22px;border-radius:8px;font-size:14px;font-weight:600;
  font-family:${FONT.body};transition:all 0.25s;box-shadow:0 4px 14px rgba(0,61,155,0.25);
}
.nav-cta:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(0,61,155,0.35);}
.hamburger{display:none;background:none;border:none;cursor:pointer;color:${C.primary};padding:4px;}
.mobile-menu{
  display:none;position:fixed;inset:0;background:rgba(248,249,251,0.98);
  backdrop-filter:blur(20px);z-index:999;flex-direction:column;
  align-items:center;justify-content:center;gap:28px;
}
.mobile-menu.open{display:flex;}
.mobile-menu-link{
  font-family:${FONT.headline};font-size:26px;font-weight:700;
  color:${C.onBg};text-decoration:none;background:none;border:none;cursor:pointer;
  transition:color 0.2s;
}
.mobile-menu-link:hover{color:${C.primaryCont};}
.mobile-close{position:absolute;top:24px;right:5%;background:none;border:none;cursor:pointer;color:${C.onSurfaceVar};}

@media(max-width:768px){
  .nav-links,.nav-cta{display:none;}
  .hamburger{display:flex;}
}
`;

export default function Navbar({ page, setPage, setModalOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navigate = (p) => { setPage(p); setMobileOpen(false); window.scrollTo(0, 0); };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <button className="nav-logo" onClick={() => navigate('home')}>
          <img src={csLogo} alt="CodeSurgeons Logo" style={{ width: 36, height: 36, objectFit: 'contain' }} />
          CodeSurgeons Tech
        </button>
        <div className="nav-links">
          {NAV_LINKS.map(l => (
            <button key={l.page} className={`nav-link ${page === l.page ? 'active' : ''}`} onClick={() => navigate(l.page)}>
              {l.label}
            </button>
          ))}
        </div>
        <button className="nav-cta" onClick={() => setModalOpen(true)}>Get in Touch</button>
        <button className="hamburger" onClick={() => setMobileOpen(true)}><Menu size={24} /></button>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}><X size={28} /></button>
        {NAV_LINKS.map(l => (
          <button key={l.page} className="mobile-menu-link" onClick={() => navigate(l.page)}>{l.label}</button>
        ))}
        <button className="nav-cta" onClick={() => { setModalOpen(true); setMobileOpen(false); }}>Get in Touch</button>
      </div>
    </>
  );
}
