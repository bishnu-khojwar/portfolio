import { NavLink, Stat, Skill, ExperienceItem, EngagementItem, ProjectItem, SocialLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Engagement', href: '#engagement' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_STATS: Stat[] = [
  { value: '99.9%', label: 'Uptime Achievement' },
  { value: '70%', label: 'Deployment Time Reduced' },
  { value: '3+', label: 'Years Experience' },
];

export const SKILLS: Skill[] = [
  {
    category: 'Languages',
    icon: '👨‍💻',
    tags: ['Python', 'NodeJS', 'Bash', 'Terraform', 'Ansible'],
  },
  {
    category: 'DevOps Tools',
    icon: '🚀',
    tags: ['Docker', 'Kubernetes', 'OpenShift', 'CI/CD', 'SaltStack'],
  },
  {
    category: 'Cloud & Monitoring',
    icon: '☁️',
    tags: ['AWS', 'Prometheus', 'Grafana', 'Nagios'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    tags: ['Oracle', 'MSSQL', 'PostgreSQL'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🔧',
    tags: ['Git', 'Nginx', 'Linux', 'Jira'],
  },
  {
    category: 'Interests',
    icon: '🎯',
    tags: ['DevOps','AI/ML', 'Cybersecurity', 'System Design'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Software Engineer II (DevOps)',
    company: 'Infinite Software Services Nepal',
    period: 'Feb 2024 - Present',
    icon: '🚀',
    details: [
      'Managed Kubernetes and OpenShift clusters, enabling 99.9% application uptime and seamless scaling',
      'Led initiatives for DevOps best practices and internal tooling, improving team delivery velocity',
      'Coordinated with team members and conducted tech sessions for growth and engagement',
      'R&D on emerging technologies and implementation strategies',
    ],
  },
  {
    role: 'Software Engineer I (DevOps)',
    company: 'Cotiviti Nepal',
    period: 'Dec 2022 - Feb 2024',
    icon: '⚙️',
    details: [
      'Designed and maintained fully automated CI/CD pipelines using Bamboo and Octopus Deploy',
      'Reduced deployment time by 70% and improved release success rate by 30%',
      'Worked on Salt Stack as an IaC tool, increasing work efficiency by over 60%',
      'Implemented monitoring with Prometheus, Grafana, and Nagios, reducing incident response time by 50%',
    ],
  },
  {
    role: 'Trainee',
    company: 'Cotiviti Nepal',
    period: 'Nov 2022 - Dec 2022',
    icon: '📚',
    details: [
      'Studied US healthcare basics, Medicare and Medicaid programs, and medical claims',
      'Explored SSIS ETL, PL/SQL, MS SQL Server, CI/CD, containerization, and monitoring tools',
    ],
  },
  {
    role: 'Deployment and Support Officer Intern',
    company: 'Gokyo Labs',
    period: 'Sep 2022 - Oct 2022',
    icon: '💼',
    details: [
      'Deployed data reconciler application in various banks of Nepal',
      'Worked with Python regex to generate rules for financial data matching and reporting',
    ],
  },
];

export const ENGAGEMENT: EngagementItem[] = [
  {
    badge: '🦁 PRESIDENT',
    title: 'Leo Club of Kathmandu Natural',
    organization: 'LDC 325G, Nepal • L.Y. 2024-2025',
    location: 'Kathmandu, Nepal',
    description: [
      'Led 40+ active members in organizing donation drives, awareness campaigns, memorials, and community programs',
      'Collaborated with local communities and Lions Club partners to amplify social impact',
    ],
  },
  {
    badge: '🫂 VOLUNTEER',
    title: 'PINKWALK by Cotiviti Cares',
    organization: 'Cancer Care Nepal Partnership • 2023',
    location: 'Kathmandu, Nepal',
    description: [
      'Supported event operations during a major breast cancer awareness event with Cancer Care Nepal',
    ],
  },
  {
    badge: '🎮 COORDINATOR',
    title: 'Gaming Competition at Yatra 3.0',
    organization: 'NCE IT Club, Robotics Club, CESS-NCE & Electrical Club • 2019',
    location: 'Lalitpur, Nepal',
    description: [
      'Coordinated inter-college gaming events at Nepal College of Engineering (NCE)',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Sign Language Recognition System',
    type: 'B.E. Major Project',
    description:
      'Computer vision-based system to recognize hand gestures in sign language and translate them into corresponding alphabets or words using Artificial Neural Networks.',
    emoji: '🫱🏻‍🫲🏼',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe'],
    link: 'https://github.com/bishnu-khojwar/Sign-language-recognition-system',
  },
  {
    title: 'Text to Speech Synthesis System',
    type: 'B.E. Minor Project',
    description:
      'Text-to-speech (TTS) system that converts written text into human-like speech using Natural Language Processing (NLP) techniques.',
    emoji: '🗣️',
    tech: ['Python', 'Flask', 'Pyttsx3', 'NLP'],
    link: 'https://github.com/bishnu-khojwar/Text-to-Speech-Synthesis',
  },
  {
    title: 'Fitness Project using ReactJS',
    type: 'Personal Work',
    description:
      'A fitness web application built with ReactJS that provides users with workout routines, nutrition plans, and progress tracking features to help them achieve their fitness goals.',
    emoji: '💪',
    tech: ['ReactJS', 'JavaScript', 'CSS', 'HTML'],
    link: 'https://github.com/bishnu-khojwar/fitness-project-react',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: '💼', href: 'https://www.linkedin.com/in/bishnu-khojwar', label: 'LinkedIn' },
  { icon: '📧', href: 'mailto:bishnukhojwar18@gmail.com', label: 'Email' },
  { icon: '👤', href: '#about', label: 'Profile' },
];
