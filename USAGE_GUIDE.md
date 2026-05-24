# Restaurant Website - Light Mode & New Color Scheme Guide

## 🎨 What's New

### 1. Light/Dark Mode Toggle
Your restaurant website now supports both light and dark themes!

**How to switch themes:**
- Look for the Sun ☀️ / Moon 🌙 icon in the top-right corner of the navbar
- Click it to instantly switch between light and dark modes
- Your preference is automatically saved and remembered

### 2. New Color Scheme
The website now features a vibrant **Violet & Purple** color palette instead of the previous green theme.

**Color Highlights:**
- **Primary Accent:** Violet (#8b5cf6) - Used for headings, buttons, and highlights
- **Secondary Accent:** Purple (#7c3aed) - Used for gradients and hover states
- **Tertiary Accent:** Pink (#ec4899) - Used for complementary accents

## 🌟 Visual Changes

### Dark Mode (Default)
- Deep black backgrounds with violet accents
- Excellent contrast for nighttime viewing
- Elegant and sophisticated look
- Perfect for fine dining atmosphere

### Light Mode (New!)
- Clean white backgrounds
- Violet accents pop beautifully
- Easy on the eyes during daytime
- Modern and fresh appearance

## 📱 Where You'll See the Changes

### Navigation Bar
- Violet gradient logo text
- Theme toggle button (Sun/Moon icon)
- Violet hover effects on menu items
- Violet gradient "Book a Table" button

### Hero Section
- Violet gradient title
- Violet accent badges
- Violet buttons with glow effects

### About Section
- Violet stat cards
- Violet gradient headings
- Violet decorative elements

### Menu Section
- Violet category buttons
- Violet price tags
- Violet card borders on hover
- Violet dish name highlights

### Chef Section
- Violet gradient name display
- Violet award badges
- Violet decorative borders

### Gallery
- Violet border highlights
- Violet "View" badges on hover

### Testimonials
- Violet star ratings
- Violet quote icons
- Violet name highlights

### Reservation Form
- Violet gradient heading
- Violet form field borders
- Violet submit button with glow
- Violet focus states

### Footer
- Violet gradient logo
- Violet section headings
- Violet social media hover effects

## 🚀 Getting Started

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 💡 Tips

1. **Theme Persistence:** Your theme choice is saved automatically. When you return to the site, it will remember your preference.

2. **Smooth Transitions:** All theme changes include smooth 300ms transitions for a polished experience.

3. **Responsive Design:** The theme toggle works perfectly on both desktop and mobile devices.

4. **Accessibility:** Both themes maintain proper contrast ratios for readability.

## 🎯 Key Features

✅ **Dual Theme Support** - Light and Dark modes
✅ **Modern Color Palette** - Violet, Purple, and Pink accents
✅ **Smooth Animations** - Elegant transitions between themes
✅ **Persistent Preferences** - Theme choice saved to localStorage
✅ **Fully Responsive** - Works on all devices
✅ **Theme-Aware Components** - All components adapt to the selected theme

## 🔧 Technical Implementation

### Theme Context
The theme is managed by a React Context (`ThemeContext`) that:
- Tracks current theme state
- Provides toggle functionality
- Persists to localStorage
- Updates CSS classes on the root element

### CSS Variables
The theme uses CSS custom properties that automatically update:
- `--background` - Main background color
- `--foreground` - Main text color
- `--primary` - Primary accent color
- `--card` - Card background color
- And many more...

### Component Updates
All components now use theme-aware Tailwind classes:
- `bg-background` instead of `bg-black`
- `text-foreground` instead of `text-white`
- `text-muted-foreground` instead of `text-gray-400`

This ensures consistent theming across the entire application!

## 🎨 Customization

Want to adjust the colors? Edit `src/styles/theme.css`:

```css
:root {
  --primary-accent: #8b5cf6; /* Change violet color */
  --secondary-accent: #ec4899; /* Change pink color */
}
```

Enjoy your newly themed restaurant website! 🍽️✨
