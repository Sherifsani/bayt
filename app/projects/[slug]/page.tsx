"use client";
import { homeProjectData } from "@/data";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SiAmazon, SiTerraform, SiDocker, SiPython, SiFlask, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { use } from "react";
import { ReactNode } from "react";

interface Feature {
  title: string;
  content: string;
}

interface ProjectLink {
  title: string;
  url: string;
}

interface ProjectPage {
  overview: string;
  features: Feature[];
  technologies: string[];
  links: ProjectLink[];
}

interface Project {
  id: number;
  title: string;
  src: string;
  projectPage: ProjectPage;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const getTechIcon = (tech: string): ReactNode => {
  const techMap: { [key: string]: ReactNode } = {
    // "AWS": <SiAmazon className="text-[#FF9900]" />,
    // "Terraform": <SiTerraform className="text-[#7B42BC]" />,
    // "Docker": <SiDocker className="text-[#2496ED]" />,
    // "Python": <SiPython className="text-[#3776AB]" />,
    // "Flask": <SiFlask className="text-black" />,
    // "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
    // "TypeScript": <SiTypescript className="text-[#3178C6]" />,
    // "React": <SiReact className="text-[#61DAFB]" />,
    // "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
    // "Next.js": <SiNextdotjs className="text-black" />,
  };

  // Find a matching key (case-insensitive and partial match)
  const key = Object.keys(techMap).find(k => 
    tech.toLowerCase().includes(k.toLowerCase())
  );

  return key ? techMap[key] : null;
};

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = homeProjectData.find((p) => p.id === parseInt(resolvedParams.slug)) as Project | undefined;

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
        <p className="text-gray-500 text-lg mb-8">
          The requested project does not exist.
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Back to Projects
        </motion.a>
      </div>
    );
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Hero Section */}
      <motion.div variants={fadeInUp} className="mb-16">
        <motion.div 
          className="relative aspect-video w-full overflow-hidden rounded-xl shadow-md mb-8"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={`/${project.src}`}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" /> */}
        </motion.div>

        <motion.h1 
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 bg-clip-text text-transparent"
        >
          {project.title}
        </motion.h1>

        <motion.p 
          variants={fadeInUp}
          className="text-lg text-gray-600 leading-relaxed max-w-3xl"
        >
          {project.projectPage.overview}
        </motion.p>
      </motion.div>

      {/* Features Section */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">✨</span>
          <h2 className="text-3xl font-bold">Key Features</h2>
        </div>
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {project.projectPage.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-purple-200 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Technologies Section */}
      <motion.div variants={fadeInUp} className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">🛠️</span>
          <h2 className="text-3xl font-bold">Tech Stack</h2>
        </div>
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {project.projectPage.technologies.map((tech, index) => {
            const icon = getTechIcon(tech);
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-purple-200 shadow-sm transition-all duration-200"
              >
                <div className="w-8 h-8 grid place-items-center text-2xl">
                  {icon}
                </div>
                <span className="text-gray-700 font-medium">{tech}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Links Section */}
      <motion.div variants={fadeInUp}>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">🔗</span>
          <h2 className="text-3xl font-bold">Project Links</h2>
        </div>
        <motion.div 
          variants={staggerContainer}
          className="flex flex-wrap gap-4"
        >
          {project.projectPage.links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
            >
              {link.title === "GitHub" ? <FiGithub className="text-xl" /> : <FiExternalLink className="text-xl" />}
              {link.title}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
