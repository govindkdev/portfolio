import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'attendx',
    title: 'ATTENDX',
    subtitle: 'AI-Powered Smart Attendance Management System',
    description:
      'A smart institutional attendance management system designed to streamline student and faculty attendance using facial recognition, dynamic QR codes, role-based dashboards, and automated reporting.',
    role: 'Frontend Development & UI/UX Design',
    myContribution:
      'Frontend Development and UI/UX Design. Architected the responsive client with React.js, TypeScript, and Tailwind CSS; built multi-role portals for students, teachers, and admins; implemented the camera verification UI, QR scanner workflows, and interactive attendance analytics.',
    status: 'In Progress',
    statusType: 'ongoing',
    isTeamProject: true,
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Vite', 'Lucide Icons'],
    features: [
      'Facial Recognition verification interface',
      'QR Attendance generation & scanning',
      'Student Dashboard with attendance analytics',
      'Teacher Dashboard for lecture session logging',
      'Admin Management & department control',
      'Attendance Reports & filterable historical logs',
      'Analytics & attendance summaries',
    ],
    capabilities: [
      'Facial Recognition & QR Verification',
      'Role-based Dashboards (Student, Teacher, Admin)',
      'Real-time Attendance Analytics & Compliance Export',
    ],
    accentColor: 'blue',
    githubUrl: 'https://github.com/govindkdev/AttendX',
    demoUrl: null, // Transparent status: active institutional project in development
  },
  {
    id: 'versetools',
    title: 'VERSETOOLS',
    subtitle: 'Multi-Utility Online Tools Platform',
    description:
      'An all-in-one web utility application providing developers and everyday users with fast, client-side tools for file conversion, text processing, formatting, and calculation.',
    role: 'Frontend Engineering & Architecture',
    myContribution:
      'Frontend Engineering & Architecture. Designed modular tool components with React.js, TypeScript, and Tailwind CSS; implemented client-side file readers and encoders to process utilities directly in-browser with zero external server upload for high privacy and speed.',
    status: 'In Development',
    statusType: 'development',
    isTeamProject: false,
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Web APIs', 'Vite'],
    categories: [
      'PDF Utilities (Merge, Split, Preview)',
      'Image Utilities (Resize, Converter, Compressor)',
      'Text Utilities (Word Counter, Case Converter, Diff)',
      'Developer Utilities (JSON Formatter, Base64)',
      'Calculators & Metric Unit Converters',
    ],
    features: [
      'Useful online tools in a single unified suite',
      'Clean user interface with distraction-free utility workspaces',
      'Responsive design across mobile, tablet, and desktop',
      'Practical utility features for everyday workflow speed',
      'Client-side zero-upload data processing for privacy',
      'JSON formatter, validator & code utilities',
    ],
    capabilities: [
      'Zero-Upload Privacy Engine',
      'Categorized Tool Explorer & Instant Search',
      'Modular Extensible Architecture',
    ],
    accentColor: 'cyan',
    githubUrl: 'https://github.com/govindkdev',
    demoUrl: null,
  },
  {
    id: 'shopsphere-ai',
    title: 'SHOPSPHERE AI',
    subtitle: 'AI-Powered Virtual Try-On E-Commerce Platform',
    description:
      'An advanced e-commerce concept integrating virtual try-on technology to provide realistic fitting previews, reduce product returns, and enhance the online shopping experience.',
    role: 'Concept & Frontend UI Architecture',
    myContribution:
      'Concept & Frontend UI Architecture. Designed the premium dark e-commerce UI design system, structured interactive product preview layouts, catalog browsing, cart workflows, and mapped planned computer-vision backend integration hooks.',
    status: 'Concept / Planning Phase',
    statusType: 'concept',
    isTeamProject: false,
    technologies: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Python (Planned)',
      'Django (Planned)',
      'MediaPipe / Computer Vision (Planned)',
    ],
    categories: ['Clothing', 'Footwear', 'Eyewear', 'Watches', 'Accessories', 'Jewelry'],
    features: [
      'AI Virtual Try-On blueprint for realistic apparel fitting',
      'Detailed Product Preview with multi-angle interactive display',
      'AI-Assisted Shopping & personalized fashion suggestions',
      'Premium E-Commerce Experience with modern cart and checkout flow',
      'Multi-category catalog browsing architecture',
    ],
    capabilities: [
      'Virtual Fitting Room Blueprint',
      'Interactive Product Showcase',
      'AI-Guided Fashion Recommendations',
    ],
    accentColor: 'purple',
    githubUrl: 'https://github.com/govindkdev',
    demoUrl: null,
  },
];
