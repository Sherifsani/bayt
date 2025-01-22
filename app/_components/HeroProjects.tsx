import React from 'react'
import ProjectCard from './micros/ProjectCard'

const HeroProjects = () => {
  return (
    <section className="hero-projects mt-10 flex flex-col gap-4">
      <h2 className="font-[500]">What I've been up to...</h2>
      <div className="project-grid grid gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default HeroProjects