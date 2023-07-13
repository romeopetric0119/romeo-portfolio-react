import React from "react";
import Lottie from "react-lottie";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUniversity, FaHourglassStart } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import education from "../../../assets/lottie/education.json";

import IMG_UNI1 from "../../../assets/university/1.jpg";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: education,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Education</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly my-8">
        <div>
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(102, 102, 51)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(102, 102, 51)",
            }}
            date="08/2009 - 01/2015"
            iconStyle={{ background: "rgb(102, 102, 51)", color: "#fff" }}
            icon={<FaUniversity />}
          >
            <img src={IMG_UNI1} className="mb-4" style={{ width: "100%" }} />
            <h2
              className="vertical-timeline-element-title font-bold"
              style={{ color: "white" }}
            >
              University of Toronto
            </h2>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ display: "flex", alignItems: "center" }}
            >
              M.S. in Computer Science&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SlLocationPin />
              &nbsp;Toronto, Canada
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(255, 102, 0)", color: "#fff" }}
            icon={<FaHourglassStart />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
