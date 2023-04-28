import { FC } from "react";
import Feature from "./Feature";

const features = [
  {
    icon: "/images/feature1.png",
    title: "Feature 1",
    description: "This is feature 1",
    
  },
  {
    icon: "/images/feature2.png",
    title: "Feature 2",
    description: "This is feature 2",
    isLeft: true,
  },
  {
    icon: "/images/feature3.png",
    title: "Feature 3",
    description: "This is feature 3",
  },
];

const FeaturesSection: FC = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-10">Features</h1>
        <div >
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
