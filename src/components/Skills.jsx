import { skillGroups } from '../data/skills';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title reveal">Skills</h2>
        <p className="section-subtitle reveal">Technologies I work with daily</p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skills__group reveal">
              <div className="skills__header">
                <span className="skills__icon">{group.icon}</span>
                <h3>{group.label}</h3>
              </div>
              <div className="skills__pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills__pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
