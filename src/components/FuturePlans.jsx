import React from "react";
import { motion } from "framer-motion";
import { Rocket, Brain, BarChart3, Users } from "lucide-react";

// Future Plans Section Component
export default function FuturePlans() {
  const plans = [
    {
      icon: Rocket,
      title: "Google Play Store Launch",
      description:
        "Official release on Google Play Store for easier access and automatic updates.",
      status: "In Progress",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description:
        "Machine learning algorithms to provide personalized pain management recommendations.",
      status: "Planned",
    },
    {
      icon: Users,
      title: "Doctor Dashboard",
      description:
        "Healthcare provider portal for monitoring patient progress and clinical analysis.",
      status: "Planned",
    },
    {
      icon: BarChart3,
      title: "Research Database",
      description:
        "Anonymous data collection to contribute to chronic pain research efforts.",
      status: "Planned",
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Future Plans</h2>
            <p className="section-subtitle">
              Exciting features and expansions coming soon
            </p>
          </motion.div>

          {/* Plans Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const isInProgress = plan.status === "In Progress";
              return (
                <motion.div key={index} variants={itemVariants}>
                  <div className="card h-full border-2 border-border dark:border-border-dark hover:border-primary dark:hover:border-secondary transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-8 h-8 text-secondary" />
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          isInProgress
                            ? "bg-secondary text-primary"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {plan.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-textDark dark:text-text-light mb-3">
                      {plan.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {plan.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            variants={itemVariants}
            className="mt-16 card bg-gradient-to-r from-primary to-secondary text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              We envision a future where chronic pain patients worldwide have
              access to evidence-based diagnostic tools, where healthcare
              providers can leverage technology for better patient care, and
              where research contributes to understanding and managing chronic
              pain conditions. ChronicScope is just the beginning of this
              journey.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
