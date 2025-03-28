"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BiLogoLinkedin, BiLogoWhatsapp } from "react-icons/bi";
import { FaAws, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { useRef } from "react";

const page = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: index % 2 === 0 ? [0, -5, 0] : [0, 5, 0],
      transition: {
        delay: index * 0.2,
        duration: 0.8,
        rotate: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }
      },
    }),
    hover: {
      scale: 1.05,
      rotate: 0,
      transition: {
        duration: 0.3,
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  const skillVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const images = [
    { src: "/sherif-1.png", className: "rounded-2xl shadow-lg backdrop-blur-sm bg-white/30" },
    { src: "/sherif-3.png", className: "rounded-2xl shadow-lg backdrop-blur-sm bg-white/30" },
    { src: "/sherif-2.png", className: "rounded-2xl shadow-lg backdrop-blur-sm bg-white/30" },
    { src: "/sherif-1.png", className: "rounded-2xl shadow-lg backdrop-blur-sm bg-white/30" },
  ];

  return (
    <main className="mt-20 mb-20" ref={containerRef}>
      {/* Hero Section */}
      <motion.section 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-500 to-gray-600 bg-clip-text text-transparent"
            variants={contentVariants}
            animate={{
              backgroundPosition: ["0%", "100%"],
              transition: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            style={{ backgroundSize: "200%" }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={contentVariants}
          >
            Cloud Engineer & Full Stack Developer
          </motion.p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden group"
              variants={imageVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src={image.src}
                className={`w-full h-full object-cover ${image.className} transition-all duration-300 group-hover:scale-110`}
                alt="Sherif Sani"
              />
            </motion.div>
          ))}
        </div>

        {/* Content Sections */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          style={{
            scale,
            opacity
          }}
        >
          {/* Left Column */}
          <motion.div 
            className="space-y-6"
            variants={contentVariants}
          >
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-200 transition-colors duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <h2 className="text-2xl font-semibold mb-4">Background</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to my home!{" "}
                <span className="p-[.2rem] bg-slate-100 rounded-md">
                  مرحبا بكم في بيتي{" "}
                </span>
                . I am Sani Sherif, a student of knowledge and a lover of technology.
                I am a computer science major who is passionate about cloud computing
                and enjoys building scalable and efficient systems.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-200 transition-colors duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <h2 className="text-2xl font-semibold mb-4">Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                I started out as a Frontend developer then transitioned to the cloud
                when I discovered the world of cloud computing. I am currently
                learning and building projects with AWS and have earned:
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaAws className="text-[#FF9900]" />
                  <span>AWS Certified Solutions Architect Associate</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaAws className="text-[#FF9900]" />
                  <span>AWS Certified Cloud Practitioner</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-6"
            variants={contentVariants}
          >
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-200 transition-colors duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <h2 className="text-2xl font-semibold mb-4">Technical Expertise</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over the years, I've built a range of projects, from deploying secure
                WordPress sites on AWS via Terraform to developing dynamic,
                user-friendly applications using modern frameworks.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div 
                  className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full hover:bg-gray-100"
                  variants={skillVariants}
                  whileHover="hover"
                >
                  <FaReact className="text-[#61DAFB]" />
                  <span>React</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full hover:bg-gray-100"
                  variants={skillVariants}
                  whileHover="hover"
                >
                  <SiTypescript className="text-[#3178C6]" />
                  <span>TypeScript</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full hover:bg-gray-100"
                  variants={skillVariants}
                  whileHover="hover"
                >
                  <TbBrandNextjs className="text-black" />
                  <span>Next.js</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full hover:bg-gray-100"
                  variants={skillVariants}
                  whileHover="hover"
                >
                  <FaAws className="text-[#FF9900]" />
                  <span>AWS</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-200 transition-colors duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <h2 className="text-2xl font-semibold mb-4">Beyond Code</h2>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me balancing my passion for
                technology with my devotion to faith (islam) and personal growth. I'm
                also an avid learner, currently deep-diving into DevOps practices and
                cloud engineering to expand my skill set further.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="mt-16 text-center"
          variants={contentVariants}
        >
          <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/sherif-sani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
            >
              <BiLogoLinkedin className="w-6 h-6 text-[#0077B5]" />
            </a>
            <a
              href="https://wa.me/+2347066340180"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
            >
              <BiLogoWhatsapp className="w-6 h-6 text-[#25D366]" />
            </a>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default page;
