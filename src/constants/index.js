import {
  meta,
  shopify,
  starbucks,
  tesla,
  paramountcommerce,
  guardiananalytics,
  recommind,
  menupalace,
} from '../assets/images';

import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  java,
  springboot,
  python,
  jira,
  docker,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  // {
  //   imageUrl: express,
  //   name: 'Express',
  //   type: 'Backend',
  // },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  // {
  //   imageUrl: github,
  //   name: 'GitHub',
  //   type: 'Version Control',
  // },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  // {
  //   imageUrl: motion,
  //   name: 'Motion',
  //   type: 'Animation',
  // },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: java,
    name: 'Java',
    type: 'Backend',
  },
  {
    imageUrl: python,
    name: 'Python',
    type: 'Frontend',
  },
  {
    imageUrl: springboot,
    name: 'Spring Boot',
    type: 'Web Framework',
  },
  {
    imageUrl: jira,
    name: 'Jira',
    type: 'Agil Management Tool',
  },
  {
    imageUrl: docker,
    name: 'Docker',
    type: 'Platform As A Service',
  },
];

export const experiences = [
  {
    title: 'Senior Java Developer',
    company_name: 'Paramount Commerce',
    icon: paramountcommerce,
    iconBg: '#FFFFFF',
    date: 'Sep 2020 - Present',
    points: [
      'Design and development of microservices with Domain Driven Design principles using the Spring Boot framework, ensuring scalability, and improving overall system reliability.',
      'Designed and implemented RESTful APIs using the latest version of Spring Boot, facilitating seamless communication between the front-end and back-end components.',
      'Developed and optimized database queries using Hibernate, improving the efficiency of data retrieval and analysis.',
      'Developed and maintained Java-based applications, focusing on both front-end and back-end components.',
      'Collaborated with cross-functional teams to deliver feature-rich applications, ensuring adherence to coding standards and best practices.',
      'Implemented authentication and authorization mechanisms, leveraging Spring Security for secure user access and data protection.',
      'Integrated CI/CD pipelines, automating testing and deployment processes to achieve faster and more reliable releases.',
      'Utilized containerization technologies such as Docker for efficient deployment and scalability, minimizing downtime and improving system reliability.',
      'Worked closely with database administrators to design and optimize database schemas, enhancing data retrieval and storage efficiency.',
      'Stayed current with emerging technologies and industry trends, incorporating relevant tools and frameworks to continually improve the development stack.',
    ],
  },
  {
    title: 'Front-End Developer',
    company_name: 'AJC & Associates Inc',
    icon: null,
    iconBg: '#ffffff',
    date: 'Sep 2017 - Sep 2020',
    points: [
      'Developed responsive and mobile-friendly web applications, with modern JavaScript frameworks such as React, Angular, or Vue.js, ensuring a seamless user experience across various devices and screen sizes.',
      ,
      'Ensured cross-browser compatibility by rigorously testing and debugging code to deliver consistent performance across popular browsers.',
      'Collaborated closely with UX/UI designers to translate design prototypes into functional and visually appealing interfaces, prioritizing a user-centric design approach.',
      'Utilized version control systems like Git for collaborative development, working closely with back-end developers and other team members to integrate front-end components seamlessly into the overall system.',
    ],
  },
  {
    title: 'Professional Service Engineer',
    company_name: 'Guardian Analytics',
    icon: guardiananalytics,
    iconBg: '#ffffff',
    date: 'Feb 2015 - Aug 2017',
    points: [
      'Work with scripting languages, such as Perl, Awk, Bash, and Python, in order to support data analysis and model deployment',
      'Execute Perl and Python scripts and monitor the results to ensure for successful deployment of clients model.',
      'Work with Algorithm Scientist and model developer to resolve problems and clear the way for successful implementation of clients model.',
      'Working collaboratively with technical and non-technical teams (e.g., Engineering, Sales, and Network Operations)',
      'Manage multiple projects end-to-end',
    ],
  },
  {
    title: 'Java Developer',
    company_name: 'Recommind Inc',
    icon: recommind,
    iconBg: '#ffffff',
    date: 'Sep 2012 - Dec 2014',
    points: [
      'Develop a variety of data connectors to communicate with a variety of data sources (Google Drive, Google Mail, Bloomberg, etc.)',
      'Work with various APIs / web services ( SharePoint, Google Drive, OpenText, etc.)',
      'Write unit testing cases with TestNG',
      'Work with Spring framework to create RESTful API',
    ],
  },
  {
    title: 'Web Designer/Developer',
    company_name: 'MenuPalace.com',
    icon: menupalace,
    iconBg: '#ffffff',
    date: 'May 2007 - Aug 2012',
    points: [
      'Create websites in PHP with OOP development',
      'Design and create backend with MySQL and PHP',
      'Design and create frontend with HTML, CSS, and jQuery',
      'Design and create static/animated Flash banners',
      'Integrate custom design into Macromedia Flash',
    ],
  },
  {
    title: 'E-Commerce Programmer',
    company_name: 'Global Connexxions',
    icon: null,
    iconBg: '#ffffff',
    date: 'Apr 1999 - Apr 2007',
    points: [],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Amazon Price Tracker',
    description:
      'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    link: 'https://github.com/adrianhajdin/pricewise',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Full Stack Threads Clone',
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: 'https://github.com/adrianhajdin/threads',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Car Finding App',
    description:
      'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Full Stack Instagram Clone',
    description:
      'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/adrianhajdin/social_media_app',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Real-Estate Application',
    description:
      'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/adrianhajdin/projects_realestate',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'AI Summarizer Application',
    description:
      'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  },
];
