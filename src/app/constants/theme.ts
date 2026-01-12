// Color Palette - Using CSS Custom Properties for centralized color management
// To change colors site-wide, update values in /src/styles/theme.css
export const COLORS = {
  // Primary Colors
  main: 'var(--color-main)',  // #6B1F23 - メインカラー（濃いエンジ色）
  mainLight: 'var(--color-main-light)',  // #8C272E - メインカラー（明るいエンジ色）
  secondary: 'var(--color-secondary)',  // #1A2B48 - セカンダリカラー（ネイビーブルー）
  warmBeige: 'var(--color-warm-beige)',  // #E8E2D6 - ウォームベージュ
  offWhite: 'var(--color-off-white)',  // #F9F9F7 - オフホワイト
  buttonPrimary: 'var(--color-button-primary)',  // #5DADE2 - ボタン用の空色
  buttonPrimaryHover: 'var(--color-button-primary-hover)',  // #85C1E9 - ボタンホバー時
  
  // Utility Colors
  white: 'var(--color-white)',  // #FFFFFF
  black: 'var(--color-black)',  // #000000
  
  // Legacy aliases for backward compatibility (deprecated - use above instead)
  navyBlue: 'var(--color-main)',
  heritageRed: 'var(--color-main-light)',
  mainMaroon: 'var(--color-main)',
  skyBlue: 'var(--color-button-primary)',
  skyBlueHover: 'var(--color-button-primary-hover)',
} as const;

// Typography
export const FONTS = {
  serif: "'Zen Old Mincho', serif",
  sans: "'Noto Sans JP', sans-serif",
  script: "'Damion', cursive",
} as const;

// Font Sizes
export const FONT_SIZES = {
  xs: '12px',
  sm: '13px',
  base: '14px',
  md: '15px',
  lg: '16px',
  xl: '18px',
  '2xl': '20px',
  '3xl': '24px',
  '4xl': '26px',
  '5xl': '28px',
  '6xl': '32px',
  '7xl': '42px',
} as const;

// Spacing
export const SPACING = {
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '40px',
  '3xl': '48px',
  '4xl': '60px',
} as const;

// Border Radius
export const BORDER_RADIUS = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  full: '9999px',
} as const;

// Shadows
export const SHADOWS = {
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  md: '0 4px 6px rgba(0,0,0,0.1)',
  lg: '0 10px 15px rgba(0,0,0,0.1)',
  xl: '0 20px 25px rgba(0,0,0,0.15)',
  text: '0 6px 16px rgba(0,0,0,0.95), 0 3px 6px rgba(0,0,0,0.9)',
} as const;

// Transitions
export const TRANSITIONS = {
  fast: '0.15s ease',
  base: '0.3s ease',
  slow: '0.5s ease',
} as const;

// Breakpoints (for reference, we use Tailwind's responsive classes)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Aspect Ratios
export const ASPECT_RATIOS = {
  square: '1/1',
  video: '16/9',
  portrait: '3/4',
  landscape: '4/3',
} as const;