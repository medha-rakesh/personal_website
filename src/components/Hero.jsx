export default function Hero() {
  return (
    <header id="top" className="hero">
      <img className="hero-dangle" src="/nature/wildflowers.png?v=2" alt="" aria-hidden="true" />
      <div className="wrap">
        <p className="eyebrow reveal">Berkeley · Data Science + Computer Science · '28</p>
        <h1 className="reveal">
          I build software that <em>ships</em> — from data to interface.
        </h1>
        <p className="hero-sub reveal">
          Full-stack platforms, AI agents, and ML pipelines. A strong CS foundation, a bias
          toward correct, well-tested code over quick demos, and a Top-8-of-~300 hackathon
          build to prove it.
        </p>
        <div className="hero-cta reveal">
          <a href="#projects" className="btn btn-primary">
            View work
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener" className="btn btn-ghost">
            Resume ↗
          </a>
        </div>
        <div className="hero-links reveal">
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
    </header>
  )
}
