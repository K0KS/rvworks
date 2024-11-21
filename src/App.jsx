import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { initGTM, trackPageView } from './utils/analytics';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import References from './pages/References';
import Contact from './pages/Contact';
import Gdpr from './pages/Gdpr';
import NotFound from './pages/NotFound';

import Rekonstrukce from './pages/services/Rekonstrukce';
// Import služby
import Fasady from './pages/services/Fasady';
import Site from './pages/services/Site';
import Instalaterstvi from './pages/services/Instalaterstvi';
import Malirstvi from './pages/services/Malirstvi';
import VenkovniPrace from './pages/services/VenkovniPrace';
import PovrchoveUpravy from './pages/services/PovrchoveUpravy';
import StavebniPrace from './pages/services/StavebniPrace';

// Analytics wrapper component
function AnalyticsWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Tag Manager
    initGTM();
  }, []);

  useEffect(() => {
    // Track page views on route change
    trackPageView(location.pathname, document.title);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

function App() {
  return (
    <Router>
      <AnalyticsWrapper>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="sluzby" element={<Services />}>
              <Route path="rekonstrukce" element={<Rekonstrukce />} />
              <Route path="fasady" element={<Fasady />} />
              <Route path="site" element={<Site />} />
              <Route path="instalaterstvi" element={<Instalaterstvi />} />
              <Route path="malirstvi" element={<Malirstvi />} />
              <Route path="venkovni-prace" element={<VenkovniPrace />} />
              <Route path="povrchove-upravy" element={<PovrchoveUpravy />} />
              <Route path="stavebni-prace" element={<StavebniPrace />} />
            </Route>
            <Route path="o-nas" element={<About />} />
            <Route path="reference" element={<References />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="gdpr" element={<Gdpr />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnalyticsWrapper>
    </Router>
  );
}

export default App;
