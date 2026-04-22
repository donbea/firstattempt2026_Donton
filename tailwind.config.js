/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#0A1628', 800: '#0D1F3C', 700: '#122348', 600: '#1A3060', 500: '#1E3A7A' },
        gold: { 400: '#D4A843', 300: '#E8C264', 200: '#F0D080' },
        blue: { knight: '#1A3060' }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        script: ['Dancing Script', 'cursive']
      }
    }
  },
  plugins: []
}
