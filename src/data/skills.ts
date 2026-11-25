import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    categoryNumber: '01',
    title: 'Programming Languages',
    description: 'Foundational and modern programming languages for application logic, scripting, and data queries.',
    accent: 'blue',
    skills: [
      { name: 'Python', icon: 'Terminal', description: 'Core Python, OOP, data structures, scripting & web backends', status: 'Comfortable' },
      { name: 'JavaScript', icon: 'Code2', description: 'ES6+ syntax, asynchronous programming, event handling & DOM', status: 'Comfortable' },
      { name: 'TypeScript', icon: 'FileCode2', description: 'Static type checking, interfaces, generics & safe component props', status: 'Familiar' },
      { name: 'C', icon: 'Cpu', description: 'Academic programming fundamentals, memory concepts & pointers', status: 'Familiar' },
      { name: 'SQL', icon: 'Table', description: 'Relational data querying, joins, DDL/DML, aggregations', status: 'Comfortable' },
    ],
  },
  {
    categoryNumber: '02',
    title: 'Frontend Development',
    description: 'Modern, component-driven client architecture with reactive state management and responsive styling.',
    accent: 'cyan',
    skills: [
      { name: 'HTML5', icon: 'Layout', description: 'Semantic markup, accessibility, modern web standards', status: 'Comfortable' },
      { name: 'CSS3', icon: 'Sparkles', description: 'Flexbox, Grid, transitions, responsive layouts', status: 'Comfortable' },
      { name: 'JavaScript ES6+', icon: 'Code2', description: 'Modern syntax, array methods, async/await, closures', status: 'Comfortable' },
      { name: 'React.js', icon: 'Atom', description: 'Functional components, hooks, custom state management', status: 'Comfortable' },
      { name: 'TypeScript', icon: 'FileCode2', description: 'Type-safe React development, component props & interfaces', status: 'Familiar' },
      { name: 'Tailwind CSS', icon: 'Palette', description: 'Utility-first styling, design tokens, responsive layouts', status: 'Comfortable' },
      { name: 'Responsive Web Design', icon: 'Layout', description: 'Mobile-first interfaces, fluid layouts, cross-device testing', status: 'Comfortable' },
    ],
  },
  {
    categoryNumber: '03',
    title: 'Backend Development',
    description: 'Server logic, RESTful API architecture, object-oriented design, and user authentication.',
    accent: 'purple',
    skills: [
      { name: 'Python', icon: 'Terminal', description: 'Server-side application logic and backend execution', status: 'Comfortable' },
      { name: 'Django', icon: 'Server', description: 'MVT architecture, ORM models, admin dashboard, auth routing', status: 'Familiar' },
      { name: 'FastAPI', icon: 'Zap', description: 'Modern asynchronous REST APIs with automatic OpenAPI docs', status: 'Currently Learning' },
      { name: 'Flask', icon: 'Server', description: 'Lightweight Python microservices, routing, and blueprints', status: 'Familiar' },
      { name: 'REST APIs', icon: 'Network', description: 'Stateless endpoints, standard HTTP verbs, JSON data contracts', status: 'Comfortable' },
      { name: 'Object-Oriented Programming', icon: 'Boxes', description: 'Encapsulation, inheritance, polymorphism, clean modular design', status: 'Comfortable' },
      { name: 'Authentication', icon: 'Shield', description: 'Session-based auth, JWT token workflows, password hashing', status: 'Familiar' },
    ],
  },
  {
    categoryNumber: '04',
    title: 'Database Management',
    description: 'Relational database systems, schema normalization, and structured data querying.',
    accent: 'blue',
    skills: [
      { name: 'MySQL', icon: 'Database', description: 'Relational database administration, schema design, indexes', status: 'Comfortable' },
      { name: 'PostgreSQL', icon: 'Database', description: 'Advanced relational database features, constraints & queries', status: 'Currently Learning' },
      { name: 'SQLite', icon: 'FileSpreadsheet', description: 'Lightweight local database for development and rapid testing', status: 'Comfortable' },
      { name: 'SQL', icon: 'Table', description: 'Complex queries, filtering, joins, grouping, and views', status: 'Comfortable' },
      { name: 'Database Design', icon: 'Layers', description: 'ER modeling, normalization (1NF-3NF), foreign key integrity', status: 'Familiar' },
    ],
  },
  {
    categoryNumber: '05',
    title: 'Tools & Technologies',
    description: 'Version control, developer workflows, API testing environments, and modern build tools.',
    accent: 'cyan',
    skills: [
      { name: 'Git', icon: 'GitBranch', description: 'Distributed version control, branching strategies, commit history', status: 'Comfortable' },
      { name: 'GitHub', icon: 'Github', description: 'Remote repositories, pull requests, project tracking & collaboration', status: 'Comfortable' },
      { name: 'VS Code', icon: 'Code', description: 'Extensions, debugging, modern developer environment', status: 'Comfortable' },
      { name: 'Postman', icon: 'Send', description: 'REST API testing, request params, environment variables', status: 'Comfortable' },
      { name: 'Vite', icon: 'Zap', description: 'Fast frontend tooling, instantaneous HMR, production bundling', status: 'Comfortable' },
      { name: 'npm', icon: 'Package', description: 'Package management, scripts, dependency resolution', status: 'Comfortable' },
    ],
  },
];
