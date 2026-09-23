import gucciLogo from '../../assets/logos/gucci_logo.svg';
import sapLogo from '../../assets/logos/sap_logo.svg';
import qantasScreenshot from '../../assets/screenshots/qantas.png';
import spotlightScreenshot from '../../assets/screenshots/spotlight.png';
import sapScreenshot from '../../assets/screenshots/sap.png';
import gucciScreenshot from '../../assets/screenshots/gucci.png';
import repcoScreenshot from '../../assets/screenshots/repco.png';
import strikeScreenshot from '../../assets/screenshots/strike.png';
import officeworksScreenshot from '../../assets/screenshots/Officeworks.png';
import remarkableScreenshot from '../../assets/screenshots/remarkable.png';

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
  backgroundColor: string;
  role: string;
  period: string;
  headline: string;
  summary: string;
  heroImage?: string;
  websiteUrl?: string;
  techStack: string[];
  achievements: string[];
  metrics: { label: string; value: string }[];
}

const ALL_SPACE_LOGOS: SpaceLogo[] = [
  {
    id: 'officeworks',
    label: 'OFFICEWORKS',
    client: 'Officeworks',
    icon: '/assets/logos/officeworks_logo.svg',
    x: -18,
    y: 30,
    z: 7,
    color: '#002f87',
    glowColor: 'rgba(0, 85, 255, 0.45)',
    backgroundColor: '#001E7E',
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
    x: 27,
    y: 6,
    z: 5.5,
    color: '#d6001c',
    glowColor: 'rgba(239, 68, 68, 0.45)',
    backgroundColor: '#ffffff',
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
    x: -32,
    y: -22,
    z: 4.8,
    color: '#e40000',
    glowColor: 'rgba(228, 0, 0, 0.45)',
    backgroundColor: '#ffffff',
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
    x: -50,
    y: 8,
    z: 8.5,
    color: '#ffffff',
    glowColor: 'rgba(255, 255, 255, 0.45)',
    backgroundColor: '#ffffff',
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
    metrics: [
      { label: 'Render Frame Rate', value: '60 FPS' },
      { label: 'Note Sync Speed', value: '<120ms' },
      { label: 'User Satisfaction', value: '98%' }
    ]
  },
  {
    id: 'sap',
    label: 'SAP',
    client: 'SAP',
    icon: sapLogo,
    x: 16,
    y: -26,
    z: 9.8,
    color: '#0284c7',
    glowColor: 'rgba(14, 165, 233, 0.45)',
    backgroundColor: '#ffffff',
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
    metrics: [
      { label: 'Click & Collect Speed', value: '20 min' },
      { label: 'Mobile Revenue', value: '+34%' },
      { label: 'Catalog Size', value: '80K+' }
    ]
  },
  {
    id: 'gucci',
    label: 'GUCCI',
    client: 'Gucci',
    icon: gucciLogo,
    x: 36,
    y: -16,
    z: 3.5,
    color: '#0A6A56',
    glowColor: 'rgba(189, 148, 2, 0.29)',
    backgroundColor: '#000000',
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
    x: 16,
    y: 22,
    z: 14.0,
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.45)',
    backgroundColor: '#000000',
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
    y: -50,
    z: 10.5,
    color: '#ec4899',
    glowColor: '#2c4390',
    backgroundColor: 'rgb(23, 78, 163)',
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
    metrics: [
      { label: 'Fabric Order Accuracy', value: '99.8%' },
      { label: 'Active VIP Members', value: '2.1M' },
      { label: 'Mobile Bounce Rate', value: '-22%' }
    ]
  }
];

