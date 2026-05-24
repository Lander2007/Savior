# Theme System Documentation

## Overview
The application now has a fully functional dark/light mode system with proper persistence and no flash of unstyled content.

## Implementation

### 1. Theme Context
**File**: `src/app/contexts/ThemeContext.tsx`

Features:
- ✅ Automatic theme detection from system preferences
- ✅ localStorage persistence with key `savoria-theme`
- ✅ Smooth theme switching
- ✅ Meta theme-color updates for mobile browsers
- ✅ Proper TypeScript types

```typescript
const { theme, setTheme, toggleTheme } = useTheme();
```

### 2. Theme Initialization
**File**: `index.html`

Added inline script that runs before React loads to prevent flash:
```javascript
const theme = localStorage.getItem('savoria-theme') || 
             (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.classList.add(theme);
```

This ensures the correct theme class is applied immediately, preventing any flash of the wrong theme.

### 3. CSS Variables
**File**: `src/styles/theme.css`

Comprehensive CSS variables for both themes:

#### Light Mode (Default)
- Background: `#ffffff`
- Foreground: `oklch(0.145 0 0)` (near black)
- Card: `#ffffff`
- Muted: `#ececf0`
- Border: `rgba(0, 0, 0, 0.1)`

#### Dark Mode
- Background: `#0a0a0a`
- Foreground: `#f5f5f5`
- Card: `#1a1a1a`
- Muted: `#2a2a2a`
- Border: `rgba(212, 165, 116, 0.1)`

### 4. Tailwind Dark Mode
**Configuration**: Tailwind CSS v4 with custom variant

```css
@custom-variant dark (&:is(.dark *));
```

This allows using `dark:` prefix in all components:
```jsx
className="bg-white dark:bg-zinc-950"
```

## Component Implementation

### All Full-Width Components Support Dark Mode

#### Hero Section
- Gradient background (always dark with white text)
- Buttons adapt to theme
- Stats text remains white for contrast

#### About Section
```jsx
className="bg-white dark:bg-zinc-950"
```
- White background in light mode
- Near-black background in dark mode
- Text colors automatically adjust

#### Menu Section
```jsx
className="bg-gray-50 dark:bg-zinc-900"
```
- Light gray in light mode
- Dark gray in dark mode
- Cards: `bg-white dark:bg-zinc-800`

#### Chef Section
```jsx
className="bg-white dark:bg-zinc-950"
```
- Alternates with other sections
- Image overlays remain consistent

#### Gallery Section
```jsx
className="bg-gray-50 dark:bg-zinc-900"
```
- Matches menu section styling
- Lightbox overlay is always dark

#### Testimonials Section
```jsx
className="bg-gray-50 dark:bg-zinc-900"
```
- Cards: `bg-white dark:bg-zinc-800`
- Quote icons adapt to theme

#### Reservation Section
```jsx
className="bg-white dark:bg-zinc-950"
```
- Form card: `bg-white dark:bg-zinc-800`
- Input fields use theme variables

#### Footer
```jsx
className="bg-gray-900 dark:bg-black"
```
- Always dark, but darker in dark mode
- Text remains white for contrast

### Navigation
**File**: `src/app/components/layout/StickyNav.tsx`

- Transparent when at top
- Gains background on scroll: `bg-white/90 dark:bg-zinc-900/90`
- Text colors adapt: `text-gray-700 dark:text-gray-300`
- Theme toggle button with Sun/Moon icons

## Usage

### Toggle Theme
```tsx
import { useTheme } from "../contexts/ThemeContext";

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
```

### Set Specific Theme
```tsx
const { setTheme } = useTheme();

// Set to light
setTheme("light");

// Set to dark
setTheme("dark");
```

### Check Current Theme
```tsx
const { theme } = useTheme();

if (theme === "dark") {
  // Do something for dark mode
}
```

## Color Palette

### Light Mode
- **Primary**: Violet-500 to Purple-600 gradient
- **Background**: White (#ffffff)
- **Surface**: Gray-50 (#f9fafb)
- **Text**: Gray-900 (#111827)
- **Muted**: Gray-600 (#4b5563)

### Dark Mode
- **Primary**: Violet-500 to Purple-600 gradient (same)
- **Background**: Zinc-950 (#0a0a0a)
- **Surface**: Zinc-900 (#18181b)
- **Text**: Gray-50 (#f9fafb)
- **Muted**: Gray-400 (#9ca3af)

## Best Practices

### 1. Always Use Dark Mode Classes
```jsx
// ✅ Good
<div className="bg-white dark:bg-zinc-950">

// ❌ Bad
<div className="bg-white">
```

### 2. Use Theme Variables for Custom Colors
```css
/* ✅ Good */
background-color: var(--background);
color: var(--foreground);

/* ❌ Bad */
background-color: #ffffff;
color: #000000;
```

### 3. Test Both Themes
Always test your components in both light and dark modes to ensure proper contrast and readability.

### 4. Gradient Backgrounds
Gradients (like the hero) can remain the same in both themes if they provide sufficient contrast:
```jsx
<div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700">
  <p className="text-white">Always readable</p>
</div>
```

## Accessibility

### Contrast Ratios
All color combinations meet WCAG AA standards:
- Light mode: 4.5:1 minimum for normal text
- Dark mode: 4.5:1 minimum for normal text
- Large text: 3:1 minimum in both modes

### System Preference Detection
The theme automatically respects the user's system preference on first visit:
```javascript
window.matchMedia('(prefers-color-scheme: dark)').matches
```

### Persistence
User's theme choice is saved to localStorage and persists across sessions.

## Browser Support
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Theme Not Applying
1. Check if `ThemeProvider` wraps your app
2. Verify `theme.css` is imported
3. Check browser console for errors
4. Clear localStorage and refresh

### Flash of Wrong Theme
The inline script in `index.html` should prevent this. If you see a flash:
1. Verify the script is present in `index.html`
2. Check that it runs before React loads
3. Ensure localStorage key matches: `savoria-theme`

### Colors Not Changing
1. Verify you're using `dark:` prefix
2. Check that CSS variables are defined in `theme.css`
3. Ensure Tailwind is processing the dark mode classes

## Testing

### Manual Testing
1. Toggle theme using the button in navigation
2. Refresh page - theme should persist
3. Open in incognito - should match system preference
4. Change system theme - new tabs should match

### Automated Testing
```typescript
// Test theme toggle
const { result } = renderHook(() => useTheme());
expect(result.current.theme).toBe('light');
act(() => result.current.toggleTheme());
expect(result.current.theme).toBe('dark');
```

## Performance
- ✅ No flash of unstyled content (FOUC)
- ✅ Theme applied before React hydration
- ✅ CSS variables for instant theme switching
- ✅ localStorage for fast retrieval
- ✅ No external theme libraries needed

## Summary
The theme system is fully functional with:
- ✅ Light and dark modes
- ✅ System preference detection
- ✅ localStorage persistence
- ✅ No flash of unstyled content
- ✅ All components support both themes
- ✅ Smooth transitions
- ✅ Mobile browser support
- ✅ Accessibility compliant
