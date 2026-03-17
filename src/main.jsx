import { useState, useEffect, useRef } from "react";
import {
  Globe,
  Smartphone,
  Monitor,
  Bot,
  Settings,
  ArrowUpRight,
  X
} from "lucide-react";

const COLORS = {
  sage: "#84B179",
  sageLight: "#A2CB8B",
  mint: "#C7EAB8",
  cream: "#EBF5BD",
  sageDark: "#5C8C54",
  sageDeeper: "#3D6B38",
  bgDark: "#0A0F0A",
  bgCard: "#111811",
  bgCardHover: "#151f15",
  textPrimary: "#E8F5E4",
  textSecondary: "#A2CB8B",
  textMuted: "#6B9B65",
  border: "rgba(132,177,121,0.15)",
  borderHover: "rgba(162,203,139,0.35)",
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: ${COLORS.bgDark};
    color: ${COLORS.textPrimary};
    overflow-x: hidden;
    line-height: 1.6;
  }

  ::selection { background: ${COLORS.sage}33; color: ${COLORS.mint}; }

  :root {
    --sage: ${COLORS.sage};
    --sage-light: ${COLORS.sageLight};
    --mint: ${COLORS.mint};
    --cream: ${COLORS.cream};
    --bg: ${COLORS.bgDark};
    --card: ${COLORS.bgCard};
    --text: ${COLORS.textPrimary};
    --muted: ${COLORS.textMuted};
    --border: ${COLORS.border};
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${COLORS.bgDark}; }
  ::-webkit-scrollbar-thumb { background: ${COLORS.sageDeeper}; border-radius: 2px; }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
    padding: 20px 5%;
    display: flex; align-items: center; justify-content: space-between;
    transition: all 0.4s ease;
    background: transparent;
  }
  .nav.scrolled {
    background: rgba(10,15,10,0.92);
    backdrop-filter: blur(20px);
    padding: 14px 5%;
    border-bottom: 1px solid ${COLORS.border};
  }
  .nav-logo {
    font-family: 'Syne', sans-serif;
    font-size: 18px; font-weight: 700;
    color: ${COLORS.textPrimary};
    display: flex; align-items: center; gap: 8px;
    text-decoration: none;
  }
  .nav-logo-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: ${COLORS.sage};
    animation: pulse-dot 2s ease-in-out infinite;
  }

  .nav-links button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;

  background: transparent;
  color: ${COLORS.textSecondary};
  border: 1px solid transparent;

  cursor: pointer;
  transition: all 0.25s ease;
}

.nav-links button:hover {
  background: ${COLORS.bgCard};
  border-color: ${COLORS.border};
  color: ${COLORS.sageDark};
  box-shadow: 0 4px 14px rgba(0,0,0,0.04);
}

.nav-links button.active:hover {
  background: ${COLORS.sageDark};
  border-color: ${COLORS.sageDark};
}

