import Navigation from './components/navbar/Navigation';
import Hero from './components/hero/Hero';
import TechStack from './components/stack/TechStack';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';
import ContributionGraph from './components/contribution/ContributionGraph';

const THEME_LOCAL_STORAGE_KEY = 'portfolio-sale.amlak';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';

  const theme = window.localStorage.getItem('theme');
  if (theme === 'light' || theme === 'dark') {
    return theme;
  }

  return 'dark';
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  //set it to body and save it to local storage
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <>
      <Navigation
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
        }
      />

      <Hero />

      <ContributionGraph />

      <TechStack />

      <Services />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
