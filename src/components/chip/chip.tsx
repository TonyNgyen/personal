import React from "react";

function Chip({ content, color }: { content: string; color: string }) {
  console.log(color)
  return (
    <div className={`mx-1 inline-block whitespace-nowrap text-sm px-3 rounded-full py-[0.1rem] border-white border bg-[${color}] text-white`}>
      {content}
    </div>
  );
}

export default Chip;
