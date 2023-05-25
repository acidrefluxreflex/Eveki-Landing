import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../libs/microcms";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  // ページの生成された時間を取得

  const proseSetting: string =
    "prose text-black prose-h2:text-black prose-a:text-blue-500 prose-strong:text-blue-500 prose-strong:font-bold";

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl py-8">
      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
      <h2 className="mb-2 text-gray-600">{post.createdAt}</h2>
      <div className={proseSetting}>{parse(post.content)}</div>
    </div>
  );
}
