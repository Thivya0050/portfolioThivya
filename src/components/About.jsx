import './About.css';

const miniCards = [
  {
    icon: '🧠',
    title: 'AI/ML',
    text: 'Computer vision, pose estimation, and LLM-integrated apps in Python',
  },
  {
    icon: '💻',
    title: 'Full-Stack',
    text: 'Web apps and SaaS — React/Next.js, Node, Firebase, and PostgreSQL',
  },
  {
    icon: '🏢',
    title: 'Enterprise SaaS',
    text: 'Architected HubsMon — a multi-tenant real-time monitoring platform',
  },
  {
    icon: '🌍',
    title: 'Remote First',
    text: 'Self-driven, async-ready, experienced delivering independently',
  },
];

const badges = ['📍 Selangor', '🌐 Remote-ready', '⚡ Available now'];

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <p className="section-subtitle reveal">Who I am &amp; what I build</p>

        <div className="about__grid">
          <div className="about__text reveal">
            <p>
              Full-Stack Developer and AI Engineer based in Selangor, Malaysia, with over a
              year of combined industry and internship experience and a Bachelor&apos;s in
              Software Engineering. I build production-ready SaaS and AI systems — including
              HubsMon, a multi-tenant platform monitoring retail equipment in real time, and
              a full-stack POS system for Malaysian F&amp;B and retail businesses. I&apos;m also the
              founder of Nalam AI, Malaysia&apos;s first all-in-one AI SaaS platform, built and
              architected independently alongside full-time work. Other projects span AI
              agents using Claude API and Gemini AI, facial recognition attendance (SABAS),
              and a webcam-controlled 3D robotic arm. Actively seeking remote full-time or
              part-time roles.
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
