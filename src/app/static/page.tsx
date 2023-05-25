import Link from "next/link";
import { getList } from "../../libs/microcms";
import Image from "next/image";
import Pagination from "../../components/shared/Pagination";

export default async function StaticPage() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1 className="mt-8 text-center">No contents</h1>;
  }

  return (
    <div className="mx-auto max-w-2xl py-8">
      <ul className="list-disc pl-8">
        {contents.map((post) => {
          return (
            <li key={post.id} className="flex items-center gap-4 py-4">
              {post.eyecatch ? (
                <Image
                  src={post.eyecatch.url}
                  width={post.eyecatch.width}
                  height={post.eyecatch.height}
                  alt={post.title}
                />
              ) : null}

              <div>
                <Link href={`/blog/${post.id}`}>
                  <div className="text-xl font-semibold hover:underline">
                    {post.title}
                  </div>
                </Link>
                <p className="text-gray-500">{post.createdAt}</p>
                <Link href={`/blog/category/${post.category.id}`}>
                {post.category.name}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination
        currentPageNumber={1}
        maxPageNumber={Math.ceil(contents.length / 4)}
      />
    </div>
  );
}
