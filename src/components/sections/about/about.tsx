import React from "react";
import { Switch } from "@/components/ui/switch";
import AboutMe from "./aboutMe/aboutMe";
import WorkHistory from "./aboutMe/workHistory";
import Image from "next/image";
import Skills from "./aboutMe/skills";

function About() {
  return (
    <div className="bg-black border-y-zinc-300 border bg-opacity-15">
      <div
        className="h-screen w-7/12 mx-auto p-10 flex flex-col gap-3 "
        id="about"
      >
        <h1 className="mx-auto text-3xl font-bold text-zinc-50 mb-10">
          Career
        </h1>
        <div className="flex-1 flex gap-3">
          <AboutMe />
          <WorkHistory />
        </div>
        <div className="flex-1 flex gap-3">
          <Skills />
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 rounded-lg bg-zinc-800 border-stone-400 border p-5">
              <h1 className="text-2xl font-bold">Tech Stack</h1>
            </div>
            <div className="flex-1 rounded-lg bg-zinc-800 border-stone-400 border p-5">
              <h1 className="text-2xl font-bold">Currently Building</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
