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
    <div className="bg-zinc-800 relative border-stone-400 border md:w-[24%] w-[80vw] flex flex-col p-3 rounded-lg h-96">
      <div className="bg-blue-400 w-full h-40 overflow-hidden rounded-lg mb-3">
        <img src={blog.img} />
      </div>
      <div className="mb-3">
        <h1 className="text-xl">{blog.title}</h1>
        <h2 className="text-xs tracking-wider opacity-60 font-light">
          {blog.date}
        </h2>
      </div>

      <h3 className="mb-3 h-20 overflow-auto">{blog.description}</h3>
      <div className="absolute bottom-5 left-3">
        <button className="bg-blue-400 px-3 py-1 rounded-md font-semibold">
          Read more
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
