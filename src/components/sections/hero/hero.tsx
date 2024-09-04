import React from "react";
import styles from "./hero.module.css";
import HeroCard from "@/components/cards/heroCard/heroCard";
import Link from "next/link";
import Image from "next/image";

let cardInformation = [
  {
    name: "GymTracker",
    description: "A web app that helps people track their workouts",
    image: "",
    tag: "",
    technologies: ["React", "NextJS"],
    link: "",
  },
  {
    name: "KCalendar",
    description: "A web app that helps people track their workouts",
    image: "",
    tag: "",
    technologies: ["React", "NextJS"],
    link: "",
  },
  {
    name: "Personal Website / Blog",
    description: "A web app that helps people track their workouts",
    image: "",
    tag: "",
    technologies: ["React", "NextJS"],
    link: "",
  },
];

function Hero() {
  return (
    <div className="h-[calc(100vh-90px)] flex flex-col items-center gap-10 pt-[5rem] bg-[radial-gradient(#2f2f30_1px,transparent_1px)] [background-size:24px_24px]">
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
              <h1 className="font-bold text-2xl">I'm Tony, a Full Stack Developer based in the U.S.</h1>
              <h1 className="w-[500px]">
                {/* I transform ideas into seamless, functional web applications.
                With expertise in both front-end and back-end development, I
                turn complex concepts into elegant, effective solutions. */}
                I primarily specialize in React, NextJS, JavaScript, and MongoDB
                but am open to utilizing the many techhnologies I am experienced
                in as well as learning new ones!
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
            <HeroCard data={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
