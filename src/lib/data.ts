export type ProjectSection = 'marketing' | 'tools' | '3d'

export const SECTIONS: { key: ProjectSection; label: string; sub: string }[] = [
  { key: 'marketing', label: 'Marketing Sites',      sub: 'Conversion-focused builds that turn visitors into revenue.' },
  { key: 'tools',     label: 'Tools & Dashboards',   sub: 'Functional products built for real workflows and teams.' },
  { key: '3d',        label: '3D Sites',              sub: 'WebGL & Three.js experiences that stop the scroll.' },
]

export const PROJECTS = [

    {
    id: 'century-21',
    section: 'marketing' as ProjectSection,
    title: 'Century 21 - Goldkey Realty',
    cat: 'MLS · CRM · Custom Theme',
    desc: 'Custom WordPress real estate theme with direct MLS/RETS integration, enabling automated listings, fast property search, clean listing displays, and streamlined agent management.',
    url: 'https://goldkey21.com/',
    image: '/images/goldkey-21-site.png',
    tags: ['Wordpress', 'PHP', 'MLS Feed', 'CRO'],
    body: "This real estate site pulls listings directly from the MLS using a RETS feed, built on WordPress with a custom theme to deliver fast search, clean property displays, and easy agent management.",
    featured: true,
  },
   {
    id: 'green-root',
    section: 'marketing' as ProjectSection,
    title: 'Green Root',
    cat: 'Javascript (ES6) · Tailwind · GSAP',
    desc: 'A custom website designed in Figma and built with React, created to deliver a clean, modern experience tailored to healthy cooking and wellness-focused audiences.',
    image: '/images/greenroot.png',
    tags: ['React', 'Figma', 'UX/UI', 'Node.js'],
    body: "This project was custom designed in Figma and built with React, with a strong focus on UI/UX to create an intuitive and engaging user experience. Designed for the health and wellness space, the site features clean layouts, seamless navigation, and a fresh aesthetic inspired by healthy cooking and balanced living.",
    featured: false,
  },
        {
    id: 'hylife',
    section: 'marketing' as ProjectSection,
    title: 'Hylife',
    cat: 'PHP · jQuery · HTML · LESS',
    desc: 'A corporate website designed and built to deliver a clean, professional digital experience that reflects HyLife\'s global brand, industry leadership, and commitment to quality food production.',
    url: 'https://hylife.com/',
    tags: ['WordPress', 'Custom Theme Development'],
    body: "This website was designed and developed with a strong focus on UI/UX to create a streamlined, user-friendly experience for a large-scale food and agriculture brand. Built to support HyLife’s digital presence, the site features clear navigation, structured content, and a polished visual design that communicates professionalism, sustainability, and global reach.",
    featured: false,
  },
   
   {
    id: 'benr-auto',
    section: 'marketing' as ProjectSection,
    title: 'Ben R Auto',
    cat: 'TWIG · CSS · JavaScript',
    desc: 'A custom automotive website designed and developed to integrate dynamic vehicle inventory feeds while delivering a seamless browsing experience for dealership customers.',
    url: 'https://benrauto.com/',
    tags: ['Inventory Feed', 'CMS', 'UX/UI'],
    body: "This automotive website was built with a strong focus on UX/UI, combining clean design with functional inventory management integrations. The site features dynamic vehicle listings, advanced filtering, and organized inventory displays to create a smooth browsing experience while supporting lead generation, financing inquiries, and customer trust.",
    featured: false,
  },
      {
    id: 'alpha-armor',
    section: 'marketing' as ProjectSection,
    title: 'Alpha Armor',
    cat: 'Ecommerce · Marketing Strategy · CRO · Branding',
    desc: 'A full brand and Shopify eCommerce experience built for Alpha Armor, combining premium dog gear, conversion-focused design, and psychological marketing strategies to drive engagement and sales.',
    image: '/images/alpha-armor-website.png',
    tags: ['Shopify', 'Marketing Automations', 'Product Design', 'Neuromarketing', 'UX/UI'],
    body: "This project involved building the Alpha Armor brand from the ground up, including brand identity, Shopify eCommerce design, and development. With a strong focus on UX/UI, the site was designed to create an intuitive and high-trust shopping experience for dog owners, while integrating psychological marketing strategies such as scarcity, social proof, and persuasive product storytelling to improve conversions. Marketing automation flows were also developed to support retention and customer journeys including abandoned cart recovery and post-purchase engagement.",
    featured: false,
  },

     {
    id: 'fortemicro',
    section: 'marketing' as ProjectSection,
    title: 'Forte Micro',
    cat: 'PHP · HTML · LESS · TWIG',
    desc: 'A custom corporate website built to showcase Forte Micro\'s advanced electronics manufacturing capabilities with a clear, modern, and user-focused digital experience.',
    url: 'https://fortemicro.com/',
    tags: ['Wordpress', 'AOS', 'JavaScript', 'Google Analytics'],
    metrics: [
      { n: '4.2s',  l: 'Avg session time' },
      { n: '12%',   l: 'Free → Paid CVR' },
    ],
    body: "This website was developed to present Forte Micro\'s complex engineering and manufacturing services in a clear and accessible way. Built for a high-tech industrial audience, the site emphasizes structured navigation, technical clarity, and a professional visual system that reflects precision, reliability, and innovation. The experience is crafted to support trust and effective communication of their full-service electronics manufacturing capabilities.",
    featured: false,
  },

     {
    id: 'onpoint',
    section: 'marketing' as ProjectSection,
    title: 'onPoint',
    cat: 'PHP · LESS · TWIG · jQuery',
    desc: 'A corporate website I developed for onPoint, built to showcase their marketing, print, signage, and digital services through a clean and structured user experience.',
    url: 'https://onpoint.ca',
    tags: ['WordPress', 'Custom Theme', 'Mobile Optimization'],
    body: "Developed with a strong focus on UX/UI to organize a wide range of services into a clear and easy-to-navigate experience. The site brings together their marketing, print, signage, and digital offerings into a cohesive structure that improves clarity and flow for users while supporting lead generation and overall brand presentation.",
    featured: false,
  },
  
   {
    id: 'jti',
    section: 'marketing' as ProjectSection,
    title: 'JTI Trucking',
    cat: 'PHP · LESS · HTML · jQuery',
    desc: 'A custom corporate website developed for JTI Truck, built to showcase fleet maintenance services with a focus on clarity, performance, and an integrated Maps API for location-based accessibility.',
    url: 'https://jtitruck.com/',
    tags: ['Maps API', 'Custom Theme', 'Mobile Optimization'],
    body: "Built for a heavy-duty automotive audience, the site emphasizes simplicity, trust, and quick access to key service information. A Maps API integration was implemented to help users easily locate the shop and improve overall accessibility, especially for fleet operators needing fast, location-based service support.",
    featured: false,
  },
   {
    id: 'three-way-builders',
    section: 'marketing' as ProjectSection,
    title: 'Three Way Builders',
    cat: 'Javascript · CSS · PHP',
    desc: 'A custom corporate website developed for Three Way Builders, built to showcase their design-build construction services through a clean, structured, and professional digital experience.',
    url: 'https://threewaybuilders.com/',
    tags: ['Analytics', 'Custom Theme Development'],
    body: "Afull-service construction company specializing in design-build, project management, and commercial development. The site organizes complex service offerings into a simple, structured experience that highlights their process, expertise, and completed projects. Built to support credibility and lead generation, the experience reflects a professional, reliable brand in the construction industry.",
    featured: false,
  },
  
  {
    id: 'telematics',
    section: 'tools' as ProjectSection,
    title: 'Telematics Dashboard',
    cat: 'SQL · Javascript · PHP · Data Sync',
    desc: 'A custom telematics dashboard built to allow operators to log in and track earthmoving equipment performance data through a fast, structured web platform.',
    image: '/images/telematics-dashboard.png',
    badge: true,
    tags: ['Data Analysis', 'Store Procedures', 'Performance Optimization'],
    body: "The telematics dashboard was developed to give operators a simple and efficient way to monitor and manage earthmoving equipment in the field. Users can log in, select their machines, and view performance data that is synced from hardware databases into a web-optimized database, with updates processed every 30 minutes to ensure reliable and consistent reporting. The system is built for performance, handling large volumes of operational data while maintaining speed, clarity, and a user-friendly interface focused on real-world field operations.",
    featured: false,
  },

   {
    id: 'sales-dashboard',
    section: 'tools' as ProjectSection,
    title: 'Sales Dashboard',
    cat: 'Productivity · All-in-one Workspace',
    desc: 'A custom sales dashboard built to streamline quote creation, approval workflows, and ERP integration for sales teams.',
    image: '/images/sales-dashboard.png',
    badge: true,
    tags: ['Javascript', 'API', 'ERP', 'SQL', 'Chart.js'],
    body: "This platform allows sales reps to log in, create, and manage quotes in one place. Submitted quotes automatically notify sales managers for approval, and once approved, quote data syncs directly into the ERP system to reduce manual work and improve accuracy.",
    featured: false,
  },

  {
    id: 'diamond-construction',
    section: 'tools' as ProjectSection,
    title: 'Volume Calulator Tool',
    cat: 'JavaScript · HTML · CSS',
    desc: 'A custom construction volume calculator built into the Diamond Construction website, designed to help users quickly estimate material volumes for their projects through a simple, practical tool.',
    url: 'https://diamondconstruction.ca/construction-products/#calculator',
    image: '/images/volume-calculator.png',
    tags: ['Volume Calculator', 'Performance Focus', 'User-Friendly'],
    metrics: [
      { n: '4.2s',  l: 'Avg session time' },
      { n: '12%',   l: 'Free → Paid CVR' },
    ],
    body: "The volume calculator was developed to give users a fast and easy way to estimate material quantities for construction projects directly on the Diamond Construction website. The tool allows users to input measurements and instantly calculate required volumes for planning and estimating purposes. It\'s designed to reduce manual calculations, improve accuracy, and support smoother decision-making for both contractors and homeowners.",
    featured: false,
  },
  {
    id: 'ashland',
    section: 'tools' as ProjectSection,
    title: 'Lead Generation Tool',
    cat: 'Javascript · Lead Gen · PHP',
    desc: 'A custom equipment selector tool developed for Ashland to help users identify the right earthmoving scraper based on operational needs, equipment specs, and jobsite requirements.',
    url: 'https://ashlandind.com/scraper-selector/',
    image: '/images/ashland-scraper-selector.png',
    tags: ['Data Collection', 'SQL', 'User-Friendly'],
    body: "This interactive scraper selector was built to simplify the equipment selection process for construction, agriculture, and mining users. The tool guides users through a structured questionnaire based on industry, application, machine specifications, soil type, and usage requirements to recommend the most suitable scraper solution. Designed to reduce friction in the buying journey, it transforms a complex product-matching process into a streamlined and user-friendly digital experience.",
    featured: false,
  },

  {
    id: 'lunch-ordering',
    section: 'tools' as ProjectSection,
    title: 'Lunch Ordering System',
    cat: 'Order Tracking · Automation · Internal Tool',
    desc: 'A custom lunch ordering system designed to simplify employee meal ordering while managing daily limits and order availability.',
    image: '/images/lunch-ordering-system.png',
    badge: true,
    tags: ['Javascript', 'PHP', 'CMS', 'Gravity Forms'],
    body: "This platform allows employees to place discounted lunch orders through an easy-to-use system with built-in rules for daily order limits and scheduled ordering windows. Admins can manage the system from the backend, including quickly adding new restaurant order forms and updating menu options as needed.",
    featured: false,
  },

  {
    id: 'support-hub',
    section: 'tools' as ProjectSection,
    title: 'Support Hub',
    cat: 'Support Tickets · APIs · Internal Tool',
    desc: 'An employee support portal built to centralize onboarding, training resources, and support ticket submissions.',
    image: '/images/support-links.png',
    badge: true,
    tags: ['React', 'ClickUp Integration', 'LESS'],
    body: "This platform gives employees a single place to find onboarding information, access training materials, and submit support requests. Tickets are automatically integrated with ClickUp through its API and forms, ensuring issues are tracked, assigned, and managed efficiently within existing workflows.",
    featured: false,
  },
  // {
  //   id: 'fortemicro',
  //   section: '3d' as ProjectSection,
  //   title: 'Forte Micro',
  //   cat: 'DevTools · Cloud Platform',
  //   desc: 'Deploy-to-production in seconds. WebGL animations, dark/light mode, and world-class developer-focused copy.',
  //   url: 'https://fortemicro.com/',
  //   tags: ['Next.js', 'Three.js', 'Edge Functions', 'A/B Testing'],
  //   metrics: [
  //     { n: '0.9s', l: 'TTFB globally' },
  //     { n: '98',   l: 'Lighthouse Score' },
  //   ],
  //   body: "Vercel's site is its own best demo. Incremental static regeneration, edge rendering, and the boldest use of real-time data visualizations in the DevTools space.",
  //   featured: false,
  // },
]

