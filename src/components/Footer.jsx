import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, Heart } from "lucide-react";

// Footer Component
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-primary dark:bg-accent-dark text-white dark:text-text-light">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">CS</span>
                </div>
                <span className="text-2xl font-bold">ChronicScope</span>
              </div>
              <p className="text-opacity-90 opacity-75">
                Smart Chronic Pain Screening & Awareness
              </p>
              <p className="text-sm opacity-75">
                A research-backed healthcare solution for chronic pain detection
                and management.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block hover:text-secondary transition-colors"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="block hover:text-secondary transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="block hover:text-secondary transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#download"
                  className="block hover:text-secondary transition-colors"
                >
                  Download
                </a>
              </div>
            </motion.div>

            {/* Contact & Social */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-bold text-lg mb-6">Contact & Follow</h4>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:team@chronicscope.app"
                  className="flex items-center space-x-2 hover:text-secondary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>team@chronicscope.app</span>
                </a>
                <a
                  href="https://github.com/chronicscope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-secondary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="border-t border-white border-opacity-10 my-12"
          ></motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-sm opacity-75">
              &copy; {currentYear} ChronicScope. All rights reserved.
            </p>

            <div className="flex items-center space-x-2 text-sm opacity-75">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-secondary fill-current" />
              <span>for chronic pain awareness</span>
            </div>

            <div className="text-sm opacity-75">
              <p>Built with React, Vite, and Tailwind CSS</p>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            variants={itemVariants}
            className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg text-xs opacity-75 leading-relaxed"
          >
            <p>
              <strong>Disclaimer:</strong> ChronicScope is designed for
              informational purposes and is not a substitute for professional
              medical advice. Always consult with a healthcare provider for
              diagnosis and treatment of chronic pain conditions.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
