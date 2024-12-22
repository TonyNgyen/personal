import React from "react";
import styles from "./hero.module.css";
import HeroCard from "@/components/cards/heroCard/heroCard";
import Link from "next/link";
import Image from "next/image";

let cardInformation = [
  {
    name: "Toned",
    description: "A web app that helps people track their workouts",
    image: "/gymtracker.png",
    tag: "",
    technologies: [
      "react",
      "nextjs",
      "html",
      "tailwindcss",
      "mongodb",
      "css",
      "javascript",
    ],
    link: "https://tonedapp.vercel.app/",
  },
  {
    name: "KCalendar",
    description: "A web app that helps people track their workouts",
    image: "/kcalendar.png",
    tag: "",
    technologies: [
      "react",
      "nextjs",
      "html",
      "tailwindcss",
      "mongodb",
      "python",
    ],
    link: "https://k-calendar-2.vercel.app/",
  },
  {
    name: "Personal Website / Blog",
    description: "A web app that helps people track their workouts",
    image: "/blog.png",
    tag: "",
    technologies: ["react", "nextjs", "html", "tailwindcss", "mongodb"],
    link: "https://personal-one-xi.vercel.app/",
  },
];

type Skill = {
  name: string;
  color: string;
  svg: string;
};
const skills: { [key: string]: Skill } = {
  nextjs: {
    name: "NextJS",
    color: "#FFFFFF",
    svg: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  react: {
    name: "React",
    color: "#61dbfb",
    svg: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  javascript: {
    name: "Javascript",
    color: "#f0db4f",
    svg: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
  },
  html: {
    name: "HTML",
    color: "#f38353",
    svg: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  css: {
    name: "CSS",
    color: "#6993F5",
    svg: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    color: "#a5f3fc",
    svg: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  sql: {
    name: "SQL",
    color: "#f29111",
    svg: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
  },
  mongodb: {
    name: "MongoDB",
    color: "#00ed64",
    svg: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  python: {
    name: "Python",
    color: "#b5cee2",
    svg: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  },
  bootstrap: {
    name: "Bootstrap",
    color: "#ab9ebe",
    svg: "https://cdn.worldvectorlogo.com/logos/bootstrap-5.svg",
  },
  java: {
    name: "Java",
    color: "#f89820",
    svg: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
  },
  c: {
    name: "C",
    color: "#c1acd1",
    svg: "https://cdn.worldvectorlogo.com/logos/c-1.svg",
  },
  cpp: {
    name: "C++",
    color: "#99bcd7",
    svg: "https://cdn.worldvectorlogo.com/logos/c.svg",
  },
  flask: {
    name: "Flask",
    color: "#FFFFFF",
    svg: "https://cdn.worldvectorlogo.com/logos/flask.svg",
  },
  pandas: {
    name: "Pandas",
    color: "#b8b3cc",
    svg: "https://cdn.worldvectorlogo.com/logos/pandas.svg",
  },
};

function Hero() {
  return (
    <div className="md:min-h-[calc(100vh-90px)] pb-10 flex flex-col items-center gap-10 pt-[5rem] bg-dottedBG dark:bg-zinc-900 dark:bg-[radial-gradient(#48484a_1px,transparent_1px)] bg-[radial-gradient(#b3b3b4_1px,transparent_1px)] [background-size:40px_40px]">
      <div className="flex items-center gap-8 md:flex-row flex-col">
        <div className="flex items-center">
          <Image
            src="/profile.jpg"
            width={175}
            height={175}
            alt="Picture of me"
            className="rounded-full"
          />
        </div>
        <div>
          <div className="flex justify-center items-start flex-col p-4">
            <div className="text-lg flex flex-col gap-4 md:gap-0 md:pl-0 pl-10">
              <h1 className="font-bold text-2xl">
                I&apos;m Tony, a Full Stack Developer based in the U.S.
              </h1>
              <h1 className="md:w-[500px]">
                {/* I transform ideas into seamless, functional web applications.
                With expertise in both front-end and back-end development, I
                turn complex concepts into elegant, effective solutions. */}
                I primarily specialize in React, NextJS, JavaScript, and MongoDB
                and am open to utilizing the many technologies I am experienced
                in and learning new ones!
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 text-lg font-bold">
        <Link className="underline underline-offset-[2.5px]" href="#about">
          About
        </Link>
        <Link className="underline underline-offset-[2.5px]" href="#projects">
          Projects
        </Link>
        {/* <Link className="underline underline-offset-[2.5px]" href="#blog">
          Blog
        </Link> */}
        <Link className="underline underline-offset-[2.5px]" href="#contact">
          Contact
        </Link>
      </div>
      <div className="pb-[20px] flex gap-4 overflow-scroll w-[100vw] px-5 md:self-center md:w-full md:overflow-auto md:justify-center">
        {cardInformation.map((project) => (
          <HeroCard data={project} key={project.name} skills={skills} />
        ))}
      </div>
    </div>
  );
}

export default Hero;
