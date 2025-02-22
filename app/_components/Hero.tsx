"use client";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const greetings = [
    "Hello!",
    "Bonjour!",
    "Hola!",
    "Ciao!",
    "Hallo!",
    "Olá!",
    "Salam!",
  ];

  // Variants for fade-in animations
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="mt-32 flex flex-col gap-8 md:gap-10 overflow-hidden mx-auto">
      {/* Emoji with fade-in */}
      <motion.div
        className="text-4xl"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        👋
      </motion.div>

      {/* Title with fade-in */}
      <motion.h1
        className="font-[600] -mt-5 text-2xl md:text-3xl tracking-tight lg:text-4xl"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
      >
        <FlipWords words={greetings} /> I'm Sherif
      </motion.h1>

      {/* Paragraphs with staggered fade-ins */}
      <motion.p
        className="text-[15px] md:text-base"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      >
        I am an aspiring{" "}
        <span className="text-[#565454] px-[.2rem] bg-[#eceaea] rounded-md">
          cloud engineer
        </span>{" "}
        that enjoys building things for the web. I’m also a Frontend Engineer{" "}
        <br className="hidden lg:flex" />
        who crafts beautiful and functional sites, making things work better.
      </motion.p>

      <motion.p
        className="text-[15px] md:text-base"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
      >
        As a Computer Science major, I’m passionate about cloud computing and
        helping systems grow and <br className="hidden lg:flex" />
        scale. I enjoy building things that are not only efficient but also easy
        to use.
      </motion.p>
    </div>
  );
};

export default Hero;
