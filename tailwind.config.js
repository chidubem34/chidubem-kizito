/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Raleway']
      },
      backgroundImage: {
        'primary': "url('./src/assets/images/stars.jpg')"
      }
    },
  },
  plugins: [],
}

