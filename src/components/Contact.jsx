import { EMAIL } from '../data/links';
import './Contact.css';
import { useState } from 'react';
import BookingModal from './BookingModal';

function Contact() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title reveal">Contact</h2>
        <p className="section-subtitle reveal">Let&apos;s build something together</p>

        <div className="contact__grid reveal">
          <div className="contact__links">
            <div className="contact__link">
              <span className="contact__label">Email</span>
              <span
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => window.open('mailto:thivyathrshn@gmail.com')}
              >
                {EMAIL}
              </span>
            </div>
            <div className="contact__link">
              <span className="contact__label">LinkedIn</span>
              <span
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/thivya-tharshini-b30918264/',
                    '_blank'
                  )
                }
              >
                linkedin.com/in/thivya-tharshini-b30918264
              </span>
            </div>
            <div className="contact__link">
              <span className="contact__label">GitHub</span>
              <span
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => window.open('https://github.com/thivya0050', '_blank')}
              >
                github.com/thivya0050
              </span>
            </div>
          </div>

          <div className="contact__cta">
            <h3>DM me for my resume &amp; portfolio</h3>
            <p>Expected Salary: RM 4,000 (Negotiable)</p>
            <button
              type="button"
              className="btn-primary contact-cta-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsBookingOpen(true);
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        <footer className="contact__footer reveal">
          <p>
            Design &amp; Developed by <span className="gradient-text">Thivya Tharshini</span>
          </p>
          <p className="footer-quote">&ldquo;The best way to predict the future is to invent it.&rdquo;</p>
        </footer>
      </div>
      {isBookingOpen ? <BookingModal onClose={() => setIsBookingOpen(false)} /> : null}
    </section>
  );
}

export default Contact;
