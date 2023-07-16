import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiCloudDownload, BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Full Stack Development",
      icon: <DiAtom />,
      description:
        "As a highly skilled senior web developer, I've implemented and maintained 30+ robust web applications from scratch.",
    },
    {
      id: 2,
      title: "Responsive Web Design",
      icon: <BiPalette />,
      description:
        "I also provide Fully Responsive Static Website Design with HTML5, CSS, Bootstrap, Ant-Design, Tailwind.",
    },
    {
      id: 3,
      title: "Cloud Computing",
      icon: <BiCloudDownload />,
      description:
        "Cloud Application Development is one of my expertise with over 6+ years of rich experience in DevOps.",
    },
  ];
  return (
    <div className="py-20 parent">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-neutral">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${
              service.id % 2 === 0
                ? "bg-accent shadow-lg"
                : "bg-[#313131] shadow-md"
            } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-neutral">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
