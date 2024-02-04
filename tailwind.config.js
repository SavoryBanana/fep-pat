/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx", "./src/*/*.jsx"],
  theme: {
    extend: {
      colors: {
        'terminal-theme' : '#1E1E1E',
        'terminal-tab' : '#36363B',
        'header' : '#121212'
      }
    },
  },
  plugins: [],
}

