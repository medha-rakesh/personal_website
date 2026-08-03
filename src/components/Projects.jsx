import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-index">01</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.id} className="card reveal">
              <div className="card-top">
                <div>
                  <h3>{p.name}</h3>
                  <p className="card-tagline">{p.tagline}</p>
                </div>
              </div>
              {p.award && <span className="card-award">{p.award}</span>}
              <p className="card-desc">{p.description}</p>
              <p className="card-outcome">{p.outcome}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              {p.links.length > 0 && (
                <div className="card-links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener">
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
