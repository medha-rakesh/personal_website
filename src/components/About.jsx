export default function About() {
  return (
    <section id="about" className="section">
      <img className="corner corner-br" src="/nature/hillside.png" alt="" aria-hidden="true" />
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-index">04</span>
          <h2 className="section-title">About</h2>
        </div>
        <div className="about-grid reveal">
          <img className="about-photo" src="/headshot.jpg" alt="Medha Rakesh" />
          <p className="about-body">
            I'm a Data Science and Computer Science student at UC Berkeley who likes taking an
            idea all the way to something people can use. My favorite work sits where{' '}
            <strong>full-stack engineering</strong> meets <strong>machine learning and data</strong>{' '}
            — building the pipeline, the model, and the interface that ties them together. I care
            about correct, well-tested code, and I'm looking for a{' '}
            <strong>software engineering or data science internship</strong> where I can build
            alongside a strong team.
          </p>
        </div>
      </div>
    </section>
  )
}
