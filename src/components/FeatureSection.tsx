import { FC } from "react";
import Feature from "./Feature";
import image from  "../images/icon.png"

const features = [
  {
    icon: "/images/icon.png",
    title: "個性の構築",
    description: "This is feature 1",
  },
  {
    icon: "/images/bubbles.jpg",
    title: "Feature 2",
    description: "This is feature 2",
    isLeft: true,
  },
  {
    icon: "/images/icon.png",
    title: "Feature 3",
    description: "This is feature 3",
  },
];

const FeaturesSection: FC = () => {
  return (
    <>
      <div className="container">
        <h1 className="mb-10 text-3xl font-bold">Features</h1>
        <div>
          {features.map((feature) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isLeft={feature.isLeft}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
