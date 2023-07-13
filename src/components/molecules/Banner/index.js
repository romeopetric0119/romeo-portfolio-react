import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import styled from "styled-components";

import coding from "../../../assets/lottie/coding.json";
import "../../../pages/shared/Shared.css";

import IMG_Portrait from "../../../assets/portrait.png";
import ParticleImage, { Vector, forces } from "react-particle-image";

import IMG_React from "../../../assets/react-logo.png";

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

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Wrapper>
      <div
        className="parent flex flex-col-reverse lg:flex-row items-center justify-between gap-20"
        style={{ height: "fit-content" }}
      >
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-neutral text-xl font-medium translate-y-[-90%] sm:translate-y-[-0%]">
            Hello, I'm
          </h2>
          <h1 className="text-4xl text-black font-bold mb-0 translate-y-[-50%] sm:translate-y-[-0%]">
            Romeo Petric
          </h1>
          <div className="my-4">
            <TypeAnimation
              className="text-2xl text-primary font-bold translate-y-[-80%] sm:translate-y-[-0%]"
              cursor={true}
              sequence={[
                "A Senior Web Developer",
                2000,
                "Proficient in MERN | MEAN",
                2000,
              ]}
              wrapper="div"
              repeat={Infinity}
            />
          </div>
          <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%]">
            Highly skilled Senior Web Developer with 9+ years of hands-on
            experience in designing, developing, and implementing applications
            and solutions using a wide range of technologies and programming
            languages. Committed to delivering high-quality software solutions
            and staying updated with industry trends. Strong leadership,
            problem-solving, and coding abilities. Seeking opportunities to
            contribute to a forward-thinking organization.
          </p>

          <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%]">
            <a
              href="https://drive.google.com/file/d/1uLZSGwlWB1hLBKd1C5q0AGrlMIhQKNGp/view?usp=drive_link"
              target="blank"
            >
              <button className="primary-button">
                <span>My Resume</span>
                <span>
                  <FaDownload />
                </span>
              </button>
            </a>
            <Link to="/about" className="ml-4">
              <button className="btn text-neutral flex items-center gap-2 border-2 border-primary bg-transparent hover:bg-primary hover:text-white hover:border-transparent duration-500">
                <span>About Me</span>
                <span>
                  <RiFolderInfoFill />
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Portrait
            className="mt-6"
            src={IMG_Portrait}
            alt="This is my portrait."
          />
          <ParticleImage
            src={IMG_React}
            scale={0.55}
            entropy={20}
            maxParticles={3000}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}
            style={{
              position: "absolute",
              top: "-20px",
              right: "-60px",
              backgroundColor: "transparent",
              zIndex: "-1",
            }}
          />
        </motion.div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;

  .primary-button::after {
    background-color: white;
  }
`;

const Portrait = styled.img``;

export default Banner;
