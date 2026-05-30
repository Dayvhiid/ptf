import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  realestate,
  career,
  opticare
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer(Intern)",
    company_name: "RCCG ICT Headquarters",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "January 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Opticare",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2023 - Feb 2025",
    points: [
    "Developing and maintaining a full-stack hospital management system using Laravel (PHP), Blade templates, and Vue.js.",
    "Collaborating with cross-functional teams including designers and backend developers to deliver secure and scalable healthcare solutions.",
    "Implementing responsive UI components and ensuring cross-browser compatibility using Blade, Vue.js, and custom CSS.",
    "Participating in code reviews, version control practices, and providing constructive feedback to other developers.",
    "Integrating database models, authentication, and API endpoints to support diverse hospital operations (patient, appointment, billing, staff).",
    "Enhancing user experience with interactive Vue.js widgets and real-time data updates.",
    "Ensuring application security and patient data privacy through robust authentication and role-based access.",
]
  },
  {
    title: "Backend Developer",
    company_name: "Krides",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2025 - August 2025",
    points: [
      "Developing and maintaining RESTful APIs and backend services using Laravel (PHP) for ride-sharing and booking functionality.",
      "Collaborating with front-end developers, designers, and product stakeholders to deliver scalable and reliable API solutions.",
      "Implementing authentication, authorization, and role-based access to secure user and driver data.",
      "Ensuring cross-system compatibility and integration with third-party services for seamless ride management.",
      "Participating in code reviews, optimizing application performance, and promoting best coding practices within the team.",
      "Designing and managing relational database schemas to support bookings, rides, users, and payment processing.",
      "Writing detailed documentation and automated tests to ensure API quality, maintainability, and scalability.",
]
  },
  {
    title: "Full stack Developer",
    company_name: "Saby AI",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
   points: [
        "Developing and maintaining a modern web client using TypeScript, JavaScript, HTML, and CSS for enhanced performance and maintainability.",
        "Collaborating closely with UI/UX designers and backend API teams to deliver a seamless user experience.",
        "Implementing responsive layouts and ensuring cross-browser compatibility across devices.",
        "Participating in code reviews, maintaining code quality, and promoting best front-end development practices.",
        "Integrating RESTful APIs and handling asynchronous data flows to power real-time client features.",
        "Writing reusable, modular components for scalable front-end architecture.",
        "Conducting testing, debugging, and documentation to ensure high usability and reliability of the application."
      ]
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but David proved me wrong.",
    name: "Braimoh Godspower",
    designation: "CTO",
    company: "Olaoluwa Eye Clinic",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like David does.",
    name: "Dada Obafemi",
    designation: "CEO",
    company: "DevBrandAI",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After David optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Opticare Hospital Management System",
    description:
      "Web-based platform that allows users to search, book, and manage patient appointments, medical records, and hospital operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: opticare,
    source_code_link: "https://www.olaoluwaeyeclinic.com/",
  },
  {
    name: "Krides Ride-Sharing Platform",
    description:
      "Web application that enables users to search for ride options, view estimated fares, and book rides with drivers in their area.",
    tags: [
      {
        name: "PHP(Laravel)",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Dayvhiid/Krides",
  },
  {
    name: "Career Pilot",
    description:
      "CareerPilot is an AI-powered resume assistant that helps users create, edit, and enhance their resumes using intelligent suggestions and automation. It streamlines the resume-building process, offering personalized advice and formatting to improve users’ chances of landing their desired jobs.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: career,
    source_code_link: "https://github.com/Dayvhiid/CareerPilot",
  },
  {
    name: "Chishti Private Equity",
    description:
      "A web project featuring simple, well-organized static pages designed for ease of use and clear presentation. The site focuses on accessibility, intuitive navigation, and a clean layout, ensuring a pleasant browsing experience for visitors.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://chishtiprivateequity.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
