import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import WhyItMatters from "./components/WhyItMatters";
import Download from "./components/Download";
import AboutProject from "./components/AboutProject";
import FuturePlans from "./components/FuturePlans";
import Footer from "./components/Footer";

/**
 * Main App Component
 *
 * This is the root component that brings together all sections of the ChronicScope
 * landing page. It includes:
 * - Theme provider for dark/light mode support
 * - Navigation header with theme toggle
 * - Hero section with app introduction
 * - Feature highlights
 * - How it works guide
 * - Why chronic pain awareness matters
 * - Download section
 * - Project information
 * - Future plans
 * - Footer with contact info
 */
function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-bg-dark text-textDark dark:text-text-light transition-colors duration-300">
        {/* Navigation Header - Fixed at top */}
        <Header />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section - First impression with app introduction */}
          <Hero />

          {/* About Section - Explains what ChronicScope is */}
          <About />

          {/* Features Section - Highlights app capabilities */}
          <Features />

          {/* How It Works - Step-by-step process guide */}
          <HowItWorks />

          {/* Why It Matters - Context on chronic pain in Pakistan */}
          <WhyItMatters />

          {/* Download Section - APK download CTA */}
          <Download />

          {/* About Project - Project background and technology */}
          <AboutProject />

          {/* Future Plans - Roadmap and vision */}
          <FuturePlans />
        </main>

        {/* Footer - Contact info and links */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
