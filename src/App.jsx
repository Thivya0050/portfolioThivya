import { useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import FloatingButton from './components/FloatingButton';
import './App.css';

function App() {
  useEffect(() => {
    let observer = null;

    const revealInView = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.98 && rect.bottom >= 0) {
          el.classList.add('visible');
        }
      });
    };

    const initObserver = () => {
      if (observer) observer.disconnect();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.05 }
      );

      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
      revealInView();
    };

    const timer = setTimeout(initObserver, 100);

    window.addEventListener('scroll', revealInView, { passive: true });
    const mutation = new MutationObserver(() => initObserver());
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
      mutation.disconnect();
      window.removeEventListener('scroll', revealInView);
    };
  }, []);

  return (
    <div className="app">
      <ParticleCanvas />
      <Navbar />
      <main className="app-main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <FloatingButton />
    </div>
  );
}

export default App;
