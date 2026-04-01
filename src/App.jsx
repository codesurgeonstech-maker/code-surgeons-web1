import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AgenticAI from './pages/AgenticAI';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import ContactModal from './components/ContactModal';

const PAGES = {
  home: Home,
  services: Services,
  ai: AgenticAI,
  portfolio: Portfolio,
  blog: Blog,
  contact: Contact,
  careers: Careers,
};

export default function App() {
  const [page, setPage] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const PageComponent = PAGES[page] || Home;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar page={page} setPage={setPage} setModalOpen={setModalOpen} />
      <main style={{ flex: 1, paddingTop: 72 }}>
        <PageComponent setPage={setPage} setModalOpen={setModalOpen} />
      </main>
      <Footer setPage={setPage} setModalOpen={setModalOpen} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
