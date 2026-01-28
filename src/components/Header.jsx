import React, { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

// Header/Navigation Component
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Download", href: "#download" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-accent-dark shadow-soft z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary dark:bg-secondary rounded-lg flex items-center justify-center">
            <span className="text-white dark:text-primary text-xl font-bold">
              CS
            </span>
          </div>
          <span className="text-xl font-bold text-primary dark:text-secondary hidden sm:inline">
            ChronicScope
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-textDark dark:text-text-light hover:text-primary dark:hover:text-secondary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-bgLight dark:hover:bg-bg-dark transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-secondary" />
            ) : (
              <Moon className="w-5 h-5 text-primary" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-bgLight dark:hover:bg-bg-dark transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-textDark dark:text-text-light" />
            ) : (
              <Menu className="w-6 h-6 text-textDark dark:text-text-light" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-bg-dark border-t border-border dark:border-border-dark">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-lg text-textDark dark:text-text-light hover:bg-bgLight dark:hover:bg-accent-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
