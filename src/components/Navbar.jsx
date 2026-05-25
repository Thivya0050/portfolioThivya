import { useEffect, useState } from 'react';
import { navLinks } from '../data/experience';
import { sectionHref, SECTION_IDS } from '../data/links';
import { handleSectionClick, scrollToSection } from '../utils/scrollToSection';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(SECTION_IDS.about);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && navLinks.some((l) => l.id === hash)) {
      scrollToSection(hash);
    }
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a
          href={sectionHref(SECTION_IDS.hero)}
          className="navbar__logo"
          onClick={(e) => handleSectionClick(e, SECTION_IDS.hero, closeMenu)}
        >
          TT.
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={sectionHref(link.id)}
              className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
              onClick={(e) => handleSectionClick(e, link.id, closeMenu)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