const RESUME_DETAILS: Record<string, Partial<SpaceLogo>> = {
  qantas: {
    client: 'Qantas Holidays',
    role: 'Senior Software Engineer',
    period: 'Jan 2023 — Mar 2026',
    websiteUrl: 'https://www.qantas.com/holidays',
    heroImage: qantasScreenshot,
    headline: 'high-traffic travel booking platform',
    summary: 'Developed and maintained the Qantas Holidays application, providing the ultimate travel booking experience to millions of visitors per day and resolving production issues.',
    techStack: ['Next.js', 'React', 'Buildkite', 'Sanity', 'Contentful', 'AWS', 'Splunk', 'Datadog', 'Sentry', 'Jest', 'Cypress'],
    achievements: ['Developed and updated a high-traffic travel application.', 'Resolved production support issues across the customer experience.', 'Maintained the platform during Jetstar’s largest sale of the year, which generated $6M in revenue.'],
    metrics: [{ label: 'Tenure', value: '3+ yrs' }, { label: 'Daily audience', value: '290k' }, { label: 'yearly revenue', value: '$79.6M' }],
  },
  remarkable: {
    client: 'Remarkable',
    role: 'Technical Lead',
    period: 'Jul 2022 — Nov 2022',
    websiteUrl: 'https://www.remarkablefurniture.com.au/',
    heroImage: remarkableScreenshot,
    headline: 'Australian furniture retailer',
    summary: 'Led development and updates for Shopify e-commerce stores, managing a team of four while delivering performance and SEO focused retail solutions.',
    techStack: ['Shopify', 'React', 'Gatsby', 'Netlify', 'Tailwind CSS', 'Google Cloud', 'GraphQL'],
    achievements: ['Led and managed a team of four.', 'Developed and updated Shopify e-commerce stores for major retailers.', 'Delivered SEO and performance-optimised Shopify solution.'],
    metrics: [{ label: 'Role', value: 'Tech Lead' }, { label: 'Team managed', value: '4' }, { label: 'Tenure', value: '5 mos' }],
  },
  repco: {
    client: 'Repco',
    role: 'Senior Front End Developer',
    period: 'Jan 2018 — Jul 2022',
    websiteUrl: 'https://www.repco.com.au/',
    heroImage: repcoScreenshot,
    headline: 'Automotive parts retail',
    summary: 'Developed site with high usability features such as rego lookup (to quickly find parts that fit your car).',
    techStack: ['SAP Hybris', 'HTML', 'LESS', 'Bootstrap 3', 'JavaScript', 'Grunt'],
    achievements: ['Completed the initial build of Repco’s Hybris site.', 'Implemented client-requested ecommerce features.', 'Delivered performance enhancements to improve website speed.'],
    metrics: [{ label: 'Tenure', value: '4+ yrs' }, { label: 'Products', value: '200k' }, { label: 'Focus', value: 'Performance' }],
  },
  spotlight: {
    client: 'Spotlight',
    role: 'Senior Front End Developer',
    period: 'Jan 2018 — Jul 2022',
    websiteUrl: 'https://www.spotlightstores.com/',
    heroImage: spotlightScreenshot,
    headline: 'Craft and homewares commerce at national retail scale',
    summary: 'Developed a craft and homewares ecommerce solution and supported its launch across more than one hundred stores and ten million products.',
    techStack: ['SAP Hybris', 'HTML', 'Sass', 'Bootstrap 4', 'Angular 6', 'Grunt'],
    achievements: ['Developed the craft and homewares ecommerce solution.', 'Deployed in time for September campaign launch.', 'Supported a rollout spanning 100+ stores and 10M products.'],
    metrics: [{ label: 'Tenure', value: '4+ yrs' }, { label: 'Stores', value: '100+' }, { label: 'Products', value: '10M' }],
  },
  strike: {
    client: 'Strike Bowling',
    role: 'Senior Front End Developer',
    period: 'May 2017 — Nov 2017',
    websiteUrl: 'https://www.strikebowling.com.au/',
    heroImage: strikeScreenshot,
    headline: 'Shared booking-commerce platform for entertainment venues',
    summary: 'Developed booking-capable ecommerce websites with a distributed team, using a shared template and CSS theming across three Funlab brands (Strike, Holy Moley and Skyzone).',
    techStack: ['HTML', 'PostCSS', 'Vue.js', 'JavaScript', 'Gulp', 'Sitecore'],
    achievements: ['Developed three websites with a shared template and CSS theme system.', 'Built booking-capable ecommerce experiences.', 'Coordinated delivery with a team in Ukraine.'],
    metrics: [{ label: 'Tenure', value: '7 mos' }, { label: 'Brand sites', value: '3' }, { label: 'Platform', value: 'Sitecore' }],
  },
  sap: {
    client: 'SAP Commerce',
    role: 'Lead Front End Designer/Developer',
    period: 'Nov 2015 — Aug 2016',
    websiteUrl: 'https://help.sap.com/docs/TRAVEL_ACCELERATOR/a8c68f0779794a168390478daa3ab4eb/c68ddbaaced24dae8ba5e0c7e041a1c3.html?locale=en-US',
    heroImage: sapScreenshot,
    headline: 'Travel Accelerator customisation for SAP Commerce',
    summary: 'Developed and customised a travel product for SAP/Hybris, while architecting team-wide JavaScript and AA accessibility-standard frontend code.',
    techStack: ['SAP Commerce', 'SAP Hybris', 'JavaScript', 'HTML', 'CSS', 'Web Accessibility'],
    achievements: ['Architected and managed JavaScript practices for the delivery team.', 'Developed AA web-accessibility-standard frontend code.', 'Launched in June 2016; the product was sold to EasyJet, P&O and other travel companies.'],
    metrics: [{ label: 'Tenure', value: '10 mos' }, { label: 'Launch', value: 'Jun 2016' }, { label: 'Accessibility standard', value: 'AA WCAG' }],
  },
  gucci: {
    client: 'Gucci',
    role: 'Senior Front End Developer',
    period: 'Jun 2015 — Sep 2015',
    websiteUrl: 'https://www.gucci.com/',
    heroImage: gucciScreenshot,
    headline: 'Rich-media, localised global fashion e-commerce',
    summary: 'Developed a dynamic e-commerce website for Gucci, combining rich media, localisation, maps and Hybris integration to meet the brand’s detailed design requirements.',
    techStack: ['HTML5', 'LESS', 'JavaScript', 'Grunt', 'RequireJS', 'AJAX', 'Google Maps', 'SAP Hybris'],
    achievements: ['Implemented a dynamic, rich-media ecommerce website.', 'Delivered localisation and Google Maps functionality.', 'Relaunched the site in line with Gucci’s strict design guidelines.'],
    metrics: [{ label: 'Tenure', value: '4 mos' }, { label: 'Stores', value: '278' }, { label: 'Platform', value: 'Hybris' }],
  },
  officeworks: {
    client: 'Officeworks',
    role: 'Front End Designer/Developer',
    period: 'Jan 2013 — Nov 2014',
    websiteUrl: 'https://www.officeworks.com.au/',
    heroImage: officeworksScreenshot,
    headline: 'Responsive retail campaigns for a high-volume office-supplies website',
    summary: 'Designed and developed responsive landing pages across devices, working with major brand stakeholders and supporting a large Australian retail website.',
    techStack: ['WebSphere Commerce', 'Mailchimp', 'HTML5', 'LESS', 'eDM', 'Photoshop', 'Bootstrap', 'Handlebars', 'AJAX', 'jQuery'],
    achievements: ['Designed and developed responsive landing pages for multiple devices.', 'Interviewed and managed a team of two developers.', 'Supported a site with 50,000 daily visitors and $1.1B annual sales.'],
    metrics: [{ label: 'Tenure', value: '2 yrs' }, { label: 'Daily visitors', value: '50K' }, { label: 'Annual sales', value: '$1.1B' }],
  },
};

export const SPACE_LOGOS: SpaceLogo[] = [
  ALL_SPACE_LOGOS[2], // Qantas
  ALL_SPACE_LOGOS[7], // Spotlight
  ALL_SPACE_LOGOS[4], // SAP
  ALL_SPACE_LOGOS[5], // Gucci
  ALL_SPACE_LOGOS[1], // Repco
  ALL_SPACE_LOGOS[6], // Strike
  ALL_SPACE_LOGOS[0], // Officeworks
  ALL_SPACE_LOGOS[3], // reMarkable
].map((logo) => ({ ...logo, ...RESUME_DETAILS[logo.id] }));
