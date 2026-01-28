import React from "react";
import { motion } from "framer-motion";
import { Code2, Zap, Lightbulb, Globe } from "lucide-react";

// About Project Section Component
export default function AboutProject() {
  const timeline = [
    {
      icon: Code2,
      title: "Built with Flutter",
      description:
        "Cross-platform mobile development for seamless Android experience.",
    },
    {
      icon: Zap,
      title: "Research-Backed",
      description:
        "Uses validated medical questionnaires (MPQ, DN4) developed by researchers.",
    },
    {
      icon: Lightbulb,
      title: "Final Year Project",
      description:
        "University research project addressing real healthcare needs.",
    },
    {
      icon: Globe,
      title: "Open Source",
      description:
        "Community contributions welcome. Available on GitHub for transparency.",
    },
  ];

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
            <h2 className="section-title">About the Project</h2>
            <p className="section-subtitle">
              Where academic research meets real-world healthcare impact
            </p>
          </motion.div>

          {/* Timeline Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <div className="card hover:border-primary dark:hover:border-secondary hover:border-2 h-full">
                    <div className="mb-4 inline-block">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-textDark dark:text-text-light mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Detailed Description */}
          <motion.div
            variants={itemVariants}
            className="card bg-gradient-to-r from-primary from-10% to-secondary to-90% text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-lg leading-relaxed mb-4">
              ChronicScope began as a response to a critical gap in healthcare
              accessibility. Our team recognized that chronic pain patients in
              Pakistan often lack access to proper diagnostic tools and
              awareness about their conditions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Rather than simply documenting the problem, we built a solution.
              Using Flutter for mobile development and evidence-based medical
              questionnaires, we created an app that brings medical-grade pain
              screening to everyone's pocket.
            </p>
            <p className="text-lg leading-relaxed">
              This project demonstrates that academic research can directly
              translate into meaningful healthcare solutions. By keeping it open
              source and free, we ensure our impact extends beyond the classroom
              into the lives of real people.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
