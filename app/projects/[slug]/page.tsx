import { homeProjectData } from "@/data";

async function page({ params }: { params: { slug: string } }) {
  const project = homeProjectData.find((p) => p.id == params.slug);

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
        <p className="text-[15px] md:text-base">{project.projectPage?.overview}</p>
      </div>

      <div className="features flex flex-col gap-4">
        <h1 className="font-[600] mt-5 text-xl md:text-2xl tracking-tight lg:text-3xl">
          Features 🌟
        </h1>
        <hr className="w-full h-[1.5px] bg-black" />
        <ul className="features-list flex flex-col gap-3 pl-4 md:pl-10">
          {project.projectPage?.features.map((feature, index) => (
            <li key={index}>
              <span>{feature.title}: </span> {feature.content}
            </li>
          ))}
        </ul>
      </div>

      <div className="technologies flex flex-col gap-4">
        <h2 className="font-[600] mt-5 text-xl md:text-2xl tracking-tight lg:text-3xl">
          Technologies used 🛠️
        </h2>
        <hr className="w-full h-[1.5px] bg-black" />
        <ul className="features-list flex flex-col gap-3 pl-4 md:pl-10">
          {project.projectPage?.technologies.map((tech, index) => (
            <li key={index}>
              <span>{tech.title}: </span> <span>{ tech.content}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="links flex flex-col gap-4">
        <h2 className="font-[600] mt-5 text-xl md:text-2xl tracking-tight lg:text-3xl">
          Links 🔗
        </h2>
        <hr className="w-full h-[1.5px] bg-black" />
        <p className="pl-10">
          <span>Github repo: </span>
          <a
            href={project.projectPage?.links[0]?.github}
            className="text-blue-500 underline"
            target="_blank"
          >
            Here
          </a>
        </p>
        <p className="pl-10">
          <span>Live: </span>
          {project.projectPage?.links && project.projectPage.links.length > 0 ? (
            <a
              href={project.projectPage?.links[1]?.live}
              className="text-blue-500 underline"
              target="_blank"
            >
              Visit
            </a>
          ) : (
            "Not live"
          )}
        </p>
      </div>
    </div>
  );
}

export default page;
