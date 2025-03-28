import { homeProjectData } from "@/data";

interface Feature {
  title: string;
  content: string;
}

interface ProjectLink {
  title: string;
  url: string;
}

interface ProjectPage {
  overview: string;
  features: Feature[];
  technologies: string[];
  links: ProjectLink[];
}

interface Project {
  id: number;
  title: string;
  src: string;
  projectPage: ProjectPage;
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = homeProjectData.find((p) => p.id === parseInt(params.slug)) as Project | undefined;

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <p className="text-gray-500 mt-2">
          The requested project does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="project-page flex flex-col gap-10 mb-40">
      <div className="head mt-16 grid grid-cols-1 gap-5">
        <div className="img w-full grid place-items-center overflow-hidden">
          <img
            src={`/${project.src}`}
            alt={project.title}
            className="w-full md:w-4/5 mx-auto rounded-md shadow-sm"
          />
        </div>
        <h1 className="font-[600] mt-5 text-2xl md:text-3xl tracking-tight lg:text-4xl">
          {project.title}
        </h1>
        <hr className="w-full h-[1.5px] bg-black" />
        <p className="text-[15px] md:text-base">{project.projectPage.overview}</p>
      </div>

      <div className="features flex flex-col gap-4">
        <h1 className="font-[600] mt-5 text-xl md:text-2xl tracking-tight lg:text-3xl">
          Features 🌟
        </h1>
        <hr className="w-full h-[1.5px] bg-black" />
        <ul className="features-list flex flex-col gap-3 pl-4 md:pl-10">
          {project.projectPage.features.map((feature, index) => (
            <li key={index} className="flex flex-col">
              <span className="font-medium">{feature.title}</span>
              <span className="text-gray-600">{feature.content}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="technologies flex flex-col gap-4">
        <h2 className="font-[600] mt-5 text-xl md:text-2xl tracking-tight lg:text-3xl">
          Technologies used 🛠️
        </h2>
        <hr className="w-full h-[1.5px] bg-black" />
        <ul className="tech-list flex flex-col gap-3 pl-4 md:pl-10">
          {project.projectPage.technologies.map((tech, index) => (
            <li key={index} className="text-gray-600">{tech}</li>
          ))}
        </ul>
      </div>

      <div className="links flex flex-col gap-4">
        <h2 className="font-[600] mt-5 text-xl md:text-2xl tracking-tight lg:text-3xl">
          Project Links 🔗
        </h2>
        <hr className="w-full h-[1.5px] bg-black" />
        <div className="flex gap-4">
          {project.projectPage.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
