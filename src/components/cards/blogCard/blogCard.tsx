import React from "react";

interface Information {
  title: string;
  description: string;
  mainTag: string;
  tags: string[];
  img: string;
  date: string;
}

function BlogCard({ blog }: { blog: Information }) {
  return (
    <div className="bg-zinc-800 border-stone-400 border w-[30%] flex flex-col p-3 rounded-lg">
      <div className="bg-blue-400 w-full h-40 rounded-lg mb-3"></div>
      <div className="mb-3">
        <h1 className="text-xl">{blog.title}</h1>
        <h2 className="text-xs tracking-wider opacity-60 font-light">{blog.date}</h2>
      </div>

      <h3>{blog.description}</h3>
      <div></div>
    </div>
  );
}

export default BlogCard;
