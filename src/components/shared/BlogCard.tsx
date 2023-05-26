import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/libs/microcms";

const BlogPost: React.FC<{ post: Blog }> = ({ post }) => {
  return (
    <div className="flex flex-col overflow-hidden  bg-white  sm:flex-row">
      {post.eyecatch ? (
        <Image
          src={post.eyecatch.url}
          width={post.eyecatch.width! / 4}
          height={post.eyecatch.height! / 4}
          alt={post.title}
        />
      ) : (
        <div className="h-20 w-20 bg-gray-200"></div> // プレースホルダーとして表示する要素
      )}

      <div className="flex flex-col justify-between p-6 sm:w-2/3">
        <div>
          <h2 className="mb-2 text-2xl font-bold">{post.title}</h2>
          <div className="mb-4 text-gray-600">
            {post.category ? (
              <Link
                href={`/category/${post.category.id}`}
                className="mr-2 text-sm text-gray-500"
              >
                {post.category.name}
              </Link>
            ) : (
              <div></div>
            )}
            <p className="text-sm text-gray-500">{post.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