.nav-links button.active:hover {
  background: ${COLORS.sageDark};
  border-color: ${COLORS.sageDark};
}
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(0.85); }
  }
  .nav-links {
    display: flex; align-items: center; gap: 32px;
    list-style: none;
  }
  .nav-links a {
    color: ${COLORS.textMuted};
    text-decoration: none; font-size: 14px; font-weight: 400;
    transition: color 0.2s;
    letter-spacing: 0.02em;
  }
  .nav-links a:hover { color: ${COLORS.sageLight}; }
  .nav-cta {
    background: transparent;
    border: 1px solid ${COLORS.sage}66;
    color: ${COLORS.sageLight};
    padding: 9px 22px; border-radius: 6px;
    font-size: 14px; font-weight: 500; cursor: pointer;
    transition: all 0.2s; font-family: 'DM Sans', sans-serif;
    text-decoration: none;
  }
  .nav-cta:hover {
    background: ${COLORS.sage}18;
    border-color: ${COLORS.sage};
    color: ${COLORS.mint};
  }

  /* HAMBURGER */
  .hamburger {
    display: none; flex-direction: column; gap: 5px;
    cursor: pointer; background: none; border: none; padding: 4px;
  }
  .hamburger span {
    display: block; width: 22px; height: 1.5px;
    background: ${COLORS.sageLight}; transition: all 0.3s;
  }

  /* MOBILE MENU */
  .mobile-menu {
    display: none;
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(10,15,10,0.98);
    backdrop-filter: blur(20px);
    z-index: 999;
    flex-direction: column;
    align-items: center; justify-content: center; gap: 32px;
  }
  .mobile-menu.open { display: flex; }
  .mobile-menu a {
    font-family: 'Syne', sans-serif;
    font-size: 28px; font-weight: 600;
    color: ${COLORS.textPrimary}; text-decoration: none;
    transition: color 0.2s;
  }
  .mobile-menu a:hover { color: ${COLORS.sage}; }
  .mobile-close {
    position: absolute; top: 24px; right: 5%;
    background: none; border: none; color: ${COLORS.textMuted};
    font-size: 28px; cursor: pointer;
  }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex; align-items: center;
    padding: 120px 5% 80px;
    position: relative; overflow: hidden;
  }
  .hero-grid {
    position: absolute; inset: 0; pointer-events: none;
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  }
  .hero-glow {
    position: absolute; top: -200px; right: -200px;
    width: 700px; height: 700px; border-radius: 50%;
    background: radial-gradient(circle, ${COLORS.sageDeeper}0F 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-glow-2 {
    position: absolute; bottom: -300px; left: -100px;
    width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, ${COLORS.sageDeeper}0A 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-content { position: relative; z-index: 1; max-width: 780px; }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: ${COLORS.sageDeeper}12;
    border: 1px solid ${COLORS.sageDeeper}33;
    padding: 6px 14px; border-radius: 100px;
    font-size: 12px; color: ${COLORS.sageLight};
    margin-bottom: 32px; letter-spacing: 0.08em;
    text-transform: uppercase; font-weight: 500;
  }
  .hero-badge-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: ${COLORS.sage};
    animation: pulse-dot 1.5s ease-in-out infinite;
  }
  .hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(42px, 6vw, 80px);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    color: ${COLORS.textPrimary};
  }
  .hero-title .accent { color: ${COLORS.sage}; }
  .hero-dynamic {
    font-family: 'Syne', sans-serif;
    font-size: clamp(28px, 4vw, 52px);
    font-weight: 600;
    color: ${COLORS.textMuted};
    margin-bottom: 28px;
    height: clamp(40px, 6vw, 64px);
    overflow: hidden;
    line-height: 1.2;
  }
  .hero-dynamic-inner {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s;
  }
  .hero-sub {
    font-size: 16px; color: ${COLORS.textMuted};
    max-width: 520px; margin-bottom: 44px;
    line-height: 1.8; font-weight: 300;
  }
  .hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; }
  .btn-primary {
    background: ${COLORS.sage};
    color: ${COLORS.bgDark};
    padding: 14px 32px; border-radius: 8px;
    font-size: 15px; font-weight: 600; cursor: pointer;
    border: none; transition: all 0.25s;
    font-family: 'DM Sans', sans-serif;
    letter-spacing: 0.01em;
  }
  .btn-primary:hover {
    background: ${COLORS.sageLight};
    transform: translateY(-2px);
    box-shadow: 0 12px 40px ${COLORS.sage}30;
  }
  .btn-secondary {
    background: transparent;
    color: ${COLORS.textPrimary};
    padding: 13px 32px; border-radius: 8px;
    font-size: 15px; font-weight: 500; cursor: pointer;
    border: 1px solid ${COLORS.border};
    transition: all 0.25s; font-family: 'DM Sans', sans-serif;
  }
  .btn-secondary:hover {
    border-color: ${COLORS.sage}66;
    color: ${COLORS.sageLight};
    background: ${COLORS.sage}08;
  }
  .hero-scroll {
    position: absolute; bottom: 40px; left: 5%;
    display: flex; align-items: center; gap: 12px;
    color: ${COLORS.textMuted}; font-size: 12px;
    letter-spacing: 0.1em; text-transform: uppercase;
  }
  .hero-scroll-line {
    width: 40px; height: 1px; background: ${COLORS.textMuted}66;
    animation: scroll-line 2s ease-in-out infinite;
  }
  @keyframes scroll-line {
    0%, 100% { width: 40px; opacity: 0.5; }
    50% { width: 60px; opacity: 1; }
  }

  /* SECTIONS */
  section { padding: 100px 5%; }

  .section-label {
    font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
    color: ${COLORS.sage}; font-weight: 600; margin-bottom: 16px;
    display: flex; align-items: center; gap: 12px;
  }
  .section-label::before {
    content: ''; display: block;
    width: 24px; height: 1px; background: ${COLORS.sage};
  }
  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(30px, 4vw, 52px);
    font-weight: 700; line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    color: ${COLORS.textPrimary};
  }
  .section-sub {
    font-size: 16px; color: ${COLORS.textMuted};
    max-width: 520px; line-height: 1.8; font-weight: 300;
  }

  /* ABOUT */
  .about-inner {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: center;
  }
  .about-visual {
    position: relative; height: 360px;
  }
  .about-card {
    position: absolute;
    background: ${COLORS.bgCard};
    border: 1px solid ${COLORS.border};
    border-radius: 16px; padding: 28px;
    transition: all 0.3s;
  }
  .about-card:hover {
    border-color: ${COLORS.borderHover};
    transform: translateY(-4px);
  }
  .about-card-1 { top: 0; left: 0; right: 80px; }
  .about-card-2 { bottom: 0; left: 60px; right: 0; }
  .about-card-num {
    font-family: 'Syne', sans-serif;
    font-size: 42px; font-weight: 800;
    color: ${COLORS.sage}; line-height: 1;
    margin-bottom: 8px;
  }
  .about-card-label {
    font-size: 14px; color: ${COLORS.textMuted}; font-weight: 300;
  }
  .about-card-sub {
    font-size: 12px; color: ${COLORS.textMuted}55;
    margin-top: 4px;
  }

  /* SERVICES */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px; margin-top: 56px;
  }
  .service-card {
    background: ${COLORS.bgCard};
    border: 1px solid ${COLORS.border};
    border-radius: 16px; padding: 32px;
    transition: all 0.3s; cursor: pointer;
    position: relative; overflow: hidden;
  }
  .service-card::before {
    content: ''; position: absolute;
    top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, ${COLORS.sage}66, transparent);
    opacity: 0; transition: opacity 0.3s;
  }
  .service-card:hover {
    border-color: ${COLORS.sage}44;
    background: ${COLORS.bgCardHover};
    transform: translateY(-6px);
    box-shadow: 0 20px 60px ${COLORS.sage}0F;
  }
  .service-card:hover::before { opacity: 1; }
  .service-icon {
    width: 48px; height: 48px; border-radius: 12px;
    background: ${COLORS.sage}18;
    border: 1px solid ${COLORS.sage}33;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 24px; font-size: 22px;
  }
  .service-name {
    font-family: 'Syne', sans-serif;
    font-size: 18px; font-weight: 600;
    color: ${COLORS.textPrimary}; margin-bottom: 10px;
  }
  .service-desc {
    font-size: 14px; color: ${COLORS.textMuted};
    font-weight: 300; line-height: 1.7;
  }
  .service-arrow {
    display: inline-flex; margin-top: 20px;
    font-size: 18px; color: ${COLORS.sage}55;
    transition: all 0.3s;
  }
  .service-card:hover .service-arrow {
    color: ${COLORS.sage}; transform: translate(4px, -4px);
  }

  /* TRUST */
  .trust-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 24px; margin-top: 56px;
  }
  .trust-item {
    display: flex; gap: 20px; align-items: flex-start;
    padding: 28px; border-radius: 14px;
    border: 1px solid ${COLORS.border};
    transition: all 0.3s;
  }
  .trust-item:hover {
    border-color: ${COLORS.sage}33;
    background: ${COLORS.sage}05;
  }
  .trust-num {
    font-family: 'Syne', sans-serif;
    font-size: 36px; font-weight: 800;
    color: ${COLORS.sage}22; line-height: 1;
    flex-shrink: 0; width: 40px;
  }
  .trust-text h4 {
    font-family: 'Syne', sans-serif;
    font-size: 16px; font-weight: 600;
    color: ${COLORS.textPrimary}; margin-bottom: 8px;
  }
  .trust-text p {
    font-size: 14px; color: ${COLORS.textMuted};
    font-weight: 300; line-height: 1.7;
  }

  /* WORK */
  .work-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 24px; margin-top: 56px;
  }
  .work-card {
    border-radius: 16px; overflow: hidden;
    border: 1px solid ${COLORS.border};
    background: ${COLORS.bgCard};
    cursor: pointer; transition: all 0.3s;
    position: relative;
  }
  .work-card:hover {
    border-color: ${COLORS.sage}44;
    transform: translateY(-6px);
    box-shadow: 0 24px 60px ${COLORS.sage}10;
  }
  .work-visual {
    height: 200px; position: relative; overflow: hidden;
  }
    .work-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  transition: 0.4s;
}
.work-card:hover img {
  transform: scale(1.05);
  filter: brightness(0.9);
}
  .work-tag {
    position: absolute; top: 16px; left: 16px;
    background: ${COLORS.bgDark}CC; backdrop-filter: blur(8px);
    border: 1px solid ${COLORS.border};
    border-radius: 100px; padding: 4px 12px;
    font-size: 11px; color: ${COLORS.sageLight};
    text-transform: uppercase; letter-spacing: 0.08em;
    font-weight: 500;
  }
  .work-info { padding: 24px; }
  .work-info h3 {
    font-family: 'Syne', sans-serif;
    font-size: 17px; font-weight: 600;
    color: ${COLORS.textPrimary}; margin-bottom: 8px;
  }
  .work-info p {
    font-size: 13px; color: ${COLORS.textMuted};
    font-weight: 300;
  }

  /* PROCESS */
  .process-steps {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 0; margin-top: 56px; position: relative;
  }
  .process-steps::after {
    content: ''; position: absolute;
    top: 28px; left: 10%; right: 10%; height: 1px;
    background: linear-gradient(90deg, transparent, ${COLORS.sage}33, ${COLORS.sage}33, transparent);
    z-index: 0;
  }
  .process-step {
    text-align: center; padding: 0 20px; position: relative; z-index: 1;
  }
    .ai-visual-glow {
  position: absolute;
  right: 0;
  top: 0;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(132,177,121,0.15), transparent 70%);
  filter: blur(60px);
}
  .process-circle {
    width: 56px; height: 56px; border-radius: 50%;
    background: ${COLORS.bgCard};
    border: 1px solid ${COLORS.sage}44;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 24px; font-family: 'Syne', sans-serif;
    font-size: 16px; font-weight: 700; color: ${COLORS.sage};
    transition: all 0.3s;
  }
  .process-step:hover .process-circle {
    background: ${COLORS.sage}18;
    border-color: ${COLORS.sage};
    box-shadow: 0 0 30px ${COLORS.sage}30;
  }
  .process-name {
    font-family: 'Syne', sans-serif;
    font-size: 16px; font-weight: 600;
    color: ${COLORS.textPrimary}; margin-bottom: 10px;
  }
  .process-desc {
    font-size: 13px; color: ${COLORS.textMuted};
    font-weight: 300; line-height: 1.7;
  }

  /* AI SECTION */
  .ai-section {
    background: linear-gradient(135deg, ${COLORS.bgCard} 0%, #0d180d 100%);
    border: 1px solid ${COLORS.border};
    border-radius: 24px;
    padding: 80px 60px;
    position: relative; overflow: hidden;
  }
  .ai-section::before {
    content: ''; position: absolute;
    top: -100px; right: -100px; width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, ${COLORS.sage}0C 0%, transparent 70%);
    pointer-events: none;
  }
  .ai-nodes {
    position: absolute; right: 60px; top: 50%;
    transform: translateY(-50%); width: 280px; height: 280px;
    opacity: 0.5;
  }
  .ai-inner {
    position: relative; z-index: 1; max-width: 580px;
  }
  .ai-chips {
    display: flex; gap: 12px; flex-wrap: wrap; margin-top: 40px;
  }
  .ai-chip {
    background: ${COLORS.sage}12;
    border: 1px solid ${COLORS.sage}33;
    padding: 10px 18px; border-radius: 100px;
    font-size: 13px; color: ${COLORS.sageLight};
    font-weight: 400; transition: all 0.2s;
  }
  .ai-chip:hover {
    background: ${COLORS.sage}22;
    border-color: ${COLORS.sage}66;
    color: ${COLORS.mint};
  }

  /* CTA */
  .cta-section {
    text-align: center; padding: 120px 5%;
    position: relative; overflow: hidden;
  }
  .cta-section::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 60% at 50% 50%, ${COLORS.sage}08 0%, transparent 100%);
    pointer-events: none;
  }
  .cta-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(36px, 5vw, 68px);
    font-weight: 800; line-height: 1.05;
    letter-spacing: -0.02em;
    color: ${COLORS.textPrimary}; margin-bottom: 24px;
  }
  .cta-title .accent { color: ${COLORS.sage}; }
  .cta-sub {
    font-size: 16px; color: ${COLORS.textMuted};
    max-width: 440px; margin: 0 auto 48px;
    font-weight: 300; line-height: 1.8;
  }

  /* FOOTER */
  footer {
    border-top: 1px solid ${COLORS.border};
    padding: 60px 5% 40px;
  }
  .footer-top {
    display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 60px; margin-bottom: 60px;
  }
  .footer-brand-name {
    font-family: 'Syne', sans-serif;
    font-size: 18px; font-weight: 700;
    color: ${COLORS.textPrimary}; margin-bottom: 12px;
    display: flex; align-items: center; gap: 8px;
  }
  .footer-brand-desc {
    font-size: 14px; color: ${COLORS.textMuted};
    font-weight: 300; line-height: 1.8; max-width: 260px;
  }
  .footer-col h5 {
    font-family: 'Syne', sans-serif;
    font-size: 13px; font-weight: 600;
    color: ${COLORS.textPrimary}; margin-bottom: 20px;
    letter-spacing: 0.04em;
  }
  .footer-col ul { list-style: none; }
  .footer-col ul li { margin-bottom: 12px; }
  .footer-col ul li a {
    font-size: 14px; color: ${COLORS.textMuted};
    text-decoration: none; font-weight: 300;
    transition: color 0.2s;
  }
  .footer-col ul li a:hover { color: ${COLORS.sageLight}; }
  .footer-bottom {
    border-top: 1px solid ${COLORS.border};
    padding-top: 32px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .footer-copy {
    font-size: 13px; color: ${COLORS.textMuted}55; font-weight: 300;
  }
  .footer-social {
    display: flex; gap: 16px;
  }
  .footer-social a {
    width: 36px; height: 36px; border-radius: 8px;
    border: 1px solid ${COLORS.border};
    display: flex; align-items: center; justify-content: center;
    color: ${COLORS.textMuted}; text-decoration: none;
    font-size: 14px; transition: all 0.2s;
  }
  .footer-social a:hover {
    border-color: ${COLORS.sage}55;
    color: ${COLORS.sageLight};
    background: ${COLORS.sage}0F;
  }

  .modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal {
  background: #111811;
  border: 1px solid rgba(132,177,121,0.2);
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  max-width: 420px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 20px;
}

.modal-form input,
.modal-form textarea {
  background: #0a0f0a;
  border: 1px solid rgba(132,177,121,0.2);
  padding: 12px;
  border-radius: 8px;
  color: white;
}
  .service-card {
  backdrop-filter: blur(10px);
}
  .hero-title .accent {
  background: linear-gradient(90deg, #84B179, #C7EAB8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}img {
  max-width: 100%;
  display: block;
}.mobile-menu a {
  font-size: 24px;
}

  /* DIVIDER */
  .divider {
    width: 100%; height: 1px;
    background: linear-gradient(90deg, transparent, ${COLORS.border}, transparent);
    margin: 0 auto;
  }

  

  /* FADE IN */
  .fade-in {
    opacity: 0; transform: translateY(28px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .fade-in.visible {
    opacity: 1; transform: translateY(0);
  }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    .about-inner { grid-template-columns: 1fr; gap: 48px; }
    .about-visual { height: 260px; }
    .work-grid { grid-template-columns: 1fr 1fr; }
    .footer-top { grid-template-columns: 1fr 1fr; gap: 40px; }
  }
  @media (max-width: 768px) {
    .nav-links, .nav-cta { display: none; }
    .hamburger { display: flex; }
    section { padding: 72px 5%; }
    .services-grid { grid-template-columns: 1fr; }
    .trust-grid { grid-template-columns: 1fr; }
    .work-grid { grid-template-columns: 1fr; }
    .process-steps { grid-template-columns: 1fr 1fr; gap: 32px; }
    .process-steps::after { display: none; }
    .ai-section { padding: 48px 32px; }
    .ai-nodes { display: none; }
    .footer-top { grid-template-columns: 1fr; gap: 32px; }
    .footer-bottom { flex-direction: column; gap: 20px; }
    .hero-ctas { flex-direction: column; }
    .btn-primary, .btn-secondary { text-align: center; }
  }
  @media (max-width: 480px) {
    .process-steps { grid-template-columns: 1fr; }
    .hero { padding: 100px 5% 60px; }
  }
`;

const services = [
  { icon: <Globe size={22} />, name: "Web Development", desc: "Scalable, performant web apps engineered for real-world load." },
  { icon: <Smartphone size={22} />, name: "Mobile Applications", desc: "Precision-built iOS & Android apps." },
  { icon: <Monitor size={22} />, name: "Windows Applications", desc: "Enterprise-grade desktop systems." },
  { icon: <Bot size={22} />, name: "Agentic AI Systems", desc: "Autonomous AI agents that execute workflows." },
  { icon: <Settings size={22} />, name: "Custom Software", desc: "Tailored systems. No bloat. Just performance." },
];

const trustPoints = [
  { title: "Built for scale, not shortcuts", desc: "Every architecture decision is made with 10× growth in mind. We don't patch — we engineer." },
  { title: "AI-first engineering mindset", desc: "Intelligence is built in from day one, not bolted on at the end. It changes how we design everything." },
  { title: "Clean architecture & performance", desc: "Code that is readable, maintainable, and fast. Because technical debt is product debt." },
  { title: "Long-term product thinking", desc: "We don't build features. We build systems that evolve. Your roadmap becomes our obsession." },
];

const projects = [
  {
    tag: "Web App",
    name: "NexaFlow Platform",
    desc: "Enterprise workflow automation",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=1600&auto=format&fit=crop"
  },
  {
    tag: "AI System",
    name: "OptiMind AI",
    desc: "Autonomous decision engine",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1600&auto=format&fit=crop"
  },
  {
    tag: "Desktop App",
    name: "DataVault",
    desc: "Secure offline-first system",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1600&auto=format&fit=crop"
  }
];

const DYNAMIC_WORDS = ["Websites.", "Apps.", "Windows Software.", "Agentic AI."];

const AINodesAnim = () => (
  <svg width="280" height="280" viewBox="0 0 280 280" fill="none">
    {[[140, 140, 8], [80, 80, 5], [200, 80, 5], [60, 180, 5], [220, 180, 5], [140, 40, 4], [40, 140, 4], [240, 140, 4], [140, 240, 4]].map(([x, y, r], i) => (
      <circle key={i} cx={x} cy={y} r={r} fill={COLORS.sage} opacity={0.4 + i * 0.03} />
    ))}
    {[[140, 140, 80, 80], [140, 140, 200, 80], [140, 140, 60, 180], [140, 140, 220, 180], [140, 140, 140, 40], [140, 140, 40, 140], [140, 140, 240, 140], [140, 140, 140, 240]].map(([x1, y1, x2, y2], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={COLORS.sage} strokeWidth="0.5" opacity="0.2" />
    ))}
    {[[80, 80, 60, 60], [200, 80, 210, 55], [60, 180, 40, 200], [220, 180, 240, 195]].map(([x1, y1, x2, y2], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={COLORS.sageLight} strokeWidth="0.4" opacity="0.15" />
    ))}
  </svg>
);

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, style }) {
  const ref = useFadeIn();
  return <div ref={ref} className="fade-in" style={style}>{children}</div>;
}

export default function MainPage() {
  const [scrolled, setScrolled] = useState(false);
  const [dynIdx, setDynIdx] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [active, setActive] = useState("home"); // default section

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setDynIdx(i => (i + 1) % DYNAMIC_WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const workColors = [
    { bg: "linear-gradient(135deg, #1a2e1a 0%, #0f1f0f 100%)", pattern: COLORS.sage },
    { bg: "linear-gradient(135deg, #111a2e 0%, #0a1020 100%)", pattern: "#7B9BC7" },
    { bg: "linear-gradient(135deg, #2a111e 0%, #1a0a12 100%)", pattern: "#C77B9B" },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* NAV */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#" className="nav-logo">
          Code Surgeons Tech
        </a>
        <div className="nav-links">
          {["Home", "Services", "Work", "AI"].map((l) => (
            <button
              key={l}
              onClick={() => scrollToSection(l.toLowerCase())}
              className={active === l.toLowerCase() ? "active" : ""}
            >
              {l}
            </button>
          ))}
        </div>
        <button className="btn-primary" onClick={() => setOpenModal(true)}>
          Start a Project
        </button>        <button className="hamburger" onClick={() => setMobileOpen(true)}>
          <span /><span /><span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
        {["Services", "Work", "Process", "AI", "Contact"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMobileOpen(false)}>{l}</a>
        ))}
      </div>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow-2" />
        <div  >
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Information Services · Est. 2024
          </div>
          <h1 className="hero-title">
            We Build Intelligent<br />
            Digital Systems<br />
            <span className="accent">That Scale.</span>
          </h1>
          <div className="hero-dynamic">
            <div className="hero-dynamic-inner" style={{ opacity: 1 }}>
              {DYNAMIC_WORDS[dynIdx]}
            </div>
          </div>
          <p className="hero-sub">
            Engineering future-ready products with precision, performance, and intelligence.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary">Build With Us</button>
            <button className="btn-secondary">View Work ↓</button>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          Scroll to explore
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section id="about">
        <FadeSection>
          <div className="about-inner">
            <div>
              <div className="section-label">About</div>
              <h2 className="section-title">We don't just develop.<br />We engineer.</h2>
              <p className="section-sub" style={{ marginBottom: 32 }}>
                Scalable digital systems built with precision. Every product we ship carries an AI-first architecture, performance-obsessed engineering, and clean design that lasts.
              </p>
              <p style={{ fontSize: 14, color: COLORS.textMuted, fontWeight: 300, lineHeight: 1.9, maxWidth: 480 }}>
                From web platforms to autonomous AI agents — we operate at the intersection of software craftsmanship and intelligent systems. No shortcuts. No bloat. Just systems that work.
              </p>
            </div>
            <div className="about-visual">
              <div className="about-card about-card-1">
                <div className="about-card-num">50+</div>
                <div className="about-card-label">Products shipped</div>
                <div className="about-card-sub">Across web, mobile, desktop & AI</div>
              </div>
              <div className="about-card about-card-2">
                <div className="about-card-num">100%</div>
                <div className="about-card-label">AI-first architecture</div>
                <div className="about-card-sub">Intelligence built in, not bolted on</div>
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      <div className="divider" />

      {/* SERVICES */}
      <section id="services">
        <FadeSection>
          <div className="section-label">Core Services</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <h2 className="section-title">What we build</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>Five disciplines. One unified engineering standard.</p>
          </div>
        </FadeSection>
        <div className="services-grid">
          {services.map((s, i) => (
            <FadeSection key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="service-card">
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <div className="service-desc">{s.desc}</div>
                <div className="service-arrow">↗</div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* TRUST */}
      <section id="about-trust">
        <FadeSection>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div className="section-label">Philosophy</div>
              <h2 className="section-title">What makes us different</h2>
              <p className="section-sub">Not stats. Not awards. Just the principles we refuse to compromise on.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{
                background: `${COLORS.sage}0C`,
                border: `1px solid ${COLORS.sage}22`,
                borderRadius: 16, padding: "24px 32px",
                fontFamily: "'Syne', sans-serif",
                fontSize: 13, color: COLORS.sage, lineHeight: 2,
                letterSpacing: "0.04em",
              }}>
                {["precision", "performance", "intelligence", "scalability", "craft"].map(w => (
                  <div key={w} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: COLORS.sage, display: "inline-block" }} />
                    {w}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeSection>
        <div className="trust-grid">
          {trustPoints.map((t, i) => (
            <FadeSection key={i} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="trust-item">
                <div className="trust-num">0{i + 1}</div>
                <div className="trust-text">
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* WORK */}
      <section id="work">
        <FadeSection>
          <div className="section-label">Featured Work</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <h2 className="section-title">Selected projects</h2>
            <button className="btn-secondary" style={{ marginBottom: 0 }}>View all work ↗</button>
          </div>
        </FadeSection>
        <div className="work-grid">
          {projects.map((p, i) => (
            <FadeSection key={i} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="work-card">
                <div className="work-visual">
                  <img src={p.image} alt={p.name} />
                  <span className="work-tag">{p.tag}</span>
                </div>
                <div className="work-info">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* PROCESS */}
      <section id="process">
        <FadeSection>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Process</div>
            <h2 className="section-title">How we work</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>Four phases. Zero ambiguity. Every project follows the same disciplined path.</p>
          </div>
        </FadeSection>
        <div className="process-steps">
          {[
            { n: "01", name: "Discover", desc: "Deep dive into your domain, goals, and constraints. No assumptions." },
            { n: "02", name: "Design", desc: "Architecture first, then interface. Systems thinking before pixels." },
            { n: "03", name: "Build", desc: "Precise engineering with continuous delivery and real feedback loops." },
            { n: "04", name: "Scale", desc: "Monitor, optimise, and grow. We stay in the trenches with you." },
          ].map((s, i) => (
            <FadeSection key={i} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="process-step">
                <div className="process-circle">{s.n}</div>
                <div className="process-name">{s.name}</div>
                <div className="process-desc">{s.desc}</div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* AI SECTION */}
      <section id="ai" style={{ paddingTop: 0 }}>
        <FadeSection>
          <div className="ai-section">
            <div className="ai-visual-glow" />
            <div className="ai-inner">
              <div className="section-label">Agentic AI</div>
              <h2 className="section-title" style={{ maxWidth: 480 }}>
                Building autonomous systems that think, decide, and act.
              </h2>
              <p style={{ fontSize: 15, color: COLORS.textMuted, fontWeight: 300, lineHeight: 1.9, maxWidth: 460, marginTop: 16 }}>
                We build AI agents that don't just answer — they operate. From intelligent workflow automation to multi-step decision systems, we're engineering the next layer of software.
              </p>
              <div className="ai-chips">
                {["AI Agents", "Workflow Automation", "Decision Systems", "LLM Integration", "RAG Pipelines", "Multi-agent Orchestration"].map(c => (
                  <span key={c} className="ai-chip">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <FadeSection>
          <h2 className="cta-title">
            Let's build something<br />
            that actually <span className="accent">works.</span>
          </h2>
          <p className="cta-sub">
            No noise. No buzzwords. Just a focused conversation about your product and how we can engineer it right.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" style={{ fontSize: 16, padding: "16px 40px" }}>Start a Project</button>
            <button className="btn-secondary" style={{ fontSize: 16, padding: "15px 32px" }}>Schedule a Call</button>
          </div>
          <p style={{ fontSize: 13, color: COLORS.textMuted + "66", marginTop: 32, fontWeight: 300 }}>
            We respond within 24 hours · No commitment required
          </p>
        </FadeSection>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.sage, display: "inline-block" }} />
              Code Surgeons Tech
            </div>
            <p className="footer-brand-desc">
              Engineering intelligent digital systems with precision, performance, and purpose. Chennai, India.
            </p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              {["Web Development", "Mobile Apps", "Windows Apps", "Agentic AI", "Custom Software"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              {["About", "Work", "Process", "Blog", "Careers"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="#">dev@codesurgeons.in</a></li>
              <li><a href="#">Udumalpettai, Tamil Nadu</a></li>
              <li><a href="#">+91 9791086570</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Code Surgeons Tech. All rights reserved.</p>
          <div className="footer-social">
            {["𝕏", "in", "gh", "yt"].map(s => (
              <a key={s} href="#">{s}</a>
            ))}
          </div>
        </div>
      </footer>

      {openModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={() => setOpenModal(false)}>
              <X size={18} />
            </button>

            <h3>Start Your Project</h3>
            <p>Tell us what you're building</p>

            <form className="modal-form">
              <input placeholder="Your Name" required />
              <input placeholder="Email Address" required />
              <textarea placeholder="Project details..." rows={4} />
              <button className="btn-primary">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}