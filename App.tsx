import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { ReviewsLocation } from './pages/ReviewsLocation';
import { Contact } from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Layout>
        <div key={location.pathname} className="animate-fade-in">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/carta" element={<Menu />} />
            <Route path="/ubicacion" element={<ReviewsLocation />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>
      </Layout>
    </>
  );
};

export default App;