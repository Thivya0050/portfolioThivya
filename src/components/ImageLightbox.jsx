import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ImageLightbox.css';

function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  if (!src) return null;

  return createPortal(
    <div
      className="image-lightbox"
      onClick={onClose}
      role="presentation"
    >
      <button
        type="button"
        className="image-lightbox__close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close image"
      >
        ×
      </button>
      <img
        src={src}
        alt={alt || 'Enlarged project preview'}
        className="image-lightbox__img"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
}

export default ImageLightbox;
