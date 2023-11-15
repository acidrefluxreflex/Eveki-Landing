import { Heading } from "@kuma-ui/core";

interface PageHeadImageProps {
  imageSrc: string;
  title: string;
}

export default function PageHeadImage(props: PageHeadImageProps) {
  const backgroundImage = props.imageSrc;
  const text = props.title;
  return (
    <div
      className="hero min-h-[300px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay "></div>
      <div className="max-w-md">
        <Heading as="h2" fontSize="96px" style={{ fontFamily: "Futura" }}>
          <span className="text-[#D81F35]">{text.charAt(0)}</span>
          <span className="text-[#E6E3C5]">{text.substring(1)}</span>
        </Heading>
      </div>
    </div>
  );
}
