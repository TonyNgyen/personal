import React from "react";

interface Information {
  name: string;
  description: string;
  image: string;
  technologies: string[];
}

function HeroCard({ data }: { data: Information }) {
  return <div>{data.name}</div>;
}

export default HeroCard;
