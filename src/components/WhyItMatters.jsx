import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, AlertCircle, Users } from "lucide-react";

// Why It Matters Section Component
export default function WhyItMatters() {
  const stats = [
    {
      icon: AlertCircle,
      number: "40M+",
      description: "People in Pakistan with chronic pain",
    },
    {
      icon: TrendingUp,
      number: "70%",
      description: "Cases of underdiagnosis and misdiagnosis",
    },
    {
      icon: Users,
      number: "90%",
      description: "Lack awareness about proper screening",
    },
  ];

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bgLight dark:bg-accent-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Why It Matters</h2>
            <p className="section-subtitle">
              The chronic pain crisis in Pakistan demands immediate action
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <div className="card text-center h-full hover:shadow-lg">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-12 h-12 text-secondary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Content Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="card">
              <h3 className="text-2xl font-bold text-primary mb-4">
                The Problem in Pakistan
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Chronic pain conditions remain underrecognized in Pakistan due
                to limited access to specialized healthcare, lack of public
                awareness, and insufficient screening tools. Many individuals
                suffer in silence, unaware that their symptoms could be
                medically managed.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This gap in healthcare creates a ripple effect, impacting
                quality of life, productivity, and mental health of millions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Solution
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                ChronicScope democratizes access to evidence-based screening
                tools. By making medical questionnaires accessible to everyone,
                we empower individuals to recognize their symptoms and seek
                appropriate care.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our app supports both English and Urdu, ensuring accessibility
                across linguistic barriers and reaching those who need it most.
              </p>
            </motion.div>
          </motion.div>

          {/* Impact Statement */}
          <motion.div
            variants={itemVariants}
            className="mt-12 card bg-gradient-to-r from-secondary to-primary text-textDark"
          >
            <h4 className="text-2xl font-bold mb-4">
              Student Research Project with Real Impact
            </h4>
            <p className="text-lg leading-relaxed">
              ChronicScope is a Final Year Project developed with the goal of
              creating a tangible healthcare solution. While born from academic
              research, this app addresses a genuine medical need and provides
              real value to individuals seeking to understand their chronic pain
              conditions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
