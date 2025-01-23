import React from "react";
import ProjectCard from "./micros/ProjectCard";
import Image from "next/image";
import { homeProjectData } from "../../data/index";

const HeroProjects = () => {
  return (
    <section className="hero-projects my-20 flex flex-col gap-4">
      <h2 className="font-[500] text-lg md:text-xl tracking-tight ">
        What I've been working on
      </h2>
      <div className="project-grid grid gap-10">
        {homeProjectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            src={`/${project.src}`}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroProjects;
