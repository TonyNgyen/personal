"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

interface Blog {
  title: string;
  projectTag: string;
  tags: string[];
  img: string;
  shortDesc: string;
  longDesc: string;
  date: string;
}

function BlogCard({ blog }: { blog: Blog }) {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={`bg-zinc-800 relative border-zinc-600 border ${
        expand ? "md:w-[24%]" : "md:w-[24%]"
      } w-[80vw] flex flex-col p-5 rounded-lg h-64`}
    >
      <div className="mb-3">
        <h1 className="text-xl font-bold">{blog.title}</h1>
        <h2 className="text-xs tracking-wider text-zinc-200 font-light">
          {blog.date}
        </h2>
        <div className="flex gap-[0.25rem] mt-1 text-sm font-normal">
          {blog.tags.map((index, tag) => (
            <div className="border-2 border-white px-2 rounded-full" key={index}>{tag}</div>
          ))}
        </div>
      </div>

      {/* <h3 className="mb-3 h-[50%] overflow-auto">{blog.shortDesc}</h3> */}
      <h3 className="mb-3 overflow-auto">{blog.shortDesc}</h3>
      {/* <div className="">
        <Dialog>
          <DialogTrigger asChild>
            <button
              className="bg-green-600 px-3 py-1 rounded-md font-semibold"
              onClick={() => setExpand(true)}
            >
              Read more
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl">{blog.title}</DialogTitle>
              <DialogDescription className="text-gray-200 text-md">
                <div>
                  {blog.longDesc.split("\\n").map((line, index) => (
                    <p key={index} className="">
                      {line}
                    </p>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <button
                  className="bg-red-400 px-3 py-1 rounded-md font-semibold"
                  onClick={() => setExpand(false)}
                >
                  Close
                </button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div> */}
    </div>
  );
}

export default BlogCard;
