import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  FileText,
  Zap,
  BarChart3,
  BookOpen,
  Moon,
  Shield,
  Globe,
} from "lucide-react";

// Features Section Component
export default function Features() {
  const features = [
    {
      icon: Activity,
      title: "Chronic Pain Screening",
      description:
        "Comprehensive assessment to identify chronic pain patterns and severity.",
    },
    {
      icon: FileText,
      title: "MPQ Questionnaire",
      description:
        "McGill Pain Questionnaire - scientifically validated pain evaluation tool.",
    },
    {
      icon: Zap,
      title: "Fibromyalgia Detection",
      description:
        "Advanced screening for Fibromyalgia using diagnostic criteria.",
    },
    {
      icon: BarChart3,
      title: "DN4 Neuropathic Pain",
      description:
        "DN4 Questionnaire for accurate neuropathic pain identification.",
    },
    {
      icon: BookOpen,
      title: "Pain Journal Tracking",
      description:
        "Track your pain patterns and symptoms over time with detailed logs.",
    },
    {
      icon: Moon,
      title: "Dark Mode & Urdu",
      description:
        "User-friendly dark mode and complete Urdu language support.",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "Your health data is securely stored in Firebase and never shared with third parties.",
    },
    {
      icon: Globe,
      title: "Project Repository",
      description:
        "Repository maintained on GitHub. For access or collaboration, contact the ChronicScope team.",
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
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-bgLight dark:bg-accent-dark"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Powerful Features</h2>
            <p className="section-subtitle">
              Everything you need for chronic pain screening and management
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="card h-full hover:border-primary dark:hover:border-secondary hover:border-2">
                    <div className="mb-4 inline-block p-3 bg-primary bg-opacity-10 dark:bg-opacity-20 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-textDark dark:text-text-light mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
