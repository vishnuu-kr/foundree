## Design System: FoundreeMiniGame

### Pattern
- **Name:** Feature-Rich Showcase
- **CTA Placement:** Above fold
- **Sections:** Hero > Features > CTA

### Style
- **Name:** Retro-Futurism
- **Keywords:** Vintage sci-fi, 80s aesthetic, neon glow, geometric patterns, CRT scanlines, pixel art, cyberpunk, synthwave
- **Best For:** Gaming, entertainment, music platforms, tech brands, artistic projects, nostalgic, cyberpunk
- **Performance:** ΓÜá Moderate | **Accessibility:** ΓÜá High contrast/strain

### Colors
| Role | Hex |
|------|-----|
| Primary | #0F172A |
| Secondary | #1E293B |
| CTA | #22C55E |
| Background | #020617 |
| Text | #F8FAFC |

*Notes: Terminal dark + success green*

### Typography
- **Heading:** Press Start 2P
- **Body:** VT323
- **Mood:** pixel, retro, gaming, 8-bit, nostalgic, arcade
- **Best For:** Pixel art games, retro websites, creative portfolios
- **Google Fonts:** https://fonts.google.com/share?selection.family=Press+Start+2P|VT323
- **CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
```

### Key Effects
CRT scanlines (::before overlay), neon glow (text-shadow+box-shadow), glitch effects (skew/offset keyframes)

### Avoid (Anti-patterns)
- Minimalist design
- Static assets

### Pre-Delivery Checklist
- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] prefers-reduced-motion respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px

