import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        'cmg-blue':       '#1B3D8F',
        'cmg-blue-light': '#2D5BC4',
        'cmg-red':        '#C0392B',
        'cmg-red-light':  '#E74C3C',
        'cmg-navy':       '#0D2357',
        'cmg-gold':       '#D4A843',
        'cmg-gold-deep':  '#B8892A',
        'cmg-gold-light': '#F0D898',
        'cmg-cream':      '#FAF8F3',
        'cmg-cream-dark': '#F2EDE3',
        'cmg-ink':        '#1A1826',
        'cmg-slate':      '#5A6478',
        'cmg-warm-white': '#F8F9FC',
        'cmg-light-blue': '#F0F4FF',
        'cmg-text':       '#1A1826',
      },
      fontFamily: {
        heading:    ['"Playfair Display"', 'Georgia', 'serif'],
        body:       ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans:       ['"DM Sans"', 'system-ui', 'sans-serif'],
        cormorant:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card':    '0 4px 24px rgba(27,61,143,0.08)',
        'hover':   '0 12px 40px rgba(27,61,143,0.18)',
        'hero':    '0 24px 80px rgba(13,35,87,0.35)',
        'gold':    '0 4px 24px rgba(184,137,42,0.20)',
        'premium': '0 4px 6px -1px rgba(13,35,87,0.06), 0 16px 48px -4px rgba(13,35,87,0.12)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'gradient-hero':      'linear-gradient(to right, rgba(13,35,87,0.97) 0%, rgba(13,35,87,0.90) 25%, rgba(13,35,87,0.65) 50%, transparent 100%)',
        'gradient-navy-gold': 'linear-gradient(135deg, #0d2357 0%, #1b3d8f 65%, #b8892a 100%)',
        'gradient-blue-red':  'linear-gradient(135deg, #0d2357 0%, #1b3d8f 55%, #c0392b 100%)',
      },
    },
  },
  plugins: [],
}
export default config
