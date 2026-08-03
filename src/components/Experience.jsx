import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-index">02</span>
          <h2 className="section-title">Experience</h2>
        </div>
        {experience.map((x) => (
          <div key={x.id} className="xp-item reveal">
            <div>
              <h3 className="xp-org">{x.org}</h3>
              <p className="xp-role">{x.role}</p>
              <p className="xp-meta">
                {x.dates} · {x.location}
              </p>
            </div>
            <ul className="xp-points">
              {x.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
