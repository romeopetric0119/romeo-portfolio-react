import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/lottie/reading-book.json";

const Qualification = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Front End Development Libraries Certification
              </h3>
              <p className="text-sm text-neutral font-semibold"></p>
            </div>
            <p className="text-sm text-neutral">freeCodeCamp</p>
          </div>
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                JavaScript Algorithms and Data Structures Certification
              </h3>
              <p className="text-sm text-neutral font-semibold"></p>
            </div>
            <p className="text-sm text-neutral">freeCodeCamp</p>
          </div>
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                MongoDB for Javascript Developers Certification
              </h3>
              <p className="text-sm text-neutral font-semibold"></p>
            </div>
            <p className="text-sm text-neutral">MongoDB University</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
