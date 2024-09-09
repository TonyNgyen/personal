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
    if (latest > previous && latest > 150) {
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
          <Link href="">LinkedIn</Link>
          <Link href="">Resume</Link>
        </div>
        <ModeToggle />
      </div>
    </motion.nav>
  );
}

export default Navbar;
