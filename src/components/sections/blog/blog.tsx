import BlogCard from "@/components/cards/blogCard/blogCard";
import React from "react";

function Blog() {
  const blogs = [
    {
      title: "Version 1.0 Release",
      description: "GymTracker is finally done and released! There might be some bugs, but it is the MVP.",
      mainTag: "GymTracker",
      tags: ["Development", "Troubles"],
      img: "",
      date: "01/01/2024"
    },
    {
      title: "Future Plans",
      description: "Future Plans",
      mainTag: "K-Calendar",
      tags: ["Development", "Future"],
      img: "",
      date: "01/01/2024"
    },
    {
      title: "Title",
      description: "Version 1.0",
      mainTag: "GymTracker",
      tags: ["Development", "Troubles"],
      img: "",
      date: "01/01/2024"
    },
    {
      title: "Title",
      description: "Future Plans",
      mainTag: "K-Calendar",
      tags: ["Development", "Future"],
      img: "",
      date: "01/01/2024"
    },
    {
      title: "Title",
      description: "Version 1.0",
      mainTag: "GymTracker",
      tags: ["Development", "Troubles"],
      img: "",
      date: "01/01/2024"
    },
    {
      title: "Title",
      description: "Future Plans",
      mainTag: "K-Calendar",
      tags: ["Development", "Future"],
      img: "",
      date: "01/01/2024"
    },
  ];
  return (
    <div className="bg-black border-y-zinc-300 border bg-opacity-15" id="blog">
      <div className="w-8/12 mx-auto p-10 flex flex-col gap-3">
        <h1 className="mx-auto text-3xl font-bold text-zinc-50 mb-10">Blog</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {blogs.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
