import {
  hubsmonImages,
  sabasImages,
  robotVideo,
  kerjaCartImages,
  posLogin,
  posCashier,
  posProducts,
  posOrders,
  posReports,
  nalamImg,
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
    id: 'nalam-ai',
    title: 'Nalam AI',
    subtitle: "Malaysia's First All-in-One AI Platform",
    badge: 'AI · SaaS Platform',
    badgeColor: 'purple',
    featured: true,
    categories: ['ai', 'saas', 'fullstack'],
    mediaType: 'image',
    media: [nalamImg],
    description:
      "Founded and built a multi-language AI SaaS platform offering text/chat generation, document creation, slide generation, image generation, and voice synthesis across Bahasa Malaysia, Tamil, and English. Architected a multi-provider LLM orchestration system with fallback redundancy for reliability at scale.",
    highlights: [
      'Multi-language support (BM, Tamil, English)',
      'Multi-provider LLM orchestration with fallback redundancy',
      'Text, document, slide, image, and voice generation tools',
      '41+ registered users since early launch',
    ],
    tags: ['AI Orchestration', 'LLM', 'SaaS', 'Multi-tenant'],
    liveUrl: 'https://nalam.com.my',
  },
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
    mediaType: 'image',
    media: [`${process.env.PUBLIC_URL}/images/speedtrafic.png`],
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
    id: 'kerjacart',
    title: 'KerjaCart',
    subtitle: 'AI Grocery & Budget Tracker',
    badge: 'Claude API',
    badgeColor: 'amber',
    featured: false,
    categories: ['ai', 'saas'],
    mediaType: 'slideshow',
    media: kerjaCartImages,
    description:
      'A Malaysian grocery and budget-tracking app with Claude-powered spending intelligence. Log cart items by voice, scan, or manual entry, set a monthly RM budget, and get AI-generated audit reports with category breakdowns, a spending score, and specific local shopping suggestions.',
    highlights: [
      'Claude API generates the monthly AI Audit — a scored spending report with per-category insights and actionable suggestions tailored to local Malaysian stores and products',
      'Cart input supports voice, scan, and manual entry, filtered by category with real-time remaining budget display',
      'Monthly session history tracks spending trends over time with under/over-budget status per run',
    ],
    repoNote: 'Original codebase no longer available — screenshots above reflect the designed and built prototype.',
    tags: ['Claude API', 'Mobile', 'AI', 'Budget Tracker'],
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
