export default function Intro() {
  return (
    <header id="top" className="intro">
      <div className="intro-banner">
        <div className="intro-banner-bg" data-parallax aria-hidden="true" />
        <div className="wrap intro-banner-inner">
          <span className="eyebrow">Berkeley · Data Science + Computer Science · '28</span>
          <h1>Medha Rakesh</h1>
        </div>
      </div>

      <div className="wrap intro-body">
        <div className="intro-grid reveal">
          <img className="intro-photo" src="/headshot.jpg?v=3" alt="Medha Rakesh" />
          <div className="intro-text">
            <p className="intro-lead">
              I'm a Data Science and Computer Science student at UC Berkeley who likes taking
              an idea all the way to something people can use. My favorite work sits where{' '}
              <strong>full-stack engineering</strong> meets{' '}
              <strong>machine learning and data</strong>, building the pipeline, the model, and
              the interface that ties them together. I care about correct, well-tested code, and
              I'm looking for a{' '}
              <strong>software engineering or data science internship</strong> where I can build
              alongside a strong team.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View work
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener" className="btn btn-ghost">
                Resume ↗
              </a>
            </div>
            <div className="hero-links">
              <a href="tel:+16506781496">
                <i aria-hidden="true">☏</i> 650-678-1496
              </a>
              <a href="mailto:medha_rakesh@berkeley.edu">medha_rakesh@berkeley.edu</a>
              <a href="https://github.com/medha-rakesh" target="_blank" rel="noopener">
                GitHub
              </a>
              <a href="https://linkedin.com/in/medha-rakesh" target="_blank" rel="noopener">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
