import Chip from "@/components/chip/chip";
import React from "react";
import styles from "./projectCard.module.css";

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

interface Skill {
  name: string;
  color: string;
  svg: string;
}

function ProjectCard({ data, skills }: { data: Information; skills: { [key: string]: Skill } }) {
  return (
    <div className="bg-card rounded-lg border-stone-400 border flex flex-col overflow-hidden">
      <div className="w-full bg-gray-400">
        <img src={data.image}></img>
      </div>
      <div className="flex flex-col gap-3 px-3 py-3">
        <div className="">
          <h1 className="mb-2 text-xl font-semibold">{data.name}</h1>
          <h2 className="w-[200px] text-sm">{data.description}</h2>
        </div>
        <div className="flex justify-between">
          <a target="_blank" href={data.link} className="px-3 rounded-md border-white bg-green-600 text-white font-semibold">See Live</a>
          {/* <h1 className="px-3 rounded-md border-zinc-300 border bg-zinc-600 font-semibold">
            Learn More
          </h1> */}
        </div>
        <div
          className={`border-t-white border border-transparent pt-3 ${styles.bigWrapper}`}
        >
          <div className={`${styles.wrapper}`}>
            <div className={styles.chips} style={{'--speed': `25000ms`} as React.CSSProperties}>
              {data.technologies.map((technology) => (
                <Chip
                  content={skills[technology as keyof Object].name}
                  color={skills[technology as keyof Object].color}
                  key={technology}
                />
              ))}
            </div>
            <div className={styles.chips} style={{'--speed': `25000ms`} as React.CSSProperties}>
              {data.technologies.map((technology) => (
                <Chip
                  content={skills[technology as keyof Object].name}
                  color={skills[technology as keyof Object].color}
                  key={technology}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
