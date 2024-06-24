/** @type {import('tailwindcss').Config} */

module.exports = {
   darkMode: 'class', // or 'media' or 'class'
   content: [
     "./src/**/*.{js,jsx}",
   ],
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [
      require("daisyui"),
   ],
 }