import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Modern, component-driven client architecture with reactive state & responsive styling.',
    accent: 'blue',
    skills: [
      { name: 'React.js', icon: 'Atom', description: 'Functional components, hooks, custom state management' },
      { name: 'TypeScript', icon: 'FileCode2', description: 'Static typing, interfaces, type-safe frontend code' },
      { name: 'JavaScript ES6+', icon: 'Code2', description: 'Async/await, DOM APIs, modern ES features' },
      { name: 'Tailwind CSS', icon: 'Palette', description: 'Utility-first styling, design tokens, responsive layouts' },
      { name: 'HTML5', icon: 'Layout', description: 'Semantic markup, accessibility, modern standards' },
      { name: 'CSS3', icon: 'Sparkles', description: 'Flexbox, Grid, keyframes, transitions, media queries' },
    ],
  },
  {
    title: 'Backend & Server-Side',
    description: 'Server logic, RESTful routing, and backend application development.',
    accent: 'purple',
    skills: [
      { name: 'Python', icon: 'Terminal', description: 'Core Python, scripting, object-oriented architecture' },
      { name: 'Django', icon: 'Server', description: 'MVC/MVT pattern, ORM, authentication, view routing' },
      { name: 'Flask', icon: 'Cpu', description: 'Lightweight microframework, API endpoints, modular blueprints' },
    ],
  },
  {
    title: 'Databases & Querying',
    description: 'Data modeling, schema design, and relational query execution.',
    accent: 'cyan',
    skills: [
      { name: 'MySQL', icon: 'Database', description: 'Relational database management, joins, indexing' },
      { name: 'SQL', icon: 'Table', description: 'Structured query formulation, CRUD operations, transactions' },
    ],
  },
  {
    title: 'Development Tools & Build Workflow',
    description: 'Modern developer toolchain for version control and fast local bundling.',
    accent: 'blue',
    skills: [
      { name: 'Git', icon: 'GitBranch', description: 'Version control, branch workflows, commit history' },
      { name: 'GitHub', icon: 'Github', description: 'Remote repositories, pull requests, collaboration' },
      { name: 'VS Code', icon: 'Code', description: 'Extensions, debugging, modern IDE workflow' },
      { name: 'Vite', icon: 'Zap', description: 'Next-gen frontend tooling, instant HMR, optimized builds' },
    ],
  },
  {
    title: 'Core Concepts & Engineering Foundations',
    description: 'Software design principles, network communication, and computational thinking.',
    accent: 'purple',
    skills: [
      { name: 'REST APIs', icon: 'Network', description: 'HTTP verbs, status codes, stateless endpoints' },
      { name: 'JSON', icon: 'FileJson', description: 'Structured client-server data serialization' },
      { name: 'Responsive Web Design', icon: 'Smartphone', description: 'Mobile-first breakpoints, fluid typography' },
      { name: 'Component-Based Architecture', icon: 'Boxes', description: 'Modularity, reusable UI components, clean props' },
      { name: 'Data Structures & Algorithms', icon: 'Binary', description: 'Arrays, strings, searching, sorting, problem solving' },
    ],
  },
];
