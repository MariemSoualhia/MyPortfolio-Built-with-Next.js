"use client";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Intelligent Video Surveillance Platform",
      description:
        "Designed and developed a real-time video surveillance platform with analytics, tracking, and notifications using YOLOv8, Flask, and microservices architecture.",
      technologies: "Node.js, React, Flask, YOLOv8, Docker, Jetson Orin 64",
      link: "https://github.com/MariemSoualhia",
    },
    {
      title: "Supplier Management Workflow",
      description:
        "Built an automated supplier management system with workflow automation for approvals and notifications.",
      technologies: "Flask, Angular",
    },
    {
      title: "Dynamic Dashboard Development",
      description:
        "Integrated real-time data visualization dashboards into an existing platform.",
      technologies: "Node.js, React",
    },
    {
      title: "Library Management System",
      description:
        "Developed a web-based library management system with an interactive user interface.",
      technologies: "Spring Boot, Thymeleaf",
    },
    {
      title: "School Management System",
      description:
        "Designed a web application for school administration, including student and course management.",
      technologies: "Node.js, React, MongoDB",
      link: "https://github.com/MariemSoualhia",
    },
    {
      title: "E-Learning Platform",
      description:
        "Created an online learning platform enabling course registration, management, and performance tracking.",
      technologies: "MERN Stack (MongoDB, Express.js, React, Node.js)",
    },
    {
      title: "Secure Lab Access System",
      description:
        "Implemented a facial recognition-based lab access control system using embedded technology.",
      technologies: "ESP32-CAM, React, Node.js, Android",
    },
  ];

  return (
    <div className="py-10 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600">My Projects</h1>
      <p className="text-lg mt-4 text-gray-700">
        A selection of my engineering and software development projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <p className="text-gray-500 mt-2">
              <strong>Technologies:</strong> {project.technologies}
            </p>
            {project.link && (
              <Link
                href={project.link}
                className="text-blue-500 mt-4 inline-block hover:underline"
              >
                View Project
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
