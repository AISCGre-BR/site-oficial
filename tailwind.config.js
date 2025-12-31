/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './docs/**/*.{md,vue,js,ts,jsx,tsx}',
    './docs/.vitepress/**/*.{md,vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['EB Garamond', 'Times New Roman', 'serif'],
        sans: ['Source Sans 3', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
      },
      colors: {
        parchment: '#f5f1e8',
        ink: '#2b2117',
        'ink-soft': '#3c2d22',
        muted: '#66615b',
        accent: '#7a1f2b',
        'accent-soft': 'rgba(122, 31, 43, 0.08)',
        gold: '#c9a14a'
      }
    }
  },
  plugins: []
};
