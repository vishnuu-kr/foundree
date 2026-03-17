## Design System: FoundreePremium

### Pattern
- **Name:** Minimal Single Column
- **Conversion Focus:** Single CTA focus. Large typography. Lots of whitespace. No nav clutter. Mobile-first.
- **CTA Placement:** Center, large CTA button
- **Color Strategy:** Minimalist: Brand + white #FFFFFF + accent. Buttons: High contrast 7:1+. Text: Black/Dark grey
- **Sections:** 1. Hero headline, 2. Short description, 3. Benefit bullets (3 max), 4. CTA, 5. Footer

### Style
- **Name:** Liquid Glass
- **Keywords:** Flowing glass, morphing, smooth transitions, fluid effects, translucent, animated blur, iridescent, chromatic aberration
- **Best For:** Premium SaaS, high-end e-commerce, creative platforms, branding experiences, luxury portfolios
- **Performance:** ΓÜá Moderate-Poor | **Accessibility:** ΓÜá Text contrast

### Colors
| Role | Hex |
|------|-----|
| Primary | #4F46E5 |
| Secondary | #6366F1 |
| CTA | #F97316 |
| Background | #EEF2FF |
| Text | #312E81 |

*Notes: Indigo brand + doc hierarchy*

### Typography
- **Heading:** Inter
- **Body:** Inter
- **Mood:** spatial, legible, glass, system, clean, neutral
- **Best For:** Spatial computing, AR/VR, glassmorphism interfaces
- **Google Fonts:** https://fonts.google.com/share?selection.family=Inter:wght@300;400;500;600
- **CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
```

### Key Effects
Morphing elements (SVG/CSS), fluid animations (400-600ms curves), dynamic blur (backdrop-filter), color transitions

### Avoid (Anti-patterns)
- Cheap visuals
- Fast animations

### Pre-Delivery Checklist
- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] prefers-reduced-motion respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px

