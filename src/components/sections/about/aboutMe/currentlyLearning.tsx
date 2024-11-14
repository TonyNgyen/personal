import React from "react";

function CurrentlyLearning() {
  const skills = [
    {
      name: "Typescript",
      svg: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    },
    {
      name: "AWS",
      svg: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    },
    {
      name: "Firebase",
      svg: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    },
  ];
  return (
    <div className="flex-1 rounded-lg bg-dottedBG border-stone-400 border p-5 flex flex-col">
      <h1 className="text-2xl font-bold">Currently Learning</h1>
      <div className="flex flex-1 gap-4 justify-evenly items-center">
        {skills.map((skill) => (
          <div className="w-[30%] p-4 flex-shrink-0" key={skill.name}>
            <img src={skill.svg} alt={skill.name} className="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentlyLearning;
