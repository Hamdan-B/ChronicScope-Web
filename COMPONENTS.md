# Component Documentation

## Overview

This document provides detailed information about each component in the ChronicScope landing page.

## Component Hierarchy

```
App.jsx (Root)
├── ThemeProvider (Context)
├── Header.jsx
├── Hero.jsx
├── About.jsx
├── Features.jsx
├── HowItWorks.jsx
├── WhyItMatters.jsx
├── Download.jsx
├── AboutProject.jsx
├── FuturePlans.jsx
└── Footer.jsx
```

## Components

### Header.jsx

**Purpose:** Fixed navigation bar with theme toggle

**Props:** None

**Key Features:**

- Fixed positioning at top
- Responsive mobile menu
- Dark/Light mode toggle
- Navigation links to all sections
- Logo with branding

**Usage:**

```jsx
<Header />
```

**Customization:**

- Update navigation links in `navItems` array
- Change logo text (currently "CS")
- Modify color scheme via Tailwind classes

---

### Hero.jsx

**Purpose:** Landing section with app introduction

**Props:** None

**Key Features:**

- Large headline: "ChronicScope"
- Tagline: "Smart Chronic Pain Screening & Awareness"
- Dual CTA buttons (Download APK, Learn More)
- App mockup visualization
- Animated floating decoration

**Usage:**

```jsx
<Hero />
```

**Customization:**

- Update headline in `<h1>` tag
- Modify tagline in `<p>` element
- Change CTA button links (href attributes)
- Replace app mockup design in the right column

---

### About.jsx

**Purpose:** Explains what ChronicScope is and its mission

**Props:** None

**Key Features:**

- What is ChronicScope section
- Understanding Chronic Pain explanation
- Mission statement card
- Evidence-based approach card
- Built for Pakistan highlight

**Usage:**

```jsx
<About />
```

**Customization:**

- Update section title
- Modify explanation text
- Change mission statement
- Update Pakistan focus information

---

### Features.jsx

**Purpose:** Showcase 8 key features with icons

**Props:** None

**Key Features:**

- 8 feature cards in responsive grid
- Lucide React icons
- Hover effects with border animation
- Descriptive text for each feature
- Mobile-responsive layout

**Features Included:**

1. Chronic Pain Screening
2. MPQ Questionnaire
3. Fibromyalgia Detection
4. DN4 Neuropathic Pain
5. Pain Journal Tracking
6. Dark Mode & Urdu Support
7. Privacy & Secure Data
8. Open Source

**Usage:**

```jsx
<Features />
```

**Customization:**

- Modify `features` array to change features
- Update icons (import different from lucide-react)
- Change descriptions
- Adjust grid columns with `lg:grid-cols-4` class

---

### HowItWorks.jsx

**Purpose:** Step-by-step guide showing the app flow

**Props:** None

**Key Features:**

- 4-step visual timeline
- Animated gradient step numbers
- Dashed divider lines between steps
- Responsive design (vertical on mobile)
- Hover effects

**Steps:**

1. Start Assessment (MPQ Questionnaire)
2. Fibromyalgia Screening
3. Neuropathic Pain Test (DN4)
4. Get Results

**Usage:**

```jsx
<HowItWorks />
```

**Customization:**

- Modify `steps` array for different process
- Update step numbers and descriptions
- Change animation timing in `animate` prop
- Adjust layout with flexbox classes

---

### WhyItMatters.jsx

**Purpose:** Context on chronic pain in Pakistan

**Props:** None

**Key Features:**

- Statistics cards (3 key stats)
- Problem vs. Solution comparison
- Impact statement section
- Student project credibility
- Lucide React icons

**Stats:**

- 40M+ people in Pakistan with chronic pain
- 70% cases of underdiagnosis
- 90% lack awareness

**Usage:**

```jsx
<WhyItMatters />
```

**Customization:**

- Update statistics in `stats` array
- Modify problem description
- Change solution approach text
- Update impact statement

---

### Download.jsx

**Purpose:** APK download section with benefits

**Props:** None

**Key Features:**

- Large download button
- Animated Android icon
- GitHub repository link
- 3 benefit cards
- System requirements note

**Usage:**

```jsx
<Download />
```

**Customization:**

