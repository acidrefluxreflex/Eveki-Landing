import Link from "next/link";
import { getList } from "../../libs/microcms";

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
              <Link href={`/static/${post.id}`}>{post.title}</Link>
            
            </li>
          );
        })}
      </ul>
    </div>
  );
}
