import SideElement from "@/components/blog/SideBar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col justify-center  px-4 pt-8 md:flex-row  md:gap-16">
      {children}
      <SideElement />
    </main>
  );
}
