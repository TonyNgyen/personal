import React from "react";
import styles from "./hero.module.css";

function Hero() {
  return (
    <div className="bg-gray-700 h-[calc(100vh-100px)]">
      <div className="bg-red-900 h-1/2 flex justify-center items-center">
        <div className="w-[500px] bg-gray-400">
          <div className="w-[500px] h-[300px] flex justify-end items-center">Image</div>
        </div>
        <div className="w-[500px] bg-purple-400">
          <div className="w-[500px] h-[300px] flex justify-start items-center">Description</div>
        </div>
      </div>
      <div className="bg-blue-900 h-1/2">Bot</div>
    </div>
  );
}

export default Hero;
