import './About.css';

const miniCards = [
  {
    icon: '🤖',
    title: 'AI & Robotics',
    text: 'Building intelligent systems that bridge software and physical engineering',
  },
  {
    icon: '🏢',
    title: 'Enterprise SaaS',
    text: 'Architected HubsMon — a multi-tenant real-time monitoring platform',
  },
  {
    icon: '👁️',
    title: 'Computer Vision',
    text: '98% accuracy facial recognition, gesture detection, pose estimation',
  },
  {
    icon: '🌍',
    title: 'Remote First',
    text: 'Self-driven, async-ready, experienced delivering independently',
  },
];

const badges = ['📍 Selangor', '🌐 Remote-ready', '💼 RM 4,000+', '⚡ Available now'];

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <p className="section-subtitle reveal">Who I am &amp; what I build</p>

        <div className="about__grid">
          <div className="about__text reveal">
            <p>
              I&apos;m an AI &amp; Robotics Automation Engineer and Python Developer based in Selangor,
              Malaysia — passionate about building intelligent systems that solve real problems at scale.
              From building a 3D robotic arm controlled by hand gestures using just a webcam, to
              architecting HubsMon — a full enterprise SaaS platform monitoring retail equipment across
              multiple branches in real time — I thrive at the intersection of AI, software, and physical
              systems. With nearly a year of industry experience and a Bachelor&apos;s in Software Engineering,
              I&apos;m actively seeking remote full-time or part-time roles with legitimate companies providing
              EPF &amp; SOCSO.
            </p>
            <div className="about__badges">
              {badges.map((b) => (
                <span key={b} className="about__badge">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="about__cards">
            {miniCards.map((card, i) => (
              <div key={card.title} className={`about__card reveal reveal--delay-${i % 4}`}>
                <span className="about__card-icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
