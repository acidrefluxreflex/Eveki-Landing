
import { FC } from "react";
import { FaSearch } from "react-icons/fa";
import Icon from "@/libs/ReactIcon";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const TopImageCard: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="card border-0 shadow-md">
      <figure className="w-43">
        <Icon icon={FaSearch} size="96px" color="white" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export default TopImageCard;
