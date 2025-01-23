import {
  FaAws,
  FaJava,
  FaDocker,
  FaPython,
  FaJenkins,
  FaLinux,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitlab } from "react-icons/fa6";

const SkillBanner = () => {
  return (
    <div className="relative overflow-hidden mt-10 py-10 -100">
      {/* Blur effect on the left */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-10"></div>

      {/* Blur effect on the right */}
      <div className="absolute top-0 right-0 h-full w-20  pointer-events-none z-10"></div>

      {/* Scrolling icons */}
      <div className="animate-scroll flex gap-6 w-[calc(100%*2)]">
        {/* Duplicate icons for seamless scroll */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-8">
            <FaAws size={20} />
            <FaJava size={20} />
            <FaDocker size={20} />
            <FaPython size={20} />
            <FaJenkins size={20} />
            <FaLinux size={20} />
            <IoLogoJavascript size={20} />
            <FaGitlab size={20} />
            <FaReact size={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBanner;
