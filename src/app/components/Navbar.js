"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Logo / Title */}
      <motion.h1
        className="text-xl font-bold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Mariem's Portfolio 🚀
      </motion.h1>

      {/* Navigation Links */}
      <motion.div
        className="flex gap-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Link href="/" className="hover:text-blue-400 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-400 transition">
          About
        </Link>
        <Link href="/Skills" className="hover:text-blue-400 transition">
          Skills
        </Link>
        <Link href="/projects" className="hover:text-blue-400 transition">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-blue-400 transition">
          Contact
        </Link>
      </motion.div>
    </motion.nav>
  );
}
