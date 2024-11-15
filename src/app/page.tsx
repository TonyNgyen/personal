"use client";

import React, { useEffect, useState } from "react";
import About from "@/components/sections/about/about";
import Blog from "@/components/sections/blog/blog";
import Contact from "@/components/sections/contact/contact";
import Hero from "@/components/sections/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Projects from "@/components/sections/projects/projects";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { auth } from "@/app/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState<object | null>(null); // State to hold the authenticated user

  // Set up auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state when auth state changes
      console.log("User:", currentUser); // Log the user data (or null if not signed in)
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);
  return (
    <main className="bg-zinc-900 inset-0">
      {user ? (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Blog />
          <Contact />
        </>
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Blog />
          <Contact />
        </>
      )}
    </main>
  );
}
