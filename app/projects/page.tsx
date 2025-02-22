"use client";

import React from "react";
import { motion } from "framer-motion";
import { homeProjectData } from "@/data";
import ProjectCard from "../_components/micros/ProjectCard";

const page = () => {
  // Variants for the container (stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger timing for each child
      },
    },
  };

  // Variants for individual project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and below
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Fade in and slide up
  };

  // Variants for the header
  const headerVariants = {
    hidden: { opacity: 0, y: -30 }, // Start hidden and above
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Slide down and fade in
  };

  return (
    <div className="my-32">
      {/* Header with animation */}
      <motion.div
        className="flex flex-col gap-4 mb-10"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="text-4xl">🔨</div>
        <h1 className="font-[600] -mt-5 text-2xl md:text-3xl tracking-tight lg:text-4xl">
          Projects
        </h1>
      </motion.div>

      {/* Project grid with animation */}
      <motion.div
        className="project-grid grid gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {homeProjectData.map((project, index) => (
          <motion.div key={index} variants={cardVariants}>
            <ProjectCard
              id={project.id}
              title={project.title}
              src={`/${project.src}`}
              description={project.description}
              stack={project.stack}
            />
          </motion.div>
        ))}
          </motion.div>
    </div>
  );
};

export default page;
