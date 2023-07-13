import React from "react";
import Lottie from "react-lottie";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiBriefcase } from "react-icons/hi";
import { FaBriefcase } from "react-icons/fa";
import { SlBriefcase, SlLocationPin } from "react-icons/sl";
import experience from "../../../assets/lottie/experience.json";

import IMG_COM1 from "../../../assets/company/NTT DATA UK&I.jpg";
import IMG_COM2 from "../../../assets/company/Idea.jpg";
import IMG_COM3 from "../../../assets/company/SII Romania.jpg";
import IMG_COM4 from "../../../assets/company/Integrisoft Solutions.jpg";

const Experience = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: experience,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const experiences = [
    {
      image: IMG_COM1,
      background: "rgb(33, 150, 243)",
      title: "NTT DATA UK&I",
      job: "Senior Web Developer",
      start: "04/2021",
      end: "05/2023",
      position: "London, UK",
    },
    {
      image: IMG_COM2,
      background: "rgb(150, 33, 243)",
      title: "Idea",
      job: "Full Stack Developer",
      start: "03/2020",
      end: "02/2021",
      position: "London, UK",
    },
    {
      image: IMG_COM3,
      background: "rgb(243, 150, 33)",
      title: "SII Romania",
      job: "Web Developer",
      start: "10/2016",
      end: "12/2019",
      position: "Bucharest, Romania",
    },
    {
      image: IMG_COM4,
      background: "rgb(243, 33, 150)",
      title: "Integrisoft Solutions",
      job: "Software Engineer Intern",
      start: "10/2015",
      end: "08/2016",
      position: "Bucharest, Romania",
    },
  ];

  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Experience</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly my-8">
        <div style={{ width: "50%" }}>
          <Lottie
            options={defaultOptions}
            height="100%"
            width="100%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div style={{ width: "100%" }}>
          <VerticalTimeline>
            {experiences.map(
              ({ image, background, title, job, start, end, position }) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background,
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: `7px solid ${background}`,
                  }}
                  date={`${start} - ${end}`}
                  iconStyle={{ background, color: "#fff" }}
                  icon={<HiBriefcase />}
                >
                  <img
                    alt="companyMark"
                    src={image}
                    className="mb-4"
                    style={{ width: "100%" }}
                  />
                  <h4
                    className="vertical-timeline-element-subtitle"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <SlLocationPin />
                    &nbsp;{position}
                  </h4>
                  <h2
                    className="vertical-timeline-element-title font-bold"
                    style={{ color: "white" }}
                  >
                    {job}
                  </h2>
                </VerticalTimelineElement>
              )
            )}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
