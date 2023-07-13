import IMG_Pro1_main from "../assets/projects/project1/main.jpg";
import IMG_Pro1_detail1 from "../assets/projects/project1/detail1.jpg";
import IMG_Pro1_detail2 from "../assets/projects/project1/detail2.jpg";
import IMG_Pro1_detail3 from "../assets/projects/project1/detail3.jpg";
import IMG_Pro1_detail4 from "../assets/projects/project1/detail4.jpg";

import IMG_Pro2_main from "../assets/projects/project2/main.jpg";
import IMG_Pro2_detail1 from "../assets/projects/project2/detail1.jpg";
import IMG_Pro2_detail2 from "../assets/projects/project2/detail2.jpg";
import IMG_Pro2_detail3 from "../assets/projects/project2/detail3.jpg";
import IMG_Pro2_detail4 from "../assets/projects/project2/detail4.jpg";

import IMG_Pro3_main from "../assets/projects/project3/main.jpg";
import IMG_Pro3_detail1 from "../assets/projects/project3/detail1.jpg";
import IMG_Pro3_detail2 from "../assets/projects/project3/detail2.jpg";
import IMG_Pro3_detail3 from "../assets/projects/project3/detail3.jpg";
import IMG_Pro3_detail4 from "../assets/projects/project3/detail4.jpg";

import IMG_Pro4_main from "../assets/projects/project4/main.jpg";
import IMG_Pro4_detail1 from "../assets/projects/project4/detail1.jpg";
import IMG_Pro4_detail2 from "../assets/projects/project4/detail2.jpg";
import IMG_Pro4_detail3 from "../assets/projects/project4/detail3.jpg";
import IMG_Pro4_detail4 from "../assets/projects/project4/detail4.jpg";

import IMG_Pro5_main from "../assets/projects/project5/main.jpg";
import IMG_Pro5_detail1 from "../assets/projects/project5/detail1.jpg";
import IMG_Pro5_detail2 from "../assets/projects/project5/detail2.jpg";
import IMG_Pro5_detail3 from "../assets/projects/project5/detail3.jpg";
import IMG_Pro5_detail4 from "../assets/projects/project5/detail4.jpg";

import IMG_Pro6_main from "../assets/projects/project6/main.jpg";
import IMG_Pro6_detail1 from "../assets/projects/project6/detail1.jpg";
import IMG_Pro6_detail2 from "../assets/projects/project6/detail2.jpg";
import IMG_Pro6_detail3 from "../assets/projects/project6/detail3.jpg";
import IMG_Pro6_detail4 from "../assets/projects/project6/detail4.jpg";

import IMG_Pro7_main from "../assets/projects/project7/main.jpg";
import IMG_Pro7_detail1 from "../assets/projects/project7/detail1.jpg";
import IMG_Pro7_detail2 from "../assets/projects/project7/detail2.jpg";
import IMG_Pro7_detail3 from "../assets/projects/project7/detail3.jpg";
import IMG_Pro7_detail4 from "../assets/projects/project7/detail4.jpg";

import IMG_Pro8_main from "../assets/projects/project8/main.jpg";
import IMG_Pro8_detail1 from "../assets/projects/project8/detail1.jpg";
import IMG_Pro8_detail2 from "../assets/projects/project8/detail2.jpg";
import IMG_Pro8_detail3 from "../assets/projects/project8/detail3.jpg";
import IMG_Pro8_detail4 from "../assets/projects/project8/detail4.jpg";

