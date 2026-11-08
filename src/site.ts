export const site = {
  name: 'In the Works',
  author: 'Yousef Negmeldin',
  intro: 'I build software at Octopods. I write about what I’m building, learning, and finding along the way.',
  work: {
    headline: 'I build software',
    company: 'Octopods',
    description: 'I work on the backend of a messaging platform, from designing features to keeping them running in production.',
    current: {
      title: 'Software Engineer',
      paragraphs: [
        'Most days I work in Ruby on Rails, building and maintaining the backend of a messaging platform. Much of my work involves integrating external services like WhatsApp, Instagram, Telegram, and HubSpot, designing APIs, and building background jobs that keep messages, contacts, and conversations in sync.',
        "A big part of working with external systems is handling things that don't go as planned. Webhooks arrive more than once, APIs time out, and background jobs fail halfway through. I work on making these processes reliable, safe to retry, and easier to debug when something goes wrong. I've also built tooling to replay webhook events locally, making production issues easier to reproduce and investigate.",
        "I take ownership of features beyond writing the code, from understanding the requirements and making technical decisions to deployment and monitoring. I've also worked with AWS infrastructure, including SQS, ECS, and the configuration that supports our background processing and deployments.",
      ],
    },
    previous: {
      title: 'Software Development Intern',
      paragraphs: [
        'At Brightskies, I worked on a Java and Spring Boot backend. I built features for REST APIs, tested requests and responses in Postman, and documented how to use the endpoints. That meant looking at how the API behaved from the caller’s side as well as from inside the application.',
        'I also worked on database queries, reviewed changes with the team, and packaged Spring Boot applications with Docker for deployment.',
      ],
    },
  },
} as const;
