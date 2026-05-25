import { useState } from 'react';
import { projects, FILTERS, filterProjects } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filtered = filterProjects(projects, activeFilter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title reveal">Projects</h2>
        <p className="section-subtitle reveal">Real-world AI, robotics &amp; SaaS builds</p>

        <div className="projects__filters reveal">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`projects__filter ${activeFilter === f.id ? 'projects__filter--active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
