import Link from "next/link";
import React from "react";

function CurrentlyBuilding() {
  const project = {
    name: "GymTracker",
    image: "/gymtracker.png",
  };

  return (
    <div className="flex-1 rounded-lg bg-zinc-800 border-stone-400 border p-5 flex-col flex">
      <h1 className="text-2xl font-bold mb-4">Currently Building</h1>
      <div className="h-full rounded-lg flex items-center gap-10 justify-center">
        <img src={project.image} className="h-40 rounded-lg" />
        <div>
          <h1 className="text-white text-3xl font-bold mb-2">{project.name}</h1>
          <Link href="" className="text-lg px-2 py-1 rounded-md border-zinc-300 border bg-zinc-600 font-semibold">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CurrentlyBuilding;
