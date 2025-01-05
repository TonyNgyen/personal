import BlogCard from "@/components/cards/blogCard/blogCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import React, { useEffect, useState } from "react";

interface Blog {
  title: string;
  projectTag: string;
  tags: string[];
  img: string;
  shortDesc: string;
  longDesc: string;
  date: string;
}

function Blog() {
  // const [blogs, setBlogs] = useState<Blog[]>([]);
  // useEffect(() => {
  //   const getBlogs = async () => {
  //     const querySnapshot = await getDocs(collection(db, "blogs"));
  //     const blogArray: Blog[] = [];
  //     querySnapshot.forEach((doc) => {
  //       blogArray.push(doc.data() as Blog);
  //     });
  //     setBlogs(blogArray);
  //   };
  //   getBlogs();
  // }, []);
  const blogs = [
    {
      title: "Version 1.0 Release",
      shortDesc:
        "GymTracker is finally done and released! There might be some bugs, but it is the MVP. This is a test for the overflow on the blog cards. There is more improvement to be done",
      longDesc: "Long Description <br /> This is a new line!",
      projectTag: "GymTracker",
      tags: ["Development", "Troubles"],
      img: "",
      date: "01/01/2024",
    },
    {
      title: "Future Plans",
      shortDesc: "Future Plans",
      longDesc: "Long Description",
      projectTag: "K-Calendar",
      tags: ["Development", "Future"],
      img: "",
      date: "01/01/2024",
    },
    {
      title: "Title",
      shortDesc: "Version 1.0",
      longDesc: "Long Description",
      projectTag: "GymTracker",
      tags: ["Development", "Troubles"],
      img: "",
      date: "01/01/2024",
    },
    {
      title: "Test",
      shortDesc: "Future Plans",
      longDesc: "Long Description",
      projectTag: "K-Calendar",
      tags: ["Development", "Future"],
      img: "",
      date: "01/01/2024",
    },
  ];
  return (
    <div className="bg-black border-y-zinc-300 border bg-opacity-15" id="blog">
      <div className="md:w-9/12 mx-auto py-10 md:p-10 flex flex-col gap-3 w-[100vw]">
        <h1 className="mx-auto text-3xl font-bold text-zinc-50 mb-10">
          <a href="/development">Development</a>
        </h1>
        <div className="flex md:flex-wrap gap-4 justify-center md:flex-row flex-col items-center">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
