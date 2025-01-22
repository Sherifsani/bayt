"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-32 flex flex-col gap-3">
      <div className="text-5xl">👋</div>
      <h1 className="font-[500] text-lg">Hello there, I'm Sherif Sani</h1>
      <motion.p
        className="text-[15px]"
        initial={{ opacity: 0, translateX: "-100%" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.4 }}
      >
        I am an aspiring{" "}
        <span className="text-[#565454] px-[.2rem] bg-[#eceaea] rounded-md">
          cloud engineer
        </span>{" "}
        that enjoys building things for the web. I’m also a Frontend Engineer
        who crafts beautiful and functional sites, making things work better.
      </motion.p>
      <motion.p
        className="text-[15px]"
        initial={{ opacity: 0, translateX: "-100%" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.4 }}
      >
        As a Computer Science major, I’m passionate about cloud computing and
        helping systems grow and scale. I enjoy building things that are not
        only efficient but also easy to use.
      </motion.p>
    </div>
  );
};

export default Hero;
