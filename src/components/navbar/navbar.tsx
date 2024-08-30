import React from "react";
import { ModeToggle } from "../ui/toggle-mode";
import Link from "next/link";
import styles from "./navbar.module.css"

function Navbar() {
  return (
    <div className="border-b border-b-white flex p-3 h-[100px] justify-evenly items-center gap-64">
      <div>Tony Nguyen</div>
      <div className="flex justify-center items-center gap-10">
        <div className="flex gap-10">
          <Link href="">LinkedIn</Link>
          <Link href="">Resume</Link>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
