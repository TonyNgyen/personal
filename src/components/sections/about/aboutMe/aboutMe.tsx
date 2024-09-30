"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";

function AboutMe() {
  const [career, setCareer] = useState<boolean>(false);
  return (
    <div className="flex-1 bg-zinc-800 border-stone-400 border rounded-lg p-5">
      <div className="flex flex-col mb-2">
        <h1 className="text-2xl font-bold">About Me</h1>
        <div className="flex items-center space-x-2">
          <Switch
            id="airplane-mode"
            className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-zinc-100"
            onCheckedChange={() => setCareer(!career)}
          />
          {!career ? (
            <h2 className="text-xl font-semibold">Career</h2>
          ) : (
            <h2 className="text-xl text-green-400 font-semibold">Personal</h2>
          )}
        </div>
      </div>

      {!career ? (
        <h2 className="leading-8">
          I&apos;m a software engineer with a focus on full-stack development. I
          primarily specialize in React, NextJS, JavaScript, and MongoDB but am
          open to utilizing the many techhnologies I am experienced in as well
          as learning new ones.
        </h2>
      ) : (
        <h2 className="leading-8">
          Hey this is for getting to know me outside of my career! I love to
          explore new restaurants and expose myself to new experiences and food.
          On my freetime, besides working on side projects, I like to go to the
          gym and watch NBA basketball.
        </h2>
      )}
    </div>
  );
}

export default AboutMe;
