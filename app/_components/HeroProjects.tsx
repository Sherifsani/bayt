"use client";

import React from "react";
import ProjectCard from "./micros/ProjectCard";
import { motion } from "framer-motion";
import { homeProjectData } from "../../data/index";

const HeroProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-4">
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="font-[600] text-2xl md:text-3xl tracking-tight"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-gray-600 max-w-2xl"
            >
              Here are some of my recent projects that showcase my skills in cloud engineering and web development.
            </motion.p>
          </div>

          {/* Project Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {homeProjectData.map(
              (project, index) =>
                project.id < 4 && (
                  <ProjectCard
                    id={project.id}
                    key={index}
                    title={project.title}
                    src={`/${project.src}`}
                    description={project.description}
                    stack={project.stack}
                  />
                )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroProjects;
