import { useEffect, useState } from 'react';

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const getRoute = () => {
    if (window.location.hash.startsWith('#/about')) {
      return 'about';
    }

    if (window.location.hash.startsWith('#/contact')) {
      return 'contact';
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

  return <Home />;
}

export default App;