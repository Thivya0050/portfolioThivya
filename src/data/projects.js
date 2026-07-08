import {
  hubsmonImages,
  sabasImages,
  chatboxImg,
  aesappImg,
  rainwaterImg,
  robotVideo,
  pushupVideo,
  emotionVideo,
  kerjaCart1,
  kerjaCart2,
  cerita1,
  cerita2,
  jejak1,
  jejak2,
  posLogin,
  posCashier,
  posProducts,
  posOrders,
  posReports,
} from './projectMedia';

export const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'python', label: 'Python' },
  { id: 'saas', label: 'SaaS/IoT' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'nextjs', label: 'Next.js' },
];

export const projects = [
  {
    id: 'hubsmon',
    title: 'HubsMon',
    subtitle: 'Retail Equipment Monitoring SaaS Platform',
    badge: 'Enterprise SaaS',
    badgeColor: 'green',
    featured: true,
    categories: ['saas', 'python', 'iot'],
    mediaType: 'slideshow',
    media: hubsmonImages,
    description:
      'Multi-tenant enterprise SaaS platform monitoring retail store equipment (freezers, chillers) across multiple branches in real time. 3-party role system connecting platform owner, maintenance companies (TechServ), and retail clients (Jaya Grocer) — each with role-specific dashboards and data visibility.',
    highlights: [
      'Automated fault detection & repair job dispatch',
      'End-to-end job tracking & technician management',
      'Energy monitoring, health scoring & automated reporting',
    ],
    tags: ['Python', 'SaaS', 'IoT', 'Multi-tenant', 'Real-time', 'Firebase'],
    repoNote: '🔒 Codebase is confidential — available for demo upon request',
  },
  {
    id: 'robotic-arm',
    title: '3D Robotic Arm',
    subtitle: 'Hand Gesture Control System',
    badge: 'Robotics · AI',
    badgeColor: 'pink',
    featured: true,
    categories: ['ai', 'python'],
    mediaType: 'video',
    media: robotVideo,
    description:
      'Real-time 3D robotic arm controlled entirely by hand gestures — no physical hardware, just a webcam and Python. Full joint control: base rotation, shoulder, elbow, and gripper with real-time visual feedback and theme customization.',
    highlights: [
      'No hardware required — webcam only',
      'MediaPipe hand landmark + face mesh detection',
      'Real-time 3D simulation with visual feedback',
    ],
    tags: ['Python', 'MediaPipe', 'OpenCV', '3D Simulation', 'Computer Vision'],
    repoNote: '🔒 Private repo — live demo available upon request',
  },
  {
    id: 'sabas',
    title: 'SABAS',
    subtitle: 'Smart Attendance & Behavioral Analytics System',
    badge: 'AI · Final Year Project',
    badgeColor: 'purple',
    featured: true,
    categories: ['ai', 'python', 'iot'],
    mediaType: 'slideshow',
    media: sabasImages,
    description:
      'AI-powered attendance system with 98% facial recognition accuracy and real-time behavioral detection (yawning, attentiveness). Multi-role dashboards for admins, lecturers, and students with performance analytics.',
    highlights: [
      '98% facial recognition accuracy',
      'IoT integration + Telegram alerts',
      'Multi-role analytics dashboards',
    ],
    tags: ['Python', 'Flask', 'OpenCV', 'IoT', 'Firebase', 'Face Recognition'],
    repoNote: '🔒 Private repo — live demo available upon request',
  },
  {
    id: 'chatbot',
    title: 'AI Multimodal Chatbot',
    subtitle: 'Voice, Gesture & Gemini AI',
    badge: 'AI · Self-Built',
    badgeColor: 'purple',
    featured: false,
    categories: ['ai', 'python'],
    mediaType: 'image',
    media: [chatboxImg],
    description:
      'Multimodal AI chatbot combining hand gesture control, real-time voice interaction, and Google Gemini AI for a fully hardware-free cross-modal experience.',
    highlights: [
      'Hand gesture + voice control',
      'Google Gemini AI integration',
      'Real-time speech recognition API',
    ],
    tags: ['Python', 'MediaPipe', 'Gemini AI', 'Speech Recognition'],
    repoNote: '🔒 Private repo — live demo available upon request',
  },
  {
    id: 'aesapp',
    title: 'AESAPP',
    subtitle: 'Gig Worker Marketplace Platform',
    badge: 'Full-Stack',
    badgeColor: 'amber',
    featured: false,
    categories: ['fullstack'],
    mediaType: 'image',
    media: [aesappImg],
    description:
      'Full-stack job marketplace connecting gig workers with employers. Secure authentication, dynamic job posting, real-time application tracking, and worker/employer profiles.',
    highlights: [
      'Full-stack auth & user system',
      'Real-time application tracking',
      'Worker + employer dashboards',
    ],
    tags: ['JavaScript', 'Firebase', 'HTML', 'CSS', 'Full-Stack'],
    repoNote: '🔒 Private repo — live demo available upon request',
  },
  {
    id: 'rainwater',
    title: 'AI Rainwater Harvesting Optimizer',
    subtitle: 'Smart Water Management Web App',
    badge: 'AI · Web App',
    badgeColor: 'green',
    featured: false,
    categories: ['ai', 'fullstack'],
    mediaType: 'image',
    media: [rainwaterImg],
    description:
      'Smart web app helping Malaysian users optimize rainwater harvesting — calculating water savings, estimating ROI, and providing AI-powered usage recommendations for their specific needs.',
    highlights: [
      'AI-powered ROI & savings calculator',
      'React + Node.js + MongoDB stack',
      'Malaysia-specific optimization logic',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Material-UI'],
    githubUrl: 'https://github.com/Thivya0050/rainwater-harvesting-optimizer',
  },
  {
    id: 'pushup',
    title: 'AI Push-Up Counter',
    subtitle: 'Real-time Pose Detection Fitness App',
    badge: 'AI · Self-Built',
    badgeColor: 'purple',
    featured: false,
    categories: ['ai', 'python'],
    mediaType: 'video',
    media: pushupVideo,
    description:
      'Fitness application using real-time AI pose detection to count push-ups and analyze exercise form with 95% accuracy using only a webcam.',
    highlights: [
      '95% real-time pose detection accuracy',
      'Exercise form analysis',
      'Webcam-only, no hardware needed',
    ],
    tags: ['Python', 'OpenCV', 'Pose Detection', 'Computer Vision'],
    githubUrl: 'https://github.com/Thivya0050/Powered-Push-Up-Counter-with-Pose-Detection',
  },
  {
    id: 'emotion',
    title: 'Real-Time Emotion Detector',
    subtitle: 'Facial Emotion Recognition System',
    badge: 'AI · Self-Built',
    badgeColor: 'purple',
    featured: false,
    categories: ['ai', 'python'],
    mediaType: 'video',
    media: emotionVideo,
    description:
      'Real-time facial emotion detection system identifying emotional states using computer vision and deep learning models through a standard webcam.',
    highlights: [
      'Real-time emotion classification',
      'Webcam-based detection',
      'Deep learning model integration',
    ],
    tags: ['Python', 'OpenCV', 'Deep Learning', 'Computer Vision'],
    repoNote: '🔒 Private repo — live demo available upon request',
  },
  {
    id: 'kerjacart',
    title: 'KerjaCart',
    subtitle: 'Smart Grocery Budget Tracker',
    badge: 'AI · Mobile App',
    badgeColor: 'green',
    featured: false,
    categories: ['ai', 'fullstack', 'nextjs'],
    mediaType: 'slideshow',
    media: [kerjaCart1, kerjaCart2],
    description:
      'A mobile-first grocery budget tracker built for Malaysian shoppers. Add items by voice or typing, track spending in real time against your monthly budget, and get AI-generated spending audits in casual Malaysian English.',
    highlights: [
      'Voice input with Malaysian English support',
      'AI spending audit powered by Claude in casual Malaysian English',
      'Monthly session history with under/over budget tracking',
    ],
    tags: ['Next.js 14', 'Supabase', 'Claude API', 'Web Speech API', 'Tailwind CSS', 'Vercel'],
    repoNote: '🔒 Private repo — live demo available upon request',
  },
  {
    id: 'jejak',
    title: 'Jejak',
    subtitle: 'SEA Career Guidance Platform',
    badge: 'AI · Career Platform',
    badgeColor: 'purple',
    featured: false,
    categories: ['ai', 'fullstack', 'nextjs'],
    mediaType: 'slideshow',
    media: [jejak1, jejak2],
    description:
      'A career guidance platform built for Malaysians and Southeast Asians post-SPM. Includes a path finder quiz, step-by-step career roadmaps, an AI advisor that speaks Malaysian English, and a scam detector for job offers.',
    highlights: [
      'AI career advisor with Malaysian English tone and local market knowledge',
      'Scam detector — paste any job offer and get instant risk score with red flags',
      '5-question path finder quiz with live career match prediction',
    ],
    tags: ['Next.js 14', 'Supabase', 'Claude API', 'Tailwind CSS', 'Vercel'],
    repoNote: '🔒 Private repo — live demo available upon request',
  },
  {
    id: 'cerita',
    title: 'Cerita',
    subtitle: 'Voice-First Knowledge Sharing Platform',
    badge: 'AI · Social Platform',
    badgeColor: 'pink',
    featured: false,
    categories: ['ai', 'fullstack', 'nextjs'],
    mediaType: 'slideshow',
    media: [cerita1, cerita2],
    description:
      'A voice-first social platform where Malaysians share real, useful knowledge in 60–90 second audio clips. Think micro-podcast meets social feed — every story must end with one verifiable fact.',
    highlights: [
      'In-browser audio recording up to 90 seconds with live waveform visualiser',
      'Mandatory key fact on every story — enforces content quality',
      'Category-coloured audio cards — Money, Food, Life skills, Local tips',
    ],
    tags: ['Next.js 14', 'Supabase', 'Claude API', 'MediaRecorder API', 'Tailwind CSS', 'Vercel'],
    repoNote: '🔒 Private repo — live demo available upon request',
  },
  {
    id: 'pos-system',
    title: 'POS System',
    subtitle: 'Point of Sale for F&B & Retail Businesses',
    badge: 'Full-Stack · Live',
    badgeColor: 'green',
    featured: false,
    categories: ['fullstack', 'saas'],
    mediaType: 'slideshow',
    media: [posLogin, posCashier, posProducts, posOrders, posReports],
    description:
      'A modern, full-stack POS system built for Malaysian F&B and retail businesses. Replaces manual cash registers with a complete digital solution — live on Netlify with Supabase PostgreSQL as the backend.',
    highlights: [
      'Cashier screen with cart, discounts & multiple payment methods (Cash, Card, Touch n Go, QR)',
      'Product inventory management with stock level tracking and low stock alerts',
      'Sales analytics dashboard with revenue charts and best-selling product ranking',
    ],
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Netlify'],
    liveUrl: 'https://pos-system-my.netlify.app',
    githubUrl: 'https://github.com/Thivya0050/pos-system',
  },
];

export function filterProjects(projectsList, filterId) {
  if (filterId === 'all') return projectsList;
  if (filterId === 'saas') {
    return projectsList.filter(
      (p) => p.categories.includes('saas') || p.categories.includes('iot')
    );
  }
  if (filterId === 'ai') {
    return projectsList.filter((p) => p.categories.includes('ai'));
  }
  return projectsList.filter((p) => p.categories.includes(filterId));
}
