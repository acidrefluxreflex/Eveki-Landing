import { getList } from "../../libs/microcms";
import BlogPost from "@/components/shared/BlogCard";

export default async function StaticPage() {
  const { contents } = await getList();

  // ページの生成された時間を取得

  if (!contents || contents.length === 0) {
    return <h1 className="mt-8 text-center">No contents</h1>;
  }

  return (
    <div className="max-w-2xl">
      <div className="max-w-2xl pl-8">
        {contents.map((post) => {
          return (
            <div key={post.id} className="">
              <BlogPost post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
