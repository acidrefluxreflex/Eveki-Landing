import React from 'react';

const Hero: React.FC = () => {
  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/hero.jpg')`,
      }}
    >
      <div className="animate-fade-in">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          Your Hero Message Here
        </h1>
        <p className="text-lg md:text-xl text-white font-medium mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600">
          Call to Action
        </button>
      </div>
    </div>
  );
};

export default Hero;
