import { projects } from '../data/projects.js'
import Carousel from './Carousel.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <img className="corner corner-tl" src="/nature/hillside.png" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-index">01</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="reveal">
          <Carousel>
            {projects.map((p) => (
              <article key={p.id} className="slide">
                <h3>{p.name}</h3>
                <p className="slide-tag">{p.tagline}</p>
                {p.award && <p className="slide-award">{p.award}</p>}
                <p className="slide-desc">{p.description}</p>
                <p className="slide-outcome">{p.outcome}</p>
                <div className="slide-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {p.links.map((l) => (
                  <a key={l.href} className="slide-link" href={l.href} target="_blank" rel="noopener">
                    {l.label} ↗
                  </a>
                ))}
              </article>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
