import React from "react";

function Chip({ technology }: { technology: string }) {
  return (
    <div className="mx-1 inline-block whitespace-nowrap text-sm px-3 rounded-full py-[0.1rem] border-white border bg-green-700 text-white">
      {technology}
    </div>
  );
}

export default Chip;
