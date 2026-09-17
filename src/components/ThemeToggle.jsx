import { useCallback, useEffect, useState } from 'react';
import './ThemeToggle.css';

const STORAGE_KEY = 'theme';

function readStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === 'light' || value === 'dark') return value;
  } catch {
    /* localStorage unavailable */
  }
  return 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* localStorage unavailable */
  }
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.getAttribute('data-theme') || readStoredTheme();
  });
  const [swinging, setSwinging] = useState(false);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setSwinging(true);
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const onSwingEnd = () => setSwinging(false);

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      className={`theme-bulb ${isLight ? 'theme-bulb--on' : ''} ${swinging ? 'theme-bulb--swing' : ''}`}
      onClick={toggleTheme}
      onAnimationEnd={onSwingEnd}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      <span className="theme-bulb__cord" aria-hidden="true" />
      <svg
        className="theme-bulb__icon"
        viewBox="0 0 24 36"
        width="40"
        height="58"
        aria-hidden="true"
      >
        {/* Rotate so screw/base attaches to the cord and glass hangs below */}
        <g transform="rotate(180 12 18)">
          <path
            className="theme-bulb__filament"
            d="M9.5 14.5c0-1.2.6-2.2 1.5-2.8.9.6 1.5 1.6 1.5 2.8"
            fill="none"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            className="theme-bulb__glass"
            d="M7 13.5c0-3.6 2.2-6.5 5-6.5s5 2.9 5 6.5c0 2.4-1.1 3.8-2 5.2-.5.8-.8 1.5-.8 2.3H9.8c0-.8-.3-1.5-.8-2.3-.9-1.4-2-2.8-2-5.2z"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <rect className="theme-bulb__base" x="9.2" y="21" width="5.6" height="2.2" rx="0.6" />
          <path
            className="theme-bulb__screw"
            d="M10 24h4M10.4 25.6h3.2M11 27h2"
            fill="none"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </button>
  );
}

export default ThemeToggle;
