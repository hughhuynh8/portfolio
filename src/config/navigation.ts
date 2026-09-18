export interface SpaceLogo {
  id: string;
  label: string;
  client: string;
  icon: string;
  x: number;
  y: number;
  z: number;
  color: string;
  glowColor: string;
  role: string;
  period: string;
  headline: string;
  summary: string;
  heroImage?: string;
  techStack: string[];
  achievements: string[];
  keyFeatures: { title: string; desc: string }[];
  metrics: { label: string; value: string }[];
}

export const SPACE_LOGOS: SpaceLogo[] = [
  {
    id: 'officeworks',
    label: 'OFFICEWORKS',
    client: 'Officeworks',
    icon: '/assets/logos/officeworks_logo.svg',
    x: -18,
    y: 20,
    z: 4.5,
    color: '#002f87',
    glowColor: 'rgba(0, 85, 255, 0.45)',
    role: 'Lead Frontend Engineer & Architect',
    period: '2023 — 2024',
    headline: 'High-Volume Enterprise E-Commerce & Design System Architecture',
    summary: 'Led the core architectural overhaul of Australia’s premier office supplies retailer web experience, optimizing performance, cart conversions, and search speed for millions of monthly shoppers.',
    techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Algolia', 'Cypress'],
    achievements: [
      'Engineered sub-50ms instant product search and category filtering system across 60,000+ SKUs',
      'Reduced initial page load LCP by 42% through aggressive server-side hydration optimization',
      'Architected shared design system component library adopted by 4 multi-disciplinary engineering squads'
    ],
    keyFeatures: [
      { title: 'Predictive Fast Search', desc: 'Real-time debounced typeahead engine with personalized search recommendations and instant SKU matching.' },
      { title: 'Enterprise Cart & Checkout', desc: 'Fault-tolerant checkout flows with multi-tiered delivery calculation and click-and-collect inventory checks.' },
      { title: 'Accessible UI Library', desc: 'Strict WCAG 2.1 AA compliant component foundation with zero regression automated visual testing.' }
    ],
    metrics: [
      { label: 'Page Speed Boost', value: '+42%' },
      { label: 'Monthly Active Shoppers', value: '3.8M' },
      { label: 'Checkout Conversion', value: '+14.6%' }
    ]
  },
  {
    id: 'repco',
    label: 'REPCO',
    client: 'Repco Australia & NZ',
    icon: '/assets/logos/repco_logo.png',
    x: 32,
    y: 6,
    z: 5.5,
    color: '#d6001c',
    glowColor: 'rgba(239, 68, 68, 0.45)',
    role: 'Senior Frontend Engineer',
    period: '2023',
    headline: 'Automotive Parts Trade Portal & Dynamic Rego Search Engine',
    summary: 'Spearheaded frontend development for Repco’s automotive parts and trade portal, enabling mechanics and DIY enthusiasts to identify exact vehicle fitments via license plate lookup within milliseconds.',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'REST APIs', 'Jest'],
    achievements: [
      'Built custom Vehicle Rego Lookup system with instant VIN decoder and part compatibility validation',
      'Designed responsive trade checkout with dynamic wholesale pricing tiers and branch delivery routing',
      'Boosted mobile search-to-cart completion rate by 28% through an intuitive touch-friendly wizard'
    ],
    keyFeatures: [
      { title: 'Rego Fitment Engine', desc: 'Instant vehicle lookup mapping 100,000+ car models to exact OEM and aftermarket replacement parts.' },
      { title: 'B2B Trade Dashboard', desc: 'Multi-account trade ordering with live credit account balances, invoice retrieval, and quick order sheets.' },
      { title: 'Store Inventory Matrix', desc: 'Geo-located live store stock checks across 400+ Repco branches with real-time reserve-in-store.' }
    ],
    metrics: [
      { label: 'Lookup Latency', value: '<65ms' },
      { label: 'Parts Indexed', value: '450K+' },
      { label: 'Trade Growth', value: '+31%' }
    ]
  },
  {
    id: 'qantas',
    label: 'QANTAS',
    client: 'Qantas Airways',
    icon: '/assets/logos/qantas_logo.png',
    x: -28,
    y: -22,
    z: 6.8,
    color: '#e40000',
    glowColor: 'rgba(228, 0, 0, 0.45)',
    role: 'Staff Frontend Engineer & UI Specialist',
    period: '2022 — 2023',
    headline: 'Flagship Airline Digital Booking & Hotels Experience',
    summary: 'Spearheaded frontend engineering for Qantas Hotels and flight ancillary experiences, delivering world-class booking interfaces, interactive seat and room selectors, and high-reliability payments.',
    techStack: ['React', 'TypeScript', 'Next.js', 'Redux', 'Styled Components', 'Storybook', 'Jest'],
    achievements: [
      'Crafted seamless Qantas Frequent Flyer points redemption and cash co-pay booking engine',
      'Engineered interactive hotel room configuration gallery with dynamic amenity filters and live rate updates',
      'Maintained 99.99% frontend uptime through major holiday flash sale peaks with millions of concurrent sessions'
    ],
    keyFeatures: [
      { title: 'Points + Pay Dynamic Slider', desc: 'Real-time points calculations enabling frequent flyers to seamlessly balance points and cash.' },
      { title: 'Interactive Map & Stay Discovery', desc: 'High-performance interactive mapping with cluster pins, neighborhood guides, and pricing highlights.' },
      { title: 'Mobile-Optimized Fast Pass', desc: 'Streamlined 2-step checkout with Apple Pay, Google Pay, and stored travel preferences.' }
    ],
    metrics: [
      { label: 'Bookings Handled', value: '1.2M+' },
      { label: 'Uptime in Peak Sales', value: '99.99%' },
      { label: 'Points Redeemed', value: '2.4B+' }
    ]
  },
  {
    id: 'remarkable',
    label: 'REMARKABLE',
    client: 'reMarkable',
    icon: '/assets/logos/remarkable_logo.svg',
    x: -34,
    y: 8,
    z: 8.5,
    color: '#ffffff',
    glowColor: 'rgba(255, 255, 255, 0.45)',
    role: 'Frontend & Creative Technologist',
    period: '2022',
    headline: 'Next-Generation Paper Tablet Web Companion & Canvas Engine',
    summary: 'Developed interactive cloud companion web apps and product showcases for reMarkable, translating paper-like handwriting and sketching into fluid browser experiences.',
    techStack: ['React', 'TypeScript', 'WebGL', 'HTML5 Canvas', 'Tailwind CSS', 'WebSockets', 'WebAssembly'],
    achievements: [
      'Implemented real-time notebook synchronization viewer rendering vector pen strokes with zero latency',
      'Built interactive 3D product visualizer highlighting ultra-thin hardware craftsmanship and tactile textures',
      'Created custom PDF and ePub document previewer with cloud-synced annotations'
    ],
    keyFeatures: [
      { title: 'Vector Stroke Renderer', desc: 'GPU-accelerated Bezier curve rendering preserving authentic pen pressure, tilt, and paper grain.' },
      { title: 'Live Screen Sharing', desc: 'WebRTC and WebSocket live stream showing real-time note-taking directly from reMarkable to browser.' },
      { title: 'Distraction-Free Workspace', desc: 'Minimalist, clutter-free reader with typography tuning and dark/light paper modes.' }
    ],
    metrics: [
      { label: 'Render Frame Rate', value: '60 FPS' },
      { label: 'Note Sync Speed', value: '<120ms' },
      { label: 'User Satisfaction', value: '98%' }
    ]
  },
  {
    id: 'autobarn',
    label: 'AUTOBARN',
    client: 'Autobarn',
    icon: '/assets/logos/autobarn_logo.png',
    x: 16,
    y: -26,
    z: 9.8,
    color: '#0284c7',
    glowColor: 'rgba(14, 165, 233, 0.45)',
    role: 'Senior Web Developer',
    period: '2021 — 2022',
    headline: 'Automotive Accessories & In-Car Entertainment E-Commerce',
    summary: 'Transformed Autobarn’s digital retail ecosystem with modern audio fitment calculators, custom wheel visualizers, and seamless click-and-collect fulfillment.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Shopify Plus', 'GraphQL', 'Algolia'],
    achievements: [
      'Built intelligent audio wiring harness compatibility matcher matching head units to vehicle dashes',
      'Streamlined store fulfillment workflow reducing click-and-collect readiness time from 2 hours to 20 minutes',
      'Increased mobile revenue share by 34% through responsive navigation overhaul'
    ],
    keyFeatures: [
      { title: 'In-Car Audio Visualizer', desc: 'Interactive dashboard simulator showing double-DIN and single-DIN head units in realistic car interiors.' },
      { title: 'Express Store Pickup', desc: 'Automated SMS notification and 30-minute click-and-collect fulfillment tracking.' },
      { title: 'Service Booking Portal', desc: 'Online booking engine for dashcam installations, battery checks, and roof rack fittings.' }
    ],
    metrics: [
      { label: 'Click & Collect Speed', value: '20 min' },
      { label: 'Mobile Revenue', value: '+34%' },
      { label: 'Catalog Size', value: '80K+' }
    ]
  },
  {
    id: 'jetstar',
    label: 'JETSTAR',
    client: 'Jetstar Airways',
    icon: '/assets/logos/jetstar_logo.png',
    x: 26,
    y: -16,
    z: 11.5,
    color: '#ff6600',
    glowColor: 'rgba(249, 115, 22, 0.45)',
    role: 'Lead Mobile Web & UI Engineer',
    period: '2021',
    headline: 'Low-Cost Carrier Fare Matrix & High-Velocity Booking Flow',
    summary: 'Delivered hyper-optimized fare calendar matrices, mobile flight check-in, and seat selection experiences designed for extreme speed and low network bandwidth.',
    heroImage: '/assets/fighter_jet.jpg',
    techStack: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'PWA', 'Service Workers', 'Webpack'],
    achievements: [
      'Designed low-bandwidth low-latency fare matrix displaying 30-day price trends instantaneously',
      'Developed offline-capable PWA boarding pass wallet with gate departure countdowns',
      'Reduced checkout drop-off rate by 19% with instant seat selection and baggage upsell cards'
    ],
    keyFeatures: [
      { title: 'Low-Fare Radar', desc: 'Visual 30-day fare calendar highlighting lowest price departures across domestic and international routes.' },
      { title: 'Fast-Track Check-In', desc: '3-tap mobile check-in generating digital boarding passes directly into device wallet.' },
      { title: 'High-Altitude Reliability', desc: 'Ultra-resilient offline caching providing flight itinerary access even in airplane mode.' }
    ],
    metrics: [
      { label: 'Daily Bookings', value: '45K+' },
      { label: 'Drop-off Reduction', value: '-19%' },
      { label: 'PWA Load Time', value: '0.8s' }
    ]
  },
  {
    id: 'strike',
    label: 'STRIKE',
    client: 'Strike Bowling & Funlab',
    icon: '/assets/logos/strike_logo.svg',
    x: 32,
    y: 22,
    z: 14.0,
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.45)',
    role: 'Interactive Web Developer',
    period: '2020 — 2021',
    headline: 'Immersive Real-Time Venue Booking & Social Entertainment Portal',
    summary: 'Engineered an interactive party planner, real-time bowling lane scheduler, and escape room booking interface featuring playful micro-interactions and smooth animations.',
    techStack: ['React', 'TypeScript', 'GSAP', 'CSS Modules', 'WebSockets', 'Stripe', 'Node.js'],
    achievements: [
      'Implemented dynamic lane availability grid updating live via WebSockets across 20+ venues',
      'Created multi-activity party builder combining bowling, karaoke, and cocktails in a single checkout',
      'Delivered vibrant dark-mode UI with neon glow aesthetics inspired by arcade nightlife'
    ],
    keyFeatures: [
      { title: 'Live Lane Matrix', desc: 'Real-time visualization of lane occupancy and next-available timeslots with instant lock.' },
      { title: 'Party Bundler', desc: 'Interactive package configurator for corporate events, birthday celebrations, and VIP booths.' },
      { title: 'Gamified Experience', desc: 'Animated countdowns, arcade sound effects, and digital scorecards shareable on social media.' }
    ],
    metrics: [
      { label: 'Booking Velocity', value: '3x Faster' },
      { label: 'Venues Connected', value: '24' },
      { label: 'Group Bookings', value: '+45%' }
    ]
  },
  {
    id: 'spotlight',
    label: 'SPOTLIGHT',
    client: 'Spotlight Retail Group',
    icon: '/assets/logos/spotlight_logo.png',
    x: -8,
    y: -30,
    z: 16.5,
    color: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.45)',
    role: 'Senior Frontend Developer',
    period: '2020',
    headline: 'Creative Craft, Fabric & Home Decor Omnichannel Store',
    summary: 'Built interactive fabric cut calculator, sewing pattern matching tools, and omnichannel inventory locator for Australia’s largest craft and home furnishings retailer.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Storybook', 'HTML5'],
    achievements: [
      'Built decimal meterage fabric pricing calculator eliminating ordering errors',
      'Created interactive inspiration gallery connecting creative project guides to cart item bundles',
      'Optimized catalog search filters for color swatches, fabric textures, and craft levels'
    ],
    keyFeatures: [
      { title: 'Fabric Meterage Calculator', desc: 'Instant calculation of roll lengths, cuts, and discounts with live remnant stock alerts.' },
      { title: 'Make-It Project Bundles', desc: 'Curated step-by-step DIY project guides allowing one-click purchase of all required craft materials.' },
      { title: 'VIP Club Rewards Portal', desc: 'Member discounts, digital vouchers, and personalized craft recommendation feed.' }
    ],
    metrics: [
      { label: 'Fabric Order Accuracy', value: '99.8%' },
      { label: 'Active VIP Members', value: '2.1M' },
      { label: 'Mobile Bounce Rate', value: '-22%' }
    ]
  }
];

export interface PageMetadata {
  id: string;
  title: string;
  subtitle: string;
}

export const GENERAL_PAGES: PageMetadata[] = [
  { id: 'home', title: 'Deep Space', subtitle: 'Interactive 3D Portfolio Universe' },
  { id: 'about', title: 'About Hugh', subtitle: 'Staff Frontend Engineer & Creative Technologist' },
  { id: 'projects', title: 'Featured Projects', subtitle: 'Enterprise Web Applications & Design Systems' },
  { id: 'art', title: 'Creative Engineering', subtitle: 'WebGL, Canvas & Generative Graphics' },
  { id: 'music', title: 'Audio & Rhythm', subtitle: 'Interactive Soundscapes & Synthesizers' },
  { id: 'photography', title: 'Visual Explorations', subtitle: 'Astrophotography & Urban Architecture' },
  { id: 'travel', title: 'Expeditions', subtitle: 'Global Journeys & Aviation Logs' },
  { id: 'contact', title: 'Transmission & Contact', subtitle: 'Establish Secure Communication' },
];
