import Chip from "@/components/chip/chip";
import React from "react";

interface Information {
  name: string;
  description: string;
  image: string;
  tag: string;
  technologies: string[];
}

function HeroCard({ data }: { data: Information }) {
  return (
    <div className="bg-zinc-800 rounded-lg border-white border px-3 py-5 flex flex-col gap-3">
      <div className="border-b-white border border-transparent pb-2">
        <h1 className="mb-2 text-xl">{data.name}</h1>
        <h2 className="w-[190px] text-sm">{data.description}</h2>
      </div>

      <div className="w-[300px] h-[200px] bg-gray-400 rounded-lg">{data.image}</div>
      <div className="flex gap-3">
        {data.technologies.map((technology) => (
          <Chip technology={technology} />
        ))}
      </div>
    </div>
  );
}

export default HeroCard;
