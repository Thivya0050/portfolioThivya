import { EMAIL, LINKS } from '../data/links';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title reveal">Contact</h2>
        <p className="section-subtitle reveal">Let&apos;s build something together</p>

        <div className="contact__grid reveal">
          <div className="contact__links">
            <a href={LINKS.email} className="contact__link">
              <span className="contact__label">Email</span>
              <span>{EMAIL}</span>
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <span className="contact__label">LinkedIn</span>
              <span>linkedin.com/in/ThivyaTharshini</span>
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <span className="contact__label">GitHub</span>
              <span>github.com/thivya0050</span>
            </a>
          </div>

          <div className="contact__cta">
            <h3>DM me for my resume &amp; portfolio</h3>
            <p>Expected: RM 4,500 and above</p>
            <a href={LINKS.emailHire} className="btn btn--gradient">
              Get in Touch
            </a>
          </div>
        </div>

        <footer className="contact__footer reveal">
          <p>Design &amp; Developed by Thivya Tharshini</p>
          <p className="contact__quote">&ldquo;The best way to predict the future is to invent it.&rdquo;</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
