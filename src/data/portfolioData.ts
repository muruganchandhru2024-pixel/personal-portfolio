export interface ProjectInfo {
  id: string;
  name: string;
  fullTitle: string;
  tagline: string;
  category: string;
  status: "Planned" | "In Development" | "Completed";
  description: string;
  problemStatement: string;
  architecture: {
    step: string;
    title: string;
    detail: string;
  }[];
  keyCapabilities: string[];
  techStack: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceInfo {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  status: "Current" | "Completed";
  badge: string;
  responsibilities: string[];
  skillsApplied: string[];
  highlights?: string[];
}

export interface SkillNode {
  id: string;
  name: string;
  category: "Programming & Web" | "Frameworks & Libraries" | "Tools" | "Technical Concepts";
  description: string;
  iconName: string;
  orbitalRadius?: number;
  orbitSpeed?: number;
}

export interface CertificationInfo {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  certificatePath?: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gradeMetric: string;
  status: string;
  details: string[];
}

export const PORTFOLIO_DATA = {
  branding: {
    brandName: "CHANDHRU.EXE",
    tagline: "Beyond the Interface.",
    monogram: "CM",
    systemVersion: "v2.6.4-STABLE",
    statusBadge: "SYSTEM: OPERATIONAL",
  },
  personal: {
    name: "Chandhru M",
    role: "Computer Science Engineering Student | Web Developer",
    college: "Sri Krishna College of Technology, Coimbatore",
    collegeShort: "SKCT Coimbatore",
    collegeAccreditation: "Autonomous | NAAC A++ Grade",
    degree: "B.E. Computer Science Engineering",
    duration: "2023–2027 (Expected)",
    cgpa: "8.0 / 10.0 (up to 4th Semester)",
    location: "Coimbatore, Tamil Nadu, India",
    email: "727824tucs044@skct.edu.in",
    personalEmail: "muruganchandhru2024@gmail.com",
    phone: "+91 81444 58828",
    linkedIn: "https://www.linkedin.com/in/chandhru-m",
    github: "https://github.com/chandhru-m",
    availability: "AVAILABLE FOR INTERNSHIPS",
    profileImage: "/chandhru-profile.jpg",
    bio: "I'm a Computer Science Engineering student at Sri Krishna College of Technology with a strong interest in web development, computer vision, and software engineering. I enjoy transforming complex problems into meaningful digital solutions by combining technical knowledge, creativity, and user-focused design. Through practical projects and industry exposure, I continuously explore new technologies and improve my development capabilities.",
  },
  stats: [
    { label: "Academic CGPA", value: "8.0 / 10", subtitle: "Up to 4th Semester" },
    { label: "Graduation Cohort", value: "2027", subtitle: "B.E. CSE @ SKCT" },
    { label: "Industry Role", value: "Web Dev Intern", subtitle: "FortuMars AI Tech" },
    { label: "Primary Focus", value: "Full Stack & CV", subtitle: "Software Engineering" },
  ],
  skills: [
    // Programming & Web
    {
      id: "html5",
      name: "HTML5",
      category: "Programming & Web",
      description: "Semantic document architecture, accessibility standards (a11y), and modern HTML5 APIs.",
      iconName: "Code2",
    },
    {
      id: "css3",
      name: "CSS3",
      category: "Programming & Web",
      description: "Modern CSS layouts with Flexbox, CSS Grid, custom properties, animations, and responsive media queries.",
      iconName: "Palette",
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "Programming & Web",
      description: "ES6+ asynchronous programming, event-driven patterns, DOM manipulation, and modern web APIs.",
      iconName: "Zap",
    },
    {
      id: "python",
      name: "Python",
      category: "Programming & Web",
      description: "Object-oriented scripting, algorithmic data processing, automation, and computer vision scripting.",
      iconName: "Terminal",
    },

    // Frameworks & Libraries
    {
      id: "react",
      name: "React.js",
      category: "Frameworks & Libraries",
      description: "Component-driven single page applications, React Hooks, state management, and virtual DOM optimization.",
      iconName: "Layers",
    },
    {
      id: "opencv",
      name: "OpenCV",
      category: "Frameworks & Libraries",
      description: "Real-time computer vision processing, image filtering, contour detection, and video frame manipulation.",
      iconName: "Eye",
    },

    // Tools
    {
      id: "git",
      name: "Git",
      category: "Tools",
      description: "Distributed version control, branching strategies, conflict resolution, and commit history management.",
      iconName: "GitBranch",
    },
    {
      id: "github",
      name: "GitHub",
      category: "Tools",
      description: "Repository hosting, collaborative pull requests, issue tracking, and automated CI/CD workflows.",
      iconName: "Github",
    },
    {
      id: "vscode",
      name: "Visual Studio Code",
      category: "Tools",
      description: "Configured developer environment with linting, debugging, extension ecosystems, and terminal integration.",
      iconName: "Cpu",
    },
    {
      id: "canva",
      name: "Canva",
      category: "Tools",
      description: "Rapid visual prototyping, wireframing, presentation design, and digital asset asset composition.",
      iconName: "Sparkles",
    },

    // Technical Concepts
    {
      id: "responsive-design",
      name: "Responsive Design",
      category: "Technical Concepts",
      description: "Fluid grid systems, mobile-first design principles, dynamic breakpoints, and cross-browser consistency.",
      iconName: "Smartphone",
    },
    {
      id: "cloud-computing",
      name: "Cloud Computing",
      category: "Technical Concepts",
      description: "Understanding cloud deployment primitives, virtual instances, containerization fundamentals, and IAM security.",
      iconName: "Cloud",
    },
    {
      id: "computer-vision",
      name: "Computer Vision",
      category: "Technical Concepts",
      description: "Spatial feature extraction, vehicle detection pipelines, image matrix transformations, and edge processing.",
      iconName: "Scan",
    },
    {
      id: "oop",
      name: "Object-Oriented Programming",
      category: "Technical Concepts",
      description: "Encapsulation, inheritance, polymorphism, abstraction, design patterns, and modular codebase structure.",
      iconName: "Box",
    },
  ] as SkillNode[],
  experience: [
    {
      id: "fortumars-internship",
      role: "Web Development Intern",
      company: "FortuMars AI Technologies & Business Solutions Pvt. Ltd.",
      location: "Coimbatore, Tamil Nadu",
      duration: "2025 – Present",
      status: "Current",
      badge: "MNC-Certified Internship",
      responsibilities: [
        "Working on real company projects as part of an MNC-certified internship program.",
        "Gaining hands-on experience in web and mobile application development.",
        "Developing knowledge of the Software Development Life Cycle (SDLC) across design, development, and testing phases.",
        "Exploring UI/UX design thinking, component hierarchy, and technical documentation standards.",
        "Gaining exposure to professional software engineering practices, code reviews, and enterprise client workflows.",
      ],
      skillsApplied: ["Web Development", "UI/UX Design", "SDLC", "Technical Documentation", "Frontend Engineering"],
      highlights: [
        "Certified professional enterprise exposure",
        "Multi-platform application workflows",
        "Collaborative agile sprint exposure",
      ],
    },
  ] as ExperienceInfo[],
  flagshipProject: {
    id: "visionflow",
    name: "VisionFlow",
    fullTitle: "AI-Powered Intelligent Traffic Monitoring System",
    tagline: "Next-Generation Smart Transit Infrastructure via Real-Time Computer Vision",
    category: "Artificial Intelligence / Computer Vision / Smart Mobility",
    status: "Planned",
    description:
      "VisionFlow is a proposed intelligent traffic monitoring platform designed to analyse road traffic through computer vision and artificial intelligence. It aims to detect and classify vehicles, monitor traffic congestion, calculate real-time flow density, and provide actionable analytics for modern urban transit infrastructure.",
    problemStatement:
      "Modern urban intersections suffer from rigid timing controllers, causing prolonged commuter delays, increased carbon emissions, and impeded emergency vehicle transit. Existing camera networks lack real-time edge processing to quantify traffic density and dynamically respond to evolving road conditions.",
    architecture: [
      {
        step: "01",
        title: "Edge Ingestion Stream",
        detail: "Real-time RTSP/HLS video ingestion from municipal and highway CCTV cameras into edge inference nodes.",
      },
      {
        step: "02",
        title: "Vision & Detection Core",
        detail: "OpenCV and deep-learning object classification pipeline identifying cars, trucks, buses, and two-wheelers.",
      },
      {
        step: "03",
        title: "Density & Flow Computation",
        detail: "Spatial matrix tracking calculating vehicle velocities, lane occupancy percentages, and bottleneck alert thresholds.",
      },
      {
        step: "04",
        title: "Command Center Dashboard",
        detail: "Interactive low-latency web telemetry interface providing live density heatmaps, alert feeds, and historical analytics.",
      },
    ],
    keyCapabilities: [
      "Real-Time Multi-Class Vehicle Detection & Tracking",
      "Dynamic Road Congestion Index & Heatmap Generation",
      "Automated Bottleneck & Traffic Jam Notification Alerts",
      "Emergency Vehicle Priority Route Clearance Awareness",
      "Historical Transit Density Analytics & Peak Hour Reporting",
      "Edge-Optimized Lightweight Inference Pipeline",
    ],
    techStack: ["Python", "OpenCV", "YOLO (Proposed)", "Next.js", "FastAPI (Proposed)", "WebSockets"],
    featured: true,
  } as ProjectInfo,
  verifiedAcademicProject: {
    id: "taskflow-pro",
    name: "Advanced To-Do App with Calendar & Reminders",
    fullTitle: "Full-Stack Enterprise Personal Productivity & Calendar Platform",
    tagline: "Two-Tier Modular Productivity Architecture with JWT Authentication & RBAC",
    category: "Full Stack Web Engineering / Enterprise Systems",
    status: "Completed",
    description:
      "A comprehensive web-based personal productivity application combining task management, interactive calendar scheduling, deadline reminder alerts, priority classification, recurring tasks, and role-based administration into a unified system.",
    architectureSummary:
      "React.js frontend communicating via RESTful APIs with a Spring Boot 3.x backend, Spring Data JPA, and MySQL database with BCrypt password hashing and stateless JWT security.",
    keyCapabilities: [
      "Role-Based Access Control (User and System Administrator roles)",
      "Interactive Monthly Calendar View displaying tasks on deadline dates",
      "Automated Reminder Mechanism with upcoming deadline detection",
      "Multi-Priority Task Organization (High, Medium, Low)",
      "Recurring Task Engine (Daily, Weekly, Monthly cycles)",
      "Search, Filtering, Sorting & Personal Task Data Export",
    ],
    techStack: ["React.js", "Spring Boot", "MySQL", "Spring Data JPA", "Spring Security", "JWT", "BCrypt"],
    featured: true,
  },
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) — Computer Science and Engineering",
      institution: "Sri Krishna College of Technology",
      location: "Coimbatore, Tamil Nadu",
      duration: "2023 – 2027 (Expected)",
      gradeMetric: "CGPA: 8.0 / 10.0 (up to 4th Semester)",
      status: "In Progress",
      details: [
        "Autonomous Institution affiliated with Anna University, accredited NAAC A++ Grade.",
        "Core coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks.",
        "Active technical engagement in web technologies, software development life cycles, and computer vision systems.",
      ],
    },
    {
      degree: "Higher Secondary Examination (Class 12th)",
      institution: "Matriculation Higher Secondary School",
      location: "Tamil Nadu, India",
      duration: "2022 – 2023",
      gradeMetric: "Score: 83% (499 / 600)",
      status: "Completed",
      details: [
        "Major subjects: Physics, Chemistry, Mathematics, Computer Science.",
        "Demonstrated strong analytical foundation and computational logic.",
      ],
    },
    {
      degree: "Secondary School Leaving Certificate (Class 10th)",
      institution: "Matriculation Higher Secondary School",
      location: "Tamil Nadu, India",
      duration: "2020 – 2021",
      gradeMetric: "Score: 90% (451 / 500)",
      status: "Completed",
      details: ["Distinction academic record with strong fundamentals in mathematics and science."],
    },
  ] as EducationInfo[],
  certifications: [
    {
      id: "infosys-iot-edge",
      title: "IoT Edge Computing and IoT Analytics",
      issuer: "Infosys Springboard",
      issueDate: "September 12, 2026",
      credentialUrl: "https://verify.onwingspan.com",
      verified: true,
      skills: ["IoT Architecture", "Edge Analytics", "Data Stream Processing", "Embedded Intelligence"],
      certificatePath: "/infosys-cert.pdf",
    },
  ] as CertificationInfo[],
};
