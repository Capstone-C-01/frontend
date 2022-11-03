/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        paleblue: '#F4F7FE',
        'main-green': '#1BA97F',
        'off-gray': '#828282',
        fadeblack: '#333333',
        lightblue: '#56CCF2'
      }
    },
    fontFamily: {
      poppins: 'var(--poppins)',
      'poppins-medium': 'var(--poppins-medium)',
      'poppins-bold': 'var(--poppins-bold)',
      'dm-sans': 'var(--dm-sans)',
      'dm-sans-medium': 'var(--dm-sans-medium)',
      'dm-sans-bold': 'var(--dm-sans-bold)'
    }
  },
  plugins: []
};
