import { useCallback, useEffect, useRef, useState } from 'react';
import ImageLightbox from './ImageLightbox';
import './ProjectCard.css';

const BADGE_COLORS = {
  green: 'badge--green',
  pink: 'badge--pink',
  purple: 'badge--purple',
  amber: 'badge--amber',
};

function getMediaList(project) {
  if (project.mediaType === 'video') {
    return project.media ? [project.media] : [];
  }
  return Array.isArray(project.media) ? project.media : [];
}

function ProjectCard({ project }) {
  const videoRef = useRef(null);
  const slideshowRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightboxMedia, setLightboxMedia] = useState(null);

  const resolvedMedia = getMediaList(project);
  const hasMedia = resolvedMedia.length > 0;
  const firstImage = resolvedMedia[0];

  const closeLightbox = useCallback(() => setLightboxMedia(null), []);

  const openLightbox = (src, type = 'image') => (e) => {
    e.stopPropagation();
    if (!src) return;
    if (type === 'video' && videoRef.current) {
      videoRef.current.pause();
    }
    setLightboxMedia({ src, type });
  };

  useEffect(() => {
    return () => {
      if (slideshowRef.current) clearInterval(slideshowRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (project.mediaType === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    if (project.mediaType === 'slideshow' && resolvedMedia.length > 1) {
      slideshowRef.current = setInterval(() => {
        setSlideIndex((i) => (i + 1) % resolvedMedia.length);
      }, 1000);
    }
  };

  const handleMouseLeave = () => {
    if (project.mediaType === 'video' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (slideshowRef.current) {
      clearInterval(slideshowRef.current);
      slideshowRef.current = null;
    }
    setSlideIndex(0);
  };

  const renderMedia = () => {
    if (project.mediaType === 'video') {
      if (project.media) {
        return (
          <video
            ref={videoRef}
            src={project.media}
            muted
            playsInline
            loop
            className="project-card__media-el project-card__media-el--zoomable"
            onClick={openLightbox(project.media, 'video')}
          />
        );
      }
      return <div className="project-card__placeholder project-card__placeholder--video" />;
    }

    if (project.mediaType === 'slideshow') {
      if (hasMedia) {
        return (
          <img
            src={resolvedMedia[slideIndex]}
            alt={`${project.title} preview`}
            className="project-card__media-el project-card__media-el--zoomable"
            onClick={openLightbox(resolvedMedia[slideIndex])}
          />
        );
      }
      return <div className="project-card__placeholder" />;
    }

    if (firstImage) {
      return (
        <img
          src={firstImage}
          alt={project.title}
          className="project-card__media-el project-card__media-el--static project-card__media-el--zoomable"
          onClick={openLightbox(firstImage)}
        />
      );
    }

    return <div className="project-card__placeholder" />;
  };

  return (
    <article
      className={`project-card reveal ${project.featured ? 'project-card--featured' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card__media">{renderMedia()}</div>

      {lightboxMedia && (
        <ImageLightbox
          src={lightboxMedia.src}
          alt={project.title}
          mediaType={lightboxMedia.type}
          loop={lightboxMedia.type === 'video'}
          onClose={closeLightbox}
        />
      )}

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className={`project-card__badge ${BADGE_COLORS[project.badgeColor] || ''}`}>
            {project.badge}
          </span>
          {project.featured && <span className="project-card__star">⭐ Featured</span>}
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
        <p className="project-card__desc">{project.description}</p>

        <ul className="project-card__highlights">
          {project.highlights.map((h) => (
            <li key={h}>✓ {h}</li>
          ))}
        </ul>

        {project.testimonial && (
          <blockquote className="pcard-testimonial">
            <p className="pcard-testimonial__quote">&ldquo;{project.testimonial.quote}&rdquo;</p>
            <footer className="pcard-testimonial__attr">— {project.testimonial.attribution}</footer>
          </blockquote>
        )}

        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>

        {project.limitation && (
          <div className="pcard-limitation">
            <span className="pcard-limitation-label">Known limitation:</span> {project.limitation}
          </div>
        )}

        {(project.liveUrl || project.githubUrl || project.repoNote) && (
          <div className="pcard-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="pcard-link-btn pcard-live"
                onClick={(e) => e.stopPropagation()}
              >
                🌐 Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="pcard-link-btn pcard-github"
                onClick={(e) => e.stopPropagation()}
              >
                🐙 GitHub
              </a>
            )}
            {project.repoNote && (
              <span className="pcard-repo-note">{project.repoNote}</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
