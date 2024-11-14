import React from "react";
import { Switch } from "@/components/ui/switch";
import AboutMe from "./aboutMe/aboutMe";
import WorkHistory from "./aboutMe/workHistory";
import Image from "next/image";
import Skills from "./aboutMe/skills";
import CurrentlyBuilding from "./aboutMe/currentlyBuilding";
import CurrentlyLearning from "./aboutMe/currentlyLearning";

function About() {
  return (
    <div className="bg-regularBG border-y-zinc-300 border dark:bg-opacity-15">
      <div
        className="md:w-8/12 mx-auto md:p-10 flex flex-col gap-3 p-3"
        id="about"
      >
        <h1 className="mx-auto text-3xl font-bold text-foreground mb-10 md:mt-0 mt-10">
          Career
        </h1>
        <div className="flex-1 flex gap-3 md:flex-row flex-col">
          <AboutMe />
          <WorkHistory />
        </div>
        <div className="flex-1 flex gap-3 md:flex-row flex-col">
          <Skills />
          <div className="flex-1 flex flex-col gap-3">
            <CurrentlyBuilding />
            <CurrentlyLearning />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
