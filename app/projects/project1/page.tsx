import React from "react";

const page = () => {
  return (
    <div className="project-page flex flex-col gap-10 mb-40">
      <div className="head mt-16 grid grid-cols-1 gap-5">
        <div className="img w-full grid place-items-center overflow-hidden">
          <img
            src="/project-1.png"
            alt=""
            className="w-full md:w-4/5 mx-auto"
          />
        </div>
        <h1 className="font-[600] mt-5 text-2xl md:text-3xl tracking-tight lg:text-4xl">
          Scalable Wordpress Deployment
        </h1>
        <hr className="w-full h-[1.5px] bg-black" />

        <p className="flex flex-col gap-5 text-[15px] md:text-base">
          <span>
            This project demonstrates the automated deployment of a secure
            WordPress website on AWS using Terraform for infrastructure
            provisioning. The setup includes Amazon ECS (Elastic Container
            Service) with Fargate as the launch type, Amazon RDS for database
            management, and Amazon EFS for persistent storage. Application Load
            Balancer (ALB) is used to serve the ECS tasks running in private
            subnets for enhanced security. The architecture is designed for
            scalability, high availability, and security, ensuring that the
            WordPress application can handle varying levels of traffic and
            maintain data integrity.
          </span>
          <span>
            This project demonstrates the automated deployment of a secure
            WordPress website on AWS using Terraform for infrastructure
            provisioning.The architecture is designed for scalability, high
            availability, and security, ensuring that the WordPress application
            can handle varying levels of traffic and maintain data integrity.
          </span>
        </p>
      </div>

      <div className="features flex flex-col gap-4">
        <h1 className="font-[600] mt-5 text-xl md:text-2xl tracking-tight lg:text-3xl">
          Features 🌟
        </h1>
        <hr className="w-full h-[1.5px] bg-black" />
        <ul className="features-list flex flex-col gap-3 pl-4 md:pl-10">
          <li className="">
            <span>Infrastructure as Code (IaC):</span> Full infrastructure
            provisioning using Terraform.
          </li>
          Here are the data inserted into the format:
          <li className="">
            <span>RDS:</span> Managed database service for MySQL to store
            WordPress data.
          </li>
          <li className="">
            <span>Secure Setup:</span> IAM roles, security groups, and access
            management configured to ensure secure communication and access to
            resources.
          </li>
          <li className="">
            <span>Application Load Balancer:</span> Configured to distribute
            traffic evenly across ECS tasks
          </li>
          <li className="">
            <span>Scalability:</span> Auto-scaling capabilities for both ECS
            tasks and RDS instances based on demand.
          </li>
          <li className="">
            <span>Persistent Storage:</span> Integration of Amazon EFS for
            shared storage between containers.
          </li>
        </ul>
      </div>

      <div className="technologies flex flex-col gap-4">
        <h2 className="font-[600] mt-5 text-xl md:text-2xl tracking-tight lg:text-3xl">
          Technologies used 🛠️
        </h2>
        <hr className="w-full h-[1.5px] bg-black" />

        <ul className="features-list flex flex-col gap-3 pl-4 md:pl-10">
          <li className="">
            <span>Infrastructure as Code (IaC):</span> Full infrastructure
            provisioning using Terraform.
          </li>
          <li className="">
            <span>RDS:</span> Managed database service for MySQL to store
            WordPress data.
          </li>
          <li className="">
            <span>Secure Setup:</span> IAM roles, security groups, and access
            management configured to ensure secure communication and access to
            resources.
          </li>
          <li className="">
            <span>Application Load Balancer:</span> Configured to distribute
            traffic evenly across ECS tasks deployed in private subnets,
            ensuring high availability.
          </li>
          <li className="">
            <span>Scalability:</span> Auto-scaling capabilities for both ECS
            tasks and RDS instances based on demand.
          </li>
          <li className="">
            <span>Persistent Storage:</span> Integration of Amazon EFS for
            shared storage between containers.
          </li>
        </ul>
      </div>

      <div className="links flex flex-col gap-4">
        <h2 className="font-[600] mt-5 text-xl md:text-2xl tracking-tight lg:text-3xl">
          Links 🔗
        </h2>
        <hr className="w-full h-[1.5px] bg-black" />
        <p className="pl-10">
          <span>Github repo: </span>
          <a>Here</a>
        </p>

        <p className="pl-10">
          <span>Live: </span>
          <a>not live</a>
        </p>
      </div>
    </div>
  );
};

export default page;
