import type { EducationItem, PersonalInfo, TrainingItem } from '../types';

export const personalData: PersonalInfo = {
  name: 'Govind Kushwaha',
  brand: 'GK.',
  title: 'Python Full Stack Developer',
  roles: [
    'Python Full Stack Developer',
    'React Developer',
    'Software Engineer',
  ],
  identity: 'Python Full Stack Developer | React Developer | Software Engineering Enthusiast',
  headline: 'Building Modern Web Applications with Python & React.',
  tagline:
    'Final-year Computer Science Engineering student building clean frontends, structured Python backends, and robust database architectures.',
  careerGoal:
    'Aspiring Python Full Stack Developer / Software Engineer targeting professional fresher roles by April 2027.',
  bio: [
    "I'm Govind Kushwaha, a final-year B.Tech Computer Science student with a strong interest in software engineering and full-stack web development.",
    "I'm currently developing my skills in Python Full Stack Development, focusing on Python programming, modern frontend technologies, backend development, REST APIs, and database management.",
    "I enjoy building practical applications, exploring new technologies, and turning ideas into useful software solutions. My goal is to grow as a Python Full Stack Developer and contribute to real-world software products.",
  ],
  email: 'govindkush749@gmail.com',
  phone: '+91 6393812749',
  github: 'https://github.com/govindkdev',
  linkedin: 'https://www.linkedin.com/in/govindkdev',
  location: 'India',
  profileImage: '/images/govind-profile.png',
  heroBadges: [
    { label: 'B.Tech CSE | Class of 2027', highlight: true },
    { label: 'Open to Opportunities', highlight: true },
  ],
  heroSkills: ['Python', 'React', 'JavaScript', 'SQL'],
  resume: {
    hasPdf: true,
    pdfUrl: '/resume/Govind_Kushwaha_Resume.pdf',
    filename: 'Govind_Kushwaha_Resume.pdf',
    lastUpdated: 'November 2026',
  },
};

export const aboutCards = [
  {
    title: 'Education',
    detail: 'B.Tech CSE — 2027',
    institution: 'GCRG Group of Institutions (AKTU)',
  },
  {
    title: 'Specialization',
    detail: 'Python Full Stack Development',
    institution: 'Python, Django, FastAPI & React',
  },
  {
    title: 'Focus',
    detail: 'Software Engineering',
    institution: 'REST APIs, Databases & Web Architecture',
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'GCRG Group of Institutions',
    affiliation: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    duration: '2023 – 2027',
    score: '7.00 / 10',
    scoreLabel: 'Current CGPA (up to 3rd year)',
    location: 'Lucknow, Uttar Pradesh',
    current: true,
    highlights: [
      'Focus areas: Database Management Systems, Object-Oriented Programming, Operating Systems, Computer Networks',
      'Actively applying software engineering principles through academic and practical web projects',
      'Expected graduation: 2027',
    ],
    coursework: [
      'Database Management Systems',
      'Object-Oriented Programming',
      'Operating Systems',
      'Computer Networks',
      'Web Technologies',
      'Software Engineering',
      'Data Structures & Algorithms',
    ],
  },
  {
    id: 'class-xii',
    degree: 'Senior Secondary Education (Class XII)',
    institution: 'Muralidhar Intermediate College',
    duration: '2022 – 2023',
    score: '63.33%',
    scoreLabel: 'Final Board Result',
    location: 'Dumahi, Kushinagar, Uttar Pradesh',
    highlights: [
      'Science Stream with Mathematics & Physics focus',
      'Developed foundational analytical and problem-solving mindset',
    ],
  },
  {
    id: 'class-x',
    degree: 'Secondary School Certificate (Class X)',
    institution: 'Muralidhar Intermediate College',
    duration: '2020 – 2021',
    score: '89.68%',
    scoreLabel: 'Final Board Result',
    location: 'Dumahi, Kushinagar, Uttar Pradesh',
    highlights: [
      'High Academic Distinction (89.68%)',
      'Excellence in Mathematics, Science, and Logical Reasoning',
    ],
  },
];

export const trainingData: TrainingItem = {
  id: 'ducat-fullstack',
  title: 'Python Full Stack Development',
  provider: 'DUCAT',
  location: 'Noida',
  status: 'Ongoing',
  description:
    'Professional technical training focused on Python programming, frontend development, backend application development, database management, and full-stack web development.',
  modules: [
    'Python Programming',
    'Object-Oriented Programming',
    'HTML5 and CSS3',
    'JavaScript',
    'React',
    'Django',
    'FastAPI',
    'Flask',
    'MySQL',
    'Database Management',
    'REST API Development',
  ],
  learningAreas: [
    {
      topic: 'Python Programming & OOP',
      description: 'Core syntax, object-oriented concepts, modular scripts, and algorithmic data flow.',
    },
    {
      topic: 'Frontend Development: HTML5, CSS3 & React',
      description: 'Modern component-driven UI, responsive design with Tailwind CSS, and reactive state management.',
    },
    {
      topic: 'Backend Development: Django, FastAPI & Flask',
      description: 'Server routing, MVT patterns, request-response handling, and asynchronous API design.',
    },
    {
      topic: 'Database Engineering: MySQL & SQL',
      description: 'Relational data modeling, table normalization, schema design, and CRUD operations.',
    },
    {
      topic: 'REST API Development & Integration',
      description: 'Stateless endpoints, JSON serialization, HTTP status codes, and Postman testing.',
    },
  ],
};
