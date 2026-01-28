import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// How It Works Section Component
export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Start Assessment",
      description:
        "Begin with the McGill Pain Questionnaire to assess your general pain patterns and characteristics.",
    },
    {
      number: "02",
      title: "Fibromyalgia Screening",
      description:
        "Complete targeted questions to identify potential Fibromyalgia symptoms based on diagnostic criteria.",
    },
    {
      number: "03",
      title: "Neuropathic Pain Test",
      description:
        "Take the DN4 questionnaire to screen for neuropathic pain characteristics.",
    },
    {
      number: "04",
      title: "Get Results",
      description:
        "Receive personalized insights and recommendations. Save your results for future reference.",
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
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-dark"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Simple, guided process to understand your chronic pain profile
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="relative w-24 h-24 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  {/* Step Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {/* Arrow
                  {index < steps.length - 1 && (
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="hidden md:block"
                    >
                      <ArrowRight className="w-6 h-6 text-secondary" />
                    </motion.div>
                  )} */}
                </div>

                {/* Divider */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="h-16 border-l-2 border-dashed border-primary opacity-30 ml-12 md:ml-0"
                    variants={itemVariants}
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
