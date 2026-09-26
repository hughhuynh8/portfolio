import gucciLogo from '../../assets/logos/gucci_logo.svg';
import sapLogo from '../../assets/logos/sap_logo.svg';
import repcoLogo from '../../assets/logos/repco_logo.svg';
import qantasLogo from '../../assets/logos/qantas_logo.svg';
import qantasScreenshot from '../../assets/screenshots/qantas.png';
import spotlightScreenshot from '../../assets/screenshots/spotlight.png';
import sapScreenshot from '../../assets/screenshots/sap.png';
import gucciScreenshot from '../../assets/screenshots/gucci.png';
import repcoScreenshot from '../../assets/screenshots/repco.png';
import strikeScreenshot from '../../assets/screenshots/strike.png';
import officeworksScreenshot from '../../assets/screenshots/officeworks.png';
import remarkableScreenshot from '../../assets/screenshots/remarkable.png';

export interface SpaceLogo {
  id: string;
  label: string;
  client: string;
  icon: string;
  x: number;
  y: number;
  z: number;
  glowColor: string;
  backgroundColor: string;
  role: string;
  period: string;
  headline: string;
  /** Trusted, locally authored HTML; supports inline links. */
  summary: string;
  heroImage?: string;
  websiteUrl?: string;
  techStack: string[];
  achievements: string[];
  metrics: { label: string; value: string }[];
}

