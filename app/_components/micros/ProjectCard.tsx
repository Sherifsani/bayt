"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: number;
  title: string;
  src: string;
  description: string;
  stack: string[];
}

const ProjectCard = ({
  id,
  title,
  src,
  description,
  stack,
}: ProjectCardProps) => {
  return (
    <Link
      href={`/projects/${id}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 md:grid md:grid-cols-[35fr_65fr]"
    >
      <div className="relative h-48 md:h-full overflow-hidden bg-gray-100">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-6 py-10 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
            {title}
          </h3>

          <p className="mt-3 text-sm text-gray-600">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {Array.isArray(stack) &&
            stack.map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200"
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
