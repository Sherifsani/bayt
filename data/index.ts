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
        {
          title: "Infrastructure as Code (IaC)",
          content: "Full infrastructure provisioning using Terraform.",
        },
        {
          title: "ECS with Fargate",
          content:
            "Containerized WordPress deployment with the flexibility of Fargate, enabling serverless computing.",
        },
        {
          title: "RDS",
          content:
            "Managed database service for MySQL to store WordPress data.",
        },
        {
          title: "Secure Setup",
          content:
            "IAM roles, security groups, and access management configured to ensure secure communication and access to resources.",
        },
        {
          title: "Application Load Balancer",
          content:
            "Configured to distribute traffic evenly across ECS tasks deployed in private subnets, ensuring high availability.",
        },
        {
          title: "Scalability",
          content:
            "Auto-scaling capabilities for both ECS tasks and RDS instances based on demand.",
        },
        {
          title: "Persistent Storage",
          content:
            "Integration of Amazon EFS for shared storage between containers.",
        },
      ],
      technologies: [
        "Terraform",
        "AWS ECS (Fargate)",
        "Amazon RDS",
        "Amazon EFS",
        "IAM",
        "Security Groups",
        "Application Load Balancer"
      ],
      links: [
        {
          title: "GitHub",
          url: "https://github.com/Sherifsani/scalable-wordpress-app-terraform"
        }
      ]
    },
  },
  {
    id: 2,
    src: "project-2.png",
    title: "Serverless Notification",
    description:
      "This project is an AWS-powered notification service that allows sending emails or SMS messages to users. It leverages Lambda, SNS, SES, Step Functions, and API Gateway for serverless functionality and scalability.",
    stack: ["lambda", "steps", "sns", "ses", "api"],
    projectPage: {
      overview:
        "This project is an AWS-powered notification service that allows sending emails or SMS messages to users. It leverages Lambda, SNS, SES, Step Functions, and API Gateway for serverless functionality and scalability. The architecture is designed to provide high availability, cost efficiency, and ease of integration with other AWS services. By utilizing serverless computing, the system eliminates the need for managing underlying infrastructure while ensuring seamless message delivery.",
      features: [
        {
          title: "Email and SMS Notifications",
          content:
            "Supports sending email notifications using Amazon SES and SMS notifications using Amazon SNS.",
        },
        {
          title: "Serverless Architecture",
          content:
            "Built entirely with AWS serverless services, ensuring high scalability and minimal operational overhead.",
        },
        {
          title: "Workflow Orchestration",
          content:
            "AWS Step Functions manages the process flow for handling notification requests efficiently.",
        },
        {
          title: "API Gateway Integration",
          content:
            "RESTful endpoints exposed through Amazon API Gateway for external interaction.",
        },
        {
          title: "Input Validation and Error Handling",
          content:
            "Ensures proper request validation and logs errors to enhance reliability and debugging.",
        },
        {
          title: "Modular and Reusable Components",
          content:
            "Designed with reusability in mind, making it easy to extend or integrate with other services.",
        },
      ],
      technologies: [
        "AWS Lambda",
        "Amazon SNS",
        "Amazon SES",
        "AWS Step Functions",
        "Amazon API Gateway",
        "Terraform / CloudFormation (Optional)",
        "IAM (Identity and Access Management)",
        "AWS Security Groups"
      ],
      links: [
        {
          title: "GitHub",
          url: "https://github.com/Sherifsani/sendingApplication"
        }
      ]
    },
  },
  {
    id: 3,
    src: "project-3.png",
    title: "Nba Gameday",
    description:
      "I built an application that uses lambda to fetch nba scores result,processes it and sends an email/sms to users. The function runs on a schedule defined in amazon event-bridge and uses sns for notifications",
    stack: ["lambda", "event-bridge", "sns"],
    projectPage: {
      overview:
        "This project is an alert system that sends real-time NBA game day score notifications to subscribed users via SMS/Email. It leverages Amazon SNS, AWS Lambda, Python, Amazon EventBridge, and NBA APIs to provide sports fans with up-to-date game information. The system is designed to demonstrate cloud computing principles, automation, and efficient notification mechanisms.",
      features: [
        {
          title: "Live NBA Score Fetching",
          content: "Retrieves real-time NBA game scores using an external API.",
        },
        {
          title: "Automated Notifications",
          content:
            "Sends formatted score updates to subscribers via SMS/Email using Amazon SNS.",
        },
        {
          title: "Scheduled Updates",
          content:
            "Utilizes Amazon EventBridge to trigger automated score updates at regular intervals.",
        },
        {
          title: "Security Best Practices",
          content:
            "Follows the principle of least privilege by assigning minimal necessary IAM permissions to Lambda, SNS, and EventBridge.",
        },
      ],
      technologies: [
        "AWS Lambda",
        "Amazon SNS",
        "Amazon EventBridge",
        "NBA API (SportsData.io)",
        "Python 3.x",
        "IAM Security"
      ],
      links: [
        {
          title: "GitHub",
          url: "https://github.com/Sherifsani/nba-game-day-notifications"
        }
      ]
    },
  },
  {
    id: 4,
    src: "project-4.png",
    title: "pixalot",
    description:
      "Pixalot is web app that allows users to lookup and download images from pexels. It uses the pexels API to fetch images and display them to the user",
    stack: ["html", "javascript", "api", "tailwindcss"],
    projectPage: {
      overview:
        "Pixalot is a web app that allows users to search and download images from Pexels. It integrates with the Pexels API to fetch high-quality images and display them in a user-friendly interface. The app provides a seamless experience for discovering and downloading images with ease.",
      features: [
        {
          title: "Image Search",
          content: "Users can search for high-quality images using keywords.",
        },
        {
          title: "Pexels API Integration",
          content: "Fetches images dynamically from the Pexels API.",
        },
        {
          title: "Download Functionality",
          content: "Allows users to download images directly to their devices.",
        },
        {
          title: "Responsive Design",
          content: "Optimized for different screen sizes using Tailwind CSS.",
        },
      ],
      technologies: [
        "HTML",
        "JavaScript",
        "Pexels API",
        "Tailwind CSS"
      ],
      links: [
        {
          title: "GitHub",
          url: "https://github.com/Sherifsani/pixalot"
        },
        {
          title: "Live",
          url: ""
        }
      ]
    },
  },
  {
    id: 5,
    src: "project-5.png",
    title: "Containerized sports API",
    description:
      "This project showcases the development of a containerized API management system for querying sports data. It utilizes Amazon ECS (Fargate) to run containers, Amazon API Gateway to expose REST endpoints, and an external Sports API for real-time data retrieval. ",
    stack: ["python", "docker", "ecs", "alb", "api"],
    projectPage: {
      overview:
        "This project showcases the development of a containerized API management system for querying sports data. It utilizes Amazon ECS (Fargate) to run containers, Amazon API Gateway to expose REST endpoints, and an external Sports API (SerpAPI) for real-time NFL schedule retrieval. The implementation highlights advanced cloud computing concepts, including API management, container orchestration, and secure AWS integrations.",
      features: [
        {
          title: "NFL Schedule Retrieval",
          content:
            "Fetches NFL game schedules from Google search results via SerpAPI.",
        },
        {
          title: "Scalable and Serverless Architecture",
          content:
            "Runs on AWS ECS Fargate, allowing automated scaling without managing servers.",
        },
        {
          title: "Formatted JSON Responses",
          content:
            "Returns structured game details, including teams, venue, date, and time.",
        },
        {
          title: "AWS-Powered Deployment",
          content:
            "Utilizes ECS Fargate, ALB, and API Gateway for seamless API hosting.",
        },
        {
          title: "Secure Container Management",
          content:
            "Uses Amazon Elastic Container Registry (ECR) for storing and managing Docker images securely.",
        },
        {
          title: "Logging and Monitoring",
          content:
            "CloudWatch Logs provide real-time monitoring and logging for better observability.",
        },
      ],
      technologies: [
        "Flask",
        "SerpAPI",
        "Docker",
        "AWS ECS (Fargate)",
        "Amazon ECR",
        "API Gateway",
        "Amazon ALB",
        "CloudWatch Logs"
      ],
      links: [
        {
          title: "GitHub",
          url: "https://github.com/Sherifsani/nfl-schedule-api"
        }
      ]
    },
  },
];
