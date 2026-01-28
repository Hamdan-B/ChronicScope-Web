export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02394E",
        secondary: "#DBEE9C",
        bgLight: "#F8F9FA",
        accentLight: "#E8F0F2",
        textDark: "#1C1C1C",
        border: "#D9D9D9",
        "red-custom": "#D32F2F",
        // Dark mode colors
        "bg-dark": "#121212",
        "accent-dark": "#1E1E1E",
        "text-light": "#E6E6E6",
        "border-dark": "#2F2F2F",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      boxShadow: {
        soft: "0 4px 6px rgba(0, 0, 0, 0.07)",
        md: "0 4px 12px rgba(0, 0, 0, 0.15)",
        lg: "0 8px 16px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