- Update download link (href in download button)
- Change GitHub link
- Modify benefit descriptions
- Update system requirements text

---

### AboutProject.jsx

**Purpose:** Project background and technology

**Props:** None

**Key Features:**

- 4 timeline items with icons
- Technology stack highlights
- Project story narrative
- Academic-to-real-world narrative
- Gradient background cards

**Timeline Items:**

1. Built with Flutter
2. Research-Backed
3. Final Year Project
4. Open Source

**Usage:**

```jsx
<AboutProject />
```

**Customization:**

- Update `timeline` array for different points
- Change technology descriptions
- Modify project story narrative
- Update icons with different Lucide icons

---

### FuturePlans.jsx

**Purpose:** Roadmap and future features

**Props:** None

**Key Features:**

- 4 planned features with status badges
- Icon indicators
- Status labels (In Progress, Planned)
- Vision statement section
- Responsive grid layout

**Planned Features:**

1. Google Play Store Launch (In Progress)
2. AI-Powered Insights (Planned)
3. Doctor Dashboard (Planned)
4. Research Database (Planned)

**Usage:**

```jsx
<FuturePlans />
```

**Customization:**

- Update `plans` array for different features
- Change status labels
- Modify descriptions
- Update vision statement
- Add/remove feature cards

---

### Footer.jsx

**Purpose:** Contact information and links

**Props:** None

**Key Features:**

- Brand section with logo
- Quick navigation links
- Contact email
- GitHub link
- Social links structure
- Copyright and disclaimer
- Floating animation on icons

**Usage:**

```jsx
<Footer />
```

**Customization:**

- Update brand description
- Modify contact email
- Change GitHub link
- Add additional social links
- Update copyright year (automatic)
- Modify disclaimer text

---

## Framer Motion Patterns

All components use consistent Framer Motion patterns:

### Container Variants

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
```

### Item Variants

```jsx
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};
```

### Usage Pattern

```jsx
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={containerVariants}
>
  <motion.div variants={itemVariants}>
    {/* Content animates in sequence */}
  </motion.div>
</motion.section>
```

## Tailwind CSS Classes Used

**Layout:**

- `flex`, `grid`, `max-w-*`, `px-*`, `py-*`

**Typography:**

- `text-*xl`, `font-bold`, `leading-relaxed`

**Colors:**

- `text-primary`, `bg-secondary`, `dark:bg-bg-dark`

**Effects:**

- `shadow-soft`, `rounded-lg`, `transition-all`

**Responsive:**

- `sm:`, `md:`, `lg:` prefixes for breakpoints

## Context API (ThemeContext)

**Purpose:** Manage dark/light mode state globally

**Available Hooks:**

```jsx
const { isDark, toggleTheme } = useTheme();
```

**Usage:**

```jsx
import { useTheme } from "../context/ThemeContext";

function MyComponent() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div className={isDark ? "dark" : "light"}>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

## Icons (Lucide React)

All icons are imported from lucide-react:

```jsx
import {
  Download,
  Menu,
  X,
  Moon,
  Sun,
  Github,
  Mail,
  Heart,
} from "lucide-react";
```

**Available Icons in Project:**

- Download, ArrowRight, Activity, FileText
- Zap, BarChart3, Journal, Moon, Shield, Globe
- Menu, X, Moon, Sun, Github, Mail, Heart
- Code2, Lightbulb, Users, TrendingUp, AlertCircle
- Rocket, Brain, Android

## Adding New Components

1. Create file: `src/components/NewComponent.jsx`
2. Import required dependencies
3. Define animation variants
4. Use Framer Motion structure
5. Follow Tailwind CSS classes
6. Import in `App.jsx`
7. Add to component hierarchy

## Best Practices

1. **Consistency:** Follow existing component patterns
2. **Accessibility:** Use semantic HTML and aria-labels
3. **Performance:** Use `whileInView` for scroll animations
4. **Responsiveness:** Test on mobile, tablet, desktop
5. **Dark Mode:** Test all components in both modes
6. **Comments:** Document complex logic
7. **Colors:** Use Tailwind config colors, not hardcoded
8. **Animations:** Keep animations under 1 second for smoothness

---

**Last Updated:** January 2026
**Version:** 1.0.0
