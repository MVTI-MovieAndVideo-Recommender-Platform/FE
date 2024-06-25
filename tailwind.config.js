/** @type {import('tailwindcss').Config} */

module.exports = {
   darkMode: 'class', // or 'media' or 'class'
   content: [
     "./src/**/*.{js,jsx}",
   ],

   theme: {
      extend: {
          backdropBlur: {
            'xl': '30px',
          },
          boxShadow: {
            'custom-light': '0px 0px 30px rgba(227, 228, 237, 0.37)',
          },
          borderColor: {
            'custom-light': 'rgba(255, 255, 255, 0.18)',
          },
        },
     },

     variants: {
      extend: {
        backdropBlur: ['responsive'],
      },
    },
    plugins: [],
};