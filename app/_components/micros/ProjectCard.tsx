import Image from "next/image";

interface ProjectCardProps {
  title: string;
  src: string;
  description: string;
  stack: string[];
}

const ProjectCard = ({ title, src, description, stack }: ProjectCardProps) => {
  return (
    <div className="project-card flex flex-col gap-3 shadow-sm py-3 rounded-sm">
      <img
        src={src}
        alt="project1"
        className="rounded-md w-1/2 h-auto p-1 bg-[#22222212]"
        width={100}
        height={100}
      />
      <h3 className="">{title}</h3>
      <p className="text-[15px] text-gray-600">{description}</p>
      <div className="flex gap-2">
        {Array.isArray(stack) &&
          stack.map((item, index) => (
            <span
              key={index}
              className="border rounded-full p-1 px-3 text-sm border-[#eceaea]"
            >
              {item}
            </span>
          ))}
      </div>
    </div>
  );
};

export default ProjectCard;
