import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  Globe,
  Menu,
  MessageSquareMore,
  PhoneCall,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import './App.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'featured-work', label: 'Featured Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const services = [
  {
    title: 'Web App Development',
    description: 'Fast, scalable web apps with modern front-end and robust architecture.',
    icon: Code2,
  },
  {
    title: 'Product Strategy',
    description: 'Roadmaps, feature planning, and UX thinking to ship the right product faster.',
    icon: Rocket,
  },
  {
    title: 'Performance & Security',
    description: 'Optimization, audits, and safe-by-default engineering practices for growth.',
    icon: ShieldCheck,
  },
];

const featuredWork = [
  {
    title: 'Fintech Dashboard Platform',
    category: 'SaaS Product',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    summary: 'Built a real-time analytics dashboard with role-based access and reporting automation.',
  },
  {
    title: 'Healthcare Booking Suite',
    category: 'Enterprise',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    summary: 'Designed and delivered a patient-friendly booking flow and provider management panel.',
  },
  {
    title: 'Retail Commerce Experience',
    category: 'E-Commerce',
    image:
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80',
    summary: 'Created a conversion-focused storefront with smart search and dynamic merchandising.',
  },
];

const metrics = [
  { value: '60+', label: 'Projects Delivered' },
  { value: '25+', label: 'Expert Team Members' },
  { value: '98%', label: 'Client Satisfaction' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sourceAction, setSourceAction] = useState('Start Project');

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const openFormModal = (actionLabel) => {
    setSourceAction(actionLabel);
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const closeModal = () => setIsModalOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    closeModal();
    alert('Thanks for contacting Code Surgeons. We will get back to you soon.');
  };

  return (
    <div className="site-shell" id="home">
      <header className="topbar">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <Sparkles size={20} aria-hidden="true" />
          <span>Code Surgeons</span>
        </a>

        <nav className={`desktop-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="topbar-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => openFormModal('Start Project')}
          >
            Start Project
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="kicker">Product Engineering Studio</p>
            <h1 id="hero-title">We craft modern digital products that scale with your business.</h1>
            <p className="hero-subtitle">
              From idea to launch, we design and build high-performance web experiences that users love.
            </p>
            <div className="hero-cta">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => openFormModal('Start Project')}
              >
                Start Project <ArrowRight size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => openFormModal('Contact Us')}
              >
                Contact Us <MessageSquareMore size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="hero-stats" aria-label="Company highlights">
            {metrics.map((item) => (
              <article key={item.label} className="metric-card">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section" aria-labelledby="services-title">
          <div className="section-header">
            <p className="kicker">Services</p>
            <h2 id="services-title">Everything you need to build and grow online</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <article key={service.title} className="service-card">
                  <span className="service-icon">
                    <ServiceIcon size={22} aria-hidden="true" />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button
                    type="button"
                    className="inline-link"
                    onClick={() => openFormModal('Service Inquiry')}
                  >
                    Talk to us <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section id="featured-work" className="section" aria-labelledby="work-title">
          <div className="section-header">
            <p className="kicker">Featured Work</p>
            <h2 id="work-title">Selected projects from real-world industries</h2>
          </div>
          <div className="work-grid">
            {featuredWork.map((project) => (
              <article key={project.title} className="work-card">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="work-content">
                  <p className="work-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <button
                    type="button"
                    className="inline-link"
                    onClick={() => openFormModal('View Project Details')}
                  >
                    Request similar project <ExternalLink size={16} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about" aria-labelledby="about-title">
          <div>
            <p className="kicker">About</p>
            <h2 id="about-title">A focused team that ships with quality and speed</h2>
            <p>
              We blend strategy, design, and engineering to deliver polished digital products. Our process is transparent,
              collaborative, and outcome-driven from day one.
            </p>
          </div>
          <ul className="about-list">
            <li>
              <CheckCircle2 size={18} aria-hidden="true" /> Agile delivery with weekly demos
            </li>
            <li>
              <CheckCircle2 size={18} aria-hidden="true" /> Dedicated support and iteration cycles
            </li>
            <li>
              <CheckCircle2 size={18} aria-hidden="true" /> Strong focus on performance and usability
            </li>
          </ul>
        </section>

        <section id="contact" className="section contact" aria-labelledby="contact-title">
          <div>
            <p className="kicker">Contact</p>
            <h2 id="contact-title">Let’s discuss your idea</h2>
            <p>Need a website, product upgrade, or dedicated engineering support? We are ready to help.</p>
          </div>
          <div className="contact-cards">
            <article className="contact-card">
              <Globe size={20} aria-hidden="true" />
              <h3>Online Consultation</h3>
              <p>Book a quick product discussion with our team.</p>
            </article>
            <article className="contact-card">
              <PhoneCall size={20} aria-hidden="true" />
              <h3>Direct Connect</h3>
              <p>Share your requirement and we will call you back.</p>
            </article>
            <article className="contact-card">
              <BriefcaseBusiness size={20} aria-hidden="true" />
              <h3>Project Planning</h3>
              <p>Get a rough timeline and execution roadmap.</p>
            </article>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => openFormModal('Contact Us')}
          >
            Contact Us
          </button>
        </section>
      </main>

      <footer className="footer">
        <p>© {currentYear} Code Surgeons. All rights reserved.</p>
      </footer>

      {isModalOpen && (
        <div className="modal-backdrop" role="presentation" onClick={closeModal}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="modal-close" onClick={closeModal} aria-label="Close popup">
              <X size={18} aria-hidden="true" />
            </button>
            <h2 id="application-modal-title">Simple Application Form</h2>
            <p className="modal-caption">Opened from: {sourceAction}</p>

            <form className="application-form" onSubmit={handleFormSubmit}>
              <label htmlFor="fullName">Full Name *</label>
              <input id="fullName" name="fullName" type="text" placeholder="Enter your name" required />

              <label htmlFor="email">Email Address *</label>
              <input id="email" name="email" type="email" placeholder="Enter your email" required />

              <label htmlFor="projectType">Project Type *</label>
              <select id="projectType" name="projectType" required defaultValue="">
                <option value="" disabled>
                  Select project type
                </option>
                <option value="website">Website</option>
                <option value="web-app">Web App</option>
                <option value="ui-ux">UI/UX Redesign</option>
                <option value="other">Other</option>
              </select>

              <label htmlFor="message">Requirement Details *</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us what you need..."
                required
              />

              <button type="submit" className="btn btn-primary btn-full">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
