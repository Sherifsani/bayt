import React from "react";
import ProjectCard from "./micros/ProjectCard";
import Image from "next/image";
import { homeProjectData } from "../../data/index";

const HeroProjects = () => {
  return (
    <section className="hero-projects mt-10 flex flex-col gap-4">
      <h2 className="font-[500]">What I've been up to...</h2>
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
