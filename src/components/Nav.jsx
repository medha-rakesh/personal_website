export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-mono">
          MR
        </a>
        <div className="nav-links">
          <a href="#projects">projects</a>
          <a href="#experience">experience</a>
          <a href="#skills">skills</a>
          <a href="#contact">contact</a>
          <a href="/resume.pdf" target="_blank" rel="noopener" className="nav-resume">
            resume ↗
          </a>
        </div>
      </div>
    </nav>
  )
}
