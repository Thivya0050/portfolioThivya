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
    title: '3D Robotic Arm — Gesture Control',
    subtitle: 'Hand Gesture Control System',
    badge: 'AI · Self-Built',
    badgeColor: 'purple',
    featured: true,
    categories: ['ai', 'python'],
    mediaType: 'video',
    media: robotVideo,
    description:
      'A real-time 3D robotic arm simulation controlled entirely by hand gestures via webcam — no physical hardware. Built in Python with MediaPipe hand landmark and face mesh tracking, PyOpenGL for 3D rendering, and a multithreaded architecture to keep gesture recognition and rendering decoupled.',
    highlights: [
      'Six distinct gestures mapped to individual joints: hand X/Y position → base rotation and shoulder angle, pinch distance → elbow bend, extended fingers → gripper open %, head tilt via FaceMesh → gripper fine control, fist → lock arm in place',
      "Hierarchical kinematic chain (base → shoulder → elbow → gripper) implemented with stacked OpenGL transforms — each segment's matrix builds on the previous one",
      'Multithreaded design: gesture recognition runs in a background thread to keep the rendering loop smooth',
    ],
    limitation:
      'OpenGL context initialization on Windows is order-sensitive and caused significant debugging time — a cross-platform rendering layer would be the first thing I\'d change in a rebuild.',
    repoNote:
      'Original codebase no longer available — inspired by the work of Muhammad Sharjeel (linkedin.com/in/sharjeelx3), built from scratch as an independent implementation. Demo video above.',
    liveUrl: 'https://lnkd.in/p/gNbJ6WnX',
    tags: ['Python', 'MediaPipe', 'PyOpenGL', 'OpenCV', 'Computer Vision', 'Multithreading'],
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
      'An AI-powered attendance and behavior monitoring system for classrooms, using real-time facial recognition to mark attendance and computer vision to detect behaviors like yawning or inattentiveness. Built with Flask, OpenCV, and Firebase, with role-based dashboards for admins, lecturers, and students, plus automated Telegram alerts.',
    highlights: [
      'Facial recognition initially struggled with low light and off-angle faces — retrained the model on a more diverse image set and added automatic brightness/noise correction to improve robustness',
      'IoT integration with real-time Telegram notifications for attendance and behavior alerts',
      'Multi-role dashboards (admin, lecturer, student) with attendance and behavior analytics',
    ],
    tags: ['Python', 'Flask', 'OpenCV', 'IoT', 'Firebase', 'Face Recognition'],
    limitation:
      "Requires specific hardware (Raspberry Pi, camera module) and stable internet, and recognition accuracy depends on adequate lighting and a clear camera angle — a constraint I'd address with a lighting-normalization step in a rebuild.",
    repoNote: 'Original codebase no longer available — the write-up above reflects the documented build, testing process, and known limitations from my final year project report.',
  },
  {
    id: 'traffic-violation',
    title: 'Traffic Violation & Speed Detection System',
    categories: ['ai', 'python'],
    description:
      'An end-to-end computer vision pipeline that detects vehicles in traffic video, tracks them with YOLO26 + ByteTrack, estimates speed via perspective-aware auto-calibration, and flags overspeeding or wrong-direction violations through a Streamlit web UI.',
    highlights: [
      'Auto-calibration estimates a pixel-to-meter scale from lane markings using Canny edge detection and Hough Line Transform — no manual calibration clicks required',
      'Perspective-aware speed smoothing per tracked vehicle, with a documented fallback heuristic when lane markings aren\'t detectable',
      'Flags overspeeding and wrong-direction violations with a configurable limit and auto-inferred traffic flow',
    ],
    limitation:
      'This is an approximation built for portfolio/demo use, not a substitute for surveyed reference measurements or radar-grade calibration — absolute accuracy depends on camera angle, height, lens distortion, and lane visibility.',
    githubUrl: 'https://github.com/Thivya0050/traffic-violation-speed-detection-system',
    tags: ['Python', 'YOLO26', 'ByteTrack', 'OpenCV', 'Streamlit', 'Computer Vision'],
  },
  {
    id: 'bruno',
    title: 'Bruno',
    subtitle: 'Windows Voice Assistant',
    categories: ['ai', 'python'],
    description:
      'A Windows system-tray voice assistant with push-to-talk activation, local speech-to-text, and Groq-powered LLM responses. Supports hands-free mode via voice activity detection, on-device screenshot/vision tools, local file access, and browser control through the Chrome DevTools Protocol.',
    highlights: [
      'Local Whisper transcription with a full audio pipeline — no cloud STT dependency for the core loop',
      'Browser automation via CDP for agentic web tasks, with an audit log and confirmation step before actions execute',
      'Encrypted API key storage using Windows DPAPI rather than plaintext config',
    ],
    limitation:
      'Inspired by an existing open-source Bruno project — this is an independent implementation built from scratch, not a fork.',
    githubUrl: 'https://github.com/Thivya0050/bruno',
    tags: ['Python', 'Whisper', 'Groq', 'CDP', 'Voice Assistant'],
  },
  {
    id: 'asset-model',
    title: 'Asset Model Module',
    categories: ['fullstack', 'nextjs'],
    description:
      'A standalone asset-tracking module (Next.js, Prisma, SQLite, NextAuth) built independently as an exploration of the asset-management domain — role-based access control, audit trails, and archive-instead-of-delete data handling.',
    highlights: [
      'Role-based access across Admin, Manager, Staff, and Viewer, each with different write/read permissions',
      'Schema documented against what\'s confirmed vs. what\'s an intentional design assumption, rather than presented as a finished spec',
      'Built with a swap-in path to PostgreSQL for production use',
    ],
    githubUrl: 'https://github.com/Thivya0050/asset-model',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'SQLite', 'NextAuth'],
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
      'Fitness application using real-time AI pose detection to count push-ups and analyze exercise form using a state-machine approach based on elbow angle thresholds — webcam only, no extra hardware.',
    highlights: [
      "Real-time pose detection using MediaPipe's 33-point body landmark model",
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
    media: [posCashier, posLogin, posProducts, posOrders, posReports],
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
