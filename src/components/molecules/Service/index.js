import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiCloudDownload, BiMobile, BiPalette, BiShoppingBag, BiSitemap, BiSolidEnvelope } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";
import { SiShopify } from "react-icons/si";
import { SlTag } from "react-icons/sl";
import { MdDeveloperMode } from "react-icons/md";

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
        "As a highly skilled senior web developer, I've worked on 30+ robust web applications.",
    },
    {
      id: 2,
      title: "Responsive Web Design",
      icon: <BiPalette />,
      description:
        "Provide high-quality and fully responsive web design with fashion designing tools",
    },
    {
      id: 3,
      title: "Cloud Computing",
      icon: <BiCloudDownload />,
      description:
        "Cloud Application Development with over 5+ years of DevOps experience.",
    },
    {
      id: 4,
      title: "Web Development",
      icon: <MdDeveloperMode />,
      description:
        "High-quality development of web applications and websites at the professional level.",
    },
    {
      id: 5,
      title: "Mobile Apps",
      icon: <BiMobile />,
      description:
        "Professional development of mobile applications for iOS and Android.",
    },
    {
      id: 6,
      title: "E-Commerce Solutions",
      icon: <SiShopify />,
      description:
        "Create custom themes and enhance online stores using Shopify and WordPress.",
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
