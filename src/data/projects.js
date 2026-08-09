export const projects = [
  {
    id: 'contractalpha',
    name: 'ContractAlpha',
    tagline: 'Government Contract Investment Platform',
    award: 'Top 8 Finalist of ~300 teams',
    description:
      'A full-stack platform I owned end-to-end that turns federal contract data into stock-investment signals. A pipeline ingests USAspending.gov awards, a FastAPI backend serves the signals, and a Next.js / TypeScript frontend surfaces them. I engineered a date-cutoff layer that prevents lookahead bias in backtests, and parallelized batched LLM calls to cut runtime by ~20s.',
    outcome: 'Backtested portfolio outperformed the S&P 500 by 24.7%.',
    tags: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'REST APIs'],
    links: [{ label: 'GitHub', href: 'https://github.com/Manya-msk/contract-alpha' }],
  },
  {
    id: 'cloudscape',
    name: 'Cloudscape',
    tagline: 'AI Incident Commander',
    award: 'Best Use of Perplexity Agent API',
    description:
      'An AI-powered tool that responds the moment a cloud alarm fires: it autonomously pulls CloudWatch metrics, logs, and CloudTrail events in parallel, eliminating 20–30 minutes of manual context-gathering. It then returns a likely root cause with a confidence score, ranked fix commands, and a ready-to-use postmortem.',
    outcome: 'Cuts 20–30 min of manual triage down to a single automated report.',
    tags: ['Next.js', 'AWS SDK', 'Perplexity Sonar', 'Supabase'],
    links: [{ label: 'GitHub', href: 'https://github.com/anikag35/cloudscape' }],
  },
  {
    id: 'thought-galaxy',
    name: 'Thought Galaxy',
    tagline: 'Voice-First Thought Mapping',
    award: 'UC Berkeley AI Hackathon 2026',
    description:
      'A voice-first tool that turns a spoken brain-dump into a living constellation of thoughts. Deepgram streams speech to text, Claude classifies each thought as a task, emotion, or idea and draws connections between them, and a D3 bubble galaxy animates the result. Past sessions are stored in Redis vector memory so any bubble can be asked for a grounded next step, and Fetch.ai agents can act on tasks like adding calendar events or drafting emails.',
    outcome: 'Turns a spoken brain-dump into an organized, searchable thought map in real time.',
    tags: ['React', 'D3', 'FastAPI', 'Deepgram', 'Anthropic', 'Redis', 'Fetch.ai'],
    links: [{ label: 'GitHub', href: 'https://github.com/gargi-ramacharan/mentalgalaxy' }],
  },
  {
    id: 'risk-identifier',
    name: 'Multi-Class Risk Identifier',
    tagline: 'Datathon for Social Good',
    award: 'Most Creative Award, 30+ teams',
    description:
      'A predictive at-home assessment model built on self-measurable data to help reduce unnecessary ER visits. Trained and tuned a Random Forest classifier in scikit-learn and framed the results for a non-technical audience during the final pitch.',
    outcome: 'Earned the Most Creative Award among 30+ competing teams.',
    tags: ['Python', 'Random Forest', 'scikit-learn'],
    links: [{ label: 'GitHub', href: 'https://github.com/medha-rakesh/DatathonSubmission' }],
  },
  {
    id: 'ai4all',
    name: 'UCSF AI4ALL',
    tagline: 'Genomics Classification Research',
    award: '',
    description:
      'Built machine-learning models on skin-biopsy transcriptomic data to classify lesional vs. non-lesional samples, and used feature-importance analysis to surface candidate gene biomarkers for improved diagnostics.',
    outcome: 'Achieved 94% classification accuracy with Logistic Regression.',
    tags: ['Python', 'scikit-learn', 'Logistic Regression'],
    links: [],
  },
]
