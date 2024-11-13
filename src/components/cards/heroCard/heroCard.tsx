import Chip from "@/components/chip/chip";
import Link from "next/link";
import React from "react";

interface Information {
  name: string;
  description: string;
  image: string;
  tag: string;
  technologies: string[];
  link: string;
}

interface Skill {
  name: string;
  color: string;
  svg: string;
}

function HeroCard({
  data,
  skills,
}: {
  data: Information;
  skills: { [key: string]: Skill };
}) {
  return (
    <div className="dark:bg-zinc-800 bg-card text-zinc-900 rounded-lg border-stone-400 border px-3 py-5 flex flex-col gap-3">
      <div className="dark:border-b-stone-100 border-b-zinc-900 border border-transparent pb-2">
        <h1 className="mb-2 text-xl font-bold dark:text-stone-100">
          {data.name}
        </h1>
        <h2 className="w-[190px] text-sm dark:text-stone-100">
          {data.description}
        </h2>
      </div>

      <div className="w-[300px] bg-gray-400 bg-transparent">
        <img src={data.image} className="rounded-lg"></img>
      </div>
      <div className="flex justify-between">
        <a
          target="_blank"
          href={data.link}
          className="px-3 py-[0.1rem] rounded-md border-white bg-green-600 font-semibold text-white"
        >
          See Live
        </a>
        {/* <h1 className="px-3 rounded-md border-zinc-300 border bg-zinc-600 font-semibold">
          Learn More
        </h1> */}
      </div>
      {/* <div className="flex border-t-stone-100 border border-transparent pt-3">
        {data.technologies.map((technology) => (
          <Chip content={skills[technology as keyof Object].name} key={technology} color={skills[technology as keyof Object].color} />
        ))}
      </div> */}
    </div>
  );
}

export default HeroCard;
