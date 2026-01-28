import React from "react";
import { motion } from "framer-motion";

// About Section Component
export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-dark"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="section-title">What is ChronicScope?</h2>
            <p className="section-subtitle">
              A research-backed healthcare solution for chronic pain awareness
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card">
            <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
              Understanding Chronic Pain
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Chronic pain affects millions of people worldwide, yet many cases
              go undiagnosed or misdiagnosed. In Pakistan, the awareness and
              screening for conditions like Fibromyalgia and Neuropathic Pain
              remain critically low, leaving countless individuals without
              proper support and treatment.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              ChronicScope bridges this gap by providing an accessible,
              evidence-based screening tool that helps users understand their
              symptoms and take informed steps toward diagnosis and management.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="card">
              <h4 className="text-xl font-bold text-primary dark:text-secondary mb-3">
                Our Mission
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                To democratize chronic pain screening and raise awareness about
                debilitating conditions that are often overlooked, empowering
                individuals to seek proper diagnosis and care.
              </p>
            </div>

            <div className="card">
              <h4 className="text-xl font-bold text-primary dark:text-secondary mb-3">
                Evidence-Based Approach
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                ChronicScope utilizes medically validated instruments including
                MPQ, DN4, and the 2016 ACR Fibromyalgia Diagnostic Criteria
                developed by leading global pain research institutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="card !bg-primary text-white"
          >
            <h4 className="text-xl font-bold mb-2">Built for Pakistan</h4>
            <p>
              Developed as a Final Year Project with focus on addressing the
              chronic pain awareness gap in Pakistan. Available in both English
              and Urdu for maximum accessibility.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
