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
    <div className="bg-green-800 rounded-md border-white border px-3 py-5 flex flex-col gap-3">
      <div className="border-b-white border border-transparent">
        <h1 className="mb-2 text-xl">{data.name}</h1>
        <h2 className="w-[300px] text-sm">{data.description}</h2>
      </div>

      <div className="w-[300px] h-[200px] bg-gray-400 rounded-md">{data.image}</div>
      <div className="flex gap-3">
        {data.technologies.map((technology) => (
          <Chip technology={technology} />
        ))}
      </div>
    </div>
  );
}

export default HeroCard;
