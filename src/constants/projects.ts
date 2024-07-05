import { images } from "@app/constants";
import { ProjectData } from "@app/types";

export const projects: ReadonlyArray<ProjectData> = [
  {
    imgUrl: images.project.pridemile,
    codeLink: "",
    projectLink: "https://pridemile.jp",
    title: "Pride-Mile",
    description:
      "Pride Mile Project developed using Next.js, Redux, Redux Toolkit. It is Japan based online platform to buy and sell car online.",
    tags: ["nextjs", "nodejs", "redux"],
  },
  {
    imgUrl: images.project.xpofairs,
    codeLink: "",
    projectLink: "https://xpofairs.com",
    title: "Xpo Fairs",
    description:
      "Xpo Fairs was developed using Next, Tanstack query, MySql, Mantine and Node. It is an innovative start-up focused on finding a way to make trade events easier, cheaper and more effective for exhibitors & visitors.",
    tags: ["nextjs", "mysql", "tanstack", "nodejs"],
  },
  {
    imgUrl: images.project.kiwmi,
    codeLink: "",
    projectLink: "https://devs.kiwimi.vn/en",
    title: "Kiwmi",
    description:
      "A Complex user learning project where user can buy a course according to there need and choose it careers and plans acordingly. Kiwmi is develop usinggb Nextjs, Tanstack query, nodejs, expressjs and monogoDb as database.",
    tags: ["nextjs", "tanstack", "nodejs", "mongodb", "express"],
  },
  {
    imgUrl: images.project.portfolioWebsite,
    codeLink: "",
    projectLink: "https://github.com/paalamugan/paalamugan-portfolio-nextjs",
    title: "Portfolio Website",
    description:
      "Portfolio Website developed for Full Stack Software Engineer with full responsiveness using Nextjs, Tailwindcss, SCSS, Typescript and more.",
    tags: ["nextjs", "reactjs", "tailwindcss", "typescript"],
  },
  {
    imgUrl: images.project.urenox,
    codeLink: "",
    projectLink: "https://web.urenox.com",
    title: "Urenox Project",
    description:
      "Urenox is live streaming platform developed using Reactjs, Vuejs, Redux, Php and more. It is live streaming platform to watch more than 100000+ movies, webseries & sports.",
    tags: ["reactjs", "vue", "php", "redux"],
  },
  {
    imgUrl: images.project.chatbot,
    projectLink: "https://chatgpt.devstree.com",
    codeLink: "",
    title: "Knowledge Bot",
    description:
      "3D model for you to help you with any problem and in more than 72+ lnanguages. It is AIML project integrated with Ract Three Fiber, React and python.",
    tags: ["python", "nextjs", "redux"],
  },
  // {
  //   imgUrl: images.project.angular12Boilerplate,
  //   projectLink: "https://angular12-boilerplate-template.netlify.app",
  //   codeLink: "https://github.com/paalamugan/oauth-angular-12-boilerplate-template",
  //   title: "Angular12 Boilerplate Template",
  //   description:
  //     "Angular12 Boilerplate Template using with angular material, flex layout, tailwindcss and TypeScript.",
  //   tags: ["angular", "tailwindcss", "typescript"],
  // },
  // {
  //   imgUrl: images.project.cmsBlog,
  //   projectLink: "https://cms-blog.paalamugan.com",
  //   codeLink: "https://github.com/paalamugan/cms-blog",
  //   title: "CMS Blog",
  //   description:
  //     "It helps to create authenticate blog posts, and users can also comments the specific posts. It is developed using React, Redux, TypeScript, and more.",
  //   tags: ["nodejs", "reactjs", "mongodb", "typescript"],
  // },
  // {
  //   imgUrl: images.project.opticVisions,
  //   projectLink: "https://optic-visions.vercel.app",
  //   codeLink: "https://github.com/paalamugan/optic-visions",
  //   title: "Optic Visions",
  //   description:
  //     "This application useful for customer who wishes to have all the details for the optical related business.",
  //   tags: ["nodejs", "angular", "mysql", "typescript"],
  // },
  // {
  //   imgUrl: images.project.employeePayslipGenerator,
  //   projectLink: "https://employee-payslip-generator.paalamugan.com",
  //   codeLink: "https://github.com/paalamugan/employee-payslip-generator",
  //   title: "Employee Payslip Generator",
  //   description: "Generate a Employee monthly payslip download as pdf and send to their mail.",
  //   tags: ["nodejs", "reactjs", "typescript"],
  // },
  // {
  //   imgUrl: images.project.jewelleryApp,
  //   projectLink: "https://jewellery-app.netlify.app", // https://via.placeholder.com/200
  //   codeLink: "https://github.com/paalamugan/JewelleryMiniApp-Angular",
  //   title: "Simple Jewellery App",
  //   description: "Angular Simple Jewellery Application made with angular6 framework.",
  //   tags: ["angular", "typescript"],
  // },
];

export const projectTabs = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "nodejs",
    name: "Nodejs",
  },
  {
    id: "nextjs",
    name: "Nextjs",
  },
  {
    id: "reactjs",
    name: "React",
  },
  {
    id: "angular",
    name: "Angular",
  },
  {
    id: "vue",
    name: "Vue",
  },
  {
    id: "svelte",
    name: "Svelte",
  },
] as const;
