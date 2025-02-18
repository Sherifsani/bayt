export const homeProjectData = [
  {
    id: 1,
    src: "project-1.png",
    title: "Wordpress App deployment",
    description:
      "Deployed a wordpress image on AWS ECS using best practices and ensured high availability all managed through terraform",
    stack: ["aws", "terraform", "ecs", "rds"],
    projectPage: {
      overview:
        "This project demonstrates the automated deployment of a secure WordPress website on AWS using Terraform for infrastructure provisioning. The setup includes Amazon ECS (Elastic Container Service) with Fargate as the launch type, Amazon RDS for database management, and Amazon EFS for persistent storage. Application Load Balancer (ALB) is used to serve the ECS tasks running in private subnets for enhanced security. The architecture is designed for scalability, high availability, and security, ensuring that the WordPress application can handle varying levels of traffic and maintain data integrity.This project demonstrates the automated deployment of a secure WordPress website on AWS using Terraform for infrastructure provisioning.The architecture is designed for scalability, high availability, and security, ensuring that the WordPress application can handle varying levels of traffic and maintain data integrity.",
      features: [
        "Infrastructure as Code (IaC): Full infrastructure provisioning using Terraform.",
        "ECS with Fargate: Containerized WordPress deployment with the flexibility of Fargate, enabling serverless computing.",
        "RDS: Managed database service for MySQL to store WordPress data.",
        "Secure Setup: IAM roles, security groups, and access management configured to ensure secure communication and access to resources.",
        "Application Load Balancer: Configured to distribute traffic evenly across ECS tasks deployed in private subnets, ensuring high availability.",
        "Scalability: Auto-scaling capabilities for both ECS tasks and RDS instances based on demand.",
        "Persistent Storage: Integration of Amazon EFS for shared storage between containers.",
      ],
      technologies: ["Aws", "Terraform", "Ecs", "Rds", "Efs", "Alb"],
      links: [
        {
          github:
            "https://github.com/Sherifsani/scalable-wordpress-app-terraform",
        },
      ],
    },
  },
  {
    id: 2,
    src: "project-2.png",
    title: "Serverless Notification",
    description:
      "This project is an AWS-powered notification service that allows sending emails or SMS messages to users. It leverages Lambda, SNS, SES, Step Functions, and API Gateway for serverless functionality and scalability.",
    stack: ["lambda", "steps", "sns", "ses", "api"],
  },
  {
    id: 3,
    src: "project-3.png",
    title: "Nba Gameday",
    description:
      "I built an application that uses lambda to fetch nba scores result,processes it and sends an email/sms to users. The function runs on a schedule defined in amazon event-bridge and uses sns for notifications",
    stack: ["lambda", "event-bridge", "sns"],
  },
  {
    id: 4,
    src: "project-4.png",
    title: "pixalot",
    description:
      "Pixalot is web app that allows users to lookup and download images from pexels. It uses the pexels API to fetch images and display them to the user",
    stack: ["html", "javascript", "api", "tailwindcss"],
  },
];
