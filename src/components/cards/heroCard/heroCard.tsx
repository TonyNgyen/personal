import Chip from "@/components/chip/chip";
import React from "react";

interface Information {
  name: string;
  description: string;
  image: string;
  tag: string;
  technologies: string[];
  link: string;
}

function HeroCard({ data }: { data: Information }) {
  return (
    <div className="bg-zinc-800 rounded-lg border-stone-400 border px-3 py-5 flex flex-col gap-3">
      <div className="border-b-white border border-transparent pb-2">
        <h1 className="mb-2 text-xl">{data.name}</h1>
        <h2 className="w-[190px] text-sm">{data.description}</h2>
      </div>

      <div className="w-[300px] bg-gray-400 bg-transparent">
        <img src={data.image} className="rounded-lg"></img>
      </div>
      <div className="flex justify-between">
        <h1 className="font-semibold">See Live</h1>
        <h1 className="px-3 rounded-md border-white border bg-zinc-600 font-medium">
          Learn More
        </h1>
      </div>
      <div className="flex gap-3 border-t-white border border-transparent pt-3">
        {data.technologies.map((technology) => (
          <Chip technology={technology} />
        ))}
      </div>
    </div>
  );
}

export default HeroCard;
