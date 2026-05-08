export const PROJECTS = [
  {
    id: 'stripe',
    title: 'STRIPE',
    cat: 'Fintech · Payments Platform',
    desc: 'Industry-defining payments infrastructure. Studied for its conversion-optimized onboarding and frictionless checkout UX.',
    url: 'https://stripe.com',
    tags: ['React', 'Node.js', 'WebGL', 'CRO'],
    metrics: [
      { n: '99.99%', l: 'Uptime SLA' },
      { n: '$1T+',   l: 'Processed Annually' },
    ],
    body: "Stripe's site is a masterclass in conversion engineering — progressive disclosure, micro-copy that eliminates friction, and a performance budget that keeps every interaction sub-100ms.",
    featured: true,
  },
  {
    id: 'linear',
    title: 'LINEAR',
    cat: 'SaaS · Project Management',
    desc: 'Beautifully engineered product-led growth site. Sub-second load, keyboard-first UX, and a landing page that converts at 4× industry average.',
    url: 'https://linear.app',
    tags: ['Next.js', 'Framer Motion', 'TypeScript', 'CRO'],
    metrics: [
      { n: '4.2s',  l: 'Avg session time' },
      { n: '12%',   l: 'Free → Paid CVR' },
    ],
    body: "Linear's website perfectly mirrors the product philosophy: fast, focused, and opinionated. Every section earns its place. The scroll animations feel native, not bolted on.",
    featured: false,
  },
  {
    id: 'vercel',
    title: 'VERCEL',
    cat: 'DevTools · Cloud Platform',
    desc: 'Deploy-to-production in seconds. WebGL animations, dark/light mode, and world-class developer-focused copy.',
    url: 'https://vercel.com',
    tags: ['Next.js', 'Three.js', 'Edge Functions', 'A/B Testing'],
    metrics: [
      { n: '0.9s', l: 'TTFB globally' },
      { n: '98',   l: 'Lighthouse Score' },
    ],
    body: "Vercel's site is its own best demo. Incremental static regeneration, edge rendering, and the boldest use of real-time data visualizations in the DevTools space.",
    featured: false,
  },
  {
    id: 'notion',
    title: 'NOTION',
    cat: 'Productivity · All-in-one Workspace',
    desc: 'Viral product-led growth with a homepage that converts curiosity into sign-ups through progressive storytelling.',
    url: 'https://notion.so',
    tags: ['React', 'Framer', 'Content Strategy', 'Viral Loops'],
    metrics: [
      { n: '30M+', l: 'Active users' },
      { n: '$10B', l: 'Valuation' },
    ],
    body: "Notion's growth is a case study in product virality. Their web presence is deceptively simple — clean, typographic, and relentlessly focused on 'show don't tell'.",
    featured: false,
  },
]

export const SERVICES = [
  { num: '01', name: 'Conversion-Driven Development', tag: 'CRO · Strategy' },
  { num: '02', name: '3D & WebGL Experiences',        tag: 'Three.js · GLSL' },
  { num: '03', name: 'Full-Stack Architecture',        tag: 'React · Node · SQL' },
  { num: '04', name: 'Performance Engineering',        tag: 'Core Web Vitals' },
  { num: '05', name: 'UX & Motion Design',             tag: 'GSAP · Framer' },
]

export const TESTIMONIALS = [
  {
    text: 'The redesign increased our checkout completion by 280% in the first month. The ROI was immediate.',
    name: 'SARAH CHEN',
    role: 'CEO, Nexus Commerce',
    init: 'SC',
  },
  {
    text: "None of the other developers I've worked with come close to this craft level. The WebGL hero won us two awards.",
    name: 'MARCO VITELLI',
    role: 'Creative Director, Phantom Labs',
    init: 'MV',
  },
  {
    text: 'Landing page went from 1.2% to 6.8% conversion rate. Visible ROI within days of going live.',
    name: 'JAMES PORTER',
    role: 'Head of Growth, Velour SaaS',
    init: 'JP',
  },
  {
    text: 'A 98 Lighthouse score on a site processing thousands of real-time data points. Genuinely unreal.',
    name: 'AISHA RAHMAN',
    role: 'CTO, Aurum Finance',
    init: 'AR',
  },
]

export const PROCESS = [
  { n: '01', t: 'Discover',   d: 'Deep-dive into your goals, users, and data. No assumptions — only evidence.' },
  { n: '02', t: 'Strategize', d: 'Map the funnel. Identify friction. Define measurable success metrics.' },
  { n: '03', t: 'Build',      d: 'Pixel-perfect, performant, and production-ready from day one.' },
  { n: '04', t: 'Optimize',   d: 'Launch, measure, iterate. Data-driven refinement until numbers sing.' },
]

export const SKILLS = [
  'React / Next.js', 'Three.js', 'Node.js', 'PostgreSQL',
  'GSAP', 'TypeScript', 'Tailwind', 'Figma',
  'A/B Testing', 'CRO', 'AWS', 'WebGL',
]

export const STATS = [
  { n: '340', s: '%', l: 'Avg. conversion lift' },
  { n: '98',  s: '',  l: 'Lighthouse score' },
  { n: '60',  s: '+', l: 'Projects shipped' },
  { n: '$12M',s: '+', l: 'Revenue generated' },
]

export const STACK = ['WebGL','Three.js','React','Next.js','GSAP','Node.js','PostgreSQL','TypeScript','CRO','A/B Testing','Tailwind','Figma']
