import IMG_DRONEBLOCKS_main from "../assets/projects/droneblocks/main.jpg";
import IMG_DRONEBLOCKS_detail1 from "../assets/projects/droneblocks/detail1.jpg";
import IMG_DRONEBLOCKS_detail2 from "../assets/projects/droneblocks/detail2.jpg";
import IMG_DRONEBLOCKS_detail3 from "../assets/projects/droneblocks/detail3.jpg";
import IMG_DRONEBLOCKS_detail4 from "../assets/projects/droneblocks/detail4.jpg";

import IMG_DRIVEFLUX_main from "../assets/projects/driveflux/main.jpg";
import IMG_DRIVEFLUX_detail1 from "../assets/projects/driveflux/detail1.jpg";
import IMG_DRIVEFLUX_detail2 from "../assets/projects/driveflux/detail2.jpg";
import IMG_DRIVEFLUX_detail3 from "../assets/projects/driveflux/detail3.jpg";
import IMG_DRIVEFLUX_detail4 from "../assets/projects/driveflux/detail4.jpg";

import IMG_ISLUXURY_main from "../assets/projects/isluxury/main.jpg";
import IMG_ISLUXURY_detail1 from "../assets/projects/isluxury/detail1.jpg";
import IMG_ISLUXURY_detail2 from "../assets/projects/isluxury/detail2.jpg";
import IMG_ISLUXURY_detail3 from "../assets/projects/isluxury/detail3.jpg";
import IMG_ISLUXURY_detail4 from "../assets/projects/isluxury/detail4.jpg";

import IMG_LYFT_main from "../assets/projects/lyft/main.jpg";
import IMG_LYFT_detail1 from "../assets/projects/lyft/detail1.jpg";
import IMG_LYFT_detail2 from "../assets/projects/lyft/detail2.jpg";
import IMG_LYFT_detail3 from "../assets/projects/lyft/detail3.jpg";
import IMG_LYFT_detail4 from "../assets/projects/lyft/detail4.jpg";

import IMG_VRBO_main from "../assets/projects/vrbo/main.jpg";
import IMG_VRBO_detail1 from "../assets/projects/vrbo/detail1.jpg";
import IMG_VRBO_detail2 from "../assets/projects/vrbo/detail2.jpg";
import IMG_VRBO_detail3 from "../assets/projects/vrbo/detail3.jpg";
import IMG_VRBO_detail4 from "../assets/projects/vrbo/detail4.jpg";

import IMG_MGMRESORTS_main from "../assets/projects/mgmresorts/main.jpg";
import IMG_MGMRESORTS_detail1 from "../assets/projects/mgmresorts/detail1.jpg";
import IMG_MGMRESORTS_detail2 from "../assets/projects/mgmresorts/detail2.jpg";
import IMG_MGMRESORTS_detail3 from "../assets/projects/mgmresorts/detail3.jpg";
import IMG_MGMRESORTS_detail4 from "../assets/projects/mgmresorts/detail4.jpg";

import IMG_GOPUFF_main from "../assets/projects/gopuff/main.jpg";
import IMG_GOPUFF_detail1 from "../assets/projects/gopuff/detail1.jpg";
import IMG_GOPUFF_detail2 from "../assets/projects/gopuff/detail2.jpg";
import IMG_GOPUFF_detail3 from "../assets/projects/gopuff/detail3.jpg";
import IMG_GOPUFF_detail4 from "../assets/projects/gopuff/detail4.jpg";

import IMG_WEAREJUDE_main from "../assets/projects/wearejude/main.jpg";
import IMG_WEAREJUDE_detail1 from "../assets/projects/wearejude/detail1.jpg";
import IMG_WEAREJUDE_detail2 from "../assets/projects/wearejude/detail2.jpg";
import IMG_WEAREJUDE_detail3 from "../assets/projects/wearejude/detail3.jpg";
import IMG_WEAREJUDE_detail4 from "../assets/projects/wearejude/detail4.jpg";

const Items = [
  {
    id: 1,
    mainImage: IMG_DRONEBLOCKS_main,
    img: [
      IMG_DRONEBLOCKS_detail1,
      IMG_DRONEBLOCKS_detail2,
      IMG_DRONEBLOCKS_detail3,
      IMG_DRONEBLOCKS_detail4,
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
    mainImage: IMG_DRIVEFLUX_main,
    img: [
      IMG_DRIVEFLUX_detail1,
      IMG_DRIVEFLUX_detail2,
      IMG_DRIVEFLUX_detail3,
      IMG_DRIVEFLUX_detail4,
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
    mainImage: IMG_ISLUXURY_main,
    img: [
      IMG_ISLUXURY_detail1,
      IMG_ISLUXURY_detail2,
      IMG_ISLUXURY_detail3,
      IMG_ISLUXURY_detail4,
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
    mainImage: IMG_LYFT_main,
    img: [
      IMG_LYFT_detail1,
      IMG_LYFT_detail2,
      IMG_LYFT_detail3,
      IMG_LYFT_detail4,
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
      "The website is about booking car for personal or business purpose. Any people can book a suitable car and any drivers also apply for any cars. The company just offers cars. Then, drivers and riders are free people. We used Node, React, Next.js and MongoDB as a tech stack and integrated third party services like Stripe for payment and Mailjet for mail integration.",
    category: "lending",
    liveLink: "https://www.lyft.com/",
  },
  {
    id: 5,
    mainImage: IMG_VRBO_main,
    img: [
      IMG_VRBO_detail1,
      IMG_VRBO_detail2,
      IMG_VRBO_detail3,
      IMG_VRBO_detail4,
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
    mainImage: IMG_MGMRESORTS_main,
    img: [
      IMG_MGMRESORTS_detail1,
      IMG_MGMRESORTS_detail2,
      IMG_MGMRESORTS_detail3,
      IMG_MGMRESORTS_detail4,
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
    mainImage: IMG_GOPUFF_main,
    img: [
      IMG_GOPUFF_detail1,
      IMG_GOPUFF_detail2,
      IMG_GOPUFF_detail3,
      IMG_GOPUFF_detail4,
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
    mainImage: IMG_WEAREJUDE_main,
    img: [
      IMG_WEAREJUDE_detail1,
      IMG_WEAREJUDE_detail2,
      IMG_WEAREJUDE_detail3,
      IMG_WEAREJUDE_detail4,
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
