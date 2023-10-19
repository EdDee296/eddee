import {
  emer,
  diamond,
  grmaster,
  challenger,
  javascript,
  typescript,
  html,
  css,
  canva,
  reactjs,
  c,
  cpp,
  tailwind,
  git,
  python,
  tae,
  grn,
  forum,
  vanloc,
  pre,
  cosmic,
  threejs,
  githubicon,
  r,
  blender,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Web Developer",
    icon: challenger,
    background: "bg-gradient-to-t from-blue-500 to-gray-300",
  },
  {
    title: "Game Developer",
    icon: grmaster,
    background: "bg-gradient-to-t from-red-500 to-orange-300",
  },
  {
    title: "React Native Developer",
    icon: diamond,
    background: "bg-gradient-to-t bg-gradient-to-t from-purple-200 to-blue-500",
  },
  {
    title: "Frontend Developer",
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
    name: "Three JS",
    icon: threejs,
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
  },
  ,
  {
    title: "Volunteer",
    company_name: "Green Cleaning Project",
    icon: grn,
    iconBg: "#89dde0",
    date: "Feb 2022 - Dec 2022",
    points: [
      "Cleaning all the areas around the city.",
      "Hosting many events to raise people awareness of keeping the environment clean.",
      "Donating to charity to help disabled children.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Taekwondo class",
    icon: tae,
    iconBg: "#FFFFFF",
    date: "Jan 2018 - Nov 2019",
    points: [
      "Single-handedly supervising a group of students up to 15 individuals.",
      "Learned how to multitask.",
    ],
  }
];



const projects = [
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
  
];

export { services, technologies, experiences, projects };
