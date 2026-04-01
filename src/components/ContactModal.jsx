import { useState } from 'react';
import { C, FONT, GRADIENT } from '../styles/theme';
import { X, Send, CheckCircle } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={overlay} onClick={onClose}>
      <div style={modal} onClick={e => e.stopPropagation()}>
        <button style={closeBtn} onClick={onClose}><X size={20} /></button>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '40px 10px' }}>
            <CheckCircle size={48} color={C.primaryCont} style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontFamily: FONT.headline, fontWeight: 700, fontSize: 20, color: C.onBg, marginBottom: 8 }}>Message Received</h3>
            <p style={{ fontSize: 14, color: C.onSurfaceVar, fontWeight: 300, lineHeight: 1.6 }}>Our architects will reach out within 24 hours.</p>
            <button style={{ ...btnPrimary, marginTop: 24 }} onClick={() => { setSent(false); onClose(); }}>Close</button>
          </div>
        ) : (
          <>
            <h3 style={{ fontFamily: FONT.headline, fontWeight: 800, fontSize: 22, color: C.onBg, marginBottom: 6 }}>Start a Project</h3>
            <p style={{ fontSize: 13, color: C.onSurfaceVar, fontWeight: 300, marginBottom: 24 }}>Tell us about your technical vision. We'll engineer it.</p>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input style={inputSty} placeholder="Full Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              <input style={inputSty} type="email" placeholder="Email Address" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              <textarea style={{ ...inputSty, minHeight: 110, resize: 'vertical' }} placeholder="Project Details" required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
              <button type="submit" style={btnPrimary}><Send size={15} style={{ marginRight: 8 }} /> Send Request</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const overlay = { position: 'fixed', inset: 0, background: 'rgba(4,14,30,0.6)', backdropFilter: 'blur(8px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 };
const modal = { animation: 'modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)', background: '#fff', borderRadius: 16, width: '100%', maxWidth: 440, padding: 32, position: 'relative', boxShadow: '0 20px 60px rgba(0,24,72,0.15)', border: `1px solid ${C.outlineVar}50` };
const closeBtn = { position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', color: C.onSurfaceVar, padding: 4 };
const inputSty = { background: C.surfaceLow, border: `1px solid ${C.outlineVar}60`, borderRadius: 8, padding: '12px 14px', fontSize: 14, color: C.onBg, fontFamily: FONT.body, outline: 'none', width: '100%', transition: 'border-color 0.2s' };
const btnPrimary = { background: GRADIENT, color: '#fff', border: 'none', cursor: 'pointer', padding: '12px 20px', borderRadius: 8, fontSize: 14, fontWeight: 600, fontFamily: FONT.body, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,61,155,0.25)', width: '100%', transition: 'all 0.25s' };