export const SERVICES = [
  { num: '01', name: 'Conversion-Driven Development', tag: 'CRO · Strategy' },
  { num: '02', name: '3D & WebGL Experiences',        tag: 'Three.js · GLSL' },
  { num: '03', name: 'Full-Stack Architecture',        tag: 'React · Node · SQL' },
  { num: '04', name: 'Performance Engineering',        tag: 'Core Web Vitals' },
  { num: '05', name: 'UX & Motion Design',             tag: 'GSAP · Framer' },
]

// export const TESTIMONIALS = [
//   {
//     text: 'The redesign increased our checkout completion by 280% in the first month. The ROI was immediate.',
//     name: 'SARAH CHEN',
//     role: 'CEO, Nexus Commerce',
//     init: 'SC',
//   },
//   {
//     text: "None of the other developers I've worked with come close to this craft level. The WebGL hero won us two awards.",
//     name: 'MARCO VITELLI',
//     role: 'Creative Director, Phantom Labs',
//     init: 'MV',
//   },
//   {
//     text: 'Landing page went from 1.2% to 6.8% conversion rate. Visible ROI within days of going live.',
//     name: 'JAMES PORTER',
//     role: 'Head of Growth, Velour SaaS',
//     init: 'JP',
//   },
//   {
//     text: 'A 98 Lighthouse score on a site processing thousands of real-time data points. Genuinely unreal.',
//     name: 'AISHA RAHMAN',
//     role: 'CTO, Aurum Finance',
//     init: 'AR',
//   },
// ]

