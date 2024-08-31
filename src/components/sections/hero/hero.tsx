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
  },
  {
    name: "GymTracker",
    description: "A web app that helps people track their workouts",
    image: "",
    tag: "",
    technologies: ["React", "NextJS"],
  },
];

function Hero() {
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col items-center gap-12 pt-20">
      <div className="flex items-center gap-7">
        <div className="flex items-center">
          <Image
            src="/dog.jpg"
            width={200}
            height={200}
            alt="Picture of the dog"
            className="rounded-full"
          />
        </div>
        <div className="w-[540px]">
          <div className="flex justify-center items-start flex-col gap-4">
            <div className="text-lg">
              <h1>Hey! I'm Tony, a Full Stack Developer.</h1>
              <h1>
                I transform ideas into seamless, functional web applications. I
                specialize in both front-end and back-end development, turning
                complex ideas into elegant solutions that work.
              </h1>
            </div>
            <div className="flex gap-4 text-sm">
              <Link className="underline underline-offset-2" href="#about">
                About
              </Link>
              <Link className="underline underline-offset-2" href="#projects">
                Projects
              </Link>
              <Link className="underline underline-offset-2" href="#blog">
                Blog
              </Link>
              <Link className="underline underline-offset-2" href="#contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
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
