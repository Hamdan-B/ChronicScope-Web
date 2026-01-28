import React from "react";
import { motion } from "framer-motion";
import { Download as DownloadIcon, Smartphone } from "lucide-react";

// Download Section Component
export default function Download() {
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
      id="download"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-bg-dark"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="section-title">Download ChronicScope</h2>
            <p className="section-subtitle">
              Available on Android. Free and Open Source.
            </p>
          </motion.div>

          {/* Download Card */}
          <motion.div
            variants={itemVariants}
            className="card bg-gradient-to-br from-primary to-secondary p-12 text-white text-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8 flex justify-center"
            >
              <Smartphone className="w-20 h-20" />
            </motion.div>

            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg opacity-90 mb-8">
              Download the ChronicScope APK and begin your chronic pain
              assessment journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://github.com/chronicscope/app/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <DownloadIcon className="w-5 h-5" />
                <span>Download APK</span>
              </a>
              <a
                href="https://github.com/chronicscope/app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white bg-opacity-20 text-white font-bold rounded-lg hover:bg-opacity-30 transition-all"
              >
                View on GitHub
              </a>
            </div>

            <p className="text-sm opacity-75">Requires Android 6.0 or higher</p>
          </motion.div>

          {/* Features List */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary mb-2">✓</div>
              <h4 className="font-bold text-lg text-textDark dark:text-text-light mb-2">
                Free to Use
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                No hidden costs or premium features. Completely free for
                everyone.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-3xl font-bold text-primary mb-2">✓</div>
              <h4 className="font-bold text-lg text-textDark dark:text-text-light mb-2">
                Open Source
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Source code available on GitHub. Transparent and
                community-driven.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-3xl font-bold text-primary mb-2">✓</div>
              <h4 className="font-bold text-lg text-textDark dark:text-text-light mb-2">
                Secure
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Your data stays on your device. No tracking or data selling.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
