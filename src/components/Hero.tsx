import React from "react";
import testImage from "../images/tmpa2m_qwih.png";

const Hero: React.FC = () => {
  return (
    <div
      className="inset-0 flex h-screen items-center justify-center"
      style={{
        backgroundImage: `url(${testImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="animate-fade-in">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          Your Hero Message Here
        </h1>
        <p className="mb-8 text-lg font-medium text-white md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600">
          Call to Action
        </button>
      </div>
    </div>
  );
};

export default Hero;
