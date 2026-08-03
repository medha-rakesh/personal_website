export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <h2 className="reveal">Let's build something.</h2>
        <p className="contact-lead reveal">
          Open to software engineering and data science internships. The fastest way to
          reach me is email — or grab my résumé below.
        </p>
        <div className="contact-links reveal">
          <a href="mailto:medha_rakesh@berkeley.edu">Email ↗</a>
          <a href="https://linkedin.com/in/medha-rakesh" target="_blank" rel="noopener">
            LinkedIn ↗
          </a>
          <a href="https://github.com/medha-rakesh" target="_blank" rel="noopener">
            GitHub ↗
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener">
            Résumé ↗
          </a>
        </div>
        <div className="footer">
          <span>© {new Date().getFullYear()} Medha Rakesh</span>
          <span>medha_rakesh@berkeley.edu · Bay Area, CA</span>
        </div>
      </div>
    </section>
  )
}
