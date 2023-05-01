import { ReactNode } from "react";

interface ZStackProps {
  children: ReactNode[];
}

const ZStack = ({ children }: ZStackProps) => {
  return (
    <div className="relative h-screen ">
      {children.map((child, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-${children.length - index}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ZStack;
