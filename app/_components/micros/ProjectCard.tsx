import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  id: number,
  title: string;
  src: string;
  description: string;
  stack: string[];
}

const ProjectCard = ({ id, title, src, description, stack }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${id}`} className="project-card flex flex-col gap-8 shadow-sm py-3 rounded-sm md:grid grid-flow-col  ">
      <img
        src={src}
        alt="project1"
        className="rounded-md  p-[2px] bg-[#22222212] w-[200px] h-[150px]"
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-[600]">{title}</h3>
        <p className="text-[15px] text-gray-600">{description}</p>
        <div className="flex gap-2 mt-auto">
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
    </Link>
  );
};

export default ProjectCard;
