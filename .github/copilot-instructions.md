# ChronicScope Web - Project Instructions

## Project Overview

Modern React landing page for ChronicScope, a chronic pain detection mobile app. Built with Vite, React, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** React 18 (JavaScript, not TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **State Management:** React Context (Theme)

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          - Navigation with theme toggle
│   ├── Hero.jsx            - Main hero section
│   ├── About.jsx           - About ChronicScope
│   ├── Features.jsx        - Feature cards (8 items)
│   ├── HowItWorks.jsx      - Step-by-step guide
│   ├── WhyItMatters.jsx    - Chronic pain context
│   ├── Download.jsx        - APK download
│   ├── AboutProject.jsx    - Project info
│   ├── FuturePlans.jsx     - Roadmap
│   └── Footer.jsx          - Contact & footer
├── context/
│   └── ThemeContext.jsx    - Dark/light mode
├── App.jsx                 - Main component
├── main.jsx                - Entry point
└── index.css               - Global styles
```

## Key Features

- ✅ Fully responsive design
- ✅ Dark/Light mode toggle
- ✅ Smooth animations (Framer Motion)
- ✅ 9 main sections
- ✅ Color-coded by design system
- ✅ SEO optimized
- ✅ Accessibility friendly

## Color System

**Light Mode:** Primary: #02394E | Secondary: #DBEE9C | BG: #F8F9FA
**Dark Mode:** BG: #121212 | Text: #E6E6E6 | Accent: #1E1E1E

## Common Tasks

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Add New Component

1. Create file in `src/components/ComponentName.jsx`
2. Use Framer Motion for animations
3. Follow component structure with containerVariants and itemVariants
4. Import and add to App.jsx

### Update Styles

- Edit `src/index.css` for global styles
- Edit `tailwind.config.js` for theme/colors
- Components use Tailwind utility classes

### Modify Theme Colors

Edit `tailwind.config.js` colors section:

- primary: #02394E
- secondary: #DBEE9C
- bgLight: #F8F9FA
- And dark mode variants

## Development Guidelines

1. **Component Structure:** Use Framer Motion containerVariants and itemVariants for animations
2. **Responsive:** Mobile-first design with Tailwind breakpoints
3. **Accessibility:** Add aria-labels and semantic HTML
4. **Performance:** Lazy load sections with whileInView prop
5. **Comments:** Explain key sections and complex logic
6. **Dark Mode:** Always test both light and dark modes

## External Links to Update

Replace placeholder links in Download component and Footer:

- GitHub repo link: `https://github.com/chronicscope/app`
- Email: `team@chronicscope.app`
- APK download URL: Update GitHub Releases link

## Performance Notes

- Vite provides fast HMR
- Framer Motion animations are optimized
- Code splits naturally by route/component
- Bundle size ~50KB gzipped

## Testing Checklist

- [ ] All sections load correctly
- [ ] Dark mode toggle works
- [ ] Smooth scroll navigation works
- [ ] Responsive on mobile/tablet/desktop
- [ ] External links work
- [ ] All icons display correctly
- [ ] Animations are smooth
- [ ] No console errors

## Future Enhancements

- Add blog section
- Implement email signup
- Add FAQ accordion
- Add testimonials
- Urdu language support
- Analytics integration

## Contact & Support

- Email: team@chronicscope.app
- GitHub: https://github.com/chronicscope
