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

import IMG_COM1 from "../../../assets/company/1.jpg";
import IMG_COM2 from "../../../assets/company/2.jpg";
import IMG_COM3 from "../../../assets/company/3.jpg";

const Experience = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: experience,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="06/2020 - 04/2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<HiBriefcase />}
            >
              <img src={IMG_COM3} className="mb-4" style={{ width: "100%" }} />
              <h2
                className="vertical-timeline-element-title font-bold"
                style={{ color: "white" }}
              >
                Senior Full Stack Developer
              </h2>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ display: "flex", alignItems: "center" }}
              >
                Smartsites&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SlLocationPin />
                &nbsp;Paramus, US
              </h4>
              <p>
                I worked as a senior full-stack developer here, responsible for
                building, deploying and maintaining internal web applications.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(255, 153, 51)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(255, 153, 51)",
              }}
              date="02/2017 - 06/2020"
              iconStyle={{ background: "rgb(255, 153, 51)", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <img src={IMG_COM2} className="mb-4" style={{ width: "100%" }} />
              <h2
                className="vertical-timeline-element-title font-bold"
                style={{ color: "white" }}
              >
                Full Stack Developer
              </h2>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ display: "flex", alignItems: "center" }}
              >
                Devstars&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SlLocationPin />
                &nbsp;Toronto, Canada
              </h4>
              <p>
                I worked as a full-stack developer here, responsible for
                development, UX design, product evolution.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(0, 204, 153)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(0, 204, 153)",
              }}
              date="03/2015 - 02/2017"
              iconStyle={{ background: "rgb(0, 204, 153)", color: "#fff" }}
              icon={<SlBriefcase />}
            >
              <img src={IMG_COM1} className="mb-4" style={{ width: "100%" }} />
              <h2
                className="vertical-timeline-element-title font-bold"
                style={{ color: "white" }}
              >
                Web Developer
              </h2>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ display: "flex", alignItems: "center" }}
              >
                Inorbital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <SlLocationPin />
                &nbsp;Toronto, Canada
              </h4>
              <p>
                I worked as a Web developer here, responsible for development,
                testing product.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
