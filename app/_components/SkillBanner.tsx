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
    <div className="my-20 skill-banner flex w-full gap-3 items-center justify-center">
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
  );
};

export default SkillBanner;
