import { useEffect } from 'react';

/**
 * SEOHead — Injects per-page <title> and <meta> tags dynamically.
 * Targets top Google rankings for: Udumalpet, Coimbatore, Tirupur, Palani,
 * Desktop Apps, Mobile Apps, Agentic AI, CRM, ERP & Business Solutions.
 */
export default function SEOHead({ title, description, keywords, canonical }) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Helper: set/create meta tag
    const setMeta = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description);
      setMeta('meta[property="og:description"]', 'property', 'og:description', description);
      setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }

    if (title) {
      setMeta('meta[property="og:title"]', 'property', 'og:title', title);
      setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    }

    if (keywords) {
      setMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, keywords, canonical]);

  return null;
}

/* ─── Page-level SEO configs ──────────────────────────────────── */
export const SEO_PAGES = {

  home: {
    title: 'CodeSurgeons Tech | Software Company in Udumalpet, Coimbatore, Tirupur & Palani – Desktop, Mobile & AI Solutions',
    description: 'CodeSurgeons Tech – Tamil Nadu\'s top software company. Desktop apps, mobile apps, agentic AI, CRM & ERP systems for businesses in Udumalpet, Coimbatore, Tirupur, Palani and across India.',
    keywords: 'software company udumalpet, software company coimbatore, software company tirupur, software company palani, desktop application development tamilnadu, mobile app development coimbatore, agentic AI solutions india, CRM software tamilnadu, ERP systems coimbatore, business software solutions, IT company udumalpet, CodeSurgeons Tech',
    canonical: 'https://www.codesurgeonstech.com/',
  },

  services: {
    title: 'Software Services | Desktop Apps · Mobile Apps · CRM · ERP · AI – CodeSurgeons Tech Coimbatore',
    description: 'Full-spectrum software services: Windows desktop applications, Android & iOS mobile apps, custom CRM & ERP systems, agentic AI, and web development for businesses in Coimbatore, Udumalpet, Tirupur, Palani and Tamil Nadu.',
    keywords: 'desktop application development coimbatore, mobile application development tirupur, windows app development tamilnadu, custom CRM development udumalpet, ERP software palani, enterprise software solutions coimbatore, software services tamilnadu, business software development india, web application development coimbatore',
    canonical: 'https://www.codesurgeonstech.com/services',
  },

  ai: {
    title: 'Agentic AI Solutions | AI Automation, LLM Integration & Autonomous Agents – CodeSurgeons Tech Tamil Nadu',
    description: 'Build autonomous AI agents, LLM-powered workflows, RAG pipelines, and multi-agent systems. CodeSurgeons Tech delivers cutting-edge agentic AI solutions for enterprises in Coimbatore, Tamil Nadu and India.',
    keywords: 'agentic AI solutions india, agentic AI company coimbatore, autonomous AI agents tamilnadu, LLM integration services, RAG pipeline development, AI workflow automation, artificial intelligence solutions coimbatore, ChatGPT integration india, Gemini AI solutions, AI business automation tamilnadu, machine learning company coimbatore',
    canonical: 'https://www.codesurgeonstech.com/ai',
  },

  portfolio: {
    title: 'Portfolio | Our Work – Desktop, Mobile, AI & Business Software – CodeSurgeons Tech',
    description: 'Explore CodeSurgeons Tech\'s portfolio of delivered desktop applications, mobile apps, agentic AI systems, CRM & ERP projects for clients across Udumalpet, Coimbatore, Tirupur, Palani and beyond.',
    keywords: 'software portfolio coimbatore, desktop app projects tamilnadu, mobile app projects india, CRM implementation examples, ERP case studies coimbatore, AI projects tamilnadu, CodeSurgeons portfolio, software company projects udumalpet',
    canonical: 'https://www.codesurgeonstech.com/portfolio',
  },

  contact: {
    title: 'Contact Us | Hire Top Software Developers in Udumalpet, Coimbatore & Tamil Nadu – CodeSurgeons Tech',
    description: 'Get in touch with CodeSurgeons Tech for desktop app, mobile app, agentic AI, CRM/ERP and business software development. Serving Udumalpet, Coimbatore, Tirupur, Palani, Tamil Nadu & India.',
    keywords: 'hire software developer udumalpet, hire software developer coimbatore, software company contact tamilnadu, IT company contact palani, mobile app developer tirupur, desktop developer coimbatore, AI developer tamilnadu, contact CodeSurgeons Tech',
    canonical: 'https://www.codesurgeonstech.com/contact',
  },

  blog: {
    title: 'Tech Blog | Desktop, Mobile, AI & Business Software Insights – CodeSurgeons Tech Coimbatore',
    description: 'Read the latest insights on desktop application development, mobile apps, agentic AI, CRM/ERP systems, and business software trends from the CodeSurgeons Tech team in Tamil Nadu.',
    keywords: 'software development blog coimbatore, agentic AI blog india, desktop app development tips, mobile app tips tamilnadu, CRM ERP insights, business software blog, tech blog udumalpet, CodeSurgeons blog',
    canonical: 'https://www.codesurgeonstech.com/blog',
  },

  careers: {
    title: 'Careers | Join the Best Software Company in Coimbatore & Tamil Nadu – CodeSurgeons Tech',
    description: 'Join CodeSurgeons Tech – Tamil Nadu\'s elite software engineering team. Open roles in desktop development, mobile apps, AI engineering, and full-stack web development in Udumalpet and Coimbatore.',
    keywords: 'software developer jobs coimbatore, software engineer jobs udumalpet, mobile developer jobs tamilnadu, AI engineer jobs coimbatore, desktop developer jobs palani, software company hiring tamilnadu, CodeSurgeons careers',
    canonical: 'https://www.codesurgeonstech.com/careers',
  },

};
