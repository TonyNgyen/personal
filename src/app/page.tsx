import About from "@/components/sections/about/about";
import Blog from "@/components/sections/blog/blog";
import Contact from "@/components/sections/contact/contact";
import Hero from "@/components/sections/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Projects from "@/components/sections/projects/projects";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-zinc-900 inset-0">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}
