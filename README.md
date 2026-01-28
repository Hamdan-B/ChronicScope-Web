# ChronicScope - Landing Page

A modern, responsive React website for ChronicScope, a chronic pain detection mobile app built with Flutter.

## Overview

ChronicScope is a research-backed healthcare solution that helps users assess chronic pain and identify conditions like Fibromyalgia and Neuropathic Pain using scientific questionnaires (MPQ and DN4).

This website serves as the landing page to promote the ChronicScope mobile app and educate users about chronic pain awareness in Pakistan.

## Features

✨ **Modern Design**

- Responsive layout (mobile, tablet, desktop)
- Dark/Light mode toggle
- Smooth animations and transitions
- Professional healthcare aesthetic

🎯 **Key Sections**

- Hero section with app introduction
- Features showcase (8 powerful features)
- How it works (step-by-step guide)
- Why it matters (chronic pain awareness)
- Download section with GitHub link
- Project information
- Future roadmap
- Contact & social links

🌍 **Multi-language Support**

- Built with internationalization in mind
- Ready for Urdu language addition

🔐 **Security & Performance**

- Fast loading with Vite
- SEO-optimized meta tags
- Privacy-focused (no tracking)

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Professional icons
- **JavaScript** (not TypeScript)

## Project Structure

```
chronicscope-web/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation header with theme toggle
│   │   ├── Hero.jsx             # Hero section with app introduction
│   │   ├── About.jsx            # About ChronicScope section
│   │   ├── Features.jsx         # Features showcase (8 cards)
│   │   ├── HowItWorks.jsx       # Step-by-step guide (4 steps)
│   │   ├── WhyItMatters.jsx     # Chronic pain awareness context
│   │   ├── Download.jsx         # APK download section
│   │   ├── AboutProject.jsx     # Project background
│   │   ├── FuturePlans.jsx      # Roadmap and vision
│   │   └── Footer.jsx           # Contact info and links
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark/light mode context
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles + Tailwind
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## Color Scheme

**Light Mode:**

- Primary: `#02394E` (Dark blue)
- Secondary: `#DBEE9C` (Lime green)
- Background: `#F8F9FA` (Light gray)
- Text: `#1C1C1C` (Dark)

**Dark Mode:**

- Background: `#121212` (Very dark)
- Accent: `#1E1E1E` (Dark)
- Text: `#E6E6E6` (Light)
- Borders: `#2F2F2F`

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Start development server:**

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Component Details

### Header

- Fixed navigation with smooth scrolling links
- Dark/light mode toggle button
- Mobile responsive menu
- Logo and branding

### Hero Section

- Eye-catching headline and tagline
- Smooth animations with Framer Motion
- CTA buttons (Download & Learn More)
- App mockup visualization

### Features Section

- 8 feature cards with icons
- Hover effects and animations
- Responsive grid layout
- Icons from Lucide React

### How It Works

- 4-step visual timeline
- Animated step numbers
- Clear process explanation
- Mobile-responsive design

### Why It Matters

- Statistics about chronic pain in Pakistan
- Problem vs. solution comparison
- Impact statement
- Credibility through academic research context

### Download Section

- Large download CTA
- GitHub link for open source
- Feature benefits list
- System requirements

### Future Plans

- 4 planned features with status badges
- Vision statement
- Project roadmap

### Footer

- Brand information
- Quick links navigation
- Contact information
- Social media links
- Legal disclaimer

## Dark Mode Implementation

The site uses React Context API for theme management:

- Automatically detects system preference
- Saves preference to localStorage
- Smooth transition between modes
- All components support both themes

## Animations

Powered by **Framer Motion**:

- Page scroll animations (fade-in, slide-up)
- Hover effects on cards
- Floating decorations
- Icon animations
- Staggered children animations

## SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Descriptive alt texts
- Fast loading performance
- Mobile-friendly design

## Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly buttons and links
- Optimal typography sizing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Color contrast compliance
- Readable font sizes

## Performance

- Optimized bundle size (~50KB gzipped)
- Lazy loading images
- Code splitting ready
- Fast development server with Vite

## Future Enhancements

- [ ] Multilingual support (Urdu)
- [ ] Blog/News section
- [ ] FAQ accordion
- [ ] Testimonials section
- [ ] Email newsletter signup
- [ ] Analytics integration
- [ ] Contact form

## Contributing

Contributions are welcome! This is an open-source project. Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is part of the ChronicScope initiative - a student research project for chronic pain awareness.

## Contact

- **Email:** team@chronicscope.app
- **GitHub:** [ChronicScope](https://github.com/chronicscope)
- **Discord/Community:** [Coming Soon]

## Disclaimer

ChronicScope is designed for **informational purposes only** and is not a substitute for professional medical advice. Always consult with a healthcare provider for diagnosis and treatment of chronic pain conditions.

---

**Made with ❤️ for chronic pain awareness** | ChronicScope Team
