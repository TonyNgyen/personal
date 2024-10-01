import React from "react";
import styles from "./hero.module.css";
import HeroCard from "@/components/cards/heroCard/heroCard";
import Link from "next/link";
import Image from "next/image";

let cardInformation = [
  {
    name: "GymTracker",
    description: "A web app that helps people track their workouts",
    image: "/gymtracker.png",
    tag: "",
    technologies: ["react", "nextjs"],
    link: "",
  },
  {
    name: "KCalendar",
    description: "A web app that helps people track their workouts",
    image: "/kcalendar.png",
    tag: "",
    technologies: ["react", "nextjs"],
    link: "",
  },
  {
    name: "Personal Website / Blog",
    description: "A web app that helps people track their workouts",
    image: "/blog.png",
    tag: "",
    technologies: ["react", "nextjs"],
    link: "",
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
    color: "#111111",
    svg: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  react: {
    name: "React",
    color: "#0485a7",
    svg: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  javascript: {
    name: "Javascript",
    color: "#c5b218",
    svg: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
  },
  html: {
    name: "HTML",
    color: "#9f351b",
    svg: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  css: {
    name: "CSS",
    color: "#264de4",
    svg: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    color: "#06b6d4",
    svg: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  sql: {
    name: "SQL",
    color: "#00758F",
    svg: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
  },
  mongodb: { 
    name: "MongoDB",
    color: "#00684a",
    svg: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  python: {
    name: "Python",
    color: "#4584b6",
    svg: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  },
  bootstrap: {
    name: "Bootstrap",
    color: "#563d7c",
    svg: "https://cdn.worldvectorlogo.com/logos/bootstrap-5.svg",
  },
  java: {
    name: "Java",
    color: "#f89820",
    svg: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
  },
  c: {
    name: "C",
    color: "#64318c",
    svg: "https://cdn.worldvectorlogo.com/logos/c-1.svg",
  },
  cpp: {
    name: "C++",
    color: "#00599c",
    svg: "https://cdn.worldvectorlogo.com/logos/c.svg",
  },
  flask: {
    name: "Flask",
    color: "#111111",
    svg: "https://cdn.worldvectorlogo.com/logos/flask.svg",
  },
  pandas: {
    name: "Pandas",
    color: "#150458",
    svg: "https://cdn.worldvectorlogo.com/logos/pandas.svg",
  },
};

function Hero() {
  return (
    <div className="min-h-[calc(100vh-90px)] pb-10 flex flex-col items-center gap-10 pt-[5rem] bg-[radial-gradient(#48484a_1px,transparent_1px)] [background-size:40px_40px]">
      <div className="flex items-center gap-7">
        <div className="flex items-center">
          <Image
            src="/dog.jpg"
            width={175}
            height={175}
            alt="Picture of the dog"
            className="rounded-full"
          />
        </div>
        <div>
          <div className="flex justify-center items-start flex-col gap-4">
            <div className="text-lg">
              <h1 className="font-bold text-2xl">
                I&apos;m Tony, a Full Stack Developer based in the U.S.
              </h1>
              <h1 className="w-[500px]">
                {/* I transform ideas into seamless, functional web applications.
                With expertise in both front-end and back-end development, I
                turn complex concepts into elegant, effective solutions. */}
                I primarily specialize in React, NextJS, JavaScript, and MongoDB
                and am open to utilizing the many techhnologies I am experienced
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
        <Link className="underline underline-offset-[2.5px]" href="#blog">
          Blog
        </Link>
        <Link className="underline underline-offset-[2.5px]" href="#contact">
          Contact
        </Link>
      </div>
      <div className="">
        <div className="flex gap-4">
          {cardInformation.map((project) => (
            <HeroCard data={project} key={project.name} skills={skills} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
