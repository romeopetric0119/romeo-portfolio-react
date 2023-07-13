import React from "react";
import Lottie from "react-lottie";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,
  SiFirebase,
  SiCsharp,
  SiC,
  SiVuedotjs,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiAntdesign,
  SiSass,
  SiLess,
  SiRuby,
  SiLaravel,
  SiRubyonrails,
  SiElasticsearch,
  SiMysql,
  SiSqlite,
  SiGit,
  SiAmazonaws,
} from "react-icons/si";
import man from "../../../assets/lottie/man.json";

const MySkill = () => {
  const languages = [
    { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 rounded" />,
    },
    {
      title: "TypeScript",
      icon: <SiTypescript className="text-blue-500 rounded" />,
    },
    {
      title: "Ruby",
      icon: <SiRuby className="text-red-500 rounded" />,
    },
    {
      title: "C#",
      icon: <SiCsharp className="text-green-700 rounded" />,
    },
    {
      title: "C",
      icon: <SiC className="text-black-500 rounded" />,
    },
  ];
  const frontend = [
    { title: "React", icon: <FaReact className="text-cyan-400" /> },
    { title: "Vue.js", icon: <SiVuedotjs className="text-green-600" /> },
    { title: "Next.js", icon: <SiNextdotjs className="text-slate-50" /> },
    { title: "Redux", icon: <SiRedux className="text-purple-300" /> },
    { title: "Laravel", icon: <SiLaravel className="text-red-400" /> },
    {
      title: "Styled-component",
      icon: <SiStyledcomponents className="text-yellow-600" />,
    },
    { title: "Ant-Design", icon: <SiAntdesign className="text-blue-400" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "Sass", icon: <SiSass className="text-purple-300" /> },
    { title: "Less", icon: <SiLess className="text-cyan-400" /> },
  ];
  const backend = [
    { title: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
    { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
    {
      title: "Ruby on Rails",
      icon: <SiRubyonrails className="text-red-600" />,
    },
  ];
  const database = [
    { title: "MongoDB", icon: <SiMongodb className="text-green-300" /> },
    { title: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    {
      title: "SQLite",
      icon: <SiSqlite className="text-black-400" />,
    },
    {
      title: "ElasticSearch",
      icon: <SiElasticsearch className="text-blue-400" />,
    },
  ];
  const others = [
    {
      title: "AWS",
      icon: <SiAmazonaws className="text-black-400" />,
    },
    {
      title: "Git",
      icon: <SiGit className="text-red-400" />,
    },
    { title: "GitHub", icon: <FaGithub className="text-black" /> },

    {
      title: "Photoshop",
      icon: <SiAdobephotoshop className="text-cyan-800" />,
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
          <h2 className="text-cyan-500 text-xl font-semibold">Languages:</h2>
          <div className="flex flex-wrap mb-4">
            {languages?.map((skill) => (
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
          <h2 className="text-cyan-500 text-xl font-semibold">Frontend:</h2>
          <div className="flex flex-wrap mb-4">
            {frontend?.map((skill) => (
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
          <h2 className="text-cyan-500 text-xl font-semibold">Backend:</h2>
          <div className="flex flex-wrap mb-4">
            {backend?.map((skill) => (
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
          <h2 className="text-cyan-500 text-xl font-semibold">Database:</h2>
          <div className="flex flex-wrap mb-4">
            {database?.map((skill) => (
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
          <h2 className="text-cyan-500 text-xl font-semibold">Others:</h2>
          <div className="flex flex-wrap mb-4">
            {others?.map((skill) => (
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
        </div>
        <div>
          <Lottie options={defaultOptions} height={400} width={360} />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
