import { education } from '../data/experience';
import './Education.css';

function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title reveal">Education</h2>
        <p className="section-subtitle reveal">Academic foundation</p>

        <div className="education__grid">
          {education.map((item) => (
            <div key={item.degree} className="education__card reveal">
              <span className="education__icon">{item.icon}</span>
              <h3>{item.degree}</h3>
              <p className="education__school">{item.school}</p>
              <p className="education__period">{item.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
