import { desc } from "motion/react-client";

export const homeProjectData = [
  {
    id: 1,
    src: "project-1.png",
    title: "Wordpress App deployment",
    description:
      "Deployed a wordpress image on AWS ECS using best practices and ensured high availability all managed through terraform",
    stack: ["aws", "terraform", "ecs", "rds"],
  },
  {
    id: 2,
    src: "project-2.png",
    title: "Serverless Notification",
    description:
      "This project is an AWS-powered notification service that allows sending emails or SMS messages to users. It leverages Lambda, SNS, SES, Step Functions, and API Gateway for serverless functionality and scalability.",
    stack: [ "lambda", "steps", "sns", "ses", "api-gateway"],
},
{
    id: 3,
    src: "project-2.png",
    title: "Serverless Notification",
    description:
    "This project is an AWS-powered notification service that allows sending emails or SMS messages to users. It leverages Lambda, SNS, SES, Step Functions, and API Gateway for serverless functionality and scalability.",
    stack: ["aws", "terraform", "ecs", "rds"],
},
];

