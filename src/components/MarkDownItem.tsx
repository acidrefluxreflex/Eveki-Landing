import Link from "next/link";
import { AnchorHTMLAttributes, FC } from "react";

const CustomLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  children,
}) => {
  return href?.startsWith("/") ? (
    <Link href={href}>{children}</Link>
  ) : (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
};

import Image from "next/image";
import { ImgHTMLAttributes } from "react";

const CustomImage: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
  width,
  height,
}) => {
  if (!src) return <span>src が指定されていません。</span>;

  return width && height ? (
    <Image
      alt={alt ?? "alt なし"}
      height={Number(height)}
      src={src}
      width={Number(width)}
    />
  ) : (
    <img alt={alt ?? "alt なし"} height={height} src={src} width={width} />
  );
};
export { CustomImage, CustomLink };
