import React from "react";
import Lottie from "react-lottie";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,
  SiCplusplus,
  SiVuedotjs,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiAntdesign,
  SiSass,
  SiLess,
  SiPython,
  SiLaravel,
  SiElasticsearch,
  SiMysql,
  SiSqlite,
  SiGit,
  SiAmazonaws,
  SiDjango,
  SiNestjs,
  SiBackbonedotjs,
  SiGo,
  SiPostgresql,
  SiMongoose,
  SiSequelize,
  SiGooglecloud,
  SiMicrosoftazure,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiJira,
  SiTrello,
  SiDocker,
  SiKubernetes,
  SiReact,
  SiAngular,
  SiBootstrap,
  SiNodedotjs,
  SiScrumalliance,
  SiOracle,
  SiMicrosoftsqlserver,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import man from "../../../assets/lottie/man.json";

import { FaJava } from "react-icons/fa";
import { MdViewKanban } from "react-icons/md";

const MySkill = () => {
  const skills = [
    {
      title: "Language",
      detail: [
        { title: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
        { title: "CSS", icon: <SiCss3 className="text-blue-400" /> },
        {
          title: "JavaScript",
          icon: <SiJavascript className="text-yellow-500 rounded" />,
        },
        {
          title: "TypeScript",
          icon: <SiTypescript className="text-blue-500 rounded" />,
        },
        {
          title: "C/C++",
          icon: <SiCplusplus className="text-blue-300 rounded" />,
        },
        {
          title: "Python",
          icon: <SiPython className="text-yellow-600 rounded" />,
        },
        {
          title: "Java",
          icon: <FaJava className="text-red-500 rounded" />,
        },
      ],
    },
    {
      title: "Frontend",
      detail: [
        { title: "React", icon: <SiReact className="text-cyan-400" /> },
        { title: "Angular", icon: <SiAngular className="text-red-600" /> },
        { title: "Vue.js", icon: <SiVuedotjs className="text-green-600" /> },
        { title: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        {
          title: "Backbone.js",
          icon: <SiBackbonedotjs className="text-cyan-600" />,
        },
        { title: "Redux", icon: <SiRedux className="text-purple-300" /> },
        {
          title: "Styled-component",
          icon: <SiStyledcomponents className="text-yellow-600" />,
        },
        {
          title: "Ant-Design",
          icon: <SiAntdesign className="text-blue-400" />,
        },
        {
          title: "Bootstrap",
          icon: <SiBootstrap className="text-indigo-600" />,
        },
        {
          title: "Tailwind",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
        { title: "Sass", icon: <SiSass className="text-purple-400" /> },
        { title: "Less", icon: <SiLess className="text-cyan-400" /> },
      ],
    },
    {
      title: "Backend",
      detail: [
        { title: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
        { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
        { title: "NestJS", icon: <SiNestjs className="text-red-500" /> },
        { title: "Laravel", icon: <SiLaravel className="text-red-400" /> },
        {
          title: "Django",
          icon: <SiDjango className="text-black" />,
        },
        {
          title: "Go",
          icon: <SiGo className="text-cyan-300" />,
        },
      ],
    },
    {
      title: "Database",
      detail: [
        { title: "MongoDB", icon: <SiMongodb className="text-green-300" /> },
        { title: "MySQL", icon: <SiMysql className="text-blue-700" /> },
        {
          title: "PostgreSQL",
          icon: <SiPostgresql className="text-green-700" />,
        },
        {
          title: "SQLite",
          icon: <SiSqlite className="text-white" />,
        },
        {
          title: "Microsoft SQL Server",
          icon: <SiMicrosoftsqlserver className="text-green-200" />,
        },
        {
          title: "Oracle",
          icon: <SiOracle className="text-orange-700" />,
        },
        {
          title: "Mongoose",
          icon: <SiMongoose className="text-orange-400" />,
        },
        {
          title: "Sequelize",
          icon: <SiSequelize className="text-cyan-500" />,
        },
        {
          title: "ElasticSearch",
          icon: <SiElasticsearch className="text-blue-400" />,
        },
      ],
    },
    {
      title: "Cloud Platform",
      detail: [
        {
          title: "AWS",
          icon: <SiAmazonaws className="text-black" />,
        },
        {
          title: "Google Cloud Platform",
          icon: <SiGooglecloud className="text-orange-500" />,
        },
        {
          title: "Microsoft Azure",
          icon: <SiMicrosoftazure className="text-blue-600" />,
        },
      ],
    },
    {
      title: "Version Control",
      detail: [
        {
          title: "Git",
          icon: <SiGit className="text-yellow-500" />,
        },
        {
          title: "GitHub",
          icon: <SiGithub className="text-black" />,
        },
        {
          title: "GitLab",
          icon: <SiGitlab className="text-orange-700" />,
        },
        {
          title: "Bitbucket",
          icon: <SiBitbucket className="text-cyan-500" />,
        },
      ],
    },
    {
      title: "Others",
      detail: [
        {
          title: "Agile/Scrum",
          icon: <SiScrumalliance className="text-blue-400" />,
        },
        {
          title: "Kanban",
          icon: <MdViewKanban className="text-green-400" />,
        },
        {
          title: "Jira",
          icon: <SiJira className="text-cyan-500" />,
        },
        {
          title: "Trello",
          icon: <SiTrello className="text-blue-500" />,
        },
        {
          title: "Docker",
          icon: <SiDocker className="text-cyan-500" />,
        },
        {
          title: "Kubernetes",
          icon: <SiKubernetes className="text-black" />,
        },
        {
          title: "PhotoShop",
          icon: <SiAdobephotoshop className="text-red-500" />,
        },
      ],
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: man,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
        My <span className="text-primary">Skills</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly my-8">
        <div className="p-12">
          {skills.map((skill) => (
            <>
              <h2 className="text-cyan-500 text-xl font-semibold">
                {skill.title}:
              </h2>
              <div className="flex flex-wrap mb-4">
                {skill.detail?.map((skill) => (
                  <div key={skill.title} className="text-center m-3">
                    <div
                      className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                      title={skill.title}
                    >
                      {skill?.icon}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
        <div>
          <Lottie options={defaultOptions} height={400} width={360} />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
