/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        serif:   ['Playfair Display', 'serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      colors: {
        accent:              '#8b35c0',
        'accent-2':          '#c062f0',
        'accent-light':      '#f5edff',
        fg:                  '#0d0b14',
        'fg-2':              '#2a1a3e',
        muted:               '#8a7a9a',
        'bg-2':              '#f1ebff',
        'bg-3':              '#ede5f8',
        'photo-placeholder': '#1e0d38',
      },
      boxShadow: {
        'purple':    '0 8px 32px rgba(139,53,192,0.18)',
        'purple-sm': '0 2px 12px rgba(139,53,192,0.10)',
        'badge':     '0 4px 16px rgba(139,53,192,0.35)',
        'modal':     '0 32px 80px rgba(13,11,20,0.30)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
