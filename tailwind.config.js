/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: '#000102', 
      }
    },
  },
  plugins: [],
}

