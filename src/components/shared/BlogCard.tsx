import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/libs/microcms";

import dayjs from "dayjs";
// プラグインが必要
import ja from "dayjs/locale/ja";
dayjs.locale(ja);

const BlogPost: React.FC<{ post: Blog }> = ({ post }) => {
  const createdAt = dayjs(post.createdAt).format("YYYY年MM月DD日");

  return (
    <div className="flex flex-col py-11 overflow-hidden  bg-white  sm:flex-row">
      {post.eyecatch ? (
          <Link href={`/blog/${post.id}`}>
        <Image
          src={post.eyecatch.url}
          width={post.eyecatch.width! / 4}
          height={post.eyecatch.height! / 4}
          alt={post.title}
        />
        </Link>
      ) : (
        <div className="h-20 w-20 bg-gray-200"></div> // プレースホルダーとして表示する要素
      )}

      <div className="flex flex-col justify-between p-6 sm:w-2/3">
        <div>
          <Link href={`/blog/${post.id}`} className="mb-2 text-xl font-bold">
            {post.title}
          </Link>
          <div className="mb-4 text-gray-600">
            {post.category ? (
              <Link
                href={`/blog/category/${post.category.id}`}
                className="mr-2 text-sm text-blue-500"
              >
                {post.category.name}
              </Link>
            ) : (
              <div></div>
            )}
            <p className="text-sm text-gray-500">{createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
