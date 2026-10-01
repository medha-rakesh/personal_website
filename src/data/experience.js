export const experience = [
  {
    id: 'gitmachine',
    org: 'GitMachine',
    role: 'Machine Learning Engineer Intern',
    location: 'Remote',
    dates: 'Sep 2026 – Present',
    summary:
      "Onboarded open-source LLM model families onto the GPU serving stack end to end, from checkpoint audits and serving-engine verification to pre-deployment memory and latency prediction. Validated that each model serves correctly and meets its performance targets, including auditing an MXFP8-quantized checkpoint against the hardware vendor's recipe over framework defaults.",
  },
  {
    id: 'legali',
    org: 'Legali AI',
    role: 'Software Engineering Intern',
    location: 'Remote',
    dates: 'Sep 2026 – Present',
    summary:
      'Shipped a full redesign of the public homepage for Lea, an agentic AI legal platform expanding access to justice for survivors and self-represented users, built end to end in Next.js, React, TypeScript, and Framer Motion. Added keyboard-accessible components, persistent light/dark theming, and motion-driven sections, and restructured the information architecture to consolidate conversion flows.',
  },
  {
    id: 'aikifield',
    org: 'AikiField',
    role: 'Applied ML Intern',
    location: 'Remote',
    dates: 'Sep 2026 – Present',
    summary:
      'Fine-tuned a neural text-to-speech model (XTTS v2) in PyTorch on a single-speaker dataset to improve cloned-voice naturalness over OpenVoice and RVC baselines. Ran an A/B evaluation of OpenVoice, RVC, and XTTS on naturalness and speaker similarity, and integrated speaker diarization into the automated data-prep pipeline.',
  },
  {
    id: 'hp',
    org: 'HP',
    role: 'ML Systems Researcher (Contract)',
    location: 'Berkeley, CA',
    dates: 'Sep 2026 – Present',
    summary:
      'Built a reproducible benchmark harness capturing 14 metrics per run (time-to-first-token, tokens/sec, memory, power) with one-command reruns by containerizing llama.cpp, Ollama, PyTorch, and vLLM in Docker. Benchmarked LLM inference on the HP ZGX Nano across model sizes from 7B to 200B, three quantization levels, and 128K contexts, and built a cost model comparing dollars per million tokens against cloud GPUs and frontier APIs.',
  },
  {
    id: 'synopsys',
    org: 'Synopsys',
    role: 'Software & ML Systems Engineer (Contract)',
    location: 'Remote',
    dates: 'Dec 2025 – May 2026',
    summary:
      'Engineered a C++ and Django dashboard with parameterized REST endpoints and WebSocket feeds to surface real-time power and simulation metrics across 50+ hardware benchmarks for chip-design engineers. Cut repeat API latency by 68% across 10,000+ simulations with Redis caching, and trained gradient-boosted models to forecast chip power from netlist features, saving 2+ simulation hours per sign-off.',
  },
  {
    id: 'salt',
    org: 'The SALT Research Group',
    role: 'Machine Learning Research Assistant',
    location: 'Berkeley, CA',
    dates: 'Jan – May 2026',
    summary:
      'Engineered an automated pipeline that parses raw instrument output, computes cross-trial statistics, and exports structured data, replacing a manual workflow. Built EIS signal-preprocessing logic (frequency filtering, sign-convention correction, trial averaging) to measure the electrical conductivity of FLiBe molten salt across 500 to 700°C for nuclear-reactor safety monitoring.',
  },
  {
    id: 'bloomberg',
    org: 'Bloomberg',
    role: 'Data Science Instructor, Kode With Klossy',
    location: 'San Francisco, CA',
    dates: 'Jul 2026',
    summary:
      'Guided 30 high-school scholars to finished capstone demos in a two-week intensive, teaching SQL, relational database design, and statistical analysis through hands-on labs on multi-table joins, query optimization, and one-on-one debugging. Led teams through the full development lifecycle, from requirements and wireframes to code review and final demos.',
  },
]
