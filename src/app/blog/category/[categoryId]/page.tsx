
import Link from "next/link";
import { getCategory, getListForCategory, getCategoryDetail, getList } from "../../../../libs/microcms";
import Image from "next/image";
import Pagination from "../../../../components/shared/Pagination";


export async function generateStaticParams() {
  const { contents } = await getCategory();

  const paths = contents.map((category) => {
    return {
      categoryId: category.id,
    };
  });

  return paths;
}



export default async function StaticPage({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {

  

  const categoryName = (await getCategoryDetail(categoryId)).id;
 
  const { contents } = await getList();
  
contents.map ((post) => {
  console.log(post.category?.id)
})

  const filtered = (await contents.filter(
    (post) => post.category?.id === categoryName
  ))

  if (!filtered || filtered.length === 0) {
    return <h1 className="mt-8 text-center">No contents</h1>;
  }

  return (
    <div className="mx-auto max-w-2xl py-8">
      <ul className="list-disc pl-8">
        {filtered.map((post) => {
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
                <Link href={`/${categoryId}/${post.id}`}>
                  <div className="text-xl font-semibold hover:underline">
                    {post.title}
                  </div>
                </Link>
                <p className="text-gray-500">{post.createdAt}</p>
                {post.category?.name}
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
