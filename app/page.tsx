import Link from "next/link";

type Metric = {
  label: string;
  value: string;
  description: string;
};

type Feature = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const metrics: Metric[] = [
  {
    label: "Learners worldwide",
    value: "18k+",
    description: "college & high-school students growing faster with Neuronova"
  },
  {
    label: "Project completions",
    value: "72%",
    description: "students launch a portfolio-ready capstone within 8 weeks"
  },
  {
    label: "Mentor network",
    value: "140+",
    description: "industry experts from FAANG, MIT, and Series A startups"
  }
];

const features: Feature[] = [
  {
    id: "mentorship",
    title: "Personalized 1:1 mentorship",
    description:
      "Every learner is paired with a vetted mentor who keeps them accountable, adapts the pace, and unlocks confidence.",
    bullets: ["Weekly mentor sessions", "Goal-based skill mapping", "Progress dashboards that adapt"]
  },
  {
    id: "projects",
    title: "Project-based curriculum",
    description:
      "Learners move from fundamentals to portfolio projects in just weeks with living curricula built alongside industry experts.",
    bullets: ["Real startup briefs", "Integrated AI tools & feedback", "Showcase-ready portfolio site"]
  },
  {
    id: "community",
    title: "Social learning community",
    description:
      "Cohort-based challenges and micro-peers provide momentum. Learners collaborate, ship, and celebrate together.",
    bullets: ["24/7 global community", "Peer code reviews & studio days", "Gamified streaks and rewards"]
  }
];

const testimonials: Testimonial[] = [
  {
    name: "Elena Torres",
    role: "Incoming CS Major, Stanford",
    quote:
      "Neuronova helped me launch a machine-learning project that became the highlight of my college application. The mentorship was game-changing."
  },
  {
    name: "Ajay Patel",
    role: "High School Senior, Texas",
    quote:
      "I finally found a program that adapts to how I learn. The weekly mentor syncs and community kept me accountable without feeling overwhelming."
  },
  {
    name: "Melissa Zhang",
    role: "Product Design Intern, Early-stage startup",
    quote:
      "The curriculum made me think like a designer. Having real client-style briefs gave me proof of work that impressed recruiters."
  }
];

