import { certifications, activities } from '../data/experience';
import './Certifications.css';

function Certifications() {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <h2 className="section-title reveal">Certifications &amp; Activities</h2>
        <p className="section-subtitle reveal">Continuous learning &amp; community</p>

        <div className="certifications__grid">
          <div className="certifications__block reveal">
            <h3>Certifications</h3>
            <ul>
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="certifications__block reveal">
            <h3>Activities</h3>
            <ul>
              {activities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
