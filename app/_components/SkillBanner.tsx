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
import Marquee from "react-fast-marquee";

const SkillBanner = () => {
  return (
    <div className="marquee">
      <Marquee className="marquee-content flex gap-8 py-10 mt-10">
        <FaAws size={20} className="mr-8" />
        <FaJava size={20} className="mr-8" />
        <FaDocker size={20} className="mr-8" />
        <FaPython size={20} className="mr-8" />
        <FaJenkins size={20} className="mr-8" />
        <FaLinux size={20} className="mr-8" />
        <IoLogoJavascript size={20} className="mr-8" />
        <FaGitlab size={20} className="mr-8" />
        <FaReact size={20} className="mr-8" />
      </Marquee>
    </div>
  );
};

export default SkillBanner;
