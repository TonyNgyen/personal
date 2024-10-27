"use client";

import React, { useEffect, useState } from "react";
import { ModeToggle } from "../ui/toggle-mode";
import Link from "next/link";
import styles from "./navbar.module.css";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous != undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 border-b border-b-white flex p-3 h-[90px] justify-evenly items-center gap-64 bg-black z-10"
    >
      <div>Tony Nguyen</div>
      <div className="flex justify-center items-center gap-10">
        <div className="flex gap-10">
          <a target="_blank" href="https://www.linkedin.com/in/tony-nguyen-813923212/">
            LinkedIn
          </a>
          <a target="_blank" href="https://docs.google.com/document/d/1c1VIMb0f4NvHtkpGKNBEzm41B6aP-Nyzv3LttYFZGYI/edit?usp=drive_link">
            Resume
          </a>
        </div>
        {/* <ModeToggle /> */}
      </div>
    </motion.nav>
  );
}

export default Navbar;
