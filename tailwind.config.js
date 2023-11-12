/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'main': ['Poppins', 'ui-sans-serif']
    },
    colors: {
      transparent: 'transparent',
      'primary': '#1f3e72',
      'secondary': 'rgba(255, 255, 255, 0.78)',
      'black': '#131110',
      'blue': {
        300: "rgba(136, 160, 255, 0.46)",
        600: "#2563eb",
        800: "#4066ff"
      },
      'light-blue': '#eeeeff',
      'white': '#fff',
      'orange': {
        300: '#fdba74',
        400: '#fb923c',
        600: '#ea580c'
      },
      'gray':{
        50: "rgba(128, 128, 128, 0.143)",
        100: 'rgba(255, 255, 255, .522)',
        200: '#6b7280',
        300: '#9ca3af'
      },
    },
    boxShadow: {
      '3xl': '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
    }
  },
  plugins: [],
}

