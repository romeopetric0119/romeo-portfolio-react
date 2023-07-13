import React from "react";
import TypeAnimation from "react-type-animation";
import styled from "styled-components";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import {
  BottomLine,
  MySkill,
  Education,
  Qualification,
  Experience,
} from "../../components";
import { FaDownload } from "react-icons/fa";
import ParticleImage, { Vector, forces } from "react-particle-image";

import IMG_Portrait from "../../assets/portrait.png";
import IMG_React from "../../assets/react-logo.png";

const particleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#61dafb",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

const About = () => {
  return (
    <div className=" pt-16 my-16">
      <motion.div
        className="mb-10"
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, type: "spring" },
        }}
      >
        <h3 className="text-neutral text-center">Something About Myself</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          About <span className="text-primary">Me</span>
        </h1>
        <BottomLine />
      </motion.div>
      <ParticleImage
        src={IMG_React}
        scale={0.75}
        entropy={20}
        maxParticles={4000}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        style={{
          position: "absolute",
          top: "300px",
          left: "30%",
          backgroundColor: "transparent",
        }}
      />
      <Panel className="grid grid-cols-1 md:grid-cols-2 gap-40">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 1.25 },
          }}
        >
          <img
            src={IMG_Portrait}
            alt="Romeo Petric"
            className="pl-24 mt-6"
            style={{ filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.95))" }}
            title="Romeo Petric"
          />
        </motion.div>
        <motion.div
          className="pt-14 pr-24"
          initial={{ x: 200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 1.25 },
          }}
        >
          <h1 className="text-4xl text-black font-bold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">
            ROMEO PETRIC
          </h1>
          <div className="my-8">
            <TypeAnimation
              className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
              cursor={true}
              sequence={[
                "Senior Web Developer",
                2000,
                "Proficient in Web Development",
                2000,
              ]}
              wrapper="div"
              repeat={Infinity}
            />
          </div>
          <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            Highly skilled Senior Web Developer with 9+ years of hands-on
            experience in designing, developing, and implementing web
            applications and solutions using a wide range of technical stacks
            and programming languages. Committed to delivering high-quality
            software solutions and staying updated with industry trends. Strong
            leadership, problem-solving, and coding abilities.
          </p>
          <br />
          <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            Seeking opportunities to contribute to a forward-thinking
            organization.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left text-black">
            <a href="#" target="blank">
              <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                <button className="primary-button">
                  <span>My Resume</span>
                  <span>
                    <FaDownload />
                  </span>
                </button>
              </div>
            </a>
          </div>
        </motion.div>
      </Panel>
      {/* My Skill */}
      <MySkill />

      {/* My Experience */}
      <Experience />

      {/* Education */}
      <Education />

      {/* Qualification */}
      <Qualification />
    </div>
  );
};

const Panel = styled.div`
  background-color: white;
  height: fit-content;

  .primary-button::after {
    background-color: white;
  }
`;

export default About;
