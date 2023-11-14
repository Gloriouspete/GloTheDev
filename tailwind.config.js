/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './build/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mycolor: '#753ff6',
        bluecolor: '#11053b',
        sidecolor:'#1a2035'
      },
      fontFamily: {
        inter: ['inter', 'sans'],
        intermedium: ['inter-medium', 'sans'],
        interbold: ['inter-bold', 'sans']
      }
    },
  },
  plugins: [],
}

