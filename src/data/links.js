export const EMAIL = 'thivyathrshn@gmail.com';

export const LINKS = {
  email: `mailto:${EMAIL}`,
  emailResume: `mailto:${EMAIL}?subject=${encodeURIComponent('Resume Request')}`,
  emailHire: `mailto:${EMAIL}?subject=${encodeURIComponent('Hire Me')}`,
  linkedin: 'https://www.linkedin.com/in/ThivyaTharshini',
  github: 'https://github.com/thivya0050',
  portfolio: 'https://thivya0050.github.io/portfolioThivya/',
};

export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  projects: 'projects',
  skills: 'skills',
  experience: 'experience',
  education: 'education',
  certifications: 'certifications',
  contact: 'contact',
};

export function sectionHref(sectionId) {
  return `#${sectionId}`;
}
