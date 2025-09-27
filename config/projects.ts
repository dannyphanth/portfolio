import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  videoArr?: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "resonant-health-ai",
    companyName: "Resonant Health AI",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed a clinical chatbot using Next.js to generate structured SOAP and H&P notes, streamlining clinical documentation for healthcare professionals.",
    websiteLink: "https://resonanthealth.ai",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Azure",
    ],
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-05-01"),
    companyLogoImg: "/projects/resonant-health/logo.png",
    pagesInfoArr: [
      {
        title: "Clinical Chatbot Interface",
        description:
          "Intuitive chatbot interface for healthcare professionals to generate structured clinical notes",
        imgArr: ["/projects/resonant-health/chatbot_1.png"],
      },
      {
        title: "SOAP Notes Generation",
        description:
          "Automated generation of structured SOAP (Subjective, Objective, Assessment, Plan) notes",
        imgArr: ["/projects/resonant-health/soap_notes.png"],
      },
      {
        title: "EHR Integration",
        description:
          "Seamless integration with DrChrono's API for HIPAA-compliant patient data access",
        imgArr: ["/projects/resonant-health/ehr_integration.png"],
      },
      {
        title: "Azure Production Infrastructure",
        description:
          "Complete cloud infrastructure with App Service, Application Insights, managed identity, private endpoints, and MySQL database for secure healthcare applications",
        imgArr: ["/projects/resonant-health/azure_deployment.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As a Software Developer Intern at Resonant Health AI, I contributed to the development of an innovative clinical chatbot designed to streamline healthcare documentation processes. The project focused on creating a Next.js-based application that generates structured SOAP and H&P notes for healthcare professionals.",
        "I conducted extensive research on Electronic Health Record (EHR) standards and successfully integrated DrChrono's API using OAuth 2.0 to ensure HIPAA-compliant authentication and secure data access. This integration included implementing GET and POST endpoints for retrieving and updating client information, enabling seamless data flow between the clinical chatbot and the EHR system.",
        "The application features a modern, responsive UI built with React and TypeScript, providing healthcare professionals with an intuitive interface for generating clinical documentation. The backend services were developed and deployed on Azure, enabling real-time interaction with patient data while maintaining security and scalability through the DrChrono API integration.",
        "Key achievements include implementing secure authentication flows, developing scalable UI features, and ensuring compliance with healthcare data protection standards. The DrChrono API integration for client information management significantly improved clinical documentation efficiency and reduced the time healthcare professionals spend on administrative tasks.",
      ],
      bullets: [
        "Developed a clinical chatbot using Next.js to generate structured SOAP and H&P notes",
        "Researched and integrated DrChrono's API using OAuth 2.0 for HIPAA-compliant authentication",
        "Implemented GET and POST endpoints for DrChrono API to retrieve and update client information",
        "Built scalable UI features and backend services deployed on Azure",
        "Enabled real-time interaction with patient data through DrChrono API integration",
        "Streamlined clinical documentation processes for healthcare professionals",
        "Implemented secure authentication flows and data protection measures",
        "Reduced administrative burden on healthcare professionals through automation",
      ],
    },
  },
  {
    id: "collision-injury-dynamics",
    companyName: "Collision and Injury Dynamics, Inc.",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "Backend"],
    shortDescription:
      "Developed a crash case management system for motor accident consulting with VIN lookup integration, enabling case creation, search, and filtering with 50% improved data handling efficiency.",
    websiteLink: "https://collisionandinjury.com",
    techStack: [
      "React",
      "Node.js",
      "express.js",
      "MongoDB",
      "Javascript",
      "RESTful API",
    ],
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-08-01"),
    companyLogoImg: "/projects/collision-injury/logo.png",
    pagesInfoArr: [
      {
        title: "Case Creation Interface",
        description:
          "Intuitive form for creating new crash cases with comprehensive data collection, validation, and automatic VIN lookup integration using NHTSA API",
        imgArr: [],
        videoArr: [
          "/projects/collision-injury/case-creation-interface.mp4"
        ],
      },
      {
        title: "Case Search & Filtering",
        description:
          "Advanced search functionality with multiple filter options for efficient case retrieval and management",
        imgArr: [
          "/projects/collision-injury/case-search.png"
        ],
        videoArr: [
          "/projects/collision-injury/case-filter.mp4"
        ],
      },
      {
        title: "Case Management Dashboard",
        description:
          "Centralized dashboard for viewing and managing all crash cases with real-time updates",
        imgArr: [],
        videoArr: [
          "/projects/collision-injury/case-dashboard.mp4"
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "During my internship at Collision and Injury Dynamics, Inc., I developed a comprehensive crash case management system for a motor accident consulting firm. The application was built using the MERN stack and designed to streamline the company's case management processes, enabling efficient creation, search, and filtering of crash cases.",
        "I built a dynamic, interactive frontend using React that provided consultants with an intuitive interface for creating new crash cases, searching through existing cases, and applying various filters to quickly locate specific information. A standout feature was the integration with the NHTSA (National Highway Traffic Safety Administration) API, which automatically retrieves comprehensive vehicle information using VIN numbers through the findbyvin GET endpoint.",
        "The backend was structured using Express.js and Node.js, with MongoDB serving as the database for optimal scalability and performance. The VIN lookup integration significantly improved data accuracy by automatically populating vehicle details, reducing manual data entry and potential errors in case documentation.",
        "The application achieved a 50% increase in data handling efficiency, demonstrating the significant impact of well-designed case management systems. The project showcased my ability to work with modern web technologies and create solutions that directly improve business operations in the consulting industry.",
      ],
      bullets: [
        "Developed a crash case management system using MERN stack for motor accident consulting",
        "Integrated NHTSA API's findbyvin endpoint for automatic vehicle information retrieval",
        "Increased data handling efficiency by 50% through streamlined case management processes",
        "Built intuitive case creation interface with comprehensive data collection and validation",
        "Implemented advanced search and filtering functionality for efficient case retrieval",
        "Created centralized dashboard for viewing and managing all crash cases",
        "Structured backend using Express.js, Node.js, and MongoDB for scalability",
        "Designed user-friendly interface that improved consultant productivity and case management",
      ],
    },
  },
  {
    id: "dsai-club",
    companyName: "Data Science & AI Club",
    type: "Personal",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Managed and maintained the club's official website, ensuring consistent uptime, performance, and mobile responsiveness with modern frameworks.",
    websiteLink: "https://dsai-club.example.com",
    techStack: [
      "React",
      "Next.js",
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/projects/dsai-club/logo.png",
    pagesInfoArr: [
      {
        title: "Club Homepage",
        description:
          "Modern and responsive homepage showcasing club events, workshops, and member resources",
        imgArr: [],
        videoArr: ["/projects/dsai-club/homepage.mp4"],
      },
      {
        title: "Events & Workshops",
        description:
          "Dynamic events page with workshop listings, speaker information, and registration functionality",
        imgArr: [],
        videoArr: ["/projects/dsai-club/events.mp4"],
      },
      {
        title: "Resources",
        description:
          "Content management system for publishing updates on workshops, speaker events, and hackathons",
        imgArr: [],
        videoArr: ["/projects/dsai-club/resources.mp4"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As Webmaster and Full Stack Developer for the Data Science & AI Club, I took on the responsibility of managing and maintaining the club's official website. This role involved ensuring consistent uptime, optimal performance, and mobile responsiveness to support the club's growing membership and diverse activities.",
        "I designed and implemented new features using modern frameworks including React and Next.js to support events, resources, and member content. The website serves as a central hub for club activities, providing members with easy access to workshop information, speaker events, and hackathon announcements.",
        "Collaborating closely with executive members, I published regular updates on workshops, speaker events, and hackathons, driving engagement through an optimized user experience. The platform features a responsive design that works seamlessly across desktop and mobile devices, ensuring accessibility for all members.",
        "Key features include an events management system and resources portal that provides members with easy access to club information and updates.",
      ],
      bullets: [
        "Managed and maintained the club's official website with consistent uptime and performance",
        "Designed and implemented new features using React and Next.js for modern functionality",
        "Ensured mobile responsiveness and optimal user experience across all devices",
        "Collaborated with executive members to publish updates on workshops and events",
        "Implemented content management system for resources and event announcements",
        "Created comprehensive resources section with easy access to club information and updates",
        "Optimized website performance and user engagement through modern web technologies",
        "Supported club growth and member engagement through improved digital presence",
      ],
    },
  },
  {
    id: "ground-control-system",
    companyName: "Ground Control System",
    type: "Professional",
    category: ["Software Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Collaborating with Lockheed Martin on a UAV-based wildfire suppression system, contributing to mission-critical drone software development with real-time telemetry visualization.",
    websiteLink: "https://gcs.example.com",
    techStack: [
      "C++",
      "Qt",
      "Javascript",
      "HTML 5",
      "CSS 3",
    ],
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/projects/ground-control/logo.png",
    pagesInfoArr: [
      {
        title: "Ground Control System Interface",
        description:
          "Cross-platform GUI using NASA's World Wind API and Qt (C++) featuring interactive map, telemetry data display, and drone tracking panel",
        imgArr: ["/projects/ground-control/gcs-interface.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "As a Software Engineer on the Ground Control System project, our team is collaborating with Lockheed Martin on developing a UAV-based wildfire suppression system. This mission-critical project requires building robust, reliable software for drone operations in emergency response scenarios.",
        "Our team is building a cross-platform GUI using NASA's World Wind API and Qt (C++) featuring an interactive map, telemetry data display, and drone tracking panel. The system provides operators with comprehensive flight data, including altitude, speed, battery status, and GPS coordinates, all displayed on an interactive 2D map interface.",
        "A key technical goal is implementing long-distance drone teleoperation via DroneKit and XBee, enabling reliable remote mission execution even in challenging environments. The system will support autonomous flight modes while maintaining manual override capabilities for emergency situations.",
        "The Ground Control System will play a crucial role in wildfire suppression operations, allowing operators to coordinate multiple UAVs, monitor fire progression, and deploy suppression resources with precision. The project demonstrates our team's ability to work with cutting-edge aerospace technology and contribute to systems that have real-world impact on public safety.",
      ],
      bullets: [
        "Collaborating with Lockheed Martin on UAV-based wildfire suppression system development",
        "Building cross-platform GUI using NASA's World Wind API and Qt (C++) with interactive map and telemetry display",
        "Working towards implementing long-distance drone teleoperation via DroneKit and XBee for reliable remote mission execution",
        "Enhancing operator situational awareness through interactive 2D map interface and drone tracking panel",
        "Developing foundational interface components for future mission planning and flight path visualization",
        "Creating specialized wildfire suppression interface for emergency response coordination",
        "Supporting autonomous flight modes with manual override capabilities for emergency situations",
        "Contributing to mission-critical software development for public safety applications",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
