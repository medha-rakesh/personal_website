export const experience = [
  {
    id: 'salt',
    org: 'The SALT Research Group',
    role: 'Machine Learning Research Assistant',
    location: 'Berkeley, CA',
    dates: 'Jan – May 2026',
    summary:
      'Engineered an automated pipeline that parses raw instrument output, computes cross-trial statistics, and exports structured data, replacing a manual workflow. Built signal-preprocessing logic (frequency filtering, sign-convention correction, trial averaging) to measure molten-salt conductivity across 500 to 700°C for nuclear-reactor safety monitoring.',
    points: [
      'Engineered an automated data-processing pipeline that parses raw instrument output files, computes statistics across experimental trials, and exports structured data for downstream analysis, replacing a manual workflow.',
      'Implemented signal-preprocessing logic (frequency filtering, sign-convention correction, and trial averaging) to measure the electrical conductivity of molten salt across a 500–700°C range for nuclear-reactor safety monitoring.',
    ],
  },
  {
    id: 'datagood',
    org: 'DataGood at Berkeley',
    role: 'Data Science Researcher',
    location: 'Berkeley, CA',
    dates: 'Jan 2026 – Present',
    summary:
      'Built and compared linear-regression, random-forest, and neural-net models to predict urban heat-island intensity across California census tracts. Adding physical features (tree canopy, traffic, ozone) raised performance from R²=0.32 to R²=0.81. Identified 357 dual-burden tracts and translated Tableau findings into geospatial visualizations for non-technical policy partners.',
    points: [
      'Built and compared multiple ML models (linear regression, random forest, neural network) to predict urban heat-island intensity across California census tracts; adding physical environmental features (tree canopy, traffic, ozone) raised model performance from R²=0.32 to R²=0.81.',
      'Identified 357 dual-burden census tracts across LA, Riverside, and San Diego, and translated Tableau findings into geospatial visualizations and a final pitch deck to communicate heat-mitigation priorities to non-technical policy partners.',
    ],
  },
  {
    id: 'bloomberg',
    org: 'Bloomberg',
    role: 'KWK Instructor',
    location: 'San Francisco, CA',
    dates: 'Jul 2026',
    summary:
      'Taught SQL, relational database design, and statistical analysis to 30 high-school scholars over a two-week intensive, leading labs on multi-table joins and query optimization with one-on-one debugging. Led capstone teams through the full development lifecycle: requirements, user research, wireframing, iterative code review, and final demos to industry mentors.',
    points: [
      'Taught SQL, relational database design, and statistical analysis to 30 high-school scholars over a two-week intensive, leading labs on multi-table joins and query optimization with one-on-one debugging support.',
      'Led capstone teams through the full software development lifecycle, from requirements gathering and user research through wireframing, iterative code review, and final demos to industry mentors.',
    ],
  },
]
