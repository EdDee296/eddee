import {
  emer,
  diamond,
  grmaster,
  challenger,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  c,
  cpp,
  tailwind,
  git,
  python,
  tae,
  forum,
  vanloc,
  uofa,
  pre,
  aot,
  sparrer,
  nxc,
  cosmic,
  coiny,
  ayo,
  java,
  githubicon,
  r,
  blender,
  superstars,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Web Developer - Full Stack",
    icon: challenger,
    background: "bg-gradient-to-t from-blue-500 to-gray-300",
  },
  {
    title: "Mobile Developer - Full Stack",
    icon: grmaster,
    background: "bg-gradient-to-t from-red-500 to-orange-300",
  },
  {
    title: "AI/Machine Learning",
    icon: diamond,
    background: "bg-gradient-to-t bg-gradient-to-t from-purple-200 to-blue-500",
  },
  {
    title: "Game Developer",
    icon: emer,
    background: "bg-gradient-to-t from-blue-200 to-green-600",
  },
];

const technologies = [
  {
    name: "HTML", //row 1
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Python", //row 2
    icon: python,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Tailwind CSS", //row 3
    icon: tailwind,
  },
  {
    name: "Java",
    icon: java,
  },

  {
    name: "CSS", // row 4
    icon: css,
  },
  {
    name: "GitHub",
    icon: githubicon,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "React JS", // row 5
    icon: reactjs,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "C++",
    icon: cpp,
  }
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Superstars Inc.",
    icon: superstars,
    iconBg: "#FFFFFF",
    date: "Dec 2024 - May 2025",
    points: [
      "Enhanced the SUPERSTARS platform by improving UI responsiveness, reducing job application time by 30%, and boosting engagement by 25% through optimized Angular components.",
      "Ensured 99.9% system reliability by testing and integrating 20+ APIs using Postman, enabling seamless video resume processing.",
      "Collaborated with a cross-functional team to reduce user friction and improve workflow efficiency, delivering key features aligned with business goals.",
      "Built a scalable system capable of processing 500+ video uploads per day, ensuring smooth performance and readiness for future growth.",
    ],
  },
  {
  title: "Teaching Assistant",
  company_name: "Department of Computing Science, University of Alberta",
  icon: uofa,
  iconBg: "#FFFFFF",
  date: "Sep 2024 - May 2025",
  points: [
    "Guided students through foundational C programming topics, including memory management, pointers, and data structures.",
    "Held lab sessions and office hours to support students with debugging, problem-solving, and Unix tools like gdb and valgrind.",
    "Reviewed and graded assignments with constructive feedback to improve code quality and understanding.",
    "Collaborated with the course instructor to ensure grading consistency and student success.",
  ],
  },
  {
    title: "Cashier",
    company_name: "Van Loc Vietnamese Submarine Shop",
    icon: vanloc,
    iconBg: "#000000",
    date: "April 2023 - Present",
    points: [
      "Handling concurrent transactions, orders in a fast-paced environment.",
      "Learned how to communicate effectively with customers to minimized the time and effort.",
      "Collaborating with other teammates to complete the tasks in a very limited time period.",
    ],
  },
  {
    title: "Examiner",
    company_name: "The Forum English Center",
    icon: forum,
    iconBg: "#E6DEDD",
    date: "May 2022 - Dec 2022",
    points: [
      "Participating in testing students' english levels and provide feedbacks.",
      "Training and guiding new examiners.",
      "Collaborating with other people to create tests.",
    ],
  }
];

const blogPosts = [
    {
      title: "My Journey into AI and Machine Learning",
      description: "Exploring the fascinating world of artificial intelligence and how it's shaping the future of technology. From neural networks to computer vision applications.",
      link: "/blog/ai-journey.html", // This will be your HTML page
      isExternal: false
    }
  ];

const projects = [
  {
    name: "Sparrer",
    description: "A fullstack cross-platform app for boxers to find their sparring partner",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "react native",
        color: "text-red-700",
      },
    ],
    image: sparrer,
    source_code_link: "https://github.com/EdDee296/Sparrer",
  },{
    name: "Coiny",
    description: "DevelopEd 3.0 Winner! An AI-powered app that identifies coins from photos, provides details connects you to the best prices online, and helps you effortlessly manage your collection.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "text-amber-400",
      },
      {
        name: "OpenAI Vision API",
        color: "text-amber-800",
      },
    ],
    image: coiny,
    source_code_link: "https://github.com/EdDee296/coiny",
  },
  {
    name: "Nx-C",
    description: "Generate a Sequential ML modal without writing a single line of code",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "tkinter",
        color: "text-amber-400",
      },
    ],
    image: nxc,
    source_code_link: "https://github.com/EdDee296/NxC",
  },
  {
    name: "Pre",
    description: "A game for practicing your aiming skill in FPS games.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ursina engine",
        color: "green-text-gradient",
      },
    ],
    image: pre,
    source_code_link: "https://github.com/EdDee296/Pre",
  },
  {
    name: "Cosmic",
    description: "A website to help organizations connect with collaborators when working on an open science project.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
    ],
    image: cosmic,
    source_code_link: "https://github.com/EdDee296/SpaceAppsChallenge",
  },
  {
    name: "Ayo Catch 'em",
    description: "A game to help improve your reaction time.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
    ],
    image: ayo,
    source_code_link: "https://github.com/EdDee296/Ayo-Catch-em",
  },
  {
    name: "3D_Maneuver_Gear-UE5",
    description: "First person 3d maneuver gear (from Attack on Titan) made in Unreal Engine 5",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "UE5",
        color: "green-text-gradient",
      },
    ],
    image: aot,
    source_code_link: "https://github.com/EdDee296/3D_Maneuver_Gear-UE5",
  },
  
];

export { services, technologies, experiences, projects, blogPosts };
