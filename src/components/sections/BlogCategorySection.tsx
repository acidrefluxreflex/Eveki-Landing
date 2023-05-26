import { getCategory } from "../../libs/microcms";
import Link from "next/link";



export default async function BlogCategorySection() {
  const { contents } = await getCategory();

  if (!contents || contents.length === 0) {
    return <h1 className="mt-8 text-center">No contents</h1>;
  }

  return (
    <div className="mx-auto max-w-2xl py-8">
      <ul className="list-disc pl-8">
        {contents.map((post) => {
          return (
            <div key={post.id} className="">
              <Link href={`/blog/category/${post.id}`}>{post.name}</Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
