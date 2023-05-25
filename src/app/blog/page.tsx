import Link from "next/link";
import { getList } from "../../libs/microcms";
import Image from "next/image";
import Pagination from "../../components/shared/Pagination";

export default async function StaticPage() {
  const { contents } = await getList();

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!contents || contents.length === 0) {
    return <h1 className="text-center mt-8">No contents</h1>;
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{time}</h1>
      <ul className="list-disc pl-8">
        {contents.map((post) => {
          return (
            <li key={post.id} className="text-blue-500 hover:underline">
              {post.eyecatch ? (
                <Image
                  src={post.eyecatch.url}
                  width={post.eyecatch.width}
                  height={post.eyecatch.height}
                  alt={post.title}
                />
              ) : (
                <div className="w-20 h-20 bg-gray-200"></div> // プレースホルダーとして表示する要素
              )}
            <div>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
           
              <Link href={`/blog/category/${post.category?.id}`}>{post.category?.name}</Link>
              </div>
              

            </li>
          );
        })}
        <Pagination currentPageNumber={1} maxPageNumber={Math.ceil(contents.length / 4)} />
      </ul>
    </div>
  );
}