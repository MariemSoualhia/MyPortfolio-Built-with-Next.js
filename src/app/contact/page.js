"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const email = "mariem.soualhia@esen.tn";
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <motion.div
      className="py-16 text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <motion.h1
        className="text-5xl font-bold text-gray-900"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Get in Touch
      </motion.h1>

      {/* Contact Info */}
      <motion.p
        className="text-lg mt-6 text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Whether you have a project idea, a collaboration opportunity, or just
        want to say hello, feel free to reach out. I’m always open to **exciting
        opportunities** and **meaningful discussions**.
      </motion.p>

      {/* Email Section */}
      <motion.div
        className="mt-8 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="text-xl font-semibold">📧 Email Me:</p>
        <div className="flex items-center mt-2 bg-gray-100 p-3 rounded-lg shadow-lg">
          <span className="text-blue-600 font-semibold">
            mariem.soualhia@esen.tn
          </span>
          <button
            onClick={handleCopy}
            className="ml-3 bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition"
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p className="text-xl font-semibold">🌍 Connect with Me:</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://linkedin.com/in/mariem-soualhia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-xl hover:text-blue-800 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mariemsoualhia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 text-xl hover:text-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:mariem.soualhia@esen.tn"
            className="text-red-600 text-xl hover:text-red-800 transition"
          >
            Email
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
