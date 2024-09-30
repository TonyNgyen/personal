"use client";

import ProjectCard from "@/components/cards/projectCard/projectCard";
import React, { useState } from "react";
import styles from "./projects.module.css";

function Projects() {
  const [isHovered, setIsHovered] = useState<number | undefined>(0);
  const [isMobile, setIsMobile] = useState<boolean | undefined>(false);
  type Skill = {
    name: string;
    color: string;
    svg: string;
  };
  const skills: { [key: string]: Skill } = {
    nextjs: {
      name: "NextJS",
      color: "#111111",
      svg: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    react: {
      name: "React",
      color: "#0485a7",
      svg: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    javascript: {
      name: "Javascript",
      color: "#c5b218",
      svg: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
    },
    html: {
      name: "HTML",
      color: "#9f351b",
      svg: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    },
    css: {
      name: "CSS",
      color: "#111111",
      svg: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    },
    tailwindcss: {
      name: "Tailwind CSS",
      color: "#111111",
      svg: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    },
    sql: {
      name: "SQL",
      color: "#111111",
      svg: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
    },
    mongodb: {
      name: "MongoDB",
      color: "#111111",
      svg: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    },
    python: {
      name: "Python",
      color: "#111111",
      svg: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    },
    bootstrap: {
      name: "Bootstrap",
      color: "#111111",
      svg: "https://cdn.worldvectorlogo.com/logos/bootstrap-5.svg",
    },
    java: {
      name: "Java",
      color: "#111111",
      svg: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
    },
    c: {
      name: "C",
      color: "#111111",
      svg: "https://cdn.worldvectorlogo.com/logos/c-1.svg",
    },
    cpp: {
      name: "C++",
      color: "#111111",
      svg: "https://cdn.worldvectorlogo.com/logos/c.svg",
    },
    flask: {
      name: "Flask",
      color: "#111111",
      svg: "https://cdn.worldvectorlogo.com/logos/flask.svg",
    },
    pandas: {
      name: "Pandas",
      color: "#111111",
      svg: "https://cdn.worldvectorlogo.com/logos/pandas.svg",
    },
  };
  const projects = [
    {
      name: "GymTracker",
      description: "A web app that helps people track their workouts",
      longDescription: "A web app that helps people track their workouts",
      image: "/gymtracker.png",
      tag: "",
      technologies: [
        "react",
        "nextjs",
        "html",
        "tailwindcss",
        "mongodb",
        "css",
        "javascript",
      ],
      link: "",
      colors: {
        dark: ["207", "74", "85"],
        light: ["207", "74", "45"],
      },
    },
    {
      name: "K-Calendar",
      description: "This website displays upcoming releases in K-Pop!",
      longDescription:
        "This website displays upcoming releases in K-Pop! Additionally, it also serves as an informational hub for K-Pop as users can view past releases from artists.",
      image: "/kcalendar.png",
      tag: "",
      technologies: [
        "react",
        "nextjs",
        "html",
        "tailwindcss",
        "mongodb",
        "python",
        "java",
        "c",
        "cpp",
        "pandas",
        "flask",
        "bootstrap",
      ],
      link: "",
      colors: {
        dark: ["0", "100", "77"],
        light: ["207", "74", "45"],
      },
    },
    {
      name: "Personal Website / Blog",
      description: "My personal website that also doubles as my blog!",
      longDescription:
        "My personal website that shows all of my skills and projects! It also serves as my blog where I post about updates to my projects and what I've been up to. There is a dashboard to this website that I use to add skills, projects, and blogs without needing to go directly into the code!",
      image: "/personalWebsite.png",
      tag: "",
      technologies: ["react", "nextjs", "html", "tailwindcss", "mongodb"],
      link: "",
      colors: {
        dark: ["142", "69", "58"],
        light: ["207", "74", "45"],
      },
    },
    {
      name: "Demo Blog",
      description: "A blog website that I built when learning Fullstack",
      longDescription: "A web app that helps people track their workouts",
      image: "/blog.png",
      tag: "",
      technologies: ["react", "nextjs", "html", "tailwindcss", "mongodb"],
      link: "",
      colors: {
        dark: ["207", "74", "85"],
        light: ["207", "74", "45"],
      },
    },
  ];

  return (
    <div
      className="bg-[radial-gradient(#2f2f30_1px,transparent_1px)] [background-size:24px_24px]"
      id="projects"
    >
      <div className="w-10/12 mx-auto p-10 flex flex-col gap-3">
        <h1 className="mx-auto text-3xl font-bold text-zinc-50 mb-10">
          Projects
        </h1>
        <div className="flex gap-4">
          <div className="gap-4 flex-1 grid grid-cols-2">
            {projects.map((project, index) => (
              <div
                className={`bg-zinc-900 rounded-lg shadow-lg transition-all z-0`}
                key={index}
              >
                <div
                  key={project.name}
                  className={`duration-300 rounded-lg shadow-lg transition-all z-0 ${
                    isHovered == index ? " opacity-100 " : " opacity-65 "
                  }`}
                  onMouseEnter={() => setIsHovered(index)}
                  style={{
                    boxShadow:
                      isHovered === index
                        ? `0px 0px 20px 0px hsl(${project.colors.dark[0]},${project.colors.dark[1]}%,${project.colors.dark[2]}%)`
                        : "",
                  }}
                >
                  <ProjectCard data={project} skills={skills} />
                </div>
              </div>
            ))}
          </div>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex-1 rounded-lg p-4 flex flex-col bg-zinc-800
                ${isHovered == index ? "" : "hidden"} `}
              style={{
                border:
                  isHovered === index
                    ? `3px solid hsl(${project.colors.dark[0]},${project.colors.dark[1]}%,${project.colors.dark[2]}%)`
                    : "",
              }}
            >
              <div className="flex gap-3 justify-start items-center mb-3">
                <h1 className="text-2xl">{project.name}</h1>
                <span
                  onClick={() => setIsMobile(!isMobile)}
                  className="px-2 py-1 bg-red-400 cursor-pointer rounded-lg"
                >
                  {isMobile ? "Mobile" : "Desktop"}
                </span>
              </div>
              {isMobile ? (
                <div className="flex h-full gap-3">
                  <div className="flex-1">
                    <div className="flex flex-col h-full gap-3">
                      <div className="flex-1 bg-white/10 rounded-lg px-3 py-2">
                        <h1 className="text-lg">Description</h1>
                        <div
                          className="w-[60px] h-[7px] rounded-full my-1"
                          style={{
                            backgroundColor:
                              isHovered === index
                                ? `hsl(${project.colors.dark[0]},${project.colors.dark[1]}%,${project.colors.dark[2]}%)`
                                : "",
                          }}
                        />
                        <h2>{project.longDescription}</h2>
                      </div>
                      <div className="flex-1 bg-white/10 rounded-lg px-3 py-2">
                        <h1 className="text-lg">Technologies</h1>
                        <div
                          className="w-[60px] h-[7px] rounded-full my-1"
                          style={{
                            backgroundColor:
                              isHovered === index
                                ? `hsl(${project.colors.dark[0]},${project.colors.dark[1]}%,${project.colors.dark[2]}%)`
                                : "",
                          }}
                        />
                        <div className="flex gap-6 flex-1 items-center overflow-y-auto flex-wrap justify-center">
                          {project.technologies.map((technology) => (
                            <img
                              className="w-1/4"
                              src={
                                skills[technology as keyof Object]?.svg ||
                                "default.svg"
                              }
                              alt={
                                skills[technology as keyof Object]?.name ||
                                "Unknown"
                              }
                              key={technology}
                            ></img>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 aspect-[9/19] flex bg-white/10 rounded-lg flex-1"></div>
                </div>
              ) : (
                <div className="flex h-full flex-col gap-3">
                  <div className="flex-1">
                    <div className="aspect-video bg-white/10 rounded-lg"></div>
                  </div>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="h-1/2 bg-white/10 rounded-lg px-3 py-2 overflow-y-auto">
                      <h1 className="text-lg">Description</h1>
                      <div
                        className="w-[60px] h-[7px] rounded-full my-1"
                        style={{
                          backgroundColor:
                            isHovered === index
                              ? `hsl(${project.colors.dark[0]},${project.colors.dark[1]}%,${project.colors.dark[2]}%)`
                              : "",
                        }}
                      />
                      <h2>{project.longDescription}</h2>
                    </div>
                    <div className="h-1/2 bg-white/10 rounded-lg px-3 py-2 flex flex-col">
                      <h1 className="text-lg">Technologies</h1>
                      <div
                        className="w-[60px] h-[7px] rounded-full my-1"
                        style={{
                          backgroundColor:
                            isHovered === index
                              ? `hsl(${project.colors.dark[0]},${project.colors.dark[1]}%,${project.colors.dark[2]}%)`
                              : "",
                        }}
                      />
                      <div>
                        <div className="flex gap-4 items-center overflow-x-auto">
                          {project.technologies.map((technology) => (
                            <img
                              className="w-[50px] h-[50px]"
                              src={
                                skills[technology as keyof Object]?.svg ||
                                "default.svg"
                              }
                              alt={
                                skills[technology as keyof Object]?.name ||
                                "Unknown"
                              }
                              key={technology}
                            ></img>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
