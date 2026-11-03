import { ProjectCodexMap } from '../types';

export const PROJECT_CODEX: ProjectCodexMap = {
  soundmade: {
    id: 'soundmade',
    title: 'Soundmade | Music & Creator Platform',
    category: 'mobile',
    categoryBadge: 'MOBILE PLATFORM // IOS & ANDROID',
    role: 'Mobile & Web Engineer • XIIA',
    summary: 'A music and creator app where artists share exclusive content, host competitions, and reach fans on iOS and Android.',
    description: 'A global music ecosystem and creator monetization platform empowering artists to share exclusive content, host competitions, publish events, and connect directly with super-fans.',
    image: '/projects/soundmade.jpg',
    stack: ['React Native', 'Expo', 'TypeScript', 'Apollo Client', 'GraphQL', 'REST APIs'],
    metrics: ['Live on Apple App Store & Google Play', 'Seamless Audio Feeds & Chat', '4.8 ★ User Rating'],
    highlights: [
      'Developed mobile application features for artist profiles, music discovery, competitions, events, and saved content.',
      'Integrated APIs and refined mobile experiences for chat, comments, navigation, media uploads, and pitch management.',
      'Managed reactive client state and schema querying with Apollo Client and GraphQL.',
      'Engineered responsive layouts and optimized performance for both iOS and Android devices.'
    ],
    liveUrl: 'https://soundmade.com/',
    liveLabel: 'Live Website',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.soundmade.app',
    appStoreUrl: 'https://apps.apple.com/app/soundmade-for-artist-fans/id6479015093'
  },
  kiibee: {
    id: 'kiibee',
    title: 'Kiibee | Digital Content Marketplace',
    category: 'web',
    categoryBadge: 'WEB PLATFORM // ENTERPRISE COMMERCE',
    role: 'Software Developer • XIIA',
    summary: 'A marketplace where creators sell and rent digital content, with full Danish and English localization.',
    description: 'International digital content marketplace enabling creators to manage portfolios, monetize exclusive digital assets, and facilitate user rentals and purchases with cross-border localization.',
    image: '/projects/kiibee.jpg',
    stack: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'i18next'],
    metrics: ['Full Danish & English Internationalization', 'High-speed Server-Side Rendering (Next.js)', 'Enterprise Content Workflows'],
    highlights: [
      'Contributed to creator and viewer workflows for profile management, content discovery, creator settings, and digital content purchases or rentals.',
      'Improved marketplace usability through interface refinements and Danish-English localization support.',
      'Integrated robust REST APIs with NestJS backend services and PostgreSQL database models.',
      'Implemented responsive, accessible UI components with Tailwind CSS and TypeScript.'
    ],
    liveUrl: 'https://www.kiibee.com/',
    liveLabel: 'Live Website'
  },
  foodime: {
    id: 'foodime',
    title: 'Foodime | Restaurant Management Platform',
    category: 'web',
    categoryBadge: 'WEB & SAAS PLATFORM // OPERATIONS',
    role: 'Software Developer • XIIA',
    summary: 'A restaurant dashboard for orders, payments, staff rosters, menus, and promotional vouchers.',
    description: 'A comprehensive operational dashboard platform designed for restaurant businesses to oversee order processing, POS payments, staff rosters, dynamic menu categorization, extras, and promotional vouchers.',
    image: '/projects/foodime.jpg',
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Zustand', 'React Query'],
    metrics: ['Real-time Table & Order Management', 'Zero-latency UI Synchronization with Zustand', 'Multi-tenant Operations Support'],
    highlights: [
      'Developed dashboard features for restaurant operations, including order management, payments, employees, menus, categories, extras, and coupons.',
      'Implemented reusable UI components and improved workflows involving forms, filtering, sorting, pagination, and status dialogs.',
      'Streamlined state management using Zustand for fast optimistic UI updates alongside React Query server caching.',
      'Ensured full responsiveness and intuitive data exploration across high-density operational data tables.'
    ],
    liveUrl: 'https://foodime.dk/',
    liveLabel: 'Live Website'
  },
  rhymusol: {
    id: 'rhymusol',
    title: 'Rhymusol | Musical Summer Camp Academy',
    category: 'web',
    categoryBadge: 'FULL STACK WEB APPLICATION',
    role: 'Full Stack Developer',
    summary: 'A music academy site with separate portals for students, instructors, and administrators.',
    description: 'A specialized music school web platform with role-based access for students, instructors, and academy administrators with secured course bookings, payment integration, and curriculum reviews.',
    image: '/projects/rhymusol.jpg',
    stack: ['React', 'Tailwind CSS', 'Firebase Auth', 'Express.js', 'DaisyUI', 'MongoDB'],
    metrics: ['3 Dedicated Role Portals (User, Instructor, Admin)', 'Secure Role-based Route Protection', '100% Mobile & Desktop Responsive'],
    highlights: [
      'The website features user, instructor, and admin dashboards with restricted access based on assigned roles, ensuring customized functionalities and maintaining security.',
      'User can choose the class of their choice, navigate to their dashboard, and make payments securely.',
      'Instructor can add classes, view class schedules, and inspect feedback from administrators.',
      'Integrated Firebase authentication and MongoDB document storage with an Express.js backend.'
    ],
    liveUrl: 'https://github.com/FarjanaAkterLaila',
    liveLabel: 'GitHub Repo'
  },
  sarcasm_nlp: {
    id: 'sarcasm_nlp',
    title: 'Transformer Sarcasm AI | Research Publication',
    category: 'systems',
    categoryBadge: 'AI & NLP RESEARCH // PEER-REVIEWED PUBLICATION',
    role: 'Lead Author & Researcher',
    summary: 'A Wiley paper on transformer models that detect sarcasm in formal and informal language.',
    description: 'Peer-reviewed academic research published in Wiley on transformer-based deep learning architectures analyzing linguistic variations for sarcasm detection in formal and informal communication.',
    image: '/projects/sarcasm.jpg',
    stack: ['Python', 'Transformers', 'PyTorch', 'Hugging Face', 'NLP', 'Wiley Journal'],
    metrics: ['Published: 07 June 2026', 'Journal: Wiley - Applied Computational Intelligence and Soft Computing', 'Analyzed Formal vs Informal Language Variations'],
    highlights: [
      'Researched transformer-based deep learning models for detecting sarcasm in both formal and informal language.',
      'Analyzed language variations and evaluated model performance across challenging semantic and contextual benchmarks.',
      'Thesis completed January 2025; peer-reviewed and published in Wiley - Applied Computational Intelligence and Soft Computing in June 2026.'
    ],
    liveUrl: 'https://onlinelibrary.wiley.com/doi/10.1155/acis/8761185',
    liveLabel: 'Wiley Paper'
  }
};

export const WEB3FORMS_ACCESS_KEY = '8a507dcd-8ef2-4859-adb2-b0366a564ec3';
