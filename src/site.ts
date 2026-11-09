export const githubUsername = "yousefnegmeldin";

export const site = {
  name: "In the Works",
  author: "Yousef Negmeldin",
  intro: "Engineering essays, project breakdowns, and notes on what I’m learning.",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yousefnegmeldin/" },
    { label: "GitHub", url: `https://github.com/${githubUsername}` },
    // { label: "X", url: "https://x.com/youseffnegm" },
  ],
  about: [
    "I’m based in Cairo, Egypt. At my current job, Octopods, I work on the backend of a messaging platform, mostly in Ruby on Rails. I studied computer science at the German International University in Egypt, and my thesis explored how to find security issues in microservices.",
    "I’m interested in what happens after software ships, especially how to trace a problem across systems. I also am learning guitar.",
  ],
  aboutPage: {
    location: "Cairo, Egypt",
    work: "I’m a software engineer at Octopods. Most days I’m in Ruby on Rails, building the backend of a messaging platform. I’m interested in what happens after software ships, especially the detective work of tracing a problem from a webhook through a queue and across services.",
    education:
      "I studied Software Engineering at the German International University in Egypt. For my thesis, I explored how to find security issues in microservices.",
    interests:
      "I’m also learning guitar. My portfolio is where I keep track of what I’m building, random thoughts that come to mind, and engineering articles I write.",
    publication: {
      title: "MicroSec-Scan and SafeFix-K8s for automated analysis and repair in microservices and Kubernetes",
      url: "https://doi.org/10.1016/j.jss.2026.113154",
    },
  },
  studying: {
    credential: "AWS Certified",
    specialty: "Developer – Associate",
    description: "I’m studying how to build, deploy, and debug applications on AWS.",
  },
  work: {
    headline: "I build software",
    company: "Octopods",
    description: "I work on the backend of a messaging platform, from designing features to keeping them running in production.",
    current: {
      title: "Software Engineer",
      paragraphs: [
        "Most days I work in Ruby on Rails, building and maintaining the backend of a messaging platform. Much of my work involves integrating external services like WhatsApp, Instagram, Telegram, and HubSpot, designing APIs, and building background jobs that keep messages, contacts, and conversations in sync.",
        "A big part of working with external systems is handling things that don't go as planned. Webhooks arrive more than once, APIs time out, and background jobs fail halfway through. I work on making these processes reliable, safe to retry, and easier to debug when something goes wrong. I've also built tooling to replay webhook events locally, making production issues easier to reproduce and investigate.",
        "I take ownership of features beyond writing the code, from understanding the requirements and making technical decisions to deployment and monitoring. I've also worked with AWS infrastructure, including SQS, ECS, and the configuration that supports our background processing and deployments.",
      ],
    },
    previous: {
      title: "Software Development Intern",
      paragraphs: [
        "At Brightskies, I worked on a Java and Spring Boot backend. I built features for REST APIs, tested requests and responses in Postman, and documented how to use the endpoints. That meant looking at how the API behaved from the caller’s side as well as from inside the application.",
        "I also worked on database queries, reviewed changes with the team, and packaged Spring Boot applications with Docker for deployment.",
      ],
    },
  },
} as const;
