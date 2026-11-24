/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f4efe6',
        'cream-dark': '#e8e1d4',
        ink: '#1a1a1a',
        'ink-soft': '#2a2a2a',
        magenta: '#e91e63',
        'magenta-dark': '#c2185b',
        yellow: '#ffd54f',
        'yellow-dark': '#ffb300',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
