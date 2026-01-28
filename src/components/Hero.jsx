import React from "react";
import { motion } from "framer-motion";
import { Download as DownloadIcon, ArrowRight } from "lucide-react";

// Hero Section Component
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-bgLight to-white dark:from-bg-dark dark:to-accent-dark pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.div variants={itemVariants}>
            <span className="text-sm font-semibold text-secondary bg-primary bg-opacity-10 px-4 py-2 rounded-full inline-block">
              Healthcare Innovation
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-textDark dark:text-text-light leading-tight"
          >
            ChronicScope
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-secondary font-semibold"
          >
            Smart Chronic Pain Screening & Awareness
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            A research-backed mobile app that helps you assess chronic pain
            conditions and identify medical conditions like Fibromyalgia and
            Neuropathic Pain using scientific questionnaires.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#download"
              className="btn-primary flex items-center justify-center space-x-2 hover:shadow-lg"
            >
              <DownloadIcon className="w-5 h-5" />
              <span>Download APK</span>
            </a>
            <a
              href="#about"
              className="btn-outline flex items-center justify-center space-x-2 hover:shadow-lg"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - App Mockup */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center"
        >
          <div className="w-64 h-96 bg-gradient-to-br from-primary to-secondary rounded-3xl shadow-lg flex items-center justify-center relative overflow-hidden">
            {/* Phone bezel */}
            <div className="absolute inset-0 bg-primary rounded-3xl p-3">
              <div className="bg-white dark:bg-accent-dark rounded-2xl h-full w-full flex flex-col items-center justify-center">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl"></div>

                {/* App content placeholder */}
                <div className="mt-12 space-y-4 w-full px-4">
                  <div className="h-8 bg-primary rounded-lg w-3/4 mx-auto"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                  <div className="h-24 bg-secondary bg-opacity-20 rounded-lg mt-6"></div>
                  <div className="h-10 bg-primary rounded-lg mt-6"></div>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <motion.div
              className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary opacity-20 rounded-full"
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
