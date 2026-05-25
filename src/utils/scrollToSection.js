const NAVBAR_OFFSET = 88;

export function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return false;

  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });

  if (window.history.replaceState) {
    window.history.replaceState(null, '', `#${sectionId}`);
  } else {
    window.location.hash = sectionId;
  }

  return true;
}

export function handleSectionClick(event, sectionId, onNavigate) {
  event.preventDefault();
  scrollToSection(sectionId);
  if (onNavigate) onNavigate();
}
