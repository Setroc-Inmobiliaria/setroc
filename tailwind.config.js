/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    // Añade más rutas o patrones según sea necesario
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '967px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'afacad': ['Afacad', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],

      },
      colors: {
        p1: '#91D1C5',
        p2: '#42838A',
        p3: '#276296',
        p4: '#67ADD4',
        p5: '#B2D3E7',
        p6: '#D9DFEC',
        p7: '#1565C0'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

