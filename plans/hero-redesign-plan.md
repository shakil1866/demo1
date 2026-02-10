# Hero Section Redesign Plan

## Design Overview
A premium, high-end hero section that establishes confidence and excellence for The Girls School website.

## Visual Design Elements

### Color Palette
- **Primary**: `#2d5a7b` (deep teal blue)
- **Secondary**: `#4a90a4` (calm blue)
- **Accent**: `#7ec8c8` (soft teal)
- **White**: Pure white for text and accents
- **Overlay**: Dark gradient for readability

### Typography
- **Heading**: Playfair Display (serif) - elegant, authoritative
- **Body**: Inter (sans-serif) - clean, readable
- **Sizes**: 
  - Title: clamp(2.5rem, 5vw, 4rem)
  - Intro: 1.25rem
  - Stats: 2.5rem

### Layout Structure
```
┌─────────────────────────────────────┐
│         Background Gradient          │
│         + Pattern Overlay           │
├─────────────────────────────────────┤
│    Section Tag (Welcome)            │
│                                       │
│    Main Title                        │
│    "Where Girls Thrive,             │
│     Lead & Succeed"                  │
│                                       │
│    Hero Intro Paragraph              │
│    (3-4 lines of descriptive text)  │
│                                       │
│    ┌─────────────────────────┐       │
│    │ Animated Statistics     │       │
│    │ Grid (4 items)          │       │
│    └─────────────────────────┘       │
│                                       │
│    ┌─ Discover Our Story ─┐          │
│    │         ▼            │          │
└─────────────────────────────────────┘
```

## Animation Specifications

### Load Animations (On Page Load)
1. **Background**: Fade in slowly (1.2s)
2. **Section Tag**: Fade up with delay (0.3s)
3. **Title**: Elegant fade up (0.5s, delay 0.2s)
4. **Intro Text**: Fade up (0.6s, delay 0.4s)
5. **Statistics**: Staggered fade up with counter (0.5s, delays 0.6s-1.0s)
6. **Scroll Indicator**: Fade in (0.5s, delay 1.2s)

### Scroll Animations (On View)
- Hero section fades out slightly on scroll
- Parallax effect on background

## Statistics Counter Animations
- **Students**: 0 → 700+
- **Faculty**: 0 → 75
- **Alumnae**: 0 → 5,000+
- **Years**: 0 → 72

Animation duration: 2 seconds per counter
Easing: easeOutQuart

## Responsive Breakpoints

### Desktop (1200px+)
- Full layout with 4 stats in row
- Large typography

### Tablet (768px - 1199px)
- 2x2 stat grid
- Adjusted typography

### Mobile (< 768px)
- Single column layout
- Stats stack vertically
- Smaller typography

## Implementation Files

### about.html
- Hero section markup
- Statistics with data-count attributes
- SVG decorative elements

### about.css
- Hero section styles
- Animation keyframes
- Responsive breakpoints
- Counter animation styles

## Success Metrics
1. Smooth page load animations
2. Counter numbers animate up on scroll
3. Hover effects on statistics
4. Fully responsive across all devices
5. Accessible (proper contrast, semantic HTML)
