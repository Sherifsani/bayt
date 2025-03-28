"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const skills = [
  { src: "https://skillicons.dev/icons?i=aws", alt: "AWS" },
  { src: "https://skillicons.dev/icons?i=docker", alt: "Docker" },
  { src: "https://skillicons.dev/icons?i=python", alt: "Python" },
  { src: "https://skillicons.dev/icons?i=js", alt: "JavaScript" },
  { src: "https://skillicons.dev/icons?i=ts", alt: "TypeScript" },
  { src: "https://skillicons.dev/icons?i=react", alt: "React" },
  { src: "https://skillicons.dev/icons?i=nextjs", alt: "Next.js" },
  { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js" },
  { src: "https://skillicons.dev/icons?i=tailwind", alt: "Tailwind CSS" },
  { src: "https://skillicons.dev/icons?i=git", alt: "Git" },
  { src: "https://skillicons.dev/icons?i=linux", alt: "Linux" },
  { src: "https://skillicons.dev/icons?i=mongodb", alt: "MongoDB" },
];

const SkillBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-12 text-gray-900">
          Technologies I Work With
        </h2>
        
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* First Marquee - Left to Right */}
          <Marquee
            gradient={false}
            speed={40}
            className="py-6"
          >
            {skills.map((skill, index) => (
              <div
                key={`${skill.alt}-1-${index}`}
                className="mx-5 group relative"
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-gray-600 whitespace-nowrap bg-white px-2 py-1 rounded-md shadow-sm">
                    {skill.alt}
                  </span>
                </div>
              </div>
            ))}
          </Marquee>
          
          {/* Second Marquee - Right to Left */}
          {/* <Marquee
            gradient={false}
            speed={40}
            direction="right"
            className="py-6"
          >
            {skills.map((skill, index) => (
              <div
                key={`${skill.alt}-2-${index}`}
                className="mx-8 group relative"
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-gray-600 whitespace-nowrap bg-white px-2 py-1 rounded-md shadow-sm">
                    {skill.alt}
                  </span>
                </div>
              </div>
            ))}
          </Marquee> */}
        </div>
      </div>
    </section>
  );
};

export default SkillBanner;
