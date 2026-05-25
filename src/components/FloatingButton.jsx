import { LINKS } from '../data/links';
import './FloatingButton.css';

function FloatingButton() {
  return (
    <a
      href={LINKS.emailHire}
      className="floating-btn"
      aria-label="Hire me via email"
    >
      ✉ Hire me
    </a>
  );
}

export default FloatingButton;
