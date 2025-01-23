"use client";

import { motion } from "framer-motion";
import { BiLogoLinkedin, BiLogoWhatsapp } from "react-icons/bi";

const page = () => {
  // Variants for the images
  const imageVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.3, // Stagger the appearance
        duration: 0.6,
      },
    }),
  };

  const images = [
    { src: "/sherif-1.png", className: "rounded-md rotate-3 shadow-lg" },
    { src: "/sherif-3.png", className: "rounded-md -rotate-6 shadow-lg" },
    { src: "/sherif-2.png", className: "rounded-md -rotate-12 shadow-lg" },
    { src: "/sherif-1.png", className: "rounded-md shadow-lg" },
  ];

  return (
    <main className="mt-32 flex flex-col gap-8 md:gap-10">
      <section className="intro flex flex-col gap-2">
        <div className="text-4xl">💬</div>
        <h1 className="font-[600] text-2xl md:text-3xl tracking-tight lg:text-4xl">
          About me
        </h1>
      </section>

      <section className="image-showcase grid grid-cols-2 gap-10 md:grid-cols-4">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            className={image.className}
            alt=""
            variants={imageVariants}
            custom={index} // Pass the index for stagger
            initial="hidden"
            animate="visible"
          />
        ))}
      </section>

      <section className="me flex flex-col gap-4">
        <p className="">
          Welcome to my home!{" "}
          <span className="p-[.2rem] bg-slate-100 rounded-md">
            مرحبا بكم في بيتي{" "}
          </span>
          . I am Sani Sherif, a student of knowledge and a lover of technology.
          I am a computer science major who is passionate about cloud computing
          and enjoys building scalable and efficient systems.
        </p>
        <p>
          I started out as a Frontend developer then transitioned to the cloud
          when I discovered the world of cloud computing. I am currently
          learning and building projects with AWS and have two certifications
          under my belt:
          <br />{" "}
          <span className="p-[.2rem] bg-slate-100 rounded-md">
            AWS Certified Solutions Architect Associate
          </span>{" "}
          -{" "}
          <span className="p-[.2rem] bg-slate-100 rounded-md">
            AWS Certified Cloud Practitioner
          </span>{" "}
        </p>
        <p>
          Over the years, I've built a range of projects, from deploying secure
          WordPress sites on AWS via Terraform to developing dynamic,
          user-friendly applications using modern frameworks. My technical
          expertise spans across React, TypeScript, Tailwind CSS, and AWS
          services like S3, ECS, Lambda, and Fargate.
        </p>

        <p>
          When I'm not coding, you'll find me balancing my passion for
          technology with my devotion to faith (islam) and personal growth. I'm
          also an avid learner, currently deep-diving into DevOps practices and
          cloud engineering to expand my skill set further.
        </p>

        <p>
          I believe that technology has the power to transform lives, and I'm on
          a mission to contribute by building impactful, scalable solutions.
          Whether it's creating seamless user experiences, writing insightful
          blogs, or sharing knowledge with the tech community, I aim to leave a
          mark that inspires others.
        </p>

        <p>
          If you're looking for someone who's driven, innovative, and ready to
          tackle challenges head-on, let's connect. Together, we can create
          something remarkable!
        </p>
      </section>
      <div className="accolades flex gap-3">
        <a href="https://www.credly.com/badges/9c7e7825-af0e-47c2-ad09-7f93d92ca751/public_url">
          <img src="/cert-1.png" alt="" />
        </a>
        <a href="https://www.credly.com/badges/b9349152-c99a-4924-ac22-427df8723e9c/public_url">
          <img src="/cert-2.png" alt="" />
        </a>
      </div>
      <div className="social flex justify-end gap-2 py-10">
        <a href="wa.me/+2348060517731">
          <BiLogoWhatsapp className="text-3xl text-[#25d366]" />
        </a>
        <a href="https://www.linkedin.com/in/sherif-sani/">
          <BiLogoLinkedin className="text-3xl text-[#0077b5]" />
        </a>
      </div>
    </main>
  );
};

export default page;
