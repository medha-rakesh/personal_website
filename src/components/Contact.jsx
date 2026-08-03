export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <div className="section-head head-img reveal">
          <span className="section-index">04</span>
          <h2 className="section-title">Let's build something.</h2>
          <img className="contact-frog" src="/nature/frog.png" alt="" aria-hidden="true" />
        </div>
        <p className="contact-lead reveal">
          Open to software engineering and data science internships. Fastest way to reach me is
          email or a call, or grab my resume below.
        </p>
        <div className="contact-links reveal">
          <a href="mailto:medha_rakesh@berkeley.edu">email ↗</a>
          <a href="tel:+16506781496">650-678-1496 ↗</a>
          <a href="https://linkedin.com/in/medha-rakesh" target="_blank" rel="noopener">
            linkedin ↗
          </a>
          <a href="https://github.com/medha-rakesh" target="_blank" rel="noopener">
            github ↗
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener">
            resume ↗
          </a>
        </div>
        <p className="footer-meta">
          © {new Date().getFullYear()} Medha Rakesh · 650-678-1496 · medha_rakesh@berkeley.edu · Bay Area, CA
        </p>
      </div>
      <img className="footer-flowers" src="/nature/wildflowers.png?v=2" alt="" aria-hidden="true" />
    </section>
  )
}
