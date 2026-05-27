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
        'cmg-blue':       '#003399',
        'cmg-blue-light': '#1A4BAA',
        'cmg-navy':       '#001A5E',
        'cmg-red':        '#D52B1E',
        'cmg-red-light':  '#E54A40',
        'cmg-gold':       '#B8890A',
        'cmg-gold-deep':  '#996A00',
        'cmg-gold-light': '#F0E0B0',
        'cmg-text':       '#1A2744',
        'cmg-ink':        '#1A2744',
        'cmg-slate':      '#4B5975',
        'cmg-light':      '#F5F5F4',
        'cmg-light-blue': '#F5F5F4',
        'cmg-cream':      '#FAFAF9',
        'cmg-cream-dark': '#EFEEEB',
        'cmg-border':     '#E4E4E0',
        'cmg-warm-white': '#F8FAFC',
      },
      fontFamily: {
        heading: ['Figtree', 'system-ui', 'sans-serif'],
        body:    ['Figtree', 'system-ui', 'sans-serif'],
        sans:    ['Figtree', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card':       '0 1px 3px rgba(0,48,135,0.05), 0 4px 14px rgba(0,48,135,0.07)',
        'card-hover': '0 4px 14px rgba(0,48,135,0.10), 0 12px 28px rgba(0,48,135,0.10)',
        'hero':       '0 24px 60px rgba(0,26,94,0.30)',
        'premium':    '0 2px 8px rgba(0,48,135,0.06), 0 12px 40px rgba(0,48,135,0.10)',
        'gold':       '0 4px 20px rgba(184,137,10,0.15)',
        'blue':       '0 4px 20px rgba(0,48,135,0.28)',
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
