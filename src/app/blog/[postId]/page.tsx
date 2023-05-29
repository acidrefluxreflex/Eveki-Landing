import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../libs/microcms";
import Link from "next/link";
import dayjs from "dayjs";
// プラグインが必要
import ja from "dayjs/locale/ja";

dayjs.locale(ja);

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

  const createdAt = dayjs(post.createdAt).format("YYYY年MM月DD日");

  // ページの生成された時間を取得

  const proseSetting: string =
    "prose  text-black prose-h2:text-black prose-a:text-blue-500 prose-strong:text-blue-500 prose-strong:font-bold prose-h2:border-b-2  prose-h2:text-3xl";

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div className="max-w-2xl py-8">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href="/blog">ブログ</Link>
            </li>
            <li>
              <Link
                href="/blog/category/[categoryId]"
                as={`/blog/category/${post.category?.id ?? ""}`}
              >
                {post.category?.name ?? ""}
              </Link>
            </li>
            <li className="inline-block">{post.title}</li>
          </ul>
        </div>
        <h2 className="mb-2 text-gray-600">{createdAt}</h2>
        <h1 className="mb-4 text-5xl font-bold">{post.title}</h1>

        <p className="badge mb-12">
          <Link
            href="/blog/category/[categoryId]"
            as={`/blog/category/${post.category?.id ?? ""}`}
          >
            {post.category?.name ?? ""}
          </Link>
        </p>

        <div className={proseSetting}>{parse(post.content)}</div>
      </div>
    </div>
  );
}
