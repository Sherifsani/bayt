"use client";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Sherifsani" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/sherif-sani" },
    { icon: FaTwitter, href: "https://twitter.com/sheriffsanni" },
  ];

  return (
    <div className="relative mt-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-8 md:gap-10">
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
              that enjoys building things for the web. I'm also a Frontend Engineer{" "}
              who crafts beautiful and functional sites, making things work better.
            </motion.p>

            <motion.p
              className="text-[15px] md:text-base"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
            >
              As a Computer Science major, I'm passionate about cloud computing and
              helping systems grow and scale. I enjoy building things that are not only
              efficient but also easy to use.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.9 }}
            >
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1, ease: "easeInOut", delay: 1.1 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Let's Connect
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            className="relative hidden md:block"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/profile.jpg"
                alt="Sherif Sani"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
