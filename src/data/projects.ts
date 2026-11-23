import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'attendx',
    title: 'ATTENDX',
    subtitle: 'AI-Powered Smart Attendance Management System',
    description:
      'A smart attendance management platform designed around facial recognition attendance, dynamic QR-based verification, role-based student and teacher portals, comprehensive attendance logs, and automated institutional analytics.',
    role: 'Frontend Development & UI Implementation',
    roleDetails:
      'Collaborative team project developed for GCRG Group of Institutions. My core responsibility was architecting and implementing the responsive frontend UI with React.js, TypeScript, and Tailwind CSS — building the multi-role dashboards, camera capture interfaces, and attendance reporting views.',
    status: 'In Progress / Active Development',
    statusType: 'ongoing',
    isTeamProject: true,
    technologies: ['React.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'REST API Client', 'Lucide Icons'],
    capabilities: [
      'Student Dashboard with attendance percentage tracking',
      'Teacher Dashboard for class session initiation & records',
      'Admin Dashboard for institute-wide configuration',
      'Face Attendance Verification Interface (WebRTC/Camera UI)',
      'Dynamic Signed QR-Code Scanner & Generator View',
      'Historical Attendance Records & Filterable Logs',
      'Exportable Compliance Reports & Attendance Analytics',
    ],
    accentColor: 'blue',
    githubUrl: 'https://github.com/govindkdev/AttendX',
    demoUrl: null, // Clearly marked as internal institute project / in active development
  },
  {
    id: 'shopsphere-ai',
    title: 'SHOPSPHERE AI',
    subtitle: 'AI-Powered Virtual Try-On E-Commerce Platform Concept',
    description:
      'A forward-looking AI-driven e-commerce platform concept designed to help customers virtually preview items before purchasing, mitigating size uncertainty and return rates across varied product segments.',
    role: 'Concept & Frontend UI Architecture',
    roleDetails:
      'Currently at the Concept & Architectural Planning stage. Responsible for conceptualizing the dark luxury UI/UX layout, product category browsing modules, and planned integration hooks for real-time computer vision draping pipelines.',
    status: 'Concept / Planning Phase',
    statusType: 'concept',
    isTeamProject: false,
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Python (Planned)', 'Django (Planned)', 'MediaPipe (Planned)'],
    categories: ['Clothing', 'Footwear', 'Eyewear', 'Watches', 'Accessories', 'Jewelry'],
    capabilities: [
      'Interactive Product Catalog & Category Browsing',
      'Product Visualization & Detailed Specifications',
      'Virtual Try-On Experience (Architectural Blueprint)',
      'Modern SaaS E-Commerce Cart & Checkout Flow Concept',
      'AI-Assisted Personalized Fashion Recommendations',
    ],
    accentColor: 'purple',
    githubUrl: 'https://github.com/govindkdev',
    demoUrl: null,
  },
  {
    id: 'versetools',
    title: 'VERSETOOLS',
    subtitle: 'Multi-Utility Online Tools Platform',
    description:
      'A lightweight, private, and all-in-one web utility hub bringing everyday online tools together into a unified, distraction-free environment with immediate client-side execution.',
    role: 'Frontend Engineering & Tool Architecture',
    roleDetails:
      'Designing and developing modular utility tools that process data directly in the browser without server latency or privacy vulnerabilities.',
    status: 'In Development / Modular Build',
    statusType: 'development',
    isTeamProject: false,
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Web APIs', 'Vite'],
    categories: [
      'PDF Utilities (Merge, Split, Preview)',
      'Image Utilities (Resize, Format Converter, Compressor)',
      'Text Utilities (Word Counter, Case Converter, Diff Checker)',
      'Developer Utilities (JSON Formatter/Validator, Base64 Encoder)',
      'Calculators & Metric Unit Converters',
    ],
    capabilities: [
      'Zero-Upload Client-Side Processing for Maximum Privacy',
      'Categorized Tool Explorer with Instant Search',
      'JSON Formatter, Validator & Pretty Printer',
      'Responsive Mobile & Desktop Tool Interfaces',
      'Clean Modular Architecture for Easy Tool Expansion',
    ],
    accentColor: 'cyan',
    githubUrl: 'https://github.com/govindkdev',
    demoUrl: null,
  },
];
