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
          <Link href="https://www.linkedin.com/in/tony-nguyen-813923212/">
            LinkedIn
          </Link>
          <Link href="https://docs.google.com/document/d/e/2PACX-1vTl_OLDhN3T-L3-Zk9schOdI6CgD9cAxHA-YNwx69YZJIbLwTdrYm_1Z-Dl8ueaeLu9Af1wByd06iMf/pub">
            Resume
          </Link>
        </div>
        {/* <ModeToggle /> */}
      </div>
    </motion.nav>
  );
}

export default Navbar;
