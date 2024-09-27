import Chip from "@/components/chip/chip";
import React from "react";

interface Information {
  name: string;
  description: string;
  longDescription: string;
  image: string;
  tag: string;
  technologies: string[];
  link: string;
  colors: {
    dark: string[];
    light: string[];
  };
}

function ProjectCard({ data }: { data: Information }) {
  return (
    <div className="bg-zinc-800 rounded-lg border-stone-400 border flex flex-col overflow-hidden">
      <div className="w-full bg-gray-400">
        <img src={data.image}></img>
      </div>
      <div className="flex flex-col gap-3 px-3 py-3">
        <div className="">
          <h1 className="mb-2 text-xl">{data.name}</h1>
          <h2 className="w-[190px] text-sm">{data.description}</h2>
        </div>
        <div className="flex justify-between">
          <h1 className="font-semibold">See Live</h1>
          {/* <h1 className="px-3 rounded-md border-white border bg-zinc-600 font-medium">
            Learn More
          </h1> */}
        </div>
        <div className="flex gap-3 border-t-white border border-transparent pt-3">
          {data.technologies.map((technology) => (
            <Chip technology={technology} key={technology}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
