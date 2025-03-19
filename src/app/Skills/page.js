"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Programming Languages",
    items: ["C", "C#", "Java", "Python", "PL/SQL"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP5", "Java"],
  },
  {
    category: "Mobile Development",
    items: ["Android"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "Angular",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Flask",
      "Spring Boot",
      "Laravel",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "Oracle", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "Development Tools",
    items: ["Visual Studio Code", "Eclipse", "PyCharm"],
  },
  {
    category: "Other Tools",
    items: ["Docker", "GitHub", "GitLab", "Unity", "UML", "Linux"],
  },
  {
    category: "Embedded Systems",
    items: ["ESP32", "Jetson"],
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-900 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        My Skills & Expertise
      </h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-6">
        I specialize in full-stack development and embedded systems, leveraging
        modern technologies to build innovative solutions. Here’s an overview of
        my key technical skills.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg cursor-pointer border border-blue-300"
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              setSelectedCategory(
                skill.category === selectedCategory ? null : skill.category
              )
            }
          >
            <h2 className="text-2xl font-semibold text-blue-700">
              {skill.category}
            </h2>
            <ul
              className={`mt-3 transition-all duration-300 ${
                selectedCategory === skill.category ? "block" : "hidden"
              }`}
            >
              {skill.items.map((item, i) => (
                <li key={i} className="text-gray-600 mt-1">
                  - {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
