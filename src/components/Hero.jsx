import { useRef, useState } from 'react';
import { getAsset } from '../utils/getAsset';
import { useAnimatedCounter } from '../hooks/useCounter';
import { LINKS, SECTION_IDS, sectionHref } from '../data/links';
import { handleSectionClick } from '../utils/scrollToSection';
import Typewriter from './Typewriter';
import './Hero.css';

const profileSrc = getAsset('profile.jpg');

function Hero() {
  const tiltRef = useRef(null);
  const [imgError, setImgError] = useState(false);

  const statAccuracy = useAnimatedCounter(98, { suffix: '%' });
  const statCerts = useAnimatedCounter(6, { suffix: '+' });
  const statProjects = useAnimatedCounter(8);

  const handleTiltMove = (e) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = Math.max(-14, Math.min(14, (-y / rect.height) * 28));
    const rotateY = Math.max(-14, Math.min(14, (x / rect.width) * 28));
    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleTiltLeave = () => {
    const el = tiltRef.current;
    if (el) el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section id="hero" className="hero hero-section">
      <div className="hero-inner container">
        <div className="hero__grid">
          <div className="hero__content hero-text">
            <div className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              Open to remote work · RM 4,500+
            </div>

            <p className="hero__greeting">Hi, I&apos;m</p>
            <h1 className="hero__name gradient-text">Thivya Tharshini</h1>
            <Typewriter />
            <p className="hero__bio">
              AI &amp; Robotics Automation Engineer building real-world intelligent systems — from
              enterprise SaaS platforms to gesture-controlled robotics using just a webcam and Python.
            </p>

            <div className="hero__actions">
              <a
                href={sectionHref(SECTION_IDS.projects)}
                className="btn btn--gradient"
                onClick={(e) => handleSectionClick(e, SECTION_IDS.projects)}
              >
                View My Work →
              </a>
              <a href={LINKS.emailResume} className="btn btn--ghost">
                DM for Resume
              </a>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-value">{statAccuracy}</span>
                <span className="hero__stat-label">Face recognition accuracy</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">{statCerts}</span>
                <span className="hero__stat-label">Certifications</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">{statProjects}</span>
                <span className="hero__stat-label">Projects shipped</span>
              </div>
            </div>
          </div>

          <div className="hero__visual hero-photo-wrap">
            <div
              className="hero__tilt-wrap"
              ref={tiltRef}
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="hero__rings" aria-hidden="true">
                <span className="hero__ring" />
                <span className="hero__ring hero__ring--2" />
                <span className="hero__ring hero__ring--3" />
              </div>

              <div className="hero__avatar">
                {profileSrc && !imgError ? (
                  <img src={profileSrc} alt="Thivya Tharshini" onError={() => setImgError(true)} />
                ) : (
                  <div className="hero__avatar-placeholder">
                    <span>TT</span>
                  </div>
                )}
              </div>

              <span className="hero__float-badge hero__float-badge--top">🤖 AI Engineer</span>
              <span className="hero__float-badge hero__float-badge--bottom">🐍 Python Dev</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href={sectionHref(SECTION_IDS.about)}
        className="hero__scroll-indicator"
        aria-label="Scroll to About section"
        onClick={(e) => handleSectionClick(e, SECTION_IDS.about)}
      >
        <div className="hero__mouse">
          <span className="hero__mouse-wheel" />
        </div>
      </a>
    </section>
  );
}

export default Hero;
