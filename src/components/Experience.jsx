import { experience } from '../data/experience.js'
import Carousel from './Carousel.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <img className="decor decor-pinkhill" src="/nature/pinkhill.png" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-index">02</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="reveal">
          <Carousel>
            {experience.map((x) => (
              <article key={x.id} className="slide">
                <h3>{x.org}</h3>
                <p className="slide-tag">{x.role}</p>
                <p className="slide-meta">
                  {x.dates} · {x.location}
                </p>
                <p className="slide-desc">{x.summary}</p>
              </article>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