// Most recent period first; matching periods retain their relative order.
export const SPACE_LOGOS: SpaceLogo[] = [
  {
    id: 'qantas',
    label: 'QANTAS',
    icon: qantasLogo,
    x: -36,
    y: -22,
    z: 10,
    glowColor: 'rgba(228, 0, 0, 0.45)',
    backgroundColor: '#ffffff',
    client: 'Qantas Holidays',
    role: 'Senior Software Engineer',
    period: 'Jan 2023 — Mar 2026',
    websiteUrl: 'https://www.qantas.com/holidays',
    heroImage: qantasScreenshot,
    headline: 'high-traffic travel booking platform',
    summary: 'Developed and maintained the Qantas and Jetstar Holidays application, providing the ultimate travel booking experience to millions of visitors per day and resolving production issues.',
    techStack: ['Next.js', 'React', 'Buildkite', 'Sanity', 'Contentful', 'AWS', 'Splunk', 'Datadog', 'Sentry', 'Jest', 'Cypress'],
    achievements: ['Applied a Content Security Policy, protecting the application from hackers (XSS, clickjacking and data injections).', 'Implemented increased range of holiday packages (from hundreds of packages to thousands for certain destinations).', 'Fixed a critical issue (P1) during Jetstar’s largest sale of the year, which generated $6M in revenue.'],
    metrics: [{ label: 'Tenure', value: '3+ yrs' }, { label: 'Daily audience', value: '290k' }, { label: 'yearly revenue', value: '$79.6M' }],
  },
  {
    id: 'remarkable',
    label: 'REMARKABLE',
    icon: '/assets/logos/remarkable_logo.svg',
    x: -8,
    y: -50,
    z: 10.5,
    glowColor: 'rgba(255, 255, 255, 0.45)',
    backgroundColor: '#ffffff',
    client: 'Remarkable',
    role: 'Technical Lead',
    period: 'Jul 2022 — Nov 2022',
    websiteUrl: 'https://www.remarkablefurniture.com.au/',
    heroImage: remarkableScreenshot,
    headline: 'Australian furniture retailer',
    summary: 'Led development and updates for Shopify e-commerce stores, managing a team of four while delivering performance and SEO focused retail solutions.',
    techStack: ['Shopify', 'React', 'Gatsby', 'Netlify', 'Tailwind CSS', 'Google Cloud', 'GraphQL'],
    achievements: ['Led a team of four developers, and liaised with six different clients.', 'Integrated Elasticsearch functionality for fast, scalable and simple product search.', 'Delivered SEO and performance-optimised Shopify solution.'],
    metrics: [{ label: 'Role', value: 'Tech Lead' }, { label: 'Team managed', value: '4' }, { label: 'Tenure', value: '5 mos' }],
  },
  {
    id: 'spotlight',
    label: 'SPOTLIGHT',
    icon: '/assets/logos/spotlight_logo.png',
    x: 10,
    y: -26,
    z: 9.8,
    glowColor: '#2c4390',
    backgroundColor: 'rgb(23, 78, 163)',
    client: 'Spotlight',
    role: 'Senior Front End Developer',
    period: 'Jan 2018 — Jul 2022',
    websiteUrl: 'https://www.spotlightstores.com/',
    heroImage: spotlightScreenshot,
    headline: 'Craft and homewares commerce at national retail scale',
    summary: 'Developed a craft and homewares ecommerce solution and supported its launch across more than one hundred stores and ten million products.',
    techStack: ['SAP Hybris', 'HTML', 'Sass', 'Bootstrap 4', 'Angular 6', 'Grunt'],
    achievements: [' Unified online stores, mobile apps and in-store touchpoints so customers get a seamless experience.', 'Developed customisable site wide banner for marketing team sales and promotions.', 'Supported a rollout spanning 100+ stores and 10M products.'],
    metrics: [{ label: 'Tenure', value: '4+ yrs' }, { label: 'Stores', value: '100+' }, { label: 'Products', value: '10M' }],
  },
  {
    id: 'repco',
    label: 'REPCO',
    icon: repcoLogo,
    x: 20,
    y: -8,
    z: 10.5,
    glowColor: 'rgba(239, 68, 68, 0.45)',
    backgroundColor: '#ffffff',
    client: 'Repco',
    role: 'Senior Front End Developer',
    period: 'Jan 2018 — Jul 2022',
    websiteUrl: 'https://www.repco.com.au/',
    heroImage: repcoScreenshot,
    headline: 'Automotive parts retail',
    summary: 'Developed site with high usability features such as rego lookup (to quickly find parts that fit your car).',
    techStack: ['SAP Hybris', 'HTML', 'LESS', 'Bootstrap 3', 'Javascript', 'Grunt'],
    achievements: ['Integrated with external APIs to get real-time vehicle and store data.', 'Implemented SEO and Google analytics to track site performance.', 'Delivered performance enhancements to optimise website speed.'],
    metrics: [{ label: 'Tenure', value: '4+ yrs' }, { label: 'Products', value: '200k' }, { label: 'Focus', value: 'Performance' }],
  },
  {
    id: 'strike',
    label: 'STRIKE',
    icon: '/assets/logos/strike_logo.svg',
    x: 34,
    y: 6,
    z: 10.5,
    glowColor: 'rgba(227, 17, 37, 0.3)',
    backgroundColor: '#000000',
    client: 'Strike Bowling',
    role: 'Senior Front End Developer',
    period: 'May 2017 — Nov 2017',
    websiteUrl: 'https://www.strikebowling.com.au/',
    heroImage: strikeScreenshot,
    headline: 'Shared booking-commerce platform for entertainment venues',
    summary: 'Developed booking-capable ecommerce websites with a distributed team, using a shared template and CSS theming across three Funlab brands (<a href="https://www.strikebowling.com.au/" target="_blank" rel="noopener noreferrer">Strike</a>, <a href="https://www.holymoley.com.au/" target="_blank" rel="noopener noreferrer">Holy Moley</a> and <a href="https://www.skyzone.com.au/" target="_blank" rel="noopener noreferrer">Skyzone</a>).',
    techStack: ['Sitecore', 'Vue.js', 'Javascript', 'PostCSS', 'Gulp'],
    achievements: ['Developed three websites with a shared template and CSS theme system.', 'Built booking-capable ecommerce experiences.', 'Coordinated delivery with a team in Ukraine.'],
    metrics: [{ label: 'Tenure', value: '7 mos' }, { label: 'Brand sites', value: '3' }, { label: 'Platform', value: 'Sitecore' }],
  },
  {
    id: 'sap',
    label: 'SAP',
    icon: sapLogo,
    x: 16,
    y: 32,
    z: 14.0,
    glowColor: 'rgba(14, 165, 233, 0.45)',
    backgroundColor: '#ffffff',
    client: 'SAP Commerce',
    role: 'Lead Front End Designer/Developer',
    period: 'Nov 2015 — Aug 2016',
    websiteUrl: 'https://help.sap.com/docs/TRAVEL_ACCELERATOR/a8c68f0779794a168390478daa3ab4eb/c68ddbaaced24dae8ba5e0c7e041a1c3.html?locale=en-US',
    heroImage: sapScreenshot,
    headline: 'Travel Accelerator',
    summary: 'Developed travel product for SAP/Hybris, architecting team-wide Javascript and AA web accessibility frontend code.',
    techStack: ['SAP Commerce', 'SAP Hybris', 'Javascript', 'HTML', 'CSS', 'Web Accessibility'],
    achievements: ['Architected and managed Javascript modules for the entire team.', 'Developed AA Web Accessibility and SAP compliant code.', 'Launched in June 2016; the product was sold to EasyJet, P&O and other travel companies.'],
    metrics: [{ label: 'Tenure', value: '10 mos' }, { label: 'Launch', value: 'Jun 2016' }, { label: 'Accessibility standard', value: 'AA WCAG' }],
  },
  {
    id: 'gucci',
    label: 'GUCCI',
    icon: gucciLogo,
    x: -18,
    y: 32,
    z: 4,
    glowColor: 'rgba(189, 148, 2, 0.12)',
    backgroundColor: '#000000',
    client: 'Gucci',
    role: 'Senior Front End Developer',
    period: 'Jun 2015 — Sep 2015',
    websiteUrl: 'https://www.gucci.com/',
    heroImage: gucciScreenshot,
    headline: 'Rich-media, localised global fashion e-commerce',
    summary: 'Developed a dynamic e-commerce website for high-end fashion brand.',
    techStack: ['HTML5', 'LESS', 'Javascript', 'Grunt', 'RequireJS', 'AJAX', 'Google Maps', 'SAP Hybris'],
    achievements: ['Implemented dynamic, rich-media pages to showcase the luxury brand products.', 'Delivered localisation for 40+ countries and Google Maps clustering functionality to easily find store locations.', 'Relaunched the site in line with Gucci’s strict design guidelines.'],
    metrics: [{ label: 'Tenure', value: '4 mos' }, { label: 'Stores', value: '278' }, { label: 'Platform', value: 'Hybris' }],
  },
  {
    id: 'officeworks',
    label: 'OFFICEWORKS',
    icon: '/assets/logos/officeworks_logo.svg',
    x: -50,
    y: 8,
    z: 8.5,
    glowColor: 'rgba(0, 85, 255, 0.45)',
    backgroundColor: '#001E7E',
    client: 'Officeworks',
    role: 'Front End Designer/Developer',
    period: 'Jan 2013 — Nov 2014',
    websiteUrl: 'https://www.officeworks.com.au/',
    heroImage: officeworksScreenshot,
    headline: 'Responsive retail campaigns for a high-volume office-supplies website',
    summary: 'Designed and developed responsive landing pages across devices, working with major brand stakeholders and supporting a large Australian retail website.',
    techStack: ['WebSphere Commerce', 'Mailchimp', 'HTML5', 'LESS', 'eDM', 'Photoshop', 'Bootstrap', 'Handlebars', 'AJAX', 'jQuery'],
    achievements: ['Liaised with world renown stakeholders such as Apple, Samsung, MYOB and Sandisk to develop brand themed landing pages.', 'Interviewed and managed a team of two developers.', 'Supported a site with 50,000 daily visitors and $1.1B annual sales.'],
    metrics: [{ label: 'Tenure', value: '2 yrs' }, { label: 'Daily visitors', value: '50K' }, { label: 'Annual sales', value: '$1.1B' }],
  },
];
