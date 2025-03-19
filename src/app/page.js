"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      {/* Animated Profile Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/mariem.jpg"
          width={200}
          height={200}
          alt="Mariem Soualhia"
          className="rounded-full shadow-lg border-4 border-white"
        />
      </motion.div>

      {/* Animated Introduction */}
      <motion.h1
        className="text-5xl font-bold mt-6 text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to My Portfolio 🚀
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="text-xl mt-4 text-gray-700"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        I am{" "}
        <span className="font-semibold text-blue-600">Mariem Soualhia</span>, a{" "}
        <span className="text-blue-500">Full Stack Engineer</span> passionate
        about building <span className="text-blue-500">innovative</span> and
        <span className="text-blue-500">scalable</span> solutions.
      </motion.p>

      {/* Highlighting Skills */}
      <motion.p
        className="text-lg mt-3 text-gray-600 max-w-2xl px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Experienced in developing **real-time dashboards, AI-driven
        applications, and scalable web platforms.** My expertise spans
        **React.js, Node.js, Flask, Angular, Spring Boot, and Docker**.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <a
          href="https://github.com/MariemSoualhia"
          className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
        >
          View My GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/maryem-soualhia-85aa541bb"
          className="px-6 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-900 transition"
        >
          Connect on LinkedIn
        </a>
      </motion.div>
    </div>
  );
}
