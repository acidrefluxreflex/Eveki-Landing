import Link from "next/link";
import { getList } from "../../libs/microcms";
import Image from "next/image";
import Pagination from "../../components/shared/Pagination";
import BlogPost from "@/components/shared/BlogCard";
import BlogCategorySection from "@/components/sections/BlogCategorySection";
export default async function StaticPage() {
  const { contents } = await getList();

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!contents || contents.length === 0) {
    return <h1 className="mt-8 text-center">No contents</h1>;
  }

  return (
    <div className="mx-auto max-w-2xl py-8">
      <div className=" pl-8">
        {contents.map((post) => {
          return (
            <div key={post.id} className="">
            <BlogPost post={post} />
            </div>
          );
        })}
   <BlogCategorySection />
        <Pagination
          currentPageNumber={1}
          maxPageNumber={Math.ceil(contents.length / 4)}
        />
      </div>
    </div>
  );
}
