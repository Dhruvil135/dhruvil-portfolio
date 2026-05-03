// ─── Types ──────────────────────────────────────────────────────────────────

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  category: string;
  github: string;
  demo: string | null;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface ProfileCard {
  label: string;
  username: string;
  description: string;
  href: string;
}

// ─── Data ───────────────────────────────────────────────────────────────────

export const portfolioData = {
  // Personal
  name: 'Dhruvil Shah',
  initials: 'DS',
  title: 'Java Developer',
  tagline: 'Building robust backend solutions with Java',
  institution: 'R. C. Patel Institute of Technology, Shirpur',
  degree: 'B.Tech in Computer Engineering',
  year: 'Class of 2028',
  location: 'Shirpur',
  photoUrl: '/Dhruvil_photo.jpg.jpeg',

  // Contact
  email: 'shahdhruvil2336@gmail.com',
  resumeUrl: '/resume.pdf',

  // Social
  social: {
    github: 'https://github.com/Dhruvil135',
    codechef: 'https://www.codechef.com/users/dhruvil135',
    linkedin: 'https://www.linkedin.com/in/dhruvilshah92/',
  } as SocialLinks,

  // Stats
  stats: {
    cgpa: '7.7',
    projects: 1,
    internships: 1,
    skills: 8,
  },

  // Bio paragraphs
  bio: [
    "Computer Engineering undergraduate at RCPIT (Class of 2028) with strong fundamentals in Core Java, Object-Oriented Programming, C, and Data Structures.",
    "I have hands-on experience building desktop-based Java GUI applications using NetBeans (Swing), along with problem-solving practice on CodeChef.",
    "Currently focused on transitioning into backend development using Java, learning SQL, Spring Boot, REST APIs, and backend architecture through consistent practice and projects. Actively seeking internships or entry-level roles where I can contribute, learn from real systems, and grow as a Java backend developer.",
  ],

  // Profile cards for About section
  profiles: [
    {
      label: 'GitHub',
      username: '@Dhruvil135',
      description: 'Browse my repositories, projects, and open-source contributions.',
      href: 'https://github.com/Dhruvil135',
    },
    {
      label: 'LinkedIn',
      username: '@dhruvilshah92',
      description: 'Connect with me professionally and view my career journey.',
      href: 'https://www.linkedin.com/in/dhruvilshah92/',
    },
  ] as ProfileCard[],

  // Work Experience
  experience: [
    {
      title: 'Java Developer Intern',
      company: 'Infosys Springboard',
      period: 'November 2025 – January 2026',
      description:
        'Developed Java-based applications and backend modules as part of the Infosys Springboard program. Applied Core Java, OOP principles, and JDBC for database integration while following agile practices within a structured learning environment.',
    },
  ] as ExperienceItem[],

  // Skills with symbols and experience levels
  skills: [
    'C',
    'Java',
    'Java Swing',
    'JDBC',
    'NetBeans',
    'Git',
    'GitHub',
    'MySQL',
  ],

  // Projects (filter categories: All | Java | MERN | JavaScript)
  projects: [
    {
      name: 'SkillForge LMS Platform',
      description:
        'A full-stack Learning Management System built with the MERN stack. Instructors can create courses and assessments while students enroll, track progress, and receive automated results. Features JWT authentication, RESTful APIs, and a responsive React interface.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Tailwind CSS'],
      category: 'MERN',
      github: 'https://github.com/Dhruvil135/learnflow-dashboard-main',
      demo: 'https://skillforge-platform.vercel.app/',
    },
  ] as ProjectItem[],

  // Project filter tabs
  projectFilters: ['All', 'MERN', 'Java', 'JavaScript'],
};