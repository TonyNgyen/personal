import React from "react";

function WorkHistory() {
  return (
    <div className="flex-1 bg-dottedBG border-zinc-600 border rounded-lg p-5 flex flex-col">
      <h1 className="text-2xl font-bold">Work History</h1>
      <h2 className="text-xl font-semibold">Choir Power</h2>
      <h3 className="text-sm dark:text-zinc-400 text-zinc-500">Software Engineering Intern</h3>
      <h4 className="text-sm mb-1">
        Feb 2024 - <span className="text-white">April 2025</span>
      </h4>
      <ul className="list-disc list-outside pl-5">
        <li>
          Developed an informational dashboard containing graphs using React,
          HTML, and CSS
        </li>
        <li>
          Integrated existing AWS API with dashboard to provide real time
          updates to dashboard for users
        </li>
        <li>Translated exported machine learning code into python for AWS</li>
      </ul>
    </div>
  );
}

export default WorkHistory;
