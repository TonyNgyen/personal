"use client";

import React, { useState } from "react";
import Image from "next/image";

function Skills() {
  const [select, setSelect] = useState(0);
  const toggle = () => {
    if (select == 0) {
      setSelect(1);
    } else {
      setSelect(0);
    }
  };
  const skills = [
    [
      {
        name: "NextJS",
        svg: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      },
      {
        name: "React",
        svg: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      },
      {
        name: "Javascript",
        svg: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
      },
      {
        name: "HTML",
        svg: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      },
      {
        name: "CSS",
        svg: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      },
      {
        name: "Tailwind CSS",
        svg: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
      },
      {
        name: "SQL",
        svg: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
      },
      {
        name: "MongoDB",
        svg: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      },
      {
        name: "Python",
        svg: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
      },
    ],
    [
      {
        name: "Bootstrap",
        svg: "https://cdn.worldvectorlogo.com/logos/bootstrap-5.svg",
      },
      {
        name: "Java",
        svg: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
      },
      {
        name: "C",
        svg: "https://cdn.worldvectorlogo.com/logos/c-1.svg",
      },
      {
        name: "C++",
        svg: "https://cdn.worldvectorlogo.com/logos/c.svg",
      },
      {
        name: "Flask",
        svg: "https://cdn.worldvectorlogo.com/logos/flask.svg",
      },
      {
        name: "Pandas",
        svg: "https://cdn.worldvectorlogo.com/logos/pandas.svg",
      },
    ],
  ];
  return (
    <div className="flex-1 flex flex-shrink-0">
      <div className="flex-1 bg-dottedBG border-zinc-600 border rounded-lg p-5 pb-7 flex-col">
        <div className="text-2xl mb-7">
          <h1 className="mb-2 font-bold">Skills</h1>
          {select == 0 ? (
            <span
              className="dark:bg-green-600 bg-green-500 text-white px-2 py-1 rounded-lg cursor-pointer font-semibold"
              onClick={() => toggle()}
            >
              Primary
            </span>
          ) : (
            <span
              className="bg-violet-700 text-white px-2 py-1 rounded-lg cursor-pointer font-semibold"
              onClick={() => toggle()}
            >
              Secondary
            </span>
          )}
        </div>
        <div className="grid grid-cols-3 place-items-center gap-5 min-h-96">
          {skills[select].map((skill) => (
            <div className="w-7/12" key={skill.name}>
              <img src={skill.svg} alt={skill.name} className="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
