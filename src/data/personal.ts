import type { EducationItem, PersonalInfo, TrainingItem } from '../types';

export const personalData: PersonalInfo = {
  name: 'Govind Kushwaha',
  brand: 'GK.',
  identity: 'Frontend Developer | Python Full Stack Developer',
  roles: [
    "I'm Govind Kushwaha",
    'Frontend Developer',
    'Python Full Stack Developer',
    'Software Developer',
  ],
  tagline:
    'Passionate about building modern, responsive, and user-focused web applications through frontend technologies and Python Full Stack development.',
  bio: [
    "I'm Govind Kushwaha, a final-year B.Tech Computer Science student passionate about software development and building practical web applications.",
    'I am developing my expertise in Frontend Development and Python Full Stack Development. I enjoy creating responsive interfaces, working with modern web technologies, and understanding how applications work across frontend, backend, and database layers.',
    'I believe in learning through practical implementation and continuously improving my technical and problem-solving skills.',
  ],
  email: 'govindkush749@gmail.com',
  phone: '+91 6393812749',
  github: 'https://github.com/govindkdev',
  linkedin: 'https://www.linkedin.com/in/govindkdev',
  location: 'India',
  profileImage: '/images/govind-profile.png',
  resume: {
    hasPdf: true,
    pdfUrl: '/resume/Govind_Kushwaha_Resume.pdf',
    filename: 'Govind_Kushwaha_Resume.pdf',
    lastUpdated: 'November 2026',
  },
};

export const educationData: EducationItem[] = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'GCRG Group of Institutions',
    affiliation: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow',
    duration: '2023 – 2027',
    score: '7.00 / 10',
    scoreLabel: 'Current CGPA (up to 3rd year)',
    location: 'Lucknow, Uttar Pradesh',
    current: true,
    highlights: [
      'Focus areas: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Web Technologies',
      'Actively applying software engineering principles through academic and practical web projects',
      'Expected graduation: 2027',
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
  title: 'Python Full Stack Development Training',
  provider: 'DUCAT',
  location: 'Noida, Uttar Pradesh',
  status: 'Ongoing Professional Training',
  description:
    'Comprehensive hands-on training focusing on end-to-end web architecture, backend development with Python frameworks, database design, and algorithmic problem-solving.',
  modules: [
    'Python Programming & OOP Foundations',
    'HTML5, Modern CSS3 & Responsive UI Design',
    'JavaScript (ES6+) & Modern Web APIs',
    'Django & Flask Web Frameworks',
    'Relational Databases & MySQL Querying',
    'RESTful API Architecture & JSON Integration',
    'Data Structures and Algorithms (DSA) Practice',
  ],
};
