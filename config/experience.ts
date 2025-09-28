import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "resonant-health-ai",
    position: "Software Developer Intern",
    company: "Resonant Health AI",
    location: "Remote",
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-05-01"),
    description: [
      "Worked on developing a clinical chatbot application for healthcare documentation automation.",
      "Conducted research on EHR standards and API integration requirements for healthcare compliance.",
      "Contributed to UI/UX development and backend service deployment on cloud infrastructure.",
    ],
    achievements: [
      "Built a Next.js clinical chatbot that generates structured SOAP and H&P notes, streamlining documentation for healthcare professionals.",
      "Successfully integrated DrChrono's API using OAuth 2.0, ensuring HIPAA-compliant authentication and secure data access.",
      "Implemented GET and POST endpoints for real-time client information retrieval and updates through DrChrono API.",
      "Deployed scalable UI features and backend services on Azure, enabling secure real-time patient data interaction.",
    ],
    skills: ["Next.js", "React", "Typescript", "Azure"],
    companyUrl: "https://resonanthealth.ai",
    logo: "/projects/resonant-health/logo.png",
  },
  {
    id: "collision-injury-dynamics",
    position: "Software Developer Intern",
    company: "Collision and Injury Dynamics, Inc.",
    location: "Remote",
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-08-01"),
    description: [
      "Developed a web application for internal workflow automation using the MERN stack.",
      "Worked on both frontend and backend components to create a comprehensive case management system.",
      "Integrated external APIs to enhance data processing capabilities and system functionality.",
    ],
    achievements: [
      "Resulted in 50% improvement in data handling efficiency in the company's workflow.",
      "Created a crash case management system with intuitive React frontend and scalable Express.js/Node.js/MongoDB backend.",
      "Integrated NHTSA API's findbyvin endpoint for automatic vehicle information retrieval, reducing manual data entry errors.",
      "Streamlined external data ingestion through RESTful API integration, improving overall system performance.",
    ],
    skills: ["React", "Node.js", "express.js", "MongoDB", "Javascript"],
    companyUrl: "https://collisionandinjury.com",
    logo: "/projects/collision-injury/logo.png",
  },
  {
    id: "ground-control-system",
    position: "Software Engineer",
    company: "Ground Control System",
    location: "Remote",
    startDate: new Date("2025-02-01"),
    endDate: "Present",
    description: [
      "Working as a software engineer on a UAV-based wildfire suppression system in collaboration with Lockheed Martin.",
      "Focusing on GUI development, telemetry visualization, and drone control system implementation.",
      "Contributing to emergency response technology for public safety applications.",
    ],
    achievements: [
      "Successfully joined a mission-critical drone software development project with Lockheed Martin for wildfire suppression applications.",
      "Built cross-platform GUI using NASA's World Wind API and Qt (C++) for real-time telemetry visualization.",
      "Working towards implementing long-distance drone teleoperation via DroneKit and XBee for reliable remote mission execution.",
    ],
    skills: ["C++", "Qt", "Javascript", "HTML 5", "CSS 3"],
    companyUrl: "https://gcs.example.com",
    logo: "/projects/ground-control/logo.png",
  },
];
