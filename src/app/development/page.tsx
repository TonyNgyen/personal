import BlogCard from "@/components/cards/blogCard/blogCard";
import React from "react";

function BlogPage() {
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
    <div className="mt-16 px-40">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Development</h1>
        <h3 className="text-lg text-zinc-200">What I've been up to. From development progress, future ideas, to frustrations.</h3>
      </div>

      <div className="flex md:flex-wrap gap-4 justify-center md:flex-row flex-col items-center mt-10">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.title} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
