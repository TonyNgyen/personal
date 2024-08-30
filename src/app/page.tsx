import About from "@/components/about/about";
import Blog from "@/components/blog/blog";
import Contact from "@/components/contact/contact";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}
