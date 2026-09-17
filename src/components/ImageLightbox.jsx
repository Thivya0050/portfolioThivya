import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './ImageLightbox.css';

function ImageLightbox({
  src,
  alt,
  onClose,
  mediaType = 'image',
  loop = true,
}) {
  const [muted, setMuted] = useState(true);

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

  const isVideo = mediaType === 'video';

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
        aria-label={isVideo ? 'Close video' : 'Close image'}
      >
        ×
      </button>

      {isVideo ? (
        <div
          className="image-lightbox__media-wrap"
          onClick={(e) => e.stopPropagation()}
          role="presentation"
        >
          <video
            src={src}
            className="image-lightbox__img image-lightbox__video"
            autoPlay
            loop={loop}
            muted={muted}
            playsInline
            controls={false}
          />
          <button
            type="button"
            className="image-lightbox__mute"
            onClick={(e) => {
              e.stopPropagation();
              setMuted((m) => !m);
            }}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
          >
            {muted ? '🔇' : '🔊'}
          </button>
        </div>
      ) : (
        <img
          src={src}
          alt={alt || 'Enlarged project preview'}
          className="image-lightbox__img"
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>,
    document.body
  );
}

export default ImageLightbox;
