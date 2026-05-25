import {
  hubsmonImages,
  sabasImages,
  chatboxImg,
  aesappImg,
  rainwaterImg,
  robotVideo,
  pushupVideo,
  emotionVideo,
} from './projectMedia';

export const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'python', label: 'Python' },
  { id: 'saas', label: 'SaaS/IoT' },
  { id: 'fullstack', label: 'Full-Stack' },
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
