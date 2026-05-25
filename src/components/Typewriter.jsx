import { useEffect, useState } from 'react';
import './Typewriter.css';

const ROLES = [
  'AI & Robotics Engineer',
  'Python Developer',
  'Computer Vision Specialist',
  'System Integration Engineer',
  'SaaS Builder',
];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseAtEnd = 1800;
    const pauseAfterDelete = 400;

    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAtEnd);
    } else if (isDeleting && text === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, pauseAfterDelete);
    } else {
      timeout = setTimeout(() => {
        const nextLength = isDeleting ? text.length - 1 : text.length + 1;
        setText(current.substring(0, nextLength));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <p className="typewriter" aria-live="polite">
      <span className="typewriter-text">{text}</span>
      <span className="typewriter-cursor">|</span>
    </p>
  );
}

export default Typewriter;
