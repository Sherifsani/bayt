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
    stack: [ "lambda", "steps", "sns", "ses", "api"],
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
}
];

