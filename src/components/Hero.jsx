export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="wrap">
        <p className="hero-kicker reveal">UC Berkeley · Data Science &amp; CS · May 2028</p>
        <h1 className="reveal">
          Medha Rakesh — I build software <em>end to end.</em>
        </h1>
        <p className="hero-sub reveal">
          From full-stack platforms and AI agents to ML and data pipelines. A strong CS
          foundation, a bias toward correct, well-tested code over quick demos, and a
          Top-8-of-~300 hackathon platform to show for it.
        </p>
        <div className="hero-cta reveal">
          <a href="#projects" className="btn btn-primary">
            View projects
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener" className="btn btn-ghost">
            Résumé ↗
          </a>
        </div>
        <div className="hero-links reveal">
          <a href="https://github.com/medha-rakesh" target="_blank" rel="noopener">
            GitHub
          </a>
          <a href="https://linkedin.com/in/medha-rakesh" target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href="mailto:medha_rakesh@berkeley.edu">Email</a>
        </div>
      </div>
    </header>
  )
}