export const PROCESS = [
  { n: '01', t: 'Discover',   d: 'Deep-dive into your goals, users, and data. No assumptions — only evidence.' },
  { n: '02', t: 'Strategize', d: 'Map the funnel. Identify friction. Define measurable success metrics.' },
  { n: '03', t: 'Build',      d: 'Pixel-perfect, performant, and production-ready from day one.' },
  { n: '04', t: 'Optimize',   d: 'Launch, measure, iterate. Data-driven refinement until numbers sing.' },
]

export const SKILLS = [
  'React / Next.js', 'AI', 'Three.js', 'Node.js', 'PostgreSQL',
  'GSAP', 'TypeScript', 'Tailwind', 'Figma', 'SQl', 'MongoDB',
  'Ecommerce', 'API Integration', 'HAML', 'PUG', 'jQuery', 'XD', 'Figma',
  'CRO', 'PHP', 'WebGL' , 'LESS / SASS', 'Google Analytics', 'Laravel', 'Automation'
]

export const STATS = [
  { n: '340', s: '%', l: 'Avg. conversion lift' },
  { n: '98',  s: '',  l: 'Lighthouse score' },
  { n: '60',  s: '+', l: 'Projects shipped' },
  { n: '$12M',s: '+', l: 'Revenue generated' },
]

export const STACK = ['PHP','Three.js','React','Next.js','GSAP','Node.js','SQL','TypeScript','CRO','A/B Testing','Tailwind','PHP','CMS']
