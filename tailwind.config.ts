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
        'cmg-warm-white': '#F8F9FC',
        'cmg-slate':      '#64748B',
        'cmg-light-blue': '#F0F4FF',
        'cmg-text':       '#1A1A2E',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card':  '0 4px 24px rgba(27,61,143,0.08)',
        'hover': '0 12px 40px rgba(27,61,143,0.18)',
        'hero':  '0 24px 80px rgba(13,35,87,0.35)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}
export default config
