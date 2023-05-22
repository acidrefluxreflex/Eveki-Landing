import { FC } from "react";
import SVGIcon from "./icons/SVGIcos";

interface HowToUseProps {
  icon: string[];
  title: string;
}

const HowToUseCell: FC<HowToUseProps> = ({ icon, title }) => {
    return (
      <div id="BASE" className="flex flex-col items-center justify-center py-9 h-98">
        <div className="">
          <SVGIcon key={title} pathData={icon} size={68} />
        </div>
        <div className="hidden py-5 lg:flex">
          <div className="flex justify-center w-14 leading-none">
            <h2 className="text-4xl font-bold writing-vertical leading-none text-center">{title}</h2>
          </div>
        </div>
      </div>
    );
  };

export default HowToUseCell;
