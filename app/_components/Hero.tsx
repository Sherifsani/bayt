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
  return (
    <div className="mt-32 flex flex-col gap-8 md:gap-10">
      <div className="text-4xl">👋</div>
      <h1 className="font-[600] -mt-5 text-2xl md:text-3xl tracking-tight lg:text-4xl">
            <FlipWords words={ greetings} /> I'm Sherif
      </h1>
      <motion.p
        className="text-[15px] md:text-base"
        initial={{ opacity: 0, translateX: "-100%" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.4 }}
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
        initial={{ opacity: 0, translateX: "-100%" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.4 }}
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