const Items = [
  {
    id: 1,
    mainImage: IMG_Pro1_main,
    img: [
      IMG_Pro1_detail1,
      IMG_Pro1_detail2,
      IMG_Pro1_detail3,
      IMG_Pro1_detail4,
    ],
    features: [
      "Drones",
      "Sensors",
      "Robots",
      "Apps",
      "Blog",
      "Forum",
      "Press",
      "Team",
      "Shop",
      "Contact",
    ],
    technologies: [
      "React",
      "TailwindCSS",
      "React Hooks",
      "Lodash",
      "Core-is",
      "Webpack",
    ],
    title: "Drone Blocks",
    description:
      "Well, droneblocks.io was a quite interesting project I have done. The site is about teaching kids copmuter science with Tello drones. Kids can actually develop a program that controls Tello drones using drag and drop editor. My main task was to implement that drag and drop editor. We implemented the editor using Google's blockly library. The job involed customizing the editor for Drones and finally turning the generated code blocks into something that Tello drone can understand. You can check how it works from here.  https://dev.droneblocks.io/ It was quite interesting and challening project. The most challening part was exception handling. And also there were some problems with Blockly library itself, so we had to deal with that as well.",
    category: "education",
    liveLink: "https://droneblocks.io/",
  },
  {
    id: 2,
    mainImage: IMG_Pro2_main,
    img: [
      IMG_Pro2_detail1,
      IMG_Pro2_detail2,
      IMG_Pro2_detail3,
      IMG_Pro2_detail4,
    ],
    features: [
      "Cars",
      "Motorcycles",
      "How Flux Works",
      "Business",
      "Become A Host",
      "Blog",
      "Help",
    ],
    technologies: [
      "React",
      "React Hooks",
      "React Icons",
      "Axios",
      "CSS",
      "UUID",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
      "Express Asynsc Handler",
      "Json Web Token",
      "Bcryptjs",
      "Multer",
      "Slugify",
      "Cors",
    ],
    title: "Driver Flux",
    description:
      'The website is about lending cars and motorcycles in Malaysia. The basic idea behind the website was "No need to buy a car when you can subscribe it". I have started working on this project in 2018. The client came with this basic idea, and I have made it into reality. The designs were provided by the client, and I did the rest from database design, development, and deployment to AWS. We used Node, React and mongodb as a tech stack and integrated third party services like Stripe for payment and Mailjet for mail integration. I have developed the MVP in 6 months and now People in Malaysia are actively using these services.',
    category: "lending",
    liveLink: "https://driveflux.com/",
  },
  {
    id: 3,
    mainImage: IMG_Pro3_main,
    img: [
      IMG_Pro3_detail1,
      IMG_Pro3_detail2,
      IMG_Pro3_detail3,
      IMG_Pro3_detail4,
    ],
    features: ["Buy a home", "Sell a home", "Contact", "Join", "Magazine"],
    technologies: [
      "Wordpress",
      "Material UI",
      "Bootstrap",
      "MySQL",
      "Cors",
      "Dontenv",
    ],
    title: "Is Luxury",
    description:
      "LUXURY Estate Management, a division of IS LUXURY, is a full-service home management company specializing in the maintenance management of private luxury residences in premier luxury Las Vegas Valley communities. Their goal is to provide exceptional service to our property owners while maintaining a high standard of professionalism and integrity. I have developed the MVP in 5 months and now People are actively using these services.",
    category: "booking",
    liveLink: "https://www.isluxury.com/",
  },
  {
    id: 4,
    mainImage: IMG_Pro4_main,
    img: [
      IMG_Pro4_detail1,
      IMG_Pro4_detail2,
      IMG_Pro4_detail3,
      IMG_Pro4_detail4,
    ],
    features: ["Apply to drive", "Booking to ride", "Business"],
    technologies: [
      "React",
      "React Hooks",
      "Redux",
      "Redux Toolkit",
      "Bootstrap",
      "Next.js",
      "Localforage",
      "Axios",
      "Node JS",
      "Express JS",
      "MySQL",
      "Cors",
      "JWT",
      "Bycrypt",
      "Cookie Parser",
      "Sequelize",
    ],
    title: "Lyft",
    description:
      "The website is about booking car for personal or business purpose. Any people can book a suitable car and any drivers also apply for any cars. The company just offers cars. Then, drivers and riders are free people. We used Node, React, Next.js and mongodb as a tech stack and integrated third party services like Stripe for payment and Mailjet for mail integration.",
    category: "lending",
    liveLink: "https://www.lyft.com/",
  },
  {
    id: 5,
    mainImage: IMG_Pro5_main,
    img: [
      IMG_Pro5_detail1,
      IMG_Pro5_detail2,
      IMG_Pro5_detail3,
      IMG_Pro5_detail4,
    ],
    features: [
      "Booking house",
      "Create personal trip",
      "Searching suitable houses",
      "Advertising own property",
    ],
    technologies: [
      "React",
      "React Hooks",
      "React Router Dom",
      "Axios",
      "Bootstrap",
      "React Icons",
      "Sweet Alert2",
      "Node JS",
      "Express JS",
      "Cors",
      "Mongoose",
      "Dotenv",
      "Nodemon",
      "MongoDB",
    ],
    title: "Vrbo",
    description:
      "Vrbo is a global vacation rental community with more than 2 million unique properties that seeks to connect people with the people and places they love. My main task was to develop a adding property. People could not only book a house, but also advertise their properties. I used Node, React and mongodb as a tech stack and integrated third party services like Stripe for payment and Mailjet for mail integration",
    category: "booking",
    liveLink: "https://www.vrbo.com/",
  },
  {
    id: 6,
    mainImage: IMG_Pro6_main,
    img: [
      IMG_Pro6_detail1,
      IMG_Pro6_detail2,
      IMG_Pro6_detail3,
      IMG_Pro6_detail4,
    ],
    features: [
      "Resorts",
      "Entertainment",
      "Dining",
      "Pools",
      "Casino",
      "Groups & Weddings",
    ],
    technologies: [
      "React",
      "React Hooks",
      "React Router",
      "React Redux",
      "Next.js",
      "Node.js",
      "Express",
      "Cors",
    ],
    title: "MGM Resorts",
    description:
      "MGM Resorts International (NYSE: MGM) is an S&P 500® global gaming and entertainment company with national and international locations featuring best-in-class hotels and casinos, state-of-the-art meetings and conference spaces, incredible live and theatrical entertainment experiences, and an extensive array of restaurant, nightlife and retail offerings. I developed Casino feature with 8 months using several tech stacks and third party integrations.",
    category: "booking",
    liveLink: "https://www.mgmresorts.com/",
  },
  {
    id: 7,
    mainImage: IMG_Pro7_main,
    img: [
      IMG_Pro7_detail1,
      IMG_Pro7_detail2,
      IMG_Pro7_detail3,
      IMG_Pro7_detail4,
    ],
    features: ["Booking delivery", "Registering locations"],
    technologies: ["Node.js", "Lodash", "React Firebase Hooks", "React Icons"],
    title: "Gopuff Food Delivery",
    description:
      "This website is about booking food delivery. I used Node, Lodash and mongodb as a tech stack and integrated third party services like Stripe for payment integration. I have developed the MVP in 5 months and now People are actively using these services.",
    category: "booking",
    liveLink: "https://www.gopuff.com/",
  },
  {
    id: 8,
    mainImage: IMG_Pro8_main,
    img: [
      IMG_Pro8_detail1,
      IMG_Pro8_detail2,
      IMG_Pro8_detail3,
      IMG_Pro8_detail4,
    ],
    features: [
      "Shop All",
      "Supplements",
      "Underwear",
      "Liners & Pads",
      "Community",
    ],
    technologies: [
      "React",
      "React Vite",
      "Bootstrap",
      "Next.js",
      "Tailwind CSS",
      "React Icons",
      "React Hooks",
      "Node.js",
      "Express",
    ],
    title: "Jude",
    description:
      "Jude is a healthcare company here to smash bladder taboos, open up conversations about incontinence and help you get on with life, leak-free. I have developed the MVP in 3 months and now People are actively using these services.",
    category: "healthcare",
    liveLink: "https://www.wearejude.com/",
  },
];

export default Items;
