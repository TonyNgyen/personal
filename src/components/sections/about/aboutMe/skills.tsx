import React from "react";
import Image from "next/image";

function Skills() {
  const skills = [
    {
      name: "NextJS",
      svg: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    {
      name: "React",
      svg: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
  ];
  return (
    <div className="flex-1 flex">
      <div className="flex-1 bg-zinc-800 border-stone-400 border rounded-lg p-5 flex-col">
        <h1 className="text-2xl font-bold">Skills</h1>
        <div className="flex">
          {skills.map((skill) => (
            <Image src={skill.svg} width={100} height={100} alt={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
