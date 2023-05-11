import { FC } from "react";

type SpacerProps = {
  size: string;
};

const Spacer: FC<SpacerProps> = ({ size }) => {
  return <div className={`h-${size} w-${size}`} />;
};

export default Spacer;
