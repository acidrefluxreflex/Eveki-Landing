import { Children } from "react";

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen ">{children}</div>;
}
