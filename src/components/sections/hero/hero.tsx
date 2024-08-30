import React from "react";
import styles from "./hero.module.css";
import HeroCard from "@/components/cards/heroCard/heroCard";

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
    <div className="bg-gray-700 h-[calc(100vh-100px)]">
      <div className="bg-red-900 h-1/2 flex justify-center items-center">
        <div className="w-[500px] bg-gray-400">
          <div className="w-[500px] h-[300px] flex justify-end items-center">
            Image
          </div>
        </div>
        <div className="w-[500px] bg-purple-400">
          <div className="w-[500px] h-[300px] flex justify-start items-center">
            Description
          </div>
        </div>
      </div>
      <div className="bg-blue-900 h-1/2">
        <div className="flex justify-center gap-4">
          {cardInformation.map((project) => (
            <HeroCard data={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
