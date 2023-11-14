import { getDetail, getList } from "../../../libs/microcms";
import { Article, WithContext } from "schema-dts";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 

  {
    return <>{children}</>;
  }
}
