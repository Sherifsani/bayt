import Image from "next/image";
import project1 from "../../../public/project-1.png";

const ProjectCard = () => {
  return (
    <div className="project-card flex flex-col gap-3">
      <Image src={project1} alt="project1" className="w-3/4 p-2 bg-[#eceaea] rounded-md" />
      <h3 className="">Wordpress App deployment</h3>
      <p className="text-[15px] text-gray-600">
        Deployed a wordpress image on AWS ECS using best practices and ensured
        high availability all managed through terraform
          </p>
          <div className="flex gap-2">
              <span className="border rounded-full p-1 text-sm border-[#eceaea]">aws</span>
              <span className="border rounded-full p-1 text-sm border-[#eceaea]">terraform</span>
              <span className="border rounded-full p-1 text-sm border-[#eceaea]">ecs</span>
              <span className="border rounded-full p-1 text-sm border-[#eceaea]">rds</span>
          </div>
    </div>
  );
};

export default ProjectCard;
