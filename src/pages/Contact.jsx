import { useState } from 'react';
import { C, FONT, GRADIENT } from '../styles/theme';
import FadeIn from '../components/FadeIn';
import { MapPin, Mail, Linkedin, Send, CheckCircle } from 'lucide-react';

const RESP_CSS = `
  @media (max-width: 860px) {
    .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
    .contact-row-two { grid-template-columns: 1fr !important; }
  }
`;

const SERVICES_LIST = ['Windows App Development', 'Custom CRM / ERP', 'Agentic AI Systems', 'Web Development', 'Technology Consulting', 'Other'];

export default function Contact({ setPage }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ background: C.bg, fontFamily: FONT.body }}>
      <style dangerouslySetInnerHTML={{ __html: RESP_CSS }} />

      {/* HERO */}
      <section style={pageHero}>
        <div style={heroBg} />
        <FadeIn>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 640 }}>
            <div style={chip}>Get in Touch</div>
            <h1 style={h1Sty}>
              Whether you're looking to modernize your stack or build a product from the ground up —{' '}
              <span style={{ background: GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                our architects are ready.
              </span>
            </h1>
          </div>
        </FadeIn>
      </section>

      {/* CONTACT GRID */}
      <section style={{ padding: '0 5% 96px', background: C.surface }}>
        <div className="contact-grid" style={contactGrid}>

          {/* LEFT — Info */}
          <FadeIn delay={0}>
            <div style={infoPanel}>
              <div style={infoBadge}>
                <div style={infoBadgeDot} />
                Architecting the future. Join our engineering elite.
              </div>

              <h2 style={h2Sty}>Let's build something<br />extraordinary.</h2>
              <p style={bodyTxt}>
                By submitting this form, you acknowledge our Privacy Policy and consent to receiving a follow-up from our architecture team within 24 hours.
              </p>

              <div style={{ marginTop: 40 }}>
                <div style={contactItem}>
                  <div style={contactIcon}><MapPin size={18} color={C.primaryCont} /></div>
                  <div>
                    <div style={contactLabel}>Headquarters</div>
                    <div style={contactVal}>No 40/5, Kolumam Main Road, <br />Udumalpet, Tamil Nadu, 642-128</div>
                  </div>
                </div>
                <div style={contactItem}>
                  <div style={contactIcon}><Mail size={18} color={C.primaryCont} /></div>
                  <div>
                    <div style={contactLabel}>Direct Line</div>
                    <a href="mailto:dev@codesurgeons.in" style={{ ...contactVal, color: C.primaryCont, textDecoration: 'none', fontWeight: 500 }}>
                      dev@codesurgeons.in
                    </a>
                  </div>
                </div>
                <div style={contactItem}>
                  <div style={contactIcon}><Linkedin size={18} color={C.primaryCont} /></div>
                  <div>
                    <div style={contactLabel}>Connect</div>
                    <a href="https://linkedin.com/company/codesurgeons" target="_blank" rel="noopener noreferrer" style={{ ...contactVal, color: C.primaryCont, textDecoration: 'none', fontWeight: 500 }}>
                      linkedin.com/company/codesurgeons
                    </a>
                  </div>
                </div>
              </div>

              {/* Expertise tags */}
              <div style={{ marginTop: 40 }}>
                <div style={smlLabel}>Our Expertise</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
                  {['Cloud Native', 'AI Integration', 'Security First', 'Enterprise Scale'].map(t => (
                    <span key={t} style={expTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT — Form */}
          <FadeIn delay={120}>
            <div style={formCard}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <CheckCircle size={56} color={C.primaryCont} style={{ margin: '0 auto 20px' }} />
                  <h3 style={{ fontFamily: FONT.headline, fontWeight: 800, fontSize: 24, color: C.onBg, marginBottom: 12 }}>Message Received!</h3>
                  <p style={{ fontSize: 15, color: C.onSurfaceVar, fontWeight: 300, lineHeight: 1.8 }}>
                    Our architecture team will reach out within 24 hours to schedule a focused conversation about your project.
                  </p>
                  <button style={{ ...btnPrimary, marginTop: 28 }} onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: FONT.headline, fontWeight: 700, fontSize: 22, color: C.onBg, marginBottom: 6 }}>Start a Conversation</h3>
                  <p style={{ fontSize: 14, color: C.onSurfaceVar, fontWeight: 300, marginBottom: 28 }}>Tell us about your project. We respond within 24 hours.</p>
                  <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div className="contact-row-two" style={rowTwo}>
                      <div style={fieldWrap}>
                        <label style={flabel}>Full Name *</label>
                        <input style={inputSty} placeholder="John Doe" required value={form.name} onChange={e => handle('name', e.target.value)} />
                      </div>
                      <div style={fieldWrap}>
                        <label style={flabel}>Email Address *</label>
                        <input style={inputSty} type="email" placeholder="john@company.com" required value={form.email} onChange={e => handle('email', e.target.value)} />
                      </div>
                    </div>
                    <div style={fieldWrap}>
                      <label style={flabel}>Company</label>
                      <input style={inputSty} placeholder="Your Company Name" value={form.company} onChange={e => handle('company', e.target.value)} />
                    </div>
                    <div style={fieldWrap}>
                      <label style={flabel}>Service of Interest</label>
                      <select style={inputSty} value={form.service} onChange={e => handle('service', e.target.value)}>
                        <option value="">Select a service...</option>
                        {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div style={fieldWrap}>
                      <label style={flabel}>Project Details *</label>
                      <textarea
                        style={{ ...inputSty, minHeight: 120, resize: 'vertical' }}
                        placeholder="Tell us about your vision, timeline, and key requirements..."
                        required
                        value={form.message}
                        onChange={e => handle('message', e.target.value)}
                      />
                    </div>
                    <button type="submit" style={btnPrimary}>
                      <Send size={16} style={{ marginRight: 8 }} />
                      Send Message
                    </button>
                    <p style={{ fontSize: 12, color: C.onSurfaceVar, fontWeight: 300, textAlign: 'center', lineHeight: 1.6 }}>
                      No commitment required · We respond within 24 hours
                    </p>
                  </form>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MAP-LIKE SECTION */}
      <section style={{ background: C.surfaceLow, padding: '72px 5%' }}>
        <FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 32, textAlign: 'center' }}>
            {[
              ['24hrs', 'Response Time'],
              ['Free', 'Initial Consultation'],
              ['NDA', 'Signed Upfront'],
              ['Phase 1', 'No Lock-in Contract'],
            ].map(([v, l]) => (
              <div key={l} style={{ padding: '24px 16px', background: '#fff', borderRadius: 16, border: `1px solid ${C.outlineVar}40` }}>
                <div style={{ fontFamily: FONT.headline, fontWeight: 800, fontSize: 32, color: C.primaryCont, marginBottom: 8 }}>{v}</div>
                <div style={{ fontSize: 14, color: C.onSurfaceVar, fontWeight: 400 }}>{l}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

const pageHero = { padding: '60px 5% 64px', background: C.surface, position: 'relative', overflow: 'hidden' };
const heroBg = { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 70% 40%,rgba(0,82,204,0.05) 0%,transparent 70%)', pointerEvents: 'none' };
const chip = { fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.primaryCont, fontWeight: 700, marginBottom: 16 };
const h1Sty = { fontFamily: FONT.headline, fontWeight: 800, fontSize: 'clamp(30px,4vw,56px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: C.onBg };
const contactGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' };
const infoPanel = { paddingTop: 8 };
const infoBadge = { display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,82,204,0.07)', border: '1px solid rgba(0,82,204,0.15)', padding: '7px 14px', borderRadius: 100, fontSize: 12, color: C.primaryCont, fontWeight: 500, marginBottom: 24 };
const infoBadgeDot = { width: 6, height: 6, borderRadius: '50%', background: '#28c840', display: 'inline-block' };
const h2Sty = { fontFamily: FONT.headline, fontWeight: 800, fontSize: 'clamp(26px,3vw,42px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: C.onBg, marginBottom: 14 };
const bodyTxt = { fontSize: 14, color: C.onSurfaceVar, lineHeight: 1.8, fontWeight: 300 };
const contactItem = { display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 28 };
const contactIcon = { width: 44, height: 44, borderRadius: 12, background: 'rgba(0,82,204,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 };
const contactLabel = { fontSize: 11, color: C.onSurfaceVar, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 };
const contactVal = { fontSize: 14, color: C.onBg, lineHeight: 1.6 };
const smlLabel = { fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.onSurfaceVar, fontWeight: 600 };
const expTag = { background: `rgba(0,82,204,0.07)`, border: `1px solid rgba(0,82,204,0.15)`, borderRadius: 100, padding: '5px 12px', fontSize: 12, color: C.primaryCont, fontWeight: 500 };
const formCard = { background: '#fff', borderRadius: 20, padding: 36, boxShadow: '0 8px 40px rgba(0,24,72,0.08)', border: `1px solid ${C.outlineVar}40` };
const rowTwo = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 };
const fieldWrap = { display: 'flex', flexDirection: 'column', gap: 6 };
const flabel = { fontSize: 12, fontWeight: 600, color: C.onSurfaceVar, letterSpacing: '0.04em' };
const inputSty = { background: C.surfaceLow, border: `1px solid ${C.outlineVar}60`, borderRadius: 8, padding: '12px 14px', fontSize: 14, color: C.onBg, fontFamily: FONT.body, outline: 'none', transition: 'border-color 0.2s', width: '100%' };
const btnPrimary = { background: GRADIENT, color: '#fff', border: 'none', cursor: 'pointer', padding: '13px 24px', borderRadius: 8, fontSize: 15, fontWeight: 600, fontFamily: FONT.body, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,61,155,0.25)', transition: 'all 0.25s' };
