import React from "react";

function Chip({ technology }: { technology: string }) {
  return <div className="text-sm px-3 rounded-full py-[0.1rem] font-light border-white border">{technology}</div>;
}

export default Chip;