const curriculumTracks = [
  {
    title: "AI & Data Futures",
    detail: "Build AI copilots, master Python, ship LLM-powered experiences."
  },
  {
    title: "Product Design Lab",
    detail: "Craft end-to-end UX case studies with Figma and user testing."
  },
  {
    title: "Full-Stack Launchpad",
    detail: "Build cloud-native apps with React, Next.js, and serverless APIs."
  }
];

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-pill">
                <span className="hero-dot" />
                Next-generation learning journeys
              </span>
              <h1>
                Empower every learner to design their <span className="gradient-text">future-ready career</span>.
              </h1>
              <p>
                Neuronova blends adaptive curriculum, mentor-led accountability, and social learning to help ambitious
                students develop in-demand skills they can showcase today.
              </p>
              <div className="hero-actions">
                <Link className="btn-primary" href="#get-started">
                  Explore programs
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12h14m0 0-6-6m6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link className="btn-secondary" href="#curriculum">
                  View curriculum
                </Link>
              </div>
              <div className="hero-bottom">
                <div className="hero-avatar-stack">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className="avatar" />
                  ))}
                </div>
                <div className="hero-caption">
                  Trusted by ambitious students in 23 countries and schools like MIT, UCLA, and UVA.
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-sphere">
                <div className="hero-glow" />
                <div className="hero-core">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#2f62ff" />
                        <stop offset="100%" stopColor="#7b61ff" />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="70" stroke="url(#grad1)" strokeWidth="2.5" opacity="0.35" />
                    {[15, 35, 55].map((r) => (
                      <circle key={r} cx="100" cy="100" r={r} stroke="url(#grad1)" strokeWidth="1.5" opacity="0.5" />
                    ))}
                    {Array.from({ length: 18 }).map((_, i) => {
                      const angle = (i * 20 * Math.PI) / 180;
                      const radius = 80;
                      const x = 100 + radius * Math.cos(angle);
                      const y = 100 + radius * Math.sin(angle);
                      return <circle key={i} cx={x} cy={y} r="2.5" fill="#1f2937" opacity="0.4" />;
                    })}
                  </svg>
                </div>
              </div>
              <div className="floating-badge">
                <span>Momentum</span>
                <strong>4.8 / 5</strong>
                <span>Learner satisfaction score</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="metrics">
        <div className="container metrics-grid">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="value-prop" id="value">
        <div className="container value-grid">
          <div className="value-copy card">
            <h2>Personalized pathways engineered to accelerate outcomes.</h2>
            <p>
              Static courses can&apos;t keep up with the pace of innovation. Neuronova builds bespoke learning paths driven
              by data and mentor insight, so students ship meaningful work and arrive at their next chapter confident.
            </p>
            <ul>
              <li>
                <span className="dot dot-blue" />
                Adaptive curriculum aligned with each learner&apos;s goals
              </li>
              <li>
                <span className="dot dot-yellow" />
                Mentorship marketplace with verified industry experts
              </li>
              <li>
                <span className="dot dot-purple" />
                Applied learning that translates to real outcomes
              </li>
            </ul>
          </div>
          <div className="value-stats">
            <div className="value-card card">
              <h3>Outcomes within 90 days</h3>
              <div className="value-stat">
                <strong>67%</strong>
                <span>landed internships or competitions</span>
              </div>
              <div className="value-stat">
                <strong>84%</strong>
                <span>reported higher confidence in technical interviews</span>
              </div>
              <div className="tags">
                <span className="tag">Project sprints</span>
                <span className="tag">Mentor pods</span>
                <span className="tag">Career narratives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="curriculum">
        <div className="container">
          <div className="features-intro">
            <span className="section-heading">What&apos;s inside</span>
            <div>
              <h2>Programs designed for velocity and depth.</h2>
              <p>
                Each track blends cutting-edge curriculum, mentor guidance, and a community that pushes you forward. Start
                with fundamentals, move into applied labs, and graduate with proof of work recruiters love.
              </p>
            </div>
          </div>
          <div className="features-grid">
            {features.map((feature) => (
              <article key={feature.id} className="feature-card card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul>
                  {feature.bullets.map((bullet) => (
                    <li key={bullet}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M13 4 6.5 11 3 7.273"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="curriculum card" id="programs">
        <div className="container curriculum-grid">
          <div>
            <span className="section-heading">Curated tracks</span>
            <h2>Choose the lane that matches your ambition.</h2>
            <p>
              Every program blends live labs, async content, and community challenges. Mentors co-create a roadmap that
              keeps momentum high while ensuring mastery of fundamentals.
            </p>
          </div>
          <div className="curriculum-list">
            {curriculumTracks.map((track) => (
              <div key={track.title} className="curriculum-item">
                <span>{track.title}</span>
                <p>{track.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials" id="stories">
        <div className="container">
          <div className="testimonials-heading">
            <span className="section-heading">Student stories</span>
            <h2>Proof that personalized learning unlocks real outcomes.</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="testimonial-card card">
                <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <figcaption>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="get-started">
        <div className="container cta-card card">
          <div>
            <h2>Ready to accelerate your learning journey?</h2>
            <p>
              Get matched with a mentor, outline your personalized roadmap, and join a cohort of students building the
              future.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="btn-primary" href="https://cal.com" target="_blank">
              Book a discovery call
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17 17 7m0 0H9m8 0v8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link className="btn-secondary" href="mailto:hello@neuronova.io">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <span className="footer-logo">Neuronova</span>
            <p>
              Empowering the next generation of innovators with personalized learning, real-world projects, and the
              mentors that make it possible.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Programs</h4>
              <Link href="#curriculum">AI & Data</Link>
              <Link href="#curriculum">Product Design</Link>
              <Link href="#curriculum">Full-Stack</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link href="#value">Why Neuronova</Link>
              <Link href="#stories">Success Stories</Link>
              <Link href="mailto:hello@neuronova.io">Contact</Link>
            </div>
            <div>
              <h4>Resources</h4>
              <Link href="https://blog.neuronova.io" target="_blank">
                Blog
              </Link>
              <Link href="https://neuronova.io/guide" target="_blank">
                Learning Guide
              </Link>
              <Link href="https://neuronova.io/privacy" target="_blank">
                Privacy
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <span>© {new Date().getFullYear()} Neuronova Learning, Inc. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
