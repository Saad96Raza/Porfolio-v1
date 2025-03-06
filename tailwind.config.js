/** @type {import('tailwindcss').Config} */
import  fluid ,{extract,screens, fontSize } from 'fluid-tailwind'

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens,
    fontSize,
    container: {
      center: true,
    },

    extend: {   
      fontSize: {      
        /** font size 104px */

        'f-s-104': ['6.5rem', { lineHeight: '6.3rem' }], 
        'f-s-74': ['4.625rem', { lineHeight: '4.63rem' }],

        /** font size 72 */

        'f-s-72': ['4.5rem', { lineHeight: '4.2rem' }], 
        'f-s-56': ['3.5rem', { lineHeight: '3.5rem' }],

        /** font size 40 */
        'f-s-40': ['2.5rem', { lineHeight: '2.2rem' }], 
        'f-s-32': ['3rem', { lineHeight: '2.4rem' }], 
      },
      
    },
   
   
  },
  plugins: [
    fluid,

  ],
  corePlugins: {
    preflight: true, 
  },
};
