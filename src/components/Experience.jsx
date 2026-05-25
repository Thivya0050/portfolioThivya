import { experiences } from '../data/experience';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title reveal">Experience</h2>
        <p className="section-subtitle reveal">Industry &amp; internship journey</p>

        <div className="timeline">
          {experiences.map((job, index) => (
            <div key={job.title} className="timeline__item reveal">
              <div className="timeline__marker" style={{ '--job-color': job.color }}>
                <span className="timeline__dot" />
              </div>
              <div className="timeline__card">
                <div className="timeline__header">
                  <h3>{job.title}</h3>
                  <span className="timeline__type">{job.type}</span>
                </div>
                <p className="timeline__company">
                  {job.company} · <span>{job.period}</span>
                </p>
                <p className="timeline__desc">{job.description}</p>
                <div className="timeline__tags">
                  {job.tags.map((tag) => (
                    <span key={tag} style={{ borderColor: job.color, color: job.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
