/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         animation: {
            fadeIn: 'fadeIn .15s ease-in',
         },
         keyframes: {
            fadeIn: {
               from: { opacity: 0 },
               to: { opacity: 1 },
            },
         },
         screens: {
            360: '360px',
            420: '420px',
            550: '550px',
            785: '785px',
            870: '870px',
         },
      },
   },
   plugins: [],
}
