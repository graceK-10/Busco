import { useEffect, useState } from 'react';

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Predator from './pages/Predator';

function App() {
  const getRoute = () => {
    if (window.location.hash.startsWith('#/about')) {
      return 'about';
    }

    if (window.location.hash.startsWith('#/contact')) {
      return 'contact';
    }

    if (window.location.hash.startsWith('#/predator')) {
      return 'predator';
    }

    if (window.location.hash.startsWith('#/gallery')) {
      return 'gallery';
    }

    return 'home';
  };

  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleRouteChange = () => setRoute(getRoute());

    window.addEventListener('hashchange', handleRouteChange);

    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  if (route === 'about') {
    return <About />;
  }

  if (route === 'contact') {
    return <Contact />;
  }

  if (route === 'predator') {
    return <Predator />;
  }

  if (route === 'gallery') {
    return <Gallery />;
  }

  return <Home />;
}

export default App;