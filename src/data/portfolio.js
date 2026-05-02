export const profile = {
  name: 'Bimal Vishwakarma',
  initials: 'BV',
  role: 'Full-Stack Software Engineer',
  location: 'Sanpada, Navi Mumbai, India',
  email: 'bkbimal250@gmail.com',
  phone: '+91 9116458453',
  portfolio: 'https://bkbimalportfolio.netlify.app',
  github: 'https://github.com/bkbimal',
  linkedin: 'https://www.linkedin.com/in/bkbimal',
  heroImg: 'https://res.cloudinary.com/dm2bxj0gx/image/upload/v1777715926/109973398_cowkyb.jpg',

  headline:
    'Full-Stack Engineer building scalable, revenue-driven platforms with React, Node.js, Django & AI-powered automation.',

  summary:
    'I design and develop end-to-end production systems — from pixel-perfect frontend interfaces to secure, scalable backend architectures. My work includes building booking platforms, job portals, CRM systems, payment integrations, and real-time dashboards. I specialize in transforming business ideas into high-performance digital products that are reliable, user-friendly, and growth-focused.',

  impact:
    'Delivered high-impact platforms like SpaAdvisor and WorkSpa, onboarding 200+ businesses and generating 1,000+ daily leads. Proven ability to build systems that directly improve business operations, automate workflows, and scale efficiently in real-world environments.',
}

export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '200+', label: 'spa centers onboarded' },
  { value: '1,000+', label: 'daily platform leads' },
  { value: '100+', label: 'daily job applications' },
  { value: '9.45', label: 'B.Sc. IT GPA' },
]

export const skills = [
  {
    title: 'Frontend Engineering',
    text: 'Responsive production interfaces, dashboard UI, booking flows, role-based panels, and component-driven React builds.',
    tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'React.js', 'Next.js', 'Redux', 'Tailwind CSS'],

  },
  {
    title: 'Backend Development',
    text: 'REST APIs, authentication, booking systems, real-time workflows, background jobs, caching, and scalable deployments.',
    tags: ['Node.js', 'Express.js', 'Django', 'FastAPI'],
  },
  {
    title: 'Data & Infrastructure',
    text: 'Relational and document databases, Redis caching, VPS deployments, Linux workflows, and practical CI/CD delivery.',
    tags: ['PostgreSQL', 'Sql Server', 'MySQL', 'MongoDB', 'Redis', 'Docker'],
  },
  {
    title: 'AI & Automation',
    text: 'GenAI integrations, LangChain, RAG workflows, Selenium automation, and custom AI tools for business operations.',
    tags: ['GenAI', 'LangChain', 'RAG', 'Selenium', 'Whatsapp AI Automation'],
  },
]

