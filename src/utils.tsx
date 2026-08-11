import { Server, Database, Cloud, Terminal } from "lucide-react";

interface Skill {
  category: string;
  items: string[];
  icon: React.ElementType;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

interface Project {
  title: string;
  role: string;
  description: string;
  metrics: string[];
  tags: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Sneha Mahato",
    title: "Senior FullStack Engineer",
    tagline:
      "Building scalable microservices & optimizing distributed systems.",
    location: "Hyderabad, India",
    email: "mahatosneha0329@gmail.com",
    phone: "+91-6202900467",
    linkedin: "https://www.linkedin.com/in/sneha-mahato/",
    summary:
      "Results-driven Software Engineer with nearly 4 years of experience specializing in Java Spring Boot, microservices, and backend development. Proven expertise in designing scalable systems, optimizing performance by up to 30%, and delivering secure solutions in Agile environments.",
  },
  skills: [
    {
      category: "Backend & Core",
      items: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "Microservices",
        "REST APIs",
        "Spring AI",
        "Python",
      ],
      icon: Server,
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "Redux",
        "HTML",
        "CSS",
        "Responsive UI",
        "REST API Integration",
      ],
      icon: Terminal

    },
    {
      category: "Database",
      items: ["PostgreSQL", "MSSQL", "MongoDB", "SQL", "Data Modeling"],
      icon: Database,
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "OpenShift", "Azure DevOps", "Docker", "Git", "Bitbucket"],
      icon: Cloud,
    },
    {
      category: "Process & Tools",
      items: ["Agile/Scrum", "Jira", "JUnit", "Code Review", "Mentorship"],
      icon: Terminal,
    },
  ] as Skill[],
  experience: [
    {
      company: "GlobalLogic",
      role: "Senior Software Engineer",
      period: "Sept 2024 – Present",
      description: "Working as a FullStack Engineer, developing scalable backend services using Java and Spring Boot while building responsive and reusable React.js UI components. Contributing to API integration, application performance, code quality, and end-to-end feature delivery in an Agile environment.",
      achievements: [
        "Developed and enhanced Spring Boot microservices and REST APIs to support scalable business workflows.",
        "Built reusable React.js components and integrated frontend applications with backend REST APIs.",
        "Implemented state management and optimized UI rendering to improve application responsiveness and user experience.",
        "Participated in code reviews, debugging, unit testing, and performance optimization across frontend and backend components.",
        "Collaborated with cross-functional teams to deliver features from requirement analysis through development, testing, and deployment."
      ],
      techStack: ["Java","Spring Boot","React.js","JavaScript","Node.js","Microservices","REST APIs"],
    },
    {
      company: "Infosys LTD",
      role: "Senior Systems Associate",
      period: "May 2023 – Sept 2024",
      description:
        "Worked on a sustainability management platform for a European banking client, developing secure and scalable Spring Boot microservices and REST APIs while supporting frontend integration and ensuring GDPR-compliant handling of sustainability and collateral data.",
      achievements: [
        "Designed and deployed 12+ Spring Boot microservices, contributing to a 30% improvement in overall system performance.",
        "Developed and optimized REST APIs for high-volume data exchange, reducing response times by 20%.",
        "Integrated backend APIs with dynamic frontend workflows and collaborated with UI developers to deliver seamless end-to-end features.",
        "Mentored 3 junior developers, improving team code quality metrics by 30%.",
      ],
      techStack: ["Java", "Spring Boot","Hibernate","React.js","REST APIs", "OpenShift", "Microservices"],
    },
    {
      company: "Infosys LTD",
      role: "Systems Associate",
      period: "Dec 2021 – Apr 2023",
      description:
        "Contributed to a Data Exchange Scheme for a major US investment banking client, developing Java-based microservices and batch processing solutions for reliable and high-volume data exchange.",
      achievements: [
        "Developed and enhanced Java-based microservices and backend components, reducing data processing latency by 20%.",
        "Designed and implemented 8 microservices and batch jobs, improving overall processing speed by 15%.",
        "Developed REST APIs and database integrations to support reliable data exchange between distributed systems.",
        "Streamlined deployment workflows using AWS, reducing release cycles by 50%.",
        "Maintained 90%+ test coverage through comprehensive JUnit and Mockito-based unit testing.",
      ],
      techStack: ["Java", "Spring Boot","Microservices","REST APIs","AWS", "SQL", "Batch Processing"],
    },
  ] as Experience[],
  projects: [
    {
      title: "Sustainability Mgmt Platform",
      role: "Lead Backend Developer",
      description:
        "A secure and GDPR-compliant sustainability management platform developed for a European banking client. Built scalable Spring Boot microservices and REST APIs for managing sustainability and collateral data, with React.js-based UI integration for dynamic data visualization and user workflows.",
      metrics: ["30% Performance Boost", "10% Cloud Cost Reduction"],
      tags: ["System Design", "Security", "Spring Boot"],
    },
    {
      title: "Investment Data Exchange",
      role: "Backend Developer",
      description:
        "A high-throughput data exchange platform for the US investment banking sector, designed to process and exchange large volumes of data efficiently using Java microservices, batch processing, REST APIs, AWS, and SQL-based data integrations.",
      metrics: ["20% Latency Reduction", "50% Faster Releases"],
      tags: ["Java","Data Engineering", "AWS", "Optimization"],
    },
  ] as Project[],
  education: {
    degree: "B.Sc. (Hons) Mathematics",
    school: "MRS. KMPM Vocational College",
    year: "2018 – 2021",
    grade: "Graduated with 82%",
  },
  certifications: [
    "AWS Certified Cloud Practitioner",
    "MongoDB SI Associate Certification",
  ],
  hobbies: ["Mentoring", "Mathematics", "System Architecture Reading"],
};
