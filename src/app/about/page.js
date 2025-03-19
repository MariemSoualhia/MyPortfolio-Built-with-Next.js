"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="py-16 text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title with Animation */}
      <motion.h1
        className="text-5xl font-bold text-gray-900"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        About Me
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg mt-6 text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        I am <span className="font-semibold">Mariem Soualhia</span>, a
        passionate and driven{" "}
        <span className="font-semibold">Full Stack Engineer</span> specializing
        in
        <span className="text-blue-500"> React.js</span>,{" "}
        <span className="text-green-500">Node.js</span>, and{" "}
        <span className="text-purple-500">embedded systems</span>. With
        expertise in both front-end and back-end technologies, I bring
        innovative solutions to life by blending technical precision with
        creative problem-solving.
      </motion.p>

      {/* Key Skills Section */}
      <motion.div
        className="mt-8 text-lg font-semibold text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p>💡 Skilled in AI, Data Science & Software Engineering</p>
        <p>🚀 Experienced in Web & Mobile Development</p>
        <p>🔬 Strong background in Embedded Systems & IoT</p>
      </motion.div>

      {/* Animated CTA */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a
          href="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Explore My Projects
        </a>
      </motion.div>
    </motion.div>
  );
}