export const projects = [
  {
    name: 'SpaAdvisor',
    type: 'Spa Booking Platform',
    url: 'https://spaadvisor.in',
    summary:
      'Live spa discovery and booking platform with online payments, WhatsApp enquiries, role-based dashboards, and lead management.',
    impact: '200+ centers and 1,000+ daily leads',
    stack: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    highlights: [
      'Razorpay payments',
      'Twilio WhatsApp OTP',
      'Redis caching',
      'Node.js clustering',
    ],
  },
  {
    name: 'WorkSpa',
    type: 'SPA Industry Job Portal',
    url: 'https://workspa.in',
    summary:
      'A comprehensive, location-intelligent job portal specifically designed for the wellness industry, enabling seamless job discovery and direct communication without mandatory registration.',
    impact: 'Streamlined industry recruitment with real-time analytics and automated job alerts.',
    stack: [
      'FastAPI',
      'PostgreSQL',
      'Next.js 14',
      'TypeScript',
      'SQLAlchemy',
      'Tailwind CSS',
      'JWT'
    ],
    highlights: [
      'Location-based "Near Me" search with PostGIS',
      'No-login application & guest messaging system',
      'Automated email subscriptions & job matching',
      'SEO-optimized with dynamic JSON-LD & Sitemaps',
      'Multi-role RBAC (Admin, Manager, Recruiter, User)',
      'Asynchronous background tasks with APScheduler'
    ],
  },
  {
    name: 'Attendance Management System',
    type: 'HR Operations System',
    url: 'https://admindos.dishaonlinesolution.in/',
    summary:
      'A comprehensive production-grade platform for biometric attendance synchronization, integrated with leave, document, resignation, and salary workflows.',
    impact: 'Automated end-to-end HR attendance operations and real-time workforce management.',
    stack: [
      'Django',
      'Django REST Framework',
      'React.js',
      'Axios',
      'Channels',
      'Celery',
      'Redis',
      'MySQL'
    ],
    highlights: [
      'Biometric & Socket.IO real-time sync',
      'JWT Authentication & RBAC security',
      'Automated leave and salary workflows',
      'Redis-backed Celery task queue',
      'Centralized dashboard with real-time analytics',
      'Full employee lifecycle & document management'
    ],
  },

  {
    name: 'CallLog System',
    type: 'Multi-Branch Device Monitoring & Analytics',
    url: 'https://crm.mastercall.in/',
    summary:
      'A sophisticated multi-branch call logging system for spa/salon businesses that captures real-time call data from Android devices with automated health monitoring and reporting.',
    impact: 'Automated branch communication tracking and real-time operational analytics.',
    stack: ['Django', 'Django REST Framework', 'Reactjs', 'PostgreSQL', 'Reddis', 'Celery'],
    highlights: [
      'Idempotent bulk call sync',
      'Device health heartbeats (Battery/Signal)',
      'Role-based access control (RBAC)',
      'S3-integrated report exports',
    ],
  },

  {
    name: 'Infodocs - Document Generator',
    type: 'Automated Document & Certificate System',
    url: 'https://docs.dishaonlinesolution.in/',
    summary:
      'A high-performance FastAPI-based backend system designed for automated certificate generation, document management, and secure distribution via OTP-based authentication.',
    impact: 'Automated the generation and validation of legal/professional documents with role-based audit trails.',
    stack: [
      'FastAPI',
      'MySQL',
      'SQLAlchemy',
      'Pydantic',
      'Jinja2',
      'WeasyPrint',
      'JWT'
    ],
    highlights: [
      'Dynamic PDF generation from HTML templates',
      'OTP-based secure login and registration',
      'Multi-tenant RBAC (Admin, HR, Manager, Candidate)',
      'Asynchronous I/O with performance optimization',
      'Real-time analytics and activity tracking',
      'Automated background removal for professional assets'
    ],
  },
]

export const experience = [
  {
    period: 'Jan 2025 - Present',
    role: 'Full Stack Web Developer',
    company: 'Disha Online Solution',
    location: 'Navi Mumbai',
    detail:
      'Leading the development of scalable business platforms including SpaAdvisor, WorkSpa, and CRM systems. Built end-to-end solutions using MERN and FastAPI stacks with Razorpay payments, WhatsApp OTP automation, Redis caching, and VPS deployments. Delivered systems generating 1,000+ daily leads and onboarding 200+ businesses with high-performance dashboards and real-time workflows.',
  },
  {
    period: 'Aug 2024 - Nov 2024',
    role: 'Web Developer Intern',
    company: 'Sublime Technology',
    location: 'Navi Mumbai',
    detail:
      'Developed responsive web applications using Python, Django, React, and SQL databases. Contributed to API integrations, backend logic, and UI/UX improvements while gaining hands-on experience in full-stack development and production-ready coding practices.',
  },
  {
    period: 'Aug 2021 - May 2024',
    role: 'B.Sc. Information Technology',
    company: 'University of Mumbai',
    location: 'Mumbai',
    detail:
      'Graduated with 9.45/10 GPA with strong foundations in software engineering, system design, databases, and web technologies. Built multiple full-stack academic and real-world projects focusing on scalability and performance.',
  },
]

export const services = [
  'Business websites that generate leads and drive customer inquiries',
  'Custom web apps to automate operations (CRM, booking, dashboards)',
  'E-commerce platforms to sell products with full payment integration',
  'Android apps for scaling your business digitally (launching soon)',
  'High-performance landing pages optimized for conversions',
  'Personal and company portfolio websites with modern UI',
  'Backend systems, APIs, and third-party integrations',
  'Automation solutions (WhatsApp, OTP, notifications, workflows)',
  'AI-powered tools to improve business efficiency',
  'Complete custom solutions based on your business idea',
]

export const toolGroups = [
  {
    label: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C++'],
  },
  {
    label: 'Backend',
    items: ['Django', 'DRF', 'FastAPI', 'Node.js', 'Express.js'],
  },
  {
    label: 'Frontend',
    items: ['React.js', 'Redux', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQL SERVER', 'MongoDB', 'Redis'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Postman', 'Linux', 'Docker', 'VPS', 'CI/CD'],
  },
]
