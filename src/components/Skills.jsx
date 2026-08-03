const groups = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'C', 'TypeScript', 'JavaScript', 'SQL', 'R', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Tools',
    items: [
      'FastAPI',
      'Next.js',
      'React Native',
      'REST APIs',
      'scikit-learn',
      'pandas',
      'NumPy',
      'Git',
      'Supabase',
    ],
  },
  {
    title: 'Concepts',
    items: [
      'Data structures',
      'Algorithms',
      'Full-stack development',
      'Data pipelines',
      'Machine learning',
      'Computer architecture',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-index">03</span>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {groups.map((g) => (
            <div key={g.title} className="skill-group reveal">
              <h4>{g.title}</h4>
              <div className="skill-list">
                {g.items.map((it) => (
                  <span key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
