import React from "react";

function Chip({ content, color }: { content: string; color: string }) {
  return (
    <div
      className={`mx-1 inline-block whitespace-nowrap text-xs font-semibold px-3 rounded-full py-[0.1rem] border-zinc-300 border text-white`}
      style={{ backgroundColor: color }}
    >
      {content}
    </div>
  );
}

export default Chip;
