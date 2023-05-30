
import { getList } from "../../../libs/microcms";

export async function generateStaticParams() {
    const { contents } = await getList();
  
    const paths = contents.map((post) => {
      return {
        postId: post.id,
      };
    });
  
    return [...paths];
  }



export const metadata = {
  title: "Eveki",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      {children}
    </main>
  );
}